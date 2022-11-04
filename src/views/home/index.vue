<template>
  <div class="big_wrap">
    <div class="homepage_banner">
      <div class="home_header">
        <div class="head_con">
          <div class="banner_left">
            <h2 class="font_Bold">嗨！欢迎来到本站点！</h2>
            <h4 style="margin-bottom: 90px; font-size: 20px">
              探索本站的信息，为您带来便捷体验
              <br />
              展现直播间、视频、音乐、电台等
            </h4>
            <div class="banner_btn">
              <div class="btn_one">开始</div>
              <a href="" class="ios">
                <img src="@/assets/images/douyu.png" alt="" />
               斗鱼</a>
              <a href="" class="android">
                <img src="@/assets/images/weibo.png" alt="" />
                微博</a>
            </div>
            <p>显示的图像仅用于展示作用</p>
          </div>
        </div>
        <div class="home_bg">
          <div style="
              max-width: 230px;
              flex: 1 1;
              margin: 0 auto;
              position: relative;
            ">
            <div style="padding-top: 204%; position: relative; width: 100%">
              <div class="inset_bg">
                <div class="insetbg_annulus"></div>
                <div class="inset_annulus_sm"></div>
                <div class="bg-semicircle"></div>
                <div class="bg_ball"></div>
                <div class="bg_ball_solid"></div>
              </div>
              <div class="video_wrap">
                <video class="inset_video enter-play" muted playsinline webkit-playsinline autoplay loop
                  poster="https://c1.itigergrowth.com/portal5/static/media/banner-poster.7a77394e.jpg" preload="auto"
                  data-status="playing">
                  <source src="@/assets/image/banner-inset-0215.mp4" />
                </video>
                <img class="inset_iphone" src="@/assets/image/iphone13promax.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="home_content">
      <div class="content_img">
        <h2 class="font_Bold">选择直达平台</h2>
        <div class="three_img">
          <div class="content_item" @click="tiaozhuan('https://www.douyu.com/78622')">
            <div>
              <img src="https://apic.douyucdn.cn/upload/avatar_v3/201807/dca3c7ece148ee546d611ed0815fbbd0_big.jpg" alt="https://www.douyu.com/78622">
            </div>
            <p>二珂78622@斗鱼</p>
          </div>
          <div class="content_item" @click="tiaozhuan('https://weibo.com/u/1910672761?topnav=1&wvr=6&topsug=1')">
            <div>
              <img src="https://tvax2.sinaimg.cn/crop.0.0.1080.1080.180/0025iZgBly8gmmp57xqh3j60u00u0di902.jpg?KID=imgbed,tva&Expires=1667558820&ssig=Bx5ptFoRPv" alt="https://weibo.com/u/1910672761?topnav=1&wvr=6&topsug=1">
            </div>
            <p>二珂Chloe@微博</p>
          </div>
          <div class="content_item" @click="tiaozhuan('https://www.xiaohongshu.com/user/profile/5ad78361e8ac2b1fca15ff66?xhsshare=CopyLink&appuid=609b9c340000000001004f33&apptime=1667552951')">
            <div>
              <img src="https://sns-avatar-qc.xhscdn.com/avatar/6344e5b0a72440a1d6f84aa0.jpg?imageView2/1/w/540/format/jpg" alt="https://www.xiaohongshu.com/user/profile/5ad78361e8ac2b1fca15ff66?xhsshare=CopyLink&appuid=609b9c340000000001004f33&apptime=1667552951">
            </div>
            <p>二珂@小红书</p>
          </div>
        </div>
      </div>
      <div class="invest_title">
        <!-- <div> -->
          <p class="title_wrapper">部分图片展示</p>
          <h2 class="font_Bold">
            二珂微博发布的个别图片展示 <br />
            好看耶
          </h2>
        <!-- </div> -->
      </div>
      <div class="invest_bg">
        <div class="invest_bg_title font_Bold">
          珂珂真好看～
        </div>
        <div class="invest_img">
          <div class="img_left">
            <img class="left1" src="https://wx3.sinaimg.cn/mw2000/0025iZgBly1gop49qkl1mj62241jkkjm02.jpg" alt="" />
            <img class="left2" src="https://wx1.sinaimg.cn/mw2000/0025iZgBgy1gvbhdvy1vmj62961i4hdw02.jpg" alt="" />
            <img class="left3" src="https://wx4.sinaimg.cn/mw2000/0025iZgBgy1gvbhdyo5duj629u1ilb2a02.jpg" alt="" />
          </div>
          <div class="img_phone">
            <img style="" src="https://wx2.sinaimg.cn/mw2000/0025iZgBgy1gwb961ksyqj622o340kjl02.jpg" alt="">
          </div>
          <div class="img_right">
            <img class="right1" src="https://wx4.sinaimg.cn/mw2000/0025iZgBly1go2vxnyfsoj62dc1kw1kx02.jpg" alt="" />
            <img class="right2" src="https://wx4.sinaimg.cn/mw2000/0025iZgBly1h5j0cdybv4j62p2211u1002.jpg" alt="" />
            <img class="right3" src="https://wx2.sinaimg.cn/mw2000/0025iZgBly1h5j0c7abv2j62re22s1kz02.jpg" alt="" />
          </div>
        </div>
      </div>
      <div class="mobile_intro_swiper">
        <div class="swiper_left">
          <div class="swiper-left-text">
            <div class="swiper-wrapper">
              <h3 class="swiper-slide font_Bold">2021.12</h3>
              <h3 class="swiper-slide font_Bold">
                滑雪装
              </h3>
            </div>
          </div>

          <div class="swiper-container linear">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                 <img src="https://wx2.sinaimg.cn/orj360/0025iZgBly1gx1rclbizzj61jk224e8102.jpg" alt="" />
                 <!-- <img src="https://wx2.sinaimg.cn/mw2000/0025iZgBly1gx1rclbizzj61jk224e8102.jpg" alt="" /> -->
              </div>
              <div class="swiper-slide">
                <img src="https://wx1.sinaimg.cn/orj360/0025iZgBly1gx1rcs8uqxj61jk224b2902.jpg" alt="" />
                <!-- <img src="https://wx1.sinaimg.cn/mw2000/0025iZgBly1gx1rcs8uqxj61jk224b2902.jpg" alt="" /> -->
              </div>
              <div class="swiper-slide">
                <img src="https://wx2.sinaimg.cn/mw2000/0025iZgBly1gx1rct2x76j61jk2241i002.jpg" alt="" />
                <!-- <img src="https://wx2.sinaimg.cn/mw2000/0025iZgBly1gx1rct2x76j61jk2241i002.jpg" alt="" /> -->
              </div>
            </div>
          </div>
        </div>
        <div class="swiper_right">
          <div :class="{ active: rightIndex === 1 }">
            <div class="swiper-right-text">
              <div class="swiper-wrapper">
                <h3 class="swiper-slide font_Bold">2021年四月</h3>
                <h3 class="swiper-slide font_Bold">图片展示（图片待修改）</h3>
              </div>
            </div>
            <div class="swiper-containerTwo">
              <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(item, index) in imageSrcs" :key="index">
                  <img  :src="item" alt="" />
                </div>
              </div>
              <div class="swiper-pagination"></div>
            </div>
          </div>
        </div>
      </div>
      <p>显示的图像仅用于展示作用</p>
      <div class="home_pounce">
        <div class="pounce_title">
          <p class="title_wrapper">
            INVEST GLOBALLY
          </p>
          <h2 class="font_Bold">
            Pounce on Tiger CFD to leap ahead
          </h2>
        </div>
        <div class="pounce_content">
          <div class="pounce_left">
            <div>
              <ul>
                <li v-for="(item, index) in textContainerfour" :key="index" :class="{ active: index == activeIndex }"
                  @click="changeActiveSwiper(index)">
                  {{ item.title }}
                  <a v-if="item.hrefText" href="" class="font_Bold" @click="jumpFun('market')">{{ item.hrefText }}</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="pounce_right">
            <div class="swiper-containerfour">
              <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(item, index) in imageContainerfour" :key="index">
                  <img class="swiper-img" :src="item" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="foot_btn" @click="jumpFun('invest')">Get started</div>
      </div>
    </div>
    <div class="home_foot">
      <div class="foot_con">
        <div class="foot_title font_Bold">Invest wise, invest well</div>
        <ul class="foot_list">
          <li class="list_item">
            <img src="@/assets/image/home1.png" alt="" />
            <h2>NASDAQ-listed parent company</h2>
            <ul class="foot_list_item">
              <li>Nearly 2 million account holders</li>
              <li>219+ billion trading volume</li>
              <li>Inclusion in the MSCI small-cap index</li>
              <li>
                Subsidiaries hold 52 licenses and qualifications in AU, US, HK,
                SG and NZ
              </li>
            </ul>
          </li>
          <li class="list_item">
            <img src="@/assets/image/home2.png" alt="" />
            <h2>Tiger Brokers in UK</h2>
            <ul class="foot_list_item">
              <li>
                Tiger Brokers (UK) Limited is an England & Wales registered
                company, authorized and regulated by the Financial Conduct
                Authority, FCA (Register number 470325), and dedicated to UK
                investors.
              </li>
              <li>FCA Regulated, FSCS protected</li>
            </ul>
          </li>
          <li class="list_item">
            <img src="@/assets/image/home3.png" alt="" />
            <h2>Client funds and assets</h2>
            <ul class="foot_list_item">
              <li>
                Client monies are held in segregated client funds accounts and
                are covered by thy the provisions of the Financial Services
                Compensation Scheme (FSCS). More about FSCS
                <a href="">here</a>
              </li>
            </ul>
          </li>
        </ul>
        <div class="foot_btn" @click="jumpFun('invest')">Get started</div>
      </div>
    </div>
  </div>
