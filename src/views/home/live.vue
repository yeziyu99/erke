<template>
  <div>
    <div class="homepage_banner">
      <div class="home_header">
        <div class="head_con">
          <div class="banner_left">
            <h2 class="font_Bold logo_title">
              <img
                src="@/assets/images/logo.png"
                style=""
                @click="jumpFun('home')"
                alt=""
              />
              <span class=""> 周二珂 </span>
            </h2>
            <h4 style="margin-bottom: 90px; font-size: 20px; text-indent: 20px" class="">
              人美、气质好、唱歌又好听，为人低调和善，但却挡不住她急剧上升的人气。在一个歌荒的寂寞时间，周二珂简直是甜歌小公主，那一刻，让你的心暖暖的。
            </h4>
            <div class="banner_btn">
              <div
                @click="externalJumpFn(url.douyu)"
                class="btn_one"
                v-if="erkeLive.status != 200"
              >
                {{ erkeLive.info.room_title || erkeLive.msg }}
              </div>
              <a @click="externalJumpFn(url.douyu)" v-if="erkeLive.status == 200">
                <img src="@/assets/images/douyu.png" alt="" />
                {{ erkeLive.info.room_title || erkeLive.msg }}</a
              >
            </div>
            <p>显示的图像仅用于展示作用</p>
          </div>
        </div>
        <div class="home_bg">
          <div style="max-width: 230px; flex: 1; margin: 0 auto; position: relative">
            <div>
              <div class="inset_bg">
                <div class="bg-semicircle"></div>
                <div class="bg_ball"></div>
                <div class="bg_ball_solid"></div>
              </div>
              <div class="video_wrap" @click="externalJumpFn(url.douyu)">
                <div class="animate-wave">
                  <img
                    class="logo"
                    :src="
                      erkeLive.info.cover_pic
                        ? erkeLive.info.cover_pic
                        : 'https://img.douyucdn.cn/data/yuba/weibo/2023/01/29/202301291721386043550652722.png'
                    "
                    alt=""
                  />
                  <div
                    :class="'w' + (item * 1 + 1)"
                    v-for="(item, index) in 5"
                    :key="index"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import http from "@/http/service";
export default {
  data() {
    return {
      url: { douyu: url.douyu },
      erkeLive: {
        info: {},
      },
    };
  },
  components: {},
  methods: {},
  created() {},
  mounted() {
    http.getLive().then((rs) => {
      if (rs.code == 200) {
        this.erkeLive = rs.datas;
      } else {
      }
    });
  },
  watch: {},
};
</script>
