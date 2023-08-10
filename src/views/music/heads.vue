<template>
  <div class="invest_banner">
    <div class="container lazyload">
      <div class="banner_bg_wrap">
        <div class="bg_container">
          <div class="bg_img"></div>
          <div class="bg_img"></div>
          <div class="bg_img"></div>
        </div>
      </div>
    </div>
    <div class="head_con">
      <div class="banner_left">
        <h2>中国内地网络女主播、歌手</h2>
        <div class="banner_btn" v-for="(item, index) in btnList" :key="index">
          <a
            href=""
            @click="externalJumpFn(erkeLink[items].herf)"
            :class="erkeLink[items].class"
            v-for="(items, ind) in item"
            :key="ind"
          >
            <img :src="erkeLink[items].img" />
            {{ erkeLink[items]["remarks"] }}
          </a>
        </div>
        <p>显示的图像仅用于展示作用</p>
      </div>
      <div class="banner_img">
        <img src="@/assets/image/phone.png" alt="" />
        <video
          class="inset_video"
          muted
          playsinline
          webkit-playsinline
          autoplay
          loop
          preload="auto"
          data-status="playing"
        >
          <source src="@/assets/video/tianmei.mp4" />
        </video>
      </div>
    </div>
  </div>
</template>
<script>
import { erkeLink } from "@/utils/erke.js";
export default {
  data() {
    return {
      btnList: {
        btnTopList: [7, 8, 2],
        btnBottomList: [5, 9, 10],
      },
      erkeLink: erkeLink,
    };
  },
  components: {},
};
</script>

<style lang="scss" scoped></style>
