<template>
  <div id="detail">
    <detail-bar/>
    xiang青叶
    {{iid}}
  </div>
</template>

<script>
import DetailBar from './childcomponents/DetailBar.vue'
export default {
  components: { DetailBar },
  name:'Detail',
  data(){
    return {
      iid:''
    }
  },
  created(){
    this.iid = this.$route.params.iid
  },
  // updated(){
  //   this.iid = this.$route.params.iid
  // }
}
</script>

<style scoped>

</style>