<template>
  <div class="classify">
    <div class="topSearch">
      <input type="search" placeholder="搜索商品，共19591款好物"/>
    </div>
    <div class="content">
      <div class="list">
        <ul class="contentLeft">
          <li class="item"
              :class="{'active':navIndex === index}"
              v-for="(item,index) in NavList"
              :key="index" @click="clickIndex(index)">
            <a href="javascript:;">{{item}}</a>
          </li>
        </ul>
      </div>
      <div class="contentRight" v-if="rightUl">
        <img :src="rightUl.url" alt="">
        <div class="detailTit">
          <span class="text">
            <span>{{rightUl.name}}</span>
            <span>分类</span>
          </span>
        </div>
        <ul>
          <li class="item" v-for="(item,index) in rightUl.list" :key="index">
            <img v-lazy="item.wapBannerUrl" alt="">
            <span>{{item.name}}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
  import {mapGetters,mapState} from 'vuex'
  import BScroll from 'better-scroll'
  export default{
    data(){
      return{
        navIndex:4
      }
    },
    computed:{
      ...mapGetters(['NavInfo','NavList',]),
      rightUl(){
        return this.NavInfo[this.navIndex]
      }

    },
    methods: {
      _initScroll () {
        new BScroll (this.$refs.scroll, {
          click: true,
          startY: 0
        })
      },
      clickIndex(index){
        this.navIndex = index
        console.log(this.navIndex);
      }
    },
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .classify
    .topSearch
      z-index 10
      position fixed
      width 92%
      height 60px
      padding 20px
      left 0
      top 0
      background: #fff;
      input
        background-color   #ededed
        height 60px
        line-height 50px
        width 100%
        border-radius 7px
        background-image url("./images/search.png")
        background-repeat no-repeat
        background-size   30px 30px
        padding-left 190px
        background-position left 150px center
        &::-webkit-input-placeholder
          font-size 26px
    .content
      overflow hidden
      padding 20px
      margin-top 70px
      .list
        position fixed
        left 0
        top 70px
        border-right  1px solid #ccc
        border-top  1px solid #ccc
        float left
        width 20%
        .contentLeft
          font-size 26px
          li
            margin 50px 0
            text-align center
          .item
            width 100%
            &.active
              a
                color #b52b30
                font-weight bold
                font-size 38px
      .contentRight
        border-top  1px solid #ccc
        padding 10px
        float right
        width 76%
        img
          width 530px
        .detailTit
          height 80px
          line-height 108px
          text-align center
          font-size 26px
          color #333333
          .text
            position relative
            font-size 0
            >span
              font-size 24px
            &:before,&:after
              position absolute
              content ''
              top -20px
              bottom 0
              margin auto
              height 1px
              width 40px
              background-color #d9d9d9
            &:before
              left -56px
            &:after
              right -56px
        ul
          width 100%
          li
            border-radius 100%
            width 150px
            height 150px
            text-align: center
            font-size 26px
            float left
            margin 10px
            img
              width 100%
              height 100%
              border-radius 100%
            span
              text-overflow ellipsis
              white-space nowrap
              overflow hidden
              width 150px
              display block
</style>

<!--position relative-->
<!--&:before-->
<!--content ''-->
<!--position absolute-->
<!--top 0-->
<!--left 0-->
<!--bottom 0-->
<!--width px2rem(6)-->
<!--background-color $main-->
<!--&gt;a-->
<!--font-size px2rem(36)-->
<!--line-height px2rem(76)-->
<!--font-weight 700-->
<!--color $main-->

