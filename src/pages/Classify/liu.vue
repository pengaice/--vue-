<template>
  <div id="classify" >
    <!--头部搜索部分-->
    <header id="header">
      <!--搜索框-->
      <div class="search">
        <i class="iconfont icon-sousuo1"></i>
        <span> 搜索商品, 共19601款好物</span>
      </div>
    </header>
    <!--主体部分-->
    <section id="content">
      <!--左侧导航-->
      <div class="navigator">
        <ul class="navList">
          <li v-for="(list,index) in classify" :key="index" @click="currentIndex(index)" :class="{'active':navindex === index}">
            {{list.name}}
          </li>
        </ul>
      </div>
      <!--右侧内容区域-->
      <div class="detail" v-if="Detail">
        <div>
          <img class="detailImg" :src="Detail.wapBannerUrl" alt="">
          <div class="detailTitle">{{Detail.name}}分类</div>
          <ul class="detailList">
            <li v-for="(cate,index) in Detail.subCateList" :key="index">
              <img class="listImg" v-lazy="cate.wapBannerUrl" alt="">
              <span>{{cate.name}}</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'
  export default {
    mounted(){
      setTimeout(()=>{
        new BScroll('.navigator', {
          click: true,
          startY: 0
        })
        new BScroll('.detail', {
          click: true,
          startY: 0
        })
      },50)
      this.$store.dispatch('getClassifyData')
    },
    computed:{
      ...mapState(['classify','navindex']),
      Detail(){
        return this.classify[this.navindex]
      }
    },
    methods:{
      currentIndex(index){
        this.$store.dispatch('getNavIndex',index)
        console.log(this.navindex);
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  #classify
    background-color #fff
    #header
      background-color #fff
      bottom-border-1px(#e4e4e4)
      width 100%
      height 45px
      display flex
      justify-content center
      align-items center
      position fixed
      z-index 10
      top 0
      left 0
      .search
        width 355px
        height 30px
        background-color #EDEDED
        border-radius 5px
        font-size 14px
        display flex
        justify-content center
        align-items center
        span
          color #666
        .iconfont
          font-size 20px
    #content
      display flex
      justify-content center
      width 100%
      padding-bottom 50px
      .navigator
        width 80px
        height 550px
        border-right: 1px solid #e4e4e4
        margin-top 45px
        .navList
          padding-top 15px
          width 100%
          li
            width 100%
            height 50px
            line-height 50px
            font-size 15px
            font-weight 700
            text-align center
            &.active
              color #b4282d
              font-size 17px
              border-left 2px solid #b4282d
      .detail
        width 275px
        height 550px
        padding 20px 10px
        margin-top 45px
        .detailImg
          width 275px
          height 100px
        .detailTitle
          width 100%
          height 55px
          line-height 55px
          font-size 14px
          text-align center
        .detailList
          width 100%
          display flex
          flex-wrap wrap
          justify-content flex-start
          li
            width 90px
            height 100px
            display flex
            flex-direction column
            justify-content space-around
            align-items center
            text-align center
            .listImg
              width 70px
              height 70px
            span
              display inline-block
              width 80px
              height 20px
              font-size 12px
</style>

