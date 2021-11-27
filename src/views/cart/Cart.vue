<template>
  <div class="cart">
    <!-- 导航条 -->
    <nav-bar class="nav">
      <div slot="center">购物车({{ cartlength }})</div>
    </nav-bar>
    <!-- 商品列表 -->
    <cart-lists/>
    <!-- 底部导航 -->
    <cart-bottom/>

  </div>
</template>

<script>
import { mapGetters } from "vuex";
import NavBar from "components/common/navbar/NavBar.vue";
import CartLists from './childcomponents/CartLists.vue';
import CartBottom from './childcomponents/CartBottom.vue';
export default {
  components: { NavBar,CartLists, CartBottom },
  name: "Cart",
  computed: {
    // 直接使用getters中的属性，第一种方式
    ...mapGetters(["cartlength"])
    // 第二种方式，给getters命名
    // ...mapGetters({length:'cartlength',list:'cartlist'})
  },
};
</script>

<style scoped>
.nav{
  background-color: var(--color-tint);
  color: #fff;
}
.cart{
  height: 100vh;
}

</style>