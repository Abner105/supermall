<template>
  <div class="cart">
    <nav-bar class="nav">
      <div slot="center">购物车({{ cartlength }})</div>
    </nav-bar>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import NavBar from "components/common/navbar/NavBar.vue";
export default {
  components: { NavBar },
  name: "Cart",
  computed: {
    // 直接使用getters中的属性，第一种方式
    ...mapGetters(["cartlength", "cartlist"])
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
</style>