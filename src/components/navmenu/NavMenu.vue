<template>
  <nav>
    <div class="wrapper">
      <div class="item">
        <img src="@/assets/img/logo.png" alt="logo" style="height: 25px; width: 25px">
      </div>
      <div class="item">
        <router-link to="">个人信息</router-link>
      </div>
      <div class="item">
        <router-link to="">求学经历</router-link>
      </div>
      <div class="item">
        <router-link to="">获奖情况</router-link>
      </div>
      <div class="item">
        <router-link to="">参与社团</router-link>
      </div>
      <div class="item">
        <router-link to="">兴趣爱好</router-link>
      </div>
      <div class="item">
        <router-link to="">家乡介绍</router-link>
      </div>
    </div>
  </nav>
</template>

<script>
  export default {
    name: "NavMenu"
  }
</script>

<style scoped>
  nav {
    height: 100%;
    display: flex;
    justify-content: center;
  }

  .wrapper {
    display: flex;
    width: 70%;
    height: 100%;
    align-items: center;
    justify-content: space-around;
  }

  .item {

  }

  a {
    color: #f5f5f7;
    font-size: 14px;
    text-decoration: none;
  }
</style>
