<template>
  <div class="wrapper">
    <div class="nav">
      <div class="nav-items">
        <nav-item v-for="(school,index) in schools" :key="school.name" :title="school.title" :name="school.name"
                  :class="{active: active === index}"></nav-item>
      </div>
    </div>
    <div class="box">
      <div v-for="(school,index) in schools" :key="school.name">
        <div class="section" style="height: 50px">
          <a :name="school.name"></a>
        </div>
        <edu-item :name="school.name" :title="school.title" :pos="school.pos" :sta="school.sta" :index="index" :web="school.web"></edu-item>
      </div>
    </div>
  </div>
</template>

<script>
  import NavItem from "../../../components/front/edu/NavItem";
  import EduItem from "../../../components/front/edu/EduItem";

  export default {
    name: "Education",
    components: {EduItem, NavItem},
    computed: {
      schools() {
        return this.$store.state.eduList;
      }
    },
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
</style>
