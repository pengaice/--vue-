<template>
  <div class="veryGoodsAll" v-if="data">
    <div class="veryGoods">
      <div class="veryGoodsTitle">
        <div class="foryou">{{data.name}}</div>
      </div>
      <div class="goodsImg">
        <img v-lazy="data.Item[0].picUrl" alt="">
      </div>
      <div class="goodsTitle">
        {{data.Item[0].title}}
      </div>
      <div class="goodsInfo">
        {{data.Item[0].subTitle}}
      </div>
    </div>
    <div class="qing" v-if="data">
    <div class="drinkLift">
      <div class="drinkTop">{{data.Item[1].title}}</div>
      <div class="drinkInfo">{{data.Item[1].subTitle}}</div>
    </div>
    <div class="drinkImg">
      <img v-lazy="data.Item[1].picUrl" alt="">
    </div>
  </div>
    <div class="qing" v-if="data">
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
      data :Object
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../../common/stylus/mixins.styl"
  .veryGoodsAll
    .veryGoods
      width 100%
      height 650px
      padding 20px
      box-sizing border-box
      .veryGoodsTitle
        height 120px
        display flex
        justify-content center
        align-items center
        flex-direction column
        .foryou
          font-size 30
      .goodsImg
        width 100%
        height 400px
        img
          width 100%
          height 100%
      .goodsTitle
        font-size 32px
        margin 20px
      .goodsInfo
        font-size 28px
        color #7f7f7f
        padding-left 20px
    .qing
      border 1px solid #ededed
      margin-bottom 40px
      width 96%
      height 250px
      padding 20px
      display flex
      margin-top 30px
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
      .drinkImg
        width 40%
        img
          width 92%
</style>
