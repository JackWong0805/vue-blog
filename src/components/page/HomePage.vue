<template>
  <div class="row">
    <div class="col-md-10" ref="list">
      <TechnologyGraph class="mb10" />

      <section v-for="article in articles" :key="article.articleId" class="mb10">
        <ArticleSummary :article="article" />
      </section>

      <div class="d-flex justify-content-center mb-3" v-if="isLoading">
          <b-spinner label="Loading..." block></b-spinner>
          <strong>加载中...</strong>
      </div>
    </div>
  </div>
</template>

<script>
import TechnologyGraph from '../common/TechnologyGraph.vue'
import ArticleSummary from '../common/ArticleSummary.vue'

import * as articleTypes from '../../store/types/articleTypes.js'
import * as tabTypes from '../../store/types/tabTypes.js'

export default {
  components: {
    TechnologyGraph,
    ArticleSummary
  },
  data () {
    return {
    }
  },
  computed: {
    isLoading () {
      return this.$store.state.isLoading
    },
    articles () {
      return this.$store.state.articles
    }
  },
  mounted () {
    this.$store.dispatch(articleTypes.GETLASTESTARTICLES, { limit: 10 })
    this.$store.commit(tabTypes.CHANGETABPAGE, { pageName: 'home' })

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
      if (!this.$store.getters.getArticlesOver && !this.isLoading) {
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
</script>

<style scoped>
</style>
