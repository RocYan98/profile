<template>
  <div class="wrapper">
    <div class="nav">
      <div class="nav-items">
        <div class="a" :class="{'active': active == 'attraction'}">
          <a href="#" @click="toAttr">
            <img src="@/assets/img/hometown/attraction.png" style="height: 40px; margin-bottom: 5px">
          </a>
          旅游景点
        </div>
        <div class="a" :class="{'active': active == 'food'}">
          <a href="#" @click="toFood">
            <img src="@/assets/img/hometown/food.png" style="height: 40px; margin-bottom: 5px">
          </a>
          家乡美食
        </div>
        <div class="a" :class="{'active': active == 'cele'}">
          <a href="#" @click="toCele">
            <img src="@/assets/img/hometown/cele.png" style="height: 40px; margin-bottom: 5px">
          </a>
          文化名人
        </div>
      </div>
    </div>
    <div class="bg">
      <div class="info">
        <b style="font-size: 70px">家乡</b>
      </div>
    </div>
    <div class="box">
      <div v-if="active === 'attraction'" class="msg">
        <div v-for="attraction in attractions" :key="attraction.title" style="width: 100%;">
          <home-info :title="attraction.title" :text="attraction.text" :pic="attraction.pic"/>
        </div>
      </div>
      <div v-if="active === 'food'" class="msg">
        <div v-for="food in foods" :key="food.title" style="width: 100%;">
          <home-info :title="food.title" :text="food.text" :pic="food.pic"/>
        </div>
      </div>
      <div v-if="active === 'cele'" class="msg">
        <div v-for="c in cele" :key="c.title" style="width: 100%;">
          <home-info :title="c.title" :text="c.text" :pic="c.pic" :iscele="1"/>
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
    created() {
      this.getAttr();
    },
    data() {
      return {
        active: "attraction",
        attractions: [],
        foods: [],
        cele: [],
      }
    },
    methods: {
      getAttr() {
        this.axios.request({
          method: "get",
          url: "/attr/info",
          params: {
            uid: this.$store.state.user.uid,
          }
        })
          .then(response => {
            if (response.data.code === 0) {
              this.attractions = response.data.data.attractions;
            }
          });
      },
      getFood() {
        this.axios.request({
          method: "get",
          url: "/food/info",
          params: {
            uid: this.$store.state.user.uid,
          }
        })
          .then(response => {
            if (response.data.code === 0) {
              this.foods = response.data.data.food;
            }
          });
      },
      getCele() {
        this.axios.request({
          method: "get",
          url: "cele/info",
          params: {
            uid: this.$store.state.user.uid,
          }
        })
          .then(response => {
            if (response.data.code === 0) {
              this.cele = response.data.data.cele;
            }
          })
      },
      toAttr() {
        this.active = "attraction";
        this.getAttr();
      },
      toFood() {
        this.active = "food";
        this.getFood();
      },
      toCele() {
        this.active = "cele";
        this.getCele();
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
