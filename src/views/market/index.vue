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
            <a href="" @click="externalJumpFn(erkeLink[items].herf)" :class="erkeLink[items].class" v-for="(items, ind) in item" :key="ind">
              <img :src="erkeLink[items].img" />
              {{ erkeLink[items]['remarks'] }}
            </a>
          </div>
          <p>显示的图像仅用于展示作用</p>
        </div>
        <div class="banner_img">
          <img src="@/assets/image/phone.png" alt="" />
          <video class="inset_video" muted playsinline webkit-playsinline autoplay loop preload="auto" data-status="playing">
            <source src="@/assets/video/tianmei.mp4" />
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
    <div class="invest_list clearfix">
      <div class="list_title font_Bold clearfix" id="list_title">
        本站可播放音乐
        <el-button type="primary" class="button" style="background:#f4c8c7;color:#000; font-weight:400;" @click="jumpFun('music')">跳转播放页查看更多</el-button>
      </div>
      <div v-if="songDatasMthMethodList.length">
        <el-col :span="8" v-for="(item, index) in songDatasMthMethodList" :key="index" style="padding: 0 10px 10px;">
          <el-card shadow="hover">
            <el-image style="width: 200px;height: 200px;" class="image swiper-img"
              src="https://wsingbssdl.kugou.com/060ae290b3bdceffa7f2ada54816c41e.png_360x360.png"
              :preview-src-list="['https://wsingbssdl.kugou.com/060ae290b3bdceffa7f2ada54816c41e.png_360x360.png']"
              fit="cover">
            </el-image>
            <div class="invest_list_r pointer">
              <div class="mg-bt-10">
                <p class="mg-bt-5">{{ item.song_name }}-{{ item.author }}</p>
                <el-link type="info">{{ item.song_type == 'fc' ? '翻唱' : '原唱' }}</el-link>
              </div>
              <div class="bottom clearfix">
                <el-button type="primary" class="button" @click="jumpFun('music',item.id)">播放</el-button>
              </div>
            </div>
          </el-card>
        </el-col>
      </div>
      <div v-if="!songDatasMthMethodList.length">
        暂无符合参数的数据
      </div>
    </div>
    <div class="foot_btn" @click="songDatasMthMethodBoolFn()">{{songDatasMthMethodBool?'收起':'展开更多'}}</div>
  </div>
</template>
<script>
import http from "@/http/service";
import { mapActions } from "vuex";
import { erkeAlbum, erkeLink } from "@/utils/erke.js";

/*{ 
    * id	歌曲专辑的id	int
    album_name	歌曲专辑的名称	string
    album_desc	歌曲专辑的描述	string
    cover_img_id	歌曲专辑的封面图id(使用获取图片数据接口可获取该图片的真实url)	int
    release_time	专辑封面发布时间戳	int

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
      erkeAlbum: erkeAlbum,
      erkelist: erkeAlbum[0],
      btnList: {
        btnTopList: [7, 8, 2],
        btnBottomList: [5, 9, 10],
      },
      erkeLink: erkeLink,
      songDatasMthMethodBool: false,
      songDatasMthMethodList: [],
      songDatasMthMethodLists: []
    };
  },
  components: {},
  methods: {
    ...mapActions(["webSocketInit"]),
    getSongDatasMthMethod() {
      http.getSongDatasMthMethod({
        methods: 'aid',
        method: 1,
        page: 1
      }).then(rs => {
        if (rs.code == 200) {
          if (rs.datas.lists.length) {
            this.songDatasMthMethodLists = rs.datas.lists
            this.songDatasMthMethodList = JSON.parse(JSON.stringify(this.songDatasMthMethodLists));//为了防止一起改变
            this.songDatasMthMethodList.length = 6;//为了列表好看 展示效果

          } else {
            this.songDatasMthMethodList = []
            this.songDatasMthMethodLists = []

          }
        } else {
          this.songDatasMthMethodLists = []
          this.songDatasMthMethodList = []
        }
      }).catch((err) => {
        this.songDatasMthMethodList = []
        this.songDatasMthMethodLists = []
        console.log(err);
      });
    },
    songDatasMthMethodBoolFn(){
      this.songDatasMthMethodBool=!this.songDatasMthMethodBool
      this.songDatasMthMethodList = JSON.parse(JSON.stringify(this.songDatasMthMethodLists));//为了防止一起改变
      this.songDatasMthMethodList.length = this.songDatasMthMethodBool?this.songDatasMthMethodList.length:6;//为了列表好看 展示效果
    },
    //跳转外部链接/打开新标签页
    externalJumpFn(open) {
      window.open(open)
    },
    tabFn(val) {
      this.active = val;
      this.erkelist = erkeAlbum[val];

    },
    //项目内部跳转
    jumpFun(name,id) {
      if (this.$route.name != name) {
        this.$router.push({name: name, params: {id: id}});
      }
    },
  },
  created() {
    this.getSongDatasMthMethod()
  },
  mounted() {
  },
};
</script>
  
<style lang="scss" scoped>
::v-deep{
  .el-card.is-hover-shadow>.el-card__body{
    display: flex;
    .invest_list_r{
      flex: 1;
      position: relative;
      text-align: end;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      // .bottom.clearfix{
      //   position: absolute;
      //   bottom: 0;
      //   right: 0;
      // }
    }
  }
}
.big_wrap {
  .invest_banner {
    padding: 110px 0 50px;
    position: relative;
    background-color: $back-primary1;
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

          li:first-child {
            p::first-letter {
              color: #c69c6d;
              font-size: 2em;
              float: left;
              margin: -0.4em .2em 0 0;
            }
          }

          li {
            margin-bottom: 24px;
            display: flex;

            div {
              width: 20px;
              height: 20px;
              background: $back-primary1;
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
          background: $back-primary1;
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
                background: $back-primary1;
                box-shadow: -7px 6px 14px 14px rgba(233, 236, 253, 0.5);
                z-index: 9 !important;
              }
            }
          }
        }

        .trade_table {
          width: 455px;
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
        background: $back-primary1;
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
  