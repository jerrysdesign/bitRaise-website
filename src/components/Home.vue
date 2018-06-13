<template lang="pug">
  #Home
    .site-line--top
    .site-line--left
    .site-line--right
    .site-line--bottom
    // HEADER
    header
      img(src='@/assets/img/logo.svg', alt='logo')
    .wrapper
      Hero
      About
      Services
      Contact
    SectionFooter
    sidebar-toggle
    sidebar
</template>

<script>
import Hero from '@/components/BlockHero'
import About from '@/components/BlockAbout'
import Services from '@/components/BlockServices'
import Contact from '@/components/BlockContact'
import SectionFooter from '@/components/BlockFooter'
import Sidebar from '@/components/sidebar.vue'
import SidebarToggle from '@/components/sidebarToggle.vue'

export default {
  name: 'App',
  components: {Hero, About, Services, Contact, SectionFooter, Sidebar, SidebarToggle}
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
    width: 100vw;
    height: 12px;
    top: 0;
    @media (max-width: 481px) {
      height: 8px;
    }
  }
  &--right {
    @extend %site-line-stye;
    width: 12px;
    height: 100vh;
    right: 0;
    top:0;
    @media (max-width: 481px) {
      width: 8px;
    }
  }
  &--bottom {
    @extend %site-line-stye;
    width: 100vw;
    height: 12px;
    bottom:0;
    @media (max-width: 481px) {
      height: 8px;
    }
  }

  &--left {
    @extend %site-line-stye;
    width: 12px;
    height: 100vh;
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
  padding: 30px;
  top: 0;
  width: 100vw;
  z-index: 11;
  transition: all ease 0.3s 1.0s;
  @media (max-width: 768px) {
    background: #000829;
  }
}

</style>
