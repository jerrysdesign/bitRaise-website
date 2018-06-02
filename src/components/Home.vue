<template lang="pug">
  // HOME SECTION
  section#home
    .home
      #block(style='width: 100%; height: 100%; position: absolute;')
      .home-content
        .cont(v-scroll-reveal.reset={ delay: 250 })
          h1.promo-text.text-center
            span.element {{ msg }}
            br
          a.site-btn.top_45(href='#about') Let&rsquo;s go!
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Welcome to bitRaise'
    }
  }
}
</script>

<style lang="scss" scoped>
// Home
#home{
  position: relative;
  height: 100vh;
}

.home {
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
  .home-content {
    position: relative;
    display: table-cell;
    vertical-align: middle;
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
      font-weight: bold;
      letter-spacing: -2px;
      position: relative;
      z-index: 4;
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
