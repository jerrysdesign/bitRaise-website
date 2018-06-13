<template lang="pug">
  div(:class='$style.navToggleWrapper')
    div(:class="[open ? $style.active : '', $style.navToggle]", @click='handleClick')
      span
      span
      span
</template>

<script>
import {TweenMax, Power4} from 'gsap'
export default {
  name: 'sidebar-toggle',
  computed: {
    open () {
      return this.$store.state.ui.sidebarOpen
    }
  },
  methods: {
    handleClick () {
      this.$store.dispatch('toggleSidebar')
    }
  }
}
</script>

<style lang="scss" module>
  .navToggleWrapper {
    z-index: 101;
    position: fixed;
    top: 2.5rem;
    right: 2rem;
    padding: 0;
    cursor: pointer;
    z-index: 101;
    @media (max-width: 768px) {
      top: 2.2rem;
    }
  }
  .navToggle {
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
  .active {
    span:nth-child(3){
      width: 100%;
    }
  }
</style>
