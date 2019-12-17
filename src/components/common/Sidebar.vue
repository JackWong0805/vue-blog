<template>
  <div>
    <ul class="navbar-nav bg-gradient sidebar sidebar-dark" id="accordionSidebar">

      <!-- Sidebar - Brand -->
      <li class="sidebar-brand d-flex align-items-center justify-content-center">
        <div class="sidebar-brand-text mx-3">Blog后台</div>
      </li>

      <!-- Divider -->
      <hr class="sidebar-divider my-0">

      <!-- Nav Item - data -->
      <li class="nav-item active">
        <b-link class="nav-link" :to="{ path: 'db'}">
          <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" >
            <path data-v-68d67528="" fill="currentColor" d="M610.5 373.3c2.6-14.1 2.6-28.5 0-42.6l25.8-14.9c3-1.7 4.3-5.2 3.3-8.5-6.7-21.6-18.2-41.2-33.2-57.4-2.3-2.5-6-3.1-9-1.4l-25.8 14.9c-10.9-9.3-23.4-16.5-36.9-21.3v-29.8c0-3.4-2.4-6.4-5.7-7.1-22.3-5-45-4.8-66.2 0-3.3.7-5.7 3.7-5.7 7.1v29.8c-13.5 4.8-26 12-36.9 21.3l-25.8-14.9c-2.9-1.7-6.7-1.1-9 1.4-15 16.2-26.5 35.8-33.2 57.4-1 3.3.4 6.8 3.3 8.5l25.8 14.9c-2.6 14.1-2.6 28.5 0 42.6l-25.8 14.9c-3 1.7-4.3 5.2-3.3 8.5 6.7 21.6 18.2 41.1 33.2 57.4 2.3 2.5 6 3.1 9 1.4l25.8-14.9c10.9 9.3 23.4 16.5 36.9 21.3v29.8c0 3.4 2.4 6.4 5.7 7.1 22.3 5 45 4.8 66.2 0 3.3-.7 5.7-3.7 5.7-7.1v-29.8c13.5-4.8 26-12 36.9-21.3l25.8 14.9c2.9 1.7 6.7 1.1 9-1.4 15-16.2 26.5-35.8 33.2-57.4 1-3.3-.4-6.8-3.3-8.5l-25.8-14.9zM496 400.5c-26.8 0-48.5-21.8-48.5-48.5s21.8-48.5 48.5-48.5 48.5 21.8 48.5 48.5-21.7 48.5-48.5 48.5zM224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm201.2 226.5c-2.3-1.2-4.6-2.6-6.8-3.9l-7.9 4.6c-6 3.4-12.8 5.3-19.6 5.3-10.9 0-21.4-4.6-28.9-12.6-18.3-19.8-32.3-43.9-40.2-69.6-5.5-17.7 1.9-36.4 17.9-45.7l7.9-4.6c-.1-2.6-.1-5.2 0-7.8l-7.9-4.6c-16-9.2-23.4-28-17.9-45.7.9-2.9 2.2-5.8 3.2-8.7-3.8-.3-7.5-1.2-11.4-1.2h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c10.1 0 19.5-3.2 27.2-8.5-1.2-3.8-2-7.7-2-11.8v-9.2z" class=""></path>
          </svg>
          <span>数据中心</span>
        </b-link>
      </li>

      <!-- Divider -->
      <hr class="sidebar-divider my-0">

      <!-- Nav Item - post-manager -->
      <li class="nav-item active">
        <b-link class="nav-link" :to="{ path: 'bm'}">
          <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path data-v-68d67528="" fill="currentColor" d="M139.61 35.5a12 12 0 0 0-17 0L58.93 98.81l-22.7-22.12a12 12 0 0 0-17 0L3.53 92.41a12 12 0 0 0 0 17l47.59 47.4a12.78 12.78 0 0 0 17.61 0l15.59-15.62L156.52 69a12.09 12.09 0 0 0 .09-17zm0 159.19a12 12 0 0 0-17 0l-63.68 63.72-22.7-22.1a12 12 0 0 0-17 0L3.53 252a12 12 0 0 0 0 17L51 316.5a12.77 12.77 0 0 0 17.6 0l15.7-15.69 72.2-72.22a12 12 0 0 0 .09-16.9zM64 368c-26.49 0-48.59 21.5-48.59 48S37.53 464 64 464a48 48 0 0 0 0-96zm432 16H208a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h288a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-320H208a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h288a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16zm0 160H208a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h288a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16z" class=""></path>
          </svg>
          <span>博客管理</span>
        </b-link>
      </li>

      <!-- Divider -->
      <hr class="sidebar-divider my-0">

      <!-- Nav Item - post-manager -->
      <li class="nav-item active">
        <b-link  class="nav-link" :to="{ path: 'wb'}">
          <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
            <path data-v-68d67528="" fill="currentColor" d="M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z" class=""></path>
          </svg>
          <span>写博客</span>
        </b-link>
      </li>

      <!-- Divider -->
      <hr class="sidebar-divider my-0">
        <li class="nav-item active">
        <b-link class="nav-link" :to="{ path: '/home'}" @click="logOut">
          <svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"  width="32" height="32">
            <path d="M170.666667 768h85.333333v85.333333h512V170.666667H256v85.333333H170.666667V128a42.666667 42.666667 0 0 1 42.666666-42.666667h597.333334a42.666667 42.666667 0 0 1 42.666666 42.666667v768a42.666667 42.666667 0 0 1-42.666666 42.666667H213.333333a42.666667 42.666667 0 0 1-42.666666-42.666667v-128z m85.333333-298.666667h298.666667v85.333334H256v128l-213.333333-170.666667 213.333333-170.666667v128z" p-id="3300" fill="#ffffff"></path>
          </svg>
          <span>退出登录</span>
        </b-link>
      </li>
    </ul>
    <!-- End of Sidebar -->
  </div>
