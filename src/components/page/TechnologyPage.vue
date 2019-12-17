<template>
  <div>
    <div class="row">
      <span class="breadcrumb">您现在的位置:</span>
      <b-breadcrumb :items="breads" class="breadcrumb"></b-breadcrumb>
    </div>

    <b-row>
      <div class="col-md-8" ref="list">
        <section v-for="article in technologyArticles" :key="article.articleId" class="mb10">
          <ArticleSummary :article="article" />
        </section>
      </div>
    </b-row>

    <b-row class="d-flex justify-content-center">
      暂时没有更多内容哦，去<b-link :to="{ path: '/home'}">首页</b-link>看看吧。
    </b-row>
  </div>
</template>

<script>
import ArticleSummary from '../common/ArticleSummary.vue'

import * as articleTypes from '../../store/types/articleTypes.js'
import * as tabTypes from '../../store/types/tabTypes.js'
export default {
  components: {
    ArticleSummary
  },
  data () {
    return {
      breads: [
        {
          text: '首页',
          to: { path: '/' }
        },
        {
          text: '技术',
          active: true
        }
      ]
    }
  },
  computed: {
    technologyArticles () {
      return this.$store.state.articles.filter(article => {
        return article.classification === 'technology'
      })
    }
  },
  mounted () {
    if (
      this.$store.state.articles == null ||
      this.$store.state.articles.length <= 0
    ) {
      this.$store.dispatch(articleTypes.GETLASTESTARTICLES, {
        limit: 10
      })
    }

    this.$store.commit(tabTypes.CHANGETABPAGE, { pageName: 'technology' })

    this.$nextTick(function () {
      window.addEventListener('scroll', this.handleScroll, true)
    })
  },
  destroyed () {
    // 移除滚动事件
    window.removeEventListener('scroll', this.handleScroll, true)
  },
  methods: {
    handleScroll (e) {
      if (!this.$store.getters.getArticlesOver) {
        if (!this.$store.state.isLoading) {
          var top = document.body.scrollTop || document.documentElement.scrollTop || window.pageXOffset
          if (top + window.innerHeight > this.$refs.list.scrollHeight) {
            this.$store.dispatch(articleTypes.GETNEXTARTICLES, {
              id: this.$store.getters.lastid,
              limit: 10
            })
          }
        }
      }
    }
  }
}
</script>

<style scoped>
</style>
