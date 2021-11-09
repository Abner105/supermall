<template>
  <div id="home">
    <nav-bar class="nav-bar"><div slot="center">购物车</div></nav-bar>
    <home-swiper :banner="banner"/>
    <recommend-view :recommend="recommend"/>
    <feature-view/>
    <tab-control class="tab-control" :title="['流行','新款','精选']"/>
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
import HomeSwiper from './childcomponents/HomeSwiper.vue'
import RecommendView from './childcomponents/RecommendView.vue'
import FeatureView from './childcomponents/FeatureView.vue'
import NavBar from 'components/common/navbar/NavBar.vue'
import TabControl from 'components/content/tabcontrol/TabControl.vue'
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
    RecommendView,
    FeatureView,
    TabControl
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
  .tab-control{
    position: sticky;
    top: 44px;
    background-color: #fff;
  }
</style>