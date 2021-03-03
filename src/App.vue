<template>
  <div id="app">
    <my-header />
    <categories />
  </div>
</template>

<script>
/* eslint-disable quotes */
/* eslint-disable semi */
import MyHeader from "./components/MyHeader.vue";
import Categories from "./components/Categories.vue";

export default {
  components: { MyHeader, Categories },
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
