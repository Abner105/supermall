<template>
  <div class="tab-item" @click="toitem">
    <div v-if="!isactive">
      <slot name="tabimg"></slot>
    </div>
    <div v-else>
      <slot name="tabimg-active"></slot>
    </div>
    <div :style="acolor">
      <slot name="tabtext"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "tabitem",
  props:{
    path:String,
    activecolor:{
      type:String,
      default:'red',
    }
  },
  data() {
    return {} ;
  },
  computed:{
    isactive(){
      return this.$route.path.indexOf(this.path)!==-1
    },
    acolor(){
      return this.isactive?{color:this.activecolor} :{}
    }
  },
  methods:{
    toitem(){
      this.$router.replace(this.path)
    }
  }
};
</script>

<style>
.tab-item {
  flex: 1;
  text-align: center;
}
.tab-item img {
  width: 20px;
  margin-top: 3px;
}
.tab-item h2 {
  font-size: 14px;
  margin: 0;
}
.active {
  color: #f7327c;
}
</style>