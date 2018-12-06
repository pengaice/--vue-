<template>
  <div class="homeGoods">
    <div class="homeTop" v-if="data">
      <div class="cont">好物</div>
      <!--{{data.name}}-->
    </div>
    <ul class="homeWrap" v-if="data">
      <li class="homeItem" v-for="(item, index) in data.itemList" :key="index">
        <div class="imgItem">
          <img v-lazy="item.listPicUrl" alt="">
        </div>
        <div class="imgBottom">{{item.simpleDesc}}</div>
        <div class="imgTitle">{{item.name}}</div>
        <div class="price">￥{{item.retailPrice}}</div>
      </li>

      <li class="item">
        <a href="javascript:;" class="move">
          <!--<p>更多{{items.name}}好物</p>-->
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    props:{
      data:{
        type:Array,
        default:function () {
           return []
      }
      }
    },
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../../common/stylus/mixins.styl"
  .homeGoods
    width 100%
    height 670px
    .homeTop
      display flex
      width 100%
      height 100px
      justify-content center
      flex-direction column
      align-items center
      .cont
        font-size 30px
    .homeWrap
      padding 20px
      width 100%
      .homeItem
        width 46%
        height 500px
        margin-right 20px
        float left
        margin-bottom 30px
        .imgItem
          width 100%
          height 67%
          display flex
          background #f4f4f4
          flex-direction column
          align-items center
          img
            width 80%
        .imgBottom
          width 98%
          height 70px
          display flex
          justify-content center
          flex-direction column
          background #f1ece2
          padding-left 10px
          color #9f8a60
          font-size 30px
        .imgTitle
          margin 10px
          color #6c6c6c
          font-size 34px
        .price
          color #d17b7e
          margin 15px
</style>
