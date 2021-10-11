<template>
  <Vue></Vue>

  <router-view />
</template>

<script>
import Vue from "./components/Nav.vue";
export default {
  components: { Vue },
};
</script>

<style>
body {
  background: #f8f8f8;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  max-width: 600px;
  margin: 0 auto;
  color: #555;
}
</style>
