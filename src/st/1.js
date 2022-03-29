import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
let store = new Vuex.Store({
   state: {
      count: 0
   },
   mutations: {
      increment(state, payload) {
         console.log(payload);
         state.count = state.count + payload
      },
      decrement(state, payload) {
         console.log(payload);
         state.count = state.count - payload
      }
   },
   actions: {
      asyncincrement(context, payload) {
         console.log(payload);
         setTimeout(function () {
            context.commit("increment", payload)
         }, 2000)
      }
   }
})
export default store