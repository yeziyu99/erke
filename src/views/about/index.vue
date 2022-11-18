<template>
  <div class="big_wrap">
    <div class="aboutUs_head">
      <div class="about_head_title">
        <div class="title_left">
          <div class="about_font_Bold font_Bold">非官方</div>
          <div class="about_ready">自己做着玩</div>
          <!-- <div class="about_ready">
            因为喜欢珂珂相聚在这里
          </div> -->
        </div>

      </div>
    </div>
    <div class="about_content">
      <p>
        因为喜欢珂珂我们相识，有资源可以联系一起分享哦～
      </p>
      <h1>我们的故事</h1>
      <div>还没想好写什么 先空着好了 </div>
      <h1>联系我们</h1>
      <!-- <div>QQ：346989693 </div>
      <div>VX：yezituan_yu </div>
      <div> QQ群：1127402136（二珂的下次戒烟委员会）</div> -->
      <el-descriptions class="margin-top" :column="1" border>
            <el-descriptions-item>
                <template slot="label">
                    <i class="el-icon-chat-dot-round"></i>
                    QQ
                </template>
                <el-tag size="small">346989693</el-tag>
            </el-descriptions-item>
            <el-descriptions-item>
                <template slot="label">
                    <i class="el-icon-chat-dot-round"></i>
                    VX
                </template>
                <el-tag size="small">yezituan_yu</el-tag>
            </el-descriptions-item>
            <el-descriptions-item>
                <template slot="label">
                    <i class="el-icon-chat-dot-round"></i>
                    QQ群
                </template>
                <el-tag size="small">二珂的下次戒烟委员会</el-tag>
                <el-tag size="small" class="tag">78622游戏群</el-tag>
            </el-descriptions-item>
        </el-descriptions>
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
  min-width: 1170px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
  .aboutUs_head {
    width: 100%;
    height: 325px;
    background-color: #ffe103;
    display: flex;
    align-items: center;
    flex-direction: column;
    // background-image: url("../../assets/image/about.png");
    // background-image: url("../../assets/images/erkexh.png");
    // background-repeat: no-repeat;
    // background-position: bottom 0px right 23%;
    // background-size: 200px 300px;
    
    .about_head_title {
      width: 60%;
      min-width: 1170px;
      max-width: 1170px;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      background-image: url("../../assets/images/erkexh.png");
      background-repeat: no-repeat;
      background-position: bottom 0px right 0px;
      background-size: 200px 300px;
      // background-image: url("../../assets/images/erkexihuan.png");
      // background-repeat: no-repeat;
      // background-position: top 38% left 0%;
      // padding-left: 22px;

      .title_left {
        white-space: nowrap;
        // color: #fff;
        .about_font_Bold {
          font-size: 60px;
          margin-bottom: 12px;
          font-weight: 700;
        }
        .about_ready {
          font-size: 24px;
        }
      }
      .title_right {
        height: 100%;
        display: flex;
        align-items: flex-end;
        margin-right: -63px;
      }
    }
  }
  .about_content {
    width: 60%;
    min-width: 1170px;
    max-width: 1170px;
    min-height: 575px;
    padding: 80px 0 50px 0;

    p{
      font-size: 18px;
      font-weight: 700;
      font-family: Gilroy-Bold;
    }
    h1{
      font-size: 36px;
      margin-top: 60px;
      font-family: Gilroy-Bold;
    }
    div{
      margin-top: 15px;
      line-height: 1.5;
    }
  }
}
</style>
  