<template>
  <div class="" ref="page">
    <live />
    <!-- <div class="home_content">
      <thatPerson />
      <div class="invest_title">
        <p class="title_wrapper">部分图片展示</p>
        <h2 class="font_Bold">二珂微博发布的个别图片展示</h2>
      </div>
      <div class="customize-container">
        <div
          class="customize"
          :class="{ isFixed: barFixed, invest: true }"
          :style="myStyle"
        >
          <div class="container">
            <div
              class="customize-bg-container"
              :style="{ backgroundSize: containerBack + '%' }"
            >
              <div class="customize-wrapper" style="position: relative">
                <p class="font-size-24 font-weight-700 mg-lt-30">
                  {{ bgImgList.title }}
                </p>
                <div class="invest_img">
                  <div class="img_left">
                    <el-image
                      class="left1 img_border"
                      lazy
                      :src="
                        imgDetails.imgHead +
                        bgImgList.left1 +
                        imgDetails.imgSize580 +
                        imgDetails.imgSuffixpng
                      "
                      :preview-src-list="[
                        imgDetails.imgHead + bgImgList.left1 + imgDetails.imgSuffixpng,
                      ]"
                      fit="cover"
                      alt=""
                    />
                    <el-image
                      class="left2 img_border"
                      lazy
                      :src="
                        imgDetails.imgHead +
                        bgImgList.left2 +
                        imgDetails.imgSize580 +
                        imgDetails.imgSuffixpng
                      "
                      :preview-src-list="[
                        imgDetails.imgHead + bgImgList.left2 + imgDetails.imgSuffixpng,
                      ]"
                      fit="cover"
                      alt=""
                    />
                    <el-image
                      class="left3 img_border"
                      lazy
                      :src="
                        imgDetails.imgHead +
                        bgImgList.left3 +
                        imgDetails.imgSize580 +
                        imgDetails.imgSuffixpng
                      "
                      :preview-src-list="[
                        imgDetails.imgHead + bgImgList.left3 + imgDetails.imgSuffixpng,
                      ]"
                      fit="cover"
                      alt=""
                    />
                  </div>
                  <div class="img_phone">
                    <el-image
                      class="img_border img_borders"
                      lazy
                      :src="
                        imgDetails.imgHead +
                        bgImgList.center +
                        imgDetails.imgSize580 +
                        imgDetails.imgSuffixpng
                      "
                      :preview-src-list="[
                        imgDetails.imgHead + bgImgList.center + imgDetails.imgSuffixpng,
                      ]"
                      fit="cover"
                      alt=""
                    />
                  </div>
                  <div class="img_right">
                    <el-image
                      class="right1 img_border"
                      lazy
                      :src="
                        imgDetails.imgHead +
                        bgImgList.right1 +
                        imgDetails.imgSize580 +
                        imgDetails.imgSuffixpng
                      "
                      :preview-src-list="[
                        imgDetails.imgHead + bgImgList.right1 + imgDetails.imgSuffixpng,
                      ]"
                      fit="cover"
                      alt=""
                    />
                    <el-image
                      class="right2 img_border"
                      lazy
                      :src="
                        imgDetails.imgHead +
                        bgImgList.right2 +
                        imgDetails.imgSize580 +
                        imgDetails.imgSuffixpng
                      "
                      :preview-src-list="[
                        imgDetails.imgHead + bgImgList.right2 + imgDetails.imgSuffixpng,
                      ]"
                      fit="cover"
                      alt=""
                    />
                    <el-image
                      class="right3 img_border"
                      lazy
                      :src="
                        imgDetails.imgHead +
                        bgImgList.right3 +
                        imgDetails.imgSize580 +
                        imgDetails.imgSuffixpng
                      "
                      :preview-src-list="[
                        imgDetails.imgHead + bgImgList.right1 + imgDetails.imgSuffixpng,
                      ]"
                      fit="cover"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          ref="placeholder"
          class="customize-placeholder"
          :style="{ height: clientHeight + 'px' }"
        ></div>
      </div>
      <div class="mobile_intro_swiper">
        <div class="swiper_left">
          <div class="swiper-left-text">
            <div class="swiper-wrapper">
              <h3 class="swiper-slide font_Bold">二珂&三岛</h3>
              <h3 class="swiper-slide font_Bold">滑雪装</h3>
            </div>
          </div>

          <div class="swiper-container linear">
            <div class="swiper-wrapper">
              <div class="swiper-slide" :key="index" v-for="(item, index) in ekLeftList">
                <el-image
                  :src="
                    imgDetails.imgHead +
                    item +
                    imgDetails.imgSize580 +
                    imgDetails.imgSuffixpng
                  "
                  lazy
                  fit="cover"
                  alt=""
                />
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
          <p class="title_wrapper">写真 && 生活照部分展示</p>
          <h2 class="font_Bold">取图 微博 二珂&&三岛</h2>
        </div>
        <div class="pounce_content">
          <div class="pounce_left">
            <div>
              <ul>
                <li
                  v-for="(item, index) in pictureList"
                  :key="index"
                  :class="{ active: index == activeIndex }"
                  @click="changeActiveSwiper(index)"
                >
                  {{ item.album_desc }}
                  <a class="img_ico" title="点击查看详情" @click="jumpFun('photo')">
                    <img src="~@/assets/images/faviconx.png" alt="站内查看" />
                  </a>
                  <a
                    v-if="item.href"
                    @click="externalJumpFn(item.href)"
                    class="img_ico"
                    title="微博查看原文"
                    >🛫️</a
                  >
                </li>
              </ul>
            </div>
          </div>
          <div class="pounce_right">
            <div class="swiper-containerfour">
              <div class="swiper-wrapper">
                <div
                  class="swiper-slide"
                  v-for="(item, index) in pictureLists"
                  :key="index"
                  ref="abcd"
                >
                  <img class="swiper-img" :src="item" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="foot_btn" @click="externalJumpFn('https://weibo.com/u/1910672761')">
          查看更多
        </div>
      </div>
    </div> -->
    <!-- 优质UP主推荐 -->
    <upMain :supportLink="support.supportLink" />
  </div>
