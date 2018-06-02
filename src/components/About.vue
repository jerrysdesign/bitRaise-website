<template lang="pug">
  // About
  section#about.about.padding_30
    .cont
      .row
        .col-md-4
          h2.section-title.bottom_15
            br
            span about us.
          p
        .col-md-4
          p
          p
              br
        .col-md-4
          p
    // Service
    .services.padding_90.top_60
      .cont.row
        .col-md-4.col-sm-6.service.text-center.bottom_60
          i.icon-desktop
          h3.title.top_15 ICO Concept building and Ideation
          p Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum standard dummy text.
        .col-md-4.col-sm-6.service.text-center.bottom_60
          i.icon-tools
          h3.title.top_15 ICO White Paper
          p Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum standard dummy text.
        .col-md-4.col-sm-6.service.text-center.bottom_60
          i.icon-paintbrush
          h3.title.top_15 Token Developement
          p Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum standard dummy text.
        .col-md-4.col-sm-6.service.text-center
          i.icon-phone
          h3.title.top_15 ICO Website
          p Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum standard dummy text.
        .col-md-4.col-sm-6.service.text-center
          i.icon-camera
          h3.title.top_15 Business Image Developement
          p Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum standard dummy text.
        .col-md-4.col-sm-6.service.text-center
          i.icon-lightbulb
          h3.title.top_15 ICO Marketing
          p Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum standard dummy text.
</template>

<script>
export default {
  name: 'About',
  data () {
    return {
    }
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

.about {
  padding-top: 75px;
}
.titlebar {
  padding: 94px 0;
  height: 300px;
  overflow: hidden;
  text-align: center;
  background: $url_0 bottom center fixed;
  position: relative;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: $black_75;
    z-index: 1;
  }
  .page-title {
    font-size: 70px;
    font-weight: 900;
    letter-spacing: -2px;
    color: $white;
    position: relative;
    z-index: 2;
    span {
      color: $color_sunglo_approx;
    }
  }
  #particles-js {
    height: 300px;
  }
  .breadcrumb {
    background: none;
    text-align: center;
    color: $white;
    position: relative;
    z-index: 7;
    width: auto;
    margin: 0 auto;
    display: inline-block;
    li {
      text-align: center;
      float: left;
      a {
        color: #ffffffa3;
        font-size: 14px;
        //Instead of the line below you could use @include transition($transition-1, $transition-2, $transition-3, $transition-4, $transition-5, $transition-6, $transition-7, $transition-8, $transition-9, $transition-10)
        transition: color 0.3s;
        &:hover {
          color: $white;
          //Instead of the line below you could use @include transition($transition-1, $transition-2, $transition-3, $transition-4, $transition-5, $transition-6, $transition-7, $transition-8, $transition-9, $transition-10)
          transition: color 0.3s;
        }
        &:after {
          font-family: $font_0;
          font-weight: 600;
          content: "\f054";
          margin-left: 8px;
          margin-right: 8px;
          font-size: 8px;
          line-height: 0;
          display: inline-block;
          color: #ffffffa3;
        }
      }
      &:last-child a:after {
        content: '';
      }
    }
  }
}
.clients {
  figure {
    text-align: center;
  }
  img {
    margin: 0 auto;
    opacity: .5;
    //Instead of the line below you could use @include transition($transition-1, $transition-2, $transition-3, $transition-4, $transition-5, $transition-6, $transition-7, $transition-8, $transition-9, $transition-10)
    transition: opacity ease 0.3s;
    &:hover {
      margin: 0 auto;
      opacity: 1;
      //Instead of the line below you could use @include transition($transition-1, $transition-2, $transition-3, $transition-4, $transition-5, $transition-6, $transition-7, $transition-8, $transition-9, $transition-10)
      transition: opacity ease 0.3s;
    }
  }
}
.services {
  position: relative;
  overflow: hidden;
  background: $url_0 bottom center fixed;
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
    padding: 0 68px;
    i {
      color: $color_sunglo_approx;
      font-size: 40px;
    }
    .title {
      font-weight: 500;
      color: $white;
      font-size: 14px;
    }
    p {
      line-height: 24px;
      color: #ffffff63;
      margin-bottom: 0;
    }
  }
}
</style>
