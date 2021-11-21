<template>
  <div class="shop">
    <div class="info">
      <img class="logo" :src="shops.shopLogo" alt="" />
      <h3>{{ shops.name }}</h3>
    </div>
    <div class="desc">
      <div class="sell">
        <span>{{ shops.cSells }}万</span>
        <span>总销量</span>
      </div>
      <div class="total">
        <span>{{ shops.cGoods }}</span>
        <span>全部宝贝</span>
      </div>
      <div class="score">
        <div v-for="(item, index) in shops.score" :key="index">
          <span>{{ item.name }}</span>
          <span :class="{ red: item.isBetter, green: !item.isBetter }">{{
            item.score
          }}</span>
          <span v-if="item.isBetter" class="high">高</span>
          <span v-else class="low">低</span>
        </div>
      </div>
    </div>
    <div class="link">
      <a :href="shops.shopUrl">进店逛逛</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShopInfo",
  props: {
    shops: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style>
.shop {
  padding: 0 10px;
}
.info {
  padding: 30px 0 0px;
}
.info h3 {
  display: inline-block;
  vertical-align: top;
  margin-left: 15px;
  font-size: 22px;
  font-weight: 500;
}
.shop img {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: solid 2px #ddd;
}
.desc {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 16px;
  padding: 10px 10px;
  align-items: center;
}
.sell,
.total {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.sell span:first-child,
.total span:first-child {
  font-size: 20px;
  font-weight: 600;
  padding-bottom: 5px;
}
.sell {
  padding: 0 10px;
}
.total {
  padding: 0 20px;
  border-right: solid #eee 2px;
}
.score {
  flex: 1;
  color: #333;
}
.score div {
  padding: 8px 0 0 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.red {
  color: red;
}
.green {
  color: rgb(97, 184, 75);
}
.high,
.low {
  color: #fff;
  border-radius: 3px;
  padding: 0 1px;
}
.high {
  background-color: red;
}
.low {
  background-color: rgb(97, 184, 75);
}
.link{
  background-color: rgb(240, 245, 243);
  width: 150px;
  height: 30px;
  border-radius: 8px;
  line-height: 30px;
  text-align: center;
  margin: 10px auto;
  color: #333;
}
</style>