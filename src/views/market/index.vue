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
            代表作品有《三角题》、《樱花粉的浪漫》等
          </h2>
          <div class="banner_btn">
            <div class="btn_one" @click="jumpFun('invest')">Get started</div>
            <a href="" class="ios" @click="jumpFun('invest')">
              <img
                src="@/assets/image/apple_down.png"
                alt=""
                @click="jumpFun('invest')"
              />
              APP STORE</a
            >
            <a href="" class="android" @click="jumpFun('invest')">
              <img
                src="@/assets/image/googleplay_down.png"
                alt=""
                @click="jumpFun('invest')"
              />
              GOOGLE PLAY</a
            >
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
            <source src="@/assets/video/markets_video.mp4" />
          </video>
        </div>
      </div>
    </div>
    <div class="invest_big">
      <div class="invest_tab">
        <div class="trade_left">
          <div>
            <h2 v-if="active == '1'" class="trade_title font_Bold">
              带着音乐去旅行
            </h2>
            <h2 v-if="active == '2'" class="trade_title">
              Enjoy your favorite stocks and upgrade your portfolio with 1/30 of
              cost
            </h2>
            <h2 v-if="active == '3'" class="trade_title">
              Trade gold, sliver, oil or gas with less cost in days of
              turbulence
            </h2>
            <h2 v-if="active == '4'" class="trade_title">
              Buy or sell on 5*24 non-stopable currencies market
            </h2>
            <ul class="trade_list">
              <li v-for="(value, index) in list" :key="index">
                <div>
                  <span></span>
                </div>
                <p>{{ value.name }}</p>
              </li>
            </ul>
            <div class="trade_btn foot_btn" @click="jumpFun('invest')">
              Get started
            </div>
          </div>
        </div>
        <div class="trade_rightO">
          <div class="trade_right">
            <div class="trade_tab">
              <ul>
                <li
                  style="z-index: 4"
                  :class="active == '1' ? 'active' : ''"
                  @click="tabFn('1')"
                >
                  <img src="data:image/webp;base64,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" alt="" />
                </li>
                <li
                  style="z-index: 3"
                  :class="active == '2' ? 'active' : ''"
                  @click="tabFn('2')"
                >
                  <img src="@/assets/image/icon7.png" alt="" />
                </li>
                <li
                  style="z-index: 2"
                  :class="active == '3' ? 'active' : ''"
                  @click="tabFn('3')"
                >
                  <img src="@/assets/image/icon8.png" alt="" />
                </li>
                <li
                  style="z-index: 1"
                  :class="active == '4' ? 'active' : ''"
                  @click="tabFn('4')"
                >
                  <img src="@/assets/image/icon9.png" alt="" />
                </li>
              </ul>
            </div>
            <div class="trade_table">
              <div class="table_title">{{ Title }}</div>
              <el-table
                :data="tableData"
                height="447"
                :border="false"
                style="width: 100%"
              >
                <el-table-column prop="name" label="歌名" width="110">
                  <template slot-scope="scope">
                    <div
                      style="color: #000; font-weight: 700"
                      
                    >
                      {{ scope.row.name }}
                    </div>
                  </template>
                </el-table-column>
                <el-table-column prop="makeWord" label="作词" width="110">
                  <template slot-scope="scope">
                    <div >
                      {{ scope.row.makeWord }}
                    </div>
                  </template>
                </el-table-column>
                <el-table-column prop="compose" label="作曲">
                  <template slot-scope="scope">
                    <div>
                      {{ scope.row.compose }}
                    </div>
                  </template>
                </el-table-column>
                <el-table-column prop="arranger" label="编曲">
                  <template slot-scope="scope">
                    <div>
                      {{ scope.row.arranger }}
                    </div>
                  </template>
                </el-table-column>
              </el-table>
            </div>
          </div>
          <div class="table_foot">
            <a href="#list_title"> View price of our product </a>
          </div>
        </div>
      </div>
    </div>
    <div class="invest_list">
      <div class="list_title font_Bold" id="list_title">Trading instruments</div>
      <div class="tab">
        <el-tabs v-model="activeName">
          <el-tab-pane
            :label="value.identifier_names"
            :name="value.identifier_names"
            v-for="(value, index) in tableDataS" :key="index"
          >
            <el-table
              stripe
              :data="symbolBool ? value.symbols : value.symbolOne"
              style="width: 100%; margin-top: 44px; margin-bottom: 60px"
            >
              <el-table-column
                prop="symbol"
                label="Product code"
                align="center"
              ></el-table-column>
              <el-table-column
                prop="name"
                label="Product name"
                align="center"
              ></el-table-column>
              <el-table-column
                prop="average_spread"
                label="Average spread (point)"
                align="center"
              ></el-table-column>
              <el-table-column
                prop="leverage"
                label="Leverage"
                align="center"
              ></el-table-column>
              <el-table-column
                prop="trade_session"
                label="Trading time"
                align="center"
              ></el-table-column>
            </el-table>
          </el-tab-pane>
        </el-tabs>

        <div class="tab_btn foot_btn" @click="symbolBool = !symbolBool">
          {{ symbolBool ? "Hide" : "Click for more" }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import http from "@/http/service";
import { mapActions } from "vuex";
export default {
  data() {
    return {
      active: "1",
      tableData: [
        { name: "带着音乐去旅行", compose: "魏如萱、Risto Asikainen、Janne Hyöty", makeWord: "郑中庸、陈秀珠、廖庭翊", arranger: "周菲比"},
        { name: "樱花粉的浪漫", compose: "林迈可", makeWord: "郑中庸", arranger: "林迈可" },
        { name: "三角题", compose: "戴佩妮", makeWord: "戴佩妮" , arranger: "黄宣铭"},
        { name: "第二次表白", compose: "Def Tech、林迈可", makeWord: "Def Tech、许郁翎" , arranger: "BGMK"},
        { name: "I Love Us", compose: "胡珂宁", makeWord: "黎国基、陈秀珠" , arranger: "Clement Yang"},
        { name: "枫红", compose: "林迈可", makeWord: "方文山", arranger: "林迈可" },
        { name: "飘", compose: "魏诗泉", makeWord: "王奕" , arranger: "魏诗泉"},
        { name: "但是我们分手了", compose: "朱国豪", makeWord: "颜佳薏" , arranger: "蔡侑良"},
        { name: "棉被", compose: "魏诗泉", makeWord: "王奕" , arranger: "魏诗泉"},
        { name: "放心", compose: "陈仪芬", makeWord: "郑中庸", arranger: "陈仪芬" },
      ],
      tableDataS: [],
      Title: "带着音乐去旅行",
      symbolBool: false,
      activeName: "Stocks",
      list: [
        { name: "第一张音乐专辑，发行于2017年10月11日。该专辑内共收录10首歌曲" },
        { name: "专辑语言:普通话" },
        { name: "专辑时长:38分20秒" },
        { name: "唱片公司：上海香蕉计划音乐有限公司" },
      ],
    };
  },
  components: {},
  methods: {
    ...mapActions(["webSocketInit"]),
    ClickForMore() {
      this.symbolBool = true;
    },
    tabFn(val) {
      this.active = val;
      if (val == "1") {
        this.Title = "带着音乐去旅行";
        this.list = [
          { name: "第一张音乐专辑，发行于2017年10月11日。该专辑内共收录10首歌曲" },
          { name: "专辑语言:普通话" },
          { name: "专辑时长:38分20秒" },
          { name: "唱片公司：上海香蕉计划音乐有限公司" },
        ];
        this.getForyouTradeTop("stock");
      }
      if (val == "2") {
        this.Title = "带着音乐去旅行";
        this.list = [
          { name: "Diversify your assets on your wishlist" },
          {
            name: "Trade the most popular indices like FTS, Nasdaq and Dow Jones",
          },
          { name: "Auto-manage risks and profit with accuracy" },
          { name: "Benefit from the leverage of 30:1" },
          { name: "Practice trading skills with £10,000 free demo account" },
        ];
        this.getForyouTradeTop("index");
      } else if (val == "3") {
        this.Title = "带着音乐去旅行";
        this.list = [
          { name: "Access to the popular and stable trading markets" },
          {
            name: "Buy or sell diverse commodities in gold, silver, oil or gas easily",
          },
          { name: "Manage your risk simply by setting your benchmark" },
          { name: "Trade asset with 1/30 of cost" },
          { name: "Practice trading skills with £10,000 free demo account" },
        ];
        this.getForyouTradeTop("energy,metal");
      } else if (val == "4") {
        this.Title = "带着音乐去旅行";
        this.list = [
          { name: "24-hour trade with best liquidity" },
          {
            name: "Trade with 30:1 leverage in your favourite currency pairs",
          },
          { name: "Set your risk appetite and expected profit by yourself" },
          {
            name: "Build your confidence by practicing trading skills with £10,000 free demo account",
          },
        ];
        this.getForyouTradeTop("forex");
      }
    },
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
        .getSymbolClassify()
        .then((rs) => {
          if (rs.is_succ) {
            let datas = this.getCommodities(rs.data);
            for (let key in datas) {
              let symbols = datas[key]["symbols"];
              let symbolOne = [];
              for (let i = 0; i <= 5; i++) {
                if (symbols[i]) {
                  symbolOne.push(symbols[i]);
                }
              }
              datas[key]["symbolOne"] = symbolOne;
            }
            this.tableDataS = datas;
            this.activeName = datas[0].identifier_names;
          } else {
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getForyouTradeTop(identifier) {
    //   let identifiers = identifier || "stock";
    //   http
    //     .getForyouTradeTop(identifiers)
    //     .then((rs) => {
    //       if (rs.is_succ) {
    //         this.tableData = rs.data;
    //       } else {
    //         this.tableData = [];
    //       }
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
    },
  },
  created() {
    // this.getSymbolClassify();
    // this.getForyouTradeTop("stock");
  },
  mounted() {
    // console.log(this.$refs.video.play);
    // this.$refs.video.play();
  },
};
</script>
  
<style lang="scss" scoped>
.big_wrap {
  .invest_banner {
    background-color: #ffe100;
    color: #000;
    overflow: hidden;
    padding: 110px 0 50px;
    position: relative;
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

        .banner_btn {
          display: flex;
          cursor: pointer;

          .btn_one {
            width: 89 * 2px;
            font-size: 16px;
            padding: 14px 40px;
            background: #000000;
            border-radius: 26px;
            color: #fff;

            &:hover {
              color: #ffe100;
              cursor: pointer;
            }
          }

          a {
            background: no-repeat 15px 50% / auto 15px #f4f4f4;
            border-radius: 7px;
            color: #000;
            font-size: 15px;
            line-height: 45px;
            padding: 0 15px 0 15px;
            display: flex;
            align-items: center;
            margin-left: 10px;

            img {
              margin-right: 10px;
            }
          }
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
          top: 13px;
          left: 7px;
          border-radius: 30px;
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
              img{
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
  