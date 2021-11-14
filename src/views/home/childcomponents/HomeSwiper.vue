<template>
  <div class="home-swiper">
    <swiper>
      <swiper-item v-for="item in banner" :key="item.title">
        <a :href="item.link">
          <img :src="item.image" alt="" @load="bannerLoad" />
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper";
export default {
  name: "HomeSwiper",
  data() {
    return {
      isLoad: false,
    };
  },
  props: {
    banner: {
      type: Array,
      default() {
        return null;
      },
    },
  },
  components: {
    Swiper,
    SwiperItem,
  },
  methods: {
    bannerLoad() {
      if (!this.isLoad) {
        this.$emit("bannerLoad");
        this.isLoad = true;
      }
    },
  },
};
</script>

<style>
</style>