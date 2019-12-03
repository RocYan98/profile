<template>
  <div class="container">
    <div class="top">
      <common-top></common-top>
    </div>
    <div class="body">
      <div class="head">
        <nav-menu></nav-menu>
      </div>
      <div style="flex: 1; width: 100%; display: flex; justify-content: center">
        <router-view></router-view>
      </div>
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
    position: sticky;
    top: 0px;
    z-index:999;
  }

  .body {
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-items: center;
    align-items: center;
    flex: 1;
  }

  .foot {
    width: 100%;
    height: 44px;
    background: #f5f5f7;
    flex: none;
  }
</style>
