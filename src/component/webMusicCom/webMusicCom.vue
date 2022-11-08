<template>
  <div class="music-container">
    <div class="music-pic">
      <img :src="computCur" class="imgrotate" alt="" />
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
          <div v-show="!isShowLyric">
            <span>{{ curMusic.name }}</span>
            <span>{{ curMusic.arname }}</span>
          </div>
          <div class="music-lyric-box" v-show="isShowLyric">
            <div class="music-lyric" style="">
              <span v-for="(i, key) in curMusic.lyric" :key="key">{{ i }}</span>
            </div>
          </div>
        </div>

        <icon-base
          class="iconSwitch"
          icon-name="switch"
          icon-title="切换"
          @click.native="isShowLyric = !isShowLyric"
        >
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
          <icon-base
            icon-name="prev"
            icon-title="上一曲"
            @click.native="handlePrevMusic"
          >
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
          <icon-base
            icon-name="next"
            icon-title="下一曲"
            @click.native="handleNextMusic"
          >
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

      <play-list-com
        :playlist="playlist"
        :curIndex="curIndex"
        @item-click="choseItem"
        :height="playlistH"
        ref="playListComRef"
      ></play-list-com>
    </div>
    <audio
      style="display: none"
      :src="curMusic.url"
      id="music-audio"
      type="audio/mpeg"
      controls
    ></audio>
  </div>
</template>


<script>
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
import playListCom from "./playListCom";

export default {
  name: "web-music-com",
  props: {
    size: {
      type: String,
      validator: function (value) {
        // 这个值必须匹配下列字符串中的一个
        return ["medium", "small"].indexOf(value) !== -1;
      },
      default: "medium",
    },
    playlistid: {
      type: Number,
      default: 3778678,
    },
    playlistheight: {
      type: Number,
      default: 186,
    },
    baseurl: {
      type: String,
      default: "https://autumnfish.cn/",
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
    playListCom,
  },
  data() {
    IconSingle;
    return {
      playlist: [],
      playlistH: 0,
      // 现在播放的音乐在playlist中的index
      curIndex: 0,
      curMusic: {
        id: 0,
        arname: "",
        name: "",
        url: "",
        picUrl: "",
        lyric: [],
        lyricTime: [],
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
      // 是否显示歌词
      isShowLyric: false,
    };
  },
  created() {
    this.getHot();
  },
  methods: {
    // 获取热歌榜单
    getHot() {
      this.$http
        .get(this.baseurl + "playlist/detail?id=" + this.playlistid + "&s=0")
        .then(
          (data) => {
            let ids = data.data.playlist.trackIds;
            let hotList = data.data.playlist.tracks;
            hotList.forEach((item, key) => {
              this.playlist.push({
                ...item.al,
                arname: item.ar[0].name,
                id: ids[key].id,
              });
            });
          },
          (err) => {
            console.log(err);
          }
        );
    },
    // 改变切歌方式
    handleChangeType() {
      this.switchType < 2 ? (this.switchType += 1) : (this.switchType = 0);
    },
    // 获取歌曲信息
    getSong() {
      this.$http.get(this.baseurl + "/song/url?id=" + this.curMusic.id).then(
        (data) => {
          this.curMusic.url = data.data.data[0].url;
          let a = document.querySelector("audio");
          if (a != null) {
            a.load();
            var that = this;
            a.onloadedmetadata = function () {
              that.playInfo.max = Number(a.duration.toFixed(1));
            };
            a.oncanplay = function () {
              a.play();
              that.isplay = true;
              // 拖动播放时，时间调整为歌曲现在播放时间，清除定时器，重新开始定时器
              that.playInfo.nowtime = a.currentTime;
              clearInterval(that.timer);
              that.timer = setInterval(() => {
                that.playInfo.nowtime += 0.1;
              }, 100);
            };
          }
        },
        (err) => {
          console.log(err);
        }
      );
    },
    // 获取歌词
    getLyric() {
      this.$http.get(this.baseurl + "/lyric?id=" + this.curMusic.id).then(
        (data) => {
          var lyricD = data.data.lrc.lyric.split("\n");
          var timeArr = [];
          var lyricArr = [];
          lyricD.forEach((item, key) => {
            let curArr = item.slice(1).split("]");
            // 把01:00.23 转换为秒,
            timeArr.push(curArr[0]);
            lyricArr[key] = curArr[1] || "";
          });
          this.$set(this.curMusic, "lyric", lyricArr);
          this.$set(this.curMusic, "lyricTime", timeArr);
        },
        (err) => {
          console.log(err);
        }
      );
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
        this.audioobj.play();
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
          this.audioobj.play();
          document
            .querySelector("img.imgrotate")
            .setAttribute("style", "animation-play-state: running");
          break;
        case 1:
          if (this.curIndex < this.playlist.length - 1) {
            this.curIndex = this.curIndex + 1;
            document
              .querySelector("img.imgrotate")
              .setAttribute("style", "animation-play-state: running");
          }
          break;
        default:
          this.curIndex = parseInt(Math.random() * this.playlist.length, 10);
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
          this.audioobj.play();
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
          this.curIndex = parseInt(Math.random() * this.playlist.length, 10);
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
      if (this.isShowPlayList) {
        this.playlistH = this.playlistheight;
      } else {
        this.playlistH = 0;
      }
      // 延迟调用子组件方法。滑动当前播放音乐至视图顶部。
      if (this.isShowPlayList) {
        setTimeout(() => {
          this.$refs.playListComRef.scrollToTop();
        }, 550);
      }
    },
  },
  computed: {
    computCur: function () {
      if (this.playlist.length > 0) {
        this.curMusic.picUrl =
          this.playlist[this.curIndex].picUrl + "?param=160y160";
        this.curMusic.id = this.playlist[this.curIndex].id;
        this.curMusic.name = this.playlist[this.curIndex].name;
        this.curMusic.arname = this.playlist[this.curIndex].arname;
        // 获取歌曲
        this.getSong();
        // 获取歌词
        this.getLyric();
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
      var i = this.curMusic.lyricTime.findIndex((item) => {
        return item.indexOf(this.currtime) != -1;
      });
      // 第i个设置on transform i*16
      if (i !== -1) {
        document
          .querySelector(".music-lyric")
          .setAttribute(
            "style",
            "transition: -webkit-transform 0.25s ease-out 0.1s;transform:translateY(-" +
              i * 16 +
              "px)"
          );

        if (document.querySelector("span.on") !== null) {
          document.querySelector("span.on").className = "";
        }
        document.querySelector(".music-lyric").children[i].className = "on";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.music-container {
  display: block;
  width: 260px;
}

.music-pic {
  height: 180px;
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
  background-color: teal;
  border-radius: 0 0 10px 10px;
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
.music-lyric-box {
  font-size: 12px;
  top: 0px;
  bottom: 0px;
  overflow-y: hidden;
  max-height: 35.2px;
  span {
    height: 16px;
  }
}
.on {
  font-size: 14px;
  color: #31c27c;
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
</style>
