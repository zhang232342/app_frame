import Vue from 'vue'
import App from './App'
import uView from 'uview-ui';
import store from './store'
//引入store
Vue.use(uView);
Vue.config.productionTip = false
Vue.prototype.$store =store;

App.mpType = 'app'

const app = new Vue({
    ...App,
	store //挂载全局vuex
})
app.$mount()
