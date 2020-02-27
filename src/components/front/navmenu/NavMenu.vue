<template>
  <nav>
    <div class="wrapper">
      <div class="item">
        <router-link to="/index">
          <img src="@/assets/img/logo.png" alt="logo" style="height: 25px; width: 25px; margin-top: 5px">
        </router-link>
      </div>
      <div class="item">
        <router-link :to="profile">个人信息</router-link>
      </div>
      <div class="item">
        <router-link :to="education">求学经历</router-link>
      </div>
      <div class="item">
        <router-link :to="prize">获奖情况</router-link>
      </div>
      <div class="item">
        <router-link :to="hometown">家乡介绍</router-link>
      </div>
      <div class="item">
        <router-link to="/message" class="el-icon-notebook-1" style="font-size: 25px;"></router-link>
      </div>
    </div>
  </nav>
</template>

<script>
  export default {
    name: "NavMenu",
    computed: {
      profile() {
        if (this.$store.state.user == -1) return "";
        else return "/profile";
      },
      education() {
        if (this.$store.state.user == -1) return "";
        else return "/education";
      },
      prize() {
        if (this.$store.state.user == -1) return "";
        else return "/prize";
      },
      hometown() {
        if (this.$store.state.user == -1) return "";
        else return "/hometown";
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

  a {
    color: #f5f5f7;
    font-size: 10px;
    text-decoration: none;
  }

  .router-link-active {
    color: #8c8c91;
  }
</style>
