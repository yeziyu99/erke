<template>
  <div class="big_wrap">
    <div class="inset_content">
      <div class="inset_bg">
        <div class="insetbg_annulus"></div>
        <!-- <div class="inset_annulus_sm"></div> -->
        <div class="bg-semicircle"></div>
        <div class="bg_ball"></div>
        <div class="bg_ball_solid"></div>
        <div class="bg_ball_top"></div>
        <div class="bg_ball_bottom"></div>
      </div>
    </div>
    <div class="page_main">
      <div style="margin-left:450px">
        <div class="logo">
        <img src="@/assets/image/tiger.png" alt="" />
      </div>
      <h2 class="sloan">Invest<br />like a tiger</h2>
      <div class="subtitle">
        Sign up for next generation
        <br />
        mobile investing
      </div>
      <div class="main_btn">
        <a href="" class="ios">
          <img src="@/assets/image/apple_down.png" alt="" />
          APP STORE</a
        >
        <a href="" class="android">
          <img src="@/assets/image/googleplay_down.png" alt="" />
          GOOGLE PLAY</a
        >
      </div>
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
  min-height:1100px;
  min-width: 800px;
  overflow: auto;
  background: #ffe500;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  .inset_content {
    // height: 940px;
    // width: 80%;
    // position: relative;
    height: 940px;
    position: absolute;
    right: 29%;
    top: 50%;
    -webkit-transform: translateY(-53%);
    transform: translateY(-53%);
    width: 940px;
    .inset_bg {
      .insetbg_annulus {
        background: url("../../assets/image/banner-annulus.png") no-repeat;
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
        background: url("../../assets/image/banner-annulus-sm.png") no-repeat;
        height: 70%;
        left: 28.96%;
        position: absolute;
        top: 17.96%;
        width: 60%;
        min-width: 1200px;
        z-index: 2;
      }
      .bg-semicircle {
        background: url("../../assets/image/banner-semicircle.png") no-repeat
          50% / contain;
        // height: 60%;
        // left: 22.1%;
        // opacity: 0.6;
        // position: absolute;
        // top: 18.51%;
        height: 84%;
        left: 21.1%;
        opacity: 0.6;
        position: absolute;
        top: 13.51%;
        -webkit-transform: rotate(45deg);
        transform: rotate(45deg);
        -webkit-transform-origin: 520px center;
        transform-origin: 520px center;
        width: 90%;
        z-index: 3;
        -webkit-animation: semicircleAnimation 6s linear infinite forwards;
        animation: semicircleAnimation 6s linear infinite forwards;
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
        background: url("../../assets/image/bg_ball.png") no-repeat 50% /
          contain;
        -webkit-animation: insetSlideUp 12s linear infinite forwards;
        animation: insetSlideUp 12s linear infinite forwards;
        -webkit-backdrop-filter: blur(3px);
        backdrop-filter: blur(3px);
        height: 28.08%;
        left: 16.58%;
        opacity: 0.8;
        position: absolute;
        top: 14.15%;
        width: 30.08%;
        z-index: 4;
      }
      .bg_ball_solid {
        -webkit-animation: 6s linear 1s infinite forwards;
        animation: insetSlideUp 6s linear 1s infinite forwards;
        background: url("../../assets/image/sphere.png") no-repeat 50% / contain;
        bottom: 15.5%;
        height: 6.17%;
        position: absolute;
        right: 0.15%;
        width: 7.17%;
        z-index: 5;
      }
      .bg_ball_top {
        -webkit-animation: 6s linear 1s infinite forwards;
        animation: insetSlideUp 6s linear 1s infinite forwards;
        background: url("../../assets/image/sphere_top.png") no-repeat 50% /
          contain;
        top: 16.5%;
        height: 6.17%;
        position: absolute;
        left: -5.15%;
        width: 7.17%;
        z-index: 5;
      }
      .bg_ball_bottom {
        -webkit-animation: 6s linear 1s infinite forwards;
        animation: insetSlideUp 6s linear 1s infinite forwards;
        background: url("../../assets/image/sphere_top.png") no-repeat 50% /
          contain;
        bottom: 5.5%;
        height: 6.17%;
        position: absolute;
        left: -20.15%;
        width: 7.17%;
        z-index: 5;
      }
      // sphere
    }
  }
  .page_main {
    display: flex;
    flex-direction: column;
    margin: 0 auto 20px;
    max-width: 1050px;
    // padding-top: calc(50vh - 250px);
    position: relative;
    z-index: 1;
    .logo {
      img {
        width: 120px;
        height: 50px;
      }
    }
    .sloan {
      font-size: 60px;
      font-weight: 700;
      line-height: 1;
      margin-top: 80px;
    }
    .subtitle {
      font-size: 20px;
      line-height: 1.3;
      margin-top: 20px;
    }
    .main_btn {
      display: flex;
      margin-top: 50px;
      a {
        background: no-repeat 15px 50% / auto 15px #f4f4f4;
        border: 1px solid #fff;
        border-radius: 7px;
        color: #000;
        font-size: 15px;
        line-height: 45px;
        padding: 0 15px 0 15px;
        display: flex;
        align-items: center;
        img {
          margin-right: 10px;
        }
      }
      // .ios{

      // }
      .android {
        margin-left: 10px;
      }
    }
  }
}
</style>
  