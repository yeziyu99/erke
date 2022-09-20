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
            is_h5: 0
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
        if (response.data.is_succ) {
            return response.data;
        } else if (response.data.code == '100100') {
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
function objKeySort(arys) {
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
    /** web端展示的产品分类列表
     * getSymbolClassify
     * params
     *  //Token	string	no	Token
     */
    getSymbolClassify() {
        return http("/symbol/classify", "GET");
    },
     /** web端展示的产品分类列表
     * getForyouTradeTop
     * params
     *  //Token	string	no	Token
     *  identifier crypto（多个分类英文逗号拼接）crypto（虚拟货币）、energy（能源）、forex（外汇）、index（股指）、metal（贵金属）、stock（股票）
     */
      getForyouTradeTop(identifier) {
        return http("/foryou/trade_top", "GET",{identifier:identifier});
    },
    /** Market
     * getForyouMarket
     * params
     * symbol	交易品种名称
     * offset_id	分页 ID，避免数据重复
     * limit	每页条数
     */
    getForyouMarket(params) {
        return http("/foryou/market", "GET", params);
    },
    /** 图表
     * getChart
     * params
     *  //Token	string	yes	Token
     */
    getChart() {
        return http("/chart", "GET");
    },
    /** 图表
     * getChart
     * params
     * symbol	
     * type		in:1,5,15,30,60,240,1440,10080,43200
     * start	时间戳
     * end		时间戳
     * offset	是	
     * limit	是
     */
    getChart(params) {
        return http("/chart", "GET", params);
    },
    /** 今开昨收价格
     * getChartPrice
     * params
     *  symbol
     */
    getChartPrice(params) {
        return http("/chart/price", "GET", params);
    },
    // /** 品种分类-可交易品种
    //  * getSymbolAllow
    //  * params
    //  *  //identifier  分类标识
    //  */
    // getSymbolAllow(params) {
    //     return http("/symbol/allow", "GET", params);
    // },
};


export default _http;