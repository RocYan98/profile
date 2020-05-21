<template>
  <div class="wrapper">
    <div v-if="!this.$route.path.startsWith('/backstage')" style="display: flex; justify-content: space-between; align-items: center; width: 100%">
      <div style="width: 10%"></div>
      <b>Java Web开发 -- 前台展示<el-button v-if="this.$store.state.user.username === 'yqp'" type="text" @click="toBack">进入后台管理界面</el-button></b>
      <div style="width: 10%">
        <el-button v-if="this.$store.state.user == -1" type="text" @click="open">登陆 / 注册</el-button>
        <div v-else>
          <el-button type="text" @click="open">账号设置</el-button>
          <el-button type="text" @click="logout">退出登陆</el-button>
        </div>
      </div>
    </div>
    <div v-else style="display: flex; justify-content: center; align-items: center; width: 100%">
      <b>Java Web开发 -- 后台管理<el-button type="text" @click="toFront">返回前台展示界面</el-button></b>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Top",
    methods: {
      open() {
        if (window.localStorage.getItem("user") === null) this.$router.push("/login");
        else this.$router.push("/account");
      },
      logout() {
        this.$store.commit('logout');
        this.$router.push("/index");
      },
      toBack() {
        this.$router.push("/backstage/user");
      },
      toFront() {
        this.$router.push("/index");
      }
    },
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
