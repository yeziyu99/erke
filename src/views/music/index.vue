<template>
  <div class="big_wrap">
    <!-- <heads /> -->
    <!-- <personal /> -->
    <album />
  </div>
</template>
<script>
import heads from "./heads.vue";
import personal from "./personal.vue";
import album from "./album.vue";
export default {
  components: { heads, personal, album },
};
</script>

<style lang="scss" scoped></style>
