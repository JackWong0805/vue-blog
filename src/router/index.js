import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/',
      component: () => import(/* webpackChunkName: "home" */ '../components/page/VisitorPage.vue'),
      meta: { title: '自述文件' },
      children: [
        {
          path: 'home',
          component: () => import(/* webpackChunkName: "home" */ '../components/page/HomePage.vue'),
          meta: {
            title: '首页'
          }
        },
        {
          path: 'technology',
          component: () => import(/* webpackChunkName: 'technology' */ '../components/page/TechnologyPage.vue'),
          meta: {
            title: '技术'
          }
        },
        {
          path: 'life',
          component: () => import(/* webpackChunkName: 'life' */ '../components/page/LifePage.vue'),
          meta: {
            title: '生活'
          }
        },
        {
          path: 'archive',
          name: 'ArchivePage',
          component: () => import(/* webpackChunkName: 'archive' */ '../components/page/ArchivePage.vue'),
          meta: {
            title: '归档'
          }
        },
        {
          path: 'blog',
          name: 'BlogPage',
          component: () => import(/* webpackChunkName: 'blog' */ '../components/page/BlogPage.vue'),
          meta: {
            title: '文章'
          }
        },
        {
          path: 'about',
          name: 'AboutPage',
          component: () => import(/* webpackChunkName: 'about' */ '../components/page/AboutPage.vue'),
          meta: {title: '关于'}
        },
        {
          path: '404',
          component: () => import(/* webpackChunkName: '404' */ '../components/page/404.vue'),
          meta: {title: '404'}
        }
      ]
    },
    {
      path: '/login',
      component: () => import(/* webpackChunkName: "login" */ '../components/page/Login.vue'),
      meta: { title: '登录' }
    },
    {
      path: '/admin',
      redirect: '/admin/db'
    },
    {
      path: '/admin',
      component: () => import(/* webpackChunkName: "admin" */ '../components/page/AdminPage.vue'),
      meta: { title: '后台' },
      children: [
        {
          path: 'db',
          component: () => import(/* webpackChunkName: "admin" */ '../components/page/Dashboard.vue'),
          meta: {
            title: '后台首页',
            requireAuth: true
          }
        },
        {
          path: 'bm',
          component: () => import(/* webpackChunkName: "admin" */ '../components/page/BlogManagement.vue'),
          meta: {
            title: '博客管理',
            requireAuth: true
          }
        },
        {
          path: 'wb',
          component: () => import(/* webpackChunkName: "admin" */ '../components/page/WriteBlog.vue'),
          meta: {
            title: '写博客',
            requireAuth: true
          }
        },
        {
          path: 'eb',
          name: 'eb',
          component: () => import(/* webpackChunkName: "admin" */ '../components/page/EditBlog.vue'),
          meta: {
            title: '编辑博客',
            requireAuth: true
          }
        },
        {
          path: '',
          component: () => import(/* webpackChunkName: '404' */ '../components/page/404.vue'),
          meta: {title: '404'}
        }
      ]
    },
    {
      path: '*',
      redirect: '/404'
    }
  ]
})
