<template lang="pug">
  .single-page
    .single-page-navigation-wrap
      .single-page-navigation
        router-link(to='/services').single-page-close
        router-link(to='/services/ico-legal').single-page-next
        //- .single-page-prev
        //- .single-page-counter
    .single-page-content-wrap
      .single-page-content
        section.services-page
          header
            .text-center
              h1.page-title.bottom_45 ICO Financial
              h4.page-caption 我們的內部財務分析師為您提供戰略支持，並對您的運營做出報告和審計
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
                  h5 建檔與運作服務
                  p 您是否難以確定您的代幣初始值？要解決此難題，您可以進行建檔與運作操作。憑借我們廣泛的高淨值投資者網絡，我們可以幫助您分析您的ICO值、制定代幣策略，並建立一個場外檔案，以幫助您的ICO投資者建立信心。
                .col-md-6.card.text-center(v-scroll-reveal.reset={ delay: 150 })
                  h5 ICO 契保服務
                  p 「我們提供完整的第三方契保服務，以確保獲得投資者的信任。在您的計劃目標完成之前，資金可以暫交第三方保管。隨著計劃的陸續完成以及資金分配到位，投資者將知曉整個流程的走勢，因而使他們更加信任平台，並促進平台的綜合發展。 「
                .col-md-6.card.text-center(v-scroll-reveal.reset={ delay: 150 })
                  h5 Multi-Sig電子錢包管理
                  p 我們幫助您創建合適的協議確保您的比特幣或以太幣或其他加密貨幣的存儲安全。同時，還可以為您提供能驗證交易、需要多少驗證者以及提交請求協議的各方名單。所有這些步驟為您的資金設置了多層保護，同時您還可以控制訪問和支出。
                .col-md-6.card.text-center(v-scroll-reveal.reset={ delay: 150 })
                  h5 財務報告與審計
                  p 依照法規規定，及為了贏得投資者的信任，在ICO前、中、後期，您需要提供認真詳細的財務報告。為了讓您專注於核心業務，我們的會計師和財務分析師團隊可以為您提供全面的服務。此外，為了提高您財務的準確性，我們還提供審計服務。

            .row.justify-content-md-center
              router-link.site-btn.top_45.bottom_45(to='/home') Back Home

</template>

<script>
export default {
  name: 'ico-financial',
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
