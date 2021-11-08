<template>
  <div id="home">
    <nav-bar class="nav-bar"><div slot="center">购物车</div></nav-bar>
    <home-swiper :banner="banner"/>
    <recommend-view :recommend="recommend"/>
    <feature-view/>
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>6</li>
      <li>7</li>
      <li>8</li>
      <li>9</li>
      <li>0</li>
      <li>8</li>
      <li>7</li>
      <li>6</li>
      <li>6</li>
      <li>5</li>
      <li></li>
      <li>4</li>
      <li>4</li>
      <li>4</li>
      <li>  5</li>
    </ul>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'
import HomeSwiper from './childcomponents/HomeSwiper.vue'
import RecommendView from './childcomponents/RecommendView.vue'
import {getHomeMultidata} from 'network/home.js'
import FeatureView from './childcomponents/FeatureView.vue'
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
    RecommendView,
    FeatureView
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
  #home{
    padding-top: 44px;
  }
  .nav-bar{
    background-color: var(--color-tint);
    color: white;
    position: fixed;
    top: 0;
    z-index: 10;
  }
</style>