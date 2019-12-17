import * as articleTypes from '../types/articleTypes'

import Vue from 'vue'

export default {
  [articleTypes.GETLASTESTARTICLES] ({commit, state}, params) {
    state.isLoading = true
    Vue.axios.get('/articles', { params: params }).then(function (response) {
      state.isLoading = false

      commit(articleTypes.GETLASTESTARTICLES, {
        totalArticles: response.data.total,
        articles: response.data.results
      })
    })
  },
  [articleTypes.GETNEXTARTICLES] ({commit, state}, params) {
    state.isLoading = true
    Vue.axios.get('/articles', { params: params }).then(function (response) {
      state.isLoading = false

      commit(articleTypes.GETNEXTARTICLES, {
        totalArticles: response.data.total,
        articles: response.data.results
      })
    })
  },
  [articleTypes.GETARTICLE] ({commit, state}, payload) {
    Vue.axios.get('/articles/' + payload.articleId).then(function (response) {
      commit(articleTypes.GETARTICLE, {
        article: response.data.result
      })
    })
  },
  [articleTypes.GETARCHIVES] ({commit}) {
    Vue.axios.get('/archives').then(function (response) {
      commit(articleTypes.GETARCHIVES, {
        archives: response.data.result
      })
    })
  }
}
