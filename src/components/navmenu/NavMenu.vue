<template>
  <nav>
    <div class="wrapper">
      <div class="item">
        <a href="javascript:;" @click="toIndex"><img src="@/assets/img/logo.png" alt="logo"
                                                     style="height: 25px; width: 25px"></a>
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
    name: "NavMenu",
    methods: {
      toIndex() {
        this.$router.push('/index');
      }
    }
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

  .router-link-active {
    color: #8c8c91;
  }
</style>
