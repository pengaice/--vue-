<template>
  <!--<div class="swap" ref="swaps">-->
    <!--<ul class="content">-->
      <!--<li v-for="(item,index) in data" :key="index">-->
        <!--<img :src="item.primaryPicUrl" alt="">-->
        <!--<div class="title">{{item.name}} </div>-->
        <!--<p>{{item.simpleDesc}}</p>-->
        <!--<span>¥{{item.retailPrice}}</span>-->
      <!--</li>-->
    <!--</ul>-->
  <!--</div>-->

  <div class="pic-wrapper">
    <ul class="pic-list">
      <li class="pic-item" v-for="(item,index) in data" :key="index">
        <div class="picImg">
          <img :src="item.primaryPicUrl" alt="">
        </div>
        <div class="title">{{item.name}} </div>
        <p>{{item.simpleDesc}}</p>
        <span>¥{{item.retailPrice}}</span>
      </li>

    </ul>
  </div>
</template>
<script>
  import Swiper from 'swiper'
  import BScroll from 'better-scroll'
  export default {
    props: {
      data: Array
    },
    data () {
      return {
        slidesPerView: 2.42,
        spaceBetween: 40,
      }
    },
    mounted() {
      this.$nextTick(() => {
        this.scroll = new BScroll('.pic-wrapper', {
          click: true,
          scrollX: true,
        })
      })
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../../common/stylus/mixins.styl"
  .pic-wrapper
    width: 100%
    overflow: hidden
    white-space: nowrap
    margin-top 16px
    height 450px
    .pic-list
      font-size 0
      width 1800px
      .pic-item
        display inline-block
        width 300px
        height 300px
        margin-top 20px
        &:last-child
          margin: 0
        .picImg
          text-align: center
          img
            width 86%
            height 86%
            background #f4f4f4
        .title
          white-space nowrap
          overflow hidden
          text-overflow ellipsis
          font-size 30px
          margin-left 40px
          margin-top 20px
          color #484848
        p
          font-size 26px
          margin 15px 0
          white-space nowrap
          overflow hidden
          text-overflow ellipsis
          margin-left 40px
          margin-top 15px
          color #808080
        span
          color #bc3e43
          font-size 26px
          margin-left 40px
          margin-top 20px

  /*.swap*/
    /*width 100%*/
    /*height 300px*/
    /*overflow hidden*/
    /*.content*/
      /*width 1600px*/
      /*height 300px*/
      /*display flex*/
      /*align-items space-around*/
      /*justify-content center*/
      /*li*/
        /*text-align center*/
        /*display flex*/
        /*align-items center*/
        /*justify-content center*/
        /*flex-wrap nowrap*/
        /*flex-direction column*/
        /*width 200px*/
        /*height 200px*/
        /*img*/
          /*width 60%*/
          /*height 60%*/
        /*.title*/
          /*white-space nowrap*/
          /*overflow hidden*/
          /*text-overflow ellipsis*/
        /*p*/
          /*font-size 26px*/
          /*margin 15px 0*/
          /*white-space nowrap*/
          /*overflow hidden*/
          /*text-overflow ellipsis*/
        /*span*/
          /*color #bc3e43*/

</style>

