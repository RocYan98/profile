<template>
  <div class="wrapper">
    <el-carousel :interval="4000" type="card" height="500px">
      <el-carousel-item>
        <img src="@/assets/img/prize/0.jpg" alt="test">
        <div class="des">
          <b>2017-2018学年第一学期三等奖学金</b>
        </div>
      </el-carousel-item>
      <el-carousel-item>
        <img src="@/assets/img/prize/1.jpg" alt="test">
        <div class="des">
          <b>2017-2018学年第二学期三等奖学金</b>
        </div>
      </el-carousel-item>
      <el-carousel-item>
        <img src="@/assets/img/prize/2.jpg" alt="test">
        <div class="des">
          <b>2018-2019学年第一学期社会实践奖学金</b>
        </div>
      </el-carousel-item>
      <el-carousel-item>
        <img src="@/assets/img/prize/3.jpg" alt="test">
        <div class="des">
          <b>2018-2019学年优秀执委</b>
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
  export default {
    name: "Prize"
  }
</script>

<style scoped>
  .wrapper {
    display: flex;
    width: 70%;
    align-items: center;
  }

  .el-carousel {
    width: 100%;
  }

  b {
    font-size: 30px;
  }

  img {
    width: 100%;
    height: auto;
  }

  .des {
    display: flex;
    justify-content: center;
  }

</style>
