<template>
  <div class="big_wrap">
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
          <h2>
            中国内地网络女主播、歌手
          </h2>
          <div class="banner_btn" v-for="(item, index) in btnList" :key="index">
            <a href="" @click="externalJumpFn(erkeLink[items].herf)" v-for="(items, ind) in item" :key="ind">
              <img :src="erkeLink[items].img" />
              {{erkeLink[items]['remarks']}}
            </a>
          </div>
          <p>显示的图像仅用于展示作用</p>
        </div>
        <div class="banner_img">
          <img src="@/assets/image/phone.png" alt="" />
          <video class="inset_video" muted playsinline webkit-playsinline autoplay loop preload="auto"
            data-status="playing">
            <source src="@/assets/images/tianmei.mp4" />
          </video>
        </div>
      </div>
    </div>
    <div class="invest_big">
      <div class="invest_tab">
        <div class="trade_left">
          <div>
            <h2 class="trade_title font_Bold">
              {{ erkelist.title }}
            </h2>
            <ul class="trade_list">
              <li v-for="(value, ind) in erkelist['background']" :key="ind">
                <div>
                  <span></span>
                </div>
                <p>{{ value }}</p>
              </li>
            </ul>
          </div>
        </div>
        <div class="trade_rightO">
          <div class="trade_right">
            <div class="trade_tab">
              <ul>
                <li :style="{ zIndex: 4 - index }" :class="active == index ? 'active' : ''" @click="tabFn(index)"
                  :key="index" v-for="(item, index) in erkeAlbum">
                  <img :src="item.img" :alt="item.title" />
                </li>
              </ul>
            </div>
            <div class="trade_table">
              <div class="table_title">{{ erkelist.title }}</div>
              <el-table :data="erkelist['song']" height="447" :border="false" style="width: 100%">
                <el-table-column prop="name" label="歌名" width="110">
                  <template slot-scope="scope">
                    <div style="color: #000; font-weight: 700">
                      {{ scope.row.name || '-' }}
                    </div>
                  </template>
                </el-table-column>
                <el-table-column prop="makeWord" label="作词" width="110">
                  <template slot-scope="scope">
                    <div>
                      {{ scope.row.makeWord || '-' }}
                    </div>
                  </template>
                </el-table-column>
                <el-table-column prop="compose" label="作曲">
                  <template slot-scope="scope">
                    <div>
                      {{ scope.row.compose || '-' }}
                    </div>
                  </template>
                </el-table-column>
                <el-table-column prop="arranger" label="编曲">
                  <template slot-scope="scope">
                    <div>
                      {{ scope.row.arranger || '-' }}
                    </div>
                  </template>
                </el-table-column>
              </el-table>
            </div>
          </div>
          <div class="table_foot">
            <a href="#list_title"> 查看更多歌曲 </a>
          </div>
        </div>
      </div>
    </div>
    <div class="invest_list">
      <div class="list_title font_Bold" id="list_title">本站可播放音乐</div>
      <div>
        <el-col :span="8" v-for="(item, index) in wyList" :key="index" style="padding: 0 10px 10px;">
          <el-card shadow="hover" :body-style="{ padding: '0px' }">
            <el-image style="width: 367px;height: 367px;" class="image swiper-img" src="https://wsingbssdl.kugou.com/060ae290b3bdceffa7f2ada54816c41e.png_360x360.png" :preview-src-list="['https://wsingbssdl.kugou.com/060ae290b3bdceffa7f2ada54816c41e.png_360x360.png']" fit="cover">
            </el-image>
            <div style="padding: 14px;">
              <span>{{ item.name }}-{{ item.al.name }}</span>
              <div class="bottom clearfix">
                <span>{{ item.alia[0] }}</span>
                <el-button type="text" class="button" @click="jumpFun('music')">播放</el-button>
              </div>
            </div>
          </el-card>
        </el-col>
      </div>
    </div>
    <!-- <div class="invest_list">
      <div class="list_title font_Bold" id="list_title">歌曲链接直跳</div>
      <div class="tab">
        <el-tabs v-model="erkeAlbumName">
          <el-tab-pane :label="item.title" :name="item.title" v-for="(item, index) in erkeAlbum" :key="index">
            <el-table stripe :data="item.song" style="width: 100%; margin-top: 44px; margin-bottom: 60px">
              <el-table-column prop="name" label="歌名" align="center">
                <template slot-scope="scope">
                  <div>
                    {{ scope.row.name || '-' }}
                  </div>
                </template>
              </el-table-column>
              <el-table-column prop="makeWord" label="作词" align="center">
                <template slot-scope="scope">
                  <div>
                    {{ scope.row.makeWord || '-' }}
                  </div>
                </template>
              </el-table-column>
              <el-table-column prop="compose" label="作曲" align="center">
                <template slot-scope="scope">
                  <div>
                    {{ scope.row.compose || '-' }}
                  </div>
                </template>
              </el-table-column>
              <el-table-column prop="arranger" label="编曲" align="center">
                <template slot-scope="scope">
                  <div>
                    {{ scope.row.arranger || '-' }}
                  </div>
                </template>
              </el-table-column>
              <el-table-column prop="qqyinyue" label="QQ音乐" align="center">
                <template slot-scope="scope">
                  <span v-if="!scope.row.qqyinyue">暂无</span>
                  <el-link v-if="scope.row.qqyinyue" :href="scope.row.qqyinyue" type="primary" icon="el-icon-headset">播放
                  </el-link>
                </template>
              </el-table-column>
              <el-table-column prop="kugouyinyue" label="酷狗音乐" align="center">
                <template slot-scope="scope">
                  <span v-if="!scope.row.kugouyinyue">暂无</span>
                  <el-link v-if="scope.row.kugouyinyue" :href="scope.row.kugouyinyue" type="primary"
                    icon="el-icon-headset">播放</el-link>
                </template>
              </el-table-column>
              <el-table-column prop="kuwoyinyue" label="酷我音乐" align="center">
                <template slot-scope="scope">
                  <span v-if="!scope.row.kuwoyinyue">暂无</span>
                  <el-link v-if="scope.row.kuwoyinyue" :href="scope.row.kuwoyinyue" type="primary"
                    icon="el-icon-headset">播放</el-link>
                </template>
              </el-table-column>
              <el-table-column prop="wangyiyunyinyue" label="网易云音乐" align="center">
                <template slot-scope="scope">
                  <span v-if="!scope.row.wangyiyunyinyue">暂无</span>
                  <el-link v-if="scope.row.wangyiyunyinyue" :href="scope.row.wangyiyunyinyue" type="primary"
                    icon="el-icon-headset">播放</el-link>
                </template>
              </el-table-column>
              <el-table-column prop="wangyiyunyinyue" label="本站直接播放" align="center">
                <template slot-scope="scope">
                  <span v-if="!scope.row.wangyiyunyinyue">暂无</span>
                  <el-link v-if="scope.row.wangyiyunyinyue" :href="scope.row.wangyiyunyinyue" type="primary"
                    icon="el-icon-headset">播放</el-link>
                </template>
              </el-table-column>
            </el-table>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div> -->
    <!-- <div class="invest_list">
      <div class="list_title font_Bold" id="list_title">网易云-跳页面播放</div>
      <div>
        <el-col :span="8" v-for="(item, index) in wyList" :key="index" style="padding: 0 10px 10px;">
          <el-card shadow="hover" :body-style="{ padding: '0px' }">
            <el-image style="width: 367px;height: 367px;" class="image swiper-img" :src="item.al.picUrl" :preview-src-list="[item.al.picUrl]" fit="cover">
            </el-image>
            <div style="padding: 14px;">
              <span>{{ item.name }}-{{ item.al.name }}</span>
              <div class="bottom clearfix">
                <span>{{ item.alia[0] }}</span>
                <el-button type="text" class="button" @click="jumpFun('wyy')">播放</el-button>
              </div>
            </div>
          </el-card>
        </el-col>
      </div>
    </div> -->
    <!-- <br/> -->
    <!-- <div class="invest_list">
      <div class="list_title font_Bold" id="list_titlekg">酷狗-直接跳转</div>
      <el-col :span="8" v-for="(item, index) in kgList" :key="index" style="padding: 0 10px 10px;">
        <el-card shadow="hover" :body-style="{ padding: '0px' }">
          <el-image style="width: 367px;height: 367px;" class="image swiper-img" :src="item.album_img" :preview-src-list="[item.album_img]" fit="cover">
          </el-image>
          <div style="padding: 14px;">
            <span>{{ item.song_name }}-{{ item.album_name }}</span>
            <div class="bottom clearfix">
              <time>{{ item.song_publish_date }}</time>
              <el-button type="text" class="button" @click="externalJumpFn(item.song_url)">跳转</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </div> -->
  </div>
