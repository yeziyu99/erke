<template>
  <div class="big_wrap">
    <div class="aboutUs_head">
      <div class="about_head_title">
        <div class="title_left">
          <div class="about_title_title">About us</div>
          <div class="about_ready">Ready! Pounce!</div>
          <div class="about_ready">
            Be the independent investor you were born to be.
          </div>
        </div>

        <!-- <div class="title_right">
          <img src="@/assets/image/about.png" alt="" />
        </div> -->
      </div>
    </div>
    <div class="about_content">
      <p>
        With 9 million registered users worldwide, Tiger Brokers believes everyone should have access to the market, and everyone has the right to reach for the best and grow to their full potential as investors. Delivering knowledge, innovation, and next-generation technology, Tiger Brokers is putting the power of growth in the hands of everyday British investors.
      </p>
      <h1>Our story</h1>
      <div>Tiger Brokers is a NASDAQ listed global company (TIGR) with subsidiaries that provide over 9 million registered users and nearly 2 million account holders access to the world’s stock markets. Since its inception in 2014, the company has become the fastest growing online broker for millennials and Gen Z. Why? Because Tiger Brokers delivers an unparalleled trading experience. Our philosophy is simple. </div>
      <div>Our philosophy is simple. Our platform Tiger CFD is designed to give everyone access to the market, and reach for the best and grow to their full potential as investors. With this in mind, the company has designed Tiger CFD as an innovative, user-friendly platform that focuses on the power of knowledge. We aim to deliver trading opportunities in UK market with transparent, in-depth information at users' fingertips.</div>
      <div>Tiger Brokers UK is designated to help consumers from England and Wales enter the CFDs with more accessibility and profitability. We deliver an experience like no other. Our mission is to help UK investors, from beginners to experts, take complete control of their investing journey.</div>
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
  min-width: 1200px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
  .aboutUs_head {
    width: 100%;
    height: 325px;
    background-color: #ffe103;
    display: flex;
    align-items: center;
    flex-direction: column;
    background-image: url("../../assets/image/about.png");
    background-repeat: no-repeat;
    background-position: bottom 0px right 23%;
    .about_head_title {
      width: 60%;
       min-width: 1200px;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .title_left {
        white-space: nowrap;
        .about_title_title {
          font-size: 60px;
          margin-bottom: 12px;
        }
        .about_ready {
          font-size: 24px;
        }
      }
      .title_right {
        height: 100%;
        display: flex;
        align-items: flex-end;
        margin-right: -63px;
      }
    }
  }
  .about_content {
    width: 60%;
     min-width: 1200px;
    // height: 296.5*2px;
  padding: 80px 0 50px 0;

  
  p{
    font-size: 18;
    font-weight: 900;
  }
  h1{
    font-size: 36px;
    margin-top: 60px;
  }
  div{
    margin-top: 15px;
  }
  }
}
</style>
  