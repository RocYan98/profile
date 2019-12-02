<template>
  <div class="container">
    <div class="top">

    </div>
    <div class="head">
      <nav-menu></nav-menu>
    </div>
    <div class="body">

    </div>
    <div class="foot">
      foot
    </div>
  </div>
</template>

<script>
  import NavMenu from "../components/navmenu/NavMenu";

  export default {
    name: "Main",
    components: {
      NavMenu,
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
