<template>
  <div>
    <tabbar>
      <tabitem path="/home" activecolor="#f7327c">
        <img slot="tabimg" src="~assets/img/tabbar/prime.png" alt="" />
        <img
          slot="tabimg-active"
          src="~assets/img/tabbar/prime-active.png"
          alt=""
        />
        <h2 slot="tabtext">首页</h2>
      </tabitem>
      <tabitem path="/category" activecolor="#f7327c">
        <img slot="tabimg" src="~assets/img/tabbar/category.png" alt="" />
        <img
          slot="tabimg-active"
          src="~assets/img/tabbar/category-active.png"
          alt=""
        />

        <h2 slot="tabtext">分类</h2>
      </tabitem>
      <!-- <tabitem>
        <img slot="tabimg" src="./assets/img/tabbar/fast.png" alt="">
        <img slot="tabimg-active" src="./assets/img/tabbar/fast-active.png" alt="">

        <h2  slot="tabtext">快速下单</h2>
      </tabitem> -->
      <tabitem path="/cart" activecolor="#f7327c">
        <img slot="tabimg" src="~assets/img/tabbar/cart.png" alt="" />
        <img
          slot="tabimg-active"
          src="~assets/img/tabbar/cart-active.png"
          alt=""
        />

        <h2 slot="tabtext">购物车</h2>
      </tabitem>
      <tabitem path="/profile" activecolor="#f7327c">
        <img slot="tabimg" src="~assets/img/tabbar/mine.png" alt="" />
        <img
          slot="tabimg-active"
          src="~assets/img/tabbar/mine-active.png"
          alt=""
        />

        <h2 slot="tabtext">我的</h2>
      </tabitem>
    </tabbar>
  </div>
</template>

<script>
import tabbar from "components/common/tabbar/tabbar.vue";
import tabitem from "components/common/tabbar/tabbar-item.vue";
export default {
  name: "MainTabbar",
  components: {
    tabbar,
    tabitem,
  },
};
</script>

<style scoped>
</style>