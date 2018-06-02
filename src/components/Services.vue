<template lang="pug">
  section.portfolio-single.top_90
    .text-center
      h1.title.bottom_45.top_120 Services
      h4 ICO提供的整套服務、企業級區塊鏈、咨詢及教育
      h2 點到點ICO支持
      p.bottom_30 逐步演变的法律法规和技术误区使得ICO对大部分人来说都是一次挑战，然而，事实并非一定如此。我们的专家是行业佼佼者，他们能够帮助您将您的计划变成现实，并从中获益。
      ul.information
        li
          span Client:
        li
          span Website:
        li
          span Category:
    .col-md-12.portfolio-images.top_90.bottom_120

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
//colors
$white: #fff;
$color_sunglo_approx: #ff6600;
$color_black_pearl_approx: #000829;
$color_deep_cove_approx: #040f3e;

.portfolio-single {
  .title {
    font-size: 60px;
    line-height: 65px;
    font-weight: 900;
    color: $white;
  }
  p {
    line-height: 30px;
    color: #ffffffa1;
  }
  .information {
    margin: 0 auto;
    float: none;
    display: inline-block;
    padding: 0;
    width: auto;
    color: $white;
    li {
      float: left;
      list-style: none;
      margin-right: 35px;
      font-weight: 400;
      font-size: 14px;
      color: #ffffffc4;
      span {
        font-weight: bold;
        color: $color_sunglo_approx;
      }
    }
  }
}
.cbp-popup-singlePage {
  background: $color_black_pearl_approx;
  .cbp-popup-close {
    background-image: none;
    line-height: 40px;
    &:after {
      font-size: 30px;
    }
  }
  .cbp-popup-next {
    background-image: none;
    line-height: 40px;
  }
  .cbp-popup-prev {
    background-image: none;
    line-height: 40px;
  }
  .cbp-popup-navigation {
    background: $color_deep_cove_approx;
  }
}
.portfolio-images img {
  width: 100%;
  //Instead of the line below you could use @include border-radius($radius, $vertical-radius)
  border-radius: 4px;
}
</style>
