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
import Phone from '../pages/Profile/Phone/Phone.vue'
import Email from '../pages/Profile/Email/Email.vue'
// 声明使用vue插件
Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',//去掉路由地址的#
  routes: [
    {
      path: '/msite',
      component: MSite,
      meta:{
        showFooter:true
      }
    },
    {
      path: '/profile',
      component: Profile,
      children:[
        {
          path: '/profile/phone',
          component: Phone
        },
        {
          path: '/profile/email',
          component: Email
        },
      ]
    },
    {
      path: '/classify',
      component: Classify,
      meta:{
        showFooter:true
      }
    },
    {
      path: '/seegoods',
      component: Seegoods,
      meta:{
        showFooter:true
      }
    },
    {
      path: '/shopcart',
      component: ShopCart,
      meta:{
        showFooter:true
      }
    },
    
    {
      path: '/',
      redirect: '/msite',
    }
  ]
})
