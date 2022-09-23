/**
 * 时间戳
 * @param {*} timestamp  时间戳
 */

 export function utilTime(timestamp) {
    let date = new Date(timestamp * 1000) //时间戳为10位需*1000，时间戳为13位的话不需乘1000
    let Y = date.getFullYear() + ' '
    let M =
        (date.getMonth() + 1 < 10 ?
            '0' + (date.getMonth() + 1) :
            date.getMonth() + 1)
    let D =
        (date.getDate() < 10 ? '0' + date.getDate() : date.getDate())
    let h =
        (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':'
    let m =
        (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) +
        ':'
    let s =
        date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()
    return  M + '/'+ D + '/' + Y  + h + m + s
};
/**
 * 时间戳
 * @param {*} name  时间戳
 */

 export function getQueryString(name){
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if(r!=null)
        return unescape(r[2]); 
    return null;

};