</template>

<script>
import "swiper/css/swiper.min.css";
import support from "@/utils/support.js";
import erkeI from "@/assets/images/erkeI.png";
import erkeV from "@/assets/images/erkeV.png";
import dyhead from "@/assets/images/dyhead.png";
import wbhead from "@/assets/images/wbhead.png";
import live from "./live.vue";
import upMain from "./upMain.vue";
import thatPerson from "./thatPerson.vue";

import http from "@/http/service";
import Swiper from "swiper";
export default {
  data() {
    return {
      support: support,
      imgDetails: support.imgDetails,
      //中间一片
      bgImgList: {
        left1: "/2023/01/29/202301291738328674805332466",
        left2: "/2023/01/29/202301291739587934172479369",
        left3: "/2023/01/29/202301291740441564456501936",
        right1: "/2023/01/29/202301291741099980187137568",
        right2: "/2023/01/29/202301291741466346082477334",
        right3: "/2023/01/29/202301291742187461269183839",
        center: "/2023/01/29/202301291742475589446201300",
        title: "无意间遇见，就确定了永远~",
      },
      //滑雪装 单独整套写真
      ekLeftList: [
        "/2023/01/29/202301291654065627224646997",
        "/2023/01/29/202301291701064549801064309",
        "/2023/01/29/202301291701422273822708637",
        "/2023/01/29/202301291702064534517015489",
        "/2023/01/29/202301291708124074405665696",
        "/2023/01/29/202301291709127003136243706",
        "/2023/01/29/202301291709442800825856161",
        "/2023/01/29/202301291710129561712583672",
        "/2023/01/29/202301291710474549124381053",
        "/2023/01/29/202301291711144290885696046",
        "/2023/01/29/202301291711452634071577250",
        "/2023/01/29/202301291712122758329118808",
      ],
      // erkeLive: false,
      pictureLists: support.pictureLists,
      dyhead: dyhead,
      wbhead: wbhead,
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
      pictureList: support.pictureList,
      rightIndex: 0,
      activeIndex: 1,
      imageSrcs: [erkeV, erkeI],
      img_url: "https://api.erkechloe.com/upload/",
    };
  },
  components: { live, upMain, thatPerson },
  methods: {
    handleScroll(e) {
      let clientHeight = document.documentElement.clientHeight || 0;
      let publicHeaderLeft = document.getElementsByClassName("publicHeader")[0];
      if (!publicHeaderLeft) {
        return;
      }
      let placeholderDome = this.$refs.placeholder;
      this.headNavHeight = document.getElementsByClassName(
        "publicHeader"
      )[0].offsetHeight; //导航的高度
      this.scrollStartPosition = placeholderDome
        ? placeholderDome.getBoundingClientRect().top
        : "0" - this.headNavHeight; //距离顶部的高度
      this.scrollTop = window.pageYOffset;
      this.scrollEndPosition =
        this.scrollStartPosition + this.clientHeight - clientHeight + this.headNavHeight;
      if (this.scrollStartPosition <= 0 && this.scrollEndPosition >= 0) {
        this.oldScrollTop = document.documentElement.scrollTop;
        this.clientHeight = clientHeight + 2200;
        const imageScrollOffset = this.scrollTop - this.scrollStartPosition;
        this.barFixed = true;
        this.myStyle = {
          position: "fixed",
          top: 0 + "px",
          bottom: "0px",
        };
        this.containerBack = `${
          (imageScrollOffset / (this.clientHeight + clientHeight + 1700)) * 100 + 70
        }`;
      } else {
        this.barFixed = false;
        this.myStyle = {
          position: "absolute",
          top: "0",
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
      if (this.scrollTop > this.scrollEndPosition + this.clientHeight + 170) {
        this.myStyle = {
          position: "absolute",
          top: "auto",
          bottom: "0",
        };
      }
    },
    externalJumpFn(value) {
      window.open(value);
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
  created() {},
  mounted() {
    // http.getLive().then((rs) => {
    //   this.loading = false;
    //   if (rs.code == 200) {
    //     console.log(rs);
    //     this.erkeLive = rs.datas.status;
    //   } else {
    //   }
    // });
    let clientHeight = document.documentElement.clientHeight || 0;
    const headNavHeight = document.getElementsByClassName("publicHeader")[0].offsetHeight; // 导航高度

    let customizeplaceholder = document.getElementsByClassName(
      "customize-placeholder"
    )[0];
    let placeholderElementTop = customizeplaceholder ? customizeplaceholder.offsetTop : 0; // 占位元素顶部距离
    const scrollStartPosition = placeholderElementTop - headNavHeight; // 滚动开始位置
    const scrollEndPosition = scrollStartPosition + 100;
    // 占位元素高度: 图片高度 + 固定容器高度 - 滚动区域高度
    const pageHeight = clientHeight - headNavHeight;
    this.placeholderHeight = 100 + pageHeight;
    this.clientHeight = clientHeight + 1200;
    let that = this;
    window.onresize = function () {
      that.clientHeight = clientHeight || 0;
      if (that.$refs.page) {
        that.$refs.page.style.minHeight = clientHeight - 1000 + "px";
      }
    };
    window.addEventListener("scroll", this.handleScroll, true);

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
      },
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
          let img_right = document.querySelector(
            ".swiper-containerTwo .swiper-slide-prev img"
          );
          if (img_right) {
            img_right.className = "active_img";
          }
          if (_this.rightIndex === 2) {
            _this.rightIndex = 0;
          }
          _this.swiper_right_text.slideTo(_this.rightIndex + 1);
        },
        slideChangeTransitionEnd: function () {
          let img_right = document.querySelector(
            ".swiper-containerTwo .swiper-slide-prev img"
          );
          if (img_right) {
            img_right.className = "";
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
    clientHeight(lod, lo) {},
  },
};
</script>
