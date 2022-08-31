//设置cookie
export const setCookie = ({ name, value, expires = 30, domain = getDomain(), path = '/', secure }) => {

    let cookieText = "";
    cookieText += encodeURIComponent(name) + "=" + encodeURIComponent(value);
  
    // expires
    let oDate = new Date();
    oDate.setTime(oDate.getTime() + (expires * 24 * 60 * 60 * 1000));
    cookieText += "; expires=" + oDate.toGMTString();
  
    // path
    cookieText += "; path=" + path;
    cookieText += "; domain=" + domain;
    if (secure) {
        cookieText += "; secure";
    }
    document.cookie = cookieText;
  }
  // 获取cookies
  export const getCookie = (name) => {
    let cookieName = encodeURIComponent(name) + "=",
        cookieStart = document.cookie.indexOf(cookieName),
        cookieValue = "";
    if (cookieStart > -1) {
        let cookieEnd = document.cookie.indexOf(";", cookieStart);
        if (cookieEnd == -1) {
            cookieEnd = document.cookie.length;
        }
        cookieValue = decodeURIComponent(document.cookie.substring(cookieStart + cookieName.length, cookieEnd));
    }
    return cookieValue;
  }
  // 删除cookie
  export const delCookie = ({ name, domain, path, secure }) => {
    let value = '';
    let expires = Date(0)
    setCookie({ name, value, expires, domain, path, secure });
  }
  //截取域名
  export const getDomain = () => {
    let domain = location.hostname === 'localhost' ? location.hostname : '.' + location.hostname.split('.').slice(-2).join('.');
    return domain;
  }
  //通过value获取label
  export const getLabelOfValue = ({list = [], labelKey = "label", valueKey = "value", value}) => {
    let i = list.find(item => item[valueKey] == value);
    return i ? i[labelKey] : undefined;
  }
  // 格式化时间
  const padLeft = (str) => {
    return ('00' + str).substr(str.length)
  }
  export const formatDate = (date, fmt) => {
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
    }
    let o = {
        'M+': date.getMonth() + 1,
        'd+': date.getDate(),
        'h+': date.getHours(),
        'm+': date.getMinutes(),
        's+': date.getSeconds()
    }
    for (let k in o) {
        if (new RegExp(`(${k})`).test(fmt)) {
            let str = o[k] + ''
            fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? str : padLeft(str))
        }
    }
    return fmt
  }
  //Guid
  export const new_guid = () => {
    var guid = "";
    for (var i = 1; i <= 32; i++) {
        var n = Math.floor(Math.random() * 16.0).toString(16);
        guid += n;
        if ((i == 8) || (i == 12) || (i == 16) || (i == 20))
            guid += "-";
    }
    return guid;
  }
  export const DelCookie =  (name) =>{
      var exp = new Date();
      exp.setTime(exp.getTime() - 1);
      var cval = getCookie(name);
      if (cval){
           document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
      }
  }
  // 导出get传参数
  export const ExportUrl = (url, params) => {
    if (!url) return
    params = params || {}
    var arr = []
    for (var i in params) {
      if (params[i]) {
        arr.push(i + '=' + params[i])
      }
    }
    if (arr.length) {
      url = (url + '?' + arr.join('&'))
    }
    window.open(url)
  }
  // 判断是否为线上环境
  export const isLive  = () => {
    // 线上的地址为config.evotradesys.com，暂先根据域名判断。
    let url = window.location.host
    if (url == 'config.evotradesys.com') {
      return true
    } else {
      return false
    }
  }