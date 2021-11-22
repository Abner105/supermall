<template>
  <div id="detail">
    <detail-bar class="detail-bar" @barClick="barClick"/>
    <scroll class="detail-content" ref="scroll">
      <detail-swiper :topImages="topImages" />
      <detail-base-info :goods="goods" />
      <shop-info :shops="shops" />
      <good-info :goodsInfo="goodsInfo" @goodImgLoad='goodImgLoad'/>
      <detail-param-info :paramInfo="paramInfo" ref="param"/>
      <detail-comment-info :commentInfo="commentInfo" ref="comment"/>
      <goods-list :goods="recommends" ref="recommend"/>
    </scroll>
  </div>
</template>

<script>
import { getDetail, Goods, Shop, GoodsParam,getRecommend } from "network/detail.js";
import {debounce} from 'common/utils.js'
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
      recommends:[],
      toTopYs:[],  // 存储参数，评论和推荐的高度，以便可以正确条到对应的位置
      getOffsetY:null
    };
  },
  created() {
    this.iid = this.$route.params.iid;
    getDetail(this.iid).then((res) => {
      const data = res.result;
      // 轮播图数据
      this.topImages = data.itemInfo.topImages;
      // 商品信息数据（价格等）
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );
      // 店铺数据
      this.shops = new Shop(data.shopInfo);
      // 商品图片数据
      this.goodsInfo = data.detailInfo;
      // 商品参数数据
      this.paramInfo = new GoodsParam(
        data.itemParams.info,
        data.itemParams.rule
      );
      // 商品评论数据
      if (data.rate.list[0])  this.commentInfo = data.rate.list[0]
    });
    // 请求推荐数据，获取推荐数据
    getRecommend().then(res=>{
      this.recommends = res.data.list
      // console.log(this.recommends)
    })
    // 创造一个函数，使用防抖功能，避免每次图片加载完成后都要调用这个方法
    this.getOffsetY = debounce(()=>{
      this.toTopYs=[]
      this.toTopYs.push(0)
      this.toTopYs.push(this.$refs.param.$el.offsetTop-44)
      this.toTopYs.push(this.$refs.comment.$el.offsetTop-44)
      this.toTopYs.push(this.$refs.recommend.$el.offsetTop-44)
      console.log(this.toTopYs)
    },100)
  },
  methods:{
    // 点击topbar切换到相应的位置
    barClick(index){
      this.$refs.scroll.scrollTo(0,-this.toTopYs[index],300)
    },
    // 监听子组件的图片加载 ，加载完成后获取评论等的offsetTop
    goodImgLoad(){
      this.getOffsetY()
    }
  }
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