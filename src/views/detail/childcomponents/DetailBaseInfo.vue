<template>
  <div class="detail-base-info" v-if="Object.keys(goods).length!==0">
    <h2 class="title">{{ goods.title }}</h2>
    <div class="price">
      <span class="new-price">{{ goods.price }}</span>
      <span class="old-price">{{ goods.oldPrice }}</span>
      <span class="discount" :style="{ backgroundColor: goods.discountBgColor }">{{
       goods.discountDesc
      }}</span>
    </div>
    <div class="statements">
      <span v-for="(item,index) in goods.columns" :key="index">{{item}}</span>
    </div>
    <div class="msg">
      <div v-for="(item,index) in goods.services" :key="index">
        <img :src="item.icon" alt="">
        <span>{{item.name}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBaseInfo",
  props: {
    goods: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style scoped>
.detail-base-info{
  padding: 0 10px;
  border-bottom: solid #eee 5px;
}
.title{
  font-size: 18px;
}

.new-price{
  color:var(--color-high-text);
  font-size: 24px;
  font-weight: 600;
}
.old-price{
  padding: 0 10px;
  text-decoration: line-through;
  color: #999;
}
.discount{
  /* display: inline-block;
  height: 23px;
  width: 50px; */
  text-align: center;
  line-height: 23px;
  color: #fff;
  /* font-size: 14px; */
  border-radius: 5px;
  vertical-align: top;
}
.statements{
  margin-top: 8px;
  padding: 10px 0;
  /* font-size: 14px; */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: #999;
  border-bottom: #eee solid 1px;
}
.msg img{
  width:13px;
}
.msg{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: #333;
  margin: 20px 0;
}
</style>