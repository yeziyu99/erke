<template>
  <div id="playlistcom">
    <ul :style="{ 'max-height': ulheight }">
      <div v-for="(item, index) in playlist" :key="index">
        <div class="line"></div>
        <li @click="choseItem(index, $event)">
          <div class="item-song">{{ item.name }}</div>
          <div class="item-artist">{{ item.arname }}</div>
        </li>
      </div>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    curIndex: {
      required: true,
      type: Number,
    },
    playlist: {
      type: Array,
      default: [{ name: "获取歌曲失败", arname: "" }],
    },
    height: {
      type: Number,
      default: 186,
    },
  },
  data() {
    return {};
  },
  updated() {
    this.defaultChose();
  },
  methods: {
    choseItem(index, $event) {
      this.$emit("item-click", index);
    },
    // 默认选中歌曲
    defaultChose() {
      var listbox = document.querySelector("#playlistcom");
      var listitems = listbox.querySelectorAll("li");
      listitems[this.curIndex].className = "currentLi";
    },
    // 滑动当前播放歌曲至视图的顶部,必须当前视图可见，none不起作用。
    scrollToTop() {
      document
        .querySelector("li.currentLi")
        .parentElement.scrollIntoView({ behavior: "smooth" });
    },
  },
  computed: {
    ulheight() {
      return this.height + "px";
    },
  },
  watch: {
    curIndex(val, oldval) {
      var listbox = document.querySelector("#playlistcom");
      var listitems = listbox.querySelectorAll("li");
      listitems[oldval].className = "";
      listitems[val].className = "currentLi";
      listitems[val].parentElement.scrollIntoView({ behavior: "smooth" });
    },
  },
};
</script>

<style lang="scss" scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
  padding: 0 10px;
  overflow-y: auto;
  transition: max-height 0.3s ease-in-out;
  > div {
    padding-bottom: 15px;
  }
}
.currentLi {
  color: skyblue;
}
li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
  max-height: 19.2px;
}
li:hover {
  cursor: pointer;
  background-color: #5698a6;
}
.line {
  display: block;
  height: 1px;
  background-color: #dcdfe6;
  width: 100%;
}
/*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/
::-webkit-scrollbar {
  width: 6px;
  height: 6px;
  background-color: #295252;
  border-radius: 10px;
}

/*定义滚动条轨道 内阴影+圆角*/
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  background-color: #295252;
}

/*定义滑块 内阴影+圆角*/
::-webkit-scrollbar-thumb {
  border-radius: 10px;
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
  background-color: #d6cfcf;
}
.el-divider--horizontal {
  margin: 0px;
}
</style>
