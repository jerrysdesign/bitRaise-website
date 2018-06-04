<template lang="pug">
  #Home
    .site-line--top
    .site-line--left
    .site-line--right
    .site-line--bottom
    // HEADER
    header
      img(src='@/assets/img/logo.svg', alt='logo')
      //- .nav-icon
      //-   span
      //-   span
      //-   span
    .wrapper
      Hero
      About
      Services
      Contact
    SectionFooter
</template>

<script>
import Hero from '@/components/BlockHero'
import About from '@/components/BlockAbout'
import Services from '@/components/BlockServices'
import Contact from '@/components/BlockContact'
import SectionFooter from '@/components/BlockFooter'
export default {
  name: 'App',
  components: {Hero, About, Services, Contact, SectionFooter}
}
</script>

<style lang="scss" scoped>
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
    @media (max-width: 481px) {
      height: 8px;
    }
  }
  &--right {
    @extend %site-line-stye;
    width: 12px;
    height: 100%;
    right: 0;
    top:0;
    @media (max-width: 481px) {
      width: 8px;
    }
  }
  &--bottom {
    @extend %site-line-stye;
    width: 100%;
    height: 12px;
    bottom:0;
    @media (max-width: 481px) {
      height: 8px;
    }
  }

  &--left {
    @extend %site-line-stye;
    width: 12px;
    height: 100%;
    left: 0;
    top:0;
    @media (max-width: 481px) {
      width: 8px;
    }
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
  @media (max-width: 768px) {
    background: #000829;
  }
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
    &:nth-child(3) {
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
