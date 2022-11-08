<template>
  <svg
    viewBox="0 0 1024 1024"
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
  >
    <title :id="iconName" lang="zh">{{ iconTitle }}</title>
    <slot />
  </svg>
</template>

<script>
export default {
  props: {
    iconName: {
      type: String,
      default: "icon-default",
    },
    iconTitle: {
      type: String,
      required: true,
    },
    width: {
      type: Number,
      default: 26,
    },
    height: {
      type: Number,
      default: 26,
    },
    iconColor: {
      type: String,
      default: "currentColor",
    },
  },
};
</script>

<style scoped>
svg {
  cursor: pointer;
}
</style>