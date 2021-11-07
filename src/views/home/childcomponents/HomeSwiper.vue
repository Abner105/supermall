<template>
  <div class="home-swiper">
    <swiper>
      <swiper-item v-for="item in banner" :key="item.title">
        <a :href="item.link">
          <img :src="item.image" alt="" />
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import {Swiper,SwiperItem} from 'components/common/swiper'
export default {
  name: "HomeSwiper",
  props:{
    banner:{
      type:Array,
      default(){
        return null
      }
    }
  },
  components:{
    Swiper,
    SwiperItem
  }
};
</script>

<style>
</style>