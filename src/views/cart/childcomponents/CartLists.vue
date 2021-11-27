<template>
  <div class="cartlist">
    <scroll class="content" ref="scroll">
      <cart-item
        v-for="(item, index) in cartlist"
        :key="index"
        :product="item"
      />
    </scroll>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Scroll from "components/common/scroll/Scroll.vue";
import CartItem from "./CartItem.vue";

export default {
  components: { CartItem, Scroll },
  name: "CartLists",
  computed: {
    ...mapGetters(["cartlist"]),
  },
  activated(){
    this.$refs.scroll.refresh()
  }
};
</script>

<style scoped>
.cartlist{
  height: calc(100% - 44px - 49px - 40px);
}
.content{
  height: 100%;
  overflow: hidden;
}

</style>