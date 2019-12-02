<template>
  <div class="wrapper">
    <div class="label">
      <h1>
        请登录。
      </h1>
    </div>
    <div class="input">
      <el-input v-model="username" placeholder="用户名" style="margin-bottom: 20px"></el-input>
      <el-input placeholder="密码" v-model="pwd" show-password style="margin-bottom: 20px"></el-input>
      <p style="font-size: 13px; color: #333; margin: 0">你的用户名是你的电子邮件地址或手机号码。</p>
    </div>
    <div class="btn">
      <el-button type="primary" style="width: 100%; height: 50px; margin-bottom: 12px" @click="login">登陆</el-button>
      <el-button type="text">忘记了用户名或密码？</el-button>
      <br>
      <el-button type="text">没有账号？立即创建一个。</el-button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Login",
    data() {
      return {
        username: '',
        pwd: ''
      }
    },
    methods: {
      login() {
        if (this.username === "cjlu" && this.pwd == "cjlu") {
          this.$router.push('/');
        } else {
          alert('用户名或密码错误');
        }
      }
    }
  }
</script>

<style scoped>
  .wrapper {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 60%;
    align-self: center;
    justify-content: flex-start;
  }

  .label {
    padding-top: 40px;
    padding-bottom: 40px;
  }

  .input {
    width: 35%;
  }

  .btn {
    width: 35%;
    padding-top: 40px;
  }

  .el-button {
    margin-left: 0px;
  }
</style>
