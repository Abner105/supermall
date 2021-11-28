<template>
  <div class="bottom-bar">
    <div class="check-all" @click="checkAll">
      <check-button :isChecked="allCheck" />
      <span>全选</span>
    </div>

    <div class="price">合计:{{ allPrice }}</div>

    <div class="calculate" @click="clickCalc">计算 ( {{ calcLength }} )</div>
  </div>
</template>

<script>
import CheckButton from "components/content/checkButton/CheckButton.vue";
export default {
  components: { CheckButton },
  computed: {
    allPrice() {
      return (
        "￥" +
        this.$store.getters.cartlist
          .filter((item) => item.check)
          .reduce((pre, item) => pre + item.lowPrice * item.qty, 0).toFixed(2)
      );
    },
    calcLength() {
      return this.$store.getters.cartlist.filter((item) => item.check).length;
    },
    // 全选
    allCheck() {
      return this.calcLength == 0
        ? false
        : this.calcLength === this.$store.getters.cartlength;
    },
  },
  methods: {
    // 全选
    checkAll() {
      let condition = !this.allCheck
      this.$store.state.cartlist.forEach(item=>item.check=condition)
      // for (let item of this.$store.state.cartlist) {
      //   item.check = condition;
      // }
    },
    clickCalc(){
      this.$toast.show('请添加商品到购物车',2000)
    }
  },
};
</script>

<style>
.bottom-bar {
  display: flex;
  height: 40px;
  justify-content: space-between;
  vertical-align: middle;
  background-color: #ddd;
  align-items: center;
}
.check-all {
  margin-left: 10px;
  display: flex;
  width: 60px;
  justify-content: space-between;
  align-items: center;
}

.price {
  /* width: 150px; */
  /* font/-size: 16px; */
  padding-right: 10px;
}
.calculate {
  background-color: tomato;
  width: 100px;
  text-align: center;
  height: 40px;
  line-height: 40px;
  color: #fff;
  font-size: 18px;
}
</style>