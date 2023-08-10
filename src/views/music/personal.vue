<template>
  <div class="invest_big">
    <div class="invest_tab">
      <div class="trade_left">
        <div>
          <h2 class="trade_title font_Bold">
            {{ erkelist.title }}
          </h2>
          <ul class="trade_list foot_list_item">
            <li v-for="(value, ind) in erkelist['background']" :key="ind">
              <p>{{ value }}</p>
            </li>
          </ul>
        </div>
      </div>
      <div class="trade_rightO">
        <div class="trade_right">
          <div class="trade_tab">
            <ul>
              <li
                :style="{ zIndex: 4 - index }"
                :class="active == index ? 'active' : ''"
                @click="tabFn(index)"
                :key="index"
                v-for="(item, index) in erkeAlbum"
              >
                <img :src="item.img" :alt="item.title" />
              </li>
            </ul>
          </div>
          <div class="trade_table">
            <div class="table_title">{{ erkelist.title }}</div>
            <el-table
              :data="erkelist['song']"
              height="447"
              :border="false"
              style="width: 100%"
            >
              <el-table-column prop="name" label="歌名" width="110">
                <template slot-scope="scope">
                  <div style="color: #000; font-weight: 700">
                    {{ scope.row.name || "-" }}
                  </div>
                </template>
              </el-table-column>
              <el-table-column prop="makeWord" label="作词" width="110">
                <template slot-scope="scope">
                  <div>
                    {{ scope.row.makeWord || "-" }}
                  </div>
                </template>
              </el-table-column>
              <el-table-column prop="compose" label="作曲">
                <template slot-scope="scope">
                  <div>
                    {{ scope.row.compose || "-" }}
                  </div>
                </template>
              </el-table-column>
              <el-table-column prop="arranger" label="编曲">
                <template slot-scope="scope">
                  <div>
                    {{ scope.row.arranger || "-" }}
                  </div>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </div>
        <div class="table_foot">
          <a href="#list_title"> 查看更多歌曲 </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { erkeAlbum } from "@/utils/erke.js";
export default {
  data() {
    return {
      active: "0",
      erkeAlbumName: erkeAlbum[0]["title"],
      erkeAlbum: erkeAlbum,
      erkelist: erkeAlbum[0],
    };
  },
  methods: {
    tabFn(val) {
      this.active = val;
      this.erkelist = erkeAlbum[val];
    },
  },
  components: {},
};
</script>

<style lang="scss" scoped></style>
