<template>
  <div class="wrapper" ref="wrapper">
    <ul class="content">
      <li class="contentItem" v-for="(item,index) in data" :key="index">
        <img v-lazy="item.picUrl" alt="">
        <p>{{item.title}}</p>
      </li>
    </ul>
  </div>
</template>
<script>
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  export default {
    props:{
      data:Array
    },
    mounted() {
      this.$store.dispatch('getTopicData',()=>{
        this.$nextTick(() => {
          this.scroll = new BScroll(this.$refs.wrapper, {
            click: true,
            scrollX: true,
          })
        })
      })
    },
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../../common/stylus/mixins.styl"
  .wrapper
    width 100%
    height 300px
    overflow hidden
    padding 30px
    box-sizing border-box
    .content
      width 1600px
      height 300px
      display flex
      align-items space-around
      justify-content center
      .contentItem
        text-align center
        display flex
        align-items center
        justify-content center
        flex-wrap nowrap
        flex-direction column
        width 340px
        margin 15px
        height 200px
        img
          width 100%
          height 100%
        p
          color #353535
          font-size 22px
          margin-top 20px
</style>
