<template>
  <div>
    <div class="home_foot">
      <div class="foot_con">
        <div class="foot_title font_Bold">优质UP主推荐</div>
        <ul class="foot_list">
          <li class="list_item" v-for="(item, index) in supportLinks" :key="index">
            <img :src="item.imgUrl" :alt="item.title" />
            <h2>{{ item.title }}</h2>

            <ul class="foot_list_item" v-for="(val, i) in item.children" :key="i">
              <li @click="externalJumpFn(val.herf)">
                <el-tag size="small" class="tag pointer mg-bt-10">
                  <span v-if="val.type == 'bili'" style="color: palevioletred"
                    >哔哩哔哩</span
                  >
                  <span v-if="val.type == 'dy'" style="color: #000">抖音</span>
                  <span v-if="val.type == 'sing'" style="color: #00bbb3">5Sing</span>
                  <span v-if="val.type == 'wyy'" style="color: red">网易云</span>
                  -- {{ val.name }}
                </el-tag>
              </li>
            </ul>
          </li>
        </ul>
        <div class="foot_btn" @click="jumpFun('support')">查看更多</div>
      </div>
    </div>
  </div>
</template>

<script>
import http from "@/http/service";
export default {
  props: [supportLink],
  data() {
    return {
      supportLinks: [],
    };
  },
  components: {},
  methods: {},
  created() {},
  mounted() {
    this.supportLinks.push(this.supportLink[1]);
    this.supportLinks.push(this.supportLink[2]);
    this.supportLinks.push(this.supportLink[3]);
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
