<template>
  <div class="wrapper">
    <div class="nav">
      <div class="nav-items">
        <nav-item title="海亮外国语学校" name="primary" :class="{active: active === 0}"></nav-item>
        <nav-item title="稠州中学" name="middle" :class="{active: active === 1}"></nav-item>
        <nav-item title="义乌二中" name="high" :class="{active: active === 2}"></nav-item>
        <nav-item title="中国计量大学" name="university" :class="{active: active === 3}"></nav-item>
      </div>
    </div>
    <div class="box">
      <div class="section" style="height: 44px">
        <a name="primary"></a>
      </div>
      <edu-item name="primary" title="海亮外国语学校" pos="诸暨" sta="小学" index="0"></edu-item>

      <div class="section" style="height: 44px">
        <a name="middle"></a>
      </div>
      <edu-item name="middle" title="稠州中学" pos="义乌" sta="初中" index="1"></edu-item>

      <div class="section" style="height: 44px">
        <a name="high"></a>
      </div>
      <edu-item name="high" title="义乌二中" pos="义乌" sta="高中" index="2"></edu-item>

      <div class="section" style="height: 44px">
        <a name="university"></a>
      </div>
      <edu-item name="university" title="中国计量大学" pos="杭州" sta="大学" index="3"></edu-item>
    </div>
  </div>
</template>

<script>
  import NavItem from "../../components/edu/NavItem";
  import EduItem from "../../components/edu/EduItem";

  export default {
    name: "Education",
    components: {EduItem, NavItem},
    data() {
      return {
        active: 0,
      }
    },
    methods: {
      onScroll() {
        // 获取所有锚点元素
        const navContents = document.querySelectorAll('.section')
        // 所有锚点元素的 offsetTop
        const offsetTopArr = []
        navContents.forEach(item => {
          offsetTopArr.push(item.offsetTop)
        })
        // 获取当前文档流的 scrollTop
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
        // 定义当前点亮的导航下标
        let navIndex = 0
        for (let n = 0; n < offsetTopArr.length; n++) {
          // 如果 scrollTop 大于等于第n个元素的 offsetTop 则说明 n-1 的内容已经完全不可见
          // 那么此时导航索引就应该是n了
          if (scrollTop + 2 > offsetTopArr[n]) {
            navIndex = n
          }
        }
        this.active = navIndex
      }
    },
    mounted() {
      // 监听滚动事件
      window.addEventListener('scroll', this.onScroll, false)
    },
    destroy() {
      // 必须移除监听器，不然当该vue组件被销毁了，监听器还在就会出错
      window.removeEventListener('scroll', this.onScroll)
    }
  }
</script>

<style scoped>

  .active {
    color: #06c;
  }

  .nav-items {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }

  .wrapper {
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 100%;
  }

  .nav {
    position: sticky;
    top: 44px;
    background: rgba(245, 245, 247, 0.6);
    width: 100%;
    height: 108px;
    padding: 8px;
  }

  .box {
    height: 100%;
    width: 100%;
  }

  .edu-wrapper {
    width: 100%;
    height: 800px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    display: flex;
  }

  .item {
    display: flex;
  }

  .info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 50px;
  }
</style>
