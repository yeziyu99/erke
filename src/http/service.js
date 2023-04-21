import axios from "axios";
import Vue from "vue";
// import { getCookie } from "@/common/utils";
// import md5 from 'js-md5'
// import { v4 as uuidv4 } from 'uuid';

import router from "../router";

axios.defaults.baseURL = "https://api.erkechloe.com"
//请求
function http(url, method, params = {}) {
    if (method === "GET") {
        return axios({
            method,
            url,
            params:JSON.parse(JSON.stringify(params))
        });
    }
    return axios({
        method,
        url,
        data: JSON.parse(JSON.stringify(params))
    });
}

axios.interceptors.request.use(
    config => {
        return config;
    },
    err => {
        return Promise.reject(err);
    });

axios.interceptors.response.use(
    response => {
        if (response.data.is_succ) {
            return response.data;
        } else if (response.data.code == '100100') {
            // router.push('/login')
            sessionStorage.clear()
            localStorage.clear()
            window.location.reload()

        }
        // Vue.prototype.$Message.error({
        //     content: response.data.Message,
        //     closable: true
        // });
        return response.data;
    },
    error => {
        // console.log(error)
        if (error.response) {
            switch (error.response.status) {
                case 401: // 返回 401
            }
        }
        return Promise.reject(error.response.data) // 返回接口返回的错误信息
    }
);
const _http = {
    // 对接数据 主页部分
    /** 获取直播状态
        * getLive
        * params
        *  //Token	string	no	Token
        * rid 斗鱼id 78622
        * 返回数据
        * 参数	            描述	   数据类型
        * status	        状态码（200--直播间开播，403--直播间未开播，404--直播间不存在）	int
        * req_room_id	    请求的房间号id	                        int
        * msg	            提示文字	                        string
        * isloop	        是否位轮播状态(true or false)	    bool
    */
     getLive() {
        return http("/index/live", "GET",{rid:'78622'});
    },
     /** 音乐页面
        * 获取歌曲专辑列表 
        * getSongAlbumLists
        * params
        *  //Token	string	no	Token
        返回参数如下（通用返回参数data中的参数）
            参数	描述	数据类型
            total	数据总条数	int
            current_page	当前分页页码	int
            lists	返回数据	array

            lists数组里面的数据参数
                参数	描述	数据类型
                id	歌曲专辑的id	int
                album_name	歌曲专辑的名称	string
                album_desc	歌曲专辑的描述	string
                cover_img_id	歌曲专辑的封面图id(使用获取图片数据接口可获取该图片的真实url)	int
                release_time	专辑封面发布时间戳	int
        */
     getSongAlbumLists(params) {
        return http("/song/albumLists", "GET",params);
    },
     /** 音乐页面
        * 获取歌曲数据 
        * getSongDatasMthMethod
        * params
        *  //Token	string	no	Token
       （{method} 为请求方法，共有两个请求方法 aid 和 sid 。aid--歌曲专辑的id，sid--歌曲的id。{value}为相应请求数值。用 aid(专辑id)获取数据的话，会有分页page参数，分页默认50条数据）
        请求方式：Get
        返回参数如下（通用返回参数data中的参数）
            参数	描述	数据类型
            total	数据总条数	int
            current_page	当前分页页码	int
            lists	返回数据	array
            lists数组里面的数据参数
                参数	描述	数据类型
                id	歌曲在数据库中的id	int
                song_name	歌曲名称	string
                author	歌手名称	string
                song_id	5sing的音乐id	int
                song_type	5sing的音乐类型(yc--原唱，fc--翻唱)	string
                release_time	歌曲的发布日期的时间戳	int

     */
    getSongDatasMthMethod(params) {
        let obj={
            page:params.page,
        }
        if(params.methods=='aid'){
            obj.aid=params.method
        }
        if(params.methods=='aid'){
            obj.sid=params.method
        }
        return http("/song/datas/mth/"+params.methods, "GET",{
            aid:params.method,
            page:params.page,
        });
    },
     /** 音乐页面
        * 获取歌曲播放链接 
        * getSongUrl
        * params
        *  //Token	string	no	Token
       （{song_id} 和 {song_type} 为上文获取歌曲列表中lists数组里面的数据参数）
        请求方式：Get
        返回参数如下（通用返回参数data中的参数）
            参数	描述	数据类型
            song_name	歌曲名	string
            song_urls	歌曲播放url	array

            song_urls中的参数
                参数	描述	数据类型
                url	歌曲播放url	string
                burl	歌曲备用播放url	string
                ext	歌曲文件类型	string
                size	歌曲大小	Int


     */
    getSongUrl(params) {
        return http("/song/urls", "GET",params);
    },
    /** 音乐页面
        * 获取歌曲歌词 
        * getSongLrc
        * params
        *  //Token	string	no	Token
       （（song_id 和 song_type 为上文获取歌曲列表中lists数组里面的数据参数）
        请求方式：Get
        返回参数如下（通用返回参数data中的参数）
            参数	描述	数据类型
            song_name	歌曲名	string
            song_urls	歌曲播放url	array
                datas中的参数
                参数	描述	数据类型
                isSuccess	表示是否获取成功（true--成功，false--不成功）	bool
                love	具体用途不明，5sing返回的数据	bool
                collect	具体用途不明，5sing返回的数据	bool
                lrc	歌词数据	object
                lrc.type	具体用途不明，5sing返回的数据	int
                lrc.data	歌词数据	string



     */
    getSongLrc(params) {
        return http("/song/lrc", "GET",params);
    },
    /** 图片页面
        * 获取相册列表 
        * getPictureAlbumLists
        * params
        *  //Token	string	no	Token
       （({page}为分页页码，默认返回 5 条数据)
        请求方式：Get
        返回参数如下（通用返回参数data中的参数）
            参数	描述	数据类型
            total	数据总条数	int
            current_page	当前分页页码	int
            lists	返回数据	array

            lists数组里面的数据参数
                参数	描述	数据类型
                id	相集的id	int
                album_name	相集的名称	string
                album_desc	相集的描述	string
                cover_img_id	相集的封面图id(使用获取图片数据接口可获取该图片的真实url)	int
                release_time	专辑封面发布时间戳	int
    */
    getPictureAlbumLists(params) {
        return http("/picture/albumLists", "GET",params);
    },
    /** 图片页面
        * 获取图片数据 
        * getPictureDatasMthMmethod
        * params
        *  //Token	string	no	Token
        {method} 为请求方法，共有两个请求方法 aid 和 sid 。aid--相集的id，pid--图片的id。{value}为相应请求数值。用 aid(相集id)获取数据的话，会有分页page参数，分页默认50条数据）
        请求方式：Get
        返回参数如下（通用返回参数data中的参数）
            参数	描述	数据类型
            total	数据总条数	int
            current_page	当前分页页码	int
            lists	返回数据	array
                lists数组里面的数据参数
                参数	描述	数据类型
                id	图片在数据库中的id	int
                img_name	图片名称	string
                img_desc	图片描述	string
                img_url	图片的url	string
                is_loc_url	图片的url是否为本地链接
                (0--非本地链接，即第三方图片储存；1--为本地链接，使用时需要拼。即:
                http://api.erkechloe.com/upload/{img_url})	int
                release_time	图片的发布日期的时间戳	int
     */
    getPictureDatasMthMmethod(params) {
        return http("/picture/datas/mth/"+params.method, "GET",params);
    },





    //对接网易云
    // /**  获取歌曲搜索列表
    //  * getSearch
    //  * params
    //  *  //Token	string	no	Token
    //  * keywords 搜索名称
    //  */
    //  getSearch() {
    //     return http("/search", "GET",{keywords:'二珂'});
    //     // return http("/search", "GET",{keywords:'1081635'});
    // },
    // /**  获取歌单列表
    //  * getPlaylistDetail
    //  * params
    //  *  //Token	string	no	Token
    //  */
    //  getPlaylistDetail(params) {
    //     return http("/playlist/detail", "GET",params);
    // },
    // /**  获取电台
    //  * getDjProgram
    //  * params
    //  *  //Token	string	no	Token
    //  * rid  969709687
    //  */
    // getDjProgram(params) {
    //     return http("/dj/program", "GET",params);
    // },
    // /**  获取电台详情
    //  * getDjProgramDetail
    //  * params
    //  *  //Token	string	no	Token
    //  * id  节目id
    //  */
    // getDjProgramDetail(params) {
    //     return http("/dj/program/detail", "GET",params);
    // },
    // /**  获取歌曲信息
    //  * getSongUrl
    //  * params
    //  *  //Token	string	no	Token
    //  */
    // getSongUrl(params) {
    //     return http("/song/url", "GET",params);
    // },
    // /**  获取歌词
    //  * getLyric
    //  * params
    //  *  //Token	string	no	Token
    //  */
    //  getLyric(params) {
    //     return http("/lyric", "GET",params);
    // },
    
};


export default _http;