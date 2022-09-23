<template>
  <div class="big_wrap">
    <div class="box">
      <div class="box_left">
        <div class="box_switch">{{symbol}}</div>
        <div class="box_positive_exponent">
          <span class="s_exponent">{{eliObj.sexponent|| '0.00'}}</span>
          <span class="exponent">
            <span class="s_Aexponent" :style="{color:eliObj.AexponentColor}">{{eliObj.Aexponent || '0.00'}}</span>
            <span class="s_Jexponent" :style="{color:eliObj.JexponentColor}">{{eliObj.Jexponent || '0.00'}}%</span>
          </span>
        </div>
        <p class="box_tip">
          <span> Hign <span class="s_high">{{chartPrice.today_high|| '0.00'}}</span> </span>
          <span style="margin-left: 20px">
            Low <span class="s_high">{{chartPrice.today_low|| '0.00'}}</span>
          </span>
        </p>
        <ul class="price">
          <li class="k-red k-red-border">
            <span>Buy</span>
            <span>{{eliObj.buy|| '0.00'}}</span>
          </li>
          <li class="k-green k-green-border">
            <span>Sell</span>
            <span>{{eliObj.sell|| '0.00'}}</span>
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
            <div class="trends_L" :style="{width:symbolPercent['sell_percent']*100+'%'}"></div>
            <div class="trends_R" :style="{width:symbolPercent['buy_percent']*100+'%'}"></div>
          </div>
          <div class="trends_tips">
            <span>
              <span>{{symbolPercent['sell_percent']*100}}%</span>
              clients Sell
            </span>
            <span>
              <span>{{symbolPercent['buy_percent']*100}}%</span>
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
            <li v-if="foryouMarket.length==0">
              NO DATA
            </li>
          </ul>
        </div>
        <div class="btn">Invest now</div>
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
import {utilTime,getQueryString} from "@/utils/util";
export default {
  data() {
    return {
      active: "1",
      data: [
        ["2013/1/24", 2320.26, 2320.26, 2287.3, 2362.94],
        ["2013/1/25", 2300, 2291.3, 2288.26, 2308.38],
        ["2013/1/28", 2295.35, 2346.5, 2295.35, 2346.92],
        ["2013/1/29", 2347.22, 2358.98, 2337.35, 2363.8],
        ["2013/1/30", 2360.75, 2382.48, 2347.89, 2383.76],
        ["2013/1/31", 2383.43, 2385.42, 2371.23, 2391.82],
        ["2013/2/1", 2377.41, 2419.02, 2369.57, 2421.15],
        ["2013/2/4", 2425.92, 2428.15, 2417.58, 2440.38],
        ["2013/2/5", 2411, 2433.13, 2403.3, 2437.42],
        ["2013/2/6", 2432.68, 2434.48, 2427.7, 2441.73],
        ["2013/2/7", 2430.69, 2418.53, 2394.22, 2433.89],
        ["2013/2/8", 2416.62, 2432.4, 2414.4, 2443.03],
        ["2013/2/18", 2441.91, 2421.56, 2415.43, 2444.8],
        ["2013/2/19", 2420.26, 2382.91, 2373.53, 2427.07],
        ["2013/2/20", 2383.49, 2397.18, 2370.61, 2397.94],
        ["2013/2/21", 2378.82, 2325.95, 2309.17, 2378.82],
        ["2013/2/22", 2322.94, 2314.16, 2308.76, 2330.88],
        ["2013/2/25", 2320.62, 2325.82, 2315.01, 2338.78],
        ["2013/2/26", 2313.74, 2293.34, 2289.89, 2340.71],
        ["2013/2/27", 2297.77, 2313.22, 2292.03, 2324.63],
        ["2013/2/28", 2322.32, 2365.59, 2308.92, 2366.16],
        ["2013/3/1", 2364.54, 2359.51, 2330.86, 2369.65],
        ["2013/3/4", 2332.08, 2273.4, 2259.25, 2333.54],
        ["2013/3/5", 2274.81, 2326.31, 2270.1, 2328.14],
        ["2013/3/6", 2333.61, 2347.18, 2321.6, 2351.44],
        ["2013/3/7", 2340.44, 2324.29, 2304.27, 2352.02],
        ["2013/3/8", 2326.42, 2318.61, 2314.59, 2333.67],
        ["2013/3/11", 2314.68, 2310.59, 2296.58, 2320.96],
        ["2013/3/12", 2309.16, 2286.6, 2264.83, 2333.29],
        ["2013/3/13", 2282.17, 2263.97, 2253.25, 2286.33],
        ["2013/3/14", 2255.77, 2270.28, 2253.31, 2276.22],
        ["2013/3/15", 2269.31, 2278.4, 2250, 2312.08],
        ["2013/3/18", 2267.29, 2240.02, 2239.21, 2276.05],
        ["2013/3/19", 2244.26, 2257.43, 2232.02, 2261.31],
        ["2013/3/20", 2257.74, 2317.37, 2257.42, 2317.86],
        ["2013/3/21", 2318.21, 2324.24, 2311.6, 2330.81],
        ["2013/3/22", 2321.4, 2328.28, 2314.97, 2332],
        ["2013/3/25", 2334.74, 2326.72, 2319.91, 2344.89],
        ["2013/3/26", 2318.58, 2297.67, 2281.12, 2319.99],
        ["2013/3/27", 2299.38, 2301.26, 2289, 2323.48],
        ["2013/3/28", 2273.55, 2236.3, 2232.91, 2273.55],
        ["2013/3/29", 2238.49, 2236.62, 2228.81, 2246.87],
        ["2013/4/1", 2229.46, 2234.4, 2227.31, 2243.95],
        ["2013/4/2", 2234.9, 2227.74, 2220.44, 2253.42],
        ["2013/4/3", 2232.69, 2225.29, 2217.25, 2241.34],
        ["2013/4/8", 2196.24, 2211.59, 2180.67, 2212.59],
        ["2013/4/9", 2215.47, 2225.77, 2215.47, 2234.73],
        ["2013/4/10", 2224.93, 2226.13, 2212.56, 2233.04],
        ["2013/4/11", 2236.98, 2219.55, 2217.26, 2242.48],
        ["2013/4/12", 2218.09, 2206.78, 2204.44, 2226.26],
        ["2013/4/15", 2199.91, 2181.94, 2177.39, 2204.99],
        ["2013/4/16", 2169.63, 2194.85, 2165.78, 2196.43],
        ["2013/4/17", 2195.03, 2193.8, 2178.47, 2197.51],
        ["2013/4/18", 2181.82, 2197.6, 2175.44, 2206.03],
        ["2013/4/19", 2201.12, 2244.64, 2200.58, 2250.11],
        ["2013/4/22", 2236.4, 2242.17, 2232.26, 2245.12],
        ["2013/4/23", 2242.62, 2184.54, 2182.81, 2242.62],
        ["2013/4/24", 2187.35, 2218.32, 2184.11, 2226.12],
        ["2013/4/25", 2213.19, 2199.31, 2191.85, 2224.63],
        ["2013/4/26", 2203.89, 2177.91, 2173.86, 2210.58],
        ["2013/5/2", 2170.78, 2174.12, 2161.14, 2179.65],
        ["2013/5/3", 2179.05, 2205.5, 2179.05, 2222.81],
        ["2013/5/6", 2212.5, 2231.17, 2212.5, 2236.07],
        ["2013/5/7", 2227.86, 2235.57, 2219.44, 2240.26],
        ["2013/5/8", 2242.39, 2246.3, 2235.42, 2255.21],
        ["2013/5/9", 2246.96, 2232.97, 2221.38, 2247.86],
        ["2013/5/10", 2228.82, 2246.83, 2225.81, 2247.67],
        ["2013/5/13", 2247.68, 2241.92, 2231.36, 2250.85],
        ["2013/5/14", 2238.9, 2217.01, 2205.87, 2239.93],
        ["2013/5/15", 2217.09, 2224.8, 2213.58, 2225.19],
        ["2013/5/16", 2221.34, 2251.81, 2210.77, 2252.87],
        ["2013/5/17", 2249.81, 2282.87, 2248.41, 2288.09],
        ["2013/5/20", 2286.33, 2299.99, 2281.9, 2309.39],
        ["2013/5/21", 2297.11, 2305.11, 2290.12, 2305.3],
        ["2013/5/22", 2303.75, 2302.4, 2292.43, 2314.18],
        ["2013/5/23", 2293.81, 2275.67, 2274.1, 2304.95],
        ["2013/5/24", 2281.45, 2288.53, 2270.25, 2292.59],
        ["2013/5/27", 2286.66, 2293.08, 2283.94, 2301.7],
        ["2013/5/28", 2293.4, 2321.32, 2281.47, 2322.1],
        ["2013/5/29", 2323.54, 2324.02, 2321.17, 2334.33],
        ["2013/5/30", 2316.25, 2317.75, 2310.49, 2325.72],
        ["2013/5/31", 2320.74, 2300.59, 2299.37, 2325.53],
        ["2013/6/3", 2300.21, 2299.25, 2294.11, 2313.43],
        ["2013/6/4", 2297.1, 2272.42, 2264.76, 2297.1],
        ["2013/6/5", 2270.71, 2270.93, 2260.87, 2276.86],
        ["2013/6/6", 2264.43, 2242.11, 2240.07, 2266.69],
        ["2013/6/7", 2242.26, 2210.9, 2205.07, 2250.63],
        ["2013/6/13", 2190.1, 2148.35, 2126.22, 2190.1],
      ],
      eliObj:{
        sexponent:'0.00',
        buy:'0.00',
        sell:'0.00',
        Aexponent:'0.00',
        AexponentColor:'red',
        JexponentColor:'green',
        Jexponent:'0.00'
      },
      chartPrice: {},
      foryouMarket: [],
      symbolPercent: {
        sell_percent: 0.5,
        buy_percent: 0.5
      },
      symbol: getQueryString('symbol'),
      utilTime: utilTime,
    };
  },
  methods: {
    jumpFn(val) {
      this.active = val;
    },
    getEchartData() {
      this.$nextTick(() => {
        const myCharts = this.$echarts.init(this.$refs.chart);
        // const upColor = "#ec0000";
        // const upBorderColor = "#8A0000";
        // const downColor = "#00da3c";
        // const downBorderColor = "#008F28";
        myCharts.setOption({
          // title: {
          //   text: "上证指数",
          //   left: 0,
          // },
          tooltip: {
            trigger: "axis",
            axisPointer: {
              type: "cross",
            },
          },
          // legend: {
          //   data: ["日K", "MA5", "MA10", "MA20", "MA30"],
          // },
          grid: {
            left: "10%",
            right: "10%",
            bottom: "15%",
          },
          xAxis: {
            type: "category",
            data: this.data.categoryData,
            boundaryGap: false,
            axisLine: { onZero: false },
            splitLine: { show: false },
            min: "dataMin",
            max: "dataMax",
          },
          yAxis: {
            scale: true,
            splitArea: {
              show: true,
            },
          },
          dataZoom: [
            {
              type: "inside",
              start: 50,
              end: 100,
            },
            {
              show: true,
              type: "slider",
              top: "90%",
              start: 50,
              end: 100,
            },
          ],
          series: [
            {
              name: "日K",
              type: "candlestick",
              data: this.data.values,
              itemStyle: {
                color: "#ec0000",
                color0: "#00da3c",
                borderColor: "#8A0000",
                borderColor0: "#008F28",
              },
              markPoint: {
                label: {
                  formatter: function (param) {
                    return param != null ? Math.round(param.value) + "" : "";
                  },
                },
                data: [
                  {
                    name: "Mark",
                    coord: ["2013/5/31", 2300],
                    value: 2300,
                    itemStyle: {
                      color: "rgb(41,60,85)",
                    },
                  },
                  {
                    name: "highest value",
                    type: "max",
                    valueDim: "highest",
                  },
                  {
                    name: "lowest value",
                    type: "min",
                    valueDim: "lowest",
                  },
                  {
                    name: "average value on close",
                    type: "average",
                    valueDim: "close",
                  },
                ],
                tooltip: {
                  formatter: function (param) {
                    return param.name + "<br>" + (param.data.coord || "");
                  },
                },
              },
              markLine: {
                symbol: ["none", "none"],
                data: [
                  [
                    {
                      name: "from lowest to highest",
                      type: "min",
                      valueDim: "lowest",
                      symbol: "circle",
                      symbolSize: 10,
                      label: {
                        show: false,
                      },
                      emphasis: {
                        label: {
                          show: false,
                        },
                      },
                    },
                    {
                      type: "max",
                      valueDim: "highest",
                      symbol: "circle",
                      symbolSize: 10,
                      label: {
                        show: false,
                      },
                      emphasis: {
                        label: {
                          show: false,
                        },
                      },
                    },
                  ],
                  {
                    name: "min line on close",
                    type: "min",
                    valueDim: "close",
                  },
                  {
                    name: "max line on close",
                    type: "max",
                    valueDim: "close",
                  },
                ],
              },
            },
          ],
        });
        // myCharts.setOption(option);
        window.addEventListener("resize", function () {
          myCharts.resize();
        });
      })

    },
    splitData(rawData) {
      const categoryData = [];
      const values = [];
      for (var i = 0; i < rawData.length; i++) {
        categoryData.push(rawData[i].splice(0, 1)[0]);
        values.push(rawData[i]);
      }
      return {
        categoryData: categoryData,
        values: values,
      };
    },
    calculateMA(dayCount) {
      var result = [];
      for (var i = 0, len = this.data.values.length; i < len; i++) {
        if (i < dayCount) {
          result.push("-");
          continue;
        }
        var sum = 0;
        for (var j = 0; j < dayCount; j++) {
          sum += +data.values[i - j][1];
        }
        result.push(sum / dayCount);
      }
      return result;
    },
    getChartPrice() {
      http.getChartPrice({ symbol: this.symbol }).then(rs => {
        if (rs.is_succ) {
          this.chartPrice = rs.data
        }
        console.log(rs.data,'0000')
      })
    },
    getForyouMarket() {
      http.getForyouMarket({ symbol: this.symbol, offset_id: 0, limit: 100 }).then(rs => {
        if (rs.is_succ) {
          this.foryouMarket = rs.data.records;
        }
      })
    },
    getSymbolPercent() {
      http.getSymbolPercent({ symbol: this.symbol }).then(rs => {
        if (rs.is_succ) {
          this.symbolPercent = rs.data;
        }
      })
    },
     getChartData(){
      http.getChart({symbol:this.symbol}).then(rs=>{
        console.log(rs,'图表')
      })
    },
    socketLin() {
      let then=this;
      // let url=(location.host.indexOf('localhost')!=-1||location.host.indexOf('-inc')!=-1)?'wss://ws-et6.tigerbrokers-inc.com:7779':'wss://ws-et6.tigerbrokers.co.uk:7779'
      let url='wss://ws-et6.tigerbrokers.co.uk:7779'
      // 测试
      // var ws = new WebSocket("wss://ws-et6.tigerbrokers-inc.com:7779")
      // 线上
      var ws = new WebSocket(url)
      ws.onclose = function (e) {
        ws.close(); //关闭TCP连接
      };
      ws.onopen = function () {
        let symbol = getQueryString('symbol')
        setInterval(function () {
          var message = {
            type: 3,
            content: symbol
          }
          ws.send(JSON.stringify(message));
        }, 1000)
        ws.onmessage = function (e) {
          // e.data [["AUDCAD","0.92488","0.9246","0.92474","1631780516"]]
          var eLi = JSON.parse(e.data)
          if (eLi[0]) {
            then.eliObj['sexponent']=eLi[0][3]
            then.eliObj['buy']=eLi[0][1]
            then.eliObj['sell']=eLi[0][2]
            var Jexponent = ((eLi[0][3] - then.chartPrice.yesterday_close_price) / then.chartPrice.yesterday_close_price * 100).toFixed(2)
            var Aexponent = ((eLi[0][3] - then.chartPrice.yesterday_close_price) / then.chartPrice.yesterday_close_price * 1).toFixed(5)
            if (Aexponent > 0) {
              then.eliObj.Aexponent = Aexponent
              then.eliObj.AexponentColor = 'green'
            } else {
              then.eliObj.AexponentColor = 'red'
            }
            then.eliObj.Aexponent = Aexponent
            if (Jexponent > 0) {
              then.eliObj.JexponentColor = 'green'
            } else {
              then.eliObj.JexponentColor = 'red'
            }
            then.eliObj.Jexponent = Jexponent

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

        }
      }
    }
  },
  mounted() {
    let then=this;
    if (getQueryString('symbol')) {
      then.getEchartData();
      then.getChartPrice()
      then.getForyouMarket()
      setTimeout(function () {
        then.socketLin()//实时报价
      }, 2000)
      then.getSymbolPercent()
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