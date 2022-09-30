<template>
  <div class="big_wrap">
    <div class="box">
      <div class="box_left">
        <div class="box_switch">{{ symbol }}</div>
        <div class="box_positive_exponent">
          <span class="s_exponent">{{ eliObj.sexponent || "0.00" }}</span>
          <span class="exponent">
            <span
              class="s_Aexponent"
              :style="{ color: eliObj.AexponentColor }"
              >{{ eliObj.Aexponent || "0.00" }}</span
            >
            <span class="s_Jexponent" :style="{ color: eliObj.JexponentColor }"
              >{{ eliObj.Jexponent || "0.00" }}%</span
            >
          </span>
        </div>
        <p class="box_tip">
          <span>
            Hign
            <span class="s_high">{{ chartPrice.today_high || "0.00" }}</span>
          </span>
          <span style="margin-left: 20px">
            Low <span class="s_high">{{ chartPrice.today_low || "0.00" }}</span>
          </span>
        </p>
        <ul class="price">
          <li class="k-red k-red-border">
            <span>Buy</span>
            <span>{{ eliObj.buy || "0.00" }}</span>
          </li>
          <li class="k-green k-green-border">
            <span>Sell</span>
            <span>{{ eliObj.sell || "0.00" }}</span>
          </li>
        </ul>
        <div class="time_type">
          <ul>
            <li :class="active == '1' ? 'active' : ''" @click="jumpFn('1')">
              30M
            </li>
            <li :class="active == '2' ? 'active' : ''" @click="jumpFn('2')">
              1H
            </li>
            <li :class="active == '3' ? 'active' : ''" @click="jumpFn('3')">
              4H
            </li>
            <li :class="active == '4' ? 'active' : ''" @click="jumpFn('4')">
              D1
            </li>
            <li :class="active == '5' ? 'active' : ''" @click="jumpFn('5')">
              W1
            </li>
            <li :class="active == '6' ? 'active' : ''" @click="jumpFn('6')">
              M1
            </li>
          </ul>
        </div>
        <div class="box_line">
          <div ref="chart" style="width: 100%; height: 280px"></div>
        </div>
      </div>
      <div class="box_right">
        <div class="trends">
          <h5>Investment trends</h5>
          <div class="trends_prp">
            <div
              class="trends_L"
              :style="{ width: symbolPercent['sell_percent'] * 100 + '%' }"
            ></div>
            <div
              class="trends_R"
              :style="{ width: symbolPercent['buy_percent'] * 100 + '%' }"
            ></div>
          </div>
          <div class="trends_tips">
            <span>
              <span>{{ symbolPercent["sell_percent"] * 100 }}%</span>
              clients Sell
            </span>
            <span>
              <span>{{ symbolPercent["buy_percent"] * 100 }}%</span>
              clients Buy
            </span>
          </div>
        </div>
        <div class="market">
          <h5>market</h5>
          <ul class="market_list">
            <li v-for="(item, index) in foryouMarket" :key="index">
              <div class="list_l">{{ utilTime(item.time) }}</div>
              <div class="list_r">{{ item.desc }}</div>
            </li>
            <li v-if="foryouMarket.length == 0">NO DATA</li>
          </ul>
        </div>
        <div class="btn" @click="jumpFun('invest')">Invest now</div>
        <!-- <ul class="experience">
          <li>
            <img src="@/assets/image/market1.png" alt="" />
            <div>
              <h5>0 cost investment experience!</h5>
              <p>
                Join us, receive $10000 free experience gold, no threshold
                investment and financial management.
              </p>
            </div>
            <button>Experience now</button>
          </li>
          <li>
            <img src="@/assets/image/market2.png" alt="" />
            <div>
              <h5>0 cost investment experience!</h5>
              <p>
                Join us, receive $10000 free experience gold, no threshold
                investment and financial management.
              </p>
            </div>
            <button>Experience now</button>
          </li>
        </ul> -->
      </div>
    </div>
  </div>
</template>

