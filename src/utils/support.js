import bili from "@/assets/images/bili.png"
/* supportLink
UP主各平台链接名称
字段备注
    *{
        *   id:{
            *   title 标题
            *   name 名称
            *   img  图片
            *   herf 地址
            *   remarks 备注简写
            *   show 展开与否（前端控制后期加就可以）
            *   children 具体数据
        *  },
    *}
*/
var supportLink = {
        1: {
            title: '二珂的迷猴桃小站',
            remarks: '这里是二珂的迷猴桃小站，会更新一些关于二珂的视频哦~',
            imgUrl: 'https://wsingbssdl.kugou.com/060ae290b3bdceffa7f2ada54816c41e.png_188x188.png',
            show: true,
            children: [{

                    name: '二珂的迷猴桃小站',
                    type: 'bili',
                    show: false,
                    remarks: '这里是二珂的迷猴桃小站，会更新一些关于二珂的视频哦~',
                    herf: 'https://space.bilibili.com/315661291/?spm_id_from=333.999.0.0',
                },
                {
                    name: '二珂的迷猴桃小站',
                    id: '89628414841',
                    show: false,
                    imgUrl: '',
                    type: 'dy',
                    herf: 'https://www.douyin.com/user/MS4wLjABAAAAvF2YWRC2fZwwJf-WMHt1O3A0y48oSknG-eYqYybXT4vzMGOt-5Z8UoZJJOKDdz5x?is_search=1&list_name=follow&nt=0',
                    remarks: '稳定更新二珂的有趣内容 感谢您的关注',
                },
                {
                    name: '二珂的迷猴桃小站',
                    type: 'sing',
                    show: false,
                    imgUrl: 'https://wsingbssdl.kugou.com/060ae290b3bdceffa7f2ada54816c41e.png_188x188.png',
                    ID: '66139141',
                    remarks: '这里是二珂的迷猴桃小站，欢迎大家关注哦~ ',
                    herf: 'http://5sing.kugou.com/66139141/fc/1.html',
                },
            ]
        },
        2: {
            title: '云淡峰輕',
            imgUrl: 'data:image/webp;base64,UklGRsYCAABXRUJQVlA4ILoCAACwDQCdASo2ADYAPpE8mUkloyIhKhZtELASCWMAy4lBpuykhwq2XMQI6YcLqnW5J8AeZByPJbPjfumjNafMdGS4oi8IOg2lKpxlFZ2f3cPPhtamaw3RYtDfaFoodqRLfLkM+/n/VxozEqxS3slpBIYRB46Q00AAAP7+k6ilvR8dduKDqXxkCpUv71EsD/m//rBbMVd7aP4h3DJfRepq5ZMDjOeK+LPxywBkDJ8A7lXCYkUEAlRjQGVDxtQV5HqD7EucouV1eQ7ALJevtO2Vkyh4rmq8ufsyi34nKJk1LzZIb2lPWF7NIiPeoLGCgiKdfGIOgv1VoU1ABzZfSNX4BR43LsTmIdkizgrKV03oOsIn/A1crO1DeYbdG96Tyqx7T8nf76uujJHFzj6ooQ2eJWvgRBL0yFz65GJWCSCQifKy2XXr7Fr/Jk1R+MnFLXacWUMluUTaYUWiBab+j/i9DG/jrd6yiLP2oLWwABQ83LQFumjlDRu4vmOojqTGyLNRVMc0yjckQwmqwU5WuYSNi7ZoaXKiG0bLJPCpl1rETolK0c7YhB+rRk+KoCA30TbETTYycoNfLeiIUpQ8ICIIGJ2nKzD0hYurpSDOvLIhOrdSZFAvyvxVyiP+OM4JWvmaznmnJW173O6v5J/YfhI8wAEfIKPrfFFgE9HmyV9hlm8+/Kj02Y9Wdm9KxmjlzAn3zF5j3skNK+4Xf5q32ps1R31A9otbE2vdVRAZBWGI/dVI4YA2phO5nv9aHbwxpp14x30YEI1jVCCFPyS9jKnkNKw3HIeEC+tDtcjNfQBkvazs1xrVtqAhqbvRHgOmZvZlzIEMu7UjWyFqw/f27eHDhrVpEWu9RcEfdZ/i5xsxoaClZ1Pif+v8rpRDy8AivpO/TfQIVKZvurg2TIZPlylNTMaCNxWGUUekDugAAA==',
            show: false,
            children: [{
                    type: 'bili',
                    name: '云淡峰輕',
                    imgUrl: 'data:image/webp;base64,UklGRsYCAABXRUJQVlA4ILoCAACwDQCdASo2ADYAPpE8mUkloyIhKhZtELASCWMAy4lBpuykhwq2XMQI6YcLqnW5J8AeZByPJbPjfumjNafMdGS4oi8IOg2lKpxlFZ2f3cPPhtamaw3RYtDfaFoodqRLfLkM+/n/VxozEqxS3slpBIYRB46Q00AAAP7+k6ilvR8dduKDqXxkCpUv71EsD/m//rBbMVd7aP4h3DJfRepq5ZMDjOeK+LPxywBkDJ8A7lXCYkUEAlRjQGVDxtQV5HqD7EucouV1eQ7ALJevtO2Vkyh4rmq8ufsyi34nKJk1LzZIb2lPWF7NIiPeoLGCgiKdfGIOgv1VoU1ABzZfSNX4BR43LsTmIdkizgrKV03oOsIn/A1crO1DeYbdG96Tyqx7T8nf76uujJHFzj6ooQ2eJWvgRBL0yFz65GJWCSCQifKy2XXr7Fr/Jk1R+MnFLXacWUMluUTaYUWiBab+j/i9DG/jrd6yiLP2oLWwABQ83LQFumjlDRu4vmOojqTGyLNRVMc0yjckQwmqwU5WuYSNi7ZoaXKiG0bLJPCpl1rETolK0c7YhB+rRk+KoCA30TbETTYycoNfLeiIUpQ8ICIIGJ2nKzD0hYurpSDOvLIhOrdSZFAvyvxVyiP+OM4JWvmaznmnJW173O6v5J/YfhI8wAEfIKPrfFFgE9HmyV9hlm8+/Kj02Y9Wdm9KxmjlzAn3zF5j3skNK+4Xf5q32ps1R31A9otbE2vdVRAZBWGI/dVI4YA2phO5nv9aHbwxpp14x30YEI1jVCCFPyS9jKnkNKw3HIeEC+tDtcjNfQBkvazs1xrVtqAhqbvRHgOmZvZlzIEMu7UjWyFqw/f27eHDhrVpEWu9RcEfdZ/i5xsxoaClZ1Pif+v8rpRDy8AivpO/TfQIVKZvurg2TIZPlylNTMaCNxWGUUekDugAAA==',
                    remarks: '用最好的我赴你的约',
                    show: false,
                    herf: 'https://space.bilibili.com/338485759/?spm_id_from=333.999.0.0',
                    children: [{
                            name: '二珂单曲视频剪辑',
                            herf: 'https://space.bilibili.com/338485759/channel/seriesdetail?sid=266668'
                        },
                        {
                            name: '二珂直播录像',
                            herf: 'https://space.bilibili.com/338485759/channel/seriesdetail?sid=266651'
                        },
                        {
                            name: '二珂特别剪辑',
                            herf: 'https://space.bilibili.com/338485759/channel/seriesdetail?sid=266684'
                        },
                        {
                            name: '二珂20190106演唱会',
                            herf: 'https://space.bilibili.com/338485759/channel/seriesdetail?sid=266639'
                        }

                    ]
                },
                {
                    type: 'wyy',
                    show: false,
                    name: '云淡_峰輕',
                    imgUrl: 'http://p1.music.126.net/H2-mqohoT2dfE4y0j7pKHQ==/109951165261604230.jpg?param=50y50',
                    remarks: '二珂直播翻唱合集二珂的直播间douyu 78622~欢迎您来收听~！',
                    herf: 'https://music.163.com/#/user/home?id=302217120',
                    children: [{
                        name: '二珂直播翻唱合集',
                        imgUrl: 'http://p1.music.126.net/tleBBqEFrnx3IARE7m2ypQ==/109951168168598924.jpg?param=200y200',
                        remarks: '二珂直播翻唱合集二珂的直播间douyu 78622~欢迎您来收听~！',
                        herf: 'https://music.163.com/#/djradio?id=980148359',
                    }]
                },
            ]
        },
        3: {
            title: "VKwick",
            url: 'https://space.bilibili.com/276886844',
            imgUrl: 'data:image/webp;base64,UklGRgoEAABXRUJQVlA4IP4DAADQEACdASo2ADYAPpE6lkkloyGhLBgMALASCWUAxQxOggDR3eC/lS9xSiaXuAmVnwm0ss1TyTvsgoYvW+xHWPRH/1c6jfbvIZzjY7hQemNsxYSF5+suhQoMa9wcYhdJULXeuhSZZY0LDj6bMBTvWnXL13pSxrflwbQBSsNjCu39YaA0mcg1fhnZ6GVduGqiAAD+8VERozp1nnwDz4bE9LV38STqWwvRLPm4b6wwkmqo8FsQETazXUpf00gnQq8zaAQ0VaVeeWhPXErtCPeVIBefYiAOx+jWqzCsxZEIOjHgE4uiEn53SexEzu/L/fU4REwyPzhIzfigi7l3U7TWbfJTEfl7f8+1IxN8deyzGTUprOtsPLg1Zz3m+a7eDTyiJn8Eb/8WEa4tuLz/YSS1WGy9rs86kP6PJhR/J/pUUtWc1LFJ8MTFAn2fM/KvUQEnnuGfwL3hzX8N9dixV9UfxoBtKXSvPZn0MQDg3xnJov4/SuaM3/PYWZA6MzDsjNxQcRpD1/HaBp3XImhwrg1qYyTnBcPpT2JaxeM9rYZpYbYCM41t0NDjTlwafjrefX8HJJ06YFNEM4nOdvaoeH597pHr0fsBt1nQucayWpvne4+URnrpVsZOYDi8LMv5Pc4+xvAjJSR4RouavE43nL3gKmE8GZPX4PEA5W3ywJuQJPqTf2Sjp2TUhYfLTY3txqqZSKpT1DjlYIQr5t/RAc8Q2Tkjjje/CPzJqyCT+kAFFYNRjYr6We37q29s6JEf7z4W/rDZXbD8CKIdhgr75WQjkaTIxBMt95NGD3nKPKInmHZEFygeRl7PNhv+NcnDssRQ7Cr55vn/ONi+VG5KUksxMtNG9sHf79Isgt7X4Efllp1a6BLjmwnS/3lLEyD3bWr1lRim5doEJJK249e2jw8aPyScuWCGRlMB9r/fqnsRHRx+tpO/MvdY64B5Vd1FoHJG1PqVmS0zl1ntXFQe2zTG3gpENz3mfIOmBwAx5Imh+7/oW5O53Im3SrCpz91KjfP/B98SY+IaeIcqbecvqyBoay0h4FHrbHFDIQ/dkrqmM1DHA/axI1bjDkZaHgMOxCdb638LbjcFK8OMmK2Cf+SYzKm94Wm9dgCWaJFdLfF56yvRN6n1lzBr0QP8A5LysTt3iuZxUNcykgCLDYv/dnIO2fmZ8rBLkgt74Ca/jsMLG5IJT7Z74rgaXw7cFbNiq8QatZoYpqFkJ+8uEWW/jTYDNYldLc1ReiS9hHRSXrmz4Awjb7KgyQC8mPT2ilTI5jxUNYsNMiWiWAwnQeQZoUoRAd0LHyWCgTRGhWTgKY2MHKiuowGft71Obrhf9Xi0jASMpIk0E1KzJ5JuBA+yqAAAAA==',
            show: false,
            children: [{
                name: 'VKwick',
                type: 'bili',
                show: false,
                imgUrl: 'data:image/webp;base64,UklGRgoEAABXRUJQVlA4IP4DAADQEACdASo2ADYAPpE6lkkloyGhLBgMALASCWUAxQxOggDR3eC/lS9xSiaXuAmVnwm0ss1TyTvsgoYvW+xHWPRH/1c6jfbvIZzjY7hQemNsxYSF5+suhQoMa9wcYhdJULXeuhSZZY0LDj6bMBTvWnXL13pSxrflwbQBSsNjCu39YaA0mcg1fhnZ6GVduGqiAAD+8VERozp1nnwDz4bE9LV38STqWwvRLPm4b6wwkmqo8FsQETazXUpf00gnQq8zaAQ0VaVeeWhPXErtCPeVIBefYiAOx+jWqzCsxZEIOjHgE4uiEn53SexEzu/L/fU4REwyPzhIzfigi7l3U7TWbfJTEfl7f8+1IxN8deyzGTUprOtsPLg1Zz3m+a7eDTyiJn8Eb/8WEa4tuLz/YSS1WGy9rs86kP6PJhR/J/pUUtWc1LFJ8MTFAn2fM/KvUQEnnuGfwL3hzX8N9dixV9UfxoBtKXSvPZn0MQDg3xnJov4/SuaM3/PYWZA6MzDsjNxQcRpD1/HaBp3XImhwrg1qYyTnBcPpT2JaxeM9rYZpYbYCM41t0NDjTlwafjrefX8HJJ06YFNEM4nOdvaoeH597pHr0fsBt1nQucayWpvne4+URnrpVsZOYDi8LMv5Pc4+xvAjJSR4RouavE43nL3gKmE8GZPX4PEA5W3ywJuQJPqTf2Sjp2TUhYfLTY3txqqZSKpT1DjlYIQr5t/RAc8Q2Tkjjje/CPzJqyCT+kAFFYNRjYr6We37q29s6JEf7z4W/rDZXbD8CKIdhgr75WQjkaTIxBMt95NGD3nKPKInmHZEFygeRl7PNhv+NcnDssRQ7Cr55vn/ONi+VG5KUksxMtNG9sHf79Isgt7X4Efllp1a6BLjmwnS/3lLEyD3bWr1lRim5doEJJK249e2jw8aPyScuWCGRlMB9r/fqnsRHRx+tpO/MvdY64B5Vd1FoHJG1PqVmS0zl1ntXFQe2zTG3gpENz3mfIOmBwAx5Imh+7/oW5O53Im3SrCpz91KjfP/B98SY+IaeIcqbecvqyBoay0h4FHrbHFDIQ/dkrqmM1DHA/axI1bjDkZaHgMOxCdb638LbjcFK8OMmK2Cf+SYzKm94Wm9dgCWaJFdLfF56yvRN6n1lzBr0QP8A5LysTt3iuZxUNcykgCLDYv/dnIO2fmZ8rBLkgt74Ca/jsMLG5IJT7Z74rgaXw7cFbNiq8QatZoYpqFkJ+8uEWW/jTYDNYldLc1ReiS9hHRSXrmz4Awjb7KgyQC8mPT2ilTI5jxUNYsNMiWiWAwnQeQZoUoRAd0LHyWCgTRGhWTgKY2MHKiuowGft71Obrhf9Xi0jASMpIk0E1KzJ5JuBA+yqAAAAA==',
                remarks: '求关注，求点赞，求投币，求收藏，求转发，求一切。',
                herf: 'https://space.bilibili.com/276886844',
                children: [{
                        name: '歌曲纯享合集',
                        herf: 'https://space.bilibili.com/276886844/?spm_id_from=333.999.0.0'
                    },
                    {
                        name: '专栏-封面图',
                        herf: 'https://space.bilibili.com/276886844/article'
                    },
                ]
            }]
    },
    4: {
        title: "录播侠",
        url: 'https://space.bilibili.com/374159300',
        imgUrl: 'https://img.douyucdn.cn/data/yuba/weibo/2023/04/21/202304211518175961173195432.png',
        show: false,
        children: [{
            name: '录播侠',
            type: 'bili',
            show: false,
            imgUrl: 'https://img.douyucdn.cn/data/yuba/weibo/2023/04/21/202304211518175961173195432.png',
            remarks: '永远喜欢二珂与初寒! 主要更新二珂的直播，初寒和成果的直播了就会更!',
            herf: 'https://space.bilibili.com/374159300',
            children: [
                {
                    name: '专栏-封面图',
                    herf: 'https://space.bilibili.com/374159300/article'
                },
                {
                    name: '合集-周二珂',
                    herf: 'https://space.bilibili.com/374159300/channel/collectiondetail?sid=47630'
                },
                {
                    name: '合集-二珂唱歌',
                    href:'https://space.bilibili.com/374159300/channel/collectiondetail?sid=561984'
                },
                {
                    name: '合集-二珂直播趣事',
                    href:'https://space.bilibili.com/374159300/channel/collectiondetail?sid=1128685'
                },
                {
                    name: '合集-二珂直播弹幕版',
                    href:'https://space.bilibili.com/374159300/channel/collectiondetail?sid=676492'
                }
            ]
        }]
    },
        5: {
            title: "丶一瓶AD钙",
            url: 'https://space.bilibili.com/14094124',
            imgUrl: bili,
            show: false,
            children: [{
                name: '丶一瓶AD钙',
                imgUrl: bili,
                type: 'bili',
                show: false,
                remarks: '马马虎虎吧',
                herf: 'https://space.bilibili.com/14094124',
                children: [{
                    name: '视频剪辑',
                    herf: 'https://space.bilibili.com/14094124'
                }, ]
            }]
        },
        6: {
            title: "小龙吖丶",
            url: 'https://space.bilibili.com/3970477',
            imgUrl: bili,
            show: false,
            children: [{
                name: '小龙吖丶',
                imgUrl: bili,
                type: 'bili',
                show: false,
                remarks: '关注微博超级话题：#周二珂#',
                herf: 'https://space.bilibili.com/3970477',
                children: [{
                    name: '视频剪辑',
                    herf: 'https://space.bilibili.com/3970477'
                }, ]
            }]
        },
        7: {
            title: "二珂呀呀呀",
            url: 'https://space.bilibili.com/10753901',
            imgUrl: 'http://p2.music.126.net/HY6NAECJ9PYbK8CntSTE1w==/18778559091333928.jpg?param=200y200',
            show: false,
            children: [{
                    name: '二珂呀呀呀',
                    type: 'bili',
                    imgUrl: bili,
                    show: false,
                    remarks: '新浪微博：二珂Chloe',
                    herf: 'https://space.bilibili.com/10753901',
                    show: false,
                    children: [{
                            name: '慢慢喜欢你 - 周二珂',
                            herf: 'https://www.bilibili.com/video/BV1rW411A7pu'
                        },
                        {
                            name: '告白气球-周二珂',
                            herf: 'https://www.bilibili.com/video/BV1ts41117qh/'
                        },
                        {
                            name: '匆匆那年 - 周二珂',
                            herf: 'https://www.bilibili.com/video/BV1Ms411m7Bh'
                        },
                        {
                            name: '走在冷风中 - 周二珂',
                            herf: 'www.bilibili.com/video/BV1hs411U7Jy/"'
                        },
                    ]
                },
                {
                    name: '二珂呀呀呀',
                    type: 'wyy',
                    show: false,
                    imgUrl: 'http://p2.music.126.net/HY6NAECJ9PYbK8CntSTE1w==/18778559091333928.jpg?param=200y200',
                    remarks: '二珂直播间：DouYu 78622',
                    herf: 'https://music.163.com/#/djradio?id=5310001',
                }
            ]
        },
        8: {
            title: "周二珂周三鸽",
            imgUrl: bili,
            url: 'https://space.bilibili.com/2034302701',
            show: false,
            children: [{
                name: '周二珂周三鸽',
                imgUrl: bili,
                show: false,
                type: 'bili',
                remarks: '评论我会删，互动请私信！',
                herf: 'https://space.bilibili.com/2034302701',
                children: [{
                        name: '二珂微博&抖音',
                        herf: 'https://space.bilibili.com/2034302701'
                    },
                    {
                        name: '二珂直播录像考古特辑',
                        herf: 'https://space.bilibili.com/2034302701'
                    }
                ]
            }]
        },
        9: {
            title: "寂寞是凯神",
            url: 'https://space.bilibili.com/233895985',
            imgUrl: bili,
            show: false,
            children: [{
                name: '寂寞是凯神',
                imgUrl: bili,
                show: false,
                type: 'bili',
                remarks: '寂寞是凯神',
                herf: 'https://space.bilibili.com/233895985',
                children: [{
                    name: '视频剪辑',
                    herf: 'https://space.bilibili.com/233895985'
                }, ]
            }]
        },
        10: {
            title: "叶子宇吖",
            show: false,
            imgUrl: 'http://p2.music.126.net/m6545W0uGHXl9B19-SF2Bg==/109951166734969798.jpg?param=200y200',
            children: [{
                name: '二珂同学吖',
                type: 'wyy',
                show: false,
                imgUrl: 'http://p2.music.126.net/m6545W0uGHXl9B19-SF2Bg==/109951166734969798.jpg?param=200y200',
                remarks: '二珂同学的翻唱偶尔更新',
                herf: 'https://music.163.com/#/djradio?id=969709687',
            }]
        },
        11: {
            title: "双层吉士汉堡er",
            imgUrl: 'http://p2.music.126.net/c8jktP7SB0vp1e4Dv8FAxQ==/109951163302654233.jpg?param=200y200',
            show: false,
            children: [{
                name: '二珂Chloe',
                type: 'wyy',
                show: false,
                imgUrl: 'http://p2.music.126.net/c8jktP7SB0vp1e4Dv8FAxQ==/109951163302654233.jpg?param=200y200',
                remarks: '二珂直播间：DouYu 78622',
                herf: 'https://music.163.com/#/djradio?id=526548699',
            }]
        },
        12: {
            title: "本本吖_benbenya",
            show: false,
            imgUrl: 'http://p2.music.126.net/0ZuVjrNW0tacFu-5QyIjnw==/109951165495925382.jpg?param=200y200',
            children: [{
                name: '二珂-周二珂-一个小小粉丝的光',
                type: 'wyy',
                show: false,
                imgUrl: 'http://p2.music.126.net/0ZuVjrNW0tacFu-5QyIjnw==/109951165495925382.jpg?param=200y200',
                remarks: '版权问题可能以后没办法更新了',
                herf: 'https://music.163.com/#/djradio?id=347381086',
            }]
        },
        13: {
            title: "--PENG----",
            show: false,
            imgUrl: 'http://p2.music.126.net/pcealsGiQSkTE2eaN7hP0w==/109951163075958798.jpg?param=200y200',
            content: "二珂直播音乐合集",
            children: [{
                name: '二珂直播音乐合集',
                type: 'wyy',
                show: false,
                imgUrl: 'http://p2.music.126.net/pcealsGiQSkTE2eaN7hP0w==/109951163075958798.jpg?param=200y200',
                remarks: '二珂dy直播间 78622',
                herf: 'https://music.163.com/#/djradio?id=526225596',
            }]
        }
    }
    /* pictureList
        * 展示图（包括点击后的图组）
        * 字段备注
        *{
                *   id:{
                    *   title 标题
                    *   name 名称
                    *   img  图片
                    *   herf 地址
                    *   remarks 备注简写
                *  },
                * id	图片在数据库中的id	int
                img_name	图片名称	string
                img_desc	图片描述	string
                img_url	图片的url	string
                is_loc_url	图片的url是否为本地链接
                (0--非本地链接，即第三方图片储存；1--为本地链接，使用时需要拼。即:
                http://api.erkechloe.com/upload/{img_url})	int
                release_time	图片的发布日期的时间戳	int

            *}
    */
