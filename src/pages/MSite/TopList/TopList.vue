<template>
  <div class="listWrapper" ref="imgUI">
    <ul class="topList">
      <li class="listItem"
          v-for="(name,index) in navlist"
          :key="index"
          @click="currentIndex(index)">
        <a href="javascript: " :class="{active:current === index}">{{name}}</a>
      </li>
    </ul>
  </div>
</template>
<script>
  import BScroll from 'better-scroll'
  export default {
    data () {
      return {
        navlist: ['推荐', '居家', '配件', '服装', '电器', '洗护', '饮食', '餐厨', '婴童', '文体', '特色区'],
        current: 0
      }
    },
    mounted(){
        this.$nextTick(() => {
          this.scroll = new BScroll(this.$refs.imgUI, {
            click: true,
            scrollX: true,
          })
      })
    },
    methods: {
      currentIndex (index) {
        this.current = index
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../../common/stylus/mixins.styl"
  .listWrapper
    width 100%
    height 70px
    .topList
      width 1300px
      height 70px
      float left
      li
        float left
        margin-left 50px
        a
          color #333
          font-size 30px
      .active
        color #b4282d
        padding-bottom 4px
        border-bottom 6px solid #b4282d
        pointer-events auto
      .iconfont
        position absolute
        top 0
        bottom 0
        margin auto
</style>
