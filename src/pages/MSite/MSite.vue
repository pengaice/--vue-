<template>
  <!--头部固定-->
<div class="msite">
  <div class="top">
    <div class="topMain">
      <div class="logo">
        <img src="./images/logo.png" alt="">
      </div>
      <div class="search">
        <input type="search" placeholder="搜索商品，共19591款好物"/>
      </div>
      <div class="login"><span>登陆</span></div>
    </div>
    <div class="listWrapper">
      <ul class="topList" ref="imgUI">
        <li class="listItem"><a href="javascript: ">推荐</a></li>
        <li class="listItem"><a href="javascript: ">居家</a></li>
        <li class="listItem"><a href="javascript: ">鞋包配饰</a></li>
        <li class="listItem"><a href="javascript: ">服装</a></li>
        <li class="listItem"><a href="javascript: ">电器</a></li>
        <li class="listItem"><a href="javascript: ">推荐</a></li>
        <li class="listItem"><a href="javascript: ">居家</a></li>
        <li class="listItem"><a href="javascript: ">鞋包配饰</a></li>
        <li class="listItem"><a href="javascript: ">服装</a></li>
        <li class="listItem"><a href="javascript: ">电器</a></li>
      </ul>
      <div class="topList_right">
        <i class="iconfont icon-jiantouxia"></i>
      </div>
    </div>
  </div>
  <div class="content">
    <!--轮播-->
    <banner></banner>
    <!--保障 promise-->
    <div class="promise">
      <a href="javascript: ">
        <img src="./images/dui.png" alt="">
        <span>网易自营品牌</span>
      </a>
      <a href="javascript: ">
        <img src="./images/dui.png" alt="">
        <span>30天无忧退货</span>
      </a>
      <a href="javascript: ">
        <img src="./images/dui.png" alt="">
        <span>48小时快速退款</span>
      </a>
    </div>
    <Split></Split>
    <!--新人-->
    <div class="newPerson">
      <div class="newTop">
        - 新人专享礼 -
      </div>
      <div class="newInfo">
        <div class="newInfoLeft">
           新人专享礼包
          <img src="./images/new1.png" alt="">
        </div>
        <div class="newInfoRight">
          <div class="newInfoRightTop">
             <p>福利社<br/>今日特价</p>
            <img src="./images/new2.png" alt="">
          </div>
          <div class="newInfoRightBottom">
            <p>新人拼团</p>
            <img src="./images/new3.png" alt="">
          </div>
        </div>
      </div>
    </div>
    <Split></Split>
    <!--品牌制造商直供-->
     <div class="creater">
       <div class="creatTop">
         <div class="left">品牌制造商直供</div>
         <a href="javascript:;"> 更多> </a>
       </div>
       <ul class="creatContent">
         <li>
           <p>海外制造商</p>
           <p>9.9元起</p>
         </li>
         <li>
           <p>海外制造商</p>
           <p>9.9元起</p>
         </li>
         <li>
           <p>海外制造商</p>
           <p>9.9元起</p>
         </li>
         <li>
           <p>海外制造商</p>
           <p>9.9元起</p>
         </li>
       </ul>
     </div>
    <Split></Split>
    <!--类目热销榜-->
    <div class="hotDoor">
      <div class="creatTop">
        <div class="left">类目热销榜</div>
      </div>
      <div class="contentt">
        <div class="cloth">
          <span>服装榜</span>
          <img src="" alt="">
        </div>
        <div class="home">
          <span>居家榜</span>
          <img src="" alt="">
        </div>

      </div>
    </div>
    <Split></Split>
    <!--滑动-->
    <div class="swap">
      <ul class="content">
        <li>
          <img src="./images/xiaolongxia.png" alt="">
          <div class="title">小龙虾4-6钱 </div>
          <p>夏季爆品夏季爆</p>
          <span>￥98</span>
        </li>
        <li>
          <img src="./images/xiaolongxia.png" alt="">
          <div class="title">小龙虾4-6钱 </div>
          <p>夏季爆品夏季爆</p>
          <span>￥98</span>
        </li>
        <li>
          <img src="./images/xiaolongxia.png" alt="">
          <div class="title">小龙虾4-6钱 </div>
          <p>夏季爆品夏季爆</p>
          <span>￥98</span>
        </li>
      </ul>
    </div>
  </div>
</div>
  <!--dispatch&ndash;&gt; 触发action 固定属性commit传数据 触发mutation&#45;&#45;更新state数据-->
