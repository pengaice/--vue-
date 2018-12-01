<template>
  <div class="classify">
    <div class="topSearch">
      <input type="search" placeholder="搜索商品，共19591款好物"/>
    </div>
    <div class="content">
      <ul class="contentLeft">
        <li><a href="javascript:;">推荐专区</a></li>
        <li><a href="javascript:;">冬季专区</a></li>
        <li><a href="javascript:;">居家</a></li>
        <li><a href="javascript:;">洗护</a></li>
        <li><a href="javascript:;">推荐专区</a></li>
        <li><a href="javascript:;">冬季专区</a></li>
        <li><a href="javascript:;">居家</a></li>
        <li><a href="javascript:;">洗护</a></li>
        <li><a href="javascript:;">推荐专区</a></li>
        <li><a href="javascript:;">冬季专区</a></li>
        <li><a href="javascript:;">居家</a></li>
        <li><a href="javascript:;">洗护</a></li>
        <li><a href="javascript:;">推荐专区</a></li>
        <li><a href="javascript:;">冬季专区</a></li>
        <li><a href="javascript:;">居家</a></li>
        <li><a href="javascript:;">洗护</a></li>
      </ul>
      <div class="contentRight">
        <img src="http://yanxuan.nosdn.127.net/f80cb3e735b10b03ecfdca0097d9f576.jpg" alt="">
        <ul>
          <li>
            <img src="./images/yi.png" alt="">
            <span>明星商品</span>
          </li>
          <li>
            <img src="./images/yi.png" alt="">
            <span>明星商品</span>
          </li>
          <li>
            <img src="./images/yi.png" alt="">
            <span>明星商品</span>
          </li>
          <li>
            <img src="./images/yi.png" alt="">
            <span>明星商品</span>
          </li>
          <li>
            <img src="./images/yi.png" alt="">
            <span>明星商品</span>
          </li>
          <li>
            <img src="./images/yi.png" alt="">
            <span>明星商品</span>
          </li>
          <li>
            <img src="./images/yi.png" alt="">
            <span>明星商品</span>
          </li>
          <li>
            <img src="./images/yi.png" alt="">
            <span>明星商品</span>
          </li>
          <li>
            <img src="./images/yi.png" alt="">
            <span>明星商品</span>
          </li>
          <li>
            <img src="./images/yi.png" alt="">
            <span>明星商品</span>
          </li>
          <li>
            <img src="./images/yi.png" alt="">
            <span>明星商品</span>
          </li>
          <li>
            <img src="./images/yi.png" alt="">
            <span>明星商品</span>
          </li>
          <li>
            <img src="./images/yi.png" alt="">
            <span>明星商品</span>
          </li>
          <li>
            <img src="./images/yi.png" alt="">
            <span>明星商品</span>
          </li>
          <li>
            <img src="./images/yi.png" alt="">
            <span>明星商品</span>
          </li>
          <li>
            <img src="./images/yi.png" alt="">
            <span>明星商品</span>
          </li>
          <li>
            <img src="./images/yi.png" alt="">
            <span>明星商品</span>
          </li>
          <li>
            <img src="./images/yi.png" alt="">
            <span>明星商品</span>
          </li>
          <li>
            <img src="./images/yi.png" alt="">
            <span>明星商品</span>
          </li>
          <li>
            <img src="./images/yi.png" alt="">
            <span>明星商品</span>
          </li>
        </ul>
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
.classify
  .topSearch
    z-index 10
    position fixed
    width 92%
    height 60px
    padding 20px
    left 0
    top 0
    background: #fff;
    input
      background-color   #ededed
      height 60px
      line-height 50px
      width 100%
      border-radius 7px
      background-image url("./images/search.png")
      background-repeat no-repeat
      background-size   30px 30px
      padding-left 190px
      background-position left 150px center
      &::-webkit-input-placeholder
        font-size 26px
  .content
    overflow hidden
    padding 20px
    margin-top 70px
    .contentLeft
      border-right  1px solid #ccc
      border-top  1px solid #ccc
      float left
      width 20%
      font-size 26px
      position fixed
      left 0%
      top 70px
      li
        margin 50px 10px
    .contentRight
      border-top  1px solid #ccc
      padding 10px
      float right
      width 76%
      img
        width 530px
      ul
        width 100%
        li
          border-radius 100%
          width 150px
          height 150px
          text-align: center
          font-size 26px
          float left
          margin 10px
          img
            width 100%
            height 100%
            border-radius 100%




</style>
