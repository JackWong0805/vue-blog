import Vue from 'vue'
import './api/axios'
import 'babel-polyfill'
// vuex
import store from './store/index.js'
// vue-router路由
import router from './router/index.js'

// mavon-editor
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'

import './assets/css/base.css'
import './assets/css/@voerro/vue-tagsinput.css'

import token from './utils/token'
import App from './APP.vue'

Vue.use(mavonEditor)

Vue.config.productionTip = true

// 使用钩子函数对路由进行权限跳转
router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} | 老王个人博客`
  if (to.meta.requireAuth) {
    if (store.state.hasPresimission === true) {
      next()
    } else {
      token.verify(result => {
        if (result) {
          // 验证通过
          store.state.hasPresimission = true
          next()
        } else {
          next('/login')
        }
      })
    }
  } else {
    // 简单的判断IE10及以下不进入富文本编辑器，该组件不兼容
    if (navigator.userAgent.indexOf('MSIE') > -1 && to.path === '/editor') {
      Vue.prototype.$alert('vue-quill-editor组件不兼容IE10及以下浏览器，请使用更高版本的浏览器查看', '浏览器不兼容通知', {
        confirmButtonText: '确定'
      })
    } else {
      if (to.fullPath === '/login') {
        token.verify(result => {
          if (result) {
            // 本地存储有登录信息,直接进入管理页面
            store.state.hasPresimission = true
            next('/admin')
          } else {
            next()
          }
        })
      } else {
        next()
      }
    }
  }
})

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  template: '<App/>',
  store,
  router,
  components: {
    App
  }
})
