<template>
  <nav>
    <div class="wrapper">
      <div class="item">
        <a href="javascript:;" @click="toIndex"><img src="@/assets/img/logo.png" alt="logo"
                                                     style="height: 25px; width: 25px"></a>
      </div>
      <div class="item">
        <router-link to="/profile" :class="{active: activeName == '/profile'}" @click="setActive">个人信息</router-link>
      </div>
      <div class="item">
        <router-link to="/education" :class="{active: activeName == '/education'}">求学经历</router-link>
      </div>
      <div class="item">
        <router-link to="/prize" :class="{active: activeName == '/prize'}">获奖情况</router-link>
      </div>
      <div class="item">
        <router-link to="/hobby" :class="{active: activeName == '/hobby'}">兴趣爱好</router-link>
      </div>
      <div class="item">
        <router-link to="/hometown" :class="{active: activeName == '/hometowngi'}">家乡介绍</router-link>
      </div>
    </div>
  </nav>
</template>

<script>
  export default {
    name: "NavMenu",
    data() {
      return {
        activeName: this.$route.path,
      }
    },
    computed: {
      setActive() {
        this.activeName = this.$route.path;
      }
    },
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

  .active {
    color: #8c8c91;
  }
</style>
