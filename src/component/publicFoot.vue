<template>
  <div class="publicFoot background_linear">
    <div class="publicFoot_back">
      <div class="publicFoot_head">
        <img class="logo" src="@/assets/images/5.png" alt="" />
        <img class="logos" src="@/assets/images/logo.png" alt="" />
      </div>
      <div class="publicFoot_con">
        <ul class="publicFoot_con_left">
          <li class="list_router" @click="jumpFun('photo')">相册视频</li>
          <li class="list_routerLi" @click="jumpFun('photo')">图册展示</li>
          <li class="list_routerLi" @click="jumpFun('photo')">视频展示</li>
        </ul>
        <ul class="publicFoot_con_left">
          <li class="list_router" @click="jumpFun('music')">音乐专辑</li>
          <li class="list_routerLi" @click="jumpFun('music')">专辑展示</li>
          <li class="list_routerLi" @click="jumpFun('music')">本站现有音乐</li>
        </ul>
        <ul class="publicFoot_con_left">
          <li class="list_router" @click="jumpFun('support')">优质UP主</li>
          <li class="list_routerLi" @click="jumpFun('support')">点击搜索</li>
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
            非官方网站<br />
            UI：叶子宇<br />
            前端：叶子宇<br />
            后端：黄小珂<br />
            资料：周三鸽&&叶子宇<br />
          </li>
          <li class="con_right_bottom">346989693@qq.com</li>
        </ul>
      </div>
      <!-- <p style="margin-top: 10px;text-align: center;">
        <el-link @click="externalJumpFn('https://beian.miit.gov.cn')"  style="color:#fff;">
          京ICP备2023001053号
        </el-link>
      </p> -->
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
      window.open(lianjie);
    },
  },
};
</script>

<style lang="scss" scoped>
ul li {
  list-style: none;
}
@media screen and (min-width: 800px) {
  .publicFoot {
    width: 100%;
    min-width: 1170px;
    overflow-x: auto;
    //background: #000;
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
      .logos {
        width: 88px;
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
            opacity: 0.5;
          }
        }

        .list_routerLi {
          margin-bottom: 7 * 2px;
          cursor: pointer;

          &:hover {
            opacity: 0.5;
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
}
@media screen and (max-width: 800px) {
  .publicFoot {
    width: 100%;
    overflow-x: auto;
    display: flex;
    align-items: center;
    flex-direction: column;

    .publicFoot_back {
      width: 100%;
      padding-left: 0.4rem;
    }

    .publicFoot_head {
      height: 1.8rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid rgba(255, 255, 255, 0.5);

      .logo {
        width: 3rem;
      }
      .logos {
        width: 1.6rem;
      }

      ul {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .publicFoot_tip {
          font-size: 0.2rem;
          color: rgba(255, 255, 255, 0.4);
          margin-right: 0.2rem;
        }

        .publicFoot_btn {
          padding: 0.2rem;
          box-sizing: border-box;
          border: 1px solid rgba(255, 255, 255, 0.4);
          border-radius: 0.1rem;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 0.2rem;
          color: #fff;

          img {
            margin-right: 0.1rem;
            width: 0.3rem;
            height: 0.3rem;
            border-radius: 0.1rem;
          }
        }
      }
    }

    .publicFoot_con {
      // padding: 0 10px;
      margin-top: 1.4;
      color: #fff;
      display: flex;
      justify-content: space-between;
      flex-direction: column;

      .publicFoot_con_left {
        display: flex;
        justify-content: space-evenly;
        margin-bottom: 0.3rem;
        li {
          width: 33%;
          cursor: pointer;

          &:hover {
            opacity: 0.5;
          }
        }
      }

      .publicFoot_con_right {
        .con_right_title {
          text-align: right;
        }

        .con_right_con {
          font-size: 0.64rem;
          margin: 20px 0;
        }

        .con_right_bottom {
          text-align: right;
        }
      }
    }
  }
}
</style>