<script>
import http from "@/http/service";
import { utilTime, getQueryString } from "@/utils/util";
export default {
  data() {
    return {
      active: "4",
      data: [],
      eliObj: {
        sexponent: "0.00",
        buy: "0.00",
        sell: "0.00",
        Aexponent: "0.00",
        AexponentColor: "red",
        JexponentColor: "green",
        Jexponent: "0.00",
      },
      chartPrice: {},
      foryouMarket: [],
      symbolPercent: {
        sell_percent: 0.5,
        buy_percent: 0.5,
      },
      chartData: {},
      symbol: getQueryString("symbol"),
      utilTime: utilTime,
    };
  },
  methods: {
    jumpFn(val) {
      this.active = val;
      if (val == "1") {
        this.getChartData(30);
      } else if (val == "2") {
        this.getChartData(60);
      } else if (val == "3") {
        this.getChartData(240);
      } else if (val == "4") {
        this.getChartData(1440);
      } else if (val == "5") {
        this.getChartData(10080);
      } else if (val == "6") {
        this.getChartData(43200);
      }
    },
    jumpFun(route) {
      if (this.$route.name != route) {
        this.$router.push(route);
      }
    },
    getEchartData() {
      this.$nextTick(() => {
        const myCharts = this.$echarts.init(this.$refs.chart);
        myCharts.setOption({
          // legend: {
          //   data: ["日K", "MA5", "MA10", "MA20", "MA30"],
          //   inactiveColor: "#777",
          // },
          tooltip: {
            trigger: "axis",
            axisPointer: {
              animation: false,
              type: "cross",
              lineStyle: {
                color: "#376df4",
                width: 2,
                opacity: 1,
              },
            },
          },
          xAxis: {
            type: "category",
            data: this.chartData.categoryData,
            axisLine: { lineStyle: { color: "#8392A5" } },
          },
          yAxis: {
            scale: true,
            axisLine: { lineStyle: { color: "#8392A5" } },
            splitLine: { show: false },
          },
          grid: {
            bottom: 80,
          },
          dataZoom: [
            {
              textStyle: {
                color: "#8392A5",
              },
              handleIcon:
                "path://M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z",
              dataBackground: {
                areaStyle: {
                  color: "#8392A5",
                },
                lineStyle: {
                  opacity: 0.8,
                  color: "#8392A5",
                },
              },
              brushSelect: true,
            },
            {
              type: "inside",
            },
          ],
          series: [
            {
              type: "candlestick",
              // name: "Day",
              data: this.chartData.values,
              itemStyle: {
                color: "#FD1050",
                color0: "#0CF49B",
                borderColor: "#FD1050",
                borderColor0: "#0CF49B",
              },
            },
          ],
        });
        // myCharts.setOption(option);
        window.addEventListener("resize", function () {
          myCharts.resize();
        });
      });
    },

    filterTime(time) {
      const date = new Date(time);
      const Y = date.getFullYear();
      const M =
        date.getMonth() + 1 < 10
          ? "0" + (date.getMonth() + 1)
          : date.getMonth() + 1;
      const D = date.getDate();
      return `${Y}-${M}-${D}`;
    },
    splitData() {
      const categoryData = [];
      const values = [];
      this.data.sort(function (a, b) {
        return a.ctm * 1000 - b.ctm * 1000;
      });
      for (var i = 0; i < this.data.length; i++) {
        // console.log(this.filterTime(this.data[i].ctm*1000),'图表时间')
        categoryData.push(this.filterTime(this.data[i].ctm * 1000));
        let arr = [];
        arr.push(Number(this.data[i].open));
        arr.push(Number(this.data[i].close));
        arr.push(Number(this.data[i].low));
        arr.push(Number(this.data[i].high));
        values.push(arr);
      }
      return {
        categoryData: categoryData,
        values: values,
      };
    },
    // calculateMA(dayCount) {
    //   var result = [];
    //   for (var i = 0, len = this.data.values.length; i < len; i++) {
    //     if (i < dayCount) {
    //       result.push("-");
    //       continue;
    //     }
    //     var sum = 0;
    //     for (var j = 0; j < dayCount; j++) {
    //       sum += +data.values[i - j][1];
    //     }
    //     result.push(sum / dayCount);
    //   }
    //   return result;
    // },
    getChartPrice() {
      http.getChartPrice({ symbol: this.symbol }).then((rs) => {
        if (rs.is_succ) {
          this.chartPrice = rs.data;
        }
      });
    },
    getForyouMarket() {
      http
        .getForyouMarket({ symbol: this.symbol, offset_id: 0, limit: 100 })
        .then((rs) => {
          if (rs.is_succ) {
            this.foryouMarket = rs.data.records;
          }
        });
    },
    getSymbolPercent() {
      http.getSymbolPercent({ symbol: this.symbol }).then((rs) => {
        if (rs.is_succ) {
          this.symbolPercent = rs.data;
        }
      });
    },
    getChartData(type) {
      http
        .getChart({
          symbol: this.symbol,
          type: type,
          limit: 50,
          end: new Date().getTime(),
          offset: 0,
        })
        .then((rs) => {
          if (rs.is_succ) {
            this.data = rs.data.records;
            this.chartData = this.splitData();
            this.getEchartData();
          }
        });
    },
    socketLin() {
      let then = this;
      // let url=(location.host.indexOf('localhost')!=-1||location.host.indexOf('-inc')!=-1)?'wss://ws-et6.tigerbrokers-inc.com:7779':'wss://ws-et6.tigerbrokers.co.uk:7779'
      let url = "wss://ws-et6.tigerbrokers.co.uk:7779";
      // 测试
      // var ws = new WebSocket("wss://ws-et6.tigerbrokers-inc.com:7779")
      // 线上
      var ws = new WebSocket(url);
      ws.onclose = function (e) {
        ws.close(); //关闭TCP连接
      };
      ws.onopen = function () {
        let symbol = getQueryString("symbol");
        setInterval(function () {
          var message = {
            type: 3,
            content: symbol,
          };
          ws.send(JSON.stringify(message));
        }, 1000);
        ws.onmessage = function (e) {
          // e.data [["AUDCAD","0.92488","0.9246","0.92474","1631780516"]]
          var eLi = JSON.parse(e.data);
          if (eLi[0]) {
            then.eliObj["sexponent"] = eLi[0][3];
            then.eliObj["buy"] = eLi[0][1];
            then.eliObj["sell"] = eLi[0][2];
            var Jexponent = (
              ((eLi[0][3] - then.chartPrice.yesterday_close_price) /
                then.chartPrice.yesterday_close_price) *
              100
            ).toFixed(2);
            var Aexponent = (
              ((eLi[0][3] - then.chartPrice.yesterday_close_price) /
                then.chartPrice.yesterday_close_price) *
              1
            ).toFixed(5);
            if (Aexponent > 0) {
              then.eliObj.Aexponent = Aexponent;
              then.eliObj.AexponentColor = "green";
            } else {
              then.eliObj.AexponentColor = "red";
            }
            then.eliObj.Aexponent = Aexponent;
            if (Jexponent > 0) {
              then.eliObj.JexponentColor = "green";
            } else {
              then.eliObj.JexponentColor = "red";
            }
            then.eliObj.Jexponent = Jexponent;

            // if (eLi[0][3] > today_high) {
            //   today_high = eLi[0][3]
            // }
            // if (eLi[0][3] < today_low) {
            //   today_low = eLi[0][3]
            // }
            // if (historyDate.indexOf(formatDate(eLi[0][4] * 1000)) == -1) {
            //   historyDate.push(formatDate(eLi[0][4] * 1000))
            //   var obj = {
            //     time: eLi[0][4],
            //     low: parseFloat(eLi[0][2]),
            //     q1: parseFloat(eLi[0][3]),
            //     median: null,//中位数
            //     q3: parseFloat(eLi[0][3]),
            //     high: parseFloat(eLi[0][2]),
            //     name: formatDate(eLi[0][4] * 1000),
            //     RiseAndFall: 0,
            //     // color: RiseAndFall>0?"#ff0000":RiseAndFall<0?"#00ff00":"#bbbbbb"
            //   }
            //   k_data.push(obj)
            // } else if (historyDate.indexOf(formatDate(eLi[0][4] * 1000)) > -1) {
            //   var obj = {
            //     time: eLi[0][4],
            //     low: parseFloat(eLi[0][2]) < k_data[k_data.length - 1].low ? parseFloat(eLi[0][2]) : k_data[k_data.length - 1].low,
            //     q1: parseFloat(eLi[0][3]),
            //     median: null,//中位数
            //     q3: parseFloat(eLi[0][3]),
            //     high: parseFloat(eLi[0][3]) > k_data[k_data.length - 1].high ? parseFloat(eLi[0][3]) : k_data[k_data.length - 1].high,
            //     name: formatDate(eLi[0][4] * 1000),
            //     RiseAndFall: (parseFloat(eLi[0][2]) - parseFloat(k_data[k_data.length - 1].open_price)) / parseFloat(k_data[k_data.length - 1].open_price) * 1,
            //     // color: RiseAndFall>0?"#ff0000":RiseAndFall<0?"#00ff00":"#bbbbbb"
            //   }

            //   // k_data = historyList

            //   k_data[k_data.length - 1] = obj
            // }
          }
          // var chart = $('#container').highcharts()
          // chart.update({
          //   series: [{
          //     type: 'boxplot',
          //     // fillColor:null,//关键:填充色，不做设置，填充色为白色，设置为null,undefined,''等，填充色为data的color
          //     data: k_data
          //   }]
          // })
        };
      };
    },
  },
  mounted() {
    let then = this;
    if (getQueryString("symbol")) {
      then.getChartData(1440);
      then.getEchartData();
      then.getChartPrice();
      then.getForyouMarket();
      setTimeout(function () {
        then.socketLin(); //实时报价
      }, 2000);
      then.getSymbolPercent();
    }
  },
};
</script>

