<template>
  <div id="app">
    <Counter />
  </div>
</template>

<script>
import Counter from "./components/Counter/Counter.vue";

export default {
  name: "App",
  components: {
    Counter,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Yantramanav:wght@100&display=swap");
#app {
  font-family: "Yantramanav", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 30px;
}
</style>
