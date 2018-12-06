<template>
  <div class="SeeGoods">
    <div class="top">
        <div class="home">
          <i class="iconfont icon-shouye1" @click="$router.replace('/MSite')"></i>
        </div>
        <div class="title">
          网易严选
        </div>
        <div class="login">
          <i class="iconfont icon-sousuo2"></i>
          <i class="iconfont icon-shopshoppingco"></i>
        </div>
      </div>
    <div class="SeeGoodsContent" ref="wrapper">
      <div class="contenta">
      <banner :data="topicData.banner"></banner>
      <!--滑动-->
      <dinglei :data="topicData.column"></dinglei>
      <split></split>
      <!--为你推荐--> <!--喝什么-->
      <server v-if="topicData.recommend" :data="topicData.recommend"></server>
      <split></split>
        <!--十点一刻-->
        <TenOclick :data="topicData.tenfifteen"></TenOclick>
      <split></split>
        <!--严选臻品-->
      <zhenpin :data="topicData.zhen"></zhenpin>
      <split></split>
        <!--严选look-->
      <div class="look" v-if="topicData.yxLook">
        <div class="lookTitle">
          <div class="foryou">严选look</div>
        </div>
        <div class="lookImg">
          <img v-lazy="topicData.yxLook.picUrl" alt="">
        </div>
        <div class="comment">
          <img v-lazy="topicData.yxLook.avatar" alt=""> <span>{{topicData.yxLook.nickname}}</span>
          <p>{{topicData.yxLook.content}}</p>
        </div>
      </div>
      <div class="more">
          更多精彩
        </div>
        <!--每一项-->
      <dataTopic :data="topicData.yxWeek"></dataTopic>
    </div>
    </div>
  </div>
</template>
<script>
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  import banner from './banner/banner.vue'
  import dinglei from './dinglei/dinglei.vue'
  import server from './server/server.vue'
  import TenOclick from './TenOclick/TenOclick.vue'
  import zhenpin from './zhenpin/zhenpin.vue'
  import dataTopic from './dataTopic/dataTopic.vue'
  export default {
    components: {
      banner,
      dinglei,
      server,
      TenOclick,
      zhenpin,
      dataTopic
    },
    mounted(){
      this.$store.dispatch('getTopicData',()=>{
        this.$nextTick(()=>{
          this.scroll = new BScroll(this.$refs.wrapper,{click:true})
        })
      })
    },
    computed:{
      ...mapState(['topicData'])
    }
  }
</script>
<style lang='stylus' rel='stylesheet/stylus'>
  @import "../../common/stylus/mixins.styl"
body,html
  width 100%
  height 100%
  background #fafafa
  overflow hidden
  #app
    width 100%
    height 100%
    .SeeGoods
      width 100%
      height 100%
      margin-bottom 90px
      .top
        z-index 10
        width 94%
        height 90px
        padding 0 20px
        line-height 90px
        background #fafafa
        position fixed
        left 0
        top 0
        .home
          float left
          .iconfont
            font-size 38px
        .title
          position absolute
          left 300px
          margin auto
          font-weight bold
          font-size 38px
        .login
          float right
          .iconfont
            font-size 50px
            margin-right 30px
      .SeeGoodsContent
        width 100%
        height 100%
        overflow hidden
        margin-top 90px
        box-sizing border-box
        .contenta
          width 100%
          .look
            width 100%
            height 1020px
            padding 20px
            box-sizing border-box
            .lookTitle
              height 120px
              display flex
              justify-content center
              align-items center
              flex-direction column
              .foryou
                font-size 30
            .lookImg
              width 100%
              height 600px
              text-align center
              img
                width 100%
                height 100%
            .comment
              img
                width 80px
                height 80px
                margin 10px
                border-radius 100%
                vertical-align middle
              span
                vertical-align middle
                margin-left 10px
              p
                color #7e8c8d
                line-height 40px

          .more
            text-align center
            height 100px
            text-decoration line-through

</style>
