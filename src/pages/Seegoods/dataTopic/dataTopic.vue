<template>
  <div class="moreItem">
    <div class="moreItemImg" v-for="item in data" :key="item.topicId">
      <img v-lazy="item.itemPicUrl" alt="">
      <div class="moreItemTitle">{{item.title}}</div>
    </div>
  </div>
</template>
<script>
  export default {
    props:{
      data: Array
    },
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../../common/stylus/mixins.styl"
  .moreItem
    width 100%
    height 5140px
    padding 20px
    box-sizing border-box
    .moreItemImg
      width 100%
      background #fff
      box-sizing border-box
      padding 20px
      img
        width 100%
        height 100%
      .moreItemTitle
        font-size 32px
        margin-top 40px
        margin-bottom 50px
</style>
