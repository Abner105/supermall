<template>
  <div class="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "tabbar",
};
</script>

<style>
.tab-bar {
  height: 49px;
  width: 100%;
  display: flex;
  background-color: #eee;
  position: fixed;
  bottom: 0;
  left: 0;
  box-shadow: 0 -1px 1px rgba(0, 0, 0, 0.1);
}
</style>