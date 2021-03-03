<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
/* eslint-disable quotes */
/* eslint-disable semi */

export default {
  // eslint-disable-next-line comma-dangle
  name: "App",
  // mounted () {
  //   window.addEventListener('hashchange', () => {
  //     var currentPath = window.location.hash.slice(1); // 获取输入的路由
  //     if (this.$router.path !== currentPath) {
  //       this.$router.push(currentPath); // 动态跳转
  //     }
  //   }, false);
  // }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
