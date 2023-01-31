<template>
  <div class="big_wrap" ref="page">
    <div class="homepage_banner">
      <div class="home_header">
        <div class="head_con">
          <div class="banner_left">
            <h2 class="font_Bold logo_title">
              <img  src="@/assets/images/logo.png" style="" @click="jumpFun('home')" alt="" />
              <span class="">
                周二珂
              </span>
            </h2>
            <h4 style="margin-bottom: 90px; font-size: 20px;text-indent:20px" class="">
              人美、气质好、唱歌又好听，为人低调和善，但却挡不住她急剧上升的人气。在一个歌荒的寂寞时间，周二珂简直是甜歌小公主，那一刻，让你的心暖暖的。
            </h4>
            <div class="banner_btn">
              <div @click="externalJumpFn('https://www.douyu.com/78622')" class="btn_one" v-if="erkeLive!=200">未开播～</div>
              <a @click="externalJumpFn('https://www.douyu.com/78622')" v-if="erkeLive==200">
                <img src="@/assets/images/douyu.png" alt="" />
                开播中...</a>
            </div>
            <p>显示的图像仅用于展示作用</p>
          </div>
        </div>
        <div class="home_bg">
          <div style=" max-width: 230px; flex: 1;margin: 0 auto;position: relative;">
            <div>
              <div class="inset_bg">
                <div class="bg-semicircle"></div>
                <div class="bg_ball"></div>
                <div class="bg_ball_solid"></div>
              </div>
              <div class="video_wrap" @click="externalJumpFn('https://www.douyu.com/78622')">
                <div class="animate-wave">
                  <img class="logo" src="https://img.douyucdn.cn/data/yuba/weibo/2023/01/29/202301291721386043550652722.png" alt="">
                  <div class="w2"></div>
                  <div class="w3"></div>
                  <div class="w4"></div>
                  <div class="w5"></div>
                  <div class="w6"></div>
                  <div class="w7"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="home_content">
      <div class="content_img">
        <h2 class="font_Bold">二珂个人社交平台</h2>
        <div class="three_img">
          <div class="content_item" @click="externalJumpFn('https://www.douyu.com/78622')">
            <div>
              <img :src="dyhead"
                alt="https://www.douyu.com/78622">
            </div>
            <p>二珂78622@斗鱼</p>
          </div>
          <div class="content_item" @click="externalJumpFn('https://weibo.com/u/1910672761')">
            <div>
              <img
                :src="wbhead"
                alt="https://weibo.com/u/1910672761?topnav=1&wvr=6&topsug=1">
            </div>
            <p>二珂Chloe@微博</p>
          </div>
          <div class="content_item"
            @click="externalJumpFn('https://www.xiaohongshu.com/user/profile/5ad78361e8ac2b1fca15ff66')">
            <div>
              <img
                :src="wbhead"
                alt="https://www.xiaohongshu.com/user/profile/5ad78361e8ac2b1fca15ff66?xhsshare=CopyLink&appuid=609b9c340000000001004f33&apptime=1667552951">
            </div>
            <p>二珂@小红书</p>
          </div>
        </div>
      </div>
      <div class="invest_title">
        <!-- <div> -->
        <p class="title_wrapper">部分图片展示</p>
        <h2 class="font_Bold">
          二珂微博发布的个别图片展示
        </h2>
        <!-- </div> -->
      </div>
      <!-- invest_bg -->
      <div class=" customize-container">
        <!-- invest_bg_con -->
        <div class=" customize" :class="{ isFixed: barFixed, invest: true }" :style="myStyle">
          <div class="container">
            <!-- invest_bg_title font_Bold -->
            <div class=" customize-bg-container" :style="{ backgroundSize: containerBack + '%' }">
              <div class="customize-wrapper" style="position: relative">
                <p  class="font-size-24 font-weight-700 mg-lt-30">
                  无意间遇见，就确定了永远~
                </p>
                <div class="invest_img">
                  <div class="img_left">
                    <el-image class="left1 img_border" :src="vv.v1"
                      fit="cover" alt="" />
                    <el-image class="left2 img_border" :src="vv.v2"
                      fit="cover" alt="" />
                    <el-image class="left3 img_border" :src="vv.v3"
                      fit="cover" alt="" />
                  </div>
                  <div class="img_phone">
                    <el-image class="img_border img_borders" :src="vv.v7"
                      fit="cover" alt="" />
                  </div>
                  <div class="img_right">
                    <el-image class="right1 img_border" :src="vv.v4"
                      fit="cover" alt="" />
                    <el-image class="right2 img_border" :src="vv.v5"
                      fit="cover" alt="" />
                    <el-image class="right3 img_border" :src="vv.v6"
                      fit="cover" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div ref="placeholder" class="customize-placeholder"
          :style="{ height: clientHeight + 'px' }"></div>
      </div>
      <div class="mobile_intro_swiper">
        <div class="swiper_left">
          <div class="swiper-left-text">
            <div class="swiper-wrapper">
              <h3 class="swiper-slide font_Bold">二珂&三岛</h3>
              <h3 class="swiper-slide font_Bold">
                滑雪装
              </h3>
            </div>
          </div>

          <div class="swiper-container linear">
            <div class="swiper-wrapper">
              <div class="swiper-slide" :key="index" v-for="(item,index) in ekLeftList">
                <img :src="item" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div class="swiper_right">
          <div :class="{ active: rightIndex === 1 }">
            <div class="swiper-right-text">
              <div class="swiper-wrapper">
                <h3 class="swiper-slide font_Bold">2022新图</h3>
                <h3 class="swiper-slide font_Bold">盛世美颜</h3>
              </div>
            </div>
            <div class="swiper-containerTwo">
              <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(item, index) in imageSrcs" :key="index">
                  <img :src="item" alt="" />
                </div>
              </div>
              <div class="swiper-pagination mg-lt-30"></div>
            </div>
          </div>
        </div>
      </div>
      <p>显示的图像仅用于展示作用</p>
      <div class="home_pounce">
        <div class="pounce_title">
          <p class="title_wrapper">
            写真 && 生活照部分展示
          </p>
          <h2 class="font_Bold">
            取图 微博 二珂&&三岛
          </h2>
        </div>
        <div class="pounce_content">
          <div class="pounce_left">
            <div>
              <ul>
                <li v-for="(item, index) in pictureList" :key="index" :class="{ active: index == activeIndex }"
                  @click="changeActiveSwiper(index)">
                  {{ item.album_desc }}
                  <a v-if="item.href" :href="item.href" class="font_Bold">🛫️</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="pounce_right">
            <div class="swiper-containerfour">
              <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(item, index) in pictureList" :key="index">
                  <!-- <el-image class="swiper-img" :src="item.cover_img" :preview-src-list="item.img_urls" :index="index"
                    fit="cover"></el-image> -->
                  <img class="swiper-img" :src="item.cover_img" alt="">
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="foot_btn" @click="externalJumpFn('https://weibo.com/u/1910672761')">查看更多</div>
      </div>
    </div>
    <!-- 优质UP主推荐 -->
    <div class="home_foot">
      <div class="foot_con">
        <div class="foot_title font_Bold">优质UP主推荐</div>
        <ul class="foot_list">
          <li class="list_item" v-for="(item, index) in supportLinks" :key="index">
            <img :src="item.imgUrl" :alt="item.title" />
            <h2> {{ item.title }} </h2>
            <ul class="foot_list_item" v-for="(val, i) in item.children" :key="i">
              <li @click="externalJumpFn(val.herf)">
                <el-tag size="small" class="tag pointer mg-bt-10">
                  <span v-if="val.type == 'bili'" style="color:palevioletred">哔哩哔哩</span>
                  <span v-if="val.type == 'dy'" style="color:#000">抖音</span>
                  <span v-if="val.type == 'sing'" style="color:#00BBB3">5Sing</span>
                  <span v-if="val.type == 'wyy'" style="color:red">网易云</span>
                  -- {{ val.name }}
                </el-tag>
              </li>
            </ul>
          </li>
        </ul>
        <div class="foot_btn" @click="jumpFun('support')">查看更多</div>
      </div>
    </div>
  </div>
