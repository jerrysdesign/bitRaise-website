<template lang="pug">
  // About
  section#about.about
    .cont
      .row
        .col-md-4
          h2.section-title.bottom_15
            | Who we are?
            br
            span about us.
          p 比特幣已經是一種大眾所熟知的數位貨幣，而比特幣背後的區塊鏈技術，勢必對人類帶來深厚的影響。超越貨幣的通證經濟及智能合約的區塊鏈應用，將繼超級電腦、個人電腦、網際網路和行動、社交網路之後的第五個破壞性創新科技。
          p 我們認為區塊鏈本質是一本可以登記、註冊、轉移所有資產的公共帳本，具有在全球範圍內以去中心模式記錄資產的潛力，然而這些資產不僅是金融商品，也包含票選，軟體，健康數據，思想創意等，各式各樣的無形資產，與生態圈。
        .col-md-4
          p 現今大眾對於區塊鏈技術仍停留在經濟層面，但其應用可以延伸到政治、公益、社會科學和科學領域，而且區塊鏈技術已備某些團體拿來解決現實世界的問題。
          p 除了全球公共利益必須超越單一政府的情況之外，其他行業和社會階級，可以透過區塊鏈科技，擺脫受既得利益團體影響之下的不公平管制規約，而實現新的去中心化商業模式，尤其是有想法但沒錢實踐或量產的團隊，所以將願景透過通證，向群眾募資，並成承諾與實現。
          p 群眾募資即是另一個體現區塊鏈導向的去中心化模型，如何重塑金融服務的典型應用。而區塊鏈導向的群眾募資自然不再需要第三方作為中介。藉由專屬的數位加密貨幣(或通證)來募集資金，以及分配數位股權。
        .col-md-4
          p 對於成熟的企業而言，除了為其計畫擴展集資之外，更重要的是企業在數位貨幣和區塊鏈的時代佔據先機。引導越來越多的企業加入去中心化的業務和系統，向更加開放的功能，更為強大的基於區塊鏈的模式轉變。
          p 我們期望可以與更多，相信區塊鏈技術的團隊合作，一同革命，透過ICO的方式，將區塊鏈技術加速普及與實現。
          p 我們認為關鍵在於組建合適的團隊，因此我們擁有業界一流的區塊鏈開發，ICO諮詢、法律知識、市場行銷及業務管理方面的頂尖人才。
</template>

<script>
export default {
  name: 'About',
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

.about {
  padding: 0 0 80px;
  position: relative;
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
</style>
