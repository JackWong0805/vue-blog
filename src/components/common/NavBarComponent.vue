<template>
  <div class="navbar navbar-expand-sm fixed-top navbar-dark bg-dark">
    <div class="container">
      <!-- <b-navbar-brand href="#">阿颖</b-navbar-brand> -->

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item
            to="/"
            :class="{ active: selectedPage == 'home'}"
            @click="changeTabPage('home')"
          >首页</b-nav-item>
          <b-nav-item
            to="/technology"
            :class="{ active: selectedPage == 'technology'}"
            @click="changeTabPage('technology')"
          >技术</b-nav-item>
          <b-nav-item
            to="/life"
            :class="{ active: selectedPage == 'life'}"
            @click="changeTabPage('life')"
          >生活</b-nav-item>
          <b-nav-item
            to="/archive"
            :class="{ active: selectedPage == 'archive'}"
            @click="changeTabPage('archive')"
          >归档</b-nav-item>
          <b-nav-item
            to="/about"
            :class="{ active: selectedPage == 'about'}"
            @click="changeTabPage('about')"
          >关于</b-nav-item>
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto">
          <b-link :to="{ path: 'login'}">
            <svg class="icon-user" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"  width="40" height="40">
              <path d="M512 62.08A449.92 449.92 0 1 0 961.92 512 449.92 449.92 0 0 0 512 62.08z m0 135.04a135.04 135.04 0 1 1-135.04 135.04A134.72 134.72 0 0 1 512 197.12z m0 640a323.84 323.84 0 0 1-269.76-144.96c0-89.6 179.84-138.56 269.76-138.56s268.48 48.96 269.76 138.56A323.84 323.84 0 0 1 512 835.84z" p-id="1863" fill="#ffffff"></path>
            </svg>
          </b-link>
        </b-navbar-nav>
        <!-- 搜索部分 -->
        <!-- <b-navbar-nav class="ml-auto">
            <b-nav-form>
              <b-form-input size="sm" class="mr-sm-2" placeholder="搜搜看..."></b-form-input>
              <b-button size="sm" class="my-2 my-sm-0" type="submit">搜</b-button>
            </b-nav-form>
        </b-navbar-nav>-->
      </b-collapse>
    </div>
  </div>
</template>

<script>
import * as tabTypes from '../../store/types/tabTypes.js'

export default {
  props: {
    showSearchbar: {
      requried: false,
      default: true,
      type: Boolean
    }
  },
  methods: {
    changeTabPage (page) {
      this.$store.commit(tabTypes.CHANGETABPAGE, { pageName: page })
    }
  },
  computed: {
    selectedPage () {
      return this.$store.state.currentTabPage
    }
  }
}
</script>

<style scoped>
nav {
  font-size: 16px;
  font-weight: bold;
}

.fixed-top {
  z-index: 9999;
}

.icon-user {
  width: 2rem;
}
</style>
