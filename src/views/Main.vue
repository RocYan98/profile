<template>
  <div class="container">
    <div class="top">
      <common-top></common-top>
    </div>
    <div class="head">
      <nav-menu></nav-menu>
    </div>
    <div class="body">

    </div>
    <div class="foot">
      <common-footer></common-footer>
    </div>
  </div>
</template>

<script>
  import NavMenu from "../components/navmenu/NavMenu";
  import CommonFooter from "../components/footer/Footer";
  import CommonTop from "../components/top/Top";


  export default {
    name: "Main",
    components: {
      NavMenu,
      CommonFooter,
      CommonTop
    }
  }
</script>

<style scoped>
  .container {
    display: flex;
    flex-direction: column;
    height: 100vh;
    align-items: center;
  }

  .top{
    width: 100%;
    height: 44px;
    background: #444;
    flex: none;
  }

  .head{
    width: 100%;
    height: 44px;
    background: rgba(0, 0, 0, 0.8);
    flex: none;
    position: sticky;
    top: 0px;
  }

  .body {
    width: 100%;
    flex: 1;
  }

  .foot {
    width: 100%;
    height: 44px;
    background: #f5f5f7;
    flex: none;
  }
</style>
