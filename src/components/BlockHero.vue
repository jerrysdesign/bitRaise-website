<template lang="pug">
  // HOME SECTION
  section#hero
    .hero(:style="{ opacity: opacitySet }")
      video#block(autoplay, muted, loop)
        source(src='static/video/blockchain.mp4', type='video/mp4')
      .hero-content
        .cont(:style="{transform: 'scale('+ opacitySet +')'}")
          h1.promo-text.text-center
            img.logo(src='@/assets/img/logo.svg', alt='logo')
            br
            span.element {{ msg }}
            br
          a.site-btn.top_45(href='#about') Let&rsquo;s go!
</template>

<script>
import $ from 'jQuery';

export default {
  name: 'Hero',
  data () {
    return {
      msg: '專注於區塊鏈各項服務的領先者',
      appHeight: 0,
      currentScroll: 0,
      opacitySet: 1
    }
  },
  mounted(){
    window.addEventListener('scroll', this.getScrollTop, true)
    this.setDefault()
    $( window ).resize(this.setDefault)
    var where =  window.pageYOffset || document.documentElement.scrollTop
  },
  methods: {
    setDefault() {
      this.appHeight = document.getElementsByClassName('hero')[0].clientHeight
      this.getScrollTop()
      this.setOpacitySet()
    },
    getScrollTop() {
      this.currentScroll = document.body.scrollTop || document.documentElement.scrollTop
    },
    setOpacitySet(){
      this.opacitySet = `${(1 - this.currentScroll/(this.appHeight / 20) / 15)}`
      console.log(this.opacitySet)
    }
  },
  watch: {
    currentScroll(){
      this.setOpacitySet()
    }
  }
}
</script>

<style lang="scss" scoped>
// Home
#hero {
  position: relative;
  height: 100vh;
}
#block {
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(4, 17, 74, 0.75);
    z-index: 0;
  }
}
.hero {
  display: table;
  width: 100%;
  background: url(../assets/img/home-bg.jpg) bottom center fixed;
  background-size: cover;
  position: fixed;
  top: 0;
  height: 100%;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(4, 17, 74, 0.75);
    z-index: 0;
  }
  .hero-content {
    position: relative;
    display: table-cell;
    vertical-align: middle;
    z-index: 99;
    .logo {
      width: 40%;
      margin-bottom: 2rem;
      @media (max-width: 1024px){
        width: 50%;
      }
      @media (max-width: 768px) {
        width: 60%;
      }
      @media (max-width: 481px) {
        width: 90%;
      }
    }
    .site-btn {
      z-index: 6;
      position: relative;
      margin-left: auto;
      margin-right: auto;
      display: table;
      transition: all ease 0.3s;
      text-align: center;
    }
    .promo-text{
      color: #fff;
      font-size: 70px;
      font-weight: 900;
      letter-spacing: -2px;
      position: relative;
      z-index: 4;
      @media (max-width: 1024px){
        font-size: 64px;
      }
      @media (max-width: 768px) {
        font-size: 54px;
      }
      .element {
        color: #ff6600;
      }
    }
  }
  @media (max-width: 1024px){
    background-size: cover;
    background-attachment: scroll !important;
    overflow: hidden;
  }
}

#particles-js {
  position: absolute;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 6;
}
.rev_slider .slotholder:after {
  width: 100%;
  height: 100%;
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  pointer-events: none;
  /* black overlay with 50% transparency */
  background: rgba(0, 8, 41, 0.68);
}
.rev-title{
  color: #fff;
  font-weight: bold;
  letter-spacing: -1px;
  line-height: 56px;
}
.rev-text{
  color: #fff;
}

</style>
