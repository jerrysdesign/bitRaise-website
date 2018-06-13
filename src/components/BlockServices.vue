<template lang="pug">
  // Service
  section#services.services
    .cont.row
      .col-md-12.text-center
        h2.section-title.bottom_60(v-scroll-reveal.reset={ delay: 50 })
         | Full
         br
         span
          | ICO services.
      router-link.col-md-4.col-6.service.text-center.bottom_60(v-scroll-reveal.reset={ delay: 200 }, to='/services')
        i.icon-services--01
        h3.title.top_15 ICO Concept building and Ideation
      router-link.col-md-4.col-6.service.text-center.bottom_60(v-scroll-reveal.reset={ delay: 250 }, to='/services')
        i.icon-services--02
        h3.title.top_15 ICO White Paper
      router-link.col-md-4.col-6.service.text-center.bottom_60(v-scroll-reveal.reset={ delay: 300 }, to='/services')
        i.icon-services--03
        h3.title.top_15 Token Developement
      router-link.col-md-4.col-6.service.text-center.bottom_60(v-scroll-reveal.reset={ delay: 200 }, to='/services')
        i.icon-services--04
        h3.title.top_15 ICO Website
      router-link.col-md-4.col-6.service.text-center.bottom_60(v-scroll-reveal.reset={ delay: 250 }, to='/services')
        i.icon-services--05
        h3.title.top_15 Business Image Developement
      router-link.col-md-4.col-6.service.text-center.bottom_60(v-scroll-reveal.reset={ delay: 300 }, to='/services/ico-marketing')
        i.icon-services--06
        h3.title.top_15 ICO Marketing
        .more Descovy
      router-link.col-md-4.col-6.service.text-center.bottom_60(v-scroll-reveal.reset={ delay: 200 }, to='/services')
        i.icon-services--07
        h3.title.top_15 Additional Services
      router-link.col-md-4.col-6.service.text-center.bottom_60(v-scroll-reveal.reset={ delay: 250 }, to='/services/ico-legal')
        i.icon-services--08
        h3.title.top_15 ICO Legal
        .more Descovy
      router-link.col-md-4.col-6.service.text-center.bottom_60(v-scroll-reveal.reset={ delay: 300 }, to='/services/ico-financial')
        i.icon-services--09
        h3.title.top_15 ICO Financial
        .more Descovy
      router-link.col-md-4.col-6.service.text-center.bottom_60(v-scroll-reveal.reset={ delay: 200 }, to='/services/post-ico-services')
        i.icon-services--10
        h3.title.top_15 Post ICO Services
        .more Descovy
      router-link.w-100.text-center(v-scroll-reveal.reset={ delay: 250 }, to='/services')
        .site-btn See All Services
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
$black_75: rgba(0, 0, 0, 0.75);
$white: #fff;
$color_sunglo_approx: #ff6600;
$black_70: rgba(0, 0, 0, 0.70);

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
      background-color: rgba(#172133, .9);
      border: 1px solid rgba(#fff, .8);
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
      font-size: 14px;
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
  width: 72px;
  height: 72px;
}
// @each $name in 01, 02, 03, 04, 05, 06, 07, 08, 09, 10 {
//   .icon-services--#{$name} {
//     background-image: url(../assets/img/icon-services--#{$name}.svg);
//   }
// }
.icon-services--01 {
  background-image: url(../assets/img/icon-services--01.svg);
}
.icon-services--02 {
  background-image: url(../assets/img/icon-services--02.svg);
}
.icon-services--03 {
  background-image: url(../assets/img/icon-services--03.svg);
}
.icon-services--04 {
  background-image: url(../assets/img/icon-services--04.svg);
}
.icon-services--05 {
  background-image: url(../assets/img/icon-services--05.svg);
}
.icon-services--06 {
  background-image: url(../assets/img/icon-services--06.svg);
}
.icon-services--07 {
  background-image: url(../assets/img/icon-services--07.svg);
}
.icon-services--08 {
  background-image: url(../assets/img/icon-services--08.svg);
}
.icon-services--09 {
  background-image: url(../assets/img/icon-services--09.svg);
}
.icon-services--10 {
  background-image: url(../assets/img/icon-services--10.svg);
}
.site-btn {

}
</style>
