<template>
  <div class="goods-list">
    <goods-item v-for="item in goods" :gitem='item' :key="item.iid"/>
  </div>
</template>

<script>
import GoodsItem from './GoodsItem.vue'
export default {
  name:'GoodsList',
  props:{
    goods:{
      type:Array,
      default(){
        return null
      }
    }
  },
  components: { GoodsItem },

}
</script>

<style>
.goods-list{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}

</style>