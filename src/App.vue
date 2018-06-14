<template lang="pug">
  #app
    transition(
      name='page',
      mode='out-in'
      v-on:appear='appear',
      v-on:before-enter='beforeEnter',
      v-on:enter='enter',
      v-on:leave='leave',
      v-bind:css='false')
      router-view
    #blinds
</template>

<script>
import Velocity from 'velocity-animate/velocity.js'

export default {
  name: 'App',
  methods: {
    appear: function(el) {
      var b = document.getElementById('blinds');
      Velocity(b, { translateX: '-100%' }, { duration: 400, delay: 200 });
      Velocity(el, { opacity: 1 }, { duration: 0, delay: 100 });
    },
    beforeEnter: function(el) {
      el.style.opacity = 0
    },
    enter: function(el, done) {
      var b = document.getElementById('blinds');
      Velocity(el, { opacity: 1 }, { duration: 0, complete: window.scrollTo(0, 0) });
      Velocity(b, { translateX: '100%' }, { duration: 600, delay: 50, complete: done });
    },
    leave: function(el, done) {
      var b = document.getElementById('blinds');
      Velocity(el, { opacity: 0 }, { duration: 0, delay: 400 });
      Velocity(b, { translateX: '-100%' }, { duration: 0 });
      Velocity(b, { translateX: '0%' }, { duration: 400, complete: done });
    }
  },
  components: {
    Velocity
  }
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
#blinds {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 9999;
  pointer-events: none;
  background: #000829;
}
</style>
