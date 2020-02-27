<template>
  <div class="wrapper">
    <div class="label">
      <h1>
        注册。
      </h1>
    </div>
    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" style="width: 35%">
      <el-form-item prop="username">
        <el-input v-model="ruleForm.username" placeholder="用户名"></el-input>
      </el-form-item>
      <el-form-item prop="uid">
        <el-input v-model="ruleForm.uid" placeholder="学号"></el-input>
      </el-form-item>
      <el-form-item prop="pwd">
        <el-input type="password" v-model="ruleForm.pwd" placeholder="密码"></el-input>
      </el-form-item>
      <el-form-item prop="checkPwd">
        <el-input type="password" v-model="ruleForm.checkPwd" placeholder="确认密码"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" style="width: 100%; height: 50px;" @click="submitForm('ruleForm')">注册</el-button>
      </el-form-item>
      <el-form-item>
        <el-button type="text" style="margin-left: 10px" @click="login">已有账号？前往登陆。</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
    name: "Register",
    data() {
      let validatePwd = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm.checkPwd !== '') {
            callback();
          }
        }
      };
      let validatePwd2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.pwd) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        ruleForm: {
          username: '',
          pwd: '',
          checkPwd: '',
          uid: ''
        },
        rules: {
          username: [
            {required: true, message: '请输入用户名', trigger: 'blur'}
          ],
          uid: [
            {required: true, message: '请输入学号', trigger: 'blur'}
          ],
          pwd: [
            {validator: validatePwd, trigger: 'blur'}
          ],
          checkPwd: [
            {validator: validatePwd2, trigger: 'blur'}
          ],
        }
      }
    },
    methods: {
      login() {
        this.$router.push("/login");
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.axios({
              method: "post",
              url: "/register",
              data: {
                username: this.ruleForm.username,
                pwd: this.ruleForm.pwd,
                uid: this.ruleForm.uid
              }
            })
              .then((response) => {
                if (response.data.code == 0) {
                  this.$confirm('创建成功，是否前往登陆？', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'success'
                  }).then(() => {
                    this.$router.push("/login");
                  })
                } else {
                  this.$alert(response.data.msg, '失败', {
                    confirmButtonText: '确定',
                  });
                }
              })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
    },
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

  .btn {
    width: 35%;
    padding-top: 40px;
  }

  .error {
    color: red;
    margin-left: 10px;
    font-size: small;
  }
</style>
