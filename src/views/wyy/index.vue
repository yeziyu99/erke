<template>
  <div class="yinyue">
    <!-- 上边 -->
    <div class="yinyue_top">
      <div class="yinyue_top_left">
        <div>
          <img class="imgrotate" src="https://wsingbssdl.kugou.com/060ae290b3bdceffa7f2ada54816c41e.png_188x188.png"
            alt="">
        </div>
      </div>
      <div class="yinyue_top_con">
        <div class="yinyue_top_con_title">
          标题
        </div>
        <!-- <div class="music-title-name"> -->
        <div class="music-lyric-box">
          <div class="music-lyric" style="">
            <span v-for="(i, key) in curMusic.lyric" :key="key">{{ i }}</span>
          </div>
        </div>
        <!-- </div> -->
      </div>
    </div>
    <div class="yinyue_bottom">
      <div class="music-container">
        <!-- <div class="music-pic">
      <img :src="computCur" class="imgrotate" alt="" />
    </div> -->
        <div class="music-content">
          <div class="music-title">
            <icon-base icon-name="single" icon-title="单曲循环" v-if="switchType === 0" @click.native="handleChangeType">
              <icon-single /></icon-base>
            <icon-base icon-name="loop" icon-title="列表循环" v-else-if="switchType === 1" @click.native="handleChangeType">
              <icon-loop /></icon-base>
            <icon-base icon-name="random" icon-title="随机播放" v-else @click.native="handleChangeType">
              <icon-random /></icon-base>
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

            <icon-base class="iconSwitch" icon-name="switch" icon-title="切换" @click.native="isShowLyric = !isShowLyric">
              <icon-switch /></icon-base>
          </div>
          <div class="music-process">
            <span>{{ currtime }}</span>
            <el-slider v-model="playInfo.nowtime" :max="playInfo.max" @change="handleChangeTime"
              :show-tooltip="false"></el-slider>
            <span>{{ totaltime }}</span>
          </div>
          <div class="music-control">
            <icon-base icon-name="playlist" icon-title="播放列表" @click.native="collapsePlayList">
              <icon-playlist />
            </icon-base>
            <div class="music-control-button">
              <icon-base icon-name="prev" icon-title="上一曲" @click.native="handlePrevMusic">
                <icon-prev /></icon-base>
              <icon-base icon-name="suspend" icon-title="暂停" @click.native="handlePlay" v-if="isplay" :height="23"
                :width="23">
                <icon-suspend />
              </icon-base>
              <icon-base icon-name="play" icon-title="播放" :height="23" :width="23" @click.native="handlePlay" v-else>
                <icon-play />
              </icon-base>
              <icon-base icon-name="next" icon-title="下一曲" @click.native="handleNextMusic">
                <icon-next /></icon-base>
            </div>

            <icon-base icon-name="muted" icon-title="静音" @click.native="handleClickMute" v-if="ismute">
              <icon-muted />
            </icon-base>
            <icon-base icon-name="suona" icon-title="音量" @click.native="handleClickMute" v-else>
              <icon-suona />
            </icon-base>
          </div>

          <!-- <play-list-com :playlist="playlist" :curIndex="curIndex" @item-click="choseItem" :height="playlistH"
            ref="playListComRef"></play-list-com> -->
        </div>
      </div>
    </div>
    <el-drawer
    title="播放列表"
    :visible.sync="drawer"
    :direction="direction"
    :before-close="handleClose">
      <div id="playlistcom">
        <ul>
          <div v-for="(item, index) in playlist" :key="index">
            <div class="line"></div>
            <li @click="choseItem(index)">
              <div class="item-song">{{ item.name }}</div>
              <div class="item-artist">{{ item.arname }}</div>
            </li>
          </div>
        </ul>
      </div>
    </el-drawer>
    <audio style="display: none" :src="curMusic.url" id="music-audio" type="audio/mpeg" controls></audio>
    <!-- <web-music-com :playlistheight="playlistheight"></web-music-com> -->
    <!-- <audio style="display: none" src="@/assets/mp3/1.mp3" id="music-audio" type="audio/mpeg" controls></audio> -->
  </div>
</template>
  
