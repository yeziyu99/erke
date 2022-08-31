import Vue from "vue";
import Vuex from "vuex";
import http from "@/http/service";
import router from './router';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  getters: {},
  actions: {
   
    // webSocketInit (context) {
    //   let quoteWsUrl = context.state.isAlive ? 'wss://quote.evotradesys.com:7779' : 'wss://quote.tigerwit-inc.com:7779'
    //   context.state.webSock = new WebSocket(quoteWsUrl)
    //   context.state.webSock.onopen = () => {
    //       let date = formatDate(new Date(), 'yyyy-MM-dd hh:mm:ss');
    //       let guid = new_guid();
    //       context.dispatch('websocketSend', {
    //           type: 'login',
    //           message: {
    //               UserName: 'quote',
    //               LoginTime: date,
    //               DevId: guid,
    //               Token: md5('mko0nji9bhu8' + date + 'quote' + guid)
    //           }
    //       });
    //   };
    //   context.state.webSock.onmessage = (evt) => {
    //     let socketData = JSON.parse(evt.data);
    //     //console.log(context.state.isLoginWebSocket);
    //     if (!socketData) return;
    //     if (!context.state.isLoginWebSocket) {   //检查返回的信息是报价or登陆状态
    //         if (JSON.parse(socketData.Body) && JSON.parse(socketData.Body).Code === 'success') {
    //             context.state.isLoginWebSocket = true;
    //         }
    //     } else {
    //         //处理报价
    //         /**
    //          * socketData = [
    //          *   [
    //          *     "EURUSD",
    //          *     "1.12465",   // ask
    //          *     "1.12445",   // bid
    //          *     "1.12453",   // 中间价
    //          *     "1555929940"
    //          *   ]
    //          *   ...
    //          * ]
    //          */
    //         try{
    //           socketData instanceof Array && socketData.forEach(item => {
    //             context.state.quote = {
    //               symbol: item[0],
    //               buy: item[1],
    //               sell: item[2]
    //             };
    //           })
    //         } catch(err){
    //           console.log(err)
    //         }
    //     }
    //   };
    //   context.state.webSock.onclose = (e) => {
    //     Vue.prototype.$Message.error({
    //       content: 'The quote has been closed',
    //       closable: true
    //     });
    //       console.log(e);
    //   };
    // },
    // /* WebSocket发送信息 */
    // websocketSend(context, data) {
    //   //console.log(data);
    //   if (data.type === 'login') {
    //       context.state.webSock.send(JSON.stringify({
    //           type: 2,
    //           content: data.message
    //       }));
    //       return;
    //   }
    //   if (data.type === 'msg' && context.state.isLoginWebSocket) {
    //       if (!data.symbols || !data.symbols.length) return;
    //       let symbolsArr = Array.from(new Set(data.symbols));
    //       //console.log(data.symbols )
    //       let initSymbols = {
    //           type: 3,
    //           content: symbolsArr.join(',')
    //       };
    //       context.state.webSock.send(JSON.stringify(initSymbols));
    //   }
    // },
    
  }
});
