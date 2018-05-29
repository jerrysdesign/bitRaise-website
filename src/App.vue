<template lang="pug">
  #app
    .site-line--top
    .site-line--left
    .site-line--right
    .site-line--bottom
    router-view
</template>
<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
%site-line-stye {
  position: fixed;
  z-index: 999;
  background: #e36969;
}
.site-line {
  &--top {
    @extend %site-line-stye;
    width: 100%;
    height: 12px;
    top: 0;
  }
  &--right {
    @extend %site-line-stye;
    width: 12px;
    height: 100%;
    right: 0;
    top:0;
  }
  &--bottom {
    @extend %site-line-stye;
    width: 100%;
    height: 12px;
    bottom:0;
  }

  &--left {
    @extend %site-line-stye;
    width: 12px;
    height: 100%;
    left: 0;
    top:0;
  }
}

</style>
