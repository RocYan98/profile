<template>
  <div class="wrapper">
    <div class="box">
      <div class="left">
        <el-avatar :size="200" src="https://empty" @error="errorHandler" style="margin: 100px">
          <img v-if="user != -1" :src="require('@/assets/img/profile/' + user.head + '.jpg')"/>
        </el-avatar>
        <div class="font">
          <b>个人</b>
          <b>信息简介</b>
        </div>
      </div>
      <div class="right">
        <div class="item">
          <b style="display: inline; word-spacing: 20px">姓  名:</b> {{ user.cname }}
        </div>
        <div class="item">
          <b style="display: inline">英文名: </b> {{ user.ename }}
        </div>
        <div class="item">
          <b style="display: inline; word-spacing: 20px">性 别:</b> {{ user.sex }}
        </div>
        <div class="item">
          <b style="display: inline; word-spacing: 20px">班 级:</b> {{ user.cls }}
        </div>
        <div class="item">
          <b style="display: inline; word-spacing: 20px">学 号:</b> {{ user.uid }}
        </div>
        <div class="item">
          <b style="display: inline; word-spacing: 20px">邮 箱:</b> {{ user.email }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Profile",
    data() {
      return {
      }
    },
    computed: {
      user() {
        return this.$store.state.user;
      }
    },
    methods: {
      errorHandler() {
        return true
      }
    }
  }
</script>

<style scoped>
  .wrapper {
    display: flex;
    justify-content: center;
    width: 100%;
    background: url('../../assets/img/profile/background.jpg');
  }

  .box {
    display: flex;
    width: 60%;
    margin-top: 40px;
    margin-bottom: 40px;
    border-radius: 10px;
    background: rgba(0, 0, 0, 0.2);
    z-index: 998;
  }

  .left {
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
    background-color: rgba(0, 0, 0, 0.3);
    width: 30%;
  }

  .right {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 70%;
    font-size: 30px;
  }

  .img {
    height: 200px;
    width: 200px;
    margin-top: 80px;
    margin-bottom: 80px;
    background-size: 200px;
    border-radius: 50%;
  }

  .font {
    color: #161616;
    font-size: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .item {
    padding-left: 160px;
    padding-bottom: 20px;
  }

</style>
