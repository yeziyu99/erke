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
                  <source
                    src="https://c1.itigergrowth.com/portal5/static/video/banner-inset-0215.mp4"
                  />
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
      <div class="invest_bg"></div>
      <div class="home_pounce">
        <div class="pounce_title">Pounce on Tiger CFD to leap ahead</div>
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
              <li>Subsidiaries hold 52 licenses and qualifications in AU, US, HK, SG and NZ</li>
            </ul>
          </li>
          <li class="list_item">
            <img src="@/assets/image/home2.png" alt="" />
            <h2>Tiger Brokers in UK</h2>
            <ul class="foot_list_item">
              <li>Tiger Brokers (UK) Limited is an England & Wales registered company, authorized and regulated by the Financial Conduct Authority, FCA (Register number 470325), and dedicated to UK investors.</li>
              <li>FCA Regulated, FSCS protected</li>
            </ul>
          </li>
          <li class="list_item">
            <img src="@/assets/image/home3.png" alt="" />
            <h2>Client funds and assets</h2>
            <ul class="foot_list_item">
              <li>Client monies are held in segregated client funds accounts and are covered by thy the provisions of the Financial Services Compensation Scheme (FSCS). More about FSCS
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
export default {
  data() {
    return {};
  },
  components: {},
  methods: {},
  created() {},
  mounted() {},
};
</script>
  
  <style lang="scss" scoped>
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
      height: 366 * 2px;
      background: linear-gradient(180deg, #f2f3f5, #fcfcfc);
      border-radius: 10px;
    }
    .home_pounce{
      width: 100%;
.pounce_title{
  font-size: 48px;
      text-align: left;
      font-weight: 700;
      margin-top: 160px;
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
              a{
                color: #000;
                font-weight: 700;
                text-decoration: underline;
              }
            }
          }
        }
      }
      .foot-btn{
        margin: 66px auto 0;
        width: 89*2px;
        background: #FFE100;
        padding: 14px 20px;
        border-radius: 26px;
        text-align: center;
      }
    }
  }
}
</style>
  