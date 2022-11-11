import axios from "axios";
import Vue from "vue";
// import { getCookie } from "@/common/utils";
// import md5 from 'js-md5'
// import { v4 as uuidv4 } from 'uuid';

import router from "../router";

axios.defaults.baseURL = "https://autumnfish.cn"
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
        // console.log(response)
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
    /**  获取歌曲搜索列表
     * getSearch
     * params
     *  //Token	string	no	Token
     * keywords 搜索名称
     */
     getSearch() {
        return http("/search", "GET",{keywords:'二珂'});
        // return http("/search", "GET",{keywords:'1081635'});
    },
    /**  获取歌单列表
     * getPlaylistDetail
     * params
     *  //Token	string	no	Token
     */
     getPlaylistDetail(params) {
        return http("/playlist/detail", "GET",params);
    },
    /**  获取歌单列表
     * getPlaylistDetail
     * params
     *  //Token	string	no	Token
     */
    getPlaylistDetail(params) {
        return http("/playlist/detail", "GET",params);
    },
    /**  获取歌曲信息
     * getSongUrl
     * params
     *  //Token	string	no	Token
     */
    getSongUrl(params) {
        return http("/song/url", "GET",params);
    },
    /**  获取歌词
     * getLyric
     * params
     *  //Token	string	no	Token
     */
     getLyric(params) {
        return http("/lyric", "GET",params);
    },
};


export default _http;