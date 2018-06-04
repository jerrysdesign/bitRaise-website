<template lang="pug">
  footer
    .cont
      .footer-top.row
        .col-md-6.need-us
          h4.title.bottom_15
            | Do you need us?
            br
            span Let&rsquo;s work together.
          p
            | We are always looking for new exciting projects and collaborations.
            br
            | Feel free to contact us.
        .col-md-3.col-sm-6.information
          h4.title.bottom_15 Our Address
          p
            | 20F, No.60, Sec 2, Dunhua S.Rd,
            br
            | Taipei, Taiwan
        .col-md-3.col-sm-6.information
          h4.title.bottom_15 Phone
          p
            | +886-919-990-188(顧問諮詢代表)
      .copyright
        p.float-left Copyright 2018 All rights reserved.
        img.float-right(src='@/assets/img/logo-br.svg', alt='')
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      msg: 'Welcome to bitRaise'
    }
  }
}
</script>

<style lang="scss" scoped>
// colors
$bg-cover: rgba(#00030A, .85);
$white: #fff;
$color_sunglo_approx: #ff6600;

// urls
$url_0: url(../assets/img/home-bg.jpg);

footer {
  background: $url_0 bottom center fixed;
  position: relative;
  padding: 60px 0 30px;
  @media (max-width: 768px) {
    padding: 40px 0 30px;
  }
  @media (max-width: 481px) {
    padding: 30px 0;
  }
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: $bg-cover;
  }
  .cont {
    position: relative;
  }
  .copyright {
    border-top: 1px solid rgba(#8C99B8,.35);
    padding-top: 30px;
    margin-top: 30px;
    overflow: hidden;
    @media (max-width: 481px) {
      img.float-right {
        display: none;
      }
    }
  }
  .footer-top .need-us .title {
    font-size: 35px;
    color: $white;
    font-weight: 600;
    span {
      color: $color_sunglo_approx;
    }
    @media (max-width: 481px) {
      font-size: 25px;
    }
  }
  .information .title {
    color: $white;
  }
}
</style>
