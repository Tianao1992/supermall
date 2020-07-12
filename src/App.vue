<template>
  <div id="app">
    <router-view></router-view>
   
   <MainTabbar/>
  </div>
</template>

<script>

import MainTabbar from 'components/content/MainTabbar/MainTabbar'
export default {
  name: 'App',
  data() {
    return {

    }
  },
  components: {
    MainTabbar,
  },
}
</script>

<style>
 @import "assets/css/base.css"
</style>
