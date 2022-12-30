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
        *  },
    *}
*/
export var supportLink = {
    1: {
        title: '二珂的迷猴桃小站',
        remarks:'这里是二珂的迷猴桃小站，会更新一些关于二珂的视频哦~',
        imgUrl: 'https://wsingbssdl.kugou.com/060ae290b3bdceffa7f2ada54816c41e.png_188x188.png',
        show:true,
        children:[
            {

                name:'二珂的迷猴桃小站',
                type:'bili',
                show:false,
                remarks:'这里是二珂的迷猴桃小站，会更新一些关于二珂的视频哦~',
                herf: 'https://space.bilibili.com/315661291/?spm_id_from=333.999.0.0',
            },
            {
                name:'二珂的迷猴桃小站',
                id:'89628414841',
                show:false,
                imgUrl:'',
                type:'dy',
                herf: 'https://www.douyin.com/user/MS4wLjABAAAAvF2YWRC2fZwwJf-WMHt1O3A0y48oSknG-eYqYybXT4vzMGOt-5Z8UoZJJOKDdz5x?is_search=1&list_name=follow&nt=0',
                remarks:'稳定更新二珂的有趣内容 感谢您的关注',
            },
            {
                name:'二珂的迷猴桃小站',
                type:'sing',
                show:false,
                imgUrl:'https://wsingbssdl.kugou.com/060ae290b3bdceffa7f2ada54816c41e.png_188x188.png',
                ID:'66139141',
                remarks:'这里是二珂的迷猴桃小站，欢迎大家关注哦~ ',
                herf: 'http://5sing.kugou.com/66139141/fc/1.html',
            },
        ]
    },
    2: {
        title: '云淡峰輕',
        imgUrl: 'data:image/webp;base64,UklGRsYCAABXRUJQVlA4ILoCAACwDQCdASo2ADYAPpE8mUkloyIhKhZtELASCWMAy4lBpuykhwq2XMQI6YcLqnW5J8AeZByPJbPjfumjNafMdGS4oi8IOg2lKpxlFZ2f3cPPhtamaw3RYtDfaFoodqRLfLkM+/n/VxozEqxS3slpBIYRB46Q00AAAP7+k6ilvR8dduKDqXxkCpUv71EsD/m//rBbMVd7aP4h3DJfRepq5ZMDjOeK+LPxywBkDJ8A7lXCYkUEAlRjQGVDxtQV5HqD7EucouV1eQ7ALJevtO2Vkyh4rmq8ufsyi34nKJk1LzZIb2lPWF7NIiPeoLGCgiKdfGIOgv1VoU1ABzZfSNX4BR43LsTmIdkizgrKV03oOsIn/A1crO1DeYbdG96Tyqx7T8nf76uujJHFzj6ooQ2eJWvgRBL0yFz65GJWCSCQifKy2XXr7Fr/Jk1R+MnFLXacWUMluUTaYUWiBab+j/i9DG/jrd6yiLP2oLWwABQ83LQFumjlDRu4vmOojqTGyLNRVMc0yjckQwmqwU5WuYSNi7ZoaXKiG0bLJPCpl1rETolK0c7YhB+rRk+KoCA30TbETTYycoNfLeiIUpQ8ICIIGJ2nKzD0hYurpSDOvLIhOrdSZFAvyvxVyiP+OM4JWvmaznmnJW173O6v5J/YfhI8wAEfIKPrfFFgE9HmyV9hlm8+/Kj02Y9Wdm9KxmjlzAn3zF5j3skNK+4Xf5q32ps1R31A9otbE2vdVRAZBWGI/dVI4YA2phO5nv9aHbwxpp14x30YEI1jVCCFPyS9jKnkNKw3HIeEC+tDtcjNfQBkvazs1xrVtqAhqbvRHgOmZvZlzIEMu7UjWyFqw/f27eHDhrVpEWu9RcEfdZ/i5xsxoaClZ1Pif+v8rpRDy8AivpO/TfQIVKZvurg2TIZPlylNTMaCNxWGUUekDugAAA==',
        show:false,
        children:[
            {
                type:'bili',
                name:'云淡峰輕',
                imgUrl:'data:image/webp;base64,UklGRsYCAABXRUJQVlA4ILoCAACwDQCdASo2ADYAPpE8mUkloyIhKhZtELASCWMAy4lBpuykhwq2XMQI6YcLqnW5J8AeZByPJbPjfumjNafMdGS4oi8IOg2lKpxlFZ2f3cPPhtamaw3RYtDfaFoodqRLfLkM+/n/VxozEqxS3slpBIYRB46Q00AAAP7+k6ilvR8dduKDqXxkCpUv71EsD/m//rBbMVd7aP4h3DJfRepq5ZMDjOeK+LPxywBkDJ8A7lXCYkUEAlRjQGVDxtQV5HqD7EucouV1eQ7ALJevtO2Vkyh4rmq8ufsyi34nKJk1LzZIb2lPWF7NIiPeoLGCgiKdfGIOgv1VoU1ABzZfSNX4BR43LsTmIdkizgrKV03oOsIn/A1crO1DeYbdG96Tyqx7T8nf76uujJHFzj6ooQ2eJWvgRBL0yFz65GJWCSCQifKy2XXr7Fr/Jk1R+MnFLXacWUMluUTaYUWiBab+j/i9DG/jrd6yiLP2oLWwABQ83LQFumjlDRu4vmOojqTGyLNRVMc0yjckQwmqwU5WuYSNi7ZoaXKiG0bLJPCpl1rETolK0c7YhB+rRk+KoCA30TbETTYycoNfLeiIUpQ8ICIIGJ2nKzD0hYurpSDOvLIhOrdSZFAvyvxVyiP+OM4JWvmaznmnJW173O6v5J/YfhI8wAEfIKPrfFFgE9HmyV9hlm8+/Kj02Y9Wdm9KxmjlzAn3zF5j3skNK+4Xf5q32ps1R31A9otbE2vdVRAZBWGI/dVI4YA2phO5nv9aHbwxpp14x30YEI1jVCCFPyS9jKnkNKw3HIeEC+tDtcjNfQBkvazs1xrVtqAhqbvRHgOmZvZlzIEMu7UjWyFqw/f27eHDhrVpEWu9RcEfdZ/i5xsxoaClZ1Pif+v8rpRDy8AivpO/TfQIVKZvurg2TIZPlylNTMaCNxWGUUekDugAAA==',
                remarks:'用最好的我赴你的约',
                show:false,
                herf: 'https://space.bilibili.com/338485759/?spm_id_from=333.999.0.0',
                children:[
                    {
                        name:'二珂单曲视频剪辑',
                        herf:'https://space.bilibili.com/338485759/channel/seriesdetail?sid=266668'
                    },
                    {
                        name:'二珂直播录像',
                        herf:'https://space.bilibili.com/338485759/channel/seriesdetail?sid=266651'
                    },
                    {
                        name:'二珂特别剪辑',
                        herf:'https://space.bilibili.com/338485759/channel/seriesdetail?sid=266684'
                    },
                    {
                        name:'二珂20190106演唱会',
                        herf:'https://space.bilibili.com/338485759/channel/seriesdetail?sid=266639'
                    }

                ]
            },
            {
                type:'wyy',
                show:false,
                name:'云淡_峰輕',
                imgUrl:'http://p1.music.126.net/H2-mqohoT2dfE4y0j7pKHQ==/109951165261604230.jpg?param=50y50',
                remarks:'二珂直播翻唱合集二珂的直播间douyu 78622~欢迎您来收听~！',
                herf: 'https://music.163.com/#/user/home?id=302217120',
                children:[
                    {
                        name:'二珂直播翻唱合集',
                        imgUrl:'http://p1.music.126.net/tleBBqEFrnx3IARE7m2ypQ==/109951168168598924.jpg?param=200y200',
                        remarks:'二珂直播翻唱合集二珂的直播间douyu 78622~欢迎您来收听~！',
                        herf: 'https://music.163.com/#/djradio?id=980148359',
                    }
                ]
            },
        ]
    },
    3: {
        title: "VKwick",
        url:'https://space.bilibili.com/276886844',
        imgUrl:'data:image/webp;base64,UklGRgoEAABXRUJQVlA4IP4DAADQEACdASo2ADYAPpE6lkkloyGhLBgMALASCWUAxQxOggDR3eC/lS9xSiaXuAmVnwm0ss1TyTvsgoYvW+xHWPRH/1c6jfbvIZzjY7hQemNsxYSF5+suhQoMa9wcYhdJULXeuhSZZY0LDj6bMBTvWnXL13pSxrflwbQBSsNjCu39YaA0mcg1fhnZ6GVduGqiAAD+8VERozp1nnwDz4bE9LV38STqWwvRLPm4b6wwkmqo8FsQETazXUpf00gnQq8zaAQ0VaVeeWhPXErtCPeVIBefYiAOx+jWqzCsxZEIOjHgE4uiEn53SexEzu/L/fU4REwyPzhIzfigi7l3U7TWbfJTEfl7f8+1IxN8deyzGTUprOtsPLg1Zz3m+a7eDTyiJn8Eb/8WEa4tuLz/YSS1WGy9rs86kP6PJhR/J/pUUtWc1LFJ8MTFAn2fM/KvUQEnnuGfwL3hzX8N9dixV9UfxoBtKXSvPZn0MQDg3xnJov4/SuaM3/PYWZA6MzDsjNxQcRpD1/HaBp3XImhwrg1qYyTnBcPpT2JaxeM9rYZpYbYCM41t0NDjTlwafjrefX8HJJ06YFNEM4nOdvaoeH597pHr0fsBt1nQucayWpvne4+URnrpVsZOYDi8LMv5Pc4+xvAjJSR4RouavE43nL3gKmE8GZPX4PEA5W3ywJuQJPqTf2Sjp2TUhYfLTY3txqqZSKpT1DjlYIQr5t/RAc8Q2Tkjjje/CPzJqyCT+kAFFYNRjYr6We37q29s6JEf7z4W/rDZXbD8CKIdhgr75WQjkaTIxBMt95NGD3nKPKInmHZEFygeRl7PNhv+NcnDssRQ7Cr55vn/ONi+VG5KUksxMtNG9sHf79Isgt7X4Efllp1a6BLjmwnS/3lLEyD3bWr1lRim5doEJJK249e2jw8aPyScuWCGRlMB9r/fqnsRHRx+tpO/MvdY64B5Vd1FoHJG1PqVmS0zl1ntXFQe2zTG3gpENz3mfIOmBwAx5Imh+7/oW5O53Im3SrCpz91KjfP/B98SY+IaeIcqbecvqyBoay0h4FHrbHFDIQ/dkrqmM1DHA/axI1bjDkZaHgMOxCdb638LbjcFK8OMmK2Cf+SYzKm94Wm9dgCWaJFdLfF56yvRN6n1lzBr0QP8A5LysTt3iuZxUNcykgCLDYv/dnIO2fmZ8rBLkgt74Ca/jsMLG5IJT7Z74rgaXw7cFbNiq8QatZoYpqFkJ+8uEWW/jTYDNYldLc1ReiS9hHRSXrmz4Awjb7KgyQC8mPT2ilTI5jxUNYsNMiWiWAwnQeQZoUoRAd0LHyWCgTRGhWTgKY2MHKiuowGft71Obrhf9Xi0jASMpIk0E1KzJ5JuBA+yqAAAAA==',
        show:false,
        children:[
            {
                name:'VKwick',
                type:'bili',
                show:false,
                imgUrl:'data:image/webp;base64,UklGRgoEAABXRUJQVlA4IP4DAADQEACdASo2ADYAPpE6lkkloyGhLBgMALASCWUAxQxOggDR3eC/lS9xSiaXuAmVnwm0ss1TyTvsgoYvW+xHWPRH/1c6jfbvIZzjY7hQemNsxYSF5+suhQoMa9wcYhdJULXeuhSZZY0LDj6bMBTvWnXL13pSxrflwbQBSsNjCu39YaA0mcg1fhnZ6GVduGqiAAD+8VERozp1nnwDz4bE9LV38STqWwvRLPm4b6wwkmqo8FsQETazXUpf00gnQq8zaAQ0VaVeeWhPXErtCPeVIBefYiAOx+jWqzCsxZEIOjHgE4uiEn53SexEzu/L/fU4REwyPzhIzfigi7l3U7TWbfJTEfl7f8+1IxN8deyzGTUprOtsPLg1Zz3m+a7eDTyiJn8Eb/8WEa4tuLz/YSS1WGy9rs86kP6PJhR/J/pUUtWc1LFJ8MTFAn2fM/KvUQEnnuGfwL3hzX8N9dixV9UfxoBtKXSvPZn0MQDg3xnJov4/SuaM3/PYWZA6MzDsjNxQcRpD1/HaBp3XImhwrg1qYyTnBcPpT2JaxeM9rYZpYbYCM41t0NDjTlwafjrefX8HJJ06YFNEM4nOdvaoeH597pHr0fsBt1nQucayWpvne4+URnrpVsZOYDi8LMv5Pc4+xvAjJSR4RouavE43nL3gKmE8GZPX4PEA5W3ywJuQJPqTf2Sjp2TUhYfLTY3txqqZSKpT1DjlYIQr5t/RAc8Q2Tkjjje/CPzJqyCT+kAFFYNRjYr6We37q29s6JEf7z4W/rDZXbD8CKIdhgr75WQjkaTIxBMt95NGD3nKPKInmHZEFygeRl7PNhv+NcnDssRQ7Cr55vn/ONi+VG5KUksxMtNG9sHf79Isgt7X4Efllp1a6BLjmwnS/3lLEyD3bWr1lRim5doEJJK249e2jw8aPyScuWCGRlMB9r/fqnsRHRx+tpO/MvdY64B5Vd1FoHJG1PqVmS0zl1ntXFQe2zTG3gpENz3mfIOmBwAx5Imh+7/oW5O53Im3SrCpz91KjfP/B98SY+IaeIcqbecvqyBoay0h4FHrbHFDIQ/dkrqmM1DHA/axI1bjDkZaHgMOxCdb638LbjcFK8OMmK2Cf+SYzKm94Wm9dgCWaJFdLfF56yvRN6n1lzBr0QP8A5LysTt3iuZxUNcykgCLDYv/dnIO2fmZ8rBLkgt74Ca/jsMLG5IJT7Z74rgaXw7cFbNiq8QatZoYpqFkJ+8uEWW/jTYDNYldLc1ReiS9hHRSXrmz4Awjb7KgyQC8mPT2ilTI5jxUNYsNMiWiWAwnQeQZoUoRAd0LHyWCgTRGhWTgKY2MHKiuowGft71Obrhf9Xi0jASMpIk0E1KzJ5JuBA+yqAAAAA==',
                remarks:'求关注，求点赞，求投币，求收藏，求转发，求一切。',
                herf: 'https://space.bilibili.com/276886844',
                children:[
                    {
                        name:'歌曲纯享合集',
                        herf:'https://space.bilibili.com/276886844/?spm_id_from=333.999.0.0'
                    },
                    {
                        name:'专栏-封面图',
                        herf:'https://space.bilibili.com/276886844/article'
                    },
                ]
            }
        ]
    },
    4: {
        title: "丶一瓶AD钙",
        url:'https://space.bilibili.com/14094124',
        imgUrl:bili,
        show:false,
        children:[
            {
                name:'丶一瓶AD钙',
                imgUrl:bili,
                type:'bili',
                show:false,
                remarks:'马马虎虎吧',
                herf: 'https://space.bilibili.com/14094124',
                children:[
                    {
                        name:'视频剪辑',
                        herf:'https://space.bilibili.com/14094124'
                    },
                ]
            }
        ]
    },
    5: {
        title: "小龙吖丶",
        url:'https://space.bilibili.com/3970477',
        imgUrl:bili,
        show:false,
        children:[
            {
                name:'小龙吖丶',
                imgUrl:bili,
                type:'bili',
                show:false,
                remarks:'关注微博超级话题：#周二珂#',
                herf: 'https://space.bilibili.com/3970477',
                children:[
                    {
                        name:'视频剪辑',
                        herf:'https://space.bilibili.com/3970477'
                    },
                ]
            }
        ]
    },
    6: {
        title: "二珂呀呀呀",
        url:'https://space.bilibili.com/10753901',
        imgUrl:'http://p2.music.126.net/HY6NAECJ9PYbK8CntSTE1w==/18778559091333928.jpg?param=200y200',
        show:false,
        children:[
            {
                name:'二珂呀呀呀',
                type:'bili',
                imgUrl:bili,
                show:false,
                remarks:'新浪微博：二珂Chloe',
                herf: 'https://space.bilibili.com/10753901',
                show:false,
                children:[
                    {
                        name:'慢慢喜欢你 - 周二珂',
                        herf:'https://www.bilibili.com/video/BV1rW411A7pu'
                    },
                    {
                        name:'告白气球-周二珂',
                        herf:'https://www.bilibili.com/video/BV1ts41117qh/'
                    },
                    {
                        name:'匆匆那年 - 周二珂',
                        herf:'https://www.bilibili.com/video/BV1Ms411m7Bh'
                    },
                    {
                        name:'走在冷风中 - 周二珂',
                        herf:'www.bilibili.com/video/BV1hs411U7Jy/"'
                    },
                ]
            },
            {
                name:'二珂呀呀呀',
                type:'wyy',
                show:false,
                imgUrl:'http://p2.music.126.net/HY6NAECJ9PYbK8CntSTE1w==/18778559091333928.jpg?param=200y200',
                remarks:'二珂直播间：DouYu 78622',
                herf: 'https://music.163.com/#/djradio?id=5310001',
            }
        ]
    },
    7: {
        title: "周二珂周三鸽",
        imgUrl:bili,
        url:'https://space.bilibili.com/2034302701',
        show:false,
        children:[
            {
                name:'周二珂周三鸽',
                imgUrl:bili,
                show:false,
                type:'bili',
                remarks:'评论我会删，互动请私信！',
                herf: 'https://space.bilibili.com/2034302701',
                children:[
                    {
                        name:'二珂微博&抖音',
                        herf:'https://space.bilibili.com/2034302701'
                    },
                    {
                        name:'二珂直播录像考古特辑',
                        herf:'https://space.bilibili.com/2034302701'
                    }
                ]
            }
        ]
    },
    8: {
        title: "寂寞是凯神",
        url:'https://space.bilibili.com/233895985',
        imgUrl:bili,
        show:false,
        children:[
            {
                name:'寂寞是凯神',
                imgUrl:bili,
                show:false,
                type:'bili',
                remarks:'寂寞是凯神',
                herf: 'https://space.bilibili.com/233895985',
                children:[
                    {
                        name:'视频剪辑',
                        herf:'https://space.bilibili.com/233895985'
                    },
                ]
            }
        ]
    },
    9: {
        title: "叶子宇吖",
        show:false,
        imgUrl:'http://p2.music.126.net/m6545W0uGHXl9B19-SF2Bg==/109951166734969798.jpg?param=200y200',
        children:[
            {
                name:'二珂同学吖',
                type:'wyy',
                show:false,
                imgUrl:'http://p2.music.126.net/m6545W0uGHXl9B19-SF2Bg==/109951166734969798.jpg?param=200y200',
                remarks:'二珂同学的翻唱偶尔更新',
                herf: 'https://music.163.com/#/djradio?id=969709687',
            }
        ]
    },
    10: {
        title: "双层吉士汉堡er",
        imgUrl:'http://p2.music.126.net/c8jktP7SB0vp1e4Dv8FAxQ==/109951163302654233.jpg?param=200y200',
        show:false,
        children:[
            {
                name:'二珂Chloe',
                type:'wyy',
                show:false,
                imgUrl:'http://p2.music.126.net/c8jktP7SB0vp1e4Dv8FAxQ==/109951163302654233.jpg?param=200y200',
                remarks:'二珂直播间：DouYu 78622',
                herf: 'https://music.163.com/#/djradio?id=526548699',
            }
        ]
    },
    11: {
        title: "本本吖_benbenya",
        show:false,
        imgUrl:'http://p2.music.126.net/0ZuVjrNW0tacFu-5QyIjnw==/109951165495925382.jpg?param=200y200',
        children:[
            {
                name:'二珂-周二珂-一个小小粉丝的光',
                type:'wyy',
                show:false,
                imgUrl:'http://p2.music.126.net/0ZuVjrNW0tacFu-5QyIjnw==/109951165495925382.jpg?param=200y200',
                remarks:'版权问题可能以后没办法更新了',
                herf: 'https://music.163.com/#/djradio?id=347381086',
            }
        ]
    },
    12:{
        title: "--PENG----",
        show:false,
        imgUrl:'http://p2.music.126.net/pcealsGiQSkTE2eaN7hP0w==/109951163075958798.jpg?param=200y200',
        content: "二珂直播音乐合集",
        children:[
            {
                name:'二珂直播音乐合集',
                type:'wyy',
                show:false,
                imgUrl:'http://p2.music.126.net/pcealsGiQSkTE2eaN7hP0w==/109951163075958798.jpg?param=200y200',
                remarks:'二珂dy直播间 78622',
                herf: 'https://music.163.com/#/djradio?id=526225596',
            }
        ]
    },
    // 13:{
    //     title: "二珂呀呀呀",
    //     imgUrl:'http://p2.music.126.net/HY6NAECJ9PYbK8CntSTE1w==/18778559091333928.jpg?param=200y200',
    //     show:false,
    //     content: "二珂呀呀呀",
    //     children:[
    //         {
    //             name:'二珂呀呀呀',
    //             imgUrl:'http://p2.music.126.net/HY6NAECJ9PYbK8CntSTE1w==/18778559091333928.jpg?param=200y200',
    //             remarks:'二珂直播间：DouYu 78622',
    //             herf: 'https://music.163.com/#/djradio?id=5310001',
    //         }
    //     }
    // },
}