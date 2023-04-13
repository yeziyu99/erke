<template>
    <div class="big_wrap_photo background_linear">
        <div class="banner">
            <el-carousel :interval="5000" :type="carouselType" ref="slideCarousel">
                <el-carousel-item v-for="(item, index) in pictureList" :key="index">
                    <el-image :src="item.cover_img" fit="cover" alt="" :preview-src-list="item.img_urls">
                        <div slot="error" class="image-slot">
                            <img :src="erke" alt="">
                            <p>
                                图片加载失败
                            </p>
                        </div>
                    </el-image>
                </el-carousel-item>
            </el-carousel>
            <hr>
            <p class="photo_title">
                <i class="el-icon-picture-outline"></i>
                相册图集
            </p>
            <div class="photo_img">
                <el-row :gutter="20">
                    <el-col :span="spanNum" v-for="(item, index) in pictureList" :key="index">
                        <div class="photo_bg" :style="{ backgroundImage: 'url(' + item.cover_img + ')' }">
                        </div>
                        <div class="photo_con">
                            <div class="colImgdiv">
                                <!-- <div> -->
                                <el-image :src="item.cover_img" fit="cover" alt="" :preview-src-list="item.img_urls">
                                    <div slot="error" class="image-slot">
                                        <img :src="erke" alt="">
                                        <p>
                                            图片加载失败
                                        </p>
                                    </div>
                                </el-image>
                                <!-- </div> -->
                            </div>
                        </div>
                        <p>
                            <i class="el-icon-bell"></i>
                            <span>
                                {{ item.album_desc }}
                            </span>
                        </p>

                    </el-col>

                </el-row>
            </div>
            <hr>
            <p class="photo_title">
                <i class="el-icon-video-camera"></i>
                最新视频
            </p>
            <div>
                <el-row>
                    <el-col :span="24">
                        <iframe id="spkj"
                            src="//player.bilibili.com/player.html?aid=949981517&bvid=BV1ts4y187Yv&cid=1022376075&page=1"
                            scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
                    </el-col>
                </el-row>
            </div>
            <!-- <hr> -->
        </div>
    </div>
</template>
<script>
import http from "@/http/service";
import erke from "@/assets/images/erke.png";



import support from "@/utils/support.js";
export default {
    data() {
        return {
            pictureList: support.pictureList,
            erke: erke,
            imgDetails: support.imgDetails,
            pictureLists: support.pictureLists,
            screenWidth: document.body.clientWidth,
            carouselType: 'card',
            spanNum: 8,//8/12/24
        };
    },
    components: {},
    methods: {
        // 移动端屏幕滑动切换
        slideBanner() {
            //选中的轮播图
            var box = document.querySelector('.el-carousel__container');
            var startPointX = 0
            var stopPointX = 0
            //重置坐标
            var resetPoint = function () {
                startPointX = 0
                stopPointX = 0
            }
            //手指按下
            box.addEventListener("touchstart", function (e) {
                //手指点击位置的X坐标
                startPointX = e.changedTouches[0].pageX
            });
            //手指滑动
            box.addEventListener("touchmove", function (e) {
                //手指滑动后终点位置X的坐标
                stopPointX = e.changedTouches[0].pageX
            });
            //当手指抬起的时候，判断图片滚动离左右的距离
            let that = this
            box.addEventListener("touchend", function (e) {
                if (stopPointX == 0 || startPointX - stopPointX == 0) {
                    resetPoint()
                    return
                }
                if (startPointX - stopPointX > 0) {
                    resetPoint()
                    that.$refs.slideCarousel.next()
                    return
                }
                if (startPointX - stopPointX < 0) {
                    resetPoint()
                    that.$refs.slideCarousel.prev()
                    return
                }
            });
        },
        //跳转外部链接/打开新标签页
        externalJumpFn(open) {
            window.open(open)
        },
        //项目内部跳转
        jumpFun(name, id) {
            if (this.$route.name != name) {
                this.$router.push({ name: name, params: { id: id } });
            }
        },
        screenWidthFn() {
            let spkj=document.getElementById("spkj");
            spkj?document.getElementById("spkj").style.height = document.getElementById("spkj").scrollWidth * 0.5625 + "px":undefined;
            this.screenWidth = document.body.clientWidth;
            if (this.screenWidth < 500) {
                    if (this.carouselType == 'card') {
                        this.carouselType = ''
                        this.spanNum = 24;
                    }
                } else if (this.screenWidth < 1170 && this.screenWidth >= 500) {
                    if (this.carouselType != 'card') {
                        this.carouselType = 'card'
                    }
                    this.spanNum = 12;
                } else {
                    if (this.carouselType != 'card') {
                        this.carouselType = 'card'
                    }
                    this.spanNum = 8;
                }
        }
    },
    created() {

    },
    mounted() {
        this.screenWidth = document.body.clientWidth
        this.screenWidthFn()
        this.slideBanner()
        window.onresize = () => {
            return (() => {
                this.screenWidthFn()

            })()
        }
    },
    watch: {
        // screenWidth: {
        //     handler: function (val, oldVal) {
        //         if (val < 500) {
        //             if (this.carouselType == 'card') {
        //                 this.carouselType = ''
        //                 this.spanNum = 24;
        //             }
        //         } else if (val < 1170 && val >= 500) {
        //             if (this.carouselType != 'card') {
        //                 this.carouselType = 'card'
        //             }
        //             this.spanNum = 12;
        //             // this.spanNum = 12;
        //         } else {
        //             if (this.carouselType != 'card') {
        //                 this.carouselType = 'card'
        //             }
        //             this.spanNum = 8;
        //         }
        //     },
        //     // deep:true
        //     // immediate: true
        // },
    }
};
</script>

