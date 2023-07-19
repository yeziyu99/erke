<template>
  <div class="content_img">
    <h2 class="font_Bold">二珂个人社交平台</h2>
    <div class="three_img">
      <div class="content_item" @click="externalJumpFn('https://www.douyu.com/78622')">
        <div>
          <img :src="dyhead" alt="https://www.douyu.com/78622" />
        </div>
        <p>二珂78622@斗鱼</p>
      </div>
      <div class="content_item" @click="externalJumpFn('https://weibo.com/u/1910672761')">
        <div>
          <img
            :src="wbhead"
            alt="https://weibo.com/u/1910672761?topnav=1&wvr=6&topsug=1"
          />
        </div>
        <p>二珂Chloe@微博</p>
      </div>
      <div
        class="content_item"
        @click="
          externalJumpFn(
            'https://www.xiaohongshu.com/user/profile/5ad78361e8ac2b1fca15ff66'
          )
        "
      >
        <div>
          <img
            :src="wbhead"
            alt="https://www.xiaohongshu.com/user/profile/5ad78361e8ac2b1fca15ff66?xhsshare=CopyLink&appuid=609b9c340000000001004f33&apptime=1667552951"
          />
        </div>
        <p>二珂@小红书</p>
      </div>
    </div>
  </div>
</template>

<script>
import dyhead from "@/assets/images/dyhead.png";
import wbhead from "@/assets/images/wbhead.png";
export default {
  data() {
    return {
      dyhead: dyhead,
      wbhead: wbhead,
    };
  },
  components: {},
  methods: {},
  created() {},
  mounted() {},
  watch: {},
};
</script>
