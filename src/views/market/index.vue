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
          <div class="banner_btn" style="margin-bottom: 10px;">
            <a href="" @click="jumpFun('invest')">
              <img src="@/assets/images/douyu.png" alt="" @click="jumpFun('invest')" />
              斗鱼</a>
              <a href="" class="red" @click="jumpFun('invest')">
              <img src="@/assets/images/weibo.png" alt="" @click="jumpFun('invest')" />
              微博</a>
              <a href="" class="ios" @click="jumpFun('invest')">
              <img src="@/assets/images/douyin.png" alt="" @click="jumpFun('invest')" />
              抖音</a>
          </div>
          <div class="banner_btn">
              <a href="" class="red" @click="jumpFun('invest')">
              <img src="@/assets/images/wyy.png" alt="" @click="jumpFun('invest')" />
              网易云</a>
            <a href="" class="kg " @click="jumpFun('invest')">
              <img src="@/assets/images/kg.png" alt="" @click="jumpFun('invest')" />
              酷狗</a>
              <a href="" class="qy" @click="jumpFun('invest')">
              <img src="@/assets/images/qy.png" alt="" @click="jumpFun('invest')" />
              QQ音乐</a>
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
            <h2 v-if="active == '1'" class="trade_title font_Bold">
              带着音乐去旅行
            </h2>
            <h2 v-if="active == '2'" class="trade_title">
              孤独她呀
            </h2>
            <h2 v-if="active == '3'" class="trade_title">
              余光
            </h2>
            <h2 v-if="active == '4'" class="trade_title">
              我只是在睡前想了一下你
            </h2>
            <ul class="trade_list">
              <li v-for="(value, index) in list" :key="index">
                <div>
                  <span></span>
                </div>
                <p>{{ value.name }}</p>
              </li>
            </ul>
            <!-- <div class="trade_btn foot_btn" @click="jumpFun('invest')">
              Get started
            </div> -->
          </div>
        </div>
        <div class="trade_rightO">
          <div class="trade_right">
            <div class="trade_tab">
              <ul>
                <li style="z-index: 4" :class="active == '1' ? 'active' : ''" @click="tabFn('1')">
                  <img
                    src="https://p2.music.126.net/nRNFlT-7G28elSKWoq2-Qg==/109951163041380790.jpg?param=180y180"
                    alt="带着音乐去旅行" />
                </li>
                <li style="z-index: 3" :class="active == '2' ? 'active' : ''" @click="tabFn('2')">
                  <img
                    src="https://p2.music.126.net/_Fj9iEdSHbVYPU_RGJ5tgA==/109951163822853208.jpg?param=180y180"
                    alt="孤独她呀" />
                </li>
                <li style="z-index: 2" :class="active == '3' ? 'active' : ''" @click="tabFn('3')">
                  <img
                    src="https://p2.music.126.net/-SvmUaLm3Bn7T9JyPLGJbg==/109951165585040132.jpg?param=180y180"
                    alt="余光" />
                </li>
                <li style="z-index: 1" :class="active == '4' ? 'active' : ''" @click="tabFn('4')">
                  <img
                    src="https://p2.music.126.net/pci7HQp9IAR21u_6iyZkTw==/109951163799719688.jpg?param=180y180"
                    alt="我只是在睡前想了一下你" />
                </li>
              </ul>
            </div>
            <div class="trade_table">
              <div class="table_title">{{ Title }}</div>
              <el-table :data="tableData" height="447" :border="false" style="width: 100%">
                <el-table-column prop="name" label="歌名" width="110">
                  <template slot-scope="scope">
                    <div style="color: #000; font-weight: 700">
                      {{ scope.row.name }}
                    </div>
                  </template>
                </el-table-column>
                <el-table-column prop="makeWord" label="作词" width="110">
                  <template slot-scope="scope">
                    <div>
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
            <a href="#list_title"> 查看网易云单曲展示 </a>
            <a href="#list_titlekg"> 查看酷狗单曲展示 </a>
          </div>
        </div>
      </div>
    </div>
    <div class="invest_list">
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
                <!-- <time>{{ item.song_publish_date }}</time> -->
                <el-button type="text" class="button" @click="jumpFun('wyy')">播放</el-button>
              </div>
            </div>
          </el-card>
        </el-col>
      </div>
    </div>
    <br/>
    <div class="invest_list">
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
    </div>
  </div>
