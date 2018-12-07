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
      <div class="login" @click="$router.replace('/profile')"><span>登陆</span></div>
    </div>
      <!--横向列表-->
      <TopList></TopList>
  </div>
  <div class="msiteContent" ref="rating">
    <div class="content">
    <!--轮播-->
    <banner/>
    <!--保障 promise-->
    <div class="promise">
      <a href="javascript:; ">
        <img src="./images/dui.png" alt="">
        <span>网易自营品牌</span>
      </a>
      <a href="javascript:; ">
        <img src="./images/dui.png" alt="">
        <span>30天无忧退货</span>
      </a>
      <a href="javascript: ">
        <img src="./images/dui.png" alt="">
        <span>48小时快速退款</span>
      </a>
    </div>
      <Split></Split>
    <!--品牌制造商直供-->
    <div class="creater">
      <div class="creatTop">
        <div class="left">品牌制造商直供</div>
      </div>
      <ul class="creatContent">
        <li v-for="(item,index) in homeData.tagList" :key="index" v-if="index<=3">
          <a href="javascript:;">
            <div class="ctn">
              <div class="title">{{item.name}}</div>
              <span class="proce1">{{item.floorPrice}}</span>
            </div>
            <img v-lazy="item.picUrl" alt="">
          </a>
        </li>
      </ul>
    </div>
    <RenGoods></RenGoods>
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
    <!--滑动-->
    <scrollt :data="homeData.popularItemList"></scrollt>
    <Split></Split>
    <!--人气推荐-->
    <RenGoods></RenGoods>
    <Split></Split>
    <!--滑动部分-->
    <!--<scrollt></scrollt>-->
    <!--限时购-->
   <lastTime></lastTime>
    <!--福利社-->
    <div class="fu">
      <img src="./images/nav/nav-m8.jpg" alt="">
    </div>
    <Split></Split>
    <!--专题精选-->
    <tiSolit :data="homeData.topicList"></tiSolit>
    <!--<Split></Split>-->
    <!--<scrollt></scrollt>-->
    <Split></Split>
   <!--居家好物-->
   <Goods :data="homeData.cateList"></Goods>
    <Split></Split>
    <!--版权-->
    <div class="copyright">
      <div class="content">
        <div class="bd">
          <a href="javascript:;" class="goApp">下载APP</a>
          <a href="javascript:;">电脑版</a>
        </div>
        <p class="desc">
          <span>网易公司版权所有 © 1997-2018</span>
          <br>
          <span>食品经营许可证：JY13301080111719</span>
        </p>
      </div>
    </div>
  </div>
  </div>
  <div class="goTop" >
    <!--@click="goTop"-->
    <span>
      <img src="./images/goTop.png" alt="">
    </span>
  </div>
</div>
  <!--dispatch&ndash;&gt; 触发action 固定属性commit传数据 触发mutation更新state数据-->
</template>
<script>
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  import banner from './banner/banner.vue'
  import scrollt from './scrollt/scrollt.vue'
  import TopList from './TopList/TopList.vue'
  import Goods from './Goods/Goods.vue'
  import RenGoods from './RenGoods/RenGoods.vue'
  import tiSolit from './tiSolit/tiSolit.vue'
  import lastTime from './lastTime/lastTime.vue'
  export default{
    components: {
      banner,
      scrollt,
      Goods,
      RenGoods,
      TopList,
      tiSolit,
      lastTime
    },
    mounted(){
      this.$store.dispatch('getHomeData',()=>{
        this.$nextTick(()=>{
          this.scroll = new BScroll(this.$refs.rating,{click:true})
        })
      })
    },
    methods:{
//      goTop(){
//        this.srcoll.scrollTo(0,0,1000)
//      }
    },
    computed: {
      ...mapState(['homeData'])
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
body,html
  width 100%
  height 100%
  overflow hidden
  background #fff
  #app
    width 100%
    height 100%
    .msite
      width 100%
      height 100%
      margin-bottom 90px
      .top
        z-index 100
        width 100%
        height 140px
        background #fff
        position fixed
        left 0
        top 0
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
      .msiteContent
        width 100%
        height 100%
        margin-top 150px
        box-sizing border-box
        .content
          /*padding-bottom 100px*/
          .promise
            color red
            height 70px
            line-height 70px
            padding 0 40px
            a
              margin-right 18px
              img
                width 40px
                height 40px
                vertical-align middle
              span
                font-size 10px
                color #333
          .creater
            padding 10px
            height 560px
            width 99%
            .creatTop
              width 100%
              height 100px
              line-height 100px
              font-size 36px
              display flex
              justify-content center
              flex-direction column
              align-items center
            .creatContent
              position relative
              margin  0 10px
              height 470px
              overflow hidden
              li
                display inline-block
                position relative
                float left
                margin-bottom 10px
                width 345px
                height 220px
                overflow hidden
                background-color #f4f4f4
                &:nth-child(odd)
                  margin-right 10px
                >a
                  color #333333
                  .ctn
                    position absolute
                    left 0
                    top 0
                    padding 20px 0 0 20px
                    width 100%
                    z-index 4
                    font-size 0
                    .title
                      ellipsis()
                      font-size 28px
                      line-height 34px
                      margin-bottom 6px
                    .proce1,.proce2
                      font-size 30px
                      line-height 34px
                      margin-bottom 6px
                  >img
                    width 100%
                    height 100%
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
          .fu
            width 100%
            height 300px
            img
              width 100%
              height 100%
          .titl
            width 100%
            height 600px
            .topa
              display flex
              width 100%
              height 100px
              justify-content center
              flex-direction column
              align-items center
              background yellowgreen
              .cont
                font-size 32px
          .smallGoods
            width 100%
            height 500px
            .homeTop
              display flex
              width 100%
              height 100px
              justify-content center
              flex-direction column
              align-items center
              .cont
                font-size 30px
            .homeWrap
              padding 20px
              width 100%
              .homeItem
                width 46%
                height 500px
                margin-right 20px
                float left
                margin-bottom 30px
                .imgItem
                  width 100%
                  height 67%
                  display flex
                  background #f4f4f4
                  flex-direction column
                  align-items center
                  img
                    width 80%
                .imgBottom
                  width 98%
                  height 70px
                  display flex
                  justify-content center
                  flex-direction column
                  background #f1ece2
                  padding-left 10px
                  color #9f8a60
                  font-size 28px
                .imgTitle
                  margin 10px
                  color #6c6c6c
                  font-size 32px
                .price
                  color #d17b7e
                  margin 10px
          .copyright
            background-color #414141
            .content
              text-align center
              padding 54px 20px 38px 30px
              .bd
                a
                  display inline-block
                  width 150px
                  height 60px
                  border: 1px solid #999;
                  color #ffffff
                  font-size 26px
                  line-height 62px
                  &.goApp
                    margin-right 50px
              .desc
                margin-top 36px
                color #999999
                line-height 32px
                span
                  font-size 26px
      .goTop{
        width 80 px
        height  80 px
        background  #fff;
        border-radius  50%;
        text-align  center;
        position  fixed;
        bottom  120 px
        right  20 px
        z-index  5;
        span{
          display  flex;
          align-items  center;
          justify-content  center;
          height  100%;
          img{
            width 60px
          }
        }

      }
</style>
