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
              h1.page-title ICO Marketing
              h4.page-caption 我們曾經為包括初創企業在內的多家企業提供服務多年，有著良好的業績與信用。我們團隊成員能夠為企業客戶的ICO市場行銷提供全面專業的服務。
          .container
            .ico-service
              .row.justify-content-md-center
                .text-center.col-md-8(v-scroll-reveal.reset={ delay: 200 })
                  i.icon-service-item-a
                  h2.ico-service-title 端對端的ICO市場行銷
                  p.ico-service-subtitle bitRaise 能提供全面的ICO行銷方案，包括尋找客戶、引入流量，及最後的引進資本參與代幣發行。從ICO推廣到代幣發行，我們可以按客戶的情況制定計劃，確保ICO在整個網絡平台上的可見度。
                  p.ico-service-subtitle bitRaise 有一個專家組成的全球的行銷、內容創作和網頁開發團隊，能幫助客戶取得ICO的最大收益。我們可以開展全範圍的ICO行銷方案的合作，也可以針對客戶的指定目標、在有限預算與時限情況下，提供的單項服務。我們依據服務的效果而收費，ICO的成功與否直接與我們的報酬相關。
                  p.ico-service-subtitle.bottom_60 我們點對點行銷服務還可以分解為下列模組：
              .row.justify-content-md-center
                .col-md-6.card.text-center(v-scroll-reveal.reset={ delay: 150 })
                  h5 產品驗證分析
                  p 您是否擁有好的創意卻不確定是否有市場？而且不知道如何在區塊鏈上應用？不要緊，我們有經驗豐富的專家團隊為您分析真實的應用程序。我們可以幫助您瞭解市場，並找准產品定位，確保您的成功。
                .col-md-6.card.text-center(v-scroll-reveal.reset={ delay: 150 })
                  h5 路線圖和行銷策略
                  p 創意的實施其實是挺艱難複雜的。我們的團隊可以幫助您制定詳細的計劃，為您創意提供適當的時機。此外，我們根據創意制定可靠的行銷策略，能幫助您最大限度地利用資源。
                .col-md-6.card.text-center(v-scroll-reveal.reset={ delay: 150 })
                  h5 品牌、網絡與社交媒體的專業知識
                  p 我們國內有許多能提供高效策略的團隊，來幫助客戶創建品牌與意識，讓客戶的在眾多競爭對手中脫穎而出。我們有非常可靠的付費的社交媒體通道，在Reddut、Steemit、Bitcointalk等平台上也極具影響力。
                .col-md-6.card.text-center(v-scroll-reveal.reset={ delay: 150 })
                  h5 新聞媒體中的特殊版位
                  p 「我們生活在一個網絡時代，因此獲得關注度是關鍵因素。大部分人對ICO和新區塊鏈應用的瞭解都來自於新聞媒體，但是要使貴司名稱持續出現在優質媒體中還是很有挑戰的。我們的新聞網絡使貴公司置於特殊版位，以便贏得目標受眾的最大關注。
                .col-md-6.card.text-center(v-scroll-reveal.reset={ delay: 150 })
                  h5 口碑管理
                  p 我們的SEO平台與技術、內容創作團隊和法律團隊,能夠保證客戶的口碑和形象。我們能快速偵測負面內容，並做出應對，在實質性損失出現前消除危機。
                .col-md-6.card.text-center(v-scroll-reveal.reset={ delay: 150 })
                  h5 ICO 數位行銷
                  p 「我們能夠為您的新產品的不同階段開發並策劃各種ICO策略，包括創意篩選、概念開發、市場測試和ICO發佈。我們的數位行銷服務天衣無縫，能夠讓客戶的信息充分擴散到各投資網絡社區。
                .col-md-6.card.text-center(v-scroll-reveal.reset={ delay: 150 })
                  h5 社區管理
                  p 活躍的網絡社區是融資項目的重要根基。要做到很好的用戶服務與贏得網絡社區的信任，需要運用布告板、社交平台通道 、電報（Telegram）與其它必要的媒體。bitRaise 能夠為客戶提供高效的資源保證客戶信息的可見性，和在投資社區內的活躍度。
                .col-md-6.card.text-center(v-scroll-reveal.reset={ delay: 150 })
                  h5 公共關係
                  p 公共關係是行銷的一部分。bitRaise 區塊鏈行業已經有著近10年的經驗，與各分布式體系都著廣泛的關係網絡。我們能夠為客戶指派專業的公關專家，處理各平台上的問題。
            .row.justify-content-md-center
              router-link.site-btn.top_45.bottom_45(to='/home') Back Home

</template>

<script>
export default {
  name: 'ico-marketing',
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
  background-image: url(../assets/img/services-marketing-banner.png);
  background-size: cover;
  background-position: center center;
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
    padding-top: 120px;
    color: white;
    background-color: rgba(#000829, .5);
    margin-bottom: 40px;
    text-shadow: 0 0 20px rgba(#000829, .9);
    @media (max-width: 768px) {
      padding-top: 60px;
      font-size: 48px;
      background-color: rgba(#000829, .8);
    }
  }
  .page-caption {
    font-size: 36px;
    line-height: 40px;
    font-weight: 700;
    color: white;
    background-color: rgba(#000829, .5);
    text-shadow: 0 0 20px rgba(#000829, .9);
    padding: 10px;
    @media (max-width: 768px) {
      font-size: 28px;
      background-color: rgba(#000829, .8);
    }
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
