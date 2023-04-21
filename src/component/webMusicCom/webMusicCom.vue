<template>
  <div class="music-container">
    <div class="yinyue_top">
      <div class="yinyue_top_left">
        <div>
          <img
            class="imgrotate"
            @error="imgOnError"
            :src="
              computCur ||
              'https://p1.music.126.net/PMZ2HH_vuAhtNCOSrfGCGQ==/109951168131572411.jpg'
            "
            alt=""
          />
        </div>
      </div>
      <div class="yinyue_top_con">
        <div class="yinyue_top_con_title">
          {{ curMusic.song_name }} - {{ curMusic.author }}
          <el-tag size="small" type="success" class="mg-rg-5 pointer">{{
            curMusic.song_type == "fc" ? "翻唱" : "原唱"
          }}</el-tag>
        </div>
        <div></div>
        <!-- <div class="music-title-name"> -->
        <div
          class="music-lyric-box"
          ref="musicLyricBox"
          :style="{ height: screenHeight + 'px' }"
        >
          <div class="music-lyric" v-if="curMusic.lrcType == 0">
            <span style="color: red">*该歌词不支持滚动*</span>
          </div>
          <div class="music-lyric" ref="musicLyric" v-if="curMusic.lyric">
            <span v-for="(i, key) in curMusic.lyric" :key="key">{{ i }}</span>
          </div>
          <div class="music-lyric" v-if="!curMusic.lyric">
            <span>二珂的直播间douyu 78622~欢迎您来收听~</span>
          </div>
        </div>
        <!-- </div> -->
      </div>
    </div>
    <div class="music-content">
      <div class="music-title">
        <icon-base
          icon-name="single"
          icon-title="单曲循环"
          v-if="switchType === 0"
          @click.native="handleChangeType"
        >
          <icon-single
        /></icon-base>
        <icon-base
          icon-name="loop"
          icon-title="列表循环"
          v-else-if="switchType === 1"
          @click.native="handleChangeType"
        >
          <icon-loop
        /></icon-base>
        <icon-base
          icon-name="random"
          icon-title="随机播放"
          v-else
          @click.native="handleChangeType"
        >
          <icon-random
        /></icon-base>
        <div class="music-title-name">
          <div>
            <span>{{ curMusic.name }}</span>
            <span>{{ curMusic.arname }}</span>
          </div>
        </div>

        <icon-base class="iconSwitch" icon-name="switch" icon-title="切换">
          <icon-switch
        /></icon-base>
      </div>
      <div class="music-process">
        <span>{{ currtime }}</span>
        <el-slider
          v-model="playInfo.nowtime"
          :max="playInfo.max"
          @change="handleChangeTime"
          :show-tooltip="false"
        ></el-slider>
        <span>{{ totaltime }}</span>
      </div>
      <div class="music-control">
        <icon-base
          icon-name="playlist"
          icon-title="播放列表"
          @click.native="collapsePlayList"
        >
          <icon-playlist
        /></icon-base>

        <div class="music-control-button">
          <icon-base icon-name="prev" icon-title="上一曲" @click.native="handlePrevMusic">
            <icon-prev
          /></icon-base>
          <icon-base
            icon-name="suspend"
            icon-title="暂停"
            @click.native="handlePlay"
            v-if="isplay"
            :height="23"
            :width="23"
          >
            <icon-suspend />
          </icon-base>
          <icon-base
            icon-name="play"
            icon-title="播放"
            :height="23"
            :width="23"
            @click.native="handlePlay"
            v-else
          >
            <icon-play />
          </icon-base>
          <icon-base icon-name="next" icon-title="下一曲" @click.native="handleNextMusic">
            <icon-next
          /></icon-base>
        </div>

        <icon-base
          icon-name="muted"
          icon-title="静音"
          @click.native="handleClickMute"
          v-if="ismute"
        >
          <icon-muted />
        </icon-base>
        <icon-base
          icon-name="suona"
          icon-title="音量"
          @click.native="handleClickMute"
          v-else
        >
          <icon-suona />
        </icon-base>
      </div>
    </div>
    <!-- 音乐文件-隐藏 -->
    <audio
      autoplay
      style="display: none"
      :src="curMusic.musicUrl"
      id="music-audio"
      type="audio/mpeg"
      controls
    ></audio>
    <!-- 播放列表 - 抽屉形式 -->
    <el-drawer
      title="播放列表"
      :visible.sync="isShowPlayList"
      :direction="direction"
      :before-close="handleClose"
    >
      <div id="playlistcom" class="infinite-list-wrapper" style="overflow: auto">
        <ul
          ref="playListComRef"
          class="list"
          v-infinite-scroll="load"
          infinite-scroll-disabled="disabled"
        >
          <div v-for="(item, index) in songDatasMthMethodList" :key="index">
            <div class="line"></div>
            <li
              @click="choseItem(index)"
              :class="{ currentLi: index == curIndex }"
              class="infinite-list-item"
            >
              <div class="item-song">{{ item.song_name }}</div>
              <div class="item-artist">
                {{ item.author }}--{{ item.song_type == "fc" ? "翻唱" : "原唱" }}
              </div>
            </li>
          </div>
        </ul>
        <p v-if="loading" class="text-align" style="text-align: center">加载中...</p>
        <p v-if="noMore" class="text-align" style="text-align: center">没有更多了</p>
      </div>
    </el-drawer>
  </div>
