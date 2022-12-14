<template>
    <div class="erke">
        <el-collapse v-model="activeNames">
            <el-collapse-item :title="itemt.title" :name="index" v-for="(itemt, index) in erkeData" :key="index">
                <template slot="title">
                    <!-- 一层的标题 -->
                    <el-avatar v-if="itemt.img" class="iconImg" :src="itemt.img">
                    </el-avatar>
                    <i v-if="!itemt.img" :class="itemt.icon + ' iconImg header-icon'"></i>
                    <span class="font-weight-700 font-size-16">
                        {{ itemt.title }}
                    </span>
                    <span class="mg-lt-10 font-size-12 font-weight-700 color62657A">{{ itemt.conter }}</span>
                </template>
                <!-- 二层表格系列 -->
                <el-descriptions class="margin-top" :column="1" border v-if="itemt.timeline != 'one'">
                    <el-descriptions-item v-for="(item, index) in itemt.children" :key="index">
                        <template slot="label">
                            <!-- 判断二层有没有大标题 -->
                            <span v-if="item.text" style="color:#000;font-size: 16px;font-weight: 700">
                                {{ item.title }}
                            </span>
                            <span v-if="!item.text">
                                <i v-if="item.icon" :class="item.icon"></i>
                                <el-avatar v-if="item.img" :src="item.img">
                                </el-avatar>
                                {{ item.title }}
                            </span>
                        </template>
                        <!-- 二层数据 -->
                        <span v-for="(items, index) in item.children" :key="index">
                            <el-avatar v-if="items.img" style="width:50px;height: 50px;" :src="items.img">
                            </el-avatar>
                            <!-- 有跳转数据 -->
                            <el-tag size="small" class="mg-rg-5 pointer" v-if="items.tag && items.herf"
                                @click="externalJumpFn(items.herf)">{{ items.tag }}</el-tag>
                            <!-- 纯展示 -->
                            <el-tag size="small" class="mg-rg-5 pointer" v-if="items.tag && (!items.herf) && (!items.type)">
                                {{ items.tag }}</el-tag>
                            <!-- 特殊提示带 复制可加可不加 type是success才可复制 -->
                            <el-tooltip class="item" effect="dark" :content="items.tooltip" placement="bottom-start">
                                <el-tag size="small" :type="items.type" @click="copyText(items.type)" class="mg-rg-5 pointer"
                                    v-if="items.tag && (!items.herf) && items.type">{{ items.tag }}</el-tag>
                            </el-tooltip>
                        </span>
                        <el-timeline v-if="item.timeline">
                            <el-timeline-item style="max-width:900px" :timestamp="items.time" placement="top"
                                v-for="(items, index) in item.children" :key="index">
                                <!-- <el-card> -->
                                <h4>{{ items.title }}</h4>
                                <p>{{ items.conter }}</p>
                                <!-- </el-card> -->
                            </el-timeline-item>
                        </el-timeline>
                    </el-descriptions-item>
                </el-descriptions>
                <!-- 二层直接时间线 -->
                <el-timeline v-if="itemt.timeline == 'one'">
                    <el-timeline-item style="max-width:900px" :timestamp="items.time" placement="top"
                        v-for="(items, index) in itemt.children" :key="index">
                        <!-- <el-card> -->
                        <h4>{{ items.title }}</h4>
                        <p>{{ items.conter }}</p>
                        <!-- </el-card> -->
                    </el-timeline-item>
                </el-timeline>
            </el-collapse-item>
            <!-- 最下面的微信展示 -->
            <el-descriptions class="margin-top" :column="1" border>
                <el-descriptions-item>
                    <template slot="label">
                        <span>
                            <i class="el-icon-bell"></i>
                            二珂个人工作洽谈WeChat
                        </span>
                    </template>
                    <span>
                        <el-tooltip class="item" effect="dark" content="点击复制" placement="bottom-start">
                            <el-tag size="small" type="success" @click="copyText('success', 'Alba_1015')" class="pointer">
                                Alba_1015 （何女士）</el-tag>
                        </el-tooltip>
                    </span>
                </el-descriptions-item>
            </el-descriptions>
        </el-collapse>
        <!-- 数据整理/编辑备注 -->
        <p class="mg-tp-25 font-size-12 font-weight-700 color62657A text-ag-rg">数据整理/编辑：周二珂周三鸽</p>
    </div>
</template>
<script>
import {erkeData} from "@/utils/erke.js";
export default {
    data() {
        return {
            erkeData: erkeData,
            activeNames: [1, 8]
        };
    },
    mounted() {
    },
    watch: {

    },
    methods: {
        copyText(type, value) {
            if (type != 'success') {
                return
            }
            // 模拟 输入框
            var cInput = document.createElement("input");
            cInput.value = value;
            document.body.appendChild(cInput);
            cInput.select(); // 选取文本框内容

            // 执行浏览器复制命令
            // 复制命令会将当前选中的内容复制到剪切板中（这里就是创建的input标签）
            // Input要在正常的编辑状态下原生复制方法才会生效
            document.execCommand("copy");

            this.$message.success("复制成功!");
            // 复制成功后再将构造的标签 移除
            document.body.removeChild(cInput);
        },
        externalJumpFn(open) {
            window.open(open)
        },
        jumpFun(route) {
            if (this.$route.name != route) {
                this.$router.push(route);
            }
        },
    },
};
</script>
  
<style lang="scss" scoped>


.erke {
    min-height: 888px;
    width: 60%;
    margin: 0 auto;
    min-width: 1170px;
    max-width: 1170px;
}

</style>