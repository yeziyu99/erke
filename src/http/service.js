import axios from "axios";
import Vue from "vue";
import { getCookie } from "@/common/utils";
import md5 from 'js-md5'
import { v4 as uuidv4 } from 'uuid';

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
    let paramsInfo = config.params
    let Sign = ''
    paramsInfo = {
      ...paramsInfo,
      version: getCookie('version') || '1.0.0',
    //   os: getCookie('curreryOs'),
      rnd: uuidv4(),
      ts: Date.parse(new Date()),
      is_h5: 1
    }
    config.params = paramsInfo
    // 排序参数拼接字符串
    Sign = objKeySort(paramsInfo)
    // md5加密Sign
    Sign = md5(Sign)
    config.headers = {
      'Content-Type': 'application/x-www-form-urlencoded',
    //   'Authorization': 'Bearer ' + t,
      'Sign': Sign
    }
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
            // router.push('/login')
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
function objKeySort (arys) {
    // 先用Object内置类的keys方法获取要排序对象的属性名，再利用Array原型上的sort方法对获取的属性名进行排序，newkey是一个数组
    let newkey = Object.keys(arys).sort()
    let sign = ''
    for (let i = 0; i < newkey.length; i++) {
      // 向新创建的对象中按照排好的顺序依次增加键值对
      if (!(arys[newkey[i]] instanceof Array)) {
        sign += `${newkey[i]}=${arys[newkey[i]]}&`
      }
    }
    sign += '8wN5G9t8'
    return sign // 返回排好序的新字符串
  }
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
    /** web端展示的产品分类列表
     * getUserInfo
     * params
     *  //Token	string	yes	Token
     */
     getSymbolClassify() {
        return http("/symbol/classify", "GET");
    },
    
};


export default _http;