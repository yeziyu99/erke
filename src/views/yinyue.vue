<template>
    <div class="home">
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
  .home {
    height: 100%;
    margin: 10px;
    display: flex;
    justify-content: center;
  }
  </style>
  