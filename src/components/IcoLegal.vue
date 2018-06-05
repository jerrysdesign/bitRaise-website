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
              h4.page-caption 在启动并推进ICO时，我们的国际法律团队会针对管辖权、代币结构和其他核心因素提出建议
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
                .col-md-6.card.text-center(v-scroll-reveal.reset={ delay: 250 })
                  h5 国际AML/KYC支持
                  p “ICO面临严格的反洗钱（AML）和了解客户（KYC）法规要求。这些法规的制定是为了保护消费者和企业的利益。您的ICO需要认真支持相应的工作流程，以确保您能对您自身及投资者提供保护。我们的法律团队在国际货币监管方面非常专业并且拥有丰富的经验，使您对合规程序一目了然。 “
                .col-md-6.card.text-center(v-scroll-reveal.reset={ delay: 250 })
                  h5 管辖权分析
                  p 国家不同，其ICO规定也不尽相同。与中国、南韩及俄罗斯等国家相比，瑞士、香港和新加坡的规定目前看来比较有利。由于市场环境不断变化，我们对ICO法规的分析都是基于辖区内的单个案例，并通过网络讨论事态发展，以确保减轻未来风险。我们的国际法律团队可以为您提供必要保护，并提供明确的方向，使您能够专注于最有活力和最安全的市场，确保控制风险和回报的平衡。
                .col-md-6.card.text-center(v-scroll-reveal.reset={ delay: 250 })
                  h5 代币协议、隐私政策与使用条款
                  p 俗话说细节决定成败。这点用在ICO市场上更贴切不过了。代币协议、隐私政策与使用条款的制定就是为了充分保护您和投资者的利益。我们的法律团队撰写的相关文件条理清晰、无懈可击，从而确保您的ICO能经得住复杂的法律条文的推敲。
                .col-md-6.card.text-center(v-scroll-reveal.reset={ delay: 250 })
                  h5 基金清算与分配
                  p 清算和分配流程可能非常复杂，要想赢得客户信任需要大量文件分析。我们的法律专家团队能在完全符合当地法规的情况下进行资金清算和代币分配，并赢得投资者的信任。
                .col-md-6.card.text-center(v-scroll-reveal.reset={ delay: 250 })
                  h5 Post-ICO代币和法律管理
                  p 完成ICO后，您的工作才刚刚开始。我们会帮助客户提供所有可行服务，同时，我们的业务开发团队则专注于您业务的发展，使您的事业达到新的里程碑。我们了解，对您来说，每一步都至关重要，所以应该由经验丰富的专家团队进行安全管理，而我们的目标则是希望成为您并肩作战的合作伙伴。
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
