import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import apiConfig from '../../config/api.config'
import token from '../utils/token'
import store from '../store/index'
import router from '../router/index.js'

Vue.use(VueAxios, axios)
axios.defaults.timeout = 5000
// 发布时去除请求中的api
axios.defaults.baseURL = apiConfig.baseURL

// http request 拦截器
axios.interceptors.request.use(
  config => {
    let jwtToken = token.getJwtToken()
    if (jwtToken) {
      config.headers.Authorization = jwtToken
    } else if (store.state.token && store.state.token !== '') {
      config.headers.Authorization = store.state.token
    }
    return config
  },
  err => {
    return Promise.reject(err)
  }
)

// http response 拦截器
axios.interceptors.response.use(
  response => {
    return response
  },
  error => {
    if (error && error.response) {
      if (error.response.status === 403) {
        console.log('--------------->>>拒绝访问，没有权限(没有token)')
        token.removeJwtToken()

        // 跳转到首页
        router.push('/')
      }
    }
    // return Promise.reject(error)
    return error
  }
)
