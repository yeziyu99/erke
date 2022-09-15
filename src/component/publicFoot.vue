<template>
  <div class="publicFoot">
    <div class="publicFoot_head">
      <img src="@/assets/image/yellowIcon.png" alt="" />
      <ul>
        <li class="publicFoot_tip">MOBILE APP</li>
        <li class="publicFoot_btn" style="margin-right: 5px" @click="jumpFun('invest')">
          <img src="@/assets/image/apple.png" alt="" />
          APP STORE
        </li>
        <li class="publicFoot_btn"  @click="jumpFun('invest')">
          <img src="@/assets/image/googleplay.png" alt=""  />
          GOOGLE PLAY
        </li>
      </ul>
    </div>
    <div class="publicFoot_con">
      <ul class="publicFoot_con_left">
        <li class="list_router">Market</li>
        <li class="list_routerLi">Stocks</li>
        <li class="list_routerLi">Currencies</li>
        <li class="list_routerLi">Indicies</li>
        <li class="list_routerLi">Commodities</li>
      </ul>
      <ul class="publicFoot_con_left">
        <li class="list_router">Support</li>
        <li class="list_routerLi">Help Centre</li>
      </ul>
      <ul class="publicFoot_con_left">
        <li class="list_router">About</li>
        <li class="list_routerLi">Our Story</li>
      </ul>
      <ul class="publicFoot_con_left">
        <li class="list_router">Agreements and Disclosures</li>
        <li class="list_routerLi">Disclosures</li>
        <li class="list_routerLi">Terms and Conditions</li>
      </ul>
      <ul class="publicFoot_con_right">
        <li class="con_right_title">
          Customer Service<br />
          Weekdays 09:30-05:00 (next day)
        </li>
        <li class="con_right_con">400-000-8888</li>
        <li class="con_right_bottom">service@XXXXXXXXXXX.com</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    jumpFun(route) {
      if (this.$route.name != route) {
        this.$router.push(route);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
ul li {
  list-style: none;
}
.publicFoot {
  height: 354px;
  width: 100%;
  min-width: 1200px;
  overflow-x: auto;
  background: #000000;
  display: flex;
  // justify-content: center;
  align-items: center;
  flex-direction: column;
  // align-items: center;
  .publicFoot_head {
    width: 60%;
    //  min-width: 600px;
    height: 89px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid rgba(255, 255, 255, 0.5);
    ul {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .publicFoot_tip {
        font-size: 10px;
        color: rgba(255, 255, 255, 0.4);
        margin-right: 10px;
      }
      .publicFoot_btn {
        // width: 43*2px;
        // height: 14.5*2px;
        padding: 9px 10px;
        box-sizing: border-box;
        border: 1px solid rgba(255, 255, 255, 0.4);
        border-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 10px;
        color: #fff;
        img {
          margin-right: 5px;
        }
      }
    }
  }
  .publicFoot_con {
    width: 60%;
    margin-top: 26.5 * 2px;
    color: #fff;
    display: flex;
    justify-content: space-between;
    .publicFoot_con_left {
      .list_router {
        margin-bottom: 17 * 2px;
      }
      .list_routerLi {
        margin-bottom: 7 * 2px;
      }
    }
    .publicFoot_con_right {
      .con_right_title {
        text-align: right;
      }
      .con_right_con {
        font-size: 16 * 2px;
        margin: 20px 0;
      }
      .con_right_bottom{
        text-align: right;
      }
    }
  }
}
</style>