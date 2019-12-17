<template>
  <div class="page-top">
      <nav-bar-component :show-searchbar="false"/>
      <div class="container">
        <router-view/>
      </div>
      <back-to-top bottom="50px" right="50px">
          <i class="scrollToTop"></i>
      </back-to-top>
    <footer-component />
  </div>
</template>

<script>
import NavBarComponent from '../common/NavBarComponent.vue'
import FooterComponent from '../common/FooterComponent.vue'
import BackToTop from 'vue-backtotop'

export default {
  name: 'VisitorPage',
  components: {
    NavBarComponent,
    FooterComponent,
    BackToTop
  }
}
</script>

<style scoped>
.page-top{
    padding-top: 80px;
}

.scrollToTop {
  width: 40px;
  height: 40px;
  display: block;
  background: url('../../assets/img/top.png')
}
</style>