</template>
<script>
// https://wsaudiobssdlbig.yun.kugou.com/202212071450/dda38b3c76d74430d144d32061c99d3b/bss/extname/wsaudio/e4e87293c82881fbdab505dabca8db4e.mp3
import http from "@/http/service";
import { mapActions } from "vuex";
import kgList from "@/http/kg.json";
import wyLists from "@/http/wy.json";
import { erkeAlbum,erkeLink } from "@/utils/erke.js";

/*{ 
    *"song_name" → 歌曲名字 
    *"song_url" → 歌曲链接 
    *"song_duration" → 歌曲时长（这个后期应该不需要到，我顺便爬的）
    *"song_publish_date" → 歌曲上传日期（这个后期应该不需要到，我顺便爬的） 
    *"album_name" → 专辑名字 
    *"album_img" → 专辑封面 
    *"singer_name" → 歌手名字
}*/
/*{ 
    *"name" → 歌曲名字 
    *"makeWord" → 作词 
    *"compose" → 作曲 
    *"arranger" → 编曲
}*/
export default {
  data() {
    return {
      active: "0",
      erkeAlbumName: erkeAlbum[0]['title'],
      wyList: [],
      wyLists: wyLists,
      kgList: kgList,
      erkeAlbum: erkeAlbum,
      erkelist: erkeAlbum[0],
      btnList:{
        btnTopList:[7,8,2],
        btnBottomList:[5,9,10],
      },
      erkeLink:erkeLink
    };
  },
  components: {},
  methods: {
    ...mapActions(["webSocketInit"]),
    //跳转外部链接/打开新标签页
    externalJumpFn(open) {
      window.open(open)
    },
    tabFn(val) {
      this.active = val;
      this.erkelist = erkeAlbum[val];

    },
    //项目内部跳转
    jumpFun(route) {
      if (this.$route.name != route) {
        this.$router.push(route);
      }
    },
    getCommodities(data) {
      let datas = [];
      var commodities = {
        symbols: [],
        identifier: "Commodities",
        identifier_name: "Commodities",
        identifier_names: "Commodities",
      };
      for (let key in data) {
        if (
          data[key]["identifier"] == "metal" ||
          data[key]["identifier"] == "energy"
        ) {
          commodities["symbols"] = [
            ...data[key]["symbols"],
            ...commodities["symbols"],
          ];
        } else {
          if (data[key]["identifier"] == "stock") {
            data[key]["identifier_names"] = "Stocks";
          } else if (data[key]["identifier"] == "forex") {
            data[key]["identifier_names"] = "Currencies";
          } else if (data[key]["identifier"] == "index") {
            data[key]["identifier_names"] = "Indices";
          }
          datas.push(data[key]);
        }
      }
      datas.push(commodities);
      return datas;
    },
    getSymbolClassify() {
      http
        .getSearch()
        .then((rs) => {
          if (rs.code == 200 && !rs.abroad && rs.result.songs) {
            let hotList = rs.result.songs;
            hotList.forEach((item, key) => {
              this.wyLists.push(item);
            });
            localStorage.setItem('wyLists', JSON.stringify(this.wyLists))
            // this.wyList = JSON.parse(JSON.stringify(this.wyLists));//为了防止一起改变
            // this.wyList.length = 8;//为了列表好看 展示效果
          } else {
            var list = JSON.parse(localStorage.getItem('wyLists')) || []
            if (list.length != 0) {
              this.wyLists = list
            }
            // this.getSymbolClassify();
          }
          this.wyList = JSON.parse(JSON.stringify(this.wyLists));//为了防止一起改变
          this.wyList.length = 6;//为了列表好看 展示效果
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  created() {
    // this.getSymbolClassify();
    // this.getForyouTradeTop("stock");
  },
  mounted() {
    this.wyList = JSON.parse(JSON.stringify(this.wyLists));//为了防止一起改变
    this.wyList.length = 6;//为了列表好看 展示效果
    // console.log(kgList);
    // this.$refs.video.play();
  },
};
</script>
  
<style lang="scss" scoped>
// ::v-deep.el-image.swiper-img {
//   width: 80px;
//   height: 80px;
//   border-radius: 50%;
// }

.big_wrap {
  .invest_banner {
    padding: 110px 0 50px;
    position: relative;
    background-color: #ffe100;
    color: #000;
    overflow: hidden;

    .container {
      align-items: center;
      display: flex;
      height: 376px;

      .banner_bg_wrap {
        height: 100%;
        pointer-events: none;
        position: absolute;
        right: 0;
        top: 0;
        width: 100%;

        @keyframes bgTranslationX {
          0% {
            -webkit-transform: translateX(-200%);
            transform: translateX(-200%);
          }

          to {
            -webkit-transform: translateX(-100%);
            transform: translateX(-100%);
          }
        }

        .bg_container {
          display: flex;
          flex-wrap: nowrap;
          height: 100%;
          width: 100%;
          transform: translateX(-100%);
          -webkit-animation: bgTranslationX 60s linear infinite;
          animation: bgTranslationX 60s linear infinite;

          .bg_img {
            background: url("../../assets/image/enter-play.png") no-repeat 100%;
            // background: url("../../assets/images/111.png") no-repeat 100%;
            flex-shrink: 0;
            height: 100%;
            -webkit-transform: translateZ(0);
            transform: translateZ(0);
            width: 100%;
          }
        }
      }
    }

    .head_con {
      width: 60%;
      min-width: 1170px;
      max-width: 1170px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 0 auto;

      .banner_left {
        position: absolute;
        top: 100px;
        width: 35%;
        max-width: 814px;
        min-width: 600px;

        p {
          font-size: 12px;
          color: #62657A;
        }

        h2 {
          font-size: 48px;
          font-weight: 700;
          line-height: 1;
          font-family: Gilroy-Bold;
          margin-bottom: 60px;
        }

        p {
          margin-top: 24px;
          font-weight: 700;
        }
      }

      .banner_img {
        position: absolute;
        top: 30px;
        left: 60%;

        .inset_video {
          width: 208px;
          position: absolute;
          // top: 13px;
          left: 7px;
          border-radius: 30px;
          height: 100%;
          background: #000;
        }

        img {
          width: 220px;
        }

        // video {
        //   width: 208px;
        //   position: absolute;
        //   top: 13px;
        //   left: 7px;
        //   border-radius: 20px;
        // }
      }
    }
  }

  .invest_big {
    width: 100%;
    background: #fafafa;

    .invest_tab {
      width: 60%;
      margin: 0 auto;
      min-width: 1170px;
      max-width: 1170px;
      margin-top: 120px;
      display: flex;
      justify-content: space-between;

      .trade_left {
        margin-top: 30px;
        margin-bottom: 120px;
        width: 45%;
        height: 279.5 * 2px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        .trade_title {
          font-size: 36px;
          font-weight: 700;
          text-align: left;
        }

        .trade_list {
          margin-top: 40px;
          li:first-child{
          p::first-letter{
            color: #c69c6d;
            font-size: 2em;
            float:left;
            margin: -0.4em .2em 0 0;
          }
            }
          li {
            margin-bottom: 24px;
            display: flex;

            div {
              width: 20px;
              height: 20px;
              background: #ffe100;
              border-radius: 50%;
              display: flex;
              align-items: center;
              justify-content: center;

              span {
                content: " ";
                display: inline-block;
                height: 8px;
                width: 8px;
                border-width: 2px 2px 0 0;
                border-color: #000;
                border-style: solid;
                -webkit-transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);
                transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);
                margin: 0 auto;
              }
            }

            p {
              font-size: 18px;
              margin-left: 10px;
            }
          }
        }

        .trade_btn {
          width: 135px;
          padding: 14px 30px;
          background: #ffe100;
          border-radius: 26px;
          display: inline-block;
          margin-bottom: 10px;
        }
      }

      .trade_rightO {
        .table_foot {
          width: 100%;
          margin-top: 30px;
          font-weight: 700;
          text-align: right;
          text-decoration: underline;

          a {
            color: #000;
          }
        }
      }

      .trade_right {
        width: 40%;
        display: flex;

        .trade_tab {
          ul {
            width: 88px;
            display: flex;
            flex-direction: column;
            align-items: flex-end;

            li {
              width: 70px;
              height: 70px;
              background: #fff;
              display: flex;
              justify-content: center;
              align-items: center;
              border-radius: 8px 0px 0px 8px;
              box-shadow: -7px 6px 14px 14px rgba(233, 236, 253, 0.5);

              img {
                width: 46px;
                height: 46px;
                border-radius: 8px;
              }

              &.active {
                width: 88px;
                height: 70px;
                background: #ffe100;
                box-shadow: -7px 6px 14px 14px rgba(233, 236, 253, 0.5);
                z-index: 9 !important;
              }
            }
          }
        }

        .trade_table {
          height: 279.5 * 2px;
          background: #fff;
          border-radius: 0px 9px 9px 9px;
          box-shadow: 4px 5px 15px 0px rgba(233, 236, 253, 0.5);
          padding: 30px;
          box-sizing: border-box;

          ::v-deep .el-table td.el-table__cell,
          .el-table th.el-table__cell.is-leaf {
            border-bottom: none;
          }

          ::v-deep .el-table th.el-table__cell.is-leaf {
            border-bottom: none;
          }

          ::v-deep .el-table::before {
            height: 0px;
          }

          .table_title {
            font-size: 24px;
            margin-bottom: 12px;
          }
        }
      }
    }
  }

  .invest_list {
    width: 60%;
    min-width: 1170px;
    max-width: 1170px;
    margin: 0 auto;
    margin-top: 80px;
    padding-bottom: 120px;

    .list_title {
      font-size: 36px;
      font-weight: 700;
      margin-bottom: 60px;
    }

    .tab {
      ::v-deep .el-tabs__item.is-active {
        color: #000000;
        font-weight: bold;
      }

      ::v-deep .el-tabs__active-bar {
        background-color: #000000;
      }

      ::v-deep .el-tabs__nav-wrap::after {
        height: 1px;
      }

      ::v-deep .el-tabs__active-bar {
        height: 3px;
        border-radius: 3px;
      }

      ::v-deep .el-table td.el-table__cell,
      .el-table th.el-table__cell.is-leaf {
        border-bottom: none;
      }

      ::v-deep .el-table th.el-table__cell.is-leaf {
        border-bottom: none;
      }

      ::v-deep .el-table::before {
        height: 0px;
      }

      ::v-deep .el-tabs__item:hover {
        color: #000000;
        cursor: pointer;
      }

      ::v-deep .el-table__header thead tr .el-table__cell {
        background: #f2f3f5;
      }

      .tab_btn {
        width: 89 * 2px;
        height: 44px;
        background: #ffe100;
        text-align: center;
        line-height: 44px;
        margin: 0 auto;
        padding: 0;
        border-radius: 26px;
      }
    }
  }
}
</style>
  