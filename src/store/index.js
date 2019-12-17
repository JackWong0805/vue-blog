import Vuex from 'vuex'
import Vue from 'vue'
import tabMutations from './mutations/tabMutations'
import articleMutations from './mutations/articleMutations'
import articleActions from './actions/articleActions'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    currentTabPage: 'home', // 当前的导航条项目
    isLoading: false, // 正在拉取文章
    totalArticles: -1, // 总文章数
    articles: [], // 获取到的所有文章
    archivesList: [], // 归档
    article: {}, // 当前正在浏览的文章
    hasPersimission: false, // 是否有进入后台的权限
    token: ''
  },
  mutations: {
    ...tabMutations,
    ...articleMutations
  },
  actions: {
    ...articleActions
  },
  getters: {
    // 获取文章完毕
    getArticlesOver: (state) => {
      return state.articles.length >= state.totalArticles
    },
    lastid: (sate) => {
      return sate.articles.reduce((p, v) => p._id < v._id ? p : v)._id
    }
  }
})

export default store
