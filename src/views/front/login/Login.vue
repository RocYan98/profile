<template>
  <div class="wrapper">
    <div class="label">
      <h1>
        请登录。{{this.$store.state.id}}
      </h1>
    </div>
    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" style="width: 35%">
      <el-form-item prop="username">
        <el-input v-model="ruleForm.username" placeholder="用户名"></el-input>
      </el-form-item>
      <el-form-item prop="pwd">
        <el-input type="password" v-model="ruleForm.pwd" placeholder="密码"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" style="width: 100%; height: 50px;" @click="submitForm('ruleForm')">登陆</el-button>
      </el-form-item>
      <el-form-item>
        <el-button type="text" style="margin-left: 10px" @click="register">没有账号？立即创建一个。</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
    name: "Login",
    data() {
      return {
        ruleForm: {
          username: '',
          pwd: '',
        },
        rules: {
          username: [
            {required: true, message: '请输入用户名', trigger: 'blur'}
          ],
          pwd: [
            {required: true, message: '请输入密码', trigger: 'blur'}
          ],
        }
      }
    },
    methods: {
      register() {
        this.$router.push("/register");
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.axios({
              method: 'post',
              url: '/login',
              data: {
                username: this.ruleForm.username,
                pwd: this.ruleForm.pwd
              }
            })
              .then( (response) => {
                if (response.data.code == 0) {
                  this.$store.commit('login', response.data.data);
                  this.$router.push("/profile");
                } else {
                  this.$alert(response.data.msg, '错误', {
                    confirmButtonText: '确定',
                  });
                }
              });
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
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

</style>
