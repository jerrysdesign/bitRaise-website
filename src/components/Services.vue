<template lang="pug">
  .single-page
    .single-page-navigation-wrap
      .single-page-navigation
        router-link(to='/').single-page-close
        //- .single-page-next
        //- .single-page-prev
        //- .single-page-counter
    .single-page-content-wrap
      .single-page-content
        section.services-page.top_90
          header
            .text-center
              h1.page-title.bottom_45.top_120 All Services
              h4.page-caption 提供 ICO 的套裝服務、企業級區塊鏈、咨詢及教育
          .container
            .ico-service
              .row.justify-content-md-center
                .text-center.col-md-8
                  i.icon-service-item-a
                  h2.ico-service-title 點到點 ICO 支援
                  p.ico-service-subtitle.bottom_60 逐步演變的法律法規和技術誤區使得 ICO 對大部分人來說都是一大挑戰，然而並非一定如此。因為我們的專家皆是行業佼佼者，他們能夠幫助您將您的計劃成為現實，並從中獲益。
              .row.justify-content-md-center
                .col-md-4.card.text-center
                  h5 區塊鏈技術專家
                  p 多種平台與途徑，確保協議符合客戶的實際需求特別設計的合約簽署、管理與調解最好的 KYC 與反洗錢服參與管理系統，有 2FA 與在地處理參數自營的區塊鏈研發團隊，在區塊鏈交互與項目有14個主要協議上有著深厚的知識與研究訂單創建與維護服務
                .col-md-4.card.text-center
                  h5 個性化的行銷策略
                  p
                    | 內部行銷專家定制的
                    strong 品牌設計
                    | 和
                    strong 網站開發方案
                    | ，全面的
                    strong 社交媒體行銷方案
                    | ，
                    strong 個性化的資訊和圖形設計組合方案
                    | ，
                    strong 領先加密技術
                    | 和
                    strong 新聞媒體中的特定品牌文章
                    | ，各大媒體平台追蹤曝光
                    = ' '
                    strong 追蹤曝光
                .col-md-4.card.text-center
                  h5 點到點法律保護
                  p
                   strong 特定區域代幣概念的法律管理
                   | ，包括
                   = ' '
                   strong KYC、AML 和證券合規，白皮書草稿、分析和終稿，完善的法律文件組合，
                   | 包括
                   strong 隱私政策、使用條款和代幣購買協議，
                   | 經驗豐富的 ICO
                   = ' '
                   strong 律師
                   | 持續提供的
                   strong 法律咨詢
                   | ，
                   strong ICO 後代幣管理解決方案及合規保護
            .ico-service
              .row.justify-content-md-center
                .text-center.col-md-8
                  i.icon-service-item-b
                  h2.ico-service-title 企業區塊鏈
                  p.ico-service-subtitle.bottom_60 我們制定該技術方案，幫助您改善業務運營、制定實施策略並制定個性化的解決方案，與您的系統整合。
              .row.justify-content-md-center
                .col-md-4.card.text-center
                  h5 貴企業區塊鏈
                  p
                    | 我們相信您已經對區塊鏈有所瞭解。有人說，就像90年代的網路一樣，將為數位世界帶來一場革命。如果您想知道區塊鏈可以為您的企業帶來什麼好處，我們可以幫助貴公司提供正確的區塊鏈解決方案。
                .col-md-4.card.text-center
                  h5 企業級應用
                  p 我們的團隊經驗豐富，他們時刻準備好幫助您開發基於區塊鏈技術的應用，甚至是幫助您改善業務方式。雖然區塊鏈看起來很複雜，但是我們可以對該技術進行簡化，並告訴您如何讓貴公司從中受益。
                .col-md-4.card.text-center
                  h5 個性化區塊鏈解決方案
                  p 我們的目標是透過獨特的區塊鏈應用改善您在金融、房地產、供應鏈、資料庫管理等方面的業務。在不中斷運營的情況下，我們將區塊鏈技術無縫整合到您現行平台中。降低成本、提高效率並消除系統性錯誤和欺詐。
            .ico-service
              .row.justify-content-md-center
                .text-center.col-md-8
                  i.icon-service-item-c
                  h2.ico-service-title 咨詢與培訓
                  p.ico-service-subtitle.bottom_60 您每天需要做出關於企業的關鍵決策，而我們豐厚的知識和區塊鏈技術經驗可以助您一臂之力。我們的咨詢服務能為您提供區塊鏈戰略制定方面的必要知識，幫助您的團隊培養真正的技術能力。
              .row.justify-content-md-center
                .col-md-6.card.text-center
                  h5 知識型咨詢
                  p 知識就是力量。我們可以結合客戶，提供個性化的咨詢和服務。我們的目標是透過制定專業的區塊鏈戰略、引入案例以及強大的社區參，利用我們業界領先的知識為貴公司服務。
                .col-md-6.card.text-center
                  h5 特定的團隊培訓
                  p 對於企業來說，找到合適的區塊鏈開發團隊是一項高難度高成本的項目，不過，不用擔心，我們有專業的區塊鏈團隊與人力資源，他們經驗豐富，能夠為您及員工提供相關培訓。無論您現有員工背景如何，經過培訓後，他們都能成為區塊鏈專家。我們的培訓涵蓋所有的主鏈和側鏈，並且在智能合約、分散式應用、物聯網區塊鏈解決方案等方面擁有豐富的經驗。我們可以幫助您現有的團隊成長為區塊鏈專家，這相對於聘請那些對您的市場不瞭解的外部工程師而網路言，顯然能為您的企業節省不少時間和金錢。
            .row.justify-content-md-center
              router-link.site-btn.top_45.bottom_45(to='/home') Back Home

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
header {
  padding-bottom: 50px;

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
    padding: 60px 0;
  }
  .ico-service {
    &-title {
      font-size: 32px;
      line-height: 50px;
      font-weight: 900;
      color: $white;
      margin-bottom: 30px;
      letter-spacing: 1px;
    }
    &-subtitle {
      letter-spacing: 1px;
      color: #B4BFD9;
      text-align: center;
    }
    border-top: 1px solid rgba(#B4BFD9, .3);
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
.single-page {
  padding: 0;
  background: $color_black_pearl_approx;
  transition: transform .3s ease-in-out;
  text-align: center;
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 99990;
  // transform: none;
  &:before {
    box-sizing: border-box;
    content: "";
    display: inline-block;
    height: 100%;
    vertical-align: middle;
  }
  &:after {
    display: block;
    clear: both;
    content: "";
  }
  .single-page-navigation-wrap {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 10;
    background-color: #3d4750;
    height: 104px;
    @media (max-width: 768px) {
      height: 84px;
    }
  }
  .single-page-navigation {
    background: #040f3e;
    position: relative;
    width: 100%;
    height: 100%;
  }
  .single-page-content-wrap {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow-y: hidden;
    overflow-x: hidden;
    overflow-y: scroll;
  }
  .single-page-content {
    margin-left: auto;
    margin-right: auto;
    margin-top: 90px;
    max-width: 1024px;
    vertical-align: top;
    width: 94%;
    position: relative;
    z-index: 1;
  }
  .single-page-close {
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
  .single-page-next {
    background-image: none;
    line-height: 40px;
  }
  .single-page-prev {
    background-image: none;
    line-height: 40px;
  }
}
.portfolio-images img {
  width: 100%;
  //Instead of the line below you could use @include border-radius($radius, $vertical-radius)
  border-radius: 4px;
}
</style>