</template>
   
<script>
import tu1 from "@/assets/image/tu1.png";
import tu2 from "@/assets/image/tu2.png";
import tu3 from "@/assets/image/tu5.png";
import tu4 from "@/assets/image/tu3.png";
import tu5 from "@/assets/image/tu4.png";
import tu6 from "@/assets/image/tu6.png";
import right1 from "@/assets/image/right5.png";
import right2 from "@/assets/image/right6.png";
import "swiper/css/swiper.min.css";
import Swiper from "swiper";
export default {
  data() {
    return {
      imageContainerfour: [tu1, tu2, tu3, tu4, tu5, tu6],
      textContainerfour: [
        {
          title: "Access to most popular markets",
          hrefText: "See all markets",
          active: true,
        },
        {
          title: "Suit yourself to manage profit and risk",
          active: false,
        },
        {
          title: "30:1 leverage to gain more with less",
          active: false,
        },
        {
          title: "Deposit and withdraw within 1 minute",
          active: false,
        },
        {
          title: "No commission and hidden fees",
          active: false,
        },
        {
          title: "Get your local expert help on what to buy and when to sell",
          active: false,
        },
      ],
      leftTopTexts: [
        "30:1 leverage to apply",
        "Tight price gap between buying & selling",
      ],
      rightTopTexts: [
        "No commission & hidden fee",
        "Negative balance protection",
      ],
      rightIndex: 0,
      activeIndex: 1,
      imageSrcs: [  'https://wx1.sinaimg.cn/orj360/0025iZgBgy1gpp6cxzw7ij62c0340qv602.jpg','https://wx1.sinaimg.cn/orj360/0025iZgBly1gpeo23a9f1j61jk1jkhdu02.jpg'],
      images: ['https://wx4.sinaimg.cn/orj360/0025iZgBgy1gvbhdyo5duj629u1ilb2a02.jpg','https://wx4.sinaimg.cn/orj360/0025iZgBgy1gvbhdyo5duj629u1ilb2a02.jpg'],
    };
  },
  components: {},
  methods: {
    tiaozhuan(lianjie){
      window.open(lianjie)
    },
    jumpFun(route) {
      if (this.$route.name != route) {
        this.$router.push(route);
      }
    },
    // 点击切换轮播增加样式/Click Toggle Cast to add style
    changeActiveSwiper(index) {
      // 保存下标/Save the index
      this.activeIndex = index;
      // 切换轮播图/Swiper
      this.mySwiper.slideTo(this.activeIndex + 1);
    },
  },
  created() { },
  mounted() {
    let _this = this;
    //  有问题可以看swiper文档/swiper documents
    new Swiper(".swiper-container", {
      observer: true,
      observeSlideChildren: true,
      // observeParents: true,  //这三个可以去文档看下介绍，主要就是异步情况会重新加载swiper。
      loop: true, //开启环路
      speed: 2000, //每个轮播图过渡的时间
      spaceBetween: -15, //每个轮播图间隔
      slidesPerView: 2, //当前页面显示几个，这里是auto
      loopedSlides: 6, //比你页面显示的数量大于2就好
      updateOnWindowResize: false, //分辨率改变时，防止样式错乱加上！
      autoplay: {
        delay: 0, //每循环一圈，间隔时间，无缝轮询，则为0
        stopOnLastSlide: false,
        disableOnInteraction: false,
      }
    });
    new Swiper(".swiper-left-text", {
      direction: "vertical", // 垂直切换选项
      slidesPerView: 1, //当前页面显示几个，这里是auto
      autoplay: {
        delay: 2000,
      },
    });
    this.swiper_right_text = new Swiper(".swiper-right-text", {
      direction: "vertical", // 垂直切换选项
      slidesPerView: 1, //当前页面显示几个，这里是auto
      loop: true,
    });
    new Swiper(".swiper-containerTwo", {
      speed: 2000,
      autoplay: {
        //自动开始
        delay: 2000, //时间间隔
        disableOnInteraction: false, //*手动操作轮播图后不会暂停*
      },
      loop: true, // 循环模式选项
      // 如果需要分页器
      pagination: {
        el: ".swiper-pagination",
        clickable: true, // 分页器可以点击
      },
      on: {
        slideChangeTransitionStart: function () {
          // 获得下标
          _this.rightIndex = this.activeIndex - 1;
          let img_right = document.querySelector('.swiper-containerTwo .swiper-slide-prev img')
          if (img_right) {
            img_right.className = 'active_img'
          }
          if (_this.rightIndex === 2) {
            _this.rightIndex = 0;
          }
          _this.swiper_right_text.slideTo(_this.rightIndex + 1);
        },
        slideChangeTransitionEnd: function(){
          let img_right = document.querySelector('.swiper-containerTwo .swiper-slide-prev img')
          if (img_right) {
            img_right.className = '';
          }
        },
      },
    });
    this.mySwiper = new Swiper(".swiper-containerfour", {
      speed: 2000,
      autoplay: {
        //自动开始
        delay: 2000, //时间间隔
        disableOnInteraction: false, // 手动操作轮播图后不会暂停
      },
      // slidesPerView: 'auto',
      loop: true, // 循环模式选项
      slidesPerView: 1,
      spaceBetween: 6,
      on: {
        slideChange: function () {
          // 获得下标
          _this.activeIndex = this.activeIndex - 1;
          if (_this.activeIndex === 6) {
            _this.activeIndex = 0;
          }
        },
      },
    });
  },
};
</script>

