// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import './rem'
import Split from "./components/Split/Split.vue"


//注册全局组件
Vue.component("Split", Split)

//让此模块运行一次
import './mock/mockServer'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
  
})
