<template lang="pug">
  .single-page
    .single-page-navigation-wrap
      .single-page-navigation
        router-link(to='/').single-page-close
        router-link(to='/services/ico-legal').single-page-next
        //- .single-page-prev
        //- .single-page-counter
    .single-page-content-wrap
      .single-page-content
        section.services-page
          header
            .text-center
              h1.page-title.bottom_45 Post ico services
              h4.page-caption 我們的後 ICO 團隊與您合作拓展業務，並重點關注業務增長、產品架構、最佳運營實踐及進一步的資本控制
          .container
            .ico-service
              //- .row.justify-content-md-center
              //-   .text-center.col-md-8(v-scroll-reveal.reset={ delay: 200 })
              //-     i.icon-service-item-a
              //-     h2.ico-service-title 端對端的ICO市場行銷
              //-     p.ico-service-subtitle bitRaise 能提供全面的ICO行銷方案，包括尋找客戶、引入流量，及最後的引進資本參與代幣發行。從ICO推廣到代幣發行，我們可以按客戶的情況制定計劃，確保ICO在整個網絡平台上的可見度。
              //-     p.ico-service-subtitle bitRaise 有一個專家組成的全球的行銷、內容創作和網頁開發團隊，能幫助客戶取得ICO的最大收益。我們可以開展全範圍的ICO行銷方案的合作，也可以針對客戶的指定目標、在有限預算與時限情況下，提供的單項服務。我們依據服務的效果而收費，ICO的成功與否直接與我們的報酬相關。
              //-     p.ico-service-subtitle.bottom_60 我們點對點行銷服務還可以分解為下列模組：
              .row.justify-content-md-center
                .col-md-6.card.text-center(v-scroll-reveal.reset={ delay: 150 })
                  h5 財務報告
                  p 誠信是基本守則，這是我們建立這個團隊的准則。我們的金融團隊能夠幫助您創建、審計財務報表，並製作財務數據報表。ICO 完成後，維持客戶的信任對企業至關重要，我們的系統正好可以確保這一目標的達成。
                .col-md-6.card.text-center(v-scroll-reveal.reset={ delay: 150 })
                  h5 行銷和產品投放
                  p 您的代幣值與您的平台運營狀況有關。如果平台未能良好運行，代幣也同樣不會有任何好的表現。我們的團隊為您制定後 ICO 策略，並重點關注完整的運營效率，使您能夠專注於管理和控制方面。
                .col-md-6.card.text-center(v-scroll-reveal.reset={ delay: 150 })
                  h5 代幣控制
                  p 代幣是分散式平台的晴雨表。如果喪失對代幣的控制，則意味著您的平台存在風險。我們的代幣經理經驗豐富，能夠幫助控制您的代幣生態系統（無論是錢包管理、匯率更新和整合、交易量還是每日價格波動方面）。
                .col-md-6.card.text-center(v-scroll-reveal.reset={ delay: 150 })
                  h5 長期業務發展
                  p 我們的目標是幫助您制定長期業務戰略，並幫助您的公司能夠長遠發展。我們能夠為您制定個性化的平台方案，包括法規遵從、業務規劃、營銷結構和業務增長等。

            .row.justify-content-md-center
              router-link.site-btn.top_45.bottom_45(to='/home') Back Home

</template>

<script>
export default {
  name: 'post-ico-services',
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
@mixin clearfix() {
  &::after {
    display: block;
    clear: both;
    content: "";
  }
}
//colors
$white: #fff;
$color_sunglo_approx: #ff6600;
$color_black_pearl_approx: #000829;
$color_deep_cove_approx: #040f3e;
$navigation_height_xl: 104px;
$navigation_height_sm: 84px;
header {
  padding-bottom: 50px;
}
.single-page {
  background: $color_black_pearl_approx;
  text-align: center;
  padding-top: $navigation_height_xl;
  @media (max-width: 768px) {
    padding-top: $navigation_height_sm;
  }
  &-navigation {
    background: $color_deep_cove_approx;
    position: relative;
    width: 100%;
    height: 100%;
    &-wrap {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      width: 100%;
      z-index: 10;
      background-color: #3d4750;
      height: $navigation_height_xl;
      @media (max-width: 768px) {
        height: $navigation_height_sm;
      }
    }
  }
  &-content {
    margin-left: auto;
    margin-right: auto;
    max-width: 1024px;
    vertical-align: top;
    width: 94%;
    &-wrap {
    }
  }
  &-close {
    background-image: url(../assets/img/icon-close.svg);
    line-height: 44px;
    height: 44px;
    width: 44px;
    margin: auto;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    padding: 0;
    position: absolute;
    cursor: pointer;
    outline: 0;
    &:after {
      font-size: 30px;
    }
  }
  &-next {
    background-image: none;
    line-height: 40px;
  }
  &-prev {
    background-image: none;
    line-height: 40px;
  }
}
.services-page {
  .page-title {
    font-size: 60px;
    line-height: 65px;
    font-weight: 900;
    color: #ff6600;
    padding-top: 120px;
    color: white;
    @media (max-width: 768px) {
      padding-top: 60px;
    }
  }
  .page-caption {
    font-size: 36px;
    line-height: 40px;
    font-weight: 700;
    color: #ff6600;
    color: white;

  }
  h5 {
    color: #FF6600;
    margin-bottom: 20px;
  }
  p {
    line-height: 30px;
  }
  .ico-service {
    padding: 60px 0 40px;
  }
  .ico-service {
    &-title {
      font-size: 32px;
      line-height: 50px;
      font-weight: 900;
      color: #f3f5fa;
      margin-bottom: 30px;
      letter-spacing: 1px;
    }
    &-subtitle {
      letter-spacing: 1px;
      color: #f3f5fa;
      text-align: center;
    }
    border-top: 1px solid rgba(#B4BFD9, .15);
    border-bottom: 1px solid rgba(#000, .85);
    & + .ico-service {
    }
  }
  .site-btn {
    text-align: center;
    margin-right: auto;
    margin-left: auto;
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
      color: #fff;
      span {
        font-weight: bold;
        color: $color_sunglo_approx;
      }
    }
  }
}
.card {
  background: transparent;
  padding: 0 20px;
  margin-bottom: 30px;
  p {
    color: rgba(#B4BFD9, .85);
    font-weight: 400;

  }
}
[class^=icon-service-item] {
  display: inline-block;
  text-align: center;
  margin-left: auto;
  margin: auto;
  width: 128px;
  height: 128px;
}
.icon-service-item-a {
  background-image: url(../assets/img/services-item-a.svg);
}
.icon-service-item-b {
  background-image: url(../assets/img/services-item-b.svg);
}
.icon-service-item-c {
  background-image: url(../assets/img/services-item-c.svg);
}
</style>
