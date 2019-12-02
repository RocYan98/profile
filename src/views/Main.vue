<template>
  <div class="container">
    <div class="head">
      <nav-menu></nav-menu>
    </div>
    <div class="body">
      body
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

  .head{
    height: 44px;
  }

  .body {
    flex: 1;
  }

  .foot {
    height: 44px;
  }
</style>
