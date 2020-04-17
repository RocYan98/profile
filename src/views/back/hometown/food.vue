<template>
  <div class="wrapper">
    <div class="top">
      <div style="width: 10%; padding-left: 10px">
        <el-button type="danger" size="small" @click="deleteSelected">一键删除</el-button>
      </div>
      <div style="width: 80%">
        <el-input v-model="search" size="small" placeholder="输入关键字搜索" style="width: 20%;margin-right: 10px"/>
        <el-button type="primary" size="small" @click="getPage">搜索</el-button>
      </div>
      <div style="width: 10%; display: flex; justify-content: flex-end; padding-right: 10px">
        <el-button type="primary" size="small" @click="openItem">添加</el-button>

        <el-dialog title="家乡美食" :visible.sync="addFormVisible" width="30%" @close="closeItem">
          <el-form :model="editForm">
            <el-form-item label="学号" :label-width="formLabelWidth">
              <el-input v-model="editForm.uid" autocomplete="off"/>
            </el-form-item>
            <el-form-item label="标题" :label-width="formLabelWidth">
              <el-input v-model="editForm.title" autocomplete="off"/>
            </el-form-item>
            <el-form-item label="内容" :label-width="formLabelWidth">
              <el-input v-model="editForm.text" autocomplete="off"/>
            </el-form-item>
            <el-upload
              ref="upload"
              class="upload-demo"
              action="#"
              accept="image/png,image/jpg,image/jpeg"
              list-type="picture"
              :auto-upload="false"
              :before-upload="beforeUpload"
              :limit="1">
              <el-button size="small" type="primary">点击上传</el-button>
              <div slot="tip" class="el-upload__tip">只能上传一张jpg/png文件，且不超过2MB</div>
            </el-upload>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="addFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="addFile">确 定</el-button>
          </div>
        </el-dialog>
      </div>
    </div>
    <div class="tb">
      <el-table
        border
        :stripe="true"
        ref="multipleTable"
        :data="tableData"
        tooltip-effect="dark"
        @selection-change="handleSelectionChange">
        <el-table-column
          type="selection"
          width="55">
        </el-table-column>
        <el-table-column
          prop="uid"
          label="学号"
          width="200">
        </el-table-column>
        <el-table-column
          prop="title"
          label="标题"
          width="200">
        </el-table-column>
        <el-table-column
          prop="text"
          label="内容"
          :show-overflow-tooltip="true">
        </el-table-column>
        <el-table-column
          label="操作"
          width="200">

          <template slot-scope="scope">
            <el-button type="primary" size="small" @click="openEdit(scope.row)" style="margin-right: 10px">编辑 <span
              class="el-icon-edit-outline"/></el-button>

            <el-dialog title="家乡美食" :visible.sync="editFormVisible" width="30%" @close="getPage">
              <el-form :model="editForm">
                <el-form-item label="学号" :label-width="formLabelWidth">
                  <el-input v-model="editForm.uid" autocomplete="off"/>
                </el-form-item>
                <el-form-item label="标题" :label-width="formLabelWidth">
                  <el-input v-model="editForm.title" autocomplete="off"/>
                </el-form-item>
                <el-form-item label="内容" :label-width="formLabelWidth">
                  <el-input type="textarea" :autosize="{ minRows: 2, maxRows: 6}" v-model="editForm.text"
                            autocomplete="off"/>
                </el-form-item>
                <el-form-item label="图片" :label-width="formLabelWidth">
                  <div class="demo-image__preview">
                    <el-image
                      style="width: 150px; height: 100px"
                      :src="editForm.pic"
                    >
                    </el-image>
                  </div>
                </el-form-item>
                <el-upload
                  ref="upload"
                  class="upload-demo"
                  action="#"
                  accept="image/png,image/jpg,image/jpeg"
                  list-type="picture"
                  :auto-upload="false"
                  :before-upload="handleBeforeUpload"
                  :limit="1">
                  <el-button size="small" type="primary">点击上传</el-button>
                  <div slot="tip" class="el-upload__tip">只能上传一张jpg/png文件，且不超过2MB</div>
                </el-upload>
              </el-form>
              <div slot="footer" class="dialog-footer">
                <el-button @click="editFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="uploadFile">确 定</el-button>
              </div>
            </el-dialog>


            <el-button type="danger" size="small" @click="deleteItem(scope.row)">删除 <span class="el-icon-close"/>
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <div class="page" style="margin: 50px">
      <el-pagination
        @current-change="changePage"
        background
        layout="prev, pager, next"
        :current-page="current"
        :page-size="size"
        :total="total">
      </el-pagination>
    </div>
  </div>
