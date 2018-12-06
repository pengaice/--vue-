<template>
  <div class="goods">
    <div class="center">
      <div class="ren">人气推荐.好物精选</div>
      <div class="all">查看全部 ></div>
    </div>
  </div>
</template>
<script>

</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../../common/stylus/mixins.styl"
  .goods
    width 100%
    height 300px
    background #fef7e3
    display flex
    flex-direction column
    justify-content center
    text-align center
    .center
      margin auto
      display flex
      flex-direction column
      justify-content center
      text-align center
      width 340px
      height: 200px
      .ren
        font-size 40px
        color #b4a078
        margin-bottom 40px
      .all
        border 1px solid #fef7e3
        background #f4e9cb
        margin-left  80px
        margin-right 80px
        color #b4a078

</style>