<style lang="scss" scoped>
::v-deep {
    iframe {
        width: 100%;
        border-radius: 16px;
    }

    .photo_title {
        font-size: 36px;
        font-weight: 600;
        margin: 20px 0;
        text-align: center;
    }

    .photo_img {
        .el-row {
            margin-bottom: 20px;
            overflow: auto;
            height: 100%;
            border-radius: 16px;

            &:last-child {
                margin-bottom: 0;
            }
        }

        .el-col {
            height: 300px;
            margin: 20px 0;
            text-align: center;
            padding: 0 !important;
            position: relative;
            border-radius: 16px;
            overflow: hidden;

            p {
                height: 15%;
                //overflow: hidden;
                //text-overflow: ellipsis;
                //white-space: nowrap;
                cursor: pointer;
                width: 90%;
                position: absolute;
                bottom: 0;
                margin: 0 5%;
                //background:rgba(225,225,225,0.4);
                background: rgba(0, 0, 0, 0.4);
                color: #fff;
                border-radius: 0 0 16px 16px;
                display: flex;
                align-items: center;
                justify-content: center;

                i {
                    font-size: 24px;
                    margin-right: 10px;
                }

                span {
                    max-width: 100%;
                    height: 100%;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    line-height: 45px;
                    white-space: nowrap;

                }
            }

            .photo_bg {
                border-radius: 16px;
                overflow: hidden;
                height: 100%;
                width: 90%;
                position: absolute;
                top: 0;
                left: 5%;
                filter: blur(5px);
                background-position: center center;
                background-size: cover;
            }


            .photo_con {
                border-radius: 16px;
                height: 85%;
                width: 100%;
                padding: 10% 10% 0;
                position: absolute;
            }

            .colImgdiv {
                height: 100%;
                box-shadow: 0 2px 12px 0 rgb(0 0 0 / 20%);
                border-radius: 16px 16px 0 0;
                overflow: hidden;

                >div {
                    height: 100%;
                    width: 100%;
                }
            }

        }

        .el-col:hover {
            box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
        }
    }

    .el-carousel__indicators {
        width: 100%;
        text-align: center;

        .el-carousel__indicator>.el-carousel__button {
            width: 8px;
            height: 8px;
            border-radius: 50%;
        }
    }

    @media screen and (max-width: 500px) {

        //隐藏掉鼠标悬浮出现的左右切换按钮
        .el-carousel__arrow {
            display: none;
        }
    }

    @media screen and (max-width: 1169px) {
        $ratio: 375/10;

        @function px2rem($px) {
            @return $px / $ratio+rem;
        }

        .banner {
            width: 90%;
            margin: 0 auto;
        }

        .el-carousel {
            height: 350px !important;
        }



        // 圆点样式
        .home-banner .el-carousel__indicator--horizontal .el-carousel__button {
            width: 6px;
            height: 6px;
            background: transparent;
            background: #e5e5e5;
            border-radius: 50%;
            opacity: 1;
        }

        .home-banner .el-carousel__indicator--horizontal.is-active .el-carousel__button {
            width: 6px;
            height: 6px;
            background: #235FB0;
            border-radius: 50%;
            opacity: 1;
        }
    }

    @media screen and (min-width: 1170px) {
        .big_wrap_photo {
            width: 100%;
            max-width: 1170px;
            min-width: 1170px;
        }

        .banner {
            width: 100%;
            max-width: 1200px;
            min-width: 600px;
            margin: 0 auto;
        }
    }

    .el-carousel {
        height: 500px;

        .el-carousel__container {
            height: 90% !important;
        }

        .el-carousel__item {
            border-radius: 16px;
        }

        .el-image {
            width: 100%;
            height: 100%;
        }

        .image-slot {
            width: 100%;
            height: 100%;

            img {
                width: 70%;
                height: 90%;
                margin: 0 15%;
            }

            p {
                text-align: center;
                font-size: 24px;
                color: red;
            }
        }

    }

    .el-carousel__item .el-image>img {
        width: 100%;
        height: 100%;
        line-height: 588px;
        object-fit: cover;
    }

    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }

}

.big_wrap_photo {
    padding: 20px 0 !important;
}
</style>
    