</template>
<script>
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  import banner from './banner/banner.vue'
  export default{
    components: {
      banner
    },
    mounted(){
      this.$store.dispatch('getHomeData')

      new Swiper('.swiper-container',{
        loop:true,
        pagination: {
          el:'.swiper-pagination'
        }
      })
      new BScroll ('.listWrapper',{
        scrollX:true
      })

    },
    computed: {
      ...mapState(['homeDate']),
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
#app
.msite
  width 100%
  height 100%
  .top
    z-index 10
    position fixed
    left 0
    top 0
    width 100%
    height 140px
    background #fff
    .topMain
      width 100%
      height 70px
      line-height 70px
      text-align   center
      .logo
        width 20%
        float left
        margin 15px 15px 15px 25px
        img
          width 92%
          height 100%
      .search
        width 60%
        float left
        margin-right 10px
        input
          background-color   #ededed
          height 50px
          line-height 50px
          width 100%
          border-radius 7px
          background-image url("./images/search.png")
          background-repeat no-repeat
          background-size   30px 30px
          padding-left 80px
          background-position left 40px center
          &::-webkit-input-placeholder
            font-size 28px
      .login
        position absolute
        top 15px
        right 15px
        border solid 1px #b4282d
        width 9%
        height 40px
        line-height 40px
        text-align center
        border-radius 6px
        span
          font-size 12px
          color #b4282d
    .listWrapper
      width 100%
      height 70px
      /*background yellowgreen*/
      .topList
        width 1300px
        height 70px
        float left
        li
          float left
          margin-left 50px
          a
            color #333
            font-size 30px
      topList_right
        float left
        position relative
        .iconfont
          position absolute
          top 0
          bottom 0
          margin auto
  .content
    /*overflow hidden*/
    padding-bottom 100px
    .promise
      color #333
      font-size 28px
      height 70px
      line-height 70px
      padding 0 40px
      a
        margin-right 20px
        img
          width 40px
          height 40px
          vertical-align middle
        span
          font-size 23px
          color #333
    .newPerson
      text-align center
      .newTop
        width 100%
        height 100px
        line-height 100px
        font-size 40px
      .newInfo
        width 95%
        height 400px
        margin auto
        margin-bottom 30px
        .newInfoLeft
          box-sizing border-box
          padding 30px
          position relative
          float left
          width 49%
          height 100%
          margin-right 5px
          background #F9E9CF
          img
            width 220px
            position absolute
            top 100px
            left 50px
        .newInfoRight
          float left
          width 50%
          height 98%
          p
            position absolute
            left 30px
            top 40px
          .newInfoRightTop
            width 100%
            height 49.6%
            margin-bottom 5px
            background #fbe2d3
            position relative
            fu
              float left
            img
              width 200px
              position absolute
              top 10px
              right 10px
          .newInfoRightBottom
            width 100%
            height 50%
            margin-top 5px
            background #ffecc2
            position relative
            img
              width 220px
              position absolute
              top 10px
              right 10px

    .creater
      padding 30px
      height 500px
      /*background lightblue*/
      .creatTop
        width 100%
        height 100px
        line-height 100px
        font-size 36px
        .left
          float left
        a
          float right
          color #333

      .creatContent
        text-align: center
        height 400px
        li
          width 45%
          height 50%
          float left
          padding 10px
          background-repeat no-repeat
          background-image url("./images/create.png")
          background-position -40px -40px
    .hotDoor
      padding 20px
      height 500px
      /*background lightblue*/
      .creatTop
        width 100%
        height 100px
        line-height 100px
        font-size 36px
        .left
          float left
      .contentt
        text-align: center
        height 400px
        .cloth
          width 49%
          height 50%
          float left
          margin-right 11px
          background  #f9f3e4
          display flex
          align-items center
          span
            font-size 30px
            margin-left 40px
          img
            width 150px
            height 150px
            background yellowgreen
            margin-left 40px
        .home
          width 48%
          height 50%
          float left
          margin-right 10px
          background #ebeff6
          display flex
          align-items center
          span
            font-size 30px
            margin-left 40px
          img
            width 150px
            height 150px
            background yellowgreen
            margin-left 40px
    .swap
      height 400px
      width 1000px
      /*background pink*/
      padding 30px
      .content
        li
          float left
          margin-right 26px
          color #646464
          img
            width 280px
            background #f4f4f4
          p
            font-size 26px
            margin 15px 0
          span
            color #bc3e43


</style>
