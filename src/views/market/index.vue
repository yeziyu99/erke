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
          <div class="head_con">
            <div class="banner_left">
              <h2>
                Invest in top performing assets with one-stop CFD trading
                platform in your pocket.
              </h2>
              <div class="banner_btn">
                <div class="btn_one">Get started</div>
                <a href="" class="ios">
                  <img src="@/assets/image/apple_down.png" alt="" />
                  APP STORE</a>
                <a href="" class="android">
                  <img src="@/assets/image/apple_down.png" alt="" />
                  GOOGLE PLAY</a>
              </div>
              <p>Images displayed are for illustrative purposes only</p>
            </div>
            <div class="banner_img">
              <img src="@/assets/image/phone.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="invest_big">
      <div class="invest_tab">
        <div class="trade_left">
          <h2 v-if="active == '1'" class="trade_title">
            Trade top stocks with less cost
          </h2>
          <h2 v-if="active == '2'" class="trade_title">
            Enjoy your favorite stocks and upgrade your portfolio with 1/30 of
            cost
          </h2>
          <h2 v-if="active == '3'" class="trade_title">
            Trade gold, sliver, oil or gas with less cost in days of turbulence
          </h2>
          <h2 v-if="active == '4'" class="trade_title">
            Buy or sell on 5*24 non-stopable currencies market
          </h2>
          <ul class="trade_list">
            <li v-for="(value,index) in list" :key="index">
              <div>
                <span></span>
              </div>
              <p>{{value.name}}</p>
            </li>
          </ul>
          <div class="trade_btn">Get started</div>
        </div>
        <div class="trade_rightO">
          <div class="trade_right">
            <div class="trade_tab">
              <ul>
                <li :class="active == '1' ? 'active' : ''" @click="tabFn('1')">
                  <img src="@/assets/image/icon6.png" alt="" />
                </li>
                <li :class="active == '2' ? 'active' : ''" @click="tabFn('2')">
                  <img src="@/assets/image/icon7.png" alt="" />
                </li>
                <li :class="active == '3' ? 'active' : ''" @click="tabFn('3')">
                  <img src="@/assets/image/icon8.png" alt="" />
                </li>
                <li :class="active == '4' ? 'active' : ''" @click="tabFn('4')">
                  <img src="@/assets/image/icon9.png" alt="" />
                </li>
              </ul>
            </div>
            <div class="trade_table">
              <div class="table_title">{{Title}}</div>
              <el-table :data="tableData" height="447" style="width: 100%">
                <el-table-column prop="products" label="Products" width="110">
                  <template slot-scope="scope">
                    <div style="color: #000; font-weight: 700">
                      {{ scope.row.products }}
                    </div>
                  </template>
                </el-table-column>
                <el-table-column prop="sell" label="Sell" width="110">
                  <template slot-scope="scope">
                    <div style="color: #fc4e50; font-weight: 700">
                      {{ scope.row.sell }}
                    </div>
                  </template>
                </el-table-column>
                <el-table-column prop="buy" label="Buy">
                  <template slot-scope="scope">
                    <div style="color: #07b360; font-weight: 700">
                      {{ scope.row.buy }}
                    </div>
                  </template>
                </el-table-column>
              </el-table>
            </div>
          </div>
          <div class="table_foot">View price of our product</div>
        </div>
      </div>
    </div>
    <div class="invest_list">
      <div class="list_title">Trading instruments</div>
      <div class="tab">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane :label="value.identifier_name" :name="value.identifier" v-for="(value,index) in tableDataS"
            :key="index">
            <el-table :data="symbolBool?value.symbols:value.symbolOne" style="width: 100%; margin-top: 44px; margin-bottom: 60px">
              <el-table-column prop="symbol" label="Product code" align="center"></el-table-column>
              <el-table-column prop="name" label="Product name" align="center"></el-table-column>
              <el-table-column prop="average_spread" label="Average spread (point)" align="center"></el-table-column>
              <el-table-column prop="leverage" label="Leverage" align="center"></el-table-column>
              <el-table-column prop="trade_session" label="Trading time" align="center"></el-table-column>
            </el-table>
          </el-tab-pane>
        </el-tabs>

        <div class="tab_btn" @click="symbolBool=!symbolBool;">{{symbolBool?'Hide':'Click for more'}}</div>
      </div>
    </div>
  </div>
