<template>
  <div class="publicFoot">
    <div class="publicFoot_back">
    <div class="publicFoot_head">
      <img class="logo" src="@/assets/images/5.png" alt="" />
      <ul>
        <li class="publicFoot_tip">App账号</li>
        <li class="publicFoot_btn" style="margin-right: 5px" @click="tiaozhuan('https://weibo.com/u/1910672761?topnav=1&wvr=6&topsug=1')">
          <img src="@/assets/images/douyu.png" alt="" />
          斗鱼
        </li>
        <li class="publicFoot_btn"  @click="tiaozhuan('https://www.xiaohongshu.com/user/profile/5ad78361e8ac2b1fca15ff66?xhsshare=CopyLink&appuid=609b9c340000000001004f33&apptime=1667552951')">
          <img src="@/assets/images/weibo.png" alt=""  />
          微博
        </li>
      </ul>
    </div>
    <div class="publicFoot_con">
      <ul class="publicFoot_con_left">
        <li class="list_router" @click="jumpFun('market')">音乐专辑</li>
        <li class="list_routerLi" @click="jumpFun('market')">Stocks</li>
        <li class="list_routerLi" @click="jumpFun('market')">Currencies</li>
        <li class="list_routerLi" @click="jumpFun('market')">Indicies</li>
        <li class="list_routerLi" @click="jumpFun('market')">Commodities</li>
      </ul>
      <ul class="publicFoot_con_left">
        <li class="list_router" @click="jumpFun('support')">Support</li>
        <li class="list_routerLi" @click="jumpFun('support')">Help Centre</li>
      </ul>
      <ul class="publicFoot_con_left">
        <li class="list_router" @click="jumpFun('about')">About</li>
        <li class="list_routerLi" @click="jumpFun('about')">Our Story</li>
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
        <li class="con_right_bottom">clientservice@tigerbrokers.co.uk </li>
        <!-- <li class="con_right_con">40x-xxx-xx88</li> -->
        <!-- <li class="con_right_bottom">service@XXXXXXXXXXX.com</li> -->
      </ul>
    </div>
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
    tiaozhuan(lianjie){
      window.open(lianjie)
    },
  },
};
</script>

<style lang="scss" scoped>
ul li {
  list-style: none;
}
.publicFoot {
  width: 100%;
  min-width: 1200px;
  overflow-x: auto;
  background: #000000;
  display: flex;
  align-items: center;
  flex-direction: column;
  .publicFoot_back{
    height: 354px;
    // background: url('../assets/images/erkexihaun.png') no-repeat;
    // background-size: 100% 100%;
    width: 60%;
    min-width: 1170px;
    max-width: 1170px;
  }
  .publicFoot_head {
    height: 89px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid rgba(255, 255, 255, 0.5);
    .logo{
      width: 150px;
    }
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
          width: 15px;
          height: 15px;
          border-radius: 5px;
        }
      }
    }
  }
  .publicFoot_con {
    // padding: 0 10px;
    margin-top: 26.5 * 2px;
    color: #fff;
    display: flex;
    justify-content: space-between;
    .publicFoot_con_left {
      .list_router {
        margin-bottom: 17 * 2px;
        cursor: pointer;
        &:hover {
          opacity: .5;
        }
      }
      .list_routerLi {
        margin-bottom: 7 * 2px;
        cursor: pointer;
        &:hover {
          opacity: .5;
        }
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