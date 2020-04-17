<template>
  <div class="wrapper">
    <div class="top">
      <div style="width: 10%; padding-left: 10px">
      </div>
      <div style="width: 80%">
        <el-input v-model="search" size="small" placeholder="输入关键字搜索" style="width: 20%;margin-right: 10px"/>
        <el-button type="primary" size="small" @click="getPage">搜索</el-button>
      </div>
      <!--      <div style="width: 10%; display: flex; justify-content: flex-end; padding-right: 10px">-->
      <!--        <el-button type="primary" size="small" @click="addItem">添加</el-button>-->
      <!--      </div>-->
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
          prop="sta"
          label="年段"
          width="200">
        </el-table-column>
        <el-table-column
          prop="pos"
          label="地区"
          width="200">
        </el-table-column>
        <el-table-column
          prop="title"
          label="学校"
          width="200">
        </el-table-column>
        <el-table-column
          prop="web"
          label="网站"
          :show-overflow-tooltip="true">
        </el-table-column>
        <el-table-column
          label="操作"
          width="200">

          <template slot-scope="scope">
            <el-button type="primary" size="small" @click="openEdit(scope.row)" style="margin-right: 10px">编辑 <span
              class="el-icon-edit-outline"/></el-button>

            <el-dialog title="教育信息" :visible.sync="editFormVisible" width="30%" @close="getPage">
              <el-form :model="editForm">
                <el-form-item label="学号" :label-width="formLabelWidth">
                  <el-input v-model="editForm.uid" autocomplete="off" disabled/>
                </el-form-item>
                <el-form-item label="年段" :label-width="formLabelWidth">
                  <el-input v-model="editForm.sta" autocomplete="off" disabled/>
                </el-form-item>
                <el-form-item label="地区" :label-width="formLabelWidth">
                  <el-input v-model="editForm.pos" autocomplete="off"/>
                </el-form-item>
                <el-form-item label="学校" :label-width="formLabelWidth">
                  <el-input v-model="editForm.title" autocomplete="off"/>
                </el-form-item>
                <el-form-item label="网站" :label-width="formLabelWidth">
                  <el-input v-model="editForm.web" autocomplete="off"/>
                </el-form-item>
              </el-form>
              <div slot="footer" class="dialog-footer">
                <el-button @click="editFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="commitEdit">确 定</el-button>
              </div>
            </el-dialog>


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
    name: "Edu",
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
        },


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
          url: "/edu/page",
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
            url: "/edu/update",
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