</template>
<script>
import http from "@/http/service";
import { fstat } from "fs";
import { mapActions } from "vuex";
export default {
  data() {
    return {
      active: "1",
      tableData: [
        { products: "Tesla", sell: "1.07334", buy: "1.07376" },
        { products: "Tencent", sell: "1.07334", buy: "1.07376" },
        { products: "OZ Minerals", sell: "1.07334", buy: "1.07376" },
        { products: "Apple", sell: "1.07334", buy: "1.07376" },
        { products: "Tesla", sell: "1.07334", buy: "1.07376" },
        { products: "Tesla", sell: "1.07334", buy: "1.07376" },
        { products: "Tencent", sell: "1.07334", buy: "1.07376" },
        { products: "Apple", sell: "1.07334", buy: "1.07376" },
        { products: "Tesla", sell: "1.07334", buy: "1.07376" },
        { products: "Tesla", sell: "1.07334", buy: "1.07376" },
        { products: "Tencent", sell: "1.07334", buy: "1.07376" },
        { products: "OZ Minerals", sell: "1.07334", buy: "1.07376" },
        { products: "OZ Minerals", sell: "1.07334", buy: "1.07376" },
      ],
      tableDataS: [],
      Title:'Stocks',
      symbolBool:false,
      activeName: "stocks",
      list: [
        { name: "Track real-time market prices anytime and anywhere." },
        { name: "Gain more with less via 30:1 leverage" },
        { name: "Auto-manage your trading lots and leverage" },
        { name: "Get free demo account with £10,000" },
      ],
    };
  },
  components: {

  },
  methods: {
    ...mapActions([
      "webSocketInit"
    ]),
    ClickForMore(){
      this.symbolBool=true;
      // for(let key in this.tableDataS){
      //   this.tableDataS[key]['symbolBool']=false
      //   if(this.tableDataS[key]['identifier']){

      //   }
      // }
    },
    tabFn(val) {
      this.active = val;
      if (val == "1") {
        this.Title='Stocks'
        this.list = [
          { name: "Track real-time market prices anytime and anywhere." },
          { name: "Gain more with less via 30:1 leverage" },
          { name: "Auto-manage your trading lots and leverage" },
          { name: "Get free demo account with £10,000" },
        ];
        this.tableData= [
          { products: "Tesla", sell: "1.07334", buy: "1.07376" },
          { products: "Tencent", sell: "1.07334", buy: "1.07376" },
          { products: "OZ Minerals", sell: "1.07334", buy: "1.07376" },
          { products: "Apple", sell: "1.07334", buy: "1.07376" },
          { products: "Tesla", sell: "1.07334", buy: "1.07376" },
          { products: "Tesla", sell: "1.07334", buy: "1.07376" },
          { products: "Tencent", sell: "1.07334", buy: "1.07376" },
          { products: "Apple", sell: "1.07334", buy: "1.07376" },
          { products: "Tesla", sell: "1.07334", buy: "1.07376" },
          { products: "Tesla", sell: "1.07334", buy: "1.07376" },
          { products: "Tencent", sell: "1.07334", buy: "1.07376" },
          { products: "OZ Minerals", sell: "1.07334", buy: "1.07376" },
          { products: "OZ Minerals", sell: "1.07334", buy: "1.07376" },
        ]
      }
      if (val == "2") {
        this.Title='Indicies'
        this.list = [
          { name: "Diversify your assets on your wishlist" },
          {
            name: "Trade the most popular indices like FTS, Nasdaq and Dow Jones",
          },
          { name: "Auto-manage risks and profit with accuracy" },
          { name: "Benefit from the leverage of 30:1" },
          { name: "Practice trading skills with £10,000 free demo account" },
        ];
        this.tableData= [
          { products: "Tesla", sell: "1.07334", buy: "1.07376" },
          { products: "Tencent", sell: "1.07334", buy: "1.07376" },
          { products: "OZ Minerals", sell: "1.07334", buy: "1.07376" },
          { products: "Apple", sell: "1.07334", buy: "1.07376" },
          { products: "Tesla", sell: "1.07334", buy: "1.07376" },
          { products: "Tesla", sell: "1.07334", buy: "1.07376" },
          { products: "Tencent", sell: "1.07334", buy: "1.07376" },
          { products: "Apple", sell: "1.07334", buy: "1.07376" },
          { products: "Tesla", sell: "1.07334", buy: "1.07376" },
          { products: "Tesla", sell: "1.07334", buy: "1.07376" },
          { products: "Tencent", sell: "1.07334", buy: "1.07376" },
          { products: "OZ Minerals", sell: "1.07334", buy: "1.07376" },
          { products: "OZ Minerals", sell: "1.07334", buy: "1.07376" },
        ]
      } else if (val == "3") {
        this.Title='Commodities'
        this.list = [
          { name: "Access to the popular and stable trading markets" },
          {
            name: "Buy or sell diverse commodities in gold, silver, oil or gas easily",
          },
          { name: "Manage your risk simply by setting your benchmark" },
          { name: "Trade asset with 1/30 of cost" },
          { name: "Practice trading skills with £10,000 free demo account" },
        ];
        this.tableData= [
          { products: "Tesla", sell: "1.07334", buy: "1.07376" },
          { products: "Tencent", sell: "1.07334", buy: "1.07376" },
          { products: "OZ Minerals", sell: "1.07334", buy: "1.07376" },
          { products: "Apple", sell: "1.07334", buy: "1.07376" },
          { products: "Tesla", sell: "1.07334", buy: "1.07376" },
          { products: "Tesla", sell: "1.07334", buy: "1.07376" },
          { products: "Tencent", sell: "1.07334", buy: "1.07376" },
          { products: "Apple", sell: "1.07334", buy: "1.07376" },
          { products: "Tesla", sell: "1.07334", buy: "1.07376" },
          { products: "Tesla", sell: "1.07334", buy: "1.07376" },
          { products: "Tencent", sell: "1.07334", buy: "1.07376" },
          { products: "OZ Minerals", sell: "1.07334", buy: "1.07376" },
          { products: "OZ Minerals", sell: "1.07334", buy: "1.07376" },
        ]
      } else if (val == "4") {
        this.Title='Currencies'
        this.list = [
          { name: "24-hour trade with best liquidity" },
          {
            name: "Trade with 30:1 leverage in your favourite currency pairs",
          },
          { name: "Set your risk appetite and expected profit by yourself" },
          { name: "Build your confidence by practicing trading skills with £10,000 free demo account" },
        ];
        this.tableData= [
          { products: "Tesla", sell: "1.07334", buy: "1.07376" },
          { products: "Tencent", sell: "1.07334", buy: "1.07376" },
          { products: "OZ Minerals", sell: "1.07334", buy: "1.07376" },
          { products: "Apple", sell: "1.07334", buy: "1.07376" },
          { products: "Tesla", sell: "1.07334", buy: "1.07376" },
          { products: "Tesla", sell: "1.07334", buy: "1.07376" },
          { products: "Tencent", sell: "1.07334", buy: "1.07376" },
          { products: "Apple", sell: "1.07334", buy: "1.07376" },
          { products: "Tesla", sell: "1.07334", buy: "1.07376" },
          { products: "Tesla", sell: "1.07334", buy: "1.07376" },
          { products: "Tencent", sell: "1.07334", buy: "1.07376" },
          { products: "OZ Minerals", sell: "1.07334", buy: "1.07376" },
          { products: "OZ Minerals", sell: "1.07334", buy: "1.07376" },
        ]
      }
    },
    handleClick(tab, event) {
      // console.log(tab, event);
    },
    getSymbolClassify() {
      http.getSymbolClassify()
        .then(rs => {
          if (rs.is_succ) {
            // this.symbolBool=false;
            for(let key in rs.data){
              // rs.data[key]['symbolBool']=false;
              let symbols=rs.data[key]['symbols'];
              let symbolOne=[];
              for(let i=0;i<=5;i++){
                if(symbols[i]){
                  symbolOne.push(symbols[i])
                }
              }
              rs.data[key]['symbolOne']=symbolOne;
            }
            this.tableDataS = rs.data
            this.activeName=rs.data[0].identifier
          } else {

          }
        }).catch((err) => {
          console.log(err)

        })
    },
  },
  created() {
    this.getSymbolClassify()
    //  this.webSocketInit()
  },
  mounted() { },
  // watch:{
  //   'activeName'(newValue,oldValue){

  //     console.log(newValue,oldValue)
  //   }
  //   // {
  //   //   handler:function(){}
  //   // }
  // }
};
</script>
  
