<template lang="pug">
  #app
    transition(name='page', mode='out-in')
      router-view
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
@import "~bootstrap/scss/bootstrap";
@import './stylesheets/main';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.page {
  height: 100vh;
}
.page-enter-active {
  transition: opacity .2s;
}
.page-leave-active {
  transition: opacity .2s ease-in-out;
}
.page-enter,
.page-leave-to {
  opacity: 0;
}
</style>
