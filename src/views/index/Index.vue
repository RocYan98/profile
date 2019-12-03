<template>
  <div class="wrapper">
<!--    <div class="item">-->
<!--      <svg-icon name="webstorm"></svg-icon>-->
<!--      <h1 style="display: inline; font-size: 60px">WebStorm</h1>-->
<!--    </div>-->
<!--    <div class="img">-->
<!--      <img src="@/assets/img/webstorm.png" alt="webstorm" style="height: 70%">-->
<!--    </div>-->
    <index-body name="webstorm" title="WebStorm"></index-body>
    <index-body name="clion" bgc="#3b3e43" title="CLion"></index-body>
    <index-body name="pycharm" title="PyCharm"></index-body>
  </div>
</template>

<script>
  import IndexBody from "../../components/body/IndexBody";

  export default {
    name: "index",
    components: {
      IndexBody
    }
  }
</script>

<style scoped>
  .wrapper {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background: #ffffff;
    align-items: center;
    justify-content: flex-start;
  }
</style>