</template>
   
<script>
import "swiper/css/swiper.min.css";
import { supportLink,pictureList } from "@/utils/support.js";
import erkeI from "@/assets/images/erkeI.png";
import erkeV from "@/assets/images/erkeV.png";
import dyhead from "@/assets/images/dyhead.png";
import wbhead from "@/assets/images/wbhead.png";
import v1 from "@/assets/home/top/1.png";
import v2 from "@/assets/home/top/2.png";
import v3 from "@/assets/home/top/3.png";
import v4 from "@/assets/home/top/4.png";
import v5 from "@/assets/home/top/5.png";
import v6 from "@/assets/home/top/6.png";
import v7 from "@/assets/home/top/7.png";
import l1 from "@/assets/home/left/l1.png";
import l2 from "@/assets/home/left/l2.png";
import l3 from "@/assets/home/left/l3.png";
import l4 from "@/assets/home/left/l4.png";
import l5 from "@/assets/home/left/l5.png";
import l6 from "@/assets/home/left/l6.png";
import l7 from "@/assets/home/left/l7.png";
import l8 from "@/assets/home/left/l8.png";
import l9 from "@/assets/home/left/l9.png";
import l10 from "@/assets/home/left/l10.png";
import http from "@/http/service";
import Swiper from "swiper";
export default {
  data() {
    return {
      vv:{
        v1:'https://img.douyucdn.cn/data/yuba/weibo/2023/01/29/202301291738328674805332466.580x0.png',
        v2:'https://img.douyucdn.cn/data/yuba/weibo/2023/01/29/202301291739587934172479369.580x0.png',
        v3:'https://img.douyucdn.cn/data/yuba/weibo/2023/01/29/202301291740441564456501936.580x0.png',
        v4:'https://img.douyucdn.cn/data/yuba/weibo/2023/01/29/202301291741099980187137568.580x0.png',
        v5:'https://img.douyucdn.cn/data/yuba/weibo/2023/01/29/202301291741466346082477334.580x0.png',
        v6:'https://img.douyucdn.cn/data/yuba/weibo/2023/01/29/202301291742187461269183839.580x0.png',
        v7:'https://img.douyucdn.cn/data/yuba/weibo/2023/01/29/202301291742475589446201300.580x0.png',
      },
      ekLeftList:[
        'https://img.douyucdn.cn/data/yuba/weibo/2023/01/29/202301291654065627224646997.580x0.png',
        'https://img.douyucdn.cn/data/yuba/weibo/2023/01/29/202301291701064549801064309.580x0.png',
        'https://img.douyucdn.cn/data/yuba/weibo/2023/01/29/202301291701422273822708637.580x0.png',
        'https://img.douyucdn.cn/data/yuba/weibo/2023/01/29/202301291702064534517015489.580x0.png',
        'https://img.douyucdn.cn/data/yuba/weibo/2023/01/29/202301291708124074405665696.580x0.png',
        'https://img.douyucdn.cn/data/yuba/weibo/2023/01/29/202301291709127003136243706.580x0.png',
        'https://img.douyucdn.cn/data/yuba/weibo/2023/01/29/202301291709442800825856161.580x0.png',
        'https://img.douyucdn.cn/data/yuba/weibo/2023/01/29/202301291710129561712583672.580x0.png',
        'https://img.douyucdn.cn/data/yuba/weibo/2023/01/29/202301291710474549124381053.580x0.png',
        'https://img.douyucdn.cn/data/yuba/weibo/2023/01/29/202301291711144290885696046.580x0.png',
        'https://img.douyucdn.cn/data/yuba/weibo/2023/01/29/202301291711452634071577250.580x0.png',
        'https://img.douyucdn.cn/data/yuba/weibo/2023/01/29/202301291712122758329118808.580x0.png'
      ],
      erkeLive:false,
      pictureList:pictureList,
      pictureLists:[],
      dyhead:dyhead,
      wbhead:wbhead,
      barFixed: false,
      containerBack: 45,
      myStyle: {},
      scrollTop: 0,
      scrollEndPosition: 0,
      headNavHeight: 0,
      scrollStartPosition: 0,
      clientHeight: 0,
      imageScrollHeight: 0,
      imageHeight: 0,
      imageScrollWrapperHeight: 0,
      supportLink: supportLink,
      supportLinks: [],
      pictureList:pictureList,
      rightIndex: 0,
      activeIndex: 1,
      imageSrcs: [erkeV, erkeI],
      img_url:'https://api.erkechloe.com/upload/'
    };
  },
  components: {},
  methods: {
    handleScroll(e) {
      this.headNavHeight =
        document.getElementsByClassName("publicHeader")[0].offsetHeight; //导航的高度
      this.scrollStartPosition =
        this.$refs.placeholder.getBoundingClientRect().top-this.headNavHeight ; //距离顶部的高度
      this.scrollTop = window.pageYOffset;
      this.scrollEndPosition =
        this.scrollStartPosition +
        this.clientHeight -
        document.documentElement.clientHeight +
        this.headNavHeight;
      if (this.scrollStartPosition <= 0 && this.scrollEndPosition >= 0) {
        this.oldScrollTop = document.documentElement.scrollTop;
        this.clientHeight = document.documentElement.clientHeight + 2200;
        const imageScrollOffset = this.scrollTop - this.scrollStartPosition;
        this.barFixed = true;
        this.myStyle = {
          position: "fixed",
          top: 0+ "px",
          bottom: "0px",
        };
        this.containerBack = `${
          (imageScrollOffset /
            (this.clientHeight + document.documentElement.clientHeight+1700)) *
            100 +
          70
        }`;
      } else {
        this.barFixed = false;
        this.myStyle = {
          position: "absolute",
          top: '0',
          bottom: "0",
        };
      }
      if (this.scrollTop < this.scrollStartPosition) {
        this.myStyle = {
          position: "absolute",
          top: "0",
          bottom: "0",
        };
        this.containerBack = 70;
      }
      if(this.scrollTop > (this.scrollEndPosition+this.clientHeight+170)){
        this.myStyle = {
          position: "absolute",
          top: "auto",
          bottom: "0",
        };
      }
    },
    externalJumpFn(value) {
      window.open(value)
    },
    jumpFun(route) {
      if (this.$route.name != route) {
        this.$router.push(route);
      }
    },
    // 点击切换轮播增加样式/Click Toggle Cast to add style
    changeActiveSwiper(index) {
      // 保存下标/Save the index
      this.activeIndex = index;
      // 切换轮播图/Swiper
      this.mySwiper.slideTo(this.activeIndex + 1);
    },
  },
  created() { },
  mounted() {
    let thes=this;
    thes.pictureList.forEach((item,index)=>{
      item.cover_img=item.is_loc_url==1?thes.img_url+item.cover_img_id:item.cover_img_id;
      item.img_urls=[];
      item.children.forEach((val,ind)=>{
        item.img_urls.push(item.is_loc_url==1?thes.img_url+val.img_url:val.img_url)
      })
    })
    http.getLive().then(rs => {
        this.loading = false
        if (rs.code == 200) {
          this.erkeLive=rs.datas.status
        } else {
        }
      })
    
    const headNavHeight =
      document.getElementsByClassName("publicHeader")[0].offsetHeight; // 导航高度
    let placeholderElementTop = document.getElementsByClassName(
      "customize-placeholder"
    )[0].offsetTop; // 占位元素顶部距离
    const scrollStartPosition = placeholderElementTop - headNavHeight; // 滚动开始位置
    const scrollEndPosition = scrollStartPosition + 100;
    // 占位元素高度: 图片高度 + 固定容器高度 - 滚动区域高度
    const pageHeight = document.documentElement.clientHeight - headNavHeight;
    this.placeholderHeight = 100 + pageHeight;
    this.clientHeight = document.documentElement.clientHeight + 1200;
    let that = this;
    window.onresize = function () {
      that.clientHeight = document.documentElement.clientHeight;
      if (that.$refs.page) {
        that.$refs.page.style.minHeight = clientHeight - 1000 + "px";
      }
    };
    window.addEventListener("scroll", this.handleScroll,true);
    this.supportLinks.push(this.supportLink[1])
    this.supportLinks.push(this.supportLink[2])
    this.supportLinks.push(this.supportLink[3])
    let _this = this;
    //  有问题可以看swiper文档/swiper documents
    new Swiper(".swiper-container", {
      observer: true,
      observeSlideChildren: true,
      // observeParents: true,  //这三个可以去文档看下介绍，主要就是异步情况会重新加载swiper。
      loop: true, //开启环路
      speed: 2000, //每个轮播图过渡的时间
      spaceBetween: -15, //每个轮播图间隔
      slidesPerView: 2, //当前页面显示几个，这里是auto
      loopedSlides: 6, //比你页面显示的数量大于2就好
      updateOnWindowResize: false, //分辨率改变时，防止样式错乱加上！
      autoplay: {
        delay: 0, //每循环一圈，间隔时间，无缝轮询，则为0
        stopOnLastSlide: false,
        disableOnInteraction: false,
      }
    });
    new Swiper(".swiper-left-text", {
      direction: "vertical", // 垂直切换选项
      slidesPerView: 1, //当前页面显示几个，这里是auto
      autoplay: {
        delay: 2000,
      },
    });
    this.swiper_right_text = new Swiper(".swiper-right-text", {
      direction: "vertical", // 垂直切换选项
      slidesPerView: 1, //当前页面显示几个，这里是auto
      loop: true,
    });
    new Swiper(".swiper-containerTwo", {
      speed: 2000,
      autoplay: {
        //自动开始
        delay: 2000, //时间间隔
        disableOnInteraction: false, //*手动操作轮播图后不会暂停*
      },
      loop: true, // 循环模式选项
      // 如果需要分页器
      pagination: {
        el: ".swiper-pagination",
        clickable: true, // 分页器可以点击
      },
      on: {
        slideChangeTransitionStart: function () {
          // 获得下标
          _this.rightIndex = this.activeIndex - 1;
          let img_right = document.querySelector('.swiper-containerTwo .swiper-slide-prev img')
          if (img_right) {
            img_right.className = 'active_img'
          }
          if (_this.rightIndex === 2) {
            _this.rightIndex = 0;
          }
          _this.swiper_right_text.slideTo(_this.rightIndex + 1);
        },
        slideChangeTransitionEnd: function () {
          let img_right = document.querySelector('.swiper-containerTwo .swiper-slide-prev img')
          if (img_right) {
            img_right.className = '';
          }
        },
      },
    });
    this.mySwiper = new Swiper(".swiper-containerfour", {
      speed: 2000,
      autoplay: {
        //自动开始
        delay: 2000, //时间间隔
        disableOnInteraction: false, // 手动操作轮播图后不会暂停
      },
      // slidesPerView: 'auto',
      loop: true, // 循环模式选项
      slidesPerView: 1,
      spaceBetween: 5,
      on: {
        slideChange: function () {
          // 获得下标
          _this.activeIndex = this.activeIndex - 1;
          if (_this.activeIndex === 6) {
            _this.activeIndex = 0;
          }
        },
      },
    });
  },
  watch: {
    clientHeight(lod, lo) {
    }
  }
};
</script>

<style lang="scss" scoped>

</style>
  