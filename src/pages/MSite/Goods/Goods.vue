<template>
  <div class="homeGoods">
    <div class="goodsContent" v-for="items in data" :key="items.id">
      <div class="homeTop" >
        <div class="cont">{{items.name}}好物</div>
      </div>
      <ul class="homeWrap">
        <li class="homeItem" v-for="(item, index) in items.itemList" v-if="index<=4" :key="item.id">
          <div class="imgItem">
            <img v-lazy="item.listPicUrl" alt="">
          </div>
          <div class="imgBottom">{{item.simpleDesc}}</div>
          <div class="imgTitle">{{item.name}}</div>
          <div class="price">￥{{item.retailPrice}}</div>
        </li>
        <li class="morea">
          <a href="javascript:;" class="move">
            <div>更多{{items.name}}好物</div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default {
    props:{
      data:Array
    },
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../../common/stylus/mixins.styl"
  .homeGoods
    width 100%
    background #fff
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
      height 1400px
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
      .morea
        float left
        width 46%
        height 500px
        text-align: center


</style>
