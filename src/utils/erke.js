import douyu from "@/assets/images/douyu.png"
import weibo from "@/assets/images/weibo.png"
import douyin from "@/assets/images/douyin.png"
import wyy from "@/assets/images/wyy.png"
import kg from "@/assets/images/kg.png"
import qy from "@/assets/images/qy.png"
import bili from "@/assets/images/bili.png"
import instagram from "@/assets/images/instagram.png"
import xhs from "@/assets/images/xhs.png"

/*
字段备注
{
    id:{
        title:'',//标题
        name:'',//名称
        img:, //图片
        herf:''//地址
    },
]
}
*/
export var erkeLink = {
    1:{
        title:'哔哩哔哩bilibili',
        name:'二珂呀呀呀',
        img:bili,
        herf:'https://space.bilibili.com/10753901?spm_id_from=333.337.0.0'
    },
    2:{
        title:'抖音',
        name:'二珂Chloe',
        img:douyin,
        herf:'https://www.douyin.com/user/MS4wLjABAAAAUGBNwQYCdp7JQAdnPMRBLYlLvENa1-G3aHwlZHhFeng'
    },
    3:{
        title:'个人官方抖音',
        name:'二珂的迷猴桃小站',
        img:douyin,
        herf:'https://www.douyin.com/user/MS4wLjABAAAAvF2YWRC2fZwwJf-WMHt1O3A0y48oSknG-eYqYybXT4vzMGOt-5Z8UoZJJOKDdz5x'
    },
    4:{
        title:'小红书',
        name:'二珂',
        img:xhs,
        herf:'https://www.xiaohongshu.com/user/profile/5ad78361e8ac2b1fca15ff66'
    },
    5:{
        title:'网易云音乐',
        name:'二珂呀呀呀',
        img:wyy,
        herf:'https://music.163.com/#/user/home?id=104601777'
    },
    6:{
        title:'网易云音乐',
        name:'二珂 歌手',
        img:wyy,
        herf:'https://music.163.com/#/artist?id=1081635'
    },
    7:{
        title:'直播平台',
        name:'斗鱼78622',
        img:douyu,
        herf:'https://www.douyu.com/78622'
    },
    8:{
        title:'微博',
        name:'二珂Chloe',
        img:weibo,
        herf:'https://weibo.com/u/1910672761'
    },
    9:{
        title:'酷狗',
        name:'二珂 歌手',
        img:kg,
        herf:'https://www.kugou.com/singer/info/5NFEK0C350FF5/'
    },
    10:{
        title:'QQ音乐',
        name:'二珂歌手',
        img:qy,
        herf:'https://y.qq.com/n/ryqq/profile/like/song?uin=owvsNKSP7wvAon**'
    },
    11:{
        title:'instagram',
        name:'erke_chloe',
        img:instagram,
        herf:''
    },
}