var pictureList = [
//     {
//         id: 1,
//         album_name: "20220825微博更新",
//         album_desc: "几张“书不离手”的胶片照",
//         cover_img_id: '/2023/01/30/20230130172411715102517436',
//         href: 'https://weibo.com/1910672761/M2FxPqk6t?pagetype=profilefeed',
//         is_loc_url: 0,
//         release_time: 1661356800,
//         children: [
//             { id: 1, img_name: "几张“书不离手”的胶片照", img_desc: null, img_url: "20221228\/0025iZgBly1h5j0c7abv2j62re22s1kz02", is_loc_url: 0, release_time: 1661356800 },
//             { id: 2, img_name: "几张“书不离手”的胶片照", img_desc: null, img_url: "20221228\/0025iZgBly1h5j0c2il59j61zc2n4npg02", is_loc_url: 0, release_time: 1661356800 },
//             { id: 3, img_name: "几张“书不离手”的胶片照", img_desc: null, img_url: "20221228\/0025iZgBly1h5j0c974xnj622s2re4qr02", is_loc_url: 0, release_time: 1661356800 },
//             { id: 4, img_name: "几张“书不离手”的胶片照", img_desc: null, img_url: "20221228\/0025iZgBly1h5j0cbmnldj622s2reu1002", is_loc_url: 0, release_time: 1661356800 },
//             { id: 5, img_name: "几张“书不离手”的胶片照", img_desc: null, img_url: "20221228\/0025iZgBly1h5j0cdybv4j62p2211u1002", is_loc_url: 0, release_time: 1661356800 },
//             { id: 6, img_name: "几张“书不离手”的胶片照", img_desc: null, img_url: "20221228\/0025iZgBly1h5j0c5efaqj622s2renpg02", is_loc_url: 0, release_time: 1661356800 }
//         ]
// },
{
    id: 1,
    album_name: "20220825微博更新",
    album_desc: "滑雪照",
    cover_img_id: '/2023/01/29/202301291654065627224646997',
    href: '',
    imgSuffix:'imgSuffixpng',
    is_loc_url: 0,
    release_time: 1661356800,
    children: [
        { id: 1, img_name: "滑雪照", img_desc: null, img_url: "/2023/01/29/202301291654065627224646997", is_loc_url: 0, release_time: 1661356800,imgSuffix:'imgSuffixpng' },
        { id: 2, img_name: "滑雪照", img_desc: null, img_url: "/2023/01/29/202301291701064549801064309", is_loc_url: 0, release_time: 1661356800,imgSuffix:'imgSuffixpng' },
        { id: 3, img_name: "滑雪照", img_desc: null, img_url: "/2023/01/29/202301291701422273822708637", is_loc_url: 0, release_time: 1661356800 ,imgSuffix:'imgSuffixpng'},
        { id: 4, img_name: "滑雪照", img_desc: null, img_url: "/2023/01/29/202301291702064534517015489", is_loc_url: 0, release_time: 1661356800 ,imgSuffix:'imgSuffixpng'},
        { id: 5, img_name: "滑雪照", img_desc: null, img_url: "/2023/01/29/202301291708124074405665696", is_loc_url: 0, release_time: 1661356800 ,imgSuffix:'imgSuffixpng'},
        { id: 6, img_name: "滑雪照", img_desc: null, img_url: "/2023/01/29/202301291709127003136243706", is_loc_url: 0, release_time: 1661356800 ,imgSuffix:'imgSuffixpng'},
        { id: 7, img_name: "滑雪照", img_desc: null, img_url: "/2023/01/29/202301291709442800825856161", is_loc_url: 0, release_time: 1661356800 ,imgSuffix:'imgSuffixpng'},
        { id: 8, img_name: "滑雪照", img_desc: null, img_url: "/2023/01/29/202301291710129561712583672", is_loc_url: 0, release_time: 1661356800 ,imgSuffix:'imgSuffixpng'},
        { id: 9, img_name: "滑雪照", img_desc: null, img_url: "/2023/01/29/202301291710474549124381053", is_loc_url: 0, release_time: 1661356800 ,imgSuffix:'imgSuffixpng'},
        { id: 10, img_name: "滑雪照", img_desc: null, img_url: "/2023/01/29/202301291711144290885696046", is_loc_url: 0, release_time: 1661356800,imgSuffix:'imgSuffixpng' },
        { id: 11, img_name: "滑雪照", img_desc: null, img_url: "/2023/01/29/202301291711452634071577250", is_loc_url: 0, release_time: 1661356800,imgSuffix:'imgSuffixpng'},
        { id: 12, img_name: "滑雪照", img_desc: null, img_url: "/2023/01/29/202301291712122758329118808", is_loc_url: 0, release_time: 1661356800,imgSuffix:'imgSuffixpng' },
        // { id: 6, img_name: "几张“书不离手”的胶片照", img_desc: null, img_url: "", is_loc_url: 0, release_time: 1661356800 }
        // { id: 6, img_name: "几张“书不离手”的胶片照", img_desc: null, img_url: "", is_loc_url: 0, release_time: 1661356800 }
        // { id: 6, img_name: "几张“书不离手”的胶片照", img_desc: null, img_url: "", is_loc_url: 0, release_time: 1661356800 }
        // { id: 6, img_name: "几张“书不离手”的胶片照", img_desc: null, img_url: "", is_loc_url: 0, release_time: 1661356800 }
    ]
},
    {
        id: 2,
        album_name: "20220623微博更新",
        album_desc: "你们用随身听的那年，听的谁的歌。我听的周杰伦～",
        href: 'https://weibo.com/1910672761/Lz1UeuyD2?pagetype=profilefeed',
        cover_img_id: '/2023/01/30/20230130172411715102517436',
        is_loc_url: 0,
        release_time: 1655913600,
        children: [
            { id: 7, img_name: "你们用随身听的那年，听的谁的歌。我听的周杰伦～", img_desc: null, img_url: "20221228\/0025iZgBly1h3i13vxqt6j60yi1a042u02", is_loc_url: 0, release_time: 1655913600 },
            { id: 8, img_name: "你们用随身听的那年，听的谁的歌。我听的周杰伦～", img_desc: null, img_url: "20221228\/0025iZgBly1h3i13w7yj6j60yi1a0adx02", is_loc_url: 0, release_time: 1655913600 },
            { id: 9, img_name: "你们用随身听的那年，听的谁的歌。我听的周杰伦～", img_desc: null, img_url: "20221228\/0025iZgBly1h3i13wg6rxj60yi1a0wit02", is_loc_url: 0, release_time: 1655913600 },
            { id: 10, img_name: "你们用随身听的那年，听的谁的歌。我听的周杰伦～", img_desc: null, img_url: "20221228\/0025iZgBly1h3i13wqsl5j60yi1a0dko02", is_loc_url: 0, release_time: 1655913600 },
            { id: 11, img_name: "你们用随身听的那年，听的谁的歌。我听的周杰伦～", img_desc: null, img_url: "20221228\/0025iZgBly1h3i13x1d4cj60yi1a042q02", is_loc_url: 0, release_time: 1655913600 },
            { id: 12, img_name: "你们用随身听的那年，听的谁的歌。我听的周杰伦～", img_desc: null, img_url: "20221228\/0025iZgBly1h3i13vponyj60yi1a0gpu02", is_loc_url: 0, release_time: 1655913600 },
            { id: 13, img_name: "你们用随身听的那年，听的谁的歌。我听的周杰伦～", img_desc: null, img_url: "20221228\/0025iZgBly1h3i13xbln8j60yi1a078o02", is_loc_url: 0, release_time: 1655913600 },
            { id: 14, img_name: "你们用随身听的那年，听的谁的歌。我听的周杰伦～", img_desc: null, img_url: "20221228\/0025iZgBly1h3i13xmnttj60yi1a0acz02", is_loc_url: 0, release_time: 1655913600 },
            { id: 15, img_name: "你们用随身听的那年，听的谁的歌。我听的周杰伦～", img_desc: null, img_url: "20221228\/0025iZgBly1h3i13xu2e8j60yi1a0wi002", is_loc_url: 0, release_time: 1655913600 }
        ]
    },
    {
        id: 3,
        album_name: "这样认真看书的珂珂也太美了吧",
        album_desc: "这样认真看书的珂珂也太美了吧",
        href: 'https://weibo.com/1910672761/L9XejCC1m?pagetype=profilefeed',
        cover_img_id: '/2023/01/30/20230130172411715102517436',
        is_loc_url: 0,
        release_time: 1641657600,
        children: [
            { id: 31, img_name: "这样认真看书的珂珂也太美了吧", img_desc: null, img_url: "/2023/01/30/20230130172411715102517436", is_loc_url: 0, release_time: 1641657600 },
            { id: 32, img_name: "这样认真看书的珂珂也太美了吧", img_desc: null, img_url: "/2023/01/30/202301301825336886130365818", is_loc_url: 0, release_time: 1641657600 },
            { id: 33, img_name: "这样认真看书的珂珂也太美了吧", img_desc: null, img_url: "/2023/01/30/202301301826031493992041603", is_loc_url: 0, release_time: 1641657600 },
            { id: 34, img_name: "这样认真看书的珂珂也太美了吧", img_desc: null, img_url: "/2023/01/30/202301301826191012501943645", is_loc_url: 0, release_time: 1641657600 },
            { id: 35, img_name: "这样认真看书的珂珂也太美了吧", img_desc: null, img_url: "/2023/01/30/202301301826554943113859311", is_loc_url: 0, release_time: 1641657600 },
            { id: 36, img_name: "这样认真看书的珂珂也太美了吧", img_desc: null, img_url: "/2023/01/30/202301301827158347631461333", is_loc_url: 0, release_time: 1641657600 },
            { id: 37, img_name: "这样认真看书的珂珂也太美了吧", img_desc: null, img_url: "/2023/01/30/202301301827301270696456465", is_loc_url: 0, release_time: 1641657600 },
            { id: 38, img_name: "这样认真看书的珂珂也太美了吧", img_desc: null, img_url: "/2023/01/30/202301301827453769236964645", is_loc_url: 0, release_time: 1641657600 },
        ]
    },
    {
        id: 4,
        album_name: "你见过这样的红发珂珂吗 美爆了简直",
        album_desc: "你见过这样的红发珂珂吗 美爆了简直",
        href: '',
        cover_img_id: '/2023/01/30/202301301659179023880841338',
        is_loc_url: 0,
        release_time: 1638547200,
        children: [
            { id: 40, img_name: "红发", img_desc: null, img_url: "/2023/01/30/202301301659179023880841338", is_loc_url: 0, release_time: 1641657600 },
            { id: 41, img_name: "红发", img_desc: null, img_url: "/2023/01/30/202301301709318057554909315", is_loc_url: 0, release_time: 1641657600 },
            { id: 42, img_name: "红发", img_desc: null, img_url: "/2023/01/30/202301301722108590684914653", is_loc_url: 0, release_time: 1641657600 },
            { id: 43, img_name: "红发", img_desc: null, img_url: "/2023/01/30/202301301722265165886375476", is_loc_url: 0, release_time: 1641657600 },
            { id: 44, img_name: "红发", img_desc: null, img_url: "/2023/01/30/202301301722489954210284394", is_loc_url: 0, release_time: 1641657600 },
        ]
    },
    {
        id: 5,
        album_name: "消失的画",
        album_desc: "消失的画",
        href: 'https://weibo.com/1910672761/LyBGwnVqK?pagetype=profilefeed',
        cover_img_id: '/2023/01/30/202301301649195030177427594',
        is_loc_url: 0,
        release_time: 1641657600,
        children: [
            { id: 51, img_name: "消失的画", img_desc: null, img_url: "/2023/01/30/202301301649195030177427594", is_loc_url: 0, release_time: 1641657600 },
            { id: 52, img_name: "消失的画", img_desc: null, img_url: "/2023/01/30/20230130165028622404906308", is_loc_url: 0, release_time: 1641657600 },
            { id: 53, img_name: "消失的画", img_desc: null, img_url: "/2023/01/30/202301301650493899521547138", is_loc_url: 0, release_time: 1641657600 },
            { id: 54, img_name: "消失的画", img_desc: null, img_url: "/2023/01/30/202301301651083197876314831", is_loc_url: 0, release_time: 1641657600 },
            { id: 55, img_name: "消失的画", img_desc: null, img_url: "/2023/01/30/202301301651278681901628832", is_loc_url: 0, release_time: 1641657600 },
            { id: 56, img_name: "消失的画", img_desc: null, img_url: "/2023/01/30/202301301652017295413783087", is_loc_url: 0, release_time: 1641657600 },
            { id: 57, img_name: "消失的画", img_desc: null, img_url: "/2023/01/30/202301301652282493887927062", is_loc_url: 0, release_time: 1641657600 },
            { id: 58, img_name: "消失的画", img_desc: null, img_url: "/2023/01/30/202301301652408286508853852", is_loc_url: 0, release_time: 1641657600 },
            { id: 59, img_name: "消失的画", img_desc: null, img_url: "/2023/01/30/2023013016514529448186180", is_loc_url: 0, release_time: 1641657600 },
        ]
    }, {
        id: 6,
        album_name: "泳池派对",
        album_desc: "泳池派对",
        href: '',
        cover_img_id: '/2023/01/30/202301301644519310725438672',
        is_loc_url: 0,
        release_time: 1641657600,
        children: [
            { id: 61, img_name: "泳池派对", img_desc: null, img_url: "/2023/01/30/202301301644519310725438672", is_loc_url: 0, release_time: 1641657600 },
            { id: 62, img_name: "泳池派对", img_desc: null, img_url: "/2023/01/30/202301301647096456125083146", is_loc_url: 0, release_time: 1641657600 },
            { id: 63, img_name: "泳池派对", img_desc: null, img_url: "/2023/01/30/202301301647243594961493030", is_loc_url: 0, release_time: 1641657600 },
            { id: 64, img_name: "泳池派对", img_desc: null, img_url: "/2023/01/30/202301301647414586388791901", is_loc_url: 0, release_time: 1641657600 },
            { id: 65, img_name: "泳池派对", img_desc: null, img_url: "/2023/01/30/202301301648061635114205762", is_loc_url: 0, release_time: 1641657600 },
        ]

    }
]
var imgDetails = {
    imgHead: 'https://img.douyucdn.cn/data/yuba/weibo',
    imgSuffixpng: '.png',
    imgSuffixjpg: '.jpg',
    imgSize580: '.580x0'
}
var pictureLists = []
pictureList.forEach((item, index) => {
    item.cover_img = item.is_loc_url == 0 ? imgDetails.imgHead + item.cover_img_id +imgDetails.imgSize580 +  (item.imgSuffix=='imgSuffixpng'?imgDetails.imgSuffixpng :imgDetails.imgSuffixjpg) : item.cover_img_id;
    item.img_urls = [];
    item.children.forEach((val, ind) => {
        item.img_urls.push(item.is_loc_url == 0 ? imgDetails.imgHead + val.img_url + (val.imgSuffix=='imgSuffixpng'?imgDetails.imgSuffixpng :imgDetails.imgSuffixjpg) : val.img_url)
    })
    pictureLists.push(item.cover_img)
})
var erkeStory = [
    {
        show:false,
        name: '你的月亮我的珂',
        content: `记得在2016年8月份，因为我是周杰伦粉丝，去搜告白气球的时候看到了一个周二珂的版本，当时在想这个应该是女的吧，我就点进去了听了，体验。度极高啊，我循环了一天，吗的，当时珂在熊猫，我有个朋友会看直播嘛，lol的经常看，说35723这主播唱的不错啊，叫我去看看，当年我还是不怎么看直播，第一次认识熊猫，我就搜这个进去了，那时候啊，我一点进去，刚好也就唱告白气球，直接恋爱惹，妈耶，我能说我是声线粉吗，感觉我也是颜狗，直接关注，那时候id就直接告白气球j了，就是那时候播就跟过年一样，真的我那时候比。现在还佛系，那时候播了丢后台就进cf了，其实听着她唱歌，我都没心思玩了，太好听了，直到如今来到现在78622。她一来我就办卡了，<span style='color:red;font-weight:700;'>“珂珂伴伴，永远不散呀!”</span>`
    },
    {
        show:false,
        name: '录播侠',
        content: `知道二珂是在2018年一部叫《超越吧英雄》的综艺，当时二珂刚出现的时候没有太多的感觉，因为那里面的人都不知道，所以第一眼也没有什么特别的，但是后来在节目里唱歌的画面深深地吸引了我，“这个女孩唱歌真好听啊”，所以在19年开始看二珂的直播，人生的第一张办卡也是交给了二珂。在那段时间里每天晚上都在看直播，感觉真的很好，但是还是有些不好意思和身边的人说喜欢二珂。接下来二珂就停播了，在那停播得两年间，每天都在直播间送荧光棒以保持粉丝的身份，为了一个女主播而每天都来直播间签到是我之前想都没想过的，但是就是那么做了，并且那段时间发行的歌也是一首不差的全都听了。
        本以为当时只是一时冲动才喜欢了二珂，但是经过她停播两年的沉淀，对她的喜欢也是越来越深，且那是也可以告诉别人我就是喜欢“周二珂”，没有丝毫的不好意思。时间来到2021年6月6号，她回归了，我真的好激动，并且做了一个打算——在B站投稿她的直播录像，最初的想法是为了以后自己可以随时看到，但是随着稿件越来越多，渐渐的有了一点点粉丝，因此也认识了很多喜欢二珂的人。
        在回归的这段时间里直播效果也是越来越好，有的时候还邀请了自己的闺蜜一同来直播，因此令我认识了七七、初寒，所以我想对二珂说一声“谢谢你，带给了我快乐”，现在我终于敢大声地说<span style='color:red;font-weight:700;'>“对不起，二珂，我现在喜欢林初寒比你多一点点，哈哈哈哈”</span>`
    },
    {
        show:false,
        name: '周二珂周三鸽',
        content: `
            那年初夏，我遇见了那个她，她说她叫可可，年芳一十八！
            她让我教她抽烟，我让她陪我赏花，那个晚霞，我想和她有一个家！
            好了，以上都是胡扯，主要是那个小叶子，光让我给她编故事，我哪会编故事，我只会讲故事，讲自己的故事，故事平平淡淡，没啥特别的，不用往下看了，浪费你们时间。
            唉，记不清什么时候了，好像是2015年？（二珂那个视频发布时间是15年）
            印象中我第一次见到二珂，是在优酷的首页推荐上，无意的刷到了二珂《走在冷风中》的翻唱视频，视频封面的可爱妹妹吸引了，虽然我比她小两岁，但出于礼貌还是叫二珂妹妹吧。
            不确定是歌声，但一定是美貌吸引了我，普通的五官披着短发，高冷的表情加上有故事的眼神，有种惊艳但又很平淡的感觉，看着安安静静，感觉很乖，让人有种保护欲......
            好了，不扯了，就是看中她的脸了，颜值即正义，我就是渣男！
            当时不懂什么直播，也不太清楚在哪了解她，之后印象中看到她的直播是在熊猫，斗鱼可能也看过吧，记不太清了！  因为那时沉迷英雄联盟，所以不经常看直播。去喜欢她的话，也没有刻意去，当时在学校我已经有个喜欢的女孩子了，也一直再追她便没有特别去喜欢二珂。
            之后是在熊猫直播时给我的印象毕竟深刻，那时我正值高考冲刺阶段，每天周一到周五早读前要求提前半小时到校，先上个小早读，下午放学后半个小时又要上晚自习，每个晚自习和小早读都安排了各科老师，下晚自习后已经是晚上十点左右，回到家还要写作业，做卷子，每天都重复这枯燥的生活，持续了半年。
            而每天晚上让我觉得幸福的一件事就是，把手机放在课本边立着，边做功课，边听二珂直播唱歌，让我每天辛苦回到家，都会有所期待。那段时间，二珂给我带来了很多欢乐和温暖！
            之后高考结束，虽然我依然沉迷游戏，但也没有忘记她，现在想起了，有一种想《回到过去》的感觉，那时我不懂，现在想来，沉迷游戏冲分上段后，如今却没什么感觉，也多少有些后悔，没多陪二珂一些时间，现在想把她装满我的青春也已悔之不及。
            上大学后，依然沉迷游戏，但二珂在我的生活中已经占了一大半，大学生活中也会常常看二珂的直播，后来在社交软件看到二珂的新专辑在发售，而又不知道在哪购买。之后我那个喜欢的女孩子，在我生日的时候，作为礼物送给我一张二珂的专辑，可能不值多少钱，但在我心中确实最最珍贵的礼物。这张专辑一直保存到现在，依然还是新的。如今再想买，却不知何处寻。
            二珂的每一次线下，我都想去，可身为大学生太穷，只能卧在宿舍打游戏。一直有一个在变的愿望，就是想要二珂的一张专辑，一张签名照，一次演唱会门票，一次有趣的合影......
            如今二珂的每场直播我都会看，只是不想让我的青春留有遗憾，或许再过几年我会嘲笑我自己，花那么多时间在她身上干嘛？但至少我现在是开心的！每个人的青春都不一样，它可能是演员，歌手，或者是运动选手，但它给我们带来的回忆感确实相同的，因为它真实存在过。
            17.18年的斗鱼F4，如今也只剩二珂一人还在默默的直播，现在只想好好珍惜，哪怕它只有一瞬间！
            哈哈哈，不知不觉又开始扯了，没办法，周二珂今天又鸽了，斗鱼公务员光休息，三天打鱼两天晒网，烦死了！ 因为弃游了，又没其他喜欢的主播，要不是二珂在，我就把斗鱼卸了。
            罢了，不说了，敲那么多字休息一下！（主要是文化有限编不下去了，拜拜）`
    },
]


for (let i in erkeStory) {
    erkeStory[i]['contentArr'] = erkeStory[i]['content'].split('\n')
}
export default {
    pictureList,
    pictureLists,
    imgDetails,
    supportLink,
    erkeStory
}
// 所有第三方图片 需要添加一个字段来判断是什么结尾的
// 比如为了方便使用如下数据
// imgSuffixpng: '.png',
// imgSuffixjpg: '.jpg',