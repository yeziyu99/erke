<template>
  <div class="big_wrap">
    <div class="soon_img" >
      <img src="@/assets/image/soon.png" alt="">
    </div>
    <h3 class="font_Bold title">New website coming soon…</h3>
    <div class="soonbj_img">
      <img class="soonbj" src="@/assets/image/soonbj.png" alt="">
    </div>
    
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.big_wrap{
width: 100%;
height: 100%;
 background-image: radial-gradient(rgba(255,225,0,0.1) 10%, rgba(255,225,0,0.1) 10%, rgba(255,225,0,0.5) 50%);
 background-color: rgba(255,231,52,0.65);
display: flex;
flex-direction: column;
align-items: center;
.soon_img{
  margin-top: 5%;
  width: 41%;
  height: 56%;
img{
  width: 100%;
  height: 100%;
}
}
.title{
  font-size: 60px;
  font-weight: 700;
}
.soonbj_img{
  width: 100%;
  height: 27%;
  position: absolute;
  bottom: 0px;
  .soonbj{
    width: 100%;
  height: 100%;
  
}
}

}
</style>