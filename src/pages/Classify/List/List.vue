<template>
  <div class="list">
    <ul class="contentLeft">
      <li class="item" v-for="(item,index) in NavList" :key="index">
        <a href="javascript:;">{{item}}</a>
      </li>
    </ul>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex'
  import BScroll from 'better-scroll'
  export default {
    mounted(){
//      this.$store.dispatch('getNavList',()=>{
//        this.$nextTick(()=>{
//          this.initScroll()
//        })
//      })
    },
    computed: {
      ...mapGetters(['NavList'])
    },
    methods:{
      initScroll(){
        new BScroll(this.$refs.scroll,{
          click:true,
          startY:0
        })
      },
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../../common/stylus/mixins.styl"
.list
  position fixed
  left 0
  top 70px
  border-right  1px solid #ccc
  border-top  1px solid #ccc
  float left
  width 20%
  .contentLeft
    font-size 26px
    li
      margin 50px 10px
</style>
