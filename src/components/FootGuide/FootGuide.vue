<template>
  <footer class="footer_guide border-1px">
    <a href="javascript:;" class="guide_item" :class="{on:$route.path === '/msite'}" @click="goto('/msite')">
        <span class="item_icon">
          <i class="iconfont icon-shouye1"></i>
        </span>
      <span>首页</span>
    </a>
    <a href="javascript:;" class="guide_item" :class="{on:$route.path === '/classify'}" @click="goto('/classify')">
        <span class="item_icon">
          <i class="iconfont icon-iconyihuifu-"></i>
        </span>
      <span>分类</span>
    </a>
    <a href="javascript:;" class="guide_item" :class="{on:$route.path === '/seegoods'}" @click="goto('/seegoods')">
        <span class="item_icon">
          <i class="iconfont icon-wupin"></i>
        </span>
      <span>识物</span>
    </a>
    <a href="javascript:;" class="guide_item" :class="{on:$route.path === '/shopcart'}" @click="goto('/shopcart')">
        <span class="item_icon">
          <i class="iconfont icon-shopshoppingco"></i>
        </span>
      <span>购物车</span>
    </a>
    <a href="javascript:;" class="guide_item" :class="{on:$route.path === '/profile'}" @click="goto('/profile')">
        <span class="item_icon">
          <i class="iconfont icon-gerenzhongxin"></i>
        </span>
      <span>个人</span>
    </a>
  </footer>
</template>
<script>
  export default{
    methods:{
      goto(path){
        this.$router.replace(path)
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .footer_guide  //footer
    top-border-1px(#e4e4e4)
    position fixed
    z-index 10
    left 0
    right 0
    bottom 0
    background-color #fff
    height 85px
    display flex
    border-top: 1px solid #ccc;
    .guide_item
      display flex
      flex 1
      text-align center
      flex-direction column
      align-items center
      margin 5px
      color #999999
      &.on
        color #02a774
      span
        font-size 28px
        margin-top 2px
        margin-bottom 2px
        .iconfont
          font-size 40px

</style>
