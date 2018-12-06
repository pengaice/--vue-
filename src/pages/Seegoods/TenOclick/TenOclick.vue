<template>
  <div class="TenWrap">
    <div class="title">十点一刻</div>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item,index) in data" :key="index">
          <div class="top">
            <span class="lines"></span>
            <span>今日话题</span>
            <span class="lines"></span>
          </div>
          <p class="middle-q">{{item.title}}</p>
          <p class="middle-a">{{item.desc}}</p>
          <p class="bottom">{{item.id}}人参与话题</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  export default {
    props:{
      data:Array
    },
    mounted () {

        this.$nextTick(() => {
          new Swiper('.swiper-container',{
            slidesPerView : 1.1,
            spaceBetween : 20,
          })
        })
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../../common/stylus/mixins.styl"
  .TenWrap{
    width: 100%
    height 552px
    box-sizing border-box
    padding 0 0 20px 20px
    margin-top 20
    background white
    .title{
      width 100%
      height 120
      text-align center
      font-size 28
      line-height 120px
    }
    .swiper-container{
      height 412px
      width 100%
      .swiper-slide{
        margin-right 20px
        background url('../../../common/images/qipao.png')
        background-size 100% 100%
        background-repeat no-repeat
        box-sizing border-box
        padding 38px 90px 80px 40px
        .top{
          margin-top 20px
          font-size 24px
          color #7f7f7f
          display flex
          align-items center
          justify-content center
          .lines{
            display inline-block
            width 24px
            height 1px
            background #ccc
            margin 5px
          }
        }
        .middle-q{
          font-size 36px
          font-weight bold
          margin 80px 0 14px 0
          text-align center
        }
        .middle-a{
          font-size 28px
          text-align center
          margin 20px 0 14px 0
        }
        .bottom{
          font-size 24px
          margin-top 70px
          text-align center
        }
      }
    }
  }
</style>
