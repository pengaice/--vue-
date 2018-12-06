<template>
  <div class="msite_nav">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item,index) in homeData.focusList" :key="index">
          <a href="javascript:">
            <img :src="item.picUrl" alt="">
          </a>
        </div>
        <div class="swiper-slide">
          <a href="javascript:">
            <img src="./images/banner/nav-m1.jpg" alt="">
          </a>
        </div>
      </div>
      <!-- Add Pagination -->
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>
<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  import {mapState} from 'vuex'
  export default{
    mounted(){

      watch: {
        this.$nextTick(() => {
          new Swiper('.swiper-container', {
            loop: true,
            pagination: {
              el: '.swiper-pagination'
            }
          })
        })
      }
    },
    computed:{
      ...mapState(['homeData'])
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../../common/stylus/mixins.styl"
  .msite_nav
    bottom-border-1px(#e4e4e4)
    margin-top 150px
    height 420px
    background #fff
    .swiper-container
      width 100%
      height 100%
      .swiper-wrapper
        width 100%
        height 100%
        .swiper-slide
          display flex
          justify-content center
          align-items flex-start
          img
            display inline-block
            width 100%
            height 100%
      .swiper-pagination
        >span.swiper-pagination-bullet-active
          background #02a774
</style>
