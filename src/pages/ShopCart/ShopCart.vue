<template>
  <div class="shopCart">
    <div class="shopTop">
      <div class="title">
        购物车
      </div>
      <span>领券</span>
    </div>
    <div class="shopContent">
      <div class="contentTop">
        <span>30天无忧退货</span>
        <span>48小时快速退款</span>
        <span>满88元免邮费</span>
      </div>
      <div class="cart">
        <p>去添加点什么吧</p>
      </div>
      <div class="login" @click="$router.replace('/profile')">
        登陆
      </div>
    </div>
  </div>
</template>
<script>
  export default{

  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  body
    background #f4f4f4
    .shopCart
      width 100%
      height 100%
      .shopTop
        height 50px
        padding 20px
        line-height 50px
        text-align center
        position relative
        background #fff
        .title
          font-size 36px
          color #333
        span
          position absolute
          right 20px
          top 20px
          color #b4282d
          font-size 30px
      .shopContent
        width 100%
        background #f4f4f4
        .contentTop
          width 100%
          height 80px
          display flex
          align-items center
          text-align: center
          font-size 24px
          color #666
          span
            width 33.3%
        .cart
          position absolute
          top 500px
          left 260px
          width 240px
          height 240px
          text-align center
          background-repeat no-repeat
          background-size 240px 240px
          background-image url("./image/noCart-a8fe3f12e5.png")
          p
            position absolute
            bottom 0
            left 40px
            color #666
            font-size 26px
        .login
          text-align center
          position absolute
          top 800px
          left 150px
          margin auto
          outline none
          width 500px
          height 90px
          font-size 32px
          line-height 90px
          color #fff
          background-color #b4282d
          border-radius 2px
</style>
