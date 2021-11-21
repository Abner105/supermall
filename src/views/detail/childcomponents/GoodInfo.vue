<template>
  <div class="goodsInfo" v-if="Object.keys(goodsInfo) !== 0">
    <div class="detail-desc">
      <div></div>
      <span>{{ goodsInfo.desc }}</span>
      <div></div>
    </div>
    <div v-for="(item, index) in goodsInfo.detailImage" :key="index">
      <div class="key">{{ item.key }}</div>
      <div v-for="(image,i) in item.list" :key="i">
        <img :src="image" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodInfo",
  props: {
    goodsInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style>
.goodsInfo{
  padding: 0 10px;
}
img {
  width: 100%;
}
.detail-desc{

}
.detail-desc span{
  display: block;
  line-height: 24px;
  font-style: italic;
  padding: 0 10px
}
.detail-desc div{
  width: 50px;
  height: 2px;
  background-color: #ddd;
  margin: 20px 0;
}
.detail-desc div:last-child{
  margin-left: auto;
  margin-right: 0;
}
.key{
  margin: 10px 100px;
  line-height: 40px;
  text-align: center;
  border-radius: 8px ;
}
</style>