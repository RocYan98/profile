<template>
  <div class="a">
    <a :href="'#' + name">
      <img :src="require('@/assets/img/edu/' + name + '.png')" style="height: 50px; margin-bottom: 5px">
    </a>
    {{ title }}
  </div>

</template>

<script>
  export default {
    name: "NavItem",
    props: ['title', 'name'],
  }
</script>

<style scoped>
  .a {
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    text-align: center;
    font-size: 12px;
    margin: 30px;
    color: #1d1d1f;
    text-decoration: none;
  }
</style>
