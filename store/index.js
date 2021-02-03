// store/index.js


import Vue from 'vue'
import Vuex from 'vuex'
 
Vue.use(Vuex);

const store = new Vuex.Store({
	state : {
	  nickname : "Vuex数据"
	 },
 mutations : {},
 
 // ...
 
});

export default store