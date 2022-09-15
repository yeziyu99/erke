<template>
  <div class="big_wrap">
    <div class="homepage_banner">
      <div class="home_header">
        <div class="head_con">
          <div class="banner_left">
            <h2>Hey!Your CFD trading journey starts today</h2>
            <h4 style="margin-bottom: 90px; font-size: 20px">
              Explore benefits from Tiger CFD platform.Enjoy your multiple
              <br />
              choices of stocks, currencies, indices, gold and more.
            </h4>
            <div class="banner_btn">
              <div class="btn_one">Get started</div>
              <a href="" class="ios">
                <img src="@/assets/image/apple_down.png" alt="" />
                APP STORE</a
              >
              <a href="" class="android">
                <img src="@/assets/image/apple_down.png" alt="" />
                GOOGLE PLAY</a
              >
            </div>
            <p>Images displayed are for illustrative purposes only</p>
          </div>
          <!-- <div class="banner_img">
            <img src="@/assets/image/phone.png" alt="" />
          </div> -->
        </div>
        <div class="home_bg">
          <div
            style="
              max-width: 230px;
              flex: 1 1;
              margin: 0 auto;
              position: relative;
            "
          >
            <div style="padding-top: 204%; position: relative; width: 100%">
              <div class="inset_bg">
                <div class="insetbg_annulus"></div>
                <div class="inset_annulus_sm"></div>
                <div class="bg-semicircle"></div>
                <div class="bg_ball"></div>
                <div class="bg_ball_solid"></div>
              </div>
              <div class="video_wrap">
                <video
                  class="inset_video enter-play"
                  muted
                  playsinline
                  webkit-playsinline
                  autoplay
                  loop
                  poster="https://c1.itigergrowth.com/portal5/static/media/banner-poster.7a77394e.jpg"
                  preload="auto"
                  data-status="playing"
                >
                  <source src="@/assets/image/banner-inset-0215.mp4" />
                </video>
                <img
                  class="inset_iphone"
                  src="@/assets/image/iphone13promax.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="home_content">
      <img class="content_img" src="@/assets/image/home_con.png" alt="" />
      <div class="invest_title">
        Invest globally with next-generation app <br />
        at your fingertips
      </div>
      <div class="invest_bg">
        <div class="invest_bg_title">
          Diversify your portfolio with little limits
        </div>
        <div class="invest_img">
          <div class="img_left">
            <img class="left1" src="@/assets/image/left1.png" alt="" />
            <img class="left2" src="@/assets/image/left2.png" alt="" />
            <img class="left3" src="@/assets/image/left3.png" alt="" />
          </div>
          <div class="img_phone"></div>
          <div class="img_right">
            <img class="right1" src="@/assets/image/right1.png" alt="" />
            <img class="right2" src="@/assets/image/right2.png" alt="" />
            <img class="right3" src="@/assets/image/right3.png" alt="" />
          </div>
        </div>
      </div>
      <div class="mobile_intro_swiper">
        <div class="swiper_left">
          <h3>30:1 leverage to apply</h3>
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <img src="@/assets/image/left4.png" alt="" />
              </div>
              <div class="swiper-slide">
                <img src="@/assets/image/left5.png" alt="" />
              </div>
              <div class="swiper-slide">
                <img src="@/assets/image/left6.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div class="swiper_right">
          <!-- <div style="width:100%;height:40px"></div> -->
          <h3>
            No commission & <br />
            hidden fee
          </h3>
          <div class="swiper-containerTwo">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <div class="img">
                  <img src="@/assets/image/right5.png" alt="" />
                  <img src="@/assets/image/right6.png" alt="" />
                </div>
              </div>
              <div class="swiper-slide">
                <div class="img">
                  <img src="@/assets/image/right8.png" alt="" />
                  <img src="@/assets/image/right7.png" alt="" />
                </div>
              </div>
            </div>
            <div class="swiper-pagination"></div>
          </div>
        </div>
      </div>
      <div class="home_pounce">
        <div class="pounce_title">Pounce on Tiger CFD to leap ahead</div>
        <div class="pounce_content">
          <div class="pounce_left">
            <ul>
              <li :class="active==2-1||active==7?'on':''" @click="jumpFun(7)">Access to most popular markets<br>
                <a href="">See all markets</a>
              </li>
              <li :class="active==3-1?'on':''" @click="jumpFun(3-1)">Suit yourself to manage profit<br> and risk</li>
              <li :class="active==4-1?'on':''" @click="jumpFun(4-1)">30:1 leverage to gain more with<br> less</li>
              <li :class="active==5-1?'on':''" @click="jumpFun(5-1)">Deposit and withdraw within 1 <br> minute</li>
              <li :class="active==6-1?'on':''" @click="jumpFun(6-1)">No commission and hidden fees</li>
              <li :class="active==7-1?'on':''" @click="jumpFun(7-1)">Get your local expert help on<br> what to buy and when to sell</li>
            </ul>
          </div>
          <div class="pounce_right">
            <div class="swiper-containerfour">
              <div class="swiper-wrapper">
                <div class="swiper-slide">
                  <img class="swiper-img" src="@/assets/image/tu1.png" alt="" />
                </div>
                <div class="swiper-slide">
                  <img class="swiper-img" src="@/assets/image/tu1.png" alt="" />
                </div>
                <div class="swiper-slide">
                  <img class="swiper-img" src="@/assets/image/tu3.png" alt="" />
                </div>
                <div class="swiper-slide">
                  <img class="swiper-img" src="@/assets/image/tu4.png" alt="" />
                </div>
                <div class="swiper-slide">
                  <img class="swiper-img" src="@/assets/image/tu5.png" alt="" />
                </div>
                <div class="swiper-slide">
                  <img class="swiper-img" src="@/assets/image/tu1.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="home_foot">
      <div class="foot_con">
        <div class="foot_title">Invest wise, invest well</div>
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
        <div class="foot-btn">Get started</div>
      </div>
    </div>
  </div>
