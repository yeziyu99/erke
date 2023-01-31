<template>
  <div class="big_wraps">
    <div class="help_header">
      <div class="help_content">
        <h2 class="title">在下方直接搜索</h2>
        <el-input
          prefix-icon="el-icon-search"
          placeholder="输入关键字进行搜索"
          clearable
          @input="supportInt"
          v-model="supportVal"
          >
        </el-input>
      </div>
    </div>
    <div class="help_question">
      <div class="question_content help_content">
        <h2 class="question_title">按up主查找
          <span class="mg-lt-10 font-size-12 font-weight-700 color62657A">排名不分先后</span>
        </h2>
        <div class="question_item" v-for="(item, index) in newQuestionData" :key="index">
          <div class="item_big" @click="itemFun(index)">
            <div style="display: flex; align-items: center">
              <img class="item_icon" style="width: 52px; margin-right: 10px; border-radius: 50%;" :src="item.imgUrl" alt="" />
              <span class="item_big_title font-size-24">{{ item.title }}</span>
            </div>
            <div >
              <img class="icon_status" v-if="!item.show" src="@/assets/image/upward.png" alt="" />
              <img class="icon_status" v-else src="@/assets/image/down.png" alt="" />
            </div>
          </div>
          <div v-if="item.show">
            <div class="item_children" v-for="(val, i) in item.children" :key="i" >
              <div class="item_children_title" @click="childrenFun(index, i)" style="margin-bottom: 7px;">
                <div v-if="val.children&&val.children.length>1"  >
                  <img v-if="!val.show" style="width: 18px; margin-right: 10px" src="@/assets/image/dropDown.png" alt="" />
                  <img v-else style="width: 18px; margin-right: 10px" src="@/assets/image/pull.png" alt="" />
                </div>
                <el-avatar  class="iconImg" :src="val.imgUrl||item.imgUrl">
                </el-avatar>
                <el-tag size="small" class="tag pointer" @click="externalJumpFn(val.herf)">
                    <span v-if="val.type=='bili'"  style="color:palevioletred">哔哩哔哩</span>
                    <span v-if="val.type=='dy'"  style="color:#000">抖音</span>
                    <span v-if="val.type=='sing'"  style="color:#00BBB3">5Sing</span>
                    <span v-if="val.type=='wyy'"  style="color:red">网易云</span>
                  -- {{ val.name }}
                </el-tag>
                <el-link  v-if="val.children&&val.children.length==1" type="info" class="mg-lt-10 font-size-12 pointer">{{ val.children[0].name }}</el-link>
              </div>
              <div v-if="val.show&&val.children&&val.children.length>1" class="children_answer">
                <el-timeline >
                    <el-timeline-item style="max-width:900px"  placement="top" v-for="(itt, i) in val.children" :key="i">
                        <el-link type="primary" class="pointer" @click="externalJumpFn(itt.herf)">{{ itt.name }}</el-link>
                    </el-timeline-item>
                </el-timeline>
              </div>
            </div>
          </div>
        </div>
        <div class="question_item" v-if="newQuestionData.length==0">
          <div class="question_item_noDate">
            没有查找到
            <span>
              {{supportVal}}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
import {supportLink} from "@/utils/support.js";
export default {
  data() {
    return {
      supportLink: supportLink,
      newQuestionData: supportLink,
      supportVal: '',
      Object:Object
    };
  },
  components: {},
  methods: {
    externalJumpFn(value){
      window.open(value)
    },
    supportInt(){
       this.newQuestionData=[]
      for(let key in this.supportLink){
        if(JSON.stringify(this.supportLink[key]).indexOf(this.supportVal)!=-1){
          this.newQuestionData.push(this.supportLink[key])
        }
      }
    },
    itemFun(val) {
      this.newQuestionData[val].show = !this.newQuestionData[val].show;
    },
    childrenFun(val, index) {
      this.newQuestionData[val].children[index].show =!this.newQuestionData[val].children[index].show;
    },
  },
  created() { },
  mounted() { },
};
</script>
  
<style lang="scss" scoped>
  
</style>
  