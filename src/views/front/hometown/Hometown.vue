<template>
  <div class="wrapper">
    <div class="nav">
      <div class="nav-items">
        <div class="a" :class="{'active': active == 'attraction'}">
          <a href="#" @click="active = 'attraction'">
            <img src="@/assets/img/hometown/attraction.png" style="height: 40px; margin-bottom: 5px">
          </a>
          旅游景点
        </div>
        <div class="a" :class="{'active': active == 'food'}">
          <a href="#" @click="active = 'food'">
            <img src="@/assets/img/hometown/food.png" style="height: 40px; margin-bottom: 5px">
          </a>
          家乡美食
        </div>
      </div>
    </div>
    <div class="bg">
      <div class="info">
        <b style="font-size: 70px">黄岩</b>
      </div>
    </div>
    <div class="box">
      <div v-if="active == 'attraction'" class="msg">
        <div v-for="attraction in attractions" :key="attraction.title">
          <home-info :title="attraction.title" :text="attraction.text" :pic="attraction.pic"></home-info>
        </div>
      </div>
      <div v-else class="msg">
        <div v-for="food in foods" :key="food.title" style="width: 100%;">
          <home-info :title="food.title" :text="food.text" :pic="food.pic"></home-info>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import HomeInfo from "../../../components/front/hometown/HomeInfo";

  export default {
    name: "Hometown",
    components: {HomeInfo},
    data() {
      return {
        active: "attraction",
        attractions: [{
          title: "黄岩简介",
          text: "黄岩，位于浙江黄金海岸线中部，东界椒江区、路桥区，南与温岭市、乐清市接壤，西邻仙居县、永嘉县，北连临海市，距省会杭州207公里。全区总面积988平方公里。唐上元二年（675年）始设永宁县，天授元年（690年）改名黄岩至今，建制几经更迭，1989年撤县设市，1994年撤市设区，今为台州市主城区之一。黄岩农业素有“黄岩熟，台州足”的誉称。",
          pic: "http://oss.rocyan.com/javaweb/1582818488279.jpg"
        }, {
          title: "划岩山风景区",
          text: "划岩山是台州市区唯一的省级风景名胜区，总面积11.52平方公里，为括苍山脉自西向东的延伸带。景区以奇、险、俊为主要特点，林茂山秀，青溪长流，幽谷深曲，怪岩林立，其间峰、岩、洞、谷、瀑、潭、洲、崖一应俱全，瀑、潭、洞巧妙结合，使观瀑、戏潭、驻洞而各有妙趣，是集游览、探险和科普教育于一体的山丘型风景名胜区。景区内瀑布众多，尤以雪瀑潭、飞岩瀑最为壮观。峰景中以画屏峰、屏障峰、六子峰、三屯峰与弥勒峰尤显俊奇，画屏、屏障与六子峰环接屏峙，峰峰壁立，形如其名，状形肖物的奇岩，形象逼真。还有国内外十分罕见的岩层断裂景观和迷宫般的裂谷。主景点飞鹰道高悬于山崖峭壁，天然造就了近米宽的崖腰石廊，于崖壁中穿行，俯视万丈深渊，是锻炼胆魄的险道，更令人叫绝的是上下鹰道都和瀑布相连，鹰道横空、飞瀑高悬、裂谷纵横、相映成趣，构成秀丽、奇险、壮观的画面。",
          pic: "http://oss.rocyan.com/javaweb/1582818506241.jpg"
        }, {
          title: "永宁公园",
          text: "永宁公园全长1.5公里，占地21.6公顷。公园以现代、简约为基调，以生态为特色，以水为主体，环水构建楼阁、绿坡、树阵、竹林，集生态保护、人文观赏、休闲健身等功能于一园，具有强烈的时代色彩和乡土风情。公园分生态和景观两大园区。生态区突出自然元素，绿坡茂林、江堤湿地、栈桥流水、鹅卵石滩、梯级水瀑、水杉树阵和盒中景观共同构成园区自然风貌；景观区以现代、简约的几何形建筑为主，由主题雕塑《创造》、水晶迪厅、渔人码头、亲水平台等建筑与景观组成。永宁公园荣获2005年建设部中国人居环境范例奖，2006年美国景观设计师协会设计荣誉奖，为黄岩人居环境和城市建设独特的闪光点。",
          pic: "http://oss.rocyan.com/javaweb/1582818533225.jpg"
        }],
        foods: [{
          title: "test",
          text: "test",
          pic: "http://oss.rocyan.com/javaweb/1582818488279.jpg"
        }, {
          title: "test",
          text: "test",
          pic: "http://oss.rocyan.com/javaweb/1582818506241.jpg"
        }]
      }
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

  .nav {
    position: sticky;
    top: 44px;
    background: rgba(245, 245, 247, 0.6);
    width: 100%;
    height: 108px;
    padding: 8px;
  }

  .bg {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 580px;
    background: url("../../../assets/img/hometown/bg.png") no-repeat;
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
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .msg {
    width: 70%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin: 50px;
  }

  .a {
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    text-align: center;
    font-size: 12px;
    margin: 70px;
    color: #1d1d1f;
    text-decoration: none;
  }

  .nav-items {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }

  .active {
    color: #06c;
  }
</style>
