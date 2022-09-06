<template>
  <div class="question">
    <div class="question_content">
      <div class="question_title">FAQs</div>
      
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.question {
  width: 100%;
  background: #ffe100;
  min-width: 1000px;
  overflow-x: auto;
  display: flex;
  justify-content: center;
  .question_content {
    width: 60%;
    padding-top: 90px;
    .question_title {
      font-size: 36px;
    }
  }
}
</style>