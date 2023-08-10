import douyu from "@/assets/images/douyu.png"
import weibo from "@/assets/images/weibo.png"
import douyin from "@/assets/images/douyin.png"
import wyy from "@/assets/images/wyy.png"
import kg from "@/assets/images/kg.png"
import qy from "@/assets/images/qy.png"
import bili from "@/assets/images/bili.png"
import instagram from "@/assets/images/instagram.png"
import xhs from "@/assets/images/xhs.png"
import daizheyinyuequlvxing from "@/assets/images/daizheyinyuequlvxing.png"
import fuleyuan from "@/assets/images/fuleyuan.png"
import yuguang from "@/assets/images/yuguang.png"
import sinian from "@/assets/images/sinian.png"
import QQ from "@/assets/images/QQ.png"
import VX from "@/assets/images/VX.png"

/* contactUs 联系我们
 *{
 *   id:{
 *   title 联系方式
 *   center 联系方式
 *   img  图片
 *  },
 *}
 */
export var contactUs = [{
            title: 'QQ',
            center: [{
                    name: '叶子宇',
                    con: '346989693'
                },
                // {
                //     name: '周三鸽',
                //     con: '1845701248'
                // }
            ],
            img: QQ,
        },
        {
            title: 'VX',
            center: [{
                name: '叶子宇',
                con: 'yezituan_yu'
            }, ],
            img: VX,
        },
        {
            title: 'QQ群',
            center: [
                {
                    name: '78622游戏群',
                    con: '1127402136'
                },
                {
                    name: '二珂直播通知1群',
                    con: '583509730'
                },
                {
                    name: '二珂活动文件群',
                    con: '618535604'
                },
                {
                    name: '二珂的下次戒烟委员会',
                    con: '1127402136'
                },
            ],
            img: QQ,
        },
        // {//因二珂个人微博已去掉
        //     title: '二珂个人工作洽谈WeChat',
        //     center: [{
        //         name: 'Alba_1015 （何女士）',
        //         con: 'Alba_1015'
        //     }, ],
        //     img: VX,
        //     tag: 'danger'
        // },
    ]
    /* erkeLink
    各平台链接名称
    字段备注
        *{
            *   id:{
                *   title 标题
                *   name 名称
                *   img  图片
                *   herf 地址
                *   remarks 备注简写
            *  },
        *}
    */
export var erkeLink = {
        1: {
            title: '哔哩哔哩bilibili',
            remarks: '哔哩',
            name: '二珂呀呀呀',
            img: bili,
            herf: 'https://space.bilibili.com/10753901?spm_id_from=333.337.0.0'
        },
        2: {
            title: '抖音',
            name: '二珂Chloe',
            remarks: '抖音',
            img: douyin,
            herf: 'https://www.douyin.com/user/MS4wLjABAAAAUGBNwQYCdp7JQAdnPMRBLYlLvENa1-G3aHwlZHhFeng'
        },
        3: {
            title: '个人官方抖音',
            remarks: '抖音',
            name: '二珂的迷猴桃小站',
            img: douyin,
            herf: 'https://www.douyin.com/user/MS4wLjABAAAAvF2YWRC2fZwwJf-WMHt1O3A0y48oSknG-eYqYybXT4vzMGOt-5Z8UoZJJOKDdz5x'
        },
        4: {
            title: '小红书',
            remarks: '小红书',
            name: '二珂',
            class: 'red',
            img: xhs,
            herf: 'https://www.xiaohongshu.com/user/profile/5ad78361e8ac2b1fca15ff66'
        },
        5: {
            title: '网易云音乐',
            remarks: '网易云',
            class: 'red',
            name: '二珂呀呀呀',
            img: wyy,
            herf: 'https://music.163.com/#/user/home?id=104601777'
        },
        6: {
            title: '网易云音乐',
            name: '二珂 歌手',
            img: wyy,
            herf: 'https://music.163.com/#/artist?id=1081635'
        },
        7: {
            title: '直播平台',
            remarks: '斗鱼',
            name: '斗鱼78622',
            img: douyu,
            herf: 'https://www.douyu.com/78622'
        },
        8: {
            title: '微博',
            remarks: '微博',
            name: '二珂Chloe',
            class: 'red',
            img: weibo,
            herf: 'https://weibo.com/u/1910672761'
        },
        9: {
            title: '酷狗音乐',
            remarks: '酷狗',
            class: 'kg',
            name: '二珂 歌手',
            img: kg,
            herf: 'https://www.kugou.com/singer/info/5NFEK0C350FF5/'
        },
        10: {
            title: 'QQ音乐',
            remarks: 'QQ音乐',
            class: 'qy',
            name: '二珂歌手',
            img: qy,
            herf: 'https://y.qq.com/n/ryqq/profile/like/song?uin=owvsNKSP7wvAon**'
        },
        11: {
            title: 'instagram',
            remarks: 'instagram',
            name: 'erke_chloe',
            img: instagram,
            herf: ''
        },
    }
    /*
    酷狗音乐的数据 现在用不到
    { 
        *"song_name" → 歌曲名字 
        *"song_url" → 歌曲链接 
        *"song_duration" → 歌曲时长（这个后期应该不需要到，我顺便爬的）
        *"song_publish_date" → 歌曲上传日期（这个后期应该不需要到，我顺便爬的） 
        *"album_name" → 专辑名字 
        *"album_img" → 专辑封面 
        *"singer_name" → 歌手名字
    }
    */
    /* erkeAlbum
    { 
        * id 专辑ID
        * title 专辑名称
        * img 图片
        * background 背景解说
        * song
            * name → 歌曲名字 
            * makeWord → 作词 
            * compose → 作曲 
            * arranger → 编曲
            * qqyinyue → QQ音乐
            * kugouyinyue → 酷狗音乐
            * kuwoyinyue: → 酷我音乐
    }
    */
