<template>
  <div id="detail">
    xiang青叶
    {{iid}}
  </div>
</template>

<script>
export default {
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

<style>

</style>