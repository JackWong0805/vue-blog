import * as articleTypes from '../types/articleTypes'
export default {
  [articleTypes.GETLASTESTARTICLES] (state, payload) {
    state.totalArticles = payload.totalArticles
    state.articles = payload.articles
  },
  [articleTypes.GETNEXTARTICLES] (state, payload) {
    state.totalArticles = payload.totalArticles
    for (var i = 0; i < payload.articles.length; i++) {
      state.articles.push(payload.articles[i])
    }
  },
  [articleTypes.GETARTICLE] (state, payload) {
    state.article = payload.article
  },
  [articleTypes.GETARCHIVES] (state, payload) {
    state.archivesList = payload.archives
  }
}
