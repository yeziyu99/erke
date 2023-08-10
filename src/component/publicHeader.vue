<template>
  <div class="publicHeader background_linear">
    <div class="header_con">
      <img src="@/assets/images/5.png" @click="jumpFun('home')" alt="" />
      <i class="el-icon-s-unfold inline-block800" @click="drawer = !drawer"></i>
      <ul class="none800">
        <li
          :class="{ header_route: true, fontW700: className === 'photo' }"
          @click="jumpFun('photo')"
        >
          相册视频
        </li>
        <li
          :class="{ header_route: true, fontW700: className === 'music' }"
          @click="jumpFun('music')"
        >
          音乐专辑
        </li>
        <li
          :class="{ header_route: true, fontW700: className === 'support' }"
          @click="jumpFun('support')"
        >
          优质UP主
        </li>
        <li
          :class="{ header_route: true, fontW700: className === 'erke' }"
          @click="jumpFun('erke')"
        >
          二珂简介
        </li>
        <li
          :class="{ header_route: true, fontW700: className === 'about' }"
          @click="jumpFun('about')"
        >
          关于我们
        </li>
        <li>
          <img
            src="@/assets/images/logo.png"
            style="width: 75px"
            @click="jumpFun('home')"
            alt=""
          />
        </li>
      </ul>
    </div>
    <el-drawer
      :visible.sync="drawer"
      :direction="direction"
      :before-close="handleClose"
      :modal="false"
      :withHeader="false"
      style="width: 100%"
    >
      <div
        class="dis-flex justify-content-end header_drawer background_linear align-items-center"
      >
        <img src="@/assets/images/5.png" @click="jumpFun('home')" alt="" />

        <i class="el-icon-s-fold" @click="drawer = !drawer"></i>
      </div>
      <el-menu
        :default-active="className"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        background-color="transparent"
        text-color="#fff"
      >
        <el-menu-item
          :index="item.route"
          v-for="(item, index) in menuList"
          :key="index"
          @click="jumpFun(item.route)"
        >
          <i :class="item.icon"></i>
          <span>{{ item.title }}</span>
        </el-menu-item>
      </el-menu>
    </el-drawer>
  </div>
</template>
<script>
export default {
  data() {
    return {
      drawer: false,
      direction: "rtl",
      className: this.$route.name,
      menuList: [
        {
          icon: "el-icon-camera",
          title: "相册视频",
          route: "photo",
        },
        {
          icon: "el-icon-headset",
          title: "音乐专辑",
          route: "music",
        },
        {
          icon: "el-icon-user",
          title: "优质UP主",
          route: "support",
        },
        {
          icon: "el-icon-setting",
          title: "二珂简介",
          route: "erke",
        },
        {
          icon: "el-icon-bell",
          title: "关于我们",
          route: "about",
        },
      ],
    };
  },
  mounted() {
    console.log(this.$route.name);
  },
  watch: {
    $route(to, form) {
      if (to.name != form.name || !form) {
        this.className = to.name;
      }
    },
  },
  methods: {
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then((_) => {
          done();
        })
        .catch((_) => {});
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    jumpFun(route) {
      if (this.$route.name != route) {
        this.$router.push(route);
        if (this.drawer) {
          this.drawer = false;
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@media screen and (min-width: 800px) {
  .publicHeader {
    height: 75px;
    width: 100%;
    overflow-x: auto;
    background: $back-primary1-1;
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 1170px;
    color: #fff;

    .header_con {
      width: 60%;
      min-width: 1170px;
      max-width: 1170px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      img {
        width: 200px;
        cursor: pointer;
      }

      ul {
        display: flex;
        align-items: center;

        .header_route {
          font-size: 18px;
          padding: 5px;
          margin-right: 30px;
          cursor: pointer;
        }

        .header_route:hover {
          border-bottom: 2px solid;
          font-weight: 600;
          transform: scaleX(1);
          transition: 0.4s cubic-bezie÷r(0.165, 0.84, 0.44, 1);
        }

        .fontW700 {
          font-weight: 700;
          font-family: Gilroy-Bold;
        }

        .header_btn {
          width: 110px;
          height: 36px;
          text-align: center;
          line-height: 36px;
          border-radius: 8px;
          cursor: pointer;
        }
      }
    }
  }
}

@media screen and (max-width: 800px) {
  ::v-deep {
    .el-drawer {
      width: 100% !important;
      .header_drawer {
        height: 1.5rem;
        justify-content: space-between;
        img {
          width: 4rem;
          cursor: pointer;
          padding-left: 0.4rem;
        }
      }
    }

    .el-menu-item {
      font-size: 0.5rem;
      font-weight: 900;
      height: 0.8rem;
      line-height: 0.8rem;
      color: #ccc !important;

      i {
        font-size: 0.5rem;
        //color: #fff;
        width: 0.5rem;
        margin-right: 0.2rem;
      }
    }
    .el-menu-item.is-active {
      color: #000 !important;
    }

    .el-menu-item.is-active,
    .el-submenu__title {
      background: transparent !important;
      color: #000;
    }

    .el-icon-s-unfold,
    .el-icon-s-fold {
      font-size: 1rem;
    }
  }

  .publicHeader {
    height: 1.5rem;
    width: 100%;
    overflow-x: auto;
    background: $back-primary1-1;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;

    .header_con {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;

      img {
        width: 4rem;
        cursor: pointer;
        padding-left: 0.4rem;
      }
    }
  }
}
</style>