/*
字段备注
{
    "icon":"",//没有可以不写 前面展示icon =>el-icon-user或者空
    "text":true,//判断是否是大标题 加粗效果 没有可以不写 =>true或者空
    "timeline":true,//判断右边是否有时间线格式展示 没有可以不写 =>true或者空
    "title": "",//标题字段 =>个人简介
    conter:''//内容讲解或者备注
    "children": [//下面内容&右边内容
    {
        tag:'',//标签名称
        herf:'',//标签跳转地址
        type:'',//特殊标签展示（比如置灰色=）
        img:'',//图片展示 因展示图片太小 尽量选用内存小的小图
        时间线展示
        time:'',//时间线
        title:``,//标题
        conter:''//内容讲解或者备注
    }
]
}
*/
export var erkeData = [
    {
        "icon": "el-icon-user",
        "text": true,
        "title": "个人简介",
        img: 'https://apic.douyucdn.cn/upload/avatar_v3/201807/dca3c7ece148ee546d611ed0815fbbd0_big.jpg',
        "children": [
            // {
            // }
            {
                "icon": "el-icon-user",
                "title": "艺名",
                "children": [
                    {
                        tag: '周二珂',
                    }
                ]
            },
            {
                "icon": "el-icon-user",
                "title": "中文名",
                "children": [
                    {
                        tag: '周可',
                    }
                ]
            },
            {
                "icon": "el-icon-user",
                "title": "英文名",
                "children": [
                    {
                        tag: 'Chloe',
                    }
                ]
            },
            {
                "icon": "el-icon-user",
                "title": "曾用名",
                "children": [
                    {
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
                "children": [
                    {
                        tag: '164CM',
                    }
                ]
            },
            {
                "icon": "el-icon-user",
                "title": "体重",
                "children": [
                    {
                        tag: '42.4KG',
                    }
                ]
            },
            {
                "icon": "el-icon-user",
                "title": "腰围",
                "children": [
                    {
                        tag: '57',
                    }
                ]
            },
            {
                "icon": "el-icon-user",
                "title": "生日",
                "children": [
                    {
                        tag: '1995年1月6日',
                    }
                ]
            },
            {
                "icon": "el-icon-user",
                "title": "国籍",
                "children": [
                    {
                        tag: '中国',
                    }
                ]
            },
            {
                "icon": "el-icon-user",
                "title": "民族",
                "children": [
                    {
                        tag: '汉族',
                    }
                ]
            },
            {
                "icon": "el-icon-user",
                "title": "出生地",
                "children": [
                    {
                        tag: '广东省湛江市赤坎区',
                    }
                ]
            },
            {
                "icon": "el-icon-user",
                "title": "职业",
                "children": [
                    {
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
                "children": [
                    {
                        tag: '北京现代音乐学院(2015年2月退学)',
                    }
                ]
            },
            {
                "icon": "el-icon-user",
                "title": "专业",
                "children": [
                    {
                        tag: '爵士演唱系',
                    }
                ]
            },
            {
                "icon": "el-icon-user",
                "title": "星座",
                "children": [
                    {
                        tag: '摩羯座',
                    }
                ]
            },
            {
                "icon": "el-icon-user",
                "title": "口头禅",
                "children": [
                    {
                        tag: '额',
                    }
                ]
            },
            {
                "icon": "el-icon-user",
                "title": "兴趣爱好",
                "children": [
                    {
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
                "children": [
                    {
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
                "children": [
                    {
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
                "children": [
                    {
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
                "children": [
                    {
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
                "children": [
                    {
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
        conter:'展开后下列标签点击可直接跳转',
        "text": true,
        "children": [
            {
                "img":erkeLink[1]['img'],
                "title": erkeLink[1]['title'],
                "children": [
                    {
                        tag: erkeLink[1]['name'],
                        herf: erkeLink[1]['herf']
                    }
                ]
            },
            {
                "img":erkeLink[2]['img'],
                "title": erkeLink[2]['title'],
                "children": [
                    {
                        tag: erkeLink[2]['name'],
                        herf: erkeLink[2]['herf']
                    }
                ]
            },
            {
                "img":erkeLink[3]['img'],
                "title": erkeLink[3]['title'],
                "children": [
                    {
                        tag: erkeLink[3]['name'],
                        herf: erkeLink[3]['herf']
                    }
                ]
            },
            {
                "img":erkeLink[4]['img'],
                "title": erkeLink[4]['title'],
                "children": [
                    {
                        tag: erkeLink[4]['name'],
                        herf: erkeLink[4]['herf']
                    }
                ]
            },
            {
                "img":erkeLink[5]['img'],
                "title": erkeLink[5]['title'],
                "children": [
                    {
                        tag: erkeLink[5]['name'],
                        herf: erkeLink[5]['herf']
                    }
                ]
            },
            {
                "img":erkeLink[7]['img'],
                "title": erkeLink[7]['title'],
                "children": [
                    {
                        tag: erkeLink[7]['name'],
                        herf: erkeLink[7]['herf']
                    }
                ]
            },
            {
                "img":erkeLink[8]['img'],
                "title": erkeLink[8]['title'],
                "children": [
                    {
                        tag: erkeLink[8]['name'],
                        herf: erkeLink[8]['herf']
                    }
                ]
            },
            {
                "img":erkeLink[11]['img'],
                "title": erkeLink[11]['title'],
                "children": [
                    {
                        tag: erkeLink[11]['name'],
                        herf: erkeLink[11]['herf']
                    }
                ]
            },
        ]
    },
    {
        "icon": "el-icon-user",
        text: true,
        "title": "人物经历",
        conter:'新兴游戏（娱乐）主播，小清新歌手，英雄联盟国服“大腿”组选手...',
        "children":[
            {
                "icon": "el-icon-user",
                "timeline": true,
                "title": "早年经历",
                "children": [
                    {
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
                "children": [
                    {
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
        "children": [
            {
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
        "children": [
            {
                time: '2017年6月18日',
                title: `上海世博创意秀场Fashion Pop华谊兄弟时尚之夜`,
                herf: ''
            },
            {
                time: '2017年10月17日',
                title: `2017第十届金投赏国际创意节`,
                herf: ''
            },
        ]
    },
    {
        "icon": "el-icon-user",
        "title": "个人成就",
        "timeline": 'one',
        "children": [
            {
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
        children:[
            {
                "icon": "el-icon-headset",
                "title": "翻唱作品",
                "children": [
                    {
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
                "children": [
                    {
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
                "children": [
                    {
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
                "children": [
                    {
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
                "children": [
                    {
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
                "children": [
                    {
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
        children:[
            {
                "icon": "el-icon-video-camera",
                "title": "综艺作品",
                "timeline": true,
                "children": [
                    {
                        time: '2016年11月  3日',
                        title: `《女神经常来》`,
                        herf: ''
                    },
                    {
                        time: '2016年  9月10日',
                        title: `《PandaKill》第一季`,
                        herf: ''
                    },
                    {
                        time: '2017年11月26日',
                        title: `《PandaKill》第四季`,
                        herf: ''
                    },
                    {
                        time: '2017年10月21日 ',
                        title: `《荒岛特训》手游活动推广`,
                        herf: ''
                    },
                    {
                        time: '2018年  5月19日 ',
                        title: `《快乐大本营》`,
                        herf: ''
                    },
                    {
                        time: '2018年  8月  4日 ',
                        title: `《嗨！蓝朋友》之《奔跑吧》`,
                        herf: ''
                    },
                    {
                        time: '2018年  8月11日   ',
                        title: `《嗨！蓝朋友》之《王牌对王牌》`,
                        herf: ''
                    },
                    {
                        time: '2018年12月27日 ',
                        title: `《超越吧！英雄》`,
                        herf: ''
                    },
                ]
            },
            {
                "icon": "el-icon-video-camera",
                "title": "影视微剧",
                "timeline": true,
                "children": [
                    {
                        time: '2021年  2月  8日',
                        title: `《重生只为追影帝》饰  顾瑶瑶 `,
                        herf: ''
                    },
                    {
                        time: '2016年  8月12日',
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
        children:[
            {
                "icon": "el-icon-user",
                "title": "主播个人属性",
                "children": [
                    {
                        tag: '身高163.8 （164）CM'
                    },
                ]
            },
            {
                "img": douyu,
                "title": "特色弹幕",
                "children": [
                    {
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
                "children": [
                    {
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
                "children": [
                    {
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
                "children": [
                    {
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
