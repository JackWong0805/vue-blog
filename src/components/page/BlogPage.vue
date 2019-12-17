<template>
  <!-- Post Content Column -->
  <div>

    <div class="row" v-if="article">
      <span class="breadcrumb">您现在的位置:</span>
      <b-breadcrumb :items="breads" class="breadcrumb"></b-breadcrumb>
    </div>

    <!-- 题目 -->
    <h1 class="mt-4">{{ article.title }}</h1>
    <!-- 发表时间 -->
    <p>{{ time }}</p>

    <!-- 标签 -->
    <!-- <section>
      <b-link to="/search" class="badge badge-pill badge-dark mr-2" v-for="tag in article.tags" :key="tag">{{ tag }}</b-link>
    </section> -->

    <hr />

      <!--
       -->
    <!-- 内容 -->
    <mavon-editor
      v-model="compiledMarkdown"
      :toolbarsFlag=false
      :editable=false
      :subfield=false
      codeStyle="atelier-dune-dark"
      defaultOpen="preview"
    />
  </div>
</template>

<script>
import * as articleTypes from '../../store/types/articleTypes.js'
import dateutil from '../../utils/date'

export default {
  computed: {
    article () {
      return this.$store.state.article
    },
    time () {
      return dateutil.dateStringToShow(this.article.time)
    },
    secondBread () {
      if (this.article.classification === 'technology') {
        return {
          text: '技术',
          to: {path: '/technology'}
        }
      } else if (this.article.classification === 'life') {
        return {
          text: '生活',
          to: {path: '/life'}
        }
      } else {
        return {
          text: 'Bug',
          to: {path: '/'}
        }
      }
    },
    breads () {
      return [
        {
          text: '首页',
          to: { path: '/' }
        },
        this.secondBread,
        {
          text: ''
        }
      ]
    },
    compiledMarkdown () {
      return this.article.content ? this.article.content : ''
    }
  },
  mounted () {
    this.$store.dispatch(articleTypes.GETARTICLE, {
      articleId: this.$route.query.articleId
    })
  }
}
</script>

<style scoped>
</style>
