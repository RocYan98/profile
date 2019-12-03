<template>
  <div class="wrapper">
    <div style="display: flex; justify-content: center; align-items: center; width: 100%">
      <b>web前端开发</b>
    </div>
    <div style="margin-right: 50px">
      <el-button type="text" @click="open">登陆</el-button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Top",
    methods: {
      open: function () {
        this.$router.push("/login");
      }
    }
  }
</script>

<style scoped>
  .wrapper {
    display: flex;
    height: 100%;
    justify-content: flex-end;
  }

  b {
    font-size: 30px;
    color: #f5f5f7;
  }
</style>
