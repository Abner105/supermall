<template>
  <div>
    <div class="wrapper" ref="wrapper">
      <ul>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
      </ul>
    </div>
  </div>
</template>

<script>
import BS from "better-scroll";
export default {
  name: "Category",
  data() {
    return {
      BScroll: null,
    };
  },
  created(){
    this.$nextTick(() => {
      this.scroll = new BS(this.$refs.wrapper, {});
    });
  },
  mounted() {
    // this.$nextTick(() => {
    //   this.scroll = new BS(this.$refs.wrapper, {});
    // });
    // this.BScroll=new BS(document.querySelector('.wrapper'),{})
  },
};
</script>

<style scoped>
.wrapper {
  height: 100px;
  background-color: antiquewhite;
}
</style>