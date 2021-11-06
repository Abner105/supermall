<template>
  <div id="home">
    <nav-bar class="nav-bar"><div slot="center">购物车</div></nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'
import {getHomeMultidata} from 'network/home.js'
export default {
  name:"Home",
  data(){
    return {
      banner:[],
      recommend:[]
    }
  },
  components:{
    NavBar
  },
  created(){
    getHomeMultidata().then(res=>{
      this.banner=res.data.banner.list
      this.recommend = res.data.recommend.list
    })
  }
}
</script>

<style>
  .nav-bar{
    background-color: var(--color-tint);
    color: white;
  }
</style>