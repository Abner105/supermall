<template>
  <div id="detail">
    <detail-bar class="detail-bar" />
    <scroll class="detail-content">
      <detail-swiper :topImages="topImages" />
      <detail-base-info :goods="goods" />
      <shop-info :shops="shops" />
      <good-info :goodsInfo="goodsInfo"/>
      <detail-param-info :paramInfo="paramInfo"/>
      <detail-comment-info :commentInfo="commentInfo"/>
      <goods-list :goods="recommends"/>
    </scroll>
  </div>
</template>

<script>
import { getDetail, Goods, Shop, GoodsParam,getRecommend } from "network/detail.js";
import DetailBar from "./childcomponents/DetailBar.vue";
import DetailSwiper from "./childcomponents/DetailSwiper.vue";
import DetailBaseInfo from "./childcomponents/DetailBaseInfo.vue";
import ShopInfo from "./childcomponents/ShopInfo.vue";
import Scroll from "components/common/scroll/Scroll.vue";
import GoodInfo from "./childcomponents/GoodInfo.vue";
import DetailParamInfo from "./childcomponents/DetailParamInfo.vue";
import DetailCommentInfo from './childcomponents/DetailCommentInfo.vue';
import GoodsList from '../../components/content/goods/GoodsList.vue';
export default {
  components: {
    DetailBar,
    DetailSwiper,
    DetailBaseInfo,
    ShopInfo,
    Scroll,
    GoodInfo,
    DetailParamInfo,
    DetailCommentInfo,
    GoodsList,
  },
  name: "Detail",
  data() {
    return {
      iid: "",
      topImages: null,
      goods: {},
      shops: {},
      goodsInfo: {},
      paramInfo: {},
      commentInfo:{},
      recommends:[]
    };
  },
  created() {
    this.iid = this.$route.params.iid;
    getDetail(this.iid).then((res) => {
      const data = res.result;
      this.topImages = data.itemInfo.topImages;
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );
      this.shops = new Shop(data.shopInfo);
      this.goodsInfo = data.detailInfo;
      this.paramInfo = new GoodsParam(
        data.itemParams.info,
        data.itemParams.rule
      );
      if (data.rate.list[0])  this.commentInfo = data.rate.list[0]
    });
    getRecommend().then(res=>{
      this.recommends = res.data.list
      console.log(this.recommends)
    })
  },
};
</script>

<style scoped>
#detail {
  background-color: #fff;
  position: absolute;
  z-index: 100;
  height: 100vh;
  width: 100%;
}
.detail-bar {
  background-color: #fff;
  position: relative;
  z-index: 9;
}
.detail-content {
  height: calc(100% - 44px);
}
</style>