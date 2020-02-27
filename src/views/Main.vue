<template>
  <div class="container">
    <div class="top">
      <common-top></common-top>
    </div>
    <div v-if="this.$route.path != '/backstage'" class="body">
      <div  class="head">
        <nav-menu></nav-menu>
      </div>
      <div style="flex: 1; width: 100%; display: flex; justify-content: center">
        <router-view></router-view>
      </div>
    </div>
    <div v-else class="body2">
      <div class="backNav">
        <back-nav></back-nav>
      </div>
      <div style="width: 85%; height: 100%;">
        <router-view></router-view>
      </div>
    </div>
    <div class="foot">
      <common-footer></common-footer>
    </div>
  </div>
</template>

<script>
  import NavMenu from "../components/front/navmenu/NavMenu";
  import CommonFooter from "../components/common/footer/Footer";
  import CommonTop from "../components/common/top/Top";
  import BackNav from "../components/back/backNav/BackNav";


  export default {
    name: "Main",
    components: {
      NavMenu,
      CommonFooter,
      CommonTop,
      BackNav
    },
  }
</script>

<style scoped>
  .container {
    display: flex;
    flex-direction: column;
    height: 100vh;
    align-items: center;
  }

  .top {
    width: 100%;
    height: 44px;
    background: #444;
    flex: none;
  }

  .head {
    width: 100%;
    height: 44px;
    background: rgba(0, 0, 0, 0.8);
    position: sticky;
    top: 0px;
    z-index: 999;
  }

  .body {
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-items: center;
    align-items: center;
    flex: 1;
  }

  .body2 {
    width: 100%;
    height: 100%;
    display: flex;
  }

  .backNav {
    width: 15%;
    height: 100%;
  }

  .foot {
    width: 100%;
    height: 44px;
    background: #f5f5f7;
    flex: none;
  }
</style>
