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
              h1.page-title.bottom_45 ICO Legal
              h4.page-caption 在啓動並推進ICO時，我們的國際法律團隊會針對管轄權、代幣結構和其他核心因素提出建議
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
                  h5 國際AML/KYC支持
                  p 「ICO面臨嚴格的反洗錢（AML）和瞭解客戶（KYC）法規要求。這些法規的制定是為了保護消費者和企業的利益。您的ICO需要認真支持相應的工作流程，以確保您能對您自身及投資者提供保護。我們的法律團隊在國際貨幣監管方面非常專業並且擁有豐富的經驗，使您對合規程序一目瞭然。 「
                .col-md-6.card.text-center(v-scroll-reveal.reset={ delay: 150 })
                  h5 管轄權分析
                  p 國家不同，其ICO規定也不盡相同。與中國、南韓及俄羅斯等國家相比，瑞士、香港和新加坡的規定目前看來比較有利。由於市場環境不斷變化，我們對ICO法規的分析都是基於轄區內的單個案例，並通過網絡討論事態發展，以確保減輕未來風險。我們的國際法律團隊可以為您提供必要保護，並提供明確的方向，使您能夠專注於最有活力和最安全的市場，確保控制風險和回報的平衡。
                .col-md-6.card.text-center(v-scroll-reveal.reset={ delay: 150 })
                  h5 代幣協議、隱私政策與使用條款
                  p 俗話說細節決定成敗。這點用在ICO市場上更貼切不過了。代幣協議、隱私政策與使用條款的制定就是為了充分保護您和投資者的利益。我們的法律團隊撰寫的相關文件條理清晰、無懈可擊，從而確保您的ICO能經得住複雜的法律條文的推敲。
                .col-md-6.card.text-center(v-scroll-reveal.reset={ delay: 150 })
                  h5 基金清算與分配
                  p 清算和分配流程可能非常複雜，要想贏得客戶信任需要大量文件分析。我們的法律專家團隊能在完全符合當地法規的情況下進行資金清算和代幣分配，並贏得投資者的信任。
                .col-md-6.card.text-center(v-scroll-reveal.reset={ delay: 150 })
                  h5 Post-ICO代幣和法律管理
                  p 完成ICO後，您的工作才剛剛開始。我們會幫助客戶提供所有可行服務，同時，我們的業務開發團隊則專注於您業務的發展，使您的事業達到新的里程碑。我們瞭解，對您來說，每一步都至關重要，所以應該由經驗豐富的專家團隊進行安全管理，而我們的目標則是希望成為您並肩作戰的合作夥伴。
            .row.justify-content-md-center
              router-link.site-btn.top_45.bottom_45(to='/home') Back Home

</template>

<script>
export default {
  name: 'ico-lagal',
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
