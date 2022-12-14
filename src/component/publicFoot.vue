<template>
  <div class="publicFoot">
    <div class="publicFoot_back">
      <div class="publicFoot_head">
        <img class="logo" src="@/assets/images/5.png" alt="" />
        <!-- <ul>
        <li class="publicFoot_tip">App账号</li>
        <li class="publicFoot_btn" style="margin-right: 5px" @click="externalJumpFn('https://www.douyu.com/78622')">
          <img src="@/assets/images/douyu.png" alt="" />
          斗鱼
        </li>
        <li class="publicFoot_btn"  @click="externalJumpFn('https://weibo.com/u/1910672761?topnav=1&wvr=6&topsug=1')">
          <img src="@/assets/images/weibo.png" alt=""  />
          微博
        </li>
      </ul> -->
      </div>
      <div class="publicFoot_con">
        <ul class="publicFoot_con_left">
          <li class="list_router" @click="jumpFun('market')">音乐专辑</li>
          <li class="list_routerLi" @click="jumpFun('market')">专辑展示</li>
          <li class="list_routerLi" @click="jumpFun('market')">歌曲链接直跳</li>
        </ul>
        <ul class="publicFoot_con_left">
          <li class="list_router" @click="jumpFun('support')">优质UP主</li>
          <li class="list_routerLi" @click="jumpFun('support')">UP主推荐</li>
        </ul>
        <ul class="publicFoot_con_left">
          <li class="list_router">二珂简介</li>
          <li class="list_routerLi">二珂简介</li>
          <li class="list_routerLi">二珂个人社交平台</li>
        </ul>
        <ul class="publicFoot_con_left">
          <li class="list_router" @click="jumpFun('about')">关于我们</li>
          <li class="list_routerLi" @click="jumpFun('about')">我们的故事</li>
          <li class="list_routerLi" @click="jumpFun('about')">联系我们</li>
        </ul>
        <ul class="publicFoot_con_right">
          <li class="con_right_title">
            UI：叶子宇<br />
            前端：叶子宇<br />
            后端：黄小珂<br />
            非官方网站<br />
          </li>
          <li class="con_right_bottom">346989693@qq.com </li>
        </ul>
      </div>
      <p style="color:#fff;text-align: center;">版权所有@叶子宇吖</p>
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
    externalJumpFn(lianjie) {
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
  min-width: 1170px;
  overflow-x: auto;
  background: #000000;
  display: flex;
  align-items: center;
  flex-direction: column;

  .publicFoot_back {
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

    .logo {
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

      .con_right_bottom {
        text-align: right;
      }
    }
  }
}
</style>