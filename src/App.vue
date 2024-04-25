<template>
  <router-view/>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style lang="scss">
@import url("https://fonts.google.com/specimen/Nunito+Sans");

body {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

#app {
  font-family: Nunito, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
