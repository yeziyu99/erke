<template>
  <div class="big_wrap">
    <div class="invest_banner">
      <div class="container lazyload">
        <div class="banner_bg_wrap">
          <div class="bg_container">
            <div class="bg_img"></div>
            <div class="bg_img"></div>
            <div class="bg_img"></div>
          </div>
          <div class="head_con">
        <div class="baner_left">
          <h2>
            Invest in top performing assets with one-stop CFD trading platform in your pocket.
          </h2>
          <div class="">

          </div>
        </div>
      </div>
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
.invest_banner {
  background-color: #ffe100;
  color: #000;
  overflow: hidden;
  padding: 110px 0 50px;
  // height:300px;
  position: relative;
  .container {
    align-items: center;
    display: flex;
    height: 500px;
    .banner_bg_wrap {
      height: 100%;
      pointer-events: none;
      position: absolute;
      right: 0;
      top: 0;
      width: 100%;
      @keyframes bgTranslationX {
        0% {
          -webkit-transform: translateX(-200%);
          transform: translateX(-200%);
        }
        to {
          -webkit-transform: translateX(-100%);
          transform: translateX(-100%);
        }
      }
      .bg_container {
        display: flex;
        flex-wrap: nowrap;
        height: 100%;
        width: 100%;
        transform: translateX(-100%);
        -webkit-animation: bgTranslationX 60s linear infinite;
        animation: bgTranslationX 60s linear infinite;
        .bg_img {
          background: url("../../assets/image/enter-play.png") no-repeat 100%;
          flex-shrink: 0;
          height: 100%;
          -webkit-transform: translateZ(0);
          transform: translateZ(0);
          width: 100%;
        }
      }
    }
  }
  .head_con {
  //   //  position: relative;
    width: 60%;
    min-width: 1000px;
    overflow: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    .baner_left {
      position: absolute;
      top: 100px;
      width: 35%;
      h2{
        font-size: 48px;
    font-weight: 700;
    line-height: 1;
    margin-bottom: 60px;
      }
    }
  }

  .lazyload {
  }
}
</style>
  