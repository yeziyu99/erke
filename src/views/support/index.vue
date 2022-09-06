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
        
      </div>
    </div>
  </div>
</template>
  
  <script>
export default {
  data() {
    return {};
  },
  components: {},
  methods: {},
  created() {},
  mounted() {},
};
</script>
  
  <style lang="scss" scoped>
.big_wrap {
  width: 100%;
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
    }
  }
}
.help_content {
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;
  width: 100%;
  max-width: 60%;
}
</style>
  