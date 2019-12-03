<template>
  <div class="in-wrapper" :style="{background: bgc}">
    <div class="item">
      <svg-icon :name="name"></svg-icon>
      <h1 style="display: inline; font-size: 60px">{{ title }}</h1>
    </div>
    <div class="img">
      <img :src="url" :alt="name" style="height: 95%">
    </div>
  </div>
</template>

<script>
  export default {
    name: "IndexBody",
    data() {
      return {
        url: require('../../assets/img/' + this.name + '.png'),
      }
    },
    props: ['name', 'bgc', 'title']
  }
</script>

<style scoped>
  .in-wrapper {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 800px;
    align-items: center;
    justify-content: flex-start;
  }

  .item {
    margin-top: 80px;
    width: 60%;
  }

  .img {
    /*position: relative;*/
    margin-top: 20px;
    height: 100%;
    width: 60%;
  }
</style>
