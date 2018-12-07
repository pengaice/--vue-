<template>
 <div class="zhuanti">
   <div class="miniteTitle">
     <div class="foryou">专题精选</div>
   </div>
   <div class="pic-wrapper" ref="pcWrap">
     <ul class="pic-list">
       <li class="pic-item" v-for="(item,index) in data" :key="index">
         <div class="picImg">
           <img v-lazy="item.itemPicUrl" alt="">
         </div>
         <div class="title">{{item.title}}<span class="price">¥{{item.priceInfo}}</span> </div>
         <p>{{item.subtitle}}</p>
       </li>
     </ul>
   </div>
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
        swiperOption: {
          slidesPerView: 1.2
        }
      }
    },
    mounted() {
      this.$nextTick(() => {
        this.scroll = new BScroll(this.$refs.pcWrap, {
          click: true,
          scrollX: true,
        })
      })
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../../common/stylus/mixins.styl"
  .zhuanti
    width 100%
    height 600px
    .miniteTitle
      height 120px
      display flex
      justify-content center
      align-items center
      flex-direction column
    .pic-wrapper
      width: 100%
      overflow: hidden
      white-space: nowrap
      margin-top 16px
      height 450px
      .pic-list
        font-size 0
        width 250%
        height 430px
        .pic-item
          display inline-block
          width 600px
          height 420px
          &:last-child
            margin: 0
          .picImg
            text-align: center
            img
              width 92%
              height 92%
              background #f4f4f4
              border-radius 20px
          .title
            white-space nowrap
            overflow hidden
            text-overflow ellipsis
            font-size 30px
            margin-left 40px
            margin-top 20px
            color #484848
            .price
              color #bc3e43
              font-size 26px
              margin-left 140px
              margin-top 20px
          p
            font-size 26px
            margin 15px 0
            white-space nowrap
            overflow hidden
            text-overflow ellipsis
            margin-left 40px
            margin-top 15px
            color #808080

</style>

