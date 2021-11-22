<template>
  <div class="detail-bar">
    <nav-bar>
      <div slot="left" class="back" @click="backClick">
        <img src="~assets/img/detail/back.png" alt="">
      </div>
      <div slot="center" class="titles">
        <div v-for="(item,index) in titles" :key="index" :class="{active:isActive==index}" @click='itemClick(index)'>{{item}}</div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'
export default {
  name:'DetailBar',
  components:{
    NavBar
  },
  data(){
    return {
      titles:['商品','参数','评论','推荐'],
      isActive:0
    }
  },
  methods:{
    itemClick(index){
      this.isActive=index
      this.$emit('barClick',index)
    },
    backClick(){
      this.$router.back()
    }
  }

}
</script>

<style scoped>
.back img{
  width: 30px !important;
  margin-top: 8px;
}
.titles{
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}
.active{
  color: var(--color-high-text);
}
</style>