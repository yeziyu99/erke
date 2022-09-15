<template>
  <div class="publicHeader">
    <div class="header_con">
      <img @click="jumpFun('home')" src="@/assets/image/headerIcon.png" alt="" />
      <ul>
        <li class="header_route" @click="jumpFun('market')">Markets</li>
        <li class="header_route" @click="jumpFun('support')">Support</li>
        <li class="header_route" @click="jumpFun('about')">About</li>
        <li class="header_btn" style="background: #fff; margin-right: 8px">
          LOGIN
        </li>
        <li class="header_btn" style="background: #000000; color: #fff">
          SIGN UP
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  mounted() {
    // console.log(3333);
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
  min-width: 1000px;
  overflow-x: auto;
  background: #ffe100;
  display: flex;
  justify-content: center;
  align-items: center;
  .header_con {
    width: 60%;
    // min-width: 600px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    ul {
      display: flex;
      align-items: center;
      .header_route {
        font-size: 18px;
        margin-right: 35px;
      }
      .header_btn {
        width: 110px;
        height: 36px;
        text-align: center;
        line-height: 36px;
        border-radius: 8px;
      }
    }
  }
}
</style>