<template>
    <div class="yinyue">
      <web-music-com :paramsId="paramsId"></web-music-com>
    </div>
  </template>
  
  <script>
  import webMusicCom from "../component/webMusicCom/webMusicCom.vue";
  export default {
    name: "Home",
    components: {
      webMusicCom,
    },
    data() {
      return {
        paramsId: 1,
      };
    },
    created() {
      this.paramsId=this.$route.params.id
    },
    
  };
  </script>
  
  <style>
  html,
  body,
  #app {
    height: 100%;
    width: 100%;
  }
  .yinyue {
    height: 100%;
    display: flex;
    justify-content: center;
    min-width: 1170px;
    background-color: #FBFBFB;
  }
  </style>
  