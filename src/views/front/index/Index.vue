<template>
  <div class="wrapper">
    <index-body name="webstorm" title="WebStorm"/>
    <index-body name="idea" bgc="#3b3e43" title="IDEA"/>
    <index-body name="pycharm" title="PyCharm"/>
    <index-body name="clion" bgc="#3b3e43" title="CLion"/>
  </div>
</template>

<script>
  import IndexBody from "../../../components/front/body/IndexBody";

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
    align-items: center;
    justify-content: flex-start;
  }
</style>
