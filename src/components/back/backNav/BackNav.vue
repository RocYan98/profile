<template>
  <el-menu
    style="height: 100%"
    :default-active="this.$route.path"
    class="el-menu-vertical-demo"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b">
    <el-submenu index="1">
      <template slot="title">
        <i class="el-icon-s-management"></i>
        <span>用户管理</span>
      </template>
      <el-menu-item index="/backstage/user" @click="toUrl('user')">用户信息</el-menu-item>
      <el-menu-item index="/backstage/edu" @click="toUrl('edu')">教育信息</el-menu-item>
    </el-submenu>
    <el-submenu index="2">
      <template slot="title">
        <i class="el-icon-office-building"></i>
        <span>家乡管理</span>
      </template>
      <el-menu-item index="/backstage/attraction" @click="toUrl('attraction')">旅游景点</el-menu-item>
      <el-menu-item index="/backstage/food" @click="toUrl('food')">家乡美食</el-menu-item>
    </el-submenu>
    <el-menu-item index="/backstage/message" @click="toUrl('message')">
      <i class="el-icon-notebook-1"></i>
      <span slot="title">留言管理</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
  export default {
    name: "BackNav",
    methods: {
      toUrl(url) {
        this.$router.push("/backstage/" + url);
      }
    }
  }
</script>

<style scoped>
</style>
