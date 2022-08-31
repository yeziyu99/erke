import axios from "axios";
import Vue from "vue";
import { getCookie } from "@/common/utils";
import router from "../router";

axios.defaults.baseURL = "/api"
//请求
function http(url, method, params = {}) {
    //params.Token = getCookie("token");
    if (method === 'EXPORT') {
        let _arr = [];
        for (var k in params) {
            _arr.push(k + "=" + params[k]);
        }
        return "/api" + url + "?" + _arr.join("&");
    }
    if (method === "GET") {
        return axios({
            method,
            url,
            params
        });
    }
    return axios({
        method,
        url,
        data: params
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
        if (response.data.IsSucc) {
            return response.data;
        } else if (response.data.Code == '100100') {
            router.push('/login')
            sessionStorage.clear()
            localStorage.clear()
            window.location.reload()

        }
        Vue.prototype.$Message.error({
            content: response.data.Message,
            closable: true
        });
        return response.data;
    },
    error => {
        if (error.response) {
            switch (error.response.status) {
                case 401: // 返回 401
            }
        }
        return Promise.reject(error.response.data) // 返回接口返回的错误信息
    }
);

const _http = {
    /** 登陆
     * login
     * params
     *  Account	string	yes	用户名，现在固定值etc
        PassWord	string	yes	密码，现在固定值etc123
     */
    login(params) {
        return http("/auth/login", "POST", params);
    },
    /** 退出
     * login
     * params
     *  Token	string	yes	Token
     */
    logout() {
        return http("/auth/logout", "POST");
    },
    /** 获取登录信息
     * getUserInfo
     * params
     *  //Token	string	yes	Token
     */
    getUserInfo() {
        return http("/user/info", "GET");
    },
    
};


export default _http;