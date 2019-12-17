<template>
  <div id="wrapper" class="container">
      <Sidebar/>
      <router-view/>
  </div>
</template>

<script>
import Sidebar from '../common/Sidebar'

export default {
  name: 'AdminPage',
  components: {
    Sidebar
  }
}
</script>

<style scoped>
  #wrapper {
    display: flex;
  }
</style>
