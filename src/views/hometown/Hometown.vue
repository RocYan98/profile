<template>
  <div class="wrapper">
    <div class="bg">
      <div class="info">
        <img src="@/assets/img/hometown/logo.png" alt="logo" style="width: 40px; padding-right: 10px">
        <b style="font-size: 70px">黄岩</b>
      </div>
    </div>
    <div class="box">
      <div class="msg">
        <div class="logo">
          <b style="padding: 10%; width: 100%; font-size: 20px">浙江台州</b>
        </div>
        <div class="big-title">
          中国蜜橘之乡
          <br>
          ——黄岩
        </div>
        <a href="http://www.zjhy.gov.cn"
           style="margin-top: 20px; text-decoration: none; font-size: 20px; color: #0066cc;" target="_blank">进一步了解
          ></a>
        <div v-for="info in info" :key="info.title">
          <div class="section" style="height: 100px"></div>
          <home-info :title="info.title" :text="info.text"></home-info>
        </div>
      </div>
      <div class="pic">
        <img :src="require('@/assets/img/hometown/' + active + '.jpg')" alt="">
      </div>
    </div>
  </div>
</template>

<script>
  import HomeInfo from "../../components/hometown/HomeInfo";

  export default {
    name: "Hometown",
    components: {HomeInfo},
    data() {
      return {
        active: 0,
        info: [{
          title: "黄岩简介",
          text: "黄岩，位于浙江黄金海岸线中部，东界椒江区、路桥区，南与温岭市、乐清市接壤，西邻仙居县、永嘉县，北连临海市，距省会杭州207公里。全区总面积988平方公里。唐上元二年（675年）始设永宁县，天授元年（690年）改名黄岩至今，建制几经更迭，1989年撤县设市，1994年撤市设区，今为台州市主城区之一。黄岩农业素有“黄岩熟，台州足”的誉称。"
        }, {
          title: "划岩山风景区",
          text: "划岩山是台州市区唯一的省级风景名胜区，总面积11.52平方公里，为括苍山脉自西向东的延伸带。景区以奇、险、俊为主要特点，林茂山秀，青溪长流，幽谷深曲，怪岩林立，其间峰、岩、洞、谷、瀑、潭、洲、崖一应俱全，瀑、潭、洞巧妙结合，使观瀑、戏潭、驻洞而各有妙趣，是集游览、探险和科普教育于一体的山丘型风景名胜区。景区内瀑布众多，尤以雪瀑潭、飞岩瀑最为壮观。峰景中以画屏峰、屏障峰、六子峰、三屯峰与弥勒峰尤显俊奇，画屏、屏障与六子峰环接屏峙，峰峰壁立，形如其名，状形肖物的奇岩，形象逼真。还有国内外十分罕见的岩层断裂景观和迷宫般的裂谷。主景点飞鹰道高悬于山崖峭壁，天然造就了近米宽的崖腰石廊，于崖壁中穿行，俯视万丈深渊，是锻炼胆魄的险道，更令人叫绝的是上下鹰道都和瀑布相连，鹰道横空、飞瀑高悬、裂谷纵横、相映成趣，构成秀丽、奇险、壮观的画面。"
        }, {
          title: "永宁公园",
          text: "永宁公园全长1.5公里，占地21.6公顷。公园以现代、简约为基调，以生态为特色，以水为主体，环水构建楼阁、绿坡、树阵、竹林，集生态保护、人文观赏、休闲健身等功能于一园，具有强烈的时代色彩和乡土风情。公园分生态和景观两大园区。生态区突出自然元素，绿坡茂林、江堤湿地、栈桥流水、鹅卵石滩、梯级水瀑、水杉树阵和盒中景观共同构成园区自然风貌；景观区以现代、简约的几何形建筑为主，由主题雕塑《创造》、水晶迪厅、渔人码头、亲水平台等建筑与景观组成。永宁公园荣获2005年建设部中国人居环境范例奖，2006年美国景观设计师协会设计荣誉奖，为黄岩人居环境和城市建设独特的闪光点。"
        }],
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
  .wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #eaeaec;
  }

  .bg {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 580px;
    background: url("../../assets/img/hometown/bg.png") no-repeat;
  }

  .info {
    width: 70%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  b {
    color: #f5f5f7;
  }

  .box {
    width: 100%;
    height: 2300px;
    display: flex;
    padding-left: 12%;
    box-sizing: border-box;
    justify-content: space-between;
  }

  .msg {
    width: 30%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }

  .logo {
    width: 150px;
    height: 150px;
    background-color: #000;
    transform: translateY(-50%);
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
  }

  .big-title {
    font-size: 60px;
    font-weight: bold;
  }

  .pic {
    width: 900px;
    height: 500px;
    box-sizing: border-box;
    margin-top: 100px;
    margin-right: 20px;
    position: sticky;
    top: 144px;
  }

  .pic img {
    width: 900px;
    height: 500px;
  }

</style>
