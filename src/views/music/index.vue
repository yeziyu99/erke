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
            <ul class="trade_list foot_list_item">
              <li v-for="(value, ind) in erkelist['background']" :key="ind">
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
      <div class="list_title font_Bold clearfix" style="display: flex; align-items: flex-end;" id="list_title">
        本站可播放音乐
        <el-button type="primary" class="button mg-lt-10" style="background:#f4c8c7;color:#000; font-weight:400; border-color:#f4c8c7;" @click="jumpFun('song')">
          <i class="el-icon-headset"></i>
          查看更多</el-button>
        <span class="mg-lt-5 mg-tp-25 font-size-12 font-weight-700 color62657A text-ag-rg">本页最多展示五十条数据，更多请移步播放页查看</span>
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
                <el-button type="primary" class="button" @click="jumpFun('song',index)" style="background:#f4c8c7; font-weight:400; border-color:#f4c8c7;">播放</el-button>
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
    jumpFun(name, curIndex) {
      if (this.$route.name != name) {
        this.$router.push({name: name, query: {'curIndex': curIndex}});
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

</style>
  