<script>
// import webMusicCom from "@/component/webMusicCom/webMusicCom.vue";
import http from "@/http/service";
import iconBase from "@/component/webMusicCom/iconBase";
import iconLoop from "@/component/webMusicCom/icons/iconLoop";
import iconNext from "@/component/webMusicCom/icons/iconNext";
import iconPlay from "@/component/webMusicCom/icons/iconPlay";
import iconPlaylist from "@/component/webMusicCom/icons/iconPlaylist";
import iconPrev from "@/component/webMusicCom/icons/iconPrev";
import iconRandom from "@/component/webMusicCom/icons/iconRandom";
import iconMuted from "@/component/webMusicCom/icons/iconMuted.vue";
import iconSingle from "@/component/webMusicCom/icons/iconSingle";
import IconSingle from "@/component/webMusicCom/icons/iconSingle.vue";
import iconSuona from "@/component/webMusicCom/icons/iconSuona";
import iconSuspend from "@/component/webMusicCom/icons/iconSuspend";
import iconSwitch from "@/component/webMusicCom/icons/iconSwitch";
import playListCom from "@/component/webMusicCom/playListCom";
export default {
  name: "Home",
  components: {
    // webMusicCom,
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
      curIndex:  true,
    playlist:[{ name: "获取歌曲失败", arname: "" }],
    height: 186,
      drawer: true,
      direction: 'rtl',
      size: "medium",
      playlistid: 916072119,
      playlistheight: 186,
      baseurl: "https://autumnfish.cn/",
      playlistheight: 186,
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
  //   this.getLyric()
  this.getHot();
  //   this.getAudio()
  },
  methods: {
    choseItem(index, $event) {
      console.log(index)
      // this.$emit("item-click", index);
    },
    // 默认选中歌曲
    defaultChose() {
      var listbox = document.querySelector("#playlistcom");
      var listitems = listbox.querySelectorAll("li");
      listitems[this.curIndex].className = "currentLi";
    },
    // 滑动当前播放歌曲至视图的顶部,必须当前视图可见，none不起作用。
    scrollToTop() {
      document
        .querySelector("li.currentLi")
        .parentElement.scrollIntoView({ behavior: "smooth" });
    },
    handleClose(done) {
        // this.$confirm('确认关闭？')
        //   .then(_ => {
            done();
        //   })
        //   .catch(_ => {});
      },
    // 获取热歌榜单
    getHot() {
      http.getPlaylistDetail({id:this.playlistid,s:0}).then((rs) => {
          if (rs.code==200) {
            let ids = rs.playlist.trackIds;
            let hotList = rs.playlist.tracks;
            hotList.forEach((item, key) => {
              this.playlist.push({
                ...item.al,
                arname: item.ar[0].name,
                id: ids[key].id,
              });
            });
          } else {
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // 改变切歌方式
    handleChangeType() {
      this.switchType < 2 ? (this.switchType += 1) : (this.switchType = 0);
    },
    // 获取歌曲信息
    getSong() {
      http.getSongUrl({id:this.curMusic.id}).then((rs) => {
          if (rs.code==200) {
            this.curMusic.url = rs.data[0].url;
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
          } else {
          }
        }
        })
        .catch((err) => {
          console.log(err);
        });
    
    },
    // 获取歌词
    getLyric() {
      http.getLyric({id:this.curMusic.id}).then((rs) => {
          if (rs.code==200) {
            console.log(rs)
            var lyricD = rs.lrc.lyric.split("\n");
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
    // 获取dom audio对象
    // getAudio() {
    //   this.audioobj = document.getElementById("music-audio");
    //   let a = document.querySelector("audio");
    //   if (a != null) {
    //     a.load();
    //     var that = this;
    //     a.onloadedmetadata = function () {
    //       that.playInfo.max = Number(a.duration.toFixed(1));
    //     };
    //     a.oncanplay = function () {
    //       a.play();
    //       that.isplay = true;
    //       // 拖动播放时，时间调整为歌曲现在播放时间，清除定时器，重新开始定时器
    //       that.playInfo.nowtime = a.currentTime;
    //       clearInterval(that.timer);
    //       that.timer = setInterval(() => {
    //         that.playInfo.nowtime += 0.1;
    //       }, 100);
    //     };
    //   } else {
    //   }
    // },
    // 播放/暂停
    // handlePlay() {
    //   this.getAudio();
    //   if (this.isplay) {
    //     this.audioobj.pause();
    //     document
    //       .querySelector("img.imgrotate")
    //       .setAttribute("style", "animation-play-state: paused");
    //     clearInterval(this.timer);
    //   } else {
    //     this.audioobj.play();
    //     document
    //       .querySelector("img.imgrotate")
    //       .setAttribute("style", "animation-play-state: running");
    //     this.timer = setInterval(() => {
    //       this.playInfo.nowtime += 0.1;
    //     }, 100);
    //   }
    //   this.isplay = !this.isplay;
    // },
    // 获取歌词
    // getLyric() {
    //   // http.getLyric({id:this.curMusic.id}).then((rs) => {
    //   // if (rs.code==200) {
    //   let lrc = "[00:00.000] 作词 : 都智文/浅紫\n[00:01.000] 作曲 : 都智文\n[00:02.000] 编曲 : 游政豪\n[00:03.000] 制作人 : 浅紫\n[00:25.41] every day， every night， i miss you\n[00:31.98]遥远未来的你我\n[00:37.56]你陪在我身边的时候\n[00:44.25]能否有你的拥抱\n[00:50.61]爱情来临的时候\n[00:56.88]如果能让我知道\n[01:02.97]相信有一天你微笑出现\n[01:09.84]会给我最美的遇见\n[01:24.90] every day， every night， i miss you\n[01:31.35]如果爱为我降落\n[01:36.93]像星火燎原在我心中\n[01:43.80]一种温热的感受\n[01:50.13]爱情离开的时候\n[01:56.37]不要放开我的手\n[02:02.61]也许某一天你真的出现\n[02:09.39]我相信会和你遇见\n[02:12.99]如果说人群中遇见你\n[02:18.24]你是否看清我会认出我\n[02:23.823] 配唱制作人 : 梁文灏\n[02:29.622] 录音师 : king\n[02:35.421] 录音室 : 启动音乐\n[02:41.220] 吉他 : 陈怀恩\n[02:47.019] 和声 : 汤天宙\n[02:52.818] 混音师 : 时俊峰\n[02:58.617] 混音室 : 福达录音棚\n[03:04.416] 封面设计 : 白汐（刘亚杰）/宁宁（黄敬静）\n[03:10.215] 监制 : 浅紫\n[03:16.014] 歌曲版权公司：众匠（北京）文化传媒有限公司\n[03:21.813] （未经著作权人许可，不得翻唱、翻录或使用）\n"

    //   var lyricD = lrc.split("\n");

    //   var timeArr = [];
    //   var lyricArr = [];
    //   lyricD.forEach((item, key) => {
    //     let curArr = item.slice(1).split("]");
    //     // 把01:00.23 转换为秒,
    //     timeArr.push(curArr[0]);
    //     lyricArr[key] = curArr[1] || "";
    //   });
    //   this.$set(this.curMusic, "lyric", lyricArr);
    //   this.$set(this.curMusic, "lyricTime", timeArr);
    //   //       }
    //   //     })
    //   //     .catch((err) => {
    //   //       console.log(err);
    //   //     });
    // },
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
    // // 监听播放时间，到总时长自动切换下一曲
    // "playInfo.nowtime": function () {
    //   if (this.playInfo.nowtime === this.playInfo.max) {
    //     // 时间到了最终时间，清除定时器，停止增加时间
    //     clearInterval(this.timer);
    //     this.playInfo.nowtime = 0;
    //     this.handleNextMusic();
    //   }
    // },
    // 监听现在播放时间，滚动歌词
    // currtime: function () {
    //   var i = this.curMusic.lyricTime.findIndex((item) => {
    //     return item.indexOf(this.currtime) != -1;
    //   });
    //   // 第i个设置on transform i*16
    //   if (i !== -1) {
    //     document
    //       .querySelector(".music-lyric")
    //       .setAttribute(
    //         "style",
    //         "transition: -webkit-transform 0.25s ease-out 0.1s;transform:translateY(-" +
    //         i * 16 +
    //         "px)"
    //       );
    //     if (document.querySelector("span.on") !== null) {
    //       document.querySelector("span.on").className = "";
    //     }
    //     document.querySelector(".music-lyric").children[i].className = "on";
    //   }
    // },
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
};
</script>
  
<style lang="scss" scoped>
html,
body,
#app {
  height: 100%;
  width: 100%;
}
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
  padding: 0 10px;
  overflow-y: auto;
  transition: max-height 0.3s ease-in-out;
  > div {
    // padding-bottom: 15px;
  }
}
.currentLi {
  color: skyblue;
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
  background-color: #ffe100;
  // color: #fff;
}
.line {
  display: block;
  height: 1px;
  background-color: #dcdfe6;
  width: 100%;
}
/*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/
::-webkit-scrollbar {
  width: 6px;
  height: 6px;
  background-color: #295252;
  border-radius: 10px;
}

/*定义滚动条轨道 内阴影+圆角*/
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  background-color: #295252;
}

/*定义滑块 内阴影+圆角*/
::-webkit-scrollbar-thumb {
  border-radius: 10px;
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
  background-color: #d6cfcf;
}
.el-divider--horizontal {
  margin: 0px;
}
.yinyue {
  width: 60%;
  min-width: 1170px;
  max-width: 1170px;
  height: 100%;
  margin: 0 auto;
  flex-direction: column;

  .yinyue_top {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 800px;
  }

  .yinyue_top_left {
    width: 300px;

    div {
      height: 300px;
      background-color: tan;
      border-radius: 10px 10px 0 0;
      text-align: center;
      background: url("../../component/webMusicCom/img/singlecover.png") no-repeat center;
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
  }

  .yinyue_top_con_geci {
    margin: 20px 0;
    font-size: 18px;
  }
}

.music-container {
  width: 100%;
}

.music-pic {
  height: 180px;
  background-color: tan;
  border-radius: 10px 10px 0 0;
  text-align: center;
  background: url("../../component/webMusicCom/img/singlecover.png") no-repeat center;
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
  background-color: #ffe100;
  border-radius: 0 0 10px 10px;

  div.music-title div span {
    display: block;
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  div.music-title-name>div:nth-child(1)>span:nth-child(2) {
    font-size: 12px;
  }

  div.music-title>svg {
    flex: 1;
  }

  div.music-title>div {
    flex: 3;
  }
}

.music-content>div {
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.music-process>span {
  flex: 1;
  text-align: center;
}

.music-process>div {
  flex: 3;
}

.music-control>svg {
  flex: 1;
}

.music-control>div {
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

  // max-height: 400px;
  span {
    height: 30px;
    font-size: 16px;
  }
}

.on {
  color: #31c27c;
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
  