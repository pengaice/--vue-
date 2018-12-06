<template>
  <div class="profile">
    <div class="top">
        <div class="home">
          <i class="iconfont icon-shouye1" @click="$router.replace('/MSite')"></i>
        </div>
        <div class="title">
          网易严选
        </div>
        <div class="login">
          <i class="iconfont icon-sousuo2"></i>
          <i class="iconfont icon-shopshoppingco" @click="$router.replace('/shopcart')"></i>
        </div>
      </div>
    <div class="content">
      <div class="conImg">
        <img src="./images/logo.png" alt="">
      </div>
      <router-view />
      <div class="loginWay" v-show="$route.path === '/profile'">
        <div class="phone">
          <a href="javascript:;" @click="$router.push('/profile/phone')">
            <span>手机号码登陆</span>
          </a>
        </div>
        <div class="email">
          <a href="javascript:;" @click="$router.push('/profile/email')">
            <span>邮箱账号登陆</span>
          </a>
        </div>
      </div>

    </div>
    <div class="other" v-show="$route.path === '/profile'">
      <div class="otherItem">
        <i class="iconfont icon-weixin3"></i>
        微信
      </div>
      <div class="otherItem">|</div>
      <div class="otherItem">
        <i class="iconfont icon-qq"></i>
        QQ
      </div>
      <div class="otherItem">|</div>
      <div class="otherItem">
        <i class="iconfont icon-weibo"></i>
        微博
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
  .profile
    width 100%
    height 100%
    .top
      z-index 10
      width 95%
      height 80px
      padding 0 20px
      line-height 80px
      background #fff
      position relative
      .home
        float left
        .iconfont
          font-size 38px
      .title
        position absolute
        left 300px
        margin auto
        font-size 38px
      .login
        float right
        .iconfont
          font-size 50px
          margin-right 30px
    .content
      .conImg
        display flex
        align-items center
        justify-content center
        width 100%
        height 300px
        img
          width 340px
      .loginWay
        .phone
          position absolute
          text-align: center
          top 440px
          left 50px
          width 650px
          background-color #b4282d
          border-radius 2px
          a
            color #fff
            height 90px
            font-size 28px
            line-height 90px
        .email
          position absolute
          text-align: center
          top 580px
          left 50px
          width 650px
          height 90px
          border 1px solid #b4282d
          border-radius 2px
          a
            font-size 28px
            line-height 90px
            color #b4282d
    .other
      position absolute
      bottom 100px
      left 130px
      font-size 26px
      width 460px
      text-align: center
      color #666
      .otherItem
        width 20%
        float left
        font-size 26px
        color #666
</style>
