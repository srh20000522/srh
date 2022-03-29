import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import ElementUI from 'element-ui'
import store from './st/1'
import "element-ui/lib/theme-chalk/index.css"
import '@/style/index.css'
import myplugins from "./plug/plug"

Vue.use(myplugins)
Vue.use(ElementUI)
Vue.config.productionTip = false;
if (process.env.NODE_ENV === 'development') {
   require('./mock')
}

new Vue({
   router,
   store,
   render: (h) => h(App),
}).$mount("#app");