</template>

<script>
import token from '../../utils/token'
export default {
  name: 'Sidebar',
  methods: {
    logOut() {
      this.$store.state.hasPresimission = false
      token.removeJwtToken()
    }
  }
}
</script>

<style scoped>

@media (min-width: 768px) {
  .sidebar {
    width: 14rem!important;
  }
}

.sidebar {
    width: 6.5rem;
    height: 100%;
    min-height: 100vh;
    background: #343A40;
}

.bg-gradient {
    background-color: #343A40;
    background-image: linear-gradient(180deg,#343A40 10%,rgb(21, 23, 26) 100%);
    background-size: cover;
}

/* sidebar-brand */
.sidebar-dark .sidebar-brand {
    color: #fff;
}

.sidebar-brand::before {
  content: "";
  width: 40px;
  height: 40px;
  background: url("../../assets/img/smile.png");
}

.sidebar .sidebar-brand {
    height: 4.375rem;
    text-decoration: none;
    font-size: 1rem;
    font-weight: 800;
    padding: 1.5rem 1rem;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: .05rem;
    z-index: 1;
}

.align-items-center {
    align-items: center!important;
}

.justify-content-center {
    justify-content: center!important;
}

.d-flex {
    display: flex!important;
}

.sidebar .sidebar-brand .sidebar-brand-text {
    display: none;
}

@media screen and (min-width: 768px) {
  .sidebar .sidebar-brand .sidebar-brand-text {
    display: inline;
  }
}
/* sidebar-brand end */

.ml-3, .mx-3 {
  margin-left: 1rem!important;
}

.mr-3, .mx-3 {
  margin-right: 1rem!important;
}

.sidebar-dark hr.sidebar-divider {
    border-top: 1px solid rgba(255,255,255,.15);
}

.sidebar hr.sidebar-divider {
    margin: 0 1rem 1rem;
}

.mb-0, .my-0 {
    margin-bottom: 0!important;
}

.mt-0, .my-0 {
    margin-top: 0!important;
}

.sidebar-dark .nav-item.active .nav-link {
    color: #fff;
}

.sidebar .nav-item .nav-link {
  text-align: center;
  padding: .75rem 1rem;
  width: 6.5rem;
}

@media (min-width: 768px) {
  .sidebar .nav-item .nav-link {
    display: block;
    width: 100%;
    text-align: left;
    padding: 1rem;
    width: 14rem;
  }

  .sidebar .nav-item .nav-link .icon {
    font-size: .85rem;
    margin-right: .25rem;
  }
}

.sidebar .nav-item .nav-link span {
    font-size: .65rem;
    display: block;
}

@media (min-width: 768px) {
  .sidebar .nav-item .nav-link span {
    font-size: .85rem;
    display: inline;
  }
}

.icon {
  width: 1.25rem;
  height: 1.25rem;
}

</style>