<style lang="scss" scoped>
.big_wrap {
  width: 100%;
  height: 100%;
  background: #fff;

  .box {
    width: 60%;
    margin: 100px auto 0;
    padding: 30px 0;
    display: flex;

    .box_left {
      width: 50%;
      padding: 0 20px;
      box-sizing: border-box;

      .box_switch {
        font-weight: 500;
        font-size: 18px;
      }

      .box_positive_exponent {
        margin: 20px 0 10px;
        width: 100%;
        font-size: 33px;
        display: flex;

        .exponent {
          margin: 0 20px;
          display: flex;
          flex-direction: column;
          font-size: 14px;
        }
      }

      .box_tip {
        padding: 6px 10px;
        background: #fafafa;
        border-radius: 14px;
        display: inline-block;
      }

      .price {
        margin-top: 20px;
        width: 100%;
        justify-content: space-between;
        display: flex;

        li {
          font-weight: 500;
          width: 48%;
          height: 44px;
          display: flex;
          flex-direction: column;
          font-size: 16px;
          border-radius: 6px;
          justify-content: center;
          align-items: center;
          cursor: pointer;

          span {
            font-size: 14px;
          }
        }

        .k-green-border {
          border: 1px solid #11a169;
        }

        .k-green {
          color: #11a169;
        }

        .k-red-border {
          border: 1px solid #ce3e17;
        }

        .k-red {
          color: #ce3e17;
        }
      }

      .time_type {
        margin-top: 20px;
        width: 100%;
        height: 28px;

        ul {
          width: 100%;
          height: 100%;
          line-height: 28px;
          display: flex;

          li {
            text-align: center;
            width: 60px;
            height: 100%;
            margin: 0 10px;
            cursor: pointer;
          }

          .active {
            border-radius: 4px;
            background: #ffd521;
            color: #de8e4e;
          }
        }
      }

      .box_line {
        margin-top: 10px;
        width: 100%;
        height: 280px;
      }
    }

    .box_right {
      width: 50%;
      padding: 0 20px;
      box-sizing: border-box;

      .trends {
        h5 {
          font-size: 16px;
          margin-top: 20px;
          margin-bottom: 10px;
          font-weight: 500;
        }

        .trends_prp {
          width: 100%;
          height: 6px;
          margin-bottom: 10px;
          justify-content: space-between;
          display: flex;

          .trends_L {
            height: 100%;
            background: #11a169;
          }

          .trends_R {
            height: 100%;
            background: #ce3e17;
          }
        }

        .trends_tips {
          font-size: 12px;
          display: flex;
          justify-content: space-between;
        }
      }

      .market {
        h5 {
          font-size: 16px;
          margin-top: 50px;
          margin-bottom: 10px;
          font-weight: 500;
        }

        .market_list {
          width: 100%;
          height: 340px;
          border: 1px solid #eeeff0;
          border-radius: 4px;
          overflow: hidden;
          overflow-y: auto;
          box-sizing: border-box;
          color: #9c9ea2;

          li {
            display: flex;
            width: 100%;
            padding: 10px;
            box-sizing: border-box;
            justify-content: center;

            .list_l {
              width: 150px;
            }

            .list_r {
              width: calc(100% - 150px);
            }
          }
        }
      }

      .btn {
        font-weight: 500;
        width: 140px;
        height: 40px;
        text-align: center;
        line-height: 40px;
        background: #ffd521;
        border-radius: 26px;
        -webkit-appearance: button;
        cursor: pointer;
        text-transform: none;
        overflow: visible;
        margin-top: 40px;
      }
    }
  }
}
</style>