</template>
   
  <script>
// import { Swiper, SwiperSlide } from 'swiper/vue';
// import 'swiper/css';
import "swiper/dist/js/swiper";
import "swiper/dist/css/swiper.css";
import Swiper from "swiper";
export default {
  data() {
    return {
      active:0
    };
  },
  components: {},
  methods: {
    jumpFun(val){
      // this.active=val
    }
  },
  created() {},
  mounted() {
    new Swiper(".swiper-container", {
      //direction: 'vertical', // 垂直切换选项
      //mousewheel: true, //滚轮
      width: 254,
      autoplay: {
        //自动开始
        delay: 2500, //时间间隔
        disableOnInteraction: false, //*手动操作轮播图后不会暂停*
      },
      loop: true, // 循环模式选项

      // 如果需要分页器
      pagination: {
        el: ".swiper-pagination",
        clickable: true, // 分页器可以点击
      },

      // 如果需要前进后退按钮
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },

      // 如果需要滚动条
      scrollbar: {
        el: ".swiper-scrollbar",
      },
    });
    new Swiper(".swiper-containerTwo", {
      //direction: 'vertical', // 垂直切换选项
      //mousewheel: true, //滚轮
      // width: 254,
      autoplay: {
        //自动开始
        delay: 2500, //时间间隔
        disableOnInteraction: false, //*手动操作轮播图后不会暂停*
      },
      loop: true, // 循环模式选项

      // 如果需要分页器
      pagination: {
        el: ".swiper-pagination",
        clickable: true, // 分页器可以点击
      },

      // 如果需要前进后退按钮
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },

      // 如果需要滚动条
      scrollbar: {
        el: ".swiper-scrollbar",
      },
    });
    let thiss=this
   let num= new Swiper(".swiper-containerfour", {
      // direction: "vertical", // 垂直切换选项
      //mousewheel: true, //滚轮
      initialSlide: thiss.active,
      width: 640,
      autoplay: {
        //自动开始
        delay: 2500, //时间间隔
        disableOnInteraction: false, //*手动操作轮播图后不会暂停*
      },
      loop: true, // 循环模式选项

      // // 如果需要分页器
      // pagination: {
      //   el: ".swiper-pagination",
      //   clickable: true, // 分页器可以点击
      // },

      // 如果需要前进后退按钮
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },

      // 如果需要滚动条
      scrollbar: {
        el: ".swiper-scrollbar",
      },
          on: {
      slideChangeTransitionEnd: function(){
        thiss.active=this.activeIndex
        console.log(thiss.active,'ooooo')
        // console.log(this,'this')
        // return this.activeIndex
        // alert(this.activeIndex);//切换结束时，告诉我现在是第几个slide
      },
    },
    });
    // console.log(num.activeIndex,'0000000')

    //     on: {
    //   slideChangeTransitionEnd: function(){
    //     alert(this.activeIndex);//切换结束时，告诉我现在是第几个slide
    //   },
    // },
  },
};
</script>
  
  <style lang="scss" scoped>
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
      min-width: 1200px;
      height: 100%;
      margin: 0 auto;
      position: relative;
      display: flex;
      .home_bg {
        width: 50%;
        position: relative;
        // -webkit-keyframes phoneSlide {
        //   0% {
        //     -webkit-transform: translateY(-60px);
        //     transform: translateY(-60px);
        //   }
        //   50% {
        //     -webkit-transform: translateY(-100px);
        //     transform: translateY(-100px);
        //   }
        //   to {
        //     -webkit-transform: translateY(-60px);
        //     transform: translateY(-60px);
        //   }
        // }
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
            -webkit-transform: perspective(480px) scaleX(0.96) rotateY(-8deg)
              skewY(4deg) translate(-58%, -50%);
            transform: perspective(480px) scaleX(0.96) rotateY(-8deg)
              skewY(4deg) translate(-58%, -50%);
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
          background: url(/img/banner-annulus.70676fe8.png) no-repeat 50% /
            contain;
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
          background: url("../../assets/image/banner-annulus-sm.png") no-repeat
            50% / contain;
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
          background: url(/img/banner-semicircle.0fa5aa84.png) no-repeat 50% /
            contain;
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
          // height: 66%;
          // right: 0;
          // opacity: 0.6;
          // position: absolute;
          // top: 102px;
          // -webkit-transform: rotate(45deg);
          // transform: rotate(45deg);
          // -webkit-transform-origin: 520px center;
          // transform-origin: 520px center;
          // width: 57%;
          // z-index: 3;
          // -webkit-animation: semicircleAnimation-5954443c 6s linear infinite
          //   forwards;
          // animation: semicircleAnimation-5954443c 6s linear infinite forwards;
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
          background: url("../../assets/image/bg_ball.png") no-repeat 50% /
            contain;
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
          background: url("../../assets/image/sphere.png") no-repeat 50% /
            contain;
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
          // position: absolute;
          // top: 100px;
          // width: 35%;
          min-width: 600px;
          h2 {
            font-size: 48px;
            font-weight: 700;
            line-height: 1;
            margin-bottom: 60px;
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
            }
            a {
              background: no-repeat 15px 50% / auto 15px #f4f4f4;
              // border: 1px solid #fff;
              border-radius: 7px;
              color: #000;
              font-size: 15px;
              line-height: 45px;
              padding: 0 15px 0 15px;
              display: flex;
              align-items: center;
              margin-left: 10px;
              img {
                margin-right: 10px;
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
          // right: 10px;
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
    min-width: 1200px;
    padding-top: 120px;
    .content_img {
      width: 100%;
    }
    .invest_title {
      font-size: 48px;
      text-align: center;
      font-weight: 700;
      margin-top: 200px;
    }
    .invest_bg {
      width: 100%;
      // height: 366 * 2px;
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
        margin-top: 80px;
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
            -webkit-animation: insetSlideUpTwo 6s linear 1s infinite forwards;
            animation: insetSlideUpTwo 6s linear 1s infinite forwards;
            width: 55%;
            position: absolute;
            top: 48%;
            right: 30.3%;
          }
          .left3 {
            -webkit-animation: insetSlideUpTwo 6s linear 1s infinite forwards;
            animation: insetSlideUpTwo 6s linear 1s infinite forwards;
            width: 55%;
            position: absolute;
            top: 70%;
            right: -2.7%;
          }
        }
        .img_phone {
          -webkit-animation: insetSlideUpTwo 6s linear 1s infinite forwards;
          animation: insetSlideUpTwo 6s linear 1s infinite forwards;
          background: url("../../assets/image/phone1.png") no-repeat 50%/100%;
          flex-shrink: 0;
          padding-top: 46.65%;
          position: relative;
          transition: background-image 0.3s linear;
          width: 23%;
        }
        .img_right {
          flex-shrink: 0;
          position: relative;
          width: 38.5%;
          .right1 {
            -webkit-animation: insetSlideUpTwo 6s linear 1s infinite forwards;
            animation: insetSlideUpTwo 6s linear 1s infinite forwards;
            width: 52%;
            position: absolute;
            top: -15%;
            right: 4.3%;
          }
          .right2 {
            -webkit-animation: insetSlideUpTwo 6s linear 1s infinite forwards;
            animation: insetSlideUpTwo 6s linear 1s infinite forwards;
            width: 52%;
            position: absolute;
            top: 15%;
            left: 0;
          }
          .right3 {
            -webkit-animation: insetSlideUpTwo 6s linear 1s infinite forwards;
            animation: insetSlideUpTwo 6s linear 1s infinite forwards;
            width: 52%;
            position: absolute;
            bottom: 7%;
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
        padding: 40px 0 0px 40px;
        width: 43%;
        h3 {
          font-size: 24px;
          font-weight: 700;
        }
        .swiper-container {
          margin-top: 64px;
          .swiper-wrapper {
            .swiper-slide {
              // width: 254px !important;
              img {
                width: 300px;
              }
            }
          }
        }
      }
      .swiper_right {
        width: 55%;
        height: 100%;
        background: url("../../assets/image/right4.png") no-repeat 100%/100%;
        padding: 0px 0 0px 40px;
        overflow: hidden;
        position: relative;
        display: flex;
        flex-direction: column;
        h3 {
          font-size: 24px;
          font-weight: 700;
          margin-top: 20px;
        }
        .swiper-containerTwo {
          .swiper-wrapper {
            .swiper-slide {
              .img {
                display: flex;
                align-items: flex-end;
                justify-content: flex-end;
                margin-right: 20px;
              }
              img {
                width: 254px;
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
    .home_pounce {
      width: 100%;
      .pounce_title {
        font-size: 48px;
        text-align: left;
        font-weight: 700;
        margin-top: 160px;
        margin-bottom: 20px;
      }
      .pounce_content {
          position: relative;
          display: flex;
          justify-content: space-around;
          width: 100%;
          height: 100%;
          
          .pounce_left {
            width:31%;
            ul{
              li{
                font-size: 20px;
                padding: 16px 30px;
                background: #F7F8FA;
                margin-bottom: 24px;
                border-radius: 10px;
                a{
                  font-weight: 700;
                  color: #000;
                  text-decoration: underline;
                }
                &.on{
                  background: #ffe100;
                  font-weight: 700;
                }
              }
            }
          }
          .pounce_right {
            width: 58%;
            overflow: hidden;
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
              background: url("../../assets/image/icon-check.svg") no-repeat
                left 5px/14px 12px;
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
      .foot-btn {
        margin: 66px auto 0;
        width: 89 * 2px;
        background: #ffe100;
        padding: 14px 20px;
        border-radius: 26px;
        text-align: center;
      }
    }
  }
}
</style>
  