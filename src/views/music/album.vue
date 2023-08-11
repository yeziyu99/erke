<template>
  <div>
    <div class="invest_list clearfix">
      <div
        class="list_title font_Bold clearfix"
        style="display: flex; align-items: flex-end"
        id="list_title"
      >
        本站现有可播放音乐专辑
        <el-button
          type="primary"
          class="button mg-lt-10"
          style="
            background: #f4c8c7;
            color: #000;
            font-weight: 400;
            border-color: #f4c8c7;
          "
          @click="jumpFun('song')"
        >
          <i class="el-icon-headset"></i>
          查看更多</el-button
        >
        <span class="mg-lt-5 mg-tp-25 font-size-12 font-weight-700 color62657A text-ag-rg"
          >本页最多展示十条数据，更多请移步播放页查看</span
        >
      </div>
      <div v-if="songDatasMthMethodList.length">
        <el-col
          :span="spanNum"
          v-for="(item, index) in songDatasMthMethodList"
          :key="index"
          style="padding: 0 10px 10px"
        >
          <el-card shadow="hover">
            <el-image
              style="width: 200px; height: 200px"
              class="image swiper-img"
              :src="item.album_cover_img_url"
              fit="cover"
            >
            </el-image>
            <div class="invest_list_r pointer">
              <div class="mg-bt-10">
                <p
                  class="mg-bt-5"
                  style="
                    width: 125px;
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                  "
                >
                  {{ item.album_name }}
                </p>
                <!-- <el-tooltip
                  class="item"
                  effect="dark"
                  :content="item.album_desc"
                  placement="bottom"
                > -->
                <el-link
                  type="info"
                  style="
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-line-clamp: 3;
                    -webkit-box-orient: vertical;
                    text-indent: 24px;
                    padding-left: 5px;
                  "
                  @click="open(item)"
                  >{{ item.album_desc }}</el-link
                >
                <!-- </el-tooltip> -->
                <!-- <el-link type="info">{{
                    item.song_type == "fc" ? "翻唱" : "原唱"
                  }}</el-link> -->
              </div>
              <div class="bottom clearfix">
                <el-button
                  type="primary"
                  class="button"
                  @click="jumpFun('song', index)"
                  style="background: #f4c8c7; font-weight: 400; border-color: #f4c8c7"
                  >播放</el-button
                >
              </div>
            </div>
          </el-card>
        </el-col>
      </div>
      <div v-if="!songDatasMthMethodList.length">暂无符合参数的数据</div>
    </div>
    <div class="foot_btn" @click="songDatasMthMethodBoolFn()">
      {{ songDatasMthMethodBool ? "收起" : "展开更多" }}
    </div>
  </div>
</template>
<script>
import http from "@/http/service";
import { mapActions } from "vuex";
import { erkeAlbum } from "@/utils/erke.js";

/*{ 
    id	专辑的id	int
    album_name	专辑的名称	string
    album_desc	专辑的描述	string
    album_cover_img_url	专辑的封面图直链url	url
    album_origin_url	专辑的外链地址	url
    album_release_time	专辑封面发布时间戳	int
  }*/
export default {
  data() {
    return {
      songDatasMthMethodBool: false,
      songDatasMthMethodList: [],
      songDatasMthMethodLists: [],
      screenWidth: document.body.clientWidth,
      spanNum: 8, //8/12/24
    };
  },
  components: {},
  methods: {
    ...mapActions(["webSocketInit"]),
    open(item) {
      this.$alert(item.album_desc, item.album_name, {
        confirmButtonText: "确定",
      });
    },
    getMusicAlbumLists() {
      http
        .getMusicAlbumLists({
          methods: "aid",
          method: 1,
          page: 1,
        })
        .then((rs) => {
          if (rs.code == 200) {
            if (rs.datas.lists.length) {
              this.songDatasMthMethodLists = rs.datas.lists;
              this.songDatasMthMethodList = JSON.parse(
                JSON.stringify(this.songDatasMthMethodLists)
              ); //为了防止一起改变
              this.songDatasMthMethodList.length = 6; //为了列表好看 展示效果
            } else {
              this.songDatasMthMethodList = [];
              this.songDatasMthMethodLists = [];
            }
            localStorage.setItem("music", JSON.stringify(this.songDatasMthMethodList));
            localStorage.setItem("musics", JSON.stringify(this.songDatasMthMethodLists));
          } else {
            this.songDatasMthMethodLists = [];
            this.songDatasMthMethodList = [];
          }
        })
        .catch((err) => {
          this.songDatasMthMethodList = [];
          this.songDatasMthMethodLists = [];
          console.log(err);
        });
    },
    songDatasMthMethodBoolFn() {
      this.songDatasMthMethodBool = !this.songDatasMthMethodBool;
      this.songDatasMthMethodList = JSON.parse(
        JSON.stringify(this.songDatasMthMethodLists)
      ); //为了防止一起改变
      this.songDatasMthMethodList.length = this.songDatasMthMethodBool
        ? this.songDatasMthMethodList.length
        : 6; //为了列表好看 展示效果
    },
    //跳转外部链接/打开新标签页
    externalJumpFn(open) {
      window.open(open);
    },

    //项目内部跳转
    jumpFun(name, curIndex) {
      if (this.$route.name != name) {
        this.$router.push({ name: name, query: { curIndex: curIndex } });
      }
    },
    screenWidthFns() {
      this.screenWidth = document.body.clientWidth;
      console.log(this.screenWidth, this.spanNum);
      if (this.screenWidth < 700) {
        this.spanNum = 24;
      } else if (this.screenWidth < 1170 && this.screenWidth >= 700) {
        this.spanNum = 12;
      } else {
        this.spanNum = 8;
      }
      console.log(this.screenWidth, this.spanNum);
    },
  },
  created() {
    let music = localStorage.getItem("music");
    let musics = localStorage.getItem("musics");
    if (music && musics) {
      console.log("本地有缓存");
      this.songDatasMthMethodLists = JSON.parse(musics);
      this.songDatasMthMethodList = JSON.parse(music);
    } else {
      this.getMusicAlbumLists();
    }
  },
  mounted() {
    this.screenWidth = document.body.clientWidth;
    this.screenWidthFns();
    console.log(this.screenWidth, this.spanNum);
    window.onresize = () => {
      return (() => {
        this.screenWidthFns();
      })();
    };
  },
};
</script>

<style lang="scss" scoped></style>
