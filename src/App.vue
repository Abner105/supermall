<template>
  <div id="app">
    <keep-alive>
      <router-view />
    </keep-alive>
    <main-tabbar />
  </div>
</template>

<script>
import MainTabbar from "components/content/mainTabbar/MainTabbar.vue";
// import MainTabbar from './components/content/MainTabbar.vue'

export default {
  name: "App",
  components: {
    // MainTabbar
    MainTabbar,
  },
};
</script>

<style scoped>
@import url("./assets/css/base.css");
</style>
