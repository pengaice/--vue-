<template>
  <div class="remember">
    <div class="server">
      <div class="serverTitle">
        <div class="foryou">{{data.name}}</div>
      </div>
      <div class="bai">
        <img v-lazy="data.Item[0].picUrl" alt="">
        <div class="baibottom">
          <div class="baiTitle">{{data.Item[0].title}}<span>9.9元起</span></div>
          <div class="baiInfo">{{data.Item[0].subTitle}}</div>
        </div>
      </div>
    </div>
    <div class="drink">
      <div class="drinkLift">
        <div class="drinkTop">{{data.Item[1].title}}</div>
        <div class="drinkInfo">{{data.Item[1].subTitle}}</div>
      </div>
      <div class="drinkImg">
        <img v-lazy="data.Item[1].picUrl" alt="">
      </div>
    </div>
    <div class="drink">
      <div class="drinkLift">
        <div class="drinkTop">{{data.Item[2].title}}</div>
        <div class="drinkInfo">{{data.Item[2].subTitle}}</div>
      </div>
      <div class="drinkImg">
        <img v-lazy="data.Item[2].picUrl" alt="">
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    props:{
      data:Object
    }

  }

</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../../common/stylus/mixins.styl"
.remember
  .server
    width 100%
    height 750px
    .serverTitle
      height 120px
      display flex
      justify-content center
      align-items center
      flex-direction column
      .foryou
        font-size 30
    .bai
      width 95%
      padding 20px
      img
        width 97%
        border-radius 20px 20px 0 0
      .baibottom
        border 1px solid #ededed
        height 180px
        border-top 0px
        width 97%
        .baiTitle
          font-size 32px
          margin 40px
          span
            float right
        .baiInfo
          font-size 28px
          color #7f7f7f
          padding-left 20px

  .drink
    border 1px solid #ededed
    margin-bottom 40px
    width 96%
    height 250px
    padding 20px
    display flex
    justify-content center
    align-items center
    .drinkLift
      width 60%
      height 250px
      display flex
      justify-content center
      flex-direction column
      .drinkTop
        font-size 32px
        margin 20px
      .drinkInfo
        font-size 28px
        color #7f7f7f
        margin-left 20px
        text-overflow ellipsis
        white-space nowrap
        overflow hidden
    .drinkImg
      width 300px
      width 40%
      img
        width 98%
</style>
