<template>
  <div class="contentRight">
    <!--<img :src="NavInfo.url" alt="">-->
    <ul>
      <li class="item" v-for="(item,index) in NavInfo" :key="index">
        <img :src="item.list.wapBannerUrl" alt="">
        <!--<span>{{item.name}}</span>-->
      </li>
    </ul>
  </div>
</template>
<script>
  import {mapGetters,mapState} from 'vuex'
  import BScroll from 'better-scroll'
  export default {
     mounted(){
//       this.$store.dispatch('getNavDetail',() =>
//       {
//         this.$nextTick(() => {
//           this._initScroll()
//         })
//       })
     },
    methods: {
      _initScroll () {
        new BScroll (this.$refs.scroll, {
          click: true,
          startY: 0
        })
      }
    },
    computed:{
      ...mapGetters(['NavInfo'])
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../../common/stylus/mixins.styl"
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
