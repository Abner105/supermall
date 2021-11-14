<template>
  <div class="scroll" ref="wrapper">
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "Scroll",
  props:{
    probeType:{
      type:Number,
      default:0
    },
    pullUpLoad:{
      type:Boolean,
      default:false
    }
  },
  data() {
    return {
      scroll: null,
    };
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
      // 划不动时
      observeDOM: true,
      click:true,
      // 0和1都是不监听滚动位置，2是监听手指滚动的位置，3是监听所有滚动包括惯性的滚动
      probeType:this.probeType,
      pullUpLoad:this.pullUpLoad,
    });
    // 向父组件传递当前滚动的位置
    this.scroll.on('scroll',(position)=>{
      this.$emit('scroll',position)
    })
    // 监听上拉加载更多
    this.scroll.on('pullingUp',()=>{
      console.log('ppp')
      this.$emit('pullingUp')
    })
  },
  methods:{
    // 重新封装scroll方法
    scrollTo(x,y,time=400){
      this.scroll.scrollTo(x,y,time)
    },
    // 重新封装结束上拉方法
    finishPullUp(){
      this.scroll.finishPullUp()
    },
    // 重新封装刷新方法
    refresh(){
      this.scroll.refresh()
      console.log('aaa')
    }
  }
};
</script>

<style scoped>
</style>