</template>

<script>
  export default {
    name: "food",
    data() {
      return {
        tableData: [],
        multipleSelection: [],

        search: "",

        //page
        current: 1,
        total: 0,
        size: 6,

        //editForm
        formLabelWidth: "80px",
        editFormVisible: false,
        editForm: {
          fid: -1,
          uid: '',
          title: '',
          text: '',
        },
        flag: 0,

        addFormVisible: false,

      }
    },
    created() {
      this.getPage();
    },
    methods: {
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
      changePage(current) {
        this.current = current;
        this.getPage();
      },

      getPage() {
        this.axios({
          method: "get",
          url: "/food/page",
          params: {
            current: this.current,
            size: this.size,
            search: this.search
          },
        })
          .then((response) => {
            this.total = response.data.data.total;
            this.tableData = response.data.data.records;
          })
      },

      //about edit
      openEdit(val) {
        this.editFormVisible = true;
        this.editForm = val;
      },


      deleteItem(item) {
        this.$confirm('确定删除?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.axios.request({
            method: "post",
            url: "/food/deleteOne",
            data: item,
          })
            .then(response => {
              if (response.data.code === 0) {
                this.editFormVisible = false;
                this.$message({
                  type: 'success',
                  message: response.data.msg
                });
                this.getPage()
              }
            })
        });
      },
      deleteSelected() {
        let list = [];
        this.multipleSelection.forEach(element => list.push(element.fid));
        if (list.length === 0) return;
        this.$confirm('确定删除所选项?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.axios.request({
            method: "post",
            url: "/food/deleteSelected",
            data: list,
          })
            .then(response => {
              if (response.data.code === 0) {
                this.editFormVisible = false;
                this.$message({
                  type: 'success',
                  message: response.data.msg
                });
                this.getPage()
              }
            })
        });
      },


      openItem() {
        this.editForm.uid = '';
        this.editForm.title = '';
        this.editForm.text = '';
        this.addFormVisible = true;
      },
      closeItem() {
        this.editForm.uid = '';
        this.editForm.title = '';
        this.editForm.text = '';
      },
      //add
      beforeUpload(file) {
        if (this.flag === 1) return;
        this.flag = 1;
        if (file !== undefined) {
          let size = file.size / 1024 / 1024 / 2;
          if (size > 2) {
            this.$alert('图片大小必须小于2M', '警告', {
              confirmButtonText: '确定'
            });
          }
        }

        let formData = new FormData();
        formData.append("file", file);
        formData.append("fid", this.editForm.fid);
        formData.append("uid", this.editForm.uid);
        formData.append("title", this.editForm.title);
        formData.append("text", this.editForm.text);
        this.instance.request({
          method: 'post',
          url: '/food/add',
          data: formData,
        })
          .then((response) => {
            if (response.data.code === 0) {
              this.$alert('添加成功', '成功', {
                confirmButtonText: '确定'
              });
              this.getPage();
              this.addFormVisible = false;
            } else {
              this.$alert(response.data.msg, '失败', {
                confirmButtonText: '确定'
              });
            }
          })
      },

      handleBeforeUpload(file) {
        if (this.flag === 1) return;
        this.flag = 1;
        if (file !== undefined) {
          let size = file.size / 1024 / 1024 / 2;
          if (size > 2) {
            this.$alert('图片大小必须小于2M', '警告', {
              confirmButtonText: '确定'
            });
          }
        }

        let formData = new FormData();
        formData.append("file", file);
        formData.append("fid", this.editForm.fid);
        formData.append("uid", this.editForm.uid);
        formData.append("title", this.editForm.title);
        formData.append("text", this.editForm.text);
        this.instance.request({
          method: 'post',
          url: '/food/update',
          data: formData,
        })
          .then((response) => {
            if (response.data.code === 0) {
              this.$alert('更新成功', '成功', {
                confirmButtonText: '确定'
              });
              this.getPage();
              this.editFormVisible = false;
            } else {
              this.$alert(response.data.msg, '失败', {
                confirmButtonText: '确定'
              });
            }
          })
      },
      uploadFile() {
        this.$refs.upload.submit();
        this.handleBeforeUpload();
        this.flag = 0;
      },
      addFile() {
        this.$refs.upload.submit();
        this.beforeUpload();
        this.flag = 0;
      }
    }
  }
</script>

<style scoped>
  .wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .top {
    margin: 10px;
    width: 100%;
    display: flex;
  }

  .tb {
    width: 100%;
    height: 100%;
  }
</style>
