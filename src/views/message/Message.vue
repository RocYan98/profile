<template>
  <div class="wrapper">
    <div class="left">
      <p>留</p>
      <p>言</p>
      <p>板</p>
    </div>
    <div class="right">
      <el-button type="primary" plain icon="el-icon-edit" @click="dialogFormVisible = true">我 要 留 言</el-button>

      <el-dialog title="留言" :visible.sync="dialogFormVisible">
        <el-form :model="form">
          <el-form-item label="留言内容:">
            <el-input
              type="textarea"
              placeholder="请输入内容"
              v-model="form.msg"
              maxlength="30"
              show-word-limit
              :autosize="{ minRows: 2, maxRows: 5}"
            >
            </el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="submit">确 定</el-button>
        </div>
      </el-dialog>


      <div class="msg" style="height: 80%; width: 90%">
        <el-card v-for="record in records" :key="record.mid" class="box-card" style="margin: 30px; width: 90%">
          <div slot="header" class="clearfix">
            <span>{{ record.name }} 说:</span>
          </div>
          <div class="text item" style="word-wrap:break-word">
            {{ record.msg }}
          </div>
          <p style="font-size: small; text-align: right">{{ record.time }}</p>
        </el-card>
      </div>
      <div>
        <el-pagination
          @current-change="changePage"
          background
          layout="prev, pager, next"
          :current-page="current"
          :page-size="3"
          :total="total">
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Message",
    data() {
      return {
        current: 1,
        total: 0,
        records: '',
        dialogFormVisible: false,
        form: {
          msg: '',
        },
      }
    },
    created() {
      this.getPage();
    },
    methods: {
      getPage() {
        this.axios({
          method: "get",
          url: "/msg/page",
          params: {
            current: this.current,
          },
        })
          .then((response) => {
            this.total = response.data.data.total;
            this.records = response.data.data.records;
          })
      },
      changePage(current) {
        this.current = current;
        this.getPage();
      },
      submit() {
        this.dialogFormVisible = false;
        this.axios({
          method: "post",
          url: "/msg/input",
          data: {
            msg: this.form.msg,
            name: this.$store.state.user.cname,
          }
        })
         .then((response) => {
           if (response.data.code == 0) {
             this.getPage();
           }
         })
      }
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

  .left {
    width: 30%;
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: rgba(0, 102, 102, 0.2);
    font-size: 50px;
  }

  .right {
    width: 70%;
    height: 80%;
    background: rgba(0, 102, 200, 0.2);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
</style>
