<template lang="pug">
  #app
    .site-line--top
    .site-line--left
    .site-line--right
    .site-line--bottom

    // HEADER
    header
      img(src='@/assets/img/logo.svg', alt='logo')
      .nav-icon
        span
        span
        span
    .wrapper
      Home
      About
    SectionFooter
</template>

<script>
import Home from '@/components/Home'
import About from '@/components/About'
import SectionFooter from '@/components/SectionFooter'
export default {
  name: 'App',
  components: {Home, About, SectionFooter }
}
</script>

<style lang="scss">
@import "~bootstrap/scss/bootstrap";
@import './stylesheets/main';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
%site-line-stye {
  position: fixed;
  z-index: 999;
  background: #FF6600;
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

// Header Section
header{
  position: fixed;
  z-index: 3;
  padding: 30px;
  top: 0;
  width: 100%;
  z-index: 11;
  transition: all ease 0.3s 1.0s;
}
.nav-icon {
  float: right;
  width: 30px;
  height: 18px;
  position: relative;
  transform: rotate(0deg);
  transition: .5s ease-in-out;
  cursor: pointer;
  span {
    display: block;
    position: absolute;
    height: 3px;
    width: 100%;
    background: #fff;
    opacity: 1;
    transition: .25s ease-in-out;
    &:nth-child(1) {
      top: 0px;
      transform-origin: left center;
    }
    &:nth-child(2) {
      top: 7px;
      transform-origin: left center;
    }
    &::nth-child(3) {
      top: 14px;
      transform-origin: left center;
      width: 60%;
      right: 0 !important;
    }
  }
  &:hover {
    span:nth-child(3){
      width: 100%;
    }
  }
}
</style>
