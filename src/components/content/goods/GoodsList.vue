<template>
  <div class="goods-list">
    <goods-item v-for="(item,index) in goods" :gitem='item' :key="index"/>
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

<style scoped>
.goods-list{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}

</style>