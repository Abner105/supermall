<template>
  <div id="detail">
    <detail-bar class="detail-bar" @barClick="barClick" ref="nav"/>
    <scroll class="detail-content" ref="scroll" :probeType="3" @scroll="contentScroll">
      <detail-swiper :topImages="topImages" />
      <detail-base-info :goods="goods" />
      <shop-info :shops="shops" />
      <good-info :goodsInfo="goodsInfo" @goodImgLoad='goodImgLoad'/>
      <detail-param-info :paramInfo="paramInfo" ref="param"/>
      <detail-comment-info :commentInfo="commentInfo" ref="comment"/>
      <goods-list :goods="recommends" ref="recommend"/>
    </scroll>
    <detail-bottom-bar @addCart="addCart"/>
    <back-top @click.native="backClick" v-show="isShowTop" />
  </div>
</template>

<script>
import { getDetail, Goods, Shop, GoodsParam,getRecommend } from "network/detail.js";
import {debounce} from 'common/utils.js'
import {backTop} from 'common/mixin.js'
import DetailBar from "./childcomponents/DetailBar.vue";
import DetailSwiper from "./childcomponents/DetailSwiper.vue";
import DetailBaseInfo from "./childcomponents/DetailBaseInfo.vue";
import ShopInfo from "./childcomponents/ShopInfo.vue";
import Scroll from "components/common/scroll/Scroll.vue";
import GoodInfo from "./childcomponents/GoodInfo.vue";
import DetailParamInfo from "./childcomponents/DetailParamInfo.vue";
import DetailCommentInfo from './childcomponents/DetailCommentInfo.vue';
import GoodsList from '../../components/content/goods/GoodsList.vue';
import DetailBottomBar from './childcomponents/DetailBottomBar.vue';
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
    DetailBottomBar,
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
      getOffsetY:null,
      newIndexs:0
    };
  },
  created() {
    this.iid = this.$route.params.iid;
    getDetail(this.iid).then((res) => {
      const data = res.result;
      console.log(data)
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
      this.toTopYs.push(this.$refs.recommend.$el.offsetTop-44,Infinity)
      // console.log(this.toTopYs)
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
    },
    // 监听滚动，实现滚动自动切换tabbar
    contentScroll(p){
      for (let i=0;i<this.toTopYs.length-1;i++){
        if (this.newIndexs!==i && (-p.y>this.toTopYs[i] && -p.y<this.toTopYs[i+1])){
          this.newIndexs=i
          this.$refs.nav.isActive = this.newIndexs
        }
      }
      this.listenBack(p)
    },
    // 监听点击添加购物车
    addCart(){
      // 用一个对象来存储该商品在购物车的数据
      const cartGoods = {}
      cartGoods.iid = this.iid
      cartGoods.title = this.goods.title
      cartGoods.lowPrice = this.goods.lowPrice
      cartGoods.desc = this.goodsInfo.desc
      // 添加数据到购物车
      this.$store.dispatch('addGoods',cartGoods)
      console.log(this.$store.state.cartlist)
    }
  },
  mixins:[backTop]
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
  height: calc(100% - 44px - 58px);
}
</style>