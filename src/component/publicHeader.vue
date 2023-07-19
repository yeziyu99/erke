<template>
  <div class="publicHeader background_linear">
    <div class="header_con">
      <img src="@/assets/images/5.png" @click="jumpFun('home')" alt="" />
      <ul>
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
  </div>
</template>
<script>
export default {
  data() {
    return {
      className: this.$route.name,
    };
  },
  mounted() {},
  watch: {
    $route(to, form) {
      if (to.name != form.name || !form) {
        this.className = to.name;
      }
    },
  },
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
</style>
