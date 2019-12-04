<template>
  <div class="wrapper">
    <el-carousel :interval="4000" type="card" height="500px" interval="2000">
      <el-carousel-item v-for="(prize, index) in prizes" :key="index">
        <img :src="require('@/assets/img/prize/' + index + '.jpg')">
        <div class="des">
          <b>{{ prize }}</b>
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
  export default {
    name: "Prize",
    data() {
      return {
        prizes: [
          "2017-2018学年第一学期三等奖学金",
          "2017-2018学年第二学期三等奖学金",
          "2018-2019学年第一学期社会实践奖学金",
          "2018-2019学年优秀执委",
        ]
      }
    }
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