export var erkeAlbum = [{
            id: 1,
            title: '《带着音乐去旅行》',
            img: daizheyinyuequlvxing,
            background: [
                `珂这个95后的传奇，延续着她一贯的选曲品味、演绎方式，加上筹备专辑这段时间的专业训练，在林迈可这位超级制作人的操刀下，完成这张专辑。保留与改变、流行与尝新、梦幻与知青，两两之间的拿捏，在这张专辑里一定能感受到这微妙的分寸与制作的诚意。超级制作人林迈可除了用心去分析二珂的声线，还深入她的内心去了解她的欣赏与崇拜，不但亲自为二珂写歌，还集结一流创作人戴佩妮、魏如萱、方文山、Def Tech...之创作,为二珂的第一张个人专辑，注入清新的音乐元素与高聆听度的娱乐价值，铺陈出一段青春的旅程`,
                `青春 是一场单程旅行`,
                `当我 走过爱情的四季`,
                `当我 体会冷暖的交替`,
                `谢谢你 让我在最美的年纪与你相遇`
            ],
            song: [{
                    name: "带着音乐去旅行",
                    makeWord: "郑中庸、陈秀珠、廖庭翊",
                    compose: "魏如萱、Risto Asikainen、Janne Hyöty",
                    arranger: "周菲比"
                },
                { name: "樱花粉的浪漫", compose: "林迈可", makeWord: "郑中庸", arranger: "林迈可" },
                { name: "三角题", compose: "戴佩妮", makeWord: "戴佩妮", arranger: "黄宣铭" },
                { name: "第二次表白", compose: "Def Tech、林迈可", makeWord: "Def Tech、许郁翎", arranger: "BGMK" },
                { name: "I Love Us", compose: "胡珂宁", makeWord: "黎国基、陈秀珠", arranger: "Clement Yang" },
                { name: "枫红", compose: "林迈可", makeWord: "方文山", arranger: "林迈可" },
                { name: "飘", compose: "魏诗泉", makeWord: "王奕", arranger: "魏诗泉" },
                { name: "但是我们分手了", compose: "朱国豪", makeWord: "颜佳薏", arranger: "蔡侑良" },
                { name: "棉被", compose: "魏诗泉", makeWord: "王奕", arranger: "魏诗泉" },
                { name: "放心", compose: "陈仪芬", makeWord: "郑中庸", arranger: "陈仪芬" },
            ]
        },
        {
            id: 2,
            title: '《复乐园》',
            img: fuleyuan,
            background: [
                `久在樊笼里，今日《复乐园》`,
                `唯一真实的乐园是已经失去的乐园`,
                `唯一有吸引力的世界是尚未踏入的世界`,
            ],
            song: [{
                    name: "《复乐园》",
                    makeWord: "李姝",
                    compose: "邹頔、胡晨",
                    arranger: "邹頔",
                    qqyinyue: 'https://y.qq.com/n/ryqq/songDetail/002WeNZr1YFwDB',
                    kugouyinyue: 'https://www.kugou.com/share/1wM1O6euOV3.html?id=1wM1O6euOV3#hash=3E54BA9E2A0718DFFF1A9BF0B3FB3CD1&album_id=30167611&album_audio_id=220378170',
                    kuwoyinyue: 'http://www.kuwo.cn/play_detail/78686842?f=ip&t=usercopy',
                },
                {
                    name: "《橘子树下的阳光》",
                    makeWord: "李姝",
                    compose: "胡晨、邹頔",
                    arranger: "胡晨"
                },
                {
                    name: "《厌氧》",
                    makeWord: "Joi W",
                    compose: "史俊陆",
                    arranger: "沈会斌"
                },
                {
                    name: "《爱应该》",
                    makeWord: "李姝",
                    compose: "刘颜嘉",
                    arranger: "Terence Teo"
                },
                {
                    name: "《走失在1990》",
                    makeWord: "李姝",
                    compose: "吴烦",
                    arranger: "张步鸿"
                },
                {
                    name: "我终究是爱你的》",
                    makeWord: "李姝",
                    compose: "刘颜嘉",
                    arranger: "Terence Teo"
                },
                {
                    name: "《即兴流亡》",
                    makeWord: "Joi W",
                    compose: "林暐浩",
                    arranger: "林暐浩"
                },
                {
                    name: "《蓝莓之夜》",
                    makeWord: "李姝",
                    compose: "邹頔、胡晨",
                    arranger: "邹頔"
                },
                {
                    name: "《纽扣》",
                    makeWord: "Joi W",
                    compose: "林世千",
                    arranger: "林世千"
                },
                {
                    name: "《自我拼图说明》",
                    makeWord: "Joi W",
                    compose: "陈嬛",
                    arranger: "张步鸿"
                },
            ]
        },
        {
            id: 3,
            title: '《余光》',
            img: yuguang,
            background: [
                `周二珂 2020全新个人专辑《余光》`,
                `在岁末与年初交汇之际`,
                `一同听二珂，聆听关于[爱]的种种`,
                `凭借清新自然的声音，已发行两张个人专辑的周二珂在乐坛有着不俗口碑，唱红了许多大热单曲，而她对于音乐的执着与坚持，交融在她充满故事感的声音和出众的唱功之中，为自己的歌手事业描绘着更大的可能。`,
                `暌违一年，以红发亮眼造型示人的周二珂...`
            ],
            song: [
                { name: "出现", compose: "", makeWord: "", arranger: "" },
                { name: "十字路口", compose: "", makeWord: "", arranger: "" },
                { name: "给我一个快乐的星期天", compose: "", makeWord: "", arranger: "" },
                { name: "", compose: "", makeWord: "", arranger: "" },
                { name: "听你说", compose: "", makeWord: "", arranger: "" },
                { name: "有些情绪和夜晚有关", compose: "", makeWord: "", arranger: "" },
                { name: "土星环", compose: "", makeWord: "", arranger: "" },
                { name: "初初", compose: "", makeWord: "", arranger: "" },
                { name: "懂了", compose: "", makeWord: "", arranger: "" },
                { name: "余光", compose: "", makeWord: "", arranger: "" },
            ]
        },
        {
            id: 4,
            title: '《思念从夜晚徒步到天明》',
            img: sinian,
            background: [
                `思念，在夜间循环。到白昼，汇聚成想你的光。`,
                `夜幕降临，黑色的世界最容易滋生温柔的不安，将与它博弈，将与它共存。无论如何，终究是任由思念徒步到黎明，等一束光，捍卫内心最脆弱的地方。希望在夜晚到来的时候，思念在呼风唤雨，而这一张能静静地陪着你。`,
            ],
            song: [{
                    name: "月光",
                    makeWord: "",
                    compose: "",
                    arranger: ""
                },
                {
                    name: "零点简讯",
                    makeWord: "",
                    compose: "",
                    arranger: ""
                },
                {
                    name: "幻梦",
                    makeWord: "",
                    compose: "",
                    arranger: ""
                },
                {
                    name: "光芒",
                    makeWord: "",
                    compose: "",
                    arranger: ""
                },
            ]
        }
    ]
    /* erkeData
    二珂简介 
    *{
        * icon ->没有可以不写 前面展示icon =>el-icon-user或者空
        * text -> 判断是否是大标题 加粗效果 没有可以不写 =>true或者空
        * timeline -> 判断右边是否有时间线格式展示 没有可以不写 =>true或者空
        * title -> 标题字段 =>个人简介
        * conter -> 内容讲解或者备注
        * children -> 下面内容&右边内容
        * [
            * {
                * tag: -> 标签名称
                * herf -> 标签跳转地址
                * type -> 特殊标签展示（比如置灰色=）
                * img -> 图片展示 因展示图片太小 尽量选用内存小的小图
                * 时间线展示
                * time -> 时间线
                * title -> 标题
                *conter -> 内容讲解或者备注
            * }
        *]
    *}
    */
