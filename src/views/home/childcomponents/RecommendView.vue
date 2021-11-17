<template>
  <div class="recommend-view">
    <div v-for='item in recommend' :key="item.sort">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name:'RecommendView',
  props:{
    recommend:{
      type:Array,
      default(){
        return null
      }
    }
  }
}
</script>

<style scoped>
  .recommend-view{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    text-align: center;
    font-size: 12px;
    padding: 10px 0 20px;
    border-bottom: 8px solid #eee;
  }
  img{
    width: 70px;
    margin-bottom: 5px;
  }
</style>