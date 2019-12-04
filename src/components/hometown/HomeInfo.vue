<template>
  <div>
    <div class="title">
      {{ title }}
    </div>
    <div class="text">
      <p>
        {{ text }}
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "HomeInfo",
    props: ['title', 'text']
  }
</script>

<style scoped>
  .title {
    font-size: 40px;
    padding-top: 40px;
    padding-bottom: 40px;
    font-weight: bold;
  }

  .text {
    font-family: Gotham SSm A, Gotham SSm B, Helvetica, Arial, sans-serif;
    font-size: 16px;
    line-height: 30px;
    color: #696969;
  }
</style>
