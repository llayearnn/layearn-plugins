<template>
  <div id="app">
    <!-- <ly-svg name="phone"></ly-svg> -->
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <LayearnButton @click="Test" />
    <ly-svg
      name="phone"
      style="background-color: red; height: 100px; width: 100px"
    ></ly-svg>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import LayearnButton from "./packages/button/src/LayearnButton.vue";
// import SvgIcon from "./packages/svg-icon/src/index.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    LayearnButton,
    // SvgIcon,
  },
  methods: {
    Test(...args) {
      console.log("args", args);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
