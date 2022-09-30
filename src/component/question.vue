<template>
  <div class="question">
    <div class="question_content">
      <div class="question_title">FAQs</div>
      <div class="question_list">
        <div
          class="queation_item"
          v-for="(item, index) in question_data"
          :key="index"
        >
          <div
            @click="itemFun(index)"
            style="width: 100%; display: flex; justify-content: space-between"
          >
            <div class="question_name">{{ item.title }}</div>
            <div>
              <img v-if="!item.show" src="@/assets/image/1.png" alt="" />
              <img v-else src="@/assets/image/2.png" alt="" />
            </div>
          </div>
          <p v-if="item.show" class="question_answer">
            {{item.content}}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import questionData from "@/utils/question.js";
export default {
  data() {
    return {
      question_data: [],
    };
  },
  methods: {
    itemFun(val) {
      this.question_data[val].show = !this.question_data[val].show;
    },
  },
  mounted() {
    for (var i = 0; i < questionData.length; i++) {
      this.question_data.push({
        title: questionData[i].title,
        show: false,
        content: questionData[i].content,
      });
    }
  },
  created() {},
};
</script>

<style lang="scss" scoped>
.question {
  width: 100%;
  background: #ffe100;
  min-width: 1200px;
  overflow-x: auto;
  display: flex;
  justify-content: center;
  .question_content {
    width: 60%;
    min-width: 1200px;
    padding-top: 90px;
    .question_title {
      font-size: 24px;
    }
    .question_list {
      padding-bottom: 80px;
      .queation_item {
        padding: 15px 0;
        border-bottom: 1px solid #000000;
        font-size: 16px;
        font-family: Gilroy,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;
        .question_answer {
          font-size: 14px;
          margin-top: 20px;
          font-family: Gilroy,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;
        }
      }
    }
  }
}
</style>