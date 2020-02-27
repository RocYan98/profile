<template>
  <el-menu
    style="height: 100%"
    default-active="1-1"
    class="el-menu-vertical-demo"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b">
    <el-submenu index="1">
      <template slot="title">
        <i class="el-icon-s-management"></i>
        <span>信息管理</span>
      </template>
      <el-menu-item index="1-1">个人信息</el-menu-item>
      <el-menu-item index="1-2">教育信息</el-menu-item>
      <el-menu-item index="1-3">家乡信息</el-menu-item>
    </el-submenu>
    <el-menu-item index="2">
      <i class="el-icon-s-custom"></i>
      <span slot="title">账号管理</span>
    </el-menu-item>
    <el-menu-item index="3">
      <i class="el-icon-notebook-1"></i>
      <span slot="title">留言管理</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
  export default {
    name: "BackNav",
  }
</script>

<style scoped>
</style>
