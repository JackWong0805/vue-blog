<template>
  <!-- 发布文章 -->
  <b-container fluid class="container pl-4 pr-4">
    <div  class="b-card shadow mt-4 mb-4 border">
      <div class="b-card-header py-3">
        <h6>写博客</h6>
      </div>

      <div class="b-card-body">
        <b-form-group
          id="title-group"
          label-cols-sm="2"
          label-cols-lg="1"
          label="题目"
          label-for="title"
        >
          <b-form-input id="title" v-model="article.title"></b-form-input>
        </b-form-group>

        <b-form-group
          id='summary-group'
          label-cols-sm="2"
          label-cols-lg="1"
          label='概要'
          label-for='summary'
        >
          <b-form-textarea
              id="summary"
              v-model="article.summary"
              placeholder="blablabla, whatever you think..."
              rows="2"
          ></b-form-textarea>
        </b-form-group>

        <b-form-group
          id='classification-group'
          label-cols-sm="2"
          label-cols-lg="1"
          label='分类'
          label-for='classification'
        >
          <b-form-select v-model="article.classification" :options="options">
            <template v-slot:first>
              <option :value="null" disabled>-- 请选择分类 --</option>
            </template>
          </b-form-select>
        </b-form-group>

        <b-form-group
          id='tag-group'
          label-cols-sm="2"
          label-cols-lg="1"
          label='标签'
          label-for='tags'
          class="tags-input"
        >
          <input-tag element-id="tags"
            v-model="article.tags"
            :existing-tags="existingTags"
            :typeahead="true"
            :typeahead-always-show="true"
            :add-tags-on-space="true"
            :typeahead-hide-discard="true"
            placeholder="添加标签">
          </input-tag>
        </b-form-group>

        <mavon-editor
          v-model="article.content"
          ref="md"
          @imgAdd="$imgAdd"
          @change="change"
          style="min-height: 600px"
          codeStyle="atelier-dune-dark"
        />
        <b-row class="mt-4">
          <b-col lg='4' md='4' sm='5'>
            <b-button variant="primary" @click="saveArticle">发布博客</b-button>
          </b-col>
        </b-row>
      </div>

    </div>
  </b-container>
</template>

<script>
import Swal from 'sweetalert2'

import InputTag from '@voerro/vue-tagsinput'
import apiConfig from '../../../config/api.config'

export default {
  name: 'WriteBlog',
  data: function () {
    return {
      options: [
        {value: 'technology', text: '技术'},
        {value: 'life', text: '生活'}
      ],
      article: {
        title: '',
        classification: 'null',
        tags: [],
        summary: '',
        content: ''
      },
      existingTags: []
    }
  },
  components: {
    InputTag
  },
  mounted () {
    this.axios({
      methods: 'get',
      url: '/tags'
    }
    ).then(response => {
      this.existingTags = response.data
    })
  },
  beforeRouteLeave (to, from, next) {
    // 离开页面 确认保存？ todo
    next()
  },
  methods: {
    // 将图片上传到服务器，返回地址替换到md中
    $imgAdd (pos, $file) {
      var formdata = new FormData()
      formdata.append('image', $file)

      this.axios({
        url: '/uploads',
        method: 'post',
        data: formdata,
        headers: { 'Content-Type': 'multipart/form-data' }
      }).then(response => {
        this.$refs.md.$img2Url(pos, apiConfig.baseURL + response.data.url)
      })
    },
    change (value, render) {
      // render 为 markdown 解析后的结果
      this.article.content = render
    },
    // 清空文章
    clearArticle () {
      this.article = {
        title: '',
        classification: 'null',
        tag: [],
        summary: '',
        content: ''
      }
    },
    // 验证文章有效性
    verifyArticle () {
      if (this.article.title.length <= 0) {
        Swal.fire({
          title: '请输入题目!',
          icon: 'warning'
        })
        return false
      }

      if (this.article.summary.length <= 0) {
        Swal.fire({
          title: '请书写概要!',
          icon: 'warning'
        })
        return false
      }

      if (this.article.classification.length <= 0) {
        Swal.fire({
          title: '请选择分类!',
          icon: 'warning'
        })
        return false
      }

      if (this.article.content.length <= 0) {
        Swal.fire({
          title: '请书写内容!',
          icon: 'warning'
        })
        return false
      }

      return true
    },
    saveArticle () {
      if (this.verifyArticle()) {
        let tags = []
        for (var i = 0; i < this.article.tags.length; i++) {
          tags.push(this.article.tags[i].value)
        }

        let tempArticle = {}
        for (var key in this.article) {
          if (key === 'tags') {
            tempArticle[key] = tags
          } else {
            tempArticle[key] = this.article[key]
          }
        }

        this.axios({
          method: 'post',
          url: '/articles',
          data: tempArticle
        }).then(response => {
          if (response.data.success) {
            Swal.fire({
              title: '发布博客成功！',
              icon: 'success',
              showCloseButton: false,
              showCancelButton: true,
              cancelButtonText: '再写一篇',
              confirmButtonText: '去博客管理',
              // cancelButtonColor: '#3f0',
              // confirmButtonColor: '#d33',
              onBeforeOpen: dom => {
                // maveon-editor的z-index是1500，而sweetalert2的默认z-index是1060
                // 所以这里强制修改
                dom.parentNode.style.zIndex = 9999
              }
            }).then((result) => {
              if (result.value) {
                this.$router.push('/admin/bm')
              } else if (result.dismiss === Swal.DismissReason.cancel) {
                this.clearArticle()
              }
            })
          } else {
            Swal.fire({
              title: '发布博客失败！',
              text: '快去看看是不是服务器挂啦...',
              icon: 'error'
            })
          }
        })
      }
    }
  }
}
</script>
<style scoped>

</style>
