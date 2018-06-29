<template lang="pug">
  // Service
  section#services.services
    .cont.row
      .col-md-12.text-center
        h2.section-title.bottom_60(v-scroll-reveal.reset={ delay: 50 })
         | What
         br
         span
          | we can do?
      .col-md-4.service.text-center.bottom_60(v-scroll-reveal.reset={ delay: 200 })
        i.icon-services--01
        h3.title End to End ICO Support
      .col-md-4.service.text-center.bottom_60(v-scroll-reveal.reset={ delay: 250 })
        i.icon-services--02
        h3.title Enterprise Blockchain
      .col-md-4.service.text-center.bottom_60(v-scroll-reveal.reset={ delay: 300 })
        i.icon-services--03
        h3.title Consulting and Training
</template>

<script>
export default {
  name: 'Services',
  data () {
    return {
    }
  },
  mounted() {
  }
}
</script>

<style lang="scss" scoped>
// About
//colors
$black_75: rgba(0, 0, 0, .75);
$white: #fff;
$color_sunglo_approx: #ff6600;
$black_70: rgba(0, 0, 0, .7);

//fonts
$font_0: Font Awesome 5 Free;

//urls
$url_0: url(../assets/img/home-bg.jpg);

.services {
  position: relative;
  overflow: hidden;
  background: $url_0 bottom center fixed;
  padding: 100px 0;
  @media (max-width: 768px) {
    padding: 80px 0;
  }
  @media (max-width: 481px) {
    padding: 60px 0;
  }
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: $black_70;
  }
  .service {
    background-color: rgba(#172133, 0);
    transition: all .2s;
    padding: 15px 10px;
    border: 1px solid rgba(#fff, 0);
    transition: all ease .4s;
    &:hover {
      // background-color: rgba(#172133, .9);
      // border: 1px solid rgba(#fff, .8);
      .more {
        color: #172133;
        background: #FFF;
        transition: all ease 0.3s;
        padding:5px 30px;
      }
    }
    i {
      color: $color_sunglo_approx;
      font-size: 40px;
    }
    .title {
      font-weight: 500;
      color: $white;
      font-size: 20px;
      margin-top: 25px;
    }
    .more {
      color: #fff;
      border: 1px solid #fff;
      display: inline-block;
      padding:5px 20px;
      border-radius: 50px;
      font-size: 12px;
      font-weight: 500;
      cursor: pointer;
      transition: all ease 0.3s;
      width: auro;
    }
    p {
      line-height: 24px;
      color: #ffffff63;
      margin-bottom: 0;
    }
    @media (max-width: 1024px){
    }
    @media (max-width: 481px) {
      margin-bottom: 45px;
    }
    &:last-child {
      margin-bottom: 0;
    }
  }
}
[class^='icon-services--'] {
  display: inline-block;
  width: 128px;
  height: 128px;
}
// @each $name in 01, 02, 03, 04, 05, 06, 07, 08, 09, 10 {
//   .icon-services--#{$name} {
//     background-image: url(../assets/img/icon-services--#{$name}.svg);
//   }
// }
.icon-services--01 {
  background-image: url(../assets/img/services-item-a.svg);
}
.icon-services--02 {
  background-image: url(../assets/img/services-item-b.svg);
}
.icon-services--03 {
  background-image: url(../assets/img/services-item-c.svg);
}
.site-btn {

}
</style>
