<template>
  <div class="tab-control">
    <div  v-for="(item, index) in title" :key="item" @click="itemClick(index)">
      <span :class="{ tabactive: index == isActive }">{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  props: {
    title: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      isActive: 0,
    };
  },
  methods:{
    itemClick(index){
      this.isActive=index
      this.$emit('itemClick',index)
    }
  }
};
</script>

<style>
.tab-control {
  width: 100%;
  display: flex;
  flex-direction: row;
  line-height: 40px;
  height: 40px;
  justify-content: space-evenly;
}
span{
  padding: 5px;
}
.tabactive{
  color: var(--color-high-text);
  border-bottom: var(--color-high-text) solid 2px;
}
</style>