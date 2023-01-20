<template>
  <div class="wanzheng">
    <!-- 头部 -->
    <publicHeader  id="toTop" :class="{topNav}"/>
    <div class="page">
      <router-view></router-view>
    </div>
    <publicFoot />
    <!-- 一箭到顶 -->
    <div class="site-scrolltop" :style="{display:scrollTop>=100?'block':'none'}">
      <!-- <a title="to top" class="toTop" @click="toTop"></a> -->
      <img src="@/assets/images/erketop.gif" class="toTop" alt="to top" @click="toTop">
    </div>
  </div>
</template>

<script>
import publicHeader from "@/component/publicHeader";
import publicFoot from "@/component/publicFoot";
export default {
  data() {
    return {
      isQuestion: false,
      scrollTop:'none',
      topNav: false
    };
  },
  components: {
    publicHeader, publicFoot,
  },
  methods: {
    isQuestionData(){
      if(this.$route.name=='home'||this.$route.name=='market'){
        this.isQuestion=true
      }else{
        this.isQuestion=false
      }
    },
    toTop(){
      let then=this;
      // 路程/时间 = 速度
      let speed = then.scrollTop / 50;
      // 时间不变
      let timer = setInterval(function(){
        then.scrollTop =then.scrollTop - speed;
        if(then.scrollTop > 0){
          window.scrollTo(0, then.scrollTop)
        }if(then.scrollTop < 0){
          window.scrollTo(0,0)
          clearInterval(timer)
        }
      },10)
      // 速度不变
      // let timer = setInterval(function(){
      //   then.scrollTop =then.scrollTop-50;
      //   if(then.scrollTop>0){
      //     window.scrollTo(0,then.scrollTop)
      //   }if(then.scrollTop<0){
      //     window.scrollTo(0,0)
      //     clearInterval(timer)
      //   }
      // },10)
    },
    handleScroll () {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
    this.scrollTop=scrollTop;
    if (scrollTop >= 1) {
        this.topNav = true
      } else {
        this.topNav = false
      }
},
  },
  created() {
    this.handleScroll()
  },
  mounted() {
    this.isQuestionData()
    window.addEventListener('scroll', this.handleScroll)
  },
  watch: {
    $route (oldValue, value) {
      if(oldValue.name !== value.name) {
        this.isQuestionData()
      }
    },
  }
};
</script>

<style lang="scss" scoped>
.wanzheng{
  width: 100%;
  // background: url('../assets/images/back.png') no-repeat;
  //   background-size: 100% 100%;
  //   background-repeat: no-repeat;
  //   background-color: #000000;
  //   background-position: center top;
  //   background-attachment: fixed;
  //   background-size: cover;
}
  #toTop {
    position: sticky;
    top: 0;
    z-index: 99;
  }
  @media screen and (min-width: 1170px) {
    .page {
      min-width: 1170px;
    }
    
}
.site-scrolltop {
      display: bl;
      position: fixed;
      bottom: 70px;
      right: 20px;
      border-radius: 50%;
      background-color: #000;
      box-shadow: 0 0 20px rgb(0 0 0 / 30%), 0 0 0 1px #fff;
      height: 48px;
      width: 48px;
      z-index: 99;
    }
    .toTop {
      background: url('../assets/font/totop.svg')no-repeat 50%/25px;
      filter:none;
      -webkit-filter:none;
      height: 100%;
      display: block !important;
      background-size: 18px 19px;
      border-radius: 50%;
      width: 100%;
    }
@media screen and (max-width: 1000px) {
  .page {
      min-width: 100%;
    }
  .publicHeader,
  .publicFoot,
  .publicFooter {
    display: none;
  }
  .site-scrolltop,.toTop{
    display: none !important;
  }
}
.topNav {
  box-shadow: 0 10px 10px rgb(0 0 0 / 10%);
}
</style>
