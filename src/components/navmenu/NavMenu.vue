<template>
  <nav>
    <div class="wrapper">
      <div class="item">
        <img src="@/assets/img/logo.png" alt="logo" style="height: 25px; width: 25px">
      </div>
      <div class="item">
        <router-link to="/profile">个人信息</router-link>
      </div>
      <div class="item">
        <router-link to="/education">求学经历</router-link>
      </div>
      <div class="item">
        <router-link to="/prize">获奖情况</router-link>
      </div>
      <div class="item">
        <router-link to="/association">参与社团</router-link>
      </div>
      <div class="item">
        <router-link to="/hobby">兴趣爱好</router-link>
      </div>
      <div class="item">
        <router-link to="/hometown">家乡介绍</router-link>
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
    width: 60%;
    height: 100%;
    align-items: center;
    justify-content: space-between;
  }

  .item {

  }

  a {
    color: #f5f5f7;
    font-size: 10px;
    text-decoration: none;
  }
</style>
