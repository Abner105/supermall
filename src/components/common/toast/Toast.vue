<template>
  <div id="toast" v-show="isShow">
    <div>{{ msg }}</div>
  </div>
</template>

<script>
export default {
  name: "Toast",
  data() {
    return {
      msg: "",
      isShow: false,
    };
  },
  methods: {
    show(msg = "默认文字", duration = 1000) {
      this.isShow = true;
      this.msg = msg;

      console.log(this.msg,this.isShow)
      setTimeout(() => {
        this.msg = "";
        this.isShow = false;
      }, duration);
    },
  },
};
</script>

<style scoped>
#toast{
  position: absolute;
  z-index: 999;
  top: 50%;
  left: 50%;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px;
  color: #fff;
  border-radius: 10px;
  transform: translateX(-50%) translateY(-50%);
}

</style>