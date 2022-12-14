<template>
    <div class="yinyue">
      <web-music-com :playlistheight="playlistheight"></web-music-com>
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
        playlistheight: 186,
      };
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
  