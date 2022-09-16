<template>
  <div class="big_wrap">
    <div class="help_header">
      <div class="help_content">
        <h2 class="title">Hi! Let us help you.</h2>
      </div>
    </div>
    <div class="help_question">
      <div class="question_content help_content">
        <h2 class="question_title">Find by category</h2>
        <div
          class="question_item"
          v-for="(item, index) in questionData"
          :key="index"
        >
          <div class="item_big">
            <div style="display: flex; align-items: center">
              <img
                class="item_icon"
                style="width: 52px; margin-right: 10px"
                :src="item.icon"
                alt=""
              />
              <span style="font-size: 24px" class="item_big_title">{{
                item.title
              }}</span>
            </div>
            <div @click="itemFun(index)">
              <img
                class="icon_status"
                v-if="!item.show"
                src="@/assets/image/upward.png"
                alt=""
              />
              <img
                class="icon_status"
                v-else
                src="@/assets/image/down.png"
                alt=""
              />
            </div>
          </div>
          <div v-if="item.show">
            <div
              class="item_children"
              v-for="(val, i) in item.children"
              :key="i"
            >
              <div class="item_children_title">
                <img
                  v-if="!val.show"
                  style="width: 18px; margin-right: 10px"
                  src="@/assets/image/dropDown.png"
                  alt=""
                  @click="childrenFun(index, i)"
                />
                <img
                  v-else
                  style="width: 18px; margin-right: 10px"
                  src="@/assets/image/pull.png"
                  alt=""
                  @click="childrenFun(index, i)"
                />
                <span style="font-size: 20px; padding: 20px 0">{{
                  val.title
                }}</span>
              </div>
              <div v-if="val.show" class="children_answer">
                {{ val.content }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
  <script>
import questionData from "@/utils/questions.js";
export default {
  data() {
    return {
      questionData: questionData,
    };
  },
  components: {},
  methods: {
    itemFun(val) {
      this.questionData[val].show = !this.questionData[val].show;
    },
    childrenFun(val, index) {
      this.questionData[val].children[index].show =
        !this.questionData[val].children[index].show;
    },
  },
  created() {},
  mounted() {},
};
</script>
  
  <style lang="scss" scoped>
@media screen and (min-width: 1000px) {
  .big_wrap {
    width: 100%;
    .help_content {
      margin-left: auto;
      margin-right: auto;
      padding-left: 15px;
      padding-right: 15px;
      width: 100%;
      max-width: 60%;
      min-width: 1200px;
    }
    .help_header {
      background: url("../../assets/image/help.png") no-repeat 50% / cover;
      height: 340px;
      // height: auto;
      display: flex;
      align-items: center;
      .title {
        color: #000;
        font-size: 48px;
        font-weight: 500;
        padding: 0;
        font-weight: 700;
      }
    }
    .help_question {
      background: #fff;
      .question_content {
        padding-top: 80px;
        padding-bottom: 60px;
        .question_title {
          font-size: 36px;
        }
        .question_item {
          border-bottom: 1px solid #000;
          padding: 20px 0 20px 0;
          .item_big {
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
          .item_children {
            margin-left: 60px;
            width: 100%;
            .item_children_title {
              display: flex;
              align-items: center;
            }
            .children_answer {
              width: 94%;
              padding: 20px 16px;
              background: #fafafa;
            }
          }
        }
      }
    }
  }
}

@media screen and (max-width: 1000px) {
  $ratio: 375/10;

  @function px2rem($px) {
    @return $px / $ratio + rem;
  }
  .big_wrap {
    width: 100%;
    height:100vh;
    background: #fff;
    .help_content {
      margin-left: auto;
      margin-right: auto;
      padding-left: px2rem(15 * 2);
      padding-right: px2rem(15 * 2);
      width: 100%;
      // max-width: 60%;
      // min-width: 1200px;
    }
    .help_header {
      width: 100%;
      background: url("../../assets/image/help.png") no-repeat 100% / cover;
      height: px2rem(340 * 2);
      // height: auto;
      display: flex;
      align-items: center;
      .title {
        color: #000;
        font-size: px2rem(48 * 2);
        font-weight: 500;
        padding: 0;
        font-weight: 700;
      }
    }
    .help_question {
      background: #fff;
      .question_content {
        padding-top: px2rem(80 * 2);
        padding-bottom: px2rem(60 * 2);
        .question_title {
          font-size: 22px;
          margin-bottom: px2rem(20 * 2);
        }
        .question_item {
          border-bottom: 1px solid #000;
          padding: px2rem(20 * 2) 0 px2rem(20 * 2) 0;
          .item_big {
            display: flex;
            justify-content: space-between;
            align-items: center;
            .item_icon {
              width: px2rem(36 * 2) !important;
            }
            .item_big_title {
              font-size: 16px !important;
            }
            .icon_status {
              width: px2rem(16 * 2) !important;
            }
          }
          .item_children {
            margin-left: px2rem(60 * 2);
            // width: 100%;
            .item_children_title {
              display: flex;
              align-items: center;
              span {
                font-size: 14px !important;
              }
            }
            .children_answer {
              width: 94%;
              padding: px2rem(20 * 2) px2rem(16 * 2);
              background: #fafafa;
            }
          }
        }
      }
    }
  }
}
</style>
  