</template>
<script>
import http from "@/http/service";
import { mapActions } from "vuex";
import kgList from "@/http/kg.json";
import wyLists from "@/http/wy.json";
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
      active: "1",
      wyList: [],
      wyLists: wyLists,
      kgList: kgList,
      tableData: [
        { name: "带着音乐去旅行", compose: "魏如萱、Risto Asikainen、Janne Hyöty", makeWord: "郑中庸、陈秀珠、廖庭翊", arranger: "周菲比" },
        { name: "樱花粉的浪漫", compose: "林迈可", makeWord: "郑中庸", arranger: "林迈可" },
        { name: "三角题", compose: "戴佩妮", makeWord: "戴佩妮", arranger: "黄宣铭" },
        { name: "第二次表白", compose: "Def Tech、林迈可", makeWord: "Def Tech、许郁翎", arranger: "BGMK" },
        { name: "I Love Us", compose: "胡珂宁", makeWord: "黎国基、陈秀珠", arranger: "Clement Yang" },
        { name: "枫红", compose: "林迈可", makeWord: "方文山", arranger: "林迈可" },
        { name: "飘", compose: "魏诗泉", makeWord: "王奕", arranger: "魏诗泉" },
        { name: "但是我们分手了", compose: "朱国豪", makeWord: "颜佳薏", arranger: "蔡侑良" },
        { name: "棉被", compose: "魏诗泉", makeWord: "王奕", arranger: "魏诗泉" },
        { name: "放心", compose: "陈仪芬", makeWord: "郑中庸", arranger: "陈仪芬" },
      ],
      Title: "带着音乐去旅行",
      symbolBool: false,
      activeName: "Stocks",
      list: [
        { name: "从小喜欢唱歌的二珂，大学二年级开始在直播室唱自己喜欢的歌曲，一首接着一首唱完整个直播时间；因为她清新脱俗的气质、直率清亮的嗓音、品味独特的选曲，人气爆棚、获得粉丝们热烈喜欢，成为粉丝心目中的女神。" },
        { name: "网络崛起，却不甘于虚拟世界，于是选择用最爱的音乐来抒发真情！" },
        { name: "2016年11月，二珂正式签约香蕉计划 ，转型成为艺人。" },
        { name: "..." },
      ],
    };
  },
  components: {},
  methods: {
    ...mapActions(["webSocketInit"]),
    //跳转外部链接/打开新标签页
    externalJumpFn(open){
      window.open(open)
    },
    tabFn(val) {
      this.active = val;
      if (val == "1") {
        this.Title = "带着音乐去旅行";
        this.list = [
          { name: "从小喜欢唱歌的二珂，大学二年级开始在直播室唱自己喜欢的歌曲，一首接着一首唱完整个直播时间；因为她清新脱俗的气质、直率清亮的嗓音、品味独特的选曲，人气爆棚、获得粉丝们热烈喜欢，成为粉丝心目中的女神。" },
          { name: "网络崛起，却不甘于虚拟世界，于是选择用最爱的音乐来抒发真情！" },
          { name: "2016年11月，二珂正式签约香蕉计划 ，转型成为艺人。" },
          { name: "..." },
        ];
        this.tableData=[
          { name: "带着音乐去旅行", compose: "魏如萱、Risto Asikainen、Janne Hyöty", makeWord: "郑中庸、陈秀珠、廖庭翊", arranger: "周菲比" },
          { name: "樱花粉的浪漫", compose: "林迈可", makeWord: "郑中庸", arranger: "林迈可" },
          { name: "三角题", compose: "戴佩妮", makeWord: "戴佩妮", arranger: "黄宣铭" },
          { name: "第二次表白", compose: "Def Tech、林迈可", makeWord: "Def Tech、许郁翎", arranger: "BGMK" },
          { name: "I Love Us", compose: "胡珂宁", makeWord: "黎国基、陈秀珠", arranger: "Clement Yang" },
          { name: "枫红", compose: "林迈可", makeWord: "方文山", arranger: "林迈可" },
          { name: "飘", compose: "魏诗泉", makeWord: "王奕", arranger: "魏诗泉" },
          { name: "但是我们分手了", compose: "朱国豪", makeWord: "颜佳薏", arranger: "蔡侑良" },
          { name: "棉被", compose: "魏诗泉", makeWord: "王奕", arranger: "魏诗泉" },
          { name: "放心", compose: "陈仪芬", makeWord: "郑中庸", arranger: "陈仪芬" }
        ]
        // this.getForyouTradeTop("stock");
      }
      if (val == "2") {
        this.Title = "孤独她呀";
        this.list = [
          { name: '她的孤独 开出了花' },
          { name: "把心事偷偷藏进心里，把孤独慢慢拥进怀里。" },
          { name: "二珂用声音克制又冷静地诉说人们心底的孤独。或许听歌的人，听的也是自己的回忆吧。" },
          { name: "孤独的人呀，把自己藏在时间里，在没结果的梦中不愿醒来。" },
          { name: "当你发现她的时候，也许就是梦醒的时刻，那时，我们也就不再害怕..." },
        ];
        this.tableData=[
          { name: "孤独她呀", compose: "曾婕Joey.Z", makeWord: "曾婕Joey.Z", arranger: "苏靖凯、陈通" },
          { name: "藏着", compose: "曾婕Joey.Z", makeWord: "曾婕Joey.Z", arranger: "周家騵" },
        ]
        // this.getForyouTradeTop("index");
      } else if (val == "3") {
        this.Title = "余光";
        this.list = [
          { name: "周二珂 2020全新个人专辑《余光》" },
          { name: "在岁末与年初交汇之际" },
          { name: "一同听二珂，聆听关于[爱]的种种" },
          { name: "凭借清新自然的声音，已发行两张个人专辑的周二珂在乐坛有着不俗口碑，唱红了许多大热单曲，而她对于音乐的执着与坚持，交融在她充满故事感的声音和出众的唱功之中，为自己的歌手事业描绘着更大的可能。" },
          { name: "暌违一年，以红发亮眼造型示人的周二珂..." },
        ];
        this.tableData=[
          { name: "出现", compose: "", makeWord: "", arranger: "" },
          { name: "十字路口", compose: "", makeWord: "", arranger: "" },
          { name: "给我一个快乐的星期天", compose: "", makeWord: "", arranger: "" },
          { name: "", compose: "", makeWord: "", arranger: "" },
          { name: "听你说", compose: "", makeWord: "", arranger: "" },
          { name: "有些情绪和夜晚有关", compose: "", makeWord: "", arranger: "" },
          { name: "土星环", compose: "", makeWord: "", arranger: "" },
          { name: "初初", compose: "", makeWord: "", arranger: "" },
          { name: "懂了", compose: "", makeWord: "", arranger: "" },
          { name: "余光", compose: "", makeWord: "", arranger: "" },
        ]
        // this.getForyouTradeTop("energy,metal");
      } else if (val == "4") {
        this.Title = "我只是在睡前想了一下你";
        this.list = [
          { name: "我只是在睡前想了一下你》延续了二珂一贯的作品风格，轻柔，动听。木吉他为主的编曲搭配二珂细腻的声音，产生了丰富的画面感。曾几何时，我们都会在夜深人静的时候思念一个人，一段事，一条街，一场和TA看过的电影；又曾几何时，我们幻想着再次相遇却一笑而过的场景。歌声继续着，或许爱情是未完待续的......" },
        ];
        this.tableData=[
        { name: "我只是在睡前想了一下你", compose: "", makeWord: "", arranger: "" },
        ]
        // this.getForyouTradeTop("forex");
      }
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
  