<template>
  <!-- 数据中心 -->
  <b-container  fluid class="container pl-4 pr-4 mt-4">
    <div class="align-items-center justify-content-between mb-4 text-align-center">
      <b-img v-bind="avatar" rounded="circle" alt="Circle image" ></b-img>
      <span class="h5 font-weight-bold">
        admin 欢迎回来！
      </span>
    </div>

    <div class="align-items-center justify-content-between mb-4">
      <b-row>
        <b-col cols sm="12" md="6" lg="6" class="mb-4" >
          <b-card class="border-left-primary shadow h-100">
            <b-card-body>
              <b-row class="no-gutters align-items-center">

                <b-col class="mr-2">
                  <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                    访问人数
                  </div>
                  <div class="h5 mb-0 font-weight-bold text-gray-800">
                    666
                  </div>
                </b-col>

                <div class="col-auto">
                  <svg class="icon-users" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                    <path data-v-4055c304="" fill="currentColor" d="M192 256c61.9 0 112-50.1 112-112S253.9 32 192 32 80 82.1 80 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C51.6 288 0 339.6 0 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zM480 256c53 0 96-43 96-96s-43-96-96-96-96 43-96 96 43 96 96 96zm48 32h-3.8c-13.9 4.8-28.6 8-44.2 8s-30.3-3.2-44.2-8H432c-20.4 0-39.2 5.9-55.7 15.4 24.4 26.3 39.7 61.2 39.7 99.8v38.4c0 2.2-.5 4.3-.6 6.4H592c26.5 0 48-21.5 48-48 0-61.9-50.1-112-112-112z" class=""></path>
                  </svg>
                </div>
              </b-row>
            </b-card-body>
          </b-card>
        </b-col>

        <b-col cols sm="12" md="6" lg="6" class="mb-4" >
          <b-card class="border-left-success shadow h-100">
            <b-card-body>
              <b-row class="no-gutters align-items-center">
                <b-col class="mr-2">
                  <div class="text-xs font-weight-bold text-success text-uppercase mb-1">
                    文章浏览次数
                  </div>
                  <div class="h5 mb-0 font-weight-bold text-gray-800">
                    666
                  </div>
                </b-col>

                <div class="col-auto">
                  <svg class="icon-eye" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                    <path data-v-4055c304="" fill="currentColor" d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z" class=""></path>
                  </svg>
                </div>
              </b-row>
            </b-card-body>
          </b-card>
        </b-col>
      </b-row>
    </div>
  </b-container>
</template>

<script>
export default {
  name: 'Dashboard',
  data () {
    return {
      avatar: { blankColor: '#777', width: 50, height: 50, class: 'mr-2', src: require('@/assets/img/avatar.jpg')}
    }
  }
}
</script>

<style scoped>
.h-100 {
    height: 100%!important;
}

.shadow {
    box-shadow: 0 .15rem 1.75rem 0 rgba(58,59,69,.15)!important;
}

.border-left-primary {
  border-left: .25rem solid #4e73df!important;
}

.border-left-success {
    border-left: .25rem solid #1cc88a!important;
}

.text-xs {
    font-size: .7rem;
}

.text-success {
    color: #1cc88a!important;
}

.icon-users {
  width: 2.5rem;
}

.icon-eye {
  width: 2.5rem;
}
</style>
