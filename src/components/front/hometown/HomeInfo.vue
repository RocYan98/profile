<template>
  <div class="outbox">
    <div :class="iscele === 1 ? 'is-cele' : 'else'">
      <div class="title">
        {{ title }}
      </div>
      <div class="text">
        <p>
          {{ text }}
        </p>
      </div>
    </div>
    <div class="pic" :style="{backgroundImage : 'url('+pic+')'}">
    </div>
  </div>
</template>

<script>
  export default {
    name: "HomeInfo",
    props: ['title', 'text', 'pic', 'iscele']
  }
</script>

<style scoped>
  .outbox {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
  }

  .title {
    font-size: 40px;
    padding-top: 40px;
    padding-bottom: 40px;
    font-weight: bold;
  }

  .text {
    font-size: 16px;
    line-height: 30px;
    color: #696969;
  }

  .pic {
    width: 70%;
    height: 450px;
    margin: 30px;
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }

  .is-cele {
    width: 100%;
    margin-right: 100px;
  }

  .else {
    width: 30%;
    margin-right: 100px;
  }

</style>
