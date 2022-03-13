<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style lang="scss">
body {
  font-family: 'Roboto', sans-serif;
  color: white;
  background: black;
}

#app {
  min-height: 100vh;
}
</style>
