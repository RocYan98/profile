<template>
  <div class="wrapper">
    <table style="width: 100%; height: 80%; table-layout: fixed; line-height: 20px">
      <th style="font-size: 30px; height: 10%" align="left">账号设置</th>
      <tr valign="top" style="margin-bottom: 20px">
        <td style="font-size: 20px"><b>个人</b></td>
        <td>
          <b>个人信息</b><br>
          <p>{{ user.cname }} {{ user.ename }}</p>
          <p>{{ user.sex }}</p>
          <p>{{ user.cls }}</p>
          <p>{{ user.uid }}</p>
          <p>{{ user.email }}</p>
          <el-button type="text" @click="dialogFormVisible = true">编辑</el-button>

          <el-dialog title="个人信息" :visible.sync="dialogFormVisible" @close="cancel_pro">
            <el-form :model="form">
              <el-form-item label="姓名" :label-width="formLabelWidth">
                <el-input v-model="form.cname" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="英文名" :label-width="formLabelWidth">
                <el-input v-model="form.ename" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="班级" :label-width="formLabelWidth">
                <el-input v-model="form.cls" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="学号" :label-width="formLabelWidth">
                <el-input v-model="form.uid" autocomplete="off" disabled></el-input>
              </el-form-item>
              <el-form-item label="邮箱" :label-width="formLabelWidth">
                <el-input v-model="form.email" autocomplete="off"></el-input>
              </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
              <el-button @click="dialogFormVisible = false">取 消</el-button>
              <el-button type="primary" @click="onSubmit">修 改</el-button>
            </div>
          </el-dialog>


        </td>
        <td>
          <b>头像</b><br>
          <el-avatar :size="100" style="margin: 20px">
            <img :src="user.head"/>
          </el-avatar>
          <br>
          <el-button type="button" @click="headFormVisible = true" style="margin-left: 20px">修改头像</el-button>

          <el-dialog title="上传头像" :visible.sync="headFormVisible" width="30%">
            <el-form :model="head">
              <el-form-item :label-width="formLabelWidth"
                            ref="uploadElement">
                <el-upload ref="upload"
                           action="#"
                           accept="image/png,image/jpg,image/jpeg"
                           list-type="picture-card"
                           :limit=limitNum
                           :auto-upload="false"
                           :before-upload="handleBeforeUpload"
                           :on-preview="handlePictureCardPreview"
                           :on-remove="handleRemove"
                           :on-change="imgChange"
                           :class="{hide:hideUpload}">
                  <i class="el-icon-plus"></i>
                </el-upload>
                <el-dialog :visible.sync="dialogVisible">
                  <img width="100%"
                       :src="dialogImageUrl"
                       alt="">
                </el-dialog>
              </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
              <el-button @click="headFormVisible = false">取消</el-button>
              <el-button type="primary" @click="uploadFile">立即上传</el-button>
            </div>
          </el-dialog>
        </td>
      </tr>


      <tr valign="top">
        <td style="font-size: 20px"><b>教育</b></td>
        <td colspan="2">
          <b>求学经历</b>
          <p v-for="school in schools">{{ school.sta }} - {{ school.title }}</p>
          <el-button type="text" @click="eduFormVisible = true">编辑</el-button>
          <el-dialog title="求学经历" :visible.sync="eduFormVisible" @close="cancel_edu">
            <el-form :model="edu">
              <el-form-item label="年段" :label-width="formLabelWidth">
                <el-select v-model="edu.select" placeholder="请选择">
                  <el-option
                    v-for="(item, index) in edu.eduList"
                    :key="item.uid"
                    :label="item.sta"
                    :value="index"
                  >
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="学校" :label-width="formLabelWidth">
                <el-input v-model="edu.eduList[edu.select].title" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="地址" :label-width="formLabelWidth">
                <el-input v-model="edu.eduList[edu.select].pos" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="网址" :label-width="formLabelWidth">
                <el-input v-model="edu.eduList[edu.select].web" autocomplete="off"></el-input>
              </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
              <el-button @click="cancel_edu">取 消</el-button>
              <el-button type="primary" @click="submitEdu">修 改</el-button>
            </div>
          </el-dialog>
        </td>
      </tr>


      <tr valign="top">
        <td style="font-size: 20px"><b>账号</b></td>
        <td colspan="2">
          {{ user.username }}<br>
          <el-button type="text" @click="accountFormVisible = true">修改密码</el-button>
          <el-dialog title="账号信息" :visible.sync="accountFormVisible" @close="cancel">
            <el-form :model="form" status-icon :rules="rules" ref="form">
              <el-form-item prop="oldPwd" label="原密码" :label-width="formLabelWidth">
                <el-input v-model="form.oldPwd"></el-input>
              </el-form-item>
              <el-form-item prop="pwd" label="新密码" :label-width="formLabelWidth">
                <el-input type="password" v-model="form.pwd"></el-input>
              </el-form-item>
              <el-form-item prop="checkPwd" label="确认密码" :label-width="formLabelWidth">
                <el-input type="password" v-model="form.checkPwd"></el-input>
              </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
              <el-button @click="cancel">取 消</el-button>
              <el-button type="primary" @click="submitForm('form')">修 改</el-button>
            </div>
          </el-dialog>
        </td>
      </tr>
      <tr>
        <td></td>
        <td>
          <img src="@/assets/img/little.jpeg" alt="" style="width: 250px">
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
  export default {
    name: "Account",
    data() {
      let validatePwd = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.form.checkPwd !== '') {
            callback();
          }
        }
      };
      let validatePwd2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.form.pwd) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        dialogFormVisible: false,
        accountFormVisible: false,
        eduFormVisible: false,
        form: {
          cname: this.$store.state.user.cname,
          ename: this.$store.state.user.ename,
          sex: this.$store.state.user.sex,
          cls: this.$store.state.user.cls,
          uid: this.$store.state.user.uid,
          email: this.$store.state.user.email,
          username: this.$store.state.user.username,
          oldPwd: "",
          pwd: "",
          checkPwd: "",
        },
        edu: {
          select: 0,
          eduList: this.$store.state.eduList
        },
        formLabelWidth: '80px',
        rules: {
          oldPwd: [
            {required: true, message: '请输入原密码', trigger: 'blur'}
          ],
          pwd: [
            {required: true, validator: validatePwd, trigger: 'blur'}
          ],
          checkPwd: [
            {required: true, validator: validatePwd2, trigger: 'blur'}
          ],
        },

        headFormVisible: false,
        hideUpload: false,
        dialogImageUrl: '',
        dialogVisible: false,//图片预览弹窗
        formLabelWidth: '80px',
        limitNum: 1,
        head: {}
      }
    },
    computed: {
      user() {
        return this.$store.state.user;
      },
      schools() {
        return this.$store.state.eduList;
      },
    },
    methods: {
      onSubmit() {
        this.$confirm("确定修改?", '提示', {
          confirmButtonText: '确定',
          type: 'warning'
        }).then(() => {
          this.axios({
            method: "post",
            url: "/user/update",
            data: {
              cname: this.form.cname,
              ename: this.form.ename,
              sex: this.form.sex,
              cls: this.form.cls,
              uid: this.form.uid,
              email: this.form.email,
            }
          })
            .then((response) => {
              if (response.data.code === 0) {
                this.dialogFormVisible = false;
                this.$store.commit('updateUser', response.data.data);
                this.$message({
                  type: 'success',
                  message: response.data.msg
                });
              }
            });
        });
      },

      cancel_pro() {
        this.form.cname = this.$store.state.user.cname;
        this.form.ename = this.$store.state.user.ename;
        this.form.sex = this.$store.state.user.sex;
        this.form.cls = this.$store.state.user.cls;
        this.form.uid = this.$store.state.user.uid;
        this.form.email = this.$store.state.user.email;
      },

      cancel() {
        this.accountFormVisible = false;
        this.form.oldPwd = "";
        this.form.pwd = "";
        this.form.checkPwd = "";
      },

      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.axios({
              method: "get",
              url: "/user/updatePwd",
              params: {
                uid: this.form.uid,
                oldPwd: this.form.oldPwd,
                pwd: this.form.pwd
              }
            })
              .then((response) => {
                if (response.data.code == 0) {
                  this.$confirm("确定修改?", '提示', {
                    confirmButtonText: '确定',
                    type: 'warning'
                  }).then(() => {
                    this.accountFormVisible = false;
                    this.$message({
                      type: 'success',
                      message: response.data.msg
                    });
                  })
                } else {
                  this.$alert(response.data.msg, '错误', {
                    confirmButtonText: '确定',
                  });
                }
              });
            this.form.oldPwd = "";
            this.form.pwd = "";
            this.form.checkPwd = "";
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },

      cancel_edu() {
        this.eduFormVisible = false;
        this.edu.eduList = JSON.parse(window.localStorage.getItem("eduList"));
        this.edu.select = 0;
        location.reload();
      },

      submitEdu() {
        this.$confirm("确定修改?", '提示', {
          confirmButtonText: '确定',
          type: 'warning'
        }).then(() => {
          this.axios({
            method: "post",
            url: "/edu/update",
            data: {
              eid: this.edu.eduList[this.edu.select].eid,
              title: this.edu.eduList[this.edu.select].title,
              pos: this.edu.eduList[this.edu.select].pos,
              web: this.edu.eduList[this.edu.select].web
            }
          })
            .then((response) => {
              if (response.data.code == 0) {
                this.eduFormVisible = false;
                this.$store.commit("updateEdu", response.data.data, this.edu.select)
                this.$message({
                  type: 'success',
                  message: response.data.msg
                });
              }
            });
        });
      },

      handleBeforeUpload(file) {
        if (!(file.type === 'image/png' || file.type === 'image/jpg' || file.type === 'image/jpeg')) {
          this.$alert('请上传格式为image/png, image/jpg, image/jpeg的图片', '警告', {
            confirmButtonText: '确定'
          });
        }

        let size = file.size / 1024 / 1024 / 2;
        if (size > 2) {
          this.$alert('图片大小必须小于2M', '警告', {
            confirmButtonText: '确定'
          });
        }

        let fd = new FormData();//通过form数据格式来传
        fd.append("file", file, file.name); //传文件
        this.instance.post('/user/updateHead', fd)
          .then((response) => {
            if (response.data.code === 0) {
              this.axios.request({
                url: "/user/updateDB",
                method: "get",
                params: {
                  uid: this.$store.state.user.uid,
                  url: response.data.data,
                }
              })
                .then(res => {
                  if (res.data.code === 0) {
                    this.$alert('上传成功', '成功', {
                      confirmButtonText: '确定'
                    });
                    this.$store.commit('updateUser', res.data.data);
                  } else {
                    this.$alert('上传失败', '失败', {
                      confirmButtonText: '确定'
                    });
                  }
                })
            } else {
              this.$alert('上传失败', '失败', {
                confirmButtonText: '确定'
              });
            }
          })
      },
      // 文件列表移除文件时的钩子
      handleRemove (file, fileList) {
        this.hideUpload = fileList.length >= this.limitNum;
      },
      // 点击文件列表中已上传的文件时的钩子
      handlePictureCardPreview (file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
      uploadFile () {
        this.$refs.upload.submit();
      },
      imgChange (files, fileList) {
        this.hideUpload = fileList.length >= this.limitNum;
        if (fileList) {
          this.$refs.uploadElement.clearValidate();
        }
      },


    }
  }
</script>

<style scoped>
  .wrapper {
    display: flex;
    width: 60%;
    height: 1000px;
    align-items: center;
  }
</style>
