<template>
  <div class="wrapper">
    <div class="top">
      <div style="width: 10%; padding-left: 10px">
        <el-button type="danger" size="small" @click="deleteSelected">一键删除</el-button>
      </div>
      <div style="width: 80%">
        <el-input v-model="search" size="small" placeholder="输入关键字搜索" style="width: 20%;margin-right: 10px"></el-input>
        <el-button type="primary" size="small" @click="getPage">搜索</el-button>
      </div>
      <div style="width: 10%; display: flex; justify-content: flex-end; padding-right: 10px">
        <el-button type="primary" size="small" @click="openItem">添加</el-button>

        <el-dialog title="个人信息" :visible.sync="addFormVisible" width="30%" @close="closeItem">
          <el-form :model="editForm">
            <el-form-item label="学号" :label-width="formLabelWidth">
              <el-input v-model="editForm.uid" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="标题" :label-width="formLabelWidth">
              <el-input v-model="editForm.title" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="内容" :label-width="formLabelWidth">
              <el-input v-model="editForm.text" autocomplete="off"></el-input>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="addFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="addItem">确 定</el-button>
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
        style="width: 100%"
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
              class="el-icon-edit-outline"></span></el-button>

            <el-dialog title="留言信息" :visible.sync="editFormVisible" width="30%" @close="getPage">
              <el-form :model="editForm">
                <el-form-item label="学号" :label-width="formLabelWidth">
                  <el-input v-model="editForm.uid" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="标题" :label-width="formLabelWidth">
                  <el-input v-model="editForm.title" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="内容" :label-width="formLabelWidth">
                  <el-input type="textarea" :autosize="{ minRows: 2, maxRows: 6}" v-model="editForm.text" autocomplete="off"></el-input>
                </el-form-item>
              </el-form>
              <div slot="footer" class="dialog-footer">
                <el-button @click="editFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="commitEdit">确 定</el-button>
              </div>
            </el-dialog>


            <el-button type="danger" size="small" @click="deleteItem(scope.row)">删除 <span class="el-icon-close"></span>
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
    name: "attraction",
    data() {
      return {
        tableData: [],
        multipleSelection: [],

        search: "",

        //page
        current: 1,
        total: 0,
        size: 10,

        //editForm
        formLabelWidth: "80px",
        editFormVisible: false,
        editForm: {
          uid: '',
          title: '',
          text: ''
        },

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
          url: "/attr/page",
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
      commitEdit() {
        this.$confirm('确定修改?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.axios.request({
            method: "post",
            url: "/attr/update",
            data: this.editForm
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


      deleteItem(item) {
        this.$confirm('确定删除?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.axios.request({
            method: "post",
            url: "/attr/deleteOne",
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
        this.multipleSelection.forEach(element => list.push(element.aid));
        if (list.length === 0) return;
        this.$confirm('确定删除所选项?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.axios.request({
            method: "post",
            url: "/attr/deleteSelected",
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
      addItem() {
        this.$confirm('确定添加?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.axios.request({
            method: "post",
            url: "/attr/add",
            data: this.editForm
          })
            .then(response => {
              if (response.data.code === 0) {
                this.editFormVisible = false;
                this.$message({
                  type: 'success',
                  message: "添加成功"
                });
                this.getPage();
                this.addFormVisible = false;
              } else {
                this.$alert(response.data.msg, '失败', {
                  confirmButtonText: '确定',
                });
              }
            })
        });
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
