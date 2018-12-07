<template>
  <div class="quick">
    <div class="left">
      <div class="yan">严选限时购</div>
      <span>{{hour}}</span>: <span>{{minute}}</span>: <span>{{second}}</span>
      <p>下一场 22：00开始</p>
    </div>
    <div class="right">
      <img src="./images/xiaolongxia.png" alt="">
    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return{
        hour:1,
        minute:59,
        second:59
      }
    },
    mounted(){
      this.timer = setInterval(()=>{
        this.second = this.second-1
        if(this.second ===0){
          this.minute = this.minute-1
          this.second=59
        }
        if(this.minute===0){
          this.hour = this.hour-1
          this.minute=59
        }
      },1000)
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../../common/stylus/mixins.styl"
  .quick
    padding 20px
    width 100%
    height 300px
    .left
      width 40%
      height 80%
      margin-top 50px
      margin-left 50px
      color #494949
      float left
      .yan
        letter-spacing 15px
        font-size 40px
        margin-bottom 40px
        font-weight bold
      span
        color #b0b0b0
        background #444
        padding 10px
      p
        font-size 20px
        margin-top 40px
    .right
      float left
      margin-left 50px
      img
        width 350px
        height 350px
</style>
