<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>

  </div>
</template>

<script>
export default {
  name:'NavBar'
}
</script>

<style scoped>
  .nav-bar{
    display: flex;
    height: 44px;
    width: 100%;
    text-align: center;
    line-height: 44px;
    /* background-color: antiquewhite; */
    box-shadow: 0px 0px 2px rgba(0, 0, 0, .1);
  }
  .left,.right{
    width: 60px;
    /* background-color: aqua; */
  }
  .center{
    flex: 1;
  }
</style>