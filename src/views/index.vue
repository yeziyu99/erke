<template>
  <div>
    <!-- 头部 -->
    <publicHeader  id="toTop"/>
    <!-- 1231231 -->
    <div class="page">
      <router-view></router-view>
    </div>
    <!-- 底部 -->
    <question v-if="isQuestion" />
    <publicFoot />
    <publicFooter />
    <!-- 一箭到顶 -->
    <div class="site-scrolltop" :style="{display:scrollTop>=100?'block':'none'}">
      <a title="to top" class="toTop" @click="toTop"></a>
    </div>
  </div>
</template>

<script>
import publicHeader from "@/component/publicHeader";
import publicFoot from "@/component/publicFoot";
import publicFooter from "@/component/publicFooter";
import question from "@/component/question";
export default {
  data() {
    return {
      isQuestion: false,
      scrollTop:'none'
    };
  },
  components: {
    publicHeader, publicFoot, publicFooter, question
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
      let timer = setInterval(function(){
        then.scrollTop =then.scrollTop-50;
        if(then.scrollTop>0){
          window.scrollTo(0,then.scrollTop)
        }if(then.scrollTop<0){
          window.scrollTo(0,0)
          clearInterval(timer)
        }
      },10)
    },
    handleScrollx(){
      this.scrollTop=window.pageYoffset || document.documentElement.scrollTop || document.body.scrollTop;
    }
  },
  created() {
    this.handleScrollx()
  },
  mounted() {
    this.isQuestionData()
    window.addEventListener('scroll',this.handleScrollx,true)
  },
  watch: {
    $route (oldValue, value) {
      if(oldValue.name !== value.name) {
        this.isQuestionData()
      }
    }
  }
};
</script>

<style lang="scss" scoped>
  @media screen and (min-width: 1000px) {
    .page {
      min-width: 1200px;
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
      z-index: 10;
    }
    .toTop {
      background: url('../assets/font/totop.svg')no-repeat 50%/25px;
      filter:none;
      -webkit-filter:none;
      height: 100%;
      display: block !important;
      background-size: 18px 19px;
    }
}

@media screen and (max-width: 1000px) {
  .page {
    // min-width: 750px;
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
</style>
