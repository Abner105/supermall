<template>
  <div class="cart-item">
    <div class="item-seletor">
      <check-button :isChecked="product.check" @click.native="checkBtn"/>
    </div>
    <div class="item-img">
      <img :src="product.img" alt="goods_img" />
    </div>
    <div class="item-info">
      <div class="item-title">{{ product.title }}</div>
      <div class="item-desc">{{ product.desc }}</div>
      <div class="item-bottom">
        <div class="item-price left">￥{{ product.lowPrice }}</div>
        <div class="item-count right">x{{ product.qty }}</div>
      </div>
    </div>
  </div>
</template>

<script>
// import CheckButton from 'components/content/checkButton/CheckButton.vue'
import CheckButton from 'components/content/checkButton/CheckButton.vue';
export default {
  name: "CartItem",
  props: {
    product: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  components:{
    CheckButton
  },
  methods:{
    checkBtn(){
      // console.log(this.product.check)
      this.product.check = !this.product.check
    }
  }
};
</script>

<style scoped>
.cart-item {
  width: 100%;
  padding: 5px;
  display: flex;
  font-size: 0;
  border-bottom: 2px solid rgba(100, 100, 100, 0.2);
}
.item-seletor {
  width: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.item-img {
  padding: 5px;
}
.item-img img {
  width: 80px;
  height: 100px;
  border-radius: 5px;
  display: block;
}
.item-info {
  padding: 5px 10px;
  overflow: hidden;
  font-size: 17px;
  color: #333;
  position: relative;
}
.item-info .item-desc {
  font-size: 14px;
  color: #666;
  margin-top: 15px;
}
.item-title,
.item-desc {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.item-bottom {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  position: absolute;
  bottom: 10px;
  left: 10px;
  right: 10px;
}
.item-info .item-price {
  color: var(--color-high-text);
  /* font-size: 20px; */
  font-weight: bold;
}
</style>