export var erkeData = [{
        "icon": "el-icon-user",
        "text": true,
        "title": "个人简介",
        img: 'https://apic.douyucdn.cn/upload/avatar_v3/201807/dca3c7ece148ee546d611ed0815fbbd0_big.jpg',
        "children": [{
                "icon": "el-icon-user",
                "title": "艺名",
                "children": [{
                    tag: '周二珂',
                }]
            },
            {
                "icon": "el-icon-user",
                "title": "中文名",
                "children": [{
                    tag: '周可',
                }]
            },
            {
                "icon": "el-icon-user",
                "title": "英文名",
                "children": [{
                    tag: 'Chloe',
                }]
            },
            {
                "icon": "el-icon-user",
                "title": "曾用名",
                "children": [{
                        tag: '二珂',
                    },
                    {
                        tag: '纳妮',
                    },
                    {
                        tag: '纳英俊小同学',
                    },
                    {
                        tag: '橙英俊',
                    }
                ]
            },
            {
                "icon": "el-icon-user",
                "title": "身高",
                "children": [{
                    tag: '164CM',
                }]
            },
            {
                "icon": "el-icon-user",
                "title": "体重",
                "children": [{
                    tag: '42.4KG',
                }]
            },
            {
                "icon": "el-icon-user",
                "title": "腰围",
                "children": [{
                    tag: '57',
                }]
            },
            {
                "icon": "el-icon-user",
                "title": "生日",
                "children": [{
                    tag: '1995年1月6日',
                }]
            },
            {
                "icon": "el-icon-user",
                "title": "国籍",
                "children": [{
                    tag: '中国',
                }]
            },
            {
                "icon": "el-icon-user",
                "title": "民族",
                "children": [{
                    tag: '汉族',
                }]
            },
            {
                "icon": "el-icon-user",
                "title": "出生地",
                "children": [{
                    tag: '广东省湛江市赤坎区',
                }]
            },
            {
                "icon": "el-icon-user",
                "title": "职业",
                "children": [{
                        tag: '网络主播',
                    },
                    {
                        tag: '歌手',
                    }
                ]
            },
            {
                "icon": "el-icon-user",
                "title": "毕业院校",
                "children": [{
                    tag: '北京现代音乐学院(2015年2月退学)',
                }]
            },
            {
                "icon": "el-icon-user",
                "title": "专业",
                "children": [{
                    tag: '爵士演唱系',
                }]
            },
            {
                "icon": "el-icon-user",
                "title": "星座",
                "children": [{
                    tag: '摩羯座',
                }]
            },
            {
                "icon": "el-icon-user",
                "title": "口头禅",
                "children": [{
                    tag: '额',
                }]
            },
            {
                "icon": "el-icon-user",
                "title": "兴趣爱好",
                "children": [{
                        tag: '唱歌',
                    },
                    {
                        tag: '宫崎骏',
                    },
                    {
                        tag: '动漫',
                    },
                    {
                        tag: '电影',
                    },
                    {
                        tag: 'ONE PIECE',
                    },
                    {
                        tag: '宅',
                    },
                    {
                        tag: '音乐',
                    },
                ]
            },
            {
                "icon": "el-icon-user",
                "title": "偶像",
                "children": [{
                        tag: '周星驰',
                    },
                    {
                        tag: '戴佩妮',
                    },
                    {
                        tag: '周杰伦',
                    },
                    {
                        tag: '王菲',
                    },
                    {
                        tag: '刘亦菲',
                    },
                ]
            },
            {
                "icon": "el-icon-user",
                "title": "特长",
                "children": [{
                        tag: '游戏',
                    },
                    {
                        tag: '唱歌',
                    },
                    {
                        tag: '爵士乐',
                    },
                ]
            },
            {
                "icon": "el-icon-user",
                "title": "游戏ID",
                "children": [{
                        tag: '高贵基因',
                    },
                    {
                        tag: '亚熙',
                    },
                    {
                        tag: '卖米店',
                    },
                    {
                        tag: '盐烤牛角包',
                    },
                    {
                        tag: '社交好友',
                    },
                ]
            },
            {
                "icon": "el-icon-user",
                "title": "闺蜜",
                "children": [{
                        tag: '林初寒',
                    },
                    {
                        tag: '薛晓妮（小妮）',
                    },
                    {
                        tag: '王沉珂',
                    },
                    {
                        tag: '周婷',
                    },
                    {
                        tag: '葛小舞',
                    },
                    {
                        tag: '漆昱辰（七七）',
                    },
                ]
            },
            {
                "icon": "el-icon-user",
                "title": "同事",
                "children": [{
                        tag: '阿冷',
                    },
                    {
                        tag: '女流66',
                    },
                    {
                        tag: '菠萝赛东',
                    },
                    {
                        tag: '...等',
                    },
                ]
            },
        ]
    },
    {
        "icon": "el-icon-user",
        "title": "个人社交平台",
        conter: '展开后下列标签点击可直接跳转',
        "text": true,
        "children": [{
                "img": erkeLink[1]['img'],
                "title": erkeLink[1]['title'],
                "children": [{
                    tag: erkeLink[1]['name'],
                    herf: erkeLink[1]['herf']
                }]
            },
            {
                "img": erkeLink[2]['img'],
                "title": erkeLink[2]['title'],
                "children": [{
                    tag: erkeLink[2]['name'],
                    herf: erkeLink[2]['herf']
                }]
            },
            {
                "img": erkeLink[3]['img'],
                "title": erkeLink[3]['title'],
                "children": [{
                    tag: erkeLink[3]['name'],
                    herf: erkeLink[3]['herf']
                }]
            },
            {
                "img": erkeLink[4]['img'],
                "title": erkeLink[4]['title'],
                "children": [{
                    tag: erkeLink[4]['name'],
                    herf: erkeLink[4]['herf']
                }]
            },
            {
                "img": erkeLink[5]['img'],
                "title": erkeLink[5]['title'],
                "children": [{
                    tag: erkeLink[5]['name'],
                    herf: erkeLink[5]['herf']
                }]
            },
            {
                "img": erkeLink[7]['img'],
                "title": erkeLink[7]['title'],
                "children": [{
                    tag: erkeLink[7]['name'],
                    herf: erkeLink[7]['herf']
                }]
            },
            {
                "img": erkeLink[8]['img'],
                "title": erkeLink[8]['title'],
                "children": [{
                    tag: erkeLink[8]['name'],
                    herf: erkeLink[8]['herf']
                }]
            },
            {
                "img": erkeLink[11]['img'],
                "title": erkeLink[11]['title'],
                "children": [{
                    tag: erkeLink[11]['name'],
                    herf: erkeLink[11]['herf']
                }]
            },
        ]
    },
    {
        "icon": "el-icon-user",
        text: true,
        "title": "人物经历",
        conter: '新兴游戏（娱乐）主播，小清新歌手，英雄联盟国服“大腿”组选手...',
        "children": [{
                "icon": "el-icon-user",
                "timeline": true,
                "title": "早年经历",
                "children": [{
                        conter: `新兴游戏（娱乐）主播，小清新歌手，英雄联盟国服“大腿”组选手，在来到斗鱼TV平台直播仅仅2天之后就拥有了惊人数量的粉丝，性格时而高冷时而逗比，直播时翻唱了众多歌手的经典作品，尤其王菲的歌曲翻唱，被粉丝称为电竞王菲。`,
                        herf: ''
                    },
                    {
                        conter: `作为最早一批入驻熊猫TV的主播，周二珂直播间的订阅人数高达119万，也是国内直播人气排名前列的娱乐主播之一。通过一曲翻唱的《走在冷风中》征服了大批观众，截止2016年11月，微博的粉丝已突破200万，翻唱周杰伦的歌曲《告白气球》，转发量更是突破11万人次，网易云音乐点击量超过866万，一举创造国内娱乐主播里“前无古人”的成绩。`,
                        herf: ''
                    },
                    {
                        conter: `截至2017年1月，过去的4年中在直播期间创造出令人惊艳的佳绩。微博粉丝突破225万，熊猫TV 拥有128万订阅，网易音乐拥有51万订阅。翻唱经典曲目《告白气球》更是突破了1077万次总浏览量，同时在海外视频网YouTube获得513万点击量。二珂表示，12岁开始发现自己爱上唱歌，透过音乐能带给她强大的力量，她希望通过自己的歌声带给别人力量。随着伴奏全场聆听二珂演唱《告白气球》。`,
                        herf: ''
                    },
                ]
            },
            {
                "icon": "el-icon-user",
                "title": "演艺生涯",
                "timeline": true,
                "children": [{
                        time: '2014年10月17日',
                        title: `斗鱼直播首播`,
                        herf: ''
                    },
                    {
                        time: '2016年11月',
                        title: `签约熊貓直播`,
                        herf: ''
                    },
                    {
                        time: '2016年11月22日',
                        title: `签约上海香蕉计划文化发展有限公司`,
                        herf: ''
                    },
                    {
                        time: '2017年9月14日',
                        title: `出版首张专辑第一首单曲《樱花粉的浪漫》`,
                        herf: ''
                    },
                    {
                        time: '2017年9月20日',
                        title: `2017年巡演发布会`,
                        herf: ''
                    },
                    {
                        time: '2017年9月21日',
                        title: `出版首张专辑第二首单曲“三角题’`,
                        herf: ''
                    },
                    {
                        time: '2017年10月12日',
                        title: `出版首张专辑第三首单曲“带着音乐去旅行”`,
                        herf: ''
                    },
                    {
                        time: '2018年3月1日',
                        title: `回归斗鱼`,
                        herf: ''
                    },
                ]
            },
        ]
    },
    {
        "icon": "el-icon-video-camera",
        "title": "音乐演出",
        "timeline": 'one',
        "children": [{
                time: '2016年1月10日',
                title: `首场演唱会`,
                herf: ''
            },
            {
                time: '2017年1月6日',
                title: `上海浅水湾首次专场演唱会`,
                herf: ''
            },
            {
                time: '2017年4月23日',
                title: `上海世博公园香蕉计划BIG嘉年华`,
                herf: ''
            },
            {
                time: '2017年6月12日',
                title: `上海第三届WGC微信游戏精英赛总决赛(献唱)  `,
                herf: ''
            },
            {
                time: '2017年10月13日',
                title: `上海万代南梦宫《带着音乐去旅行》全国巡回演唱会`,
                herf: ''
            },
            {
                time: '2017年10月19日',
                title: `重庆寅派动力（袁家岗小时代L5）新专辑巡回演唱会`,
                herf: ''
            },
            {
                time: '2017年10月27日',
                title: `台北 ATT SHOWBOX 新专辑巡回演唱会`,
                herf: ''
            },
            {
                time: '2017年11月11日',
                title: `武汉江城民谣音乐节`,
                herf: ''
            },
            {
                time: '2017年11月17日',
                title: `广东深圳站 A8 Live House 新专辑巡回演唱会`,
                herf: ''
            },
            {
                time: '2018年8月18日',
                title: `北京来福Livehouse`,
                herf: ''
            },
            {
                time: '2019年1月6日',
                title: `上海万代南梦宫演唱会`,
                conter: '（注：万代南梦宫文化艺术中心为 原浅水湾艺术文化中心）'
            },
            {
                time: '2019年1月19日',
                title: `北京糖果俱乐部演唱会`,
                herf: ''
            },
            {
                time: '2021年1月10日',
                title: `裘德Chiu深圳巡演(嘉宾驻唱)`,

            },
        ]
    },
    {
        "icon": "el-icon-video-camera",
        "title": "商业活动",
        "timeline": 'one',
        "children": [{
                time: '2017年6月18日',
                title: `上海世博创意秀场Fashion Pop华谊兄弟时尚之夜`,
                herf: ''
            },
            {
                time: '2017年10月17日',
                title: `2017第十届金投赏国际创意节`,
                herf: ''
            },
            {
                time: '2018年4月28日',
                title: `斗鱼嘉年华红毯`,
                herf: ''
            },
            {
                time: '2019年1月5日',
                title: `斗鱼盛典红毯`,
                herf: ''
            },
        ]
    },
    {
        "icon": "el-icon-user",
        "title": "个人成就",
        "timeline": 'one',
        "children": [{
                time: '2015年',
                title: `电竞女神排名第三`,
                herf: ''
            },
            {
                time: '2019年10月17日',
                title: `入选2019福布斯中国30岁以下精英榜`,
                herf: ''
            },
        ]
    },
    {
        "icon": "el-icon-headset",
        "title": "代表作品",
        text: true,
        children: [{
                "icon": "el-icon-headset",
                "title": "翻唱作品",
                "children": [{
                        tag: '《告白气球》',
                        herf: ''
                    },
                    {
                        tag: '《匆匆那年》',
                        herf: ''
                    },
                    {
                        tag: '《走在冷风中》',
                        herf: ''
                    },
                    {
                        tag: '《慢慢喜欢你》',
                        herf: ''
                    },
                    {
                        tag: '《孤独她呀》',
                        herf: ''
                    },
                    {
                        tag: '《我只是在睡前想了一下你》',
                        herf: ''
                    },
                ]
            },
            {
                "icon": "el-icon-headset",
                "title": "个人作品",
                "children": [{
                        tag: '《樱花粉的浪漫》',
                        herf: ''
                    },
                    {
                        tag: '《三角题》',
                        herf: ''
                    },
                    {
                        tag: '《放心》',
                        herf: ''
                    },
                    {
                        tag: '《十字路口》',
                        herf: ''
                    },
                ]
            },
            {
                "icon": "el-icon-headset",
                "title": "音乐专辑",
                "children": [{
                        tag: '《带着音乐去旅行》',
                        herf: ''
                    },
                    {
                        tag: '《复乐园》',
                        herf: ''
                    },
                    {
                        tag: '《余光》',
                        herf: ''
                    },
                    {
                        tag: '《思念从夜晚徒步到天明》',
                        herf: ''
                    },
                ]
            },
            {
                "icon": "el-icon-headset",
                "title": "影视OST",
                "children": [{
                        tag: '《多遥远》',
                        herf: ''
                    },
                    {
                        tag: '《谁的现在没有藏着过往》',
                        herf: ''
                    },
                    {
                        tag: '《非常替身》',
                        herf: ''
                    },
                    {
                        tag: '《月下泪》',
                        herf: ''
                    },
                ]
            },
            {
                "icon": "el-icon-headset",
                "title": "合唱作品",
                "children": [{
                        tag: '《匆匆》&赵钶',
                        herf: ''
                    },
                    {
                        tag: '《听你说》&冯提莫',
                        herf: ''
                    },
                    {
                        tag: '《世界上另一个我》&阿冷',
                        herf: ''
                    },
                    {
                        tag: '《爱我行不行》&徐良',
                        herf: ''
                    },
                ]
            },
            {
                "icon": "el-icon-headset",
                "title": "英雄联盟同人歌曲",
                "children": [{
                        tag: '《泳池派对》',
                        herf: ''
                    },
                    {
                        tag: '《这里有埋伏》',
                        herf: ''
                    },
                ]
            },

        ]
    },
    {
        "icon": "el-icon-video-camera",
        text: true,
        "title": "影视作品",
        children: [{
                "icon": "el-icon-video-camera",
                "title": "综艺作品",
                "timeline": true,
                "children": [{
                        time: '2016年11月3日',
                        title: `《女神经常来》`,
                        herf: ''
                    },
                    {
                        time: '2016年9月10日',
                        title: `《PandaKill》第一季`,
                        herf: ''
                    },
                    {
                        time: '2017年9月21日',
                        title: `PPTV《乐人无数》`,
                        herf: ''
                    },
                    {
                        time: '2017年10月14日',
                        title: `《新电玩快打》`,
                        herf: ''
                    },
                    {
                        time: '2017年10月21日',
                        title: `《娱乐百分百》`,
                        herf: ''
                    },
                    {
                        time: '2017年11月26日',
                        title: `《PandaKill》第四季`,
                        herf: ''
                    },
                    {
                        time: '2017年10月21日',
                        title: `《荒岛特训》手游活动推广`,
                        herf: ''
                    },
                    {
                        time: '2018年5月19日',
                        title: `《快乐大本营》`,
                        herf: ''
                    },
                    {
                        time: '2018年8月4日',
                        title: `《嗨！蓝朋友》之《奔跑吧》`,
                        herf: ''
                    },
                    {
                        time: '2018年8月11日',
                        title: `《嗨！蓝朋友》之《王牌对王牌》`,
                        herf: ''
                    },
                    {
                        time: '2018年12月27日',
                        title: `《超越吧！英雄》`,
                        herf: ''
                    },
                ]
            },
            {
                "icon": "el-icon-video-camera",
                "title": "影视微剧",
                "timeline": true,
                "children": [{
                        time: '2021年2月8日',
                        title: `《重生只为追影帝》饰  顾瑶瑶 `,
                        herf: ''
                    },
                    {
                        time: '2016年8月12日',
                        title: `《微微一笑很倾城》客串`,
                        herf: ''
                    },
                ]
            },
        ]
    },
    {
        "img": douyu,
        text: true,
        "title": "斗鱼主播百科",
        children: [{
                "icon": "el-icon-user",
                "title": "主播个人属性",
                "children": [{
                    tag: '身高163.8 （164）CM'
                }, ]
            },
            {
                "img": douyu,
                "title": "特色弹幕",
                "children": [{
                        tag: '无语住了',
                    },
                    {
                        tag: '真有你的',
                    },
                    {
                        tag: '珂珂啵啵',
                    },
                    {
                        tag: '怎么肥四',
                    },
                    {
                        tag: '抽了吧',
                    },
                    {
                        tag: '好腿',
                    },
                ]
            },
            {
                "img": douyu,
                "title": "颜值打分",
                "children": [{
                        tag: '沉鱼落雁 ',
                    },
                    {
                        tag: '倾国倾城',
                    },
                    {
                        tag: '闭月羞花',
                    },
                    {
                        tag: '仙女下凡',
                    },
                    {
                        tag: '邻家小妹',
                    },
                    {
                        tag: '上海刘亦菲 ',
                    },
                ]
            },
            {
                "img": douyu,
                "title": "斗鱼外号",
                "children": [{
                        tag: '慈善赌王 ',
                    },
                    {
                        tag: '上海碧螺春',
                    },
                    {
                        tag: '斗鱼公务员',
                    },
                    {
                        tag: '电竞王菲',
                    },
                    {
                        tag: '上海百灵鸟 ',
                    },
                    {
                        tag: '鸽王 ',
                    },
                ]
            },
            {
                "img": douyu,
                "title": "直播风格",
                "children": [{
                        tag: '恬静美好 ',
                    },
                    {
                        tag: '清纯可爱',
                    },
                    {
                        tag: '清新自然 ',
                    },
                    {
                        tag: '甜妹',
                    },
                    {
                        tag: '邻家少女 ',
                    },
                    {
                        tag: '搞笑女 ',
                    },
                ]
            },
        ]
    },
    // {
    //     "icon": "el-icon-bell",
    //     "title": "二珂个人工作洽谈WeChat",
    //     "text": true,
    //     "children": [
    //         {
    //             tag: 'Alba_1015 （何女士）',
    //             type: 'success',
    //             tooltip:'点击复制'
    //         }
    //     ]
    // },
]