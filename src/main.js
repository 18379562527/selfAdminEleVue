import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './element/index.js'
import store from './store/index'
import './units/globalComponment.js'
import './permission.js'
import './icons' // 图标
Vue.config.productionTip = false;
import serverApi from './units/server-api'
Vue.prototype.http = new serverApi();


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')