</template>

<script>
import http from "@/http/service";
import WaveSurfer from "wavesurfer.js";
import "./css/global.css";
import iconBase from "./iconBase";
import iconLoop from "./icons/iconLoop";
import iconNext from "./icons/iconNext";
import iconPlay from "./icons/iconPlay";
import iconPlaylist from "./icons/iconPlaylist";
import iconPrev from "./icons/iconPrev";
import iconRandom from "./icons/iconRandom";
import iconMuted from "./icons/iconMuted.vue";
import iconSingle from "./icons/iconSingle";
import IconSingle from "./icons/iconSingle.vue";
import iconSuona from "./icons/iconSuona";
import iconSuspend from "./icons/iconSuspend";
import iconSwitch from "./icons/iconSwitch";
// import shanshan from "../../assets/music/姗姗.mp3";
// import { erkeMusic } from "../../utils/music.js";

export default {
  name: "web-music-com",
  props: {
    paramsId: {
      type: Number,
      default: 0,
    },
  },
  components: {
    iconBase,
    iconLoop,
    iconNext,
    iconPlay,
    iconPlaylist,
    iconPrev,
    iconRandom,
    iconSingle,
    iconSuona,
    iconSuspend,
    iconMuted,
    iconSwitch,
  },
  data() {
    IconSingle;
    return {
      wavesurfer: null,
      direction: "rtl",
      drawer: false,
      height: 186,
      songDatasMthMethodList: [],
      songDatasMthMethodListTotal: [],
      curIndex: 0,
      curIndexs: 1,
      curMusic: {
        id: 0,
        arname: "二珂",
        name: "-",
        song_type: "fc",
        url: "-",
        picUrl:
          "https://p1.music.126.net/PMZ2HH_vuAhtNCOSrfGCGQ==/109951168131572411.jpg",
        lyric: [],
        lyricTime: [],
        edition: "1.1",
        obj: "",
        lyricCSS: new Object(),
        txt: "",
        index: 0,
        time: new Array(),
        lyric: new Array(),
      },
      // 播放信息 min：0秒 max：歌曲长度 nowime播放时间
      playInfo: {
        min: 0,
        max: 200,
        nowtime: 0,
      },
      // audio对象
      audioobj: {},
      // 是否在播放
      isplay: false,
      // 定时器
      timer: {},
      // 切歌方式 0单曲循环 1列表循环 2随机播放
      switchType: 1,
      // 是否静音
      ismute: false,
      // 是否显示播放列表
      isShowPlayList: false,
      loading: false,
      info: {
        page: 1,
        methods: "aid",
        method: 1,
      },
      screenHeight: document.body.clientHeight - 115 - 53 - 300,
      // 是否显示歌词
    };
  },
  created() {
    this.getHot();
    document.getElementsByClassName('el-message-box')[0].style = 'width:auto;margin: 0 10%;'//为了让弹窗在中间显示
    this.curIndex = this.$route.query.curIndex||0;
  },

  methods: {
    sort() {
      // 冒泡排序（从小到大）
      var third;
      for (var j = 0; j < this.curMusic.index - 1; j++) {
        for (var i = 0; i < this.curMusic.index - 1; i++) {
          if (this.curMusic.time[i] > this.curMusic.time[i + 1]) {
            third = this.curMusic.time[i];
            this.curMusic.time[i] = this.curMusic.time[i + 1];
            this.curMusic.time[i + 1] = third;
            third = this.curMusic.lyric[i];
            this.curMusic.lyric[i] = this.curMusic.lyric[i + 1];
            this.curMusic.lyric[i + 1] = third;
          }
        }
      }
    },
    createPanel() {
      // 创建歌词面板
      // var i = 0;
      // $(this.curMusic.obj).html("");
      // for (i = 0; i < this.curMusic.index; i++) {
      //     $(this.curMusic.obj).append("<div>" + this.curMusic.lyric[i] + "</div>");
      // }
      // for (i in this.curMusic.lyricCSS) {
      //     $(this.curMusic.obj).find("div").css(this.curMusic.lyricCSS, this.curMusic.lyricCSS[i]);
      // }
    },
    findTags(index, strArray, number) {
      // 查找标签（包括任何扩展的标签）
      // 此方法能匹配所有格式的标签
      // 因为此方法是在后面写的，所以时间标签并没有使用此方法
      number = number || this.curMusic.txt.length;
      number = number > this.curMusic.txt.length ? this.curMusic.txt.length : number;
      var i,
        j,
        complete = 0,
        value;
      var obj = new Object();
      obj.booble = false;
      obj.value = "[";
      for (i = index; i < number; i++) {
        if (this.curMusic.txt.substr(i, 1) == strArray[complete].s) {
          complete += 1;
          if (complete > 1) {
            if (complete < strArray.length) {
              obj.value +=
                '{value:"' + this.curMusic.txt.substr(value + 1, i - value - 1) + '"},';
            } else {
              obj.value +=
                '{value:"' + this.curMusic.txt.substr(value + 1, i - value - 1) + '"}]';
            }
          }
          if (complete == strArray.length) {
            obj.txt = this.curMusic.txt.substr(index, i - index + 1);
            obj.value = eval("(" + obj.value + ")");
            obj.index = i + 1;
            obj.booble = true;
            break;
          }
          value = i;
        } else if (this.curMusic.txt.substr(i, 1) == "\n") {
          obj.booble = false;
          return obj;
        } else if (this.curMusic.txt.substr(i, 1) == strArray[0].s && complete > 0) {
          // 遇到2次开始标志就退出
          obj.booble = false;
          return obj;
        }
      }
      return obj;
    },
    findlyric(index) {
      // 查找歌词： 有则返回 歌词、继续查找的位置， 否则只返回继续查找的位置
      var obj = {};
      var str = this.curMusic.txt;
      var i;
      for (i = index; i < str.length; i++) {
        if (str.charAt(i) == "[") {
          var _obj = this.findTags(i, [
            {
              s: "[",
            },
            {
              s: ":",
            },
            {
              s: "]",
            },
          ]);
          if (_obj.booble) {
            obj.index = i; //i + _obj.txt.length;
            obj.lyric = str.substr(index, i - index);
            return obj;
          }
        } else if (str.charAt(i) == "\n") {
          obj.index = i + 1;
          obj.lyric = str.substr(index, i - index);
          return obj;
        }
      }
      if (i == str.length) {
        // 专处理最后一句歌词（最后一句歌词比较特殊）
        obj.index = i + 1;
        obj.lyric = str.substr(index, i - index);
        return obj;
      }
      obj.index = i;
      return obj;
    },
    findTime(index) {
      // 查找时间 ： 有则返回 时间、继续查找的位置， 否则只返回继续查找的位置
      // 此功能可以用 findTags 方法实现，更简单、更强大、代码更少
      // findTags方法 是在后面写的，所以这里就不改了，具体可参考 findID方法里的使用实例
      var obj = {};
      var thisobj = this;
      var str = this.curMusic.txt;
      obj.index = index;

      function recursion() {
        var _obj = thisobj.$options.methods.findTime.bind(obj.index);
        if (_obj.time) {
          obj.time += _obj.time;
          obj.index = _obj.index;
        }
      }
      // --------------- 可以在这里 扩展 其它功能 ---------------
      // lrc歌词只能精确到每句歌词，可以通过扩展lrc 精确 到 每个字
      if (/\[\d{1,2}\:\d{1,2}\.\d{1,2}\]/.test(str.substr(index, 10))) {
        // [mm:ss.ff]
        obj.time = str.substr(index + 1, 8) + "|";
        obj.index = index + 9 + 1;
        recursion();
      } else if (/\[\d{1,2}\:\d{1,2}\]/.test(str.substr(index, 7))) {
        // [mm:ss]
        obj.time = str.substr(index + 1, 5) + ".00" + "|";
        obj.index = index + 6 + 1;
        recursion();
      }
      // 以下标签均属于合法标签，但很少被使用，请根据需要进行扩展
      // [mm:ss.f] [mm:s.ff] [mm:s.f] [m:ss.ff] [m:s.ff] [m:s.f]
      // [mm:s] [m:ss] [s:s]
      return obj;
    },
    analysis() {
      // 解析
      if (this.curMusic.txt == "") return false;
      var str = this.curMusic.txt;
      this.curMusic.index = 0;
      for (var i = 0; i < str.length; i++) {
        if (str.charAt(i) == "[") {
          var time = this.findTime(i);
          if (time.time) {
            // 时间标签
            var lyric = this.findlyric(time.index);
            if (lyric.lyric != "\n" && lyric.lyric != "") {
              // 去掉无意义歌词
              var timeArray = time.time.split("|");
              for (var j = 0; j < timeArray.length; j++) {
                if (timeArray[j]) {
                  this.curMusic.time[this.curMusic.index] = timeArray[j];
                  this.curMusic.lyric[this.curMusic.index] = lyric.lyric;
                  this.curMusic.index += 1;
                }
              }
            }
            i = time.index;
          } // 预定义标签
          else {
            this.curMusic.findID(i);
          }
        }
      }
      this.curMusic.sort();
      this.curMusic.createPanel();
    },
    play(position, CSS) {
      // 定位指定时间的歌词
      // console.log(position)
      var time;
      var obj = this;

      function set(index) {
        var height = parseInt($(obj.obj).find("div").css("height"));
        var top = parseInt($(obj.obj).find("div").css("margin-top"));
        $(obj.obj).animate(
          {
            scrollTop:
              index * height +
              index * top -
              parseInt($(obj.obj).css("height")) / 2 +
              height / 2,
          },
          300
        );
        for (var i in CSS) {
          $(obj.obj).find("div").eq(index).css(CSS, CSS[i]);
        }
      }
      for (var i = 0; i < this.curMusic.index; i++) {
        if (position == this.curMusic.time[i]) {
          set(i);
          return;
        } else if (position > this.curMusic.time[i]) {
          time = i;
        }
      }
      set(time); // 没找到匹配时间 则就近最小选择
    },
    load() {
      if (this.songDatasMthMethodList.length >= this.songDatasMthMethodListTotal) {
        return;
      }
      this.loading = true;
      this.songDatasMthMethodList.length >= this.songDatasMthMethodListTotal;
      this.info.page = this.info.page + 1;
      this.getSongDatasMthMethod();
      setTimeout(() => {
        this.count += 2;
        this.loading = false;
      }, 2000);
    },
    imgOnError() {
      this.curMusic.computCur = "";
    },
    // 滑动当前播放歌曲至视图的顶部,必须当前视图可见，none不起作用。
    scrollToTop() {
      document
        .querySelector("li.currentLi")
        .parentElement.scrollIntoView({ behavior: "smooth" });
    },
    getSongDatasMthMethod() {
      http
        .getSongDatasMthMethod({
          methods: this.info.methods,
          method: this.info.method,
          page: this.info.page,
        })
        .then((rs) => {
          this.loading = false;
          if (rs.code == 200) {
            this.songDatasMthMethodListTotal = rs.datas.total;
            if (rs.datas.lists.length) {
              this.songDatasMthMethodList = [
                ...this.songDatasMthMethodList,
                ...rs.datas.lists,
              ];
            } else {
              this.songDatasMthMethodList = [];
            }
          } else {
            this.songDatasMthMethodList = [...this.songDatasMthMethodList];
          }
        })
        .catch((err) => {
          this.loading = false;
          this.songDatasMthMethodList = [...this.songDatasMthMethodList];
          console.log(err);
        });
    },
    // 因为谷歌等软件规定 进入页面需要触发交互之后才可以播放声音
    getHot() {
      this.$alert(
        "因为一些浏览器规定 进入页面需要触发交互之后才可以播放声音",
        "开始听歌",
        {
          confirmButtonText: "确定",
          callback: (action) => {
            this.getSongDatasMthMethod();
          },
        }
      );
    },
    // 改变切歌方式
    handleChangeType() {
      this.switchType < 2 ? (this.switchType += 1) : (this.switchType = 0);
    },
    // 获取歌曲信息
    getSong() {
      http
        .getSongUrl({ songid: this.curMusic.song_id, songtype: this.curMusic.song_type })
        .then((rs) => {
          if (rs.code == 200) {
            this.curMusic.musicUrl =
              rs.datas.urls.sq.burl || rs.datas.urls.hq.burl || rs.datas.urls.lq.burl;
            let a = document.querySelector("audio");
            if (a != null) {
              a.load();
              var that = this;
              a.onloadedmetadata = function () {
                that.playInfo.max = Number(a.duration.toFixed(1));
              };
              a.oncanplay = function () {
                setTimeout(() => {
                  a.play();
                }, 300);
                that.isplay = true;
                // 拖动播放时，时间调整为歌曲现在播放时间，清除定时器，重新开始定时器
                that.playInfo.nowtime = a.currentTime;
                clearInterval(that.timer);
                that.timer = setInterval(() => {
                  that.playInfo.nowtime += 0.1;
                }, 100);
              };
            } else {
            }
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // 获取歌词 现在都是没有时间的歌词 所以不加滚动
    getLyric() {
      http
        .getSongLrc({ songid: this.curMusic.song_id, songtype: this.curMusic.song_type })
        .then((rs) => {
          if (rs.code == 200) {
            this.curIndexs = this.curIndex;
            // 歌词不支持滚动的
            this.curMusic.lrcType = rs.datas.lrc.type;
            var lyricD = rs.datas.txt.split("\r\n");
            var timeArr = [];
            var lyricArr = [];
            if (this.curMusic.lrcType == 0) {
              lyricD.forEach((item, key) => {
                lyricArr[key] = item || "";
              });
            } else {
              this.curMusic.txt = rs.datas.txt;
              // this.analysis()
              // 歌词支持滚动的
              lyricD.forEach((item, key) => {
                let curArr = item.slice(1).split("]");
                // 把01:00.23 转换为秒,
                timeArr.push(curArr[0]);
                lyricArr[key] = curArr[1] || "";
              });
              // console.log(this.curMusic, "lyricTime", timeArr)
              this.$set(this.curMusic, "lyricTime", timeArr); //时间=>主要运用于歌词滚动
            }
            this.$set(this.curMusic, "lyric", lyricArr);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // 获取dom audio对象
    getAudio() {
      this.audioobj = document.getElementById("music-audio");
    },
    // 播放/暂停
    handlePlay() {
      this.getAudio();
      if (this.isplay) {
        this.audioobj.pause();
        document
          .querySelector("img.imgrotate")
          .setAttribute("style", "animation-play-state: paused");
        clearInterval(this.timer);
      } else {
        let _this = this;
        setTimeout(() => {
          _this.audioobj.play();
        }, 300);
        document
          .querySelector("img.imgrotate")
          .setAttribute("style", "animation-play-state: running");
        this.timer = setInterval(() => {
          this.playInfo.nowtime += 0.1;
        }, 100);
      }
      this.isplay = !this.isplay;
    },
    // 拖动播放时间
    handleChangeTime(val) {
      this.getAudio();
      document
        .querySelector("img.imgrotate")
        .setAttribute("style", "animation-play-state: running");
      this.audioobj.currentTime = val;
    },
    // 播放完成自动切换下一曲、手动切换下一曲
    handleNextMusic() {
      this.isplay = false;
      switch (this.switchType) {
        case 0:
          this.getAudio();
          let _this = this;
          setTimeout(() => {
            _this.audioobj.play();
          }, 300);
          document
            .querySelector("img.imgrotate")
            .setAttribute("style", "animation-play-state: running");
          break;
        case 1:
          if (this.curIndex < this.songDatasMthMethodList.length - 1) {
            this.curIndex = this.curIndex + 1;
            document
              .querySelector("img.imgrotate")
              .setAttribute("style", "animation-play-state: running");
          }
          break;
        default:
          this.curIndex = parseInt(
            Math.random() * this.songDatasMthMethodList.length,
            10
          );
          document
            .querySelector("img.imgrotate")
            .setAttribute("style", "animation-play-state: running");
          break;
      }
    },
    // 上一曲
    handlePrevMusic() {
      this.isplay = false;
      switch (this.switchType) {
        case 0:
          this.getAudio();
          let _this = this;
          setTimeout(() => {
            _this.audioobj.play();
          }, 300);
          document
            .querySelector("img.imgrotate")
            .setAttribute("style", "animation-play-state: running");
          break;
        case 1:
          if (this.curIndex) {
            this.curIndex = this.curIndex - 1;
            document
              .querySelector("img.imgrotate")
              .setAttribute("style", "animation-play-state: running");
          }
          break;
        default:
          this.curIndex = parseInt(
            Math.random() * this.songDatasMthMethodList.length,
            10
          );
          document
            .querySelector("img.imgrotate")
            .setAttribute("style", "animation-play-state: running");
          break;
      }
    },
    // 静音或打开声音
    handleClickMute() {
      if (!this.ismute) {
        // 设置静音
        this.getAudio();
        this.audioobj.volume = 0;
      } else {
        this.getAudio();
        this.audioobj.volume = 1;
      }
      this.ismute = !this.ismute;
    },
    // 选择歌曲方法，传入歌曲列表中的索引值。
    choseItem(index) {
      this.curIndex = index;
    },
    // 显示隐藏播放列表
    collapsePlayList() {
      this.isShowPlayList = !this.isShowPlayList;
      // 滑动当前播放音乐至视图顶部。
      // this.drawer = true;
      let then = this;
      if (this.isShowPlayList) {
        setTimeout(() => {
          then.scrollToTop();
        }, 350);
      }
    },
    handleClose(done) {
      done();
    },
  },
  computed: {
    noMore() {
      return this.songDatasMthMethodList.length >= this.songDatasMthMethodListTotal;
    },
    disabled() {
      return this.loading || this.noMore;
    },
    computCur: function () {
      if (this.songDatasMthMethodList.length > 0) {
        this.curMusic = this.songDatasMthMethodList[this.curIndex];
        // 获取歌曲
        var then = this;
        if (then.curIndexs != then.curIndex) {
          then.getSong();
          then.getLyric();
        }
        // 获取歌词
        return this.curMusic.picUrl;
      }
    },
    // 返回现在播放的时间格式
    currtime: function () {
      // 小于10秒，用0补至2位
      let sec = "";
      if (this.playInfo.nowtime % 60 < 10) {
        sec = "0" + parseInt(this.playInfo.nowtime % 60);
      } else {
        sec = parseInt(this.playInfo.nowtime % 60);
      }
      return parseInt(this.playInfo.nowtime / 60) + ":" + sec;
    },
    // 返回歌曲总时长
    totaltime: function () {
      // 小于10秒，用0补位
      let sec = "";
      if (this.playInfo.max % 60 < 10) {
        sec = "0" + parseInt(this.playInfo.max % 60);
      } else {
        sec = parseInt(this.playInfo.max % 60);
      }
      return parseInt(this.playInfo.max / 60) + ":" + sec;
    },
  },
  watch: {
    // 监听播放时间，到总时长自动切换下一曲
    "playInfo.nowtime": function () {
      if (this.playInfo.nowtime === this.playInfo.max) {
        // 时间到了最终时间，清除定时器，停止增加时间
        clearInterval(this.timer);
        this.playInfo.nowtime = 0;
        this.handleNextMusic();
      }
    },
    // 监听现在播放时间，滚动歌词
    currtime: function () {
      if (this.curMusic.lyricTime) {
        var i = this.curMusic.lyricTime.findIndex((item) => {
          return item.indexOf(this.currtime) != -1;
        });
        // 第i个设置on transform i*30
        if (i !== -1) {
          if (document.querySelector("span.on") !== null) {
            document.querySelector("span.on").className = "";
          }
          document.querySelector(".music-lyric").children[i].className = "on";
          if (i > 5) {
            this.$refs.musicLyricBox.scrollTop = 30 * (i - 5);
          }
        }
      }
    },
  },
  mounted() {
    this.screenHeight = document.body.clientHeight - 115 - 53 - 300;
    window.onresize = () => {
      return (() => {
        this.screenHeight = document.body.clientHeight - 115 - 53 - 300;
      })();
    };
  },
  // updated() {
  //   this.defaultChose();
  // },
};
</script>

<style lang="scss" scoped>

.yinyue_top {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 800px;
  margin: 0 auto;
}

.yinyue_top_left {
  //width: 50%;

  div {
    width: 50%;
    margin: 0 auto;
    //height: 500px;
    background-color: tan;
    border-radius: 10px 10px 0 0;
    text-align: center;
    background: url("../../component/webMusicCom/img/singlecover.png") no-repeat center;
    background-size: contain;
    padding: 8%;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      //height: 75%;
      max-width: 100%;
      border-radius: 50%;
    }
  }
}

.yinyue_top_con {
  flex: 1;
  height: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
}

.yinyue_top_con_title {
  font-size: 38px;
  font-weight: 600;
  margin: 10px 0;
}

.yinyue_top_con_geci {
  margin: 20px 0;
  font-size: 18px;
}

::v-deep {
  .el-drawer.rtl {
    min-width: 200px;
  }

  .f-cd {
    height: 111px;
  }
}

// 抽屉 列表数据
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
  padding: 0 10px;
  overflow-y: auto;
  transition: max-height 0.3s ease-in-out;
  // > div {
  //   padding-bottom: 15px;
  // }
}

.currentLi {
  color: red;
}

li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 45px;
  // margin-top: 15px;
  // max-height: 19.2px;
}

li:hover {
  cursor: pointer;
  background-color: $back-primary1;
  // color: #fff;
}

.line {
  display: block;
  height: 1px;
  background-color: #dcdfe6;
  width: 100%;
}

.el-divider--horizontal {
  margin: 0px;
}

.music-container {
  width: 100%;
  padding-bottom: 115px;
  background: linear-gradient(
    to right,
    #f4c8c7 0%,
    #0c61bb 45%,
    #0c61bb 55%,
    #fcc6c6 100%
  );
}

.music-pic {
  height: 180px;
  flex: 1;
  background-color: tan;
  border-radius: 10px 10px 0 0;
  text-align: center;
  background: url("./img/singlecover.png") no-repeat center;
  background-size: contain;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    height: 70%;
    max-width: 100%;
    border-radius: 50%;
  }
}

.music-content {
  padding: 10px 0px 10px 0px;
  background-color: $back-primary1;
  border-radius: 0 0 10px 10px;
  height: 115px;
  width: 100%;
  position: fixed;
  bottom: 0;

  div.music-title div span {
    display: block;
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  div.music-title-name > div:nth-child(1) > span:nth-child(2) {
    font-size: 12px;
  }

  div.music-title > svg {
    flex: 1;
  }

  div.music-title > div {
    flex: 3;
  }
}

.music-content > div {
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.music-process > span {
  flex: 1;
  text-align: center;
}

.music-process > div {
  flex: 3;
}

.music-control > svg {
  flex: 1;
}

.music-control > div {
  flex: 3;
}

.music-control-button {
  display: flex;
  justify-content: center;
}

.music-control-button div:nth-child(2) {
  margin-top: 1px;
}

.iconSwitch:active {
  border-radius: 5px;
  background: #9e9e9e;
  opacity: 0.5;
}

.music-lyric {
  display: flex;
  flex-direction: column;
}

.music-lyric-box {
  font-size: 12px;
  top: 0px;
  bottom: 0px;
  overflow-y: auto;
  margin-top: 150px;
  min-height: 432px;

  span {
    height: 30px;
    line-height: 30px;
    font-size: 16px;
  }
}

.on {
  font-size: 30px !important;
  color: #31c27c;
  line-height: 50px !important;
  height: 50px !important;
}

// 播放列表过渡动画
div#playlistcom ul {
  transition: height 1s;
}

.imgrotate {
  -webkit-transition-property: -webkit-transform;
  -webkit-transition-duration: 12s;
  -moz-transition-property: -moz-transform;
  -moz-transition-duration: 12s;
  -webkit-animation: rotate 12s linear infinite;
  -moz-animation: rotate 12s linear infinite;
  -o-animation: rotate 12s linear infinite;
  animation: rotate 12s linear infinite;
}

@-webkit-keyframes rotate {
  from {
    -webkit-transform: rotate(0deg);
  }

  to {
    -webkit-transform: rotate(360deg);
  }
}

@-moz-keyframes rotate {
  from {
    -moz-transform: rotate(0deg);
  }

  to {
    -moz-transform: rotate(359deg);
  }
}

@-o-keyframes rotate {
  from {
    -o-transform: rotate(0deg);
  }

  to {
    -o-transform: rotate(359deg);
  }
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(359deg);
  }
}

@media screen and (min-width: 1170px) {
  .yinyue_top {
    min-width: 1170px;
  }
}

@media screen and (max-width: 1169px) {
  .music-container {
    padding-top: 70px;
  }

  .yinyue_top {
    flex-flow: column;

    .yinyue_top_left {
      > div {
      }
    }

    .music-lyric-box {
      margin-top: 30px;
    }
  }
}

@media screen and (min-width: 360px) {
  .yinyue_top {
    .yinyue_top_left {
      //width: 247px;
      // height: 247px;
      > div {
        //height: 100%;
      }

      /* >div::before{
        content: " ";
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        z-index: 2;
        background: url(//s3.music.126.net/mobile-new/img/disc.png?d3bdd10…=) no-repeat;
        background-size: contain;
        background-image: url(https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/4602256867/5855/63fb/325b/d7e4e3a….png?imageView=&quality=75&thumbnail=200y200);
      }*/
    }
  }
}
</style>
