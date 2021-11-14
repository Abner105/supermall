<template>
  <div class="good-item">
    <img :src="gitem.show.img" alt="" @load="imgLoad">
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
  methods:{
    // 监听图片是否加载完成
    imgLoad(){
      // 向事件总线传递事件
      this.$bus.$emit('imgLoad')
    }
  }
}
</script>

<style>
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