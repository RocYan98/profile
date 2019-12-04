<template>
  <div>
    <div class="edu-wrapper" v-if="index % 2 === 0">
      <dic class="item">
        <div class="img">
          <img :src="require('@/assets/img/edu/env/' + name + '.jpg')" :alt="name">
        </div>
        <div class="info">
          <b style="font-size: 40px;margin-bottom: 10px">{{ title }}</b>
          <b style="font-size: 25px">{{ pos }}-{{ sta }}</b>
          <a :href="web" style="margin-top: 20px; text-decoration: none; font-size: 20px; color: #0066cc;" target="_blank">进一步了解
            ></a>
        </div>
      </dic>
    </div>
    <div class="edu-wrapper" style="background:#eaeaec;" v-else>
      <dic class="item" style="justify-content: flex-end">
        <div class="info">
          <b style="font-size: 40px;margin-bottom: 10px">{{ title }}</b>
          <b style="font-size: 25px">{{ pos }}-{{ sta }}</b>
          <a :href="web" style="margin-top: 20px; text-decoration: none; font-size: 20px; color: #0066cc;" target="_blank">进一步了解
            ></a>
        </div>
        <div class="img">
          <img :src="require('@/assets/img/edu/env/' + name + '.jpg')" :alt="name">
        </div>
      </dic>
    </div>
  </div>
</template>

<script>
  export default {
    name: "EduItem",
    props: ['name', 'title', 'pos', 'sta', 'index', 'web'],
  }
</script>

<style scoped>
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
