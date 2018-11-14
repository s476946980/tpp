<template>
  <div id="app">
    
    <!-- 底部导航-->
    <v-fixnav></v-fixnav>
    <!--路由出口-->
    <router-view></router-view>
  </div>
</template>

<script>
//引入固定底部导航
import fixNav from "@/components/fixNav/fixNav"
import "@/assets/css/reset.css"
export default {
  name: 'App',
  components:{
    "v-fixnav":fixNav
  }
}
</script>

<style>

</style>
