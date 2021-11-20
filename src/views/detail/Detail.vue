<template>
  <div id="detail">
    <detail-bar />
    <detail-swiper :topImages="topImages" />
    <detail-base-info :goods="goods" />
    <shop-info :shops="shops"/>
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
    </ul>
  </div>
</template>

<script>
import { getDetail, Goods,Shop } from "network/detail.js";
import DetailBar from "./childcomponents/DetailBar.vue";
import DetailSwiper from "./childcomponents/DetailSwiper.vue";
import DetailBaseInfo from "./childcomponents/DetailBaseInfo.vue";
import ShopInfo from './childcomponents/ShopInfo.vue';
export default {
  components: { DetailBar, DetailSwiper, DetailBaseInfo, ShopInfo },
  name: "Detail",
  data() {
    return {
      iid: "",
      topImages: null,
      goods: {},
      shops:{}
    };
  },
  created() {
    this.iid = this.$route.params.iid;
    getDetail(this.iid).then((res) => {
      console.log(res);
      const data = res.result;
      this.topImages = data.itemInfo.topImages;
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );
      this.shops = new Shop(data.shopInfo)
      console.log(this.shops)
    });
  },
  // updated(){
  //   this.iid = this.$route.params.iid
  // }
};
</script>

<style scoped>
</style>