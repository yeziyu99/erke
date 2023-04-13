<template>
  <div class="about_big_wrap background_linear">
    <div class="about_content">
      <p>
        因为喜欢珂珂我们相识，有资源可以联系一起分享哦～
      </p>
      <!-- 故事板块 -->
      <h1>
        <span class="title">
          我们的故事
        </span>
        <span class=" font-size-12 font-weight-700 color62657A text-ag-rg">（欢迎投稿）</span>
      </h1>
      <div class="about_story">
        <div class="about_story_item" v-for="(item, index) in erkeStory" :key="index">
          <h3 class="about_story_item_name">投稿人：{{ item.name }}</h3>
          <div class="about_story_item_content">
            <p v-for="(i, ind) in item.contentArr" :key="ind" v-html="i">
            </p>
          </div>
          <hr>
          <br>
        </div>
      </div>
      <h1>
        <span class="title">
          联系我们
        </span>
        <span class=" font-size-12 font-weight-700 color62657A text-ag-rg">（点击标签复制）</span>
      </h1>
      <!-- 表格-联系方式 -->
      <el-descriptions :column="1" border>
        <el-descriptions-item v-for="(item, index) in contactUs" :key="index">
          <template slot="label">
            <span :style="{ color: item.tag == 'danger' ? 'red' : '' }">
              <el-avatar v-if="item.img" :src="item.img"></el-avatar>
              <i class="contactUs_title">
                {{ item.title }}
              </i>
            </span>
          </template>
          <el-tooltip class="item" effect="dark" content="点击复制" placement="bottom-start"
            v-for="(items, ind) in item.center" :key="ind">
            <el-tag size="small" :type="item.tag || ''" @click="copyText(items.con)" class="mg-rg-5 pointer mg-bt-5">{{ items.name
            }}</el-tag>
          </el-tooltip>
        </el-descriptions-item>
      </el-descriptions>
    </div>
  </div>
</template>
  
<script>
import { contactUs } from "@/utils/erke.js";
import support from "@/utils/support.js";

export default {
  data() {
    return {
      contactUs: contactUs,
      erkeStory: support.erkeStory
    };
  },
  components: {},
  methods: {
    copyText(value) {
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
    },
  },
  created() { },
  mounted() {

  },
};
</script>
  
<style lang="scss" scoped>
::v-deep {
  .el-descriptions-row {
    .el-descriptions-item__cell.el-descriptions-item__content {
      padding: 2px !important;

    }
  }


  .el-descriptions-row .el-descriptions-item__cell.el-descriptions-item__label.is-bordered-label>span span {
    width: 15px;
    height: 15px;
  }

}

.about_big_wrap {
  width: 100%;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  .about_content {
      min-height: 100px;
      background-color: #fff;
      border-radius: 50px;
      -webkit-box-shadow: 0 0 10px 0 #ccc;
      box-shadow: 0 0 10px 0 #ccc;
      margin: 100px auto 100px;
      padding: 46px 58px;
  
    h1 {
      color: #212c3f;
      line-height: 43px;
      display: flex;
      -webkit-align-items: center;
      -moz-align-items: center;
      -ms-align-items: center;
      -o-align-items: center;
      align-items: center;
      margin: 10px 0;
  
      .title {
        margin: 0 20px;
        -webkit-box-flex: 1;
        -webkit-flex: 1;
        -moz-box-flex: 1;
        -ms-flex: 1;
        flex: 1;
      }
    }
  
    h1::before {
      content: "";
      width: 20px;
      height: 20px;
      border: 6px solid #FCC6C6;
      border-radius: 50px;
      display: inline-block;
    }
  
    .about_story {
      .about_story_item {
        .about_story_item_name {
          color: #0c61BB;
        }
  
        .about_story_item_content {
          p {
            color: #90959f;
            font-size: 16px;
            text-indent: 32px;
          }
        }
      }
    }
  }
}



@media screen and (min-width: 1170px) {
  .about_big_wrap {
    .about_content {
      width: 60%;
      max-width: 1170px;
      min-width: 1170px;
      min-height: 575px;

      p {
        font-size: 18px;
        font-weight: 700;
        font-family: Gilroy-Bold;
      }

      h1 {
        font-size: 36px;
        margin-top: 60px;
        font-family: Gilroy-Bold;
      }

      div {
        margin-top: 15px;
        line-height: 1.5;

      }

    }
  }
}

@media screen and (max-width: 1169px) {
  .about_big_wrap {
    width: 100%;

    .about_content {
      width: 90%;
      margin: 50px auto 50px;
      .about_story_item_content {
        //max-height: 600px;
      }
    }
  }
}

@media screen and (max-width: 500px) {

  .contactUs_title {
    transform: scale(0.8);
    flex: 1;
  }

  .about_big_wrap {
    width: 100%;

    .about_content {
      margin: 20px auto 20px;
      width: 90%;
      padding: 46px 10%;
      min-width: 320px;
      .about_story_item {
        .about_story_item_content {
          //max-height: 100%;
          p {
            font-size: 12px !important;
          }
        }

        .about_story_item_name {
          font-size: 13px;

        }
      }

      h1 {
        color: #212c3f;
        line-height: 43px;
        display: flex;
        -webkit-align-items: center;
        -moz-align-items: center;
        -ms-align-items: center;
        -o-align-items: center;
        align-items: center;

        .title {
          //transform: scale(0.8);
          margin: 0 20px;
          -webkit-box-flex: 1;
          -webkit-flex: 1;
          -moz-box-flex: 1;
          -ms-flex: 1;
          flex: 1;
          font-size: 14px;
        }
      }

      h1::before {
        content: "";
        width: 15px;
        height: 15px;
        border: 6px solid #FCC6C6;
        border-radius: 50px;
        display: inline-block;
      }
    }

  }
}
</style>
  