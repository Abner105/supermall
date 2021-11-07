<template>
  <div id="home">
    <nav-bar class="nav-bar"><div slot="center">购物车</div></nav-bar>
    <home-swiper :banner="banner"/>
    <recommend-view :recommend="recommend"/>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'
import HomeSwiper from './childcomponents/HomeSwiper.vue'
import RecommendView from './childcomponents/RecommendView.vue'
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
    NavBar,
    HomeSwiper,
    RecommendView
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