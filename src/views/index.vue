<template>
  <div class="big_wrap">
    <sidebar class="left_silde_bar"></sidebar>
    <div class="page">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import http from "@/http/service";

export default {
  data() {
    return {
    };
  },
  components: {
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
