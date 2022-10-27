import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueCookies from 'vue-cookies'
import "@/assets/styles/reset.scss";
import "@/assets/font/font.css";
Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.prototype.$cookie = VueCookies;
import echarts from 'echarts'
Vue.prototype.$echarts = echarts
Date.prototype.format = function(format) {
  var o = {
    "M+" : this.getMonth()+1, //month
    "d+" : this.getDate(),    //day
    "h+" : this.getHours(),   //hour
    "m+" : this.getMinutes(), //minute
    "s+" : this.getSeconds(), //second
    "q+" : Math.floor((this.getMonth()+3)/3),  //quarter
    "S" : this.getMilliseconds() //millisecond
  }
  if(/(y+)/.test(format)) format=format.replace(RegExp.$1,
  (this.getFullYear()+"").substr(4 - RegExp.$1.length));
  for(var k in o)if(new RegExp("("+ k +")").test(format))
  format = format.replace(RegExp.$1,
  RegExp.$1.length==1 ? o[k] :
  ("00"+ o[k]).substr((""+ o[k]).length));
  return format;
}
Vue.directive('auth', (el, binding) => {
  let userInfoArry = store.state.userInfoArry
  let a = binding.value
  if (userInfoArry.includes(a)) {
    el.style.display = 'block'
  } else {
    el.style.display = 'none'
  }
})
Vue.prototype.isOperation  = (columns, str) => {
  let userInfoArry = new Set(store.state.userInfoArry)
  let auth = str instanceof Array ? str.join() : str
  if (userInfoArry.has(auth)) {
    return columns
  } else {
    return columns.filter(col => col.key !== 'operation')
  }
}
Vue.use(VueCookies)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");