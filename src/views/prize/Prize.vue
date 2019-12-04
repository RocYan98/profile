<template>
  <div class="wrapper">
    <el-carousel :interval="4000" type="card" height="500px">
      <el-carousel-item>
        <img src="@/assets/img/edu/env/high.jpg" alt="test">
        <div class="des">
          <b>test</b>
        </div>
      </el-carousel-item>
      <el-carousel-item>
        <img src="@/assets/img/edu/env/high.jpg" alt="test">
      </el-carousel-item>
      <el-carousel-item>
        <img src="@/assets/img/edu/env/high.jpg" alt="test">
      </el-carousel-item>
      <el-carousel-item>
        <img src="@/assets/img/edu/env/high.jpg" alt="test">
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
    transform: translateX(45%)
  }

</style>
