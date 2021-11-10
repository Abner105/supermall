<template>
  <div id="home">
    <nav-bar class="nav-bar"><div slot="center">购物车</div></nav-bar>
    <home-swiper :banner="banner" />
    <recommend-view :recommend="recommend" />
    <feature-view />
    <tab-control class="tab-control" :title="['流行', '新款', '精选']" />
    <goods-list :goods="goods.pop.list"/>
  </div>
</template>

<script>
import HomeSwiper from "./childcomponents/HomeSwiper.vue";
import RecommendView from "./childcomponents/RecommendView.vue";
import FeatureView from "./childcomponents/FeatureView.vue";
import NavBar from "components/common/navbar/NavBar.vue";
import TabControl from "components/content/tabcontrol/TabControl.vue";
import GoodsList from 'components/content/goods/GoodsList.vue';
import { getHomeMultidata, getHomeGoods } from "network/home.js";

export default {
  name: "Home",
  data() {
    return {
      banner: [],
      recommend: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
    };
  },
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabControl,
    GoodsList,
  },
  created() {
    // 获取轮播图等数据
    this.getHomeMultidata();
    // 获取商品数据
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  methods: {
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        this.banner = res.data.banner.list;
        this.recommend = res.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      getHomeGoods(type, this.goods[type].page + 1).then((res) => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
      });
    },
  },
};
</script>

<style>
#home {
  padding-top: 44px;
}
.nav-bar {
  background-color: var(--color-tint);
  color: white;
  position: fixed;
  top: 0;
  z-index: 10;
}
.tab-control {
  position: sticky;
  top: 44px;
  background-color: #fff;
}
</style>