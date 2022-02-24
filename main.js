import Vue from 'vue'
import App from './App'
import uView from 'uview-ui';
import store from './store'
//引入store
Vue.use(uView);
Vue.config.productionTip = false
Vue.prototype.$store =store;
// 引入API接口文件
import global_ from './components/api/global'//引用文件
Vue.prototype.GLOBAL = global_//挂载到Vue实例上面
App.mpType = 'app'

const app = new Vue({
    ...App,
	store //挂载全局vuex
})
app.$mount()
