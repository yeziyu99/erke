<template>
  <div class="big_wrap">
    <!-- 头部 -->
    <publicHeader/>
    <!-- 1231231 -->
    <!-- <sidebar class="left_silde_bar"></sidebar> -->
    <div class="page">
      <router-view></router-view>
    </div>
    <question />
    <publicFoot/>
    <publicFooter />
    <!-- 底部 -->
    <!-- 213123213 -->
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
    };
  },
  components: {
    publicHeader,publicFoot,publicFooter,question
  },
  methods: {
  },
  created() {
  },
  mounted() {
  },
};
</script>

<style lang="scss" scoped>
</style>
