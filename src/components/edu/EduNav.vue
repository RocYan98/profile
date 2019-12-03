<template>
  <div class="nav-items">
    <nav-item title="海亮外国语学校" name="primary" @mouseenter.native="enter('primary')" @mouseleave.native="leave" :style="{ color: isCurrent('primary')}"></nav-item>
    <nav-item title="稠州中学" name="middle" @mouseenter.native="enter('middle')" @mouseleave.native="leave" :style="{ color: isCurrent('middle')}"></nav-item>
    <nav-item title="义乌二中" name="high" @mouseenter.native="enter('high')" @mouseleave.native="leave" :style="{ color: isCurrent('high')}"></nav-item>
    <nav-item title="中国计量大学" name="university" @mouseenter.native="enter('university')" @mouseleave.native="leave" :style="{ color: isCurrent('university')}"></nav-item>
  </div>
</template>

<script>
  import NavItem from "../../components/edu/NavItem";

  export default {
    name: "EduNav",
    components: {NavItem},
    data() {
      return {
        current: '',
      }
    },
    methods: {
      enter(name) {
        this.current = name;
      },
      leave() {
        this.current = '';
      },
      isCurrent(name) {
        return name === this.current ? "#06c" : "#1d1d1f";
      }
    },
  }
</script>

<style scoped>
  .nav-items {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }
</style>