<style lang="scss" scoped>
::v-deep .linear.swiper-container>.swiper-wrapper {
  -webkit-transition-timing-function: linear;
  /*之前是ease-out*/
  -moz-transition-timing-function: linear;
  -ms-transition-timing-function: linear;
  -o-transition-timing-function: linear;
  transition-timing-function: linear;
  margin: 0 auto;
}

::v-deep {
  #thumbs .swiper-slide {
    opacity: 0.6;
    width: 25%;
    height: 40px;
    margin: auto 30px;
    cursor: pointer;
    filter: grayscale(100%);
  }

  #thumbs .swiper-slide-thumb-active {
    opacity: 1;
    filter: grayscale(0);
  }
}

@keyframes insetSlideUpTwo {
  0% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }

  25% {
    -webkit-transform: translateY(8%);
    transform: translateY(8%);
  }

  50% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }

  75% {
    -webkit-transform: translateY(-8%);
    transform: translateY(-8%);
  }

  to {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
}

@keyframes insetSlideUpThree {
  0% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }

  25% {
    -webkit-transform: translateY(4%);
    transform: translateY(4%);
  }

  50% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }

  75% {
    -webkit-transform: translateY(-4%);
    transform: translateY(-4%);
  }

  to {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
}

.big_wrap {
  width: 100%;
  height: 100%;
  background: #ffffff;

  .homepage_banner {
    width: 100%;
    height: 600px;
    background: #ffe100;
    padding-top: 100px;

    // position: relative;
    .home_header {
      width: 60%;
      min-width: 1170px;
      max-width: 1170px;
      height: 100%;
      margin: 0 auto;
      position: relative;
      display: flex;
      .home_bg {
        width: 50%;
        position: relative;

        @keyframes phoneSlide {
          0% {
            -webkit-transform: translateY(-60px);
            transform: translateY(-60px);
          }

          50% {
            -webkit-transform: translateY(-100px);
            transform: translateY(-100px);
          }

          to {
            -webkit-transform: translateY(-60px);
            transform: translateY(-60px);
          }
        }

        @-webkit-keyframes medalSlide {
          0% {
            -webkit-transform: translateY(10px);
            transform: translateY(10px);
          }

          50% {
            -webkit-transform: translateY(0);
            transform: translateY(0);
          }

          to {
            -webkit-transform: translateY(10px);
            transform: translateY(10px);
          }
        }

        .video_wrap {
          -webkit-animation: phoneSlide 6s linear infinite forwards;
          animation: phoneSlide 6s linear infinite forwards;
          display: block;
          // display: none;
          height: 100%;
          left: 0;
          position: absolute;
          top: 0;
          -webkit-transform: translateY(-60px);
          transform: translateY(-60px);
          width: 100%;

          .inset_video {
            border-radius: 16px;
            height: auto;
            left: 50%;
            overflow: hidden;
            pointer-events: none;
            position: absolute;
            top: 50%;
            -webkit-transform: perspective(480px) scaleX(0.96) rotateY(-8deg) skewY(4deg) translate(-58%, -50%);
            transform: perspective(480px) scaleX(0.96) rotateY(-8deg) skewY(4deg) translate(-58%, -50%);
            -webkit-transform-style: preserve-3d;
            transform-style: preserve-3d;
            width: 93%;
          }

          .inset_iphone {
            height: auto;
            left: 0%;
            position: absolute;
            top: 0%;
            width: 100%;
          }
        }

        .inset_bg {
          height: 502px;
          left: 50%;
          position: absolute;
          top: 11px;
          -webkit-transform: translateX(-50%) translateY(-60px);
          transform: translateX(-50%) translateY(-60px);
          width: 502px;
        }

        .insetbg_annulus {
          background: url(/img/banner-annulus.70676fe8.png) no-repeat 50% / contain;
          height: 100%;
          left: 0;
          position: absolute;
          top: 0;
          width: 100%;
          z-index: 1;
        }

        @keyframes semicircleAnimation {
          0% {
            -webkit-transform: rotate(45deg);
            transform: rotate(45deg);
          }

          50% {
            -webkit-transform: rotate(-30deg);
            transform: rotate(-30deg);
          }

          to {
            -webkit-transform: rotate(45deg);
            transform: rotate(45deg);
          }
        }

        .inset_annulus_sm {
          background: url("../../assets/image/banner-annulus-sm.png") no-repeat 50% / contain;
          height: 80.08%;
          left: 9.96%;
          position: absolute;
          top: 9.96%;
          width: 80.08%;
          z-index: 2;
        }

        .bg-semicircle {
          -webkit-animation: semicircleAnimation 6s linear infinite forwards;
          animation: semicircleAnimation 6s linear infinite forwards;
          background: url(/img/banner-semicircle.0fa5aa84.png) no-repeat 50% / contain;
          height: 88.84%;
          left: 9.96%;
          opacity: 0.6;
          position: absolute;
          top: 6%;
          -webkit-transform: rotate(45deg);
          transform: rotate(45deg);
          -webkit-transform-origin: 206px center;
          transform-origin: 206px center;
          width: 88.84%;
          z-index: 3;
        }

        @keyframes insetSlideUp {
          0% {
            -webkit-transform: translateY(0);
            transform: translateY(0);
          }

          25% {
            -webkit-transform: translateY(25%);
            transform: translateY(25%);
          }

          50% {
            -webkit-transform: translateY(0);
            transform: translateY(0);
          }

          75% {
            -webkit-transform: translateY(-25%);
            transform: translateY(-25%);
          }

          to {
            -webkit-transform: translateY(0);
            transform: translateY(0);
          }
        }

        .bg_ball {
          -webkit-animation: insetSlideUp 12s linear infinite forwards;
          animation: insetSlideUp 12s linear infinite forwards;
          -webkit-backdrop-filter: blur(3px);
          backdrop-filter: blur(3px);
          background: url("../../assets/image/bg_ball.png") no-repeat 50% / contain;
          height: 30.08%;
          left: 3.58%;
          opacity: 0.8;
          position: absolute;
          top: 11.15%;
          width: 30.08%;
          z-index: 4;
        }

        .bg_ball_solid {
          -webkit-animation: insetSlideUp 6s linear 1s infinite forwards;
          animation: insetSlideUp 6s linear 1s infinite forwards;
          background: url("../../assets/image/sphere.png") no-repeat 50% / contain;
          bottom: 22.5%;
          height: 7.17%;
          position: absolute;
          right: 13.15%;
          width: 7.17%;
          z-index: 5;
        }
      }

      .head_con {
        width: 50%;

        .banner_left {
          min-width: 600px;

          h2 {
            font-size: 48px;
            font-weight: 700;
            line-height: 1;
            margin-bottom: 60px;
          }

          p {
            font-size: 12px;
            color: #62657A;
          }

          .banner_btn {
            display: flex;

            .btn_one {
              width: 89 * 2px;
              font-size: 16px;
              padding: 14px 40px;
              background: #000000;
              border-radius: 26px;
              color: #fff;
              text-align: center;
              &:hover {
                color: #FFE100;
                cursor: pointer;
              }
            }
            a {
              background: no-repeat 15px 50% / auto 15px #f4f4f4;
              border-radius: 7px;
              color: #000;
              font-size: 15px;
              line-height: 45px;
              padding: 0 50px 0 50px;
              display: flex;
              align-items: center;
              margin-left: 10px;
              
              img {
                margin-right: 10px;
                width: 15px;
                height: 15px;
              }
            }
          }

          p {
            margin-top: 24px;
            font-weight: 700;
          }
        }

        .banner_img {
          position: absolute;
          top: 30px;
          left: 60%;

          img {
            width: 220px;
          }
        }
      }
    }
  }

  .home_content {
    width: 60%;
    margin: 0 auto;
    min-width: 1170px;
    max-width: 1170px;
    padding-top: 120px;

    .content_img {
      width: 100%;
      height: 463px;

      h2 {
        height: 29px;
        font-size: 48px;
        font-weight: 700;
        text-align: center;
        color: #000000;
        height: 58px;
        line-height: 58px;
      }

      .three_img {
        margin-top: 60px;
        display: flex;
        justify-content: space-between;
        box-sizing: border-box;
        padding: 0 30px;

        .content_item {
          width: 310px;
          height: 359px;
          background: #ffffff;
          border-radius: 8px;
          box-shadow: 8px 10px 30px 0px rgba(233, 236, 253, 0.50);
          transition: 1s;
          cursor: pointer;
          p {
            width: 270px;
            height: 58px;
            font-size: 24px;
            font-family: Gilroy-Bold;
            font-weight: 700;
            text-align: center;
            color: #000000;
            line-height: 29px;
            margin-left: 20px;
          }

          div {
            width: 100%;
            height: 210px;
            padding-top: 88px;
            text-align: center;

            img {
              width: 80px;
              height: 80px;
              border-radius: 16px;
            }
          }

          &:hover {
            transform: scale(1.2, 1.2);
          }
        }
      }
    }

    .invest_title {
      margin-top: 200px;
      h2{
        font-size: 48px;
        text-align: center;
        font-weight: 700;
      }
    }
    .title_wrapper{
      -webkit-background-clip: text;
      background-clip: text;
      background-image: linear-gradient(180deg,hsla(0,0%,84%,.6),hsla(0,0%,84%,0));
      color: transparent;
      font-size: 99px;
      font-weight: 800;
      line-height: 1;
      margin-bottom: -45px;
      text-align: center;
    }

    .invest_bg {
      width: 100%;
      background: url("../../assets/image/content.png") no-repeat 100%/100%;
      border-radius: 10px;
      margin-top: 60px;
      position: relative;
      padding: 50px;

      .invest_bg_title {
        font-size: 24px;
        font-weight: 700;
      }

      .invest_img {
        display: flex;
        position: relative;
        // margin-top: 80px;
        img{
          border-radius: 16px;
          border: 4px solid;
        }
        .img_left {
          flex-shrink: 0;
          position: relative;
          width: 38.5%;
          z-index: 2;

          .left1 {
            -webkit-animation: insetSlideUpTwo 6s linear 1s infinite forwards;
            animation: insetSlideUpTwo 6s linear 1s infinite forwards;
            width: 52%;
            position: absolute;
            top: 8%;
            right: 7.3%;
          }

          .left2 {
            -webkit-animation: insetSlideUpTwo 5s linear 1s infinite forwards;
            animation: insetSlideUpTwo 5s linear 1s infinite forwards;
            width: 55%;
            position: absolute;
            top: 43%;
            right: 30.3%;
          }

          .left3 {
            -webkit-animation: insetSlideUpTwo 4s linear 1s infinite forwards;
            animation: insetSlideUpTwo 4s linear 1s infinite forwards;
            width: 55%;
            position: absolute;
            top: 74%;
            right: 2.7%;
          }
        }

        .img_phone {
          -webkit-animation: insetSlideUpThree 8s linear 1s infinite forwards;
          animation: insetSlideUpThree 8s linear 1s infinite forwards;
          // background: url("https://wx2.sinaimg.cn/mw2000/0025iZgBgy1gwb961ksyqj622o340kjl02.jpg") no-repeat 50%/100%;
          flex-shrink: 0;
          padding-top: 30px;
          position: relative;
          transition: background-image 0.3s linear;
          width: 23%;
          border-radius: 16px;
          overflow: hidden;
          height: 600px;
          img{
            width: 100%;
            height: 100%;
          }
        }

        .img_right {
          flex-shrink: 0;
          position: relative;
          width: 38.5%;

          .right1 {
            -webkit-animation: insetSlideUpTwo 3s linear 1s infinite forwards;
            animation: insetSlideUpTwo 3s linear 1s infinite forwards;
            width: 52%;
            position: absolute;
            top: -5%;
            right: 4.3%;
          }

          .right2 {
            -webkit-animation: insetSlideUpTwo 7s linear 1s infinite forwards;
            animation: insetSlideUpTwo 7s linear 1s infinite forwards;
            width: 52%;
            position: absolute;
            top: 28%;
            left: 20px;
          }

          .right3 {
            -webkit-animation: insetSlideUpTwo 5s linear 1s infinite forwards;
            animation: insetSlideUpTwo 5s linear 1s infinite forwards;
            width: 52%;
            position: absolute;
            bottom: 11%;
            left: 27%;
          }
        }
      }
    }

    .mobile_intro_swiper {
      margin-top: 20px;
      display: flex;
      
      .swiper_left {
        background-color: #f2f3f5;
        border-radius: 20px;
        flex-shrink: 0;
        margin-right: 23px;
        overflow: hidden;
        width: 43%;
        min-width: 430px;
        max-width: 503px;
        position: relative;

        .swiper-left-text {
          margin: 40px 0 0px 40px;
          position: absolute;
          height: 80px;
          overflow: hidden;
          width: 350px;

          .swiper-wrapper {
            .swiper-slide {
              font-size: 24px;
              font-weight: 700;
            }
          }
        }

        .swiper-container {
          margin-top: 120px;
          width: 100%;

          .swiper-wrapper {
            .swiper-slide {
              width: 230px;
              box-sizing: border-box;
              padding: 20px 15px;

              img {
                width: 200px;
                background: #ffffff;
                border-radius: 5px;
                box-shadow: 0px 10px 20px 0px #e3e4e6, 0px 5px 8px 0px #d2d2d6;
              }
            }
          }
        }
      }

      .swiper_right {
        width: 55%;
        min-width: 550px;
        max-width: 643px;
        // height: 100%;
        background: url("../../assets/image/right4.png") no-repeat 100%/100%;
        overflow: hidden;
        position: relative;
        display: flex;
        flex-direction: column;
        border-radius: 20px;

        >div {
          padding-left: 155px;

          &.active {
            background: rgba(255, 255, 255, .5);
          }

          .swiper-right-text {
            position: absolute;
            left: 40px;
            top: 40px;
            height: 80px;
            overflow: hidden;
            width: 350px;

            .swiper-wrapper {
              .swiper-slide {
                font-size: 24px;
                font-weight: 700;
              }
            }
          }

          .swiper-containerTwo {
            margin-top: 51px;
            overflow: hidden;
            white-space: nowrap;
            width: 100%;

            .swiper-wrapper {
              .swiper-slide {
                img {
                  width: 100%;
                  z-index: 9999;
                  vertical-align: bottom;
                  width: 488px;
                  height: 389px;
                  border-radius: 16px;
                  &.active_img {
                    display: none;
                  }
                }
              }
            }
            
            .swiper-pagination {
              text-align: left;
              margin-left: 30px;

              ::v-deep .swiper-pagination-bullet-active {
                background: #000 !important;
                opacity: 1 !important;
              }
            }
          }
        }
      }
    }
    >p {
      margin-top: 20px;
      font-size: 12px;
      color: #62657A;
    }

    .home_pounce {
      width: 100%;

      .pounce_title {
        text-align: left;
        margin-top: 160px;
        margin-bottom: 20px;
        h2{
          font-size: 48px;
          font-weight: 700;
        }
        p{
          text-align: left;
        }
      }

      .pounce_content {
        position: relative;
        display: flex;
        width: 100%;
        height: 100%;

        .pounce_left {
          width: 31%;

          div {
            ul {
              li {
                cursor: pointer;
                height: 80px;
                box-sizing: border-box;
                font-size: 20px;
                padding: 12px 30px;
                background: #f7f8fa;
                margin-bottom: 20px;
                border-radius: 10px;

                a {
                  font-weight: 700;
                  color: #000;
                  text-decoration: underline;
                }

                &.active {
                  background: #fff652;
                  font-family: Gilroy-Bold;
                  font-weight: 700;
                }
              }
            }
          }
        }

        .pounce_right {
          width: 45%;
          min-width: 640px;
          overflow: hidden;
          margin-left: 60px;

          .swiper-containerfour {
            .swiper-wrapper {
              .swiper-slide {
                .swiper-img {
                  width: 100%;
                  // height: 254px;
                }
              }
            }
          }
        }
      }
    }
  }

  .home_foot {
    width: 100%;
    background: #f8f8fa;
    padding: 120px 0 116px 0;

    .foot_con {
      width: 60%;
      margin: 0 auto;
      min-width: 1170px;
      max-width: 1170px;

      .foot_title {
        width: 100%;
        font-size: 48px;
        font-weight: 700;
        text-align: center;
      }

      .foot_list {
        display: flex;
        margin-top: 60px;
        justify-content: space-between;

        .list_item {
          width: 29%;

          h2 {
            font-size: 24px;
            font-weight: 700;
            margin-top: 45px;
            margin-bottom: 12px;
          }

          .foot_list_item {
            li {
              background: url("../../assets/image/icon-check.svg") no-repeat left 5px/14px 12px;
              padding-left: 28px;

              a {
                color: #000;
                font-weight: 700;
                text-decoration: underline;
              }
            }
          }
        }
      }
    }
  }
}
</style>
  