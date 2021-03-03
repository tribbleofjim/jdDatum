<template>
  <div id="app">
    <echarts />
    <ele-tree />
  </div>
</template>

<script>
/* eslint-disable quotes */
/* eslint-disable semi */
import Echarts from "./components/Echarts.vue";
import EleTree from "./components/EleTree.vue";
export default {
  components: { Echarts, EleTree },
  // eslint-disable-next-line comma-dangle
  name: "App",
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
