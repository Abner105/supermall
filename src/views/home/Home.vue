<template>
  <div id="home">
    <nav-bar class="nav-bar"><div slot="center">购物车</div></nav-bar>

    <scroll
      class="content"
      ref="scroll"
      :probeType="3"
      @scroll="contentScroll"
      :pullUpLoad="true"
      @pullingUp="loadMore"
    >
      <home-swiper :banner="banner" />
      <recommend-view :recommend="recommend" />
      <feature-view />
      <tab-control
        class="tab-control"
        :title="['流行', '新款', '精选']"
        @itemClick="itemClick"
      />
      <goods-list :goods="tabItem" />
    </scroll>

    <back-top @click.native="backClick" v-show="isShowTop" />
  </div>
</template>

<script>
import HomeSwiper from "./childcomponents/HomeSwiper.vue";
import RecommendView from "./childcomponents/RecommendView.vue";
import FeatureView from "./childcomponents/FeatureView.vue";
import NavBar from "components/common/navbar/NavBar.vue";
import Scroll from "components/common/scroll/Scroll.vue";
import TabControl from "components/content/tabcontrol/TabControl.vue";
import GoodsList from "components/content/goods/GoodsList.vue";
import BackTop from "components/content/backTop/BackTop.vue";

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
      tabType: "pop",
      isShowTop: false,
    };
  },
  computed: {
    tabItem() {
      return this.goods[this.tabType].list;
    },
  },
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabControl,
    GoodsList,
    Scroll,
    BackTop,
  },
  created() {
    // 获取轮播图等数据
    this.getHomeMultidata();
    // 获取商品数据
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  mounted() {
    // 给refresh设置防抖
    const refresh = this.debounce(this.$refs.scroll.refresh,10)
    // 监听事件总线中的事件
    this.$bus.$on("imgLoad", () => {
      refresh()
    });
  },
  methods: {
    // 网络请求相关
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
        // 结束上拉加载更多，以便下次能使用上拉加载更多
        this.$refs.scroll.finishPullUp();
      });
    },
    // 事件监听,切换tab
    itemClick(index) {
      this.tabType = ["pop", "new", "sell"][index];
    },
    // 回到顶部
    backClick() {
      this.$refs.scroll.scrollTo(0, 0);
    },
    // 监听滚动，并隐藏置顶图标
    contentScroll(position) {
      this.isShowTop = position.y < -1000;
    },
    // 上拉加载更多
    loadMore() {
      console.log("hhh");
      this.getHomeGoods(this.tabType);
    },
    // 封装防抖函数
    debounce(fn, delay) {
      let timer = null;
      return function (...args) {
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
          fn.apply(this,args);
        }, delay);
      };
    },
  },
};
</script>

<style scoped>
#home {
  /* padding-top: 44px; */
  height: 100vh;
  position: relative;
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
.content {
  position: absolute;
  top: 44px;
  left: 0;
  right: 0;
  bottom: 48px;
  /* height: 400px; */
  /* height: calc(100vh-93px); */
  overflow: hidden;
}
</style>