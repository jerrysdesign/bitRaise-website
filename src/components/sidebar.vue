<template lang="pug">
  div(:class='$style.sidebar')
    div(:class='$style.rightInner')
      nav
        ul
          li
            a(href='#')
              | Home
          li
            a(href='#')
              | Project
          li
            a(href='#')
              | Team
          li
            a(href='#')
              | Partners
</template>

<script>
import {TweenMax, Power4} from 'gsap'
export default {
  name: 'sidebar',
  mounted () {
    TweenMax.set(this.$el, {
      x: this.$el.offsetWidth
    })
  },
  computed: {
    open () {
      return this.$store.state.ui.sidebarOpen
    }
  },
  watch: {
    open: function (open) {
      const dX = open ? 0 : this.$el.offsetWidth
      TweenMax.to(this.$el, 0.6, {
        x: dX,
        ease: Power4.easeOut
      })
    }
  }
}
</script>

<style lang="scss" module>
  $white: #fff;
  $color_black_pearl_approx: #000829;
  $white_45: rgba(255, 255, 255, .45);
  .sidebar {
    position: fixed;
    right: 0;
    top: 0;
    width: 300px;
    height: 100vh;
    max-width: 90vw;
    background-color: #FF6600;
    z-index: 100;
    nav {
      ul {
        margin-top: 200px;
        li {
          text-align: left;
          padding-left: 40px;
          opacity: 1;
          transition: all ease 0.7s;
          list-style: none;
          transform: translateY(20px);
          font-size: 2rem;
          a {
            color: $white;
            font-weight: 600;
            font-size: 26px;
            width: 100%;
            display: block;
            line-height: 45px;
            &:hover {
              color: $color_black_pearl_approx;
              transition: color ease 0.3s;
            }
            &.active {
              color: $white_45;
            }
          }
        }
      }
    }
  }
  .rightInner {
    display: table-cell;
    vertical-align: middle;
    text-align: center;
  }

</style>
