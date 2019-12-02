<template>
  <div class="wrapper">
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
    align-items: center;
    justify-content: flex-end;
  }
</style>
