<template>
  <div class="good-item" @click="itemClick">
    <img v-lazy="showImg" alt="" @load="imgLoad">
    <div class="good-info">
      <p>{{gitem.title}}</p>
      <span class="price">￥{{gitem.price}} </span>
      <span class="cfav"> ★ {{gitem.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name:'GoodsItem',
  props:{
    gitem:{
      type:Object,
      default(){
        return null
      }
    }
  },
  computed:{
    showImg(){
      return this.gitem.image || this.gitem.show.img
    }
  },
  methods:{
    // 监听图片是否加载完成
    imgLoad(){
      // 向事件总线传递事件
      this.$bus.$emit('imgLoad')
    },
    // 监听商品点击，跳转详情页
    itemClick(){
      console.log(this.gitem.iid)
      this.$router.push('/detail/'+this.gitem.iid)
    }
  }
}
</script>

<style scoped>
.good-item{
  width: 47%;
  padding-top: 5px;
}
img{
  width: 100%;
  margin: 0;
  border-radius: 4px;
}
.good-info{
   font-size: 14px;
}
.good-info p{
  margin: 2px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.price{
  display: inline-block;
  color: var(--color-high-text);
  width: 50%;
  padding: 2px;
  /* font-size: 12px; */

}
.cfav{
  color: #888;
  font-size: 12px;
}
</style>