<style lang="scss" scoped>
.big_wrap {
  .invest_banner {
    background-color: #ffe100;
    color: #000;
    overflow: hidden;
    padding: 110px 0 50px;
    // height:300px;
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
      //   //  position: relative;
      width: 60%;
      // min-width: 1000px;
      // overflow: auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 0 auto;

      .banner_left {
        position: absolute;
        top: 100px;
        width: 35%;
        min-width: 600px;

        h2 {
          font-size: 48px;
          font-weight: 700;
          line-height: 1;
          margin-bottom: 60px;
        }

        .banner_btn {
          display: flex;

          .btn_one {
            width: 89 * 2px;
            font-size: 16px;
            padding: 14px 40px;
            background: #000000;
            border-radius: 26px;
            color: #fff;
          }

          a {
            background: no-repeat 15px 50% / auto 15px #f4f4f4;
            // border: 1px solid #fff;
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

        // right: 10px;
        img {
          width: 220px;
        }
      }
    }
  }

  .invest_big {
    width: 100%;
    background: #fafafa;

    .invest_tab {
      width: 60%;
      margin: 0 auto;
      // min-width: 1000px;
      // overflow-x: auto;
      margin-top: 120px;
      display: flex;
      justify-content: space-between;
      // background: #FAFAFA;

      .trade_left {
        margin-top: 30px;
        margin-bottom: 120px;
        width: 45%;

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
          padding: 14px 30px;
          background: #ffe100;
          border-radius: 26px;
          display: inline-block;
          // width: 89 * 2px;
          margin-top: 160px;
        }
      }

      .trade_rightO {

        // width: 40%;
        .table_foot {
          width: 100%;
          margin-top: 30px;
          font-weight: 700;
          text-align: right;
          text-decoration: underline;
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

              &.active {
                width: 88px;
                height: 70px;
                background: #ffe100;
              }
            }
          }
        }

        .trade_table {
          // width: 446px;
          height: 279.5 * 2px;
          background: #fff;
          border-radius: 0px 9px 9px 9px;
          box-shadow: 4px 5px 15px 0px rgba(233, 236, 253, 0.5);
          padding: 30px;
          box-sizing: border-box;

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
      }

      ::v-deep .el-tabs__active-bar {
        background-color: #000000;
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
        border-radius: 26px;
      }
    }
  }
}

// #F2F3F5
</style>
  