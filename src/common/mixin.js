// 混入
// 置顶的混入
import BackTop from "components/content/backTop/BackTop.vue";

export const backTop={
  components:{
    BackTop
  },
  data(){
    return {
      isShowTop: false,
    }
  },
  methods:{
    backClick() {
      this.$refs.scroll.scrollTo(0, 0);
    },
    //监听位置，确定是否显示
    listenBack(position){
      this.isShowTop = position.y < -1000;
    }
  }

}