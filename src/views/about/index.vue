<template>
  <div class="big_wrap">
    <div class="aboutUs_head">
      <div class="about_head_title">
        <div class="title_left">
          <div class="about_font_Bold font_Bold">非官方</div>
          <div class="about_ready">与官方无关，纯属自己做着玩，纯展示 </div>
          <div class="about_ready">有时候可能会有抽奖通告，需要你出钱的不要信,出事本站不负责 </div>
          <!-- <div class="about_ready">
            因为喜欢珂珂相聚在这里
          </div> -->
        </div>

      </div>
    </div>
    <div class="about_content">
      <p>
        因为喜欢珂珂我们相识，有资源可以联系一起分享哦～
      </p>
      <!-- 故事板块 -->
      <h1>
        我们的故事
        <span class="mg-tp-25 font-size-12 font-weight-700 color62657A text-ag-rg">（欢迎投稿）</span>
      </h1>
      <p>无意间遇见，就确定了永远~ </p>
      <h1>联系我们 <span class="mg-tp-25 font-size-12 font-weight-700 color62657A text-ag-rg">（点击下列对应标签复制）</span></h1>
      <!-- 表格-联系方式 -->
      <el-descriptions  :column="1" border>
            <el-descriptions-item v-for="(item, index) in contactUs" :key="index">
                <template slot="label">
                  <span :style="{color:item.tag=='danger'?'red':''}">
                    <el-avatar v-if="item.img" :src="item.img"></el-avatar>
                    {{item.title}}
                  </span>                  
                </template>
                  <el-tooltip class="item" effect="dark" content="点击复制" placement="bottom-start" v-for="(items, ind) in item.center" :key="ind">
                    <el-tag size="small"  :type="item.tag||''" @click="copyText(items.con)" class="mg-rg-5 pointer">{{ items.name }}</el-tag>
                  </el-tooltip>
            </el-descriptions-item>
        </el-descriptions>
    </div>
  </div>
</template>
  
<script>
import { contactUs } from "@/utils/erke.js";

export default {
  data() {
    return {
      contactUs:contactUs
    };
  },
  components: {},
  methods: {
    copyText(value){
      // 模拟 输入框
      var cInput = document.createElement("input");
      cInput.value = value;
      document.body.appendChild(cInput);
      cInput.select(); // 选取文本框内容

      // 执行浏览器复制命令
      // 复制命令会将当前选中的内容复制到剪切板中（这里就是创建的input标签）
      // Input要在正常的编辑状态下原生复制方法才会生效
      document.execCommand("copy");

      this.$message.success("复制成功!");
      // 复制成功后再将构造的标签 移除
      document.body.removeChild(cInput);
    }
  },
  created() {},
  mounted() {},
};
</script>
  
<style lang="scss" scoped>
.big_wrap {
  width: 100%;
  min-width: 1170px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
  .aboutUs_head {
    width: 100%;
    height: 325px;
    background-color: $back-primary1;
    display: flex;
    align-items: center;
    flex-direction: column;
    
    .about_head_title {
      width: 60%;
      min-width: 1170px;
      max-width: 1170px;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      background-image: url("../../assets/images/erkexh.png");
      background-repeat: no-repeat;
      background-position: bottom 0px right 0px;
      background-size: 200px 300px;

      .title_left {
        white-space: nowrap;
        // color: #fff;
        .about_font_Bold {
          font-size: 60px;
          margin-bottom: 12px;
          font-weight: 700;
        }
        .about_ready {
          font-size: 24px;
        }
      }
      .title_right {
        height: 100%;
        display: flex;
        align-items: flex-end;
        margin-right: -63px;
      }
    }
  }
  .about_content {
    width: 60%;
    min-width: 1170px;
    max-width: 1170px;
    min-height: 575px;
    padding: 80px 0 50px 0;

    p{
      font-size: 18px;
      font-weight: 700;
      font-family: Gilroy-Bold;
    }
    h1{
      font-size: 36px;
      margin-top: 60px;
      font-family: Gilroy-Bold;
    }
    div{
      margin-top: 15px;
      line-height: 1.5;
    }
  }
}
</style>
  