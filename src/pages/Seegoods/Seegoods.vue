<template>
  <div class="Seegoods">
    <div class="top">
      <div class="topMain">
        <div class="home">
          <i class="iconfont icon-shouye1"></i>
        </div>
        <div class="title">
          <span class="red">发现</span>
          <span class="small">甄选家</span>
        </div>
        <div class="login">
          <i class="iconfont icon-sousuo2"></i>
          <i class="iconfont icon-shopshoppingco"></i>
        </div>
      </div>
      <div class="topList">
        <ul>
          <li class="listItem"><a href="javascript: ">推荐</a></li>
          <li class="listItem"><a href="javascript: ">达人</a></li>
          <li class="listItem"><a href="javascript: ">上新</a></li>
          <li class="listItem"><a href="javascript: ">晒单</a></li>
          <li class="listItem"><a href="javascript: ">HOME</a></li>
        </ul>
      </div>
    </div>
    <div class="content">

      <div class="contentItem">
        <div class="left">
          <div class="header">
            <img src="./images/head1.jpg" alt="">
            <span>洗护组：靓靓</span>
          </div>
          <div class="title">
            头发越来越少，可能是该换花洒了
          </div>
          <p>拯救青年脱发计划</p>
          <span>22.3k人看过</span>
        </div>
        <div class="right">
          <img src="./images/mei1.jpg" alt="">
        </div>
      </div>
      <div class="contentItem">
        <div class="left">
          <div class="header">
            <img src="./images/head1.jpg" alt="">
            <span>洗护组：靓靓</span>
          </div>
          <div class="title">
            头发越来越少，可能是该换花洒了
          </div>
          <p>拯救青年脱发计划</p>
          <span>22.3k人看过</span>
        </div>
        <div class="right">
          <img src="./images/mei1.jpg" alt="">
        </div>
      </div>
      <div class="contentItem">
        <div class="left">
          <div class="header">
            <img src="./images/head1.jpg" alt="">
            <span>洗护组：靓靓</span>
          </div>
          <div class="title">
            头发越来越少，可能是该换花洒了
          </div>
          <p>拯救青年脱发计划</p>
          <span>22.3k人看过</span>
        </div>
        <div class="right">
          <img src="./images/mei1.jpg" alt="">
        </div>
      </div>
      <div class="contentItem">
        <div class="left">
          <div class="header">
            <img src="./images/head1.jpg" alt="">
            <span>洗护组：靓靓</span>
          </div>
          <div class="title">
            头发越来越少，可能是该换花洒了
          </div>
          <p>拯救青年脱发计划</p>
          <span>22.3k人看过</span>
        </div>
        <div class="right">
          <img src="./images/mei1.jpg" alt="">
        </div>
      </div>
      <div class="contentItem">
        <div class="left">
          <div class="header">
            <img src="./images/head1.jpg" alt="">
            <span>洗护组：靓靓</span>
          </div>
          <div class="title">
            头发越来越少，可能是该换花洒了
          </div>
          <p>拯救青年脱发计划</p>
          <span>22.3k人看过</span>
        </div>
        <div class="right">
          <img src="./images/mei1.jpg" alt="">
        </div>
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
.Seegoods
  .top
    z-index 10
    position fixed
    left 0
    top 0
    width 100%
    height 180px
    background #fafafa
    .topMain
      width 100%
      height 100px
      line-height 100px
      text-align   center
      .home
        width 20%
        float left
        .iconfont
          font-size 38px
        img
          width 92%
          height 100%
      .title
        width 50%
        float left
        .red
          font-size 46px
          color #b4282d
          font-weight bold
          font-family a
          margin-right 20px
        .small
          color #9b9b9b
          font-size 26px
      .login
        float left
        width 20%
        vertical-align middle
        .iconfont
          font-size 50px
          margin-right 30px
        span
          font-size 12px
          color #b4282d
    .topList
      width 100%
      height 80px
      line-height 80px
      border-top solid 1px #9b9b9b
      ul
        width 100%
        height 100%
        li
          float left
          margin-left 70px
          a
            color #9b9b9b
            font-size 28px
  .content
    margin-top 180px
    .contentItem
      .left
        width 380px
        height 93%
        float left
        padding-top 40px
        padding-left 10px
        .header
          color #4c4c4c
          font-size 26px
          img
            border-radius 100%
            vertical-align middle
            width 60px


        .title
          margin-top 30px
          font-size 36px
          color #333
          margin-bottom 10px
        p
          color #ababab
          font-size 24px
          margin-bottom 15px
        span
          color #ababab
          font-size 20px

      .right
        width 290px
        height 93%
        float left
        padding-top 40px
        img
          width 100%
          height 100%
          border-radius 20px


</style>
