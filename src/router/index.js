/**
 * Created by asus-z on 2018/11/28.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import MSite from '../pages/MSite/MSite.vue'
import Classify from '../pages/Classify/Classify.vue'
import Profile from '../pages/Profile/Profile.vue'
import Seegoods from '../pages/Seegoods/Seegoods.vue'
import ShopCart from '../pages/ShopCart/ShopCart.vue'
// 声明使用vue插件
Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',//去掉路由地址的#
  routes: [
    {
      path: '/msite',
      component: MSite
    },
    {
      path: '/profile',
      component: Profile
    },
    {
      path: '/classify',
      component: Classify
    },
    {
      path: '/seegoods',
      component: Seegoods
    },
    {
      path: '/shopcart',
      component: ShopCart
    },
    {
      path: '/',
      redirect: '/msite',
    }
  ]
})
