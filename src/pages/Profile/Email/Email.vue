<template>
  <div class="emailContent">
    <div class="emailNumber">
      <input class="number" type="tel" maxlength="11" placeholder="邮箱号" v-model="email">
    </div>
    <div class="pwdNumber">
      <input class="pwd" :type="isShowPwd? 'password':'text'" placeholder="密码" maxlength="15" v-model="pwdNumber">
      <div @click="isShowPwd = !isShowPwd" class="switch_button" :class="{off:isShowPwd}">
        <div class="switch_circle" :class="{right:isShowPwd}"></div>
        <span class="switch_text">{{isShowPwd ? '':'abc'}}</span>
      </div>
    </div>
    <span class="hint" v-if="hint">{{hint}}</span>
    <div class="logina">
      <a href="javascript:;" @click="myLogin">
        <span>登陆</span>
      </a>
    </div>
    <div class="loginb">
      <a href="javascript:;" @click="$router.replace('/profile')">
        <span>其他方式登陆</span>
      </a>
    </div>
  </div>
</template>
<script>
  import {MessageBox,Toast} from 'mint-ui'

  export default {
    data(){
      return {
        email: '',
        pwdNumber:'',
        hint:'',
        isShowPwd: true,  //默认显示黑色
      }
    },
    methods:{
      async myLogin(){
        const {email,pwdNumber} = this
        if(!email){
          this.hint = '邮箱不能为空'
          MessageBox('提示', '邮箱不能为空')
        }else if(!(/^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/.test(email))){
          this.hint = '邮箱格式错了'
          MessageBox('提示', '邮箱格式错了')
        }else if(!pwdNumber){
          this.hint = '密码不能为空'
          MessageBox('提示', '密码不能为空')
        }else if(!(/^[\x01-\x7f]*$/).test(pwdNumber)){
          this.hint = '密码错了'
          MessageBox('提示', '密码错了')
        }else {
          this.hint = '';
          this.$router.replace('/msite')
        }
      },
      async sendCode(){
        if(this.phone === ''){
          return;
        }
        let num = 60;
        this.onlyCount = 60;
        this.isShow = true;
        this.timer = setInterval(()=>{
          num--
          if(num===0){
            this.isShow = false;
            clearInterval(this.timer)
          }
          this.onlyCount = num
        },1000)

        //短信验证
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../../common/stylus/mixins.styl"
  .emailContent
    width 100%
    height 600px
    display flex
    align-items center
    justify-content center
    flex-direction column
    .emailNumber
      .number
        width 600px
        height 90px
        border 1px solid gray
        border-radius 6px
        padding-left 30px
        box-sizing border-box
        font-size 28px
    .pwdNumber
      position relative
      .pwd
        width 600px
        height 90px
        margin 20px 0
        border 1px solid gray
        border-radius 6px
        padding-left 30px
        box-sizing border-box
        font-size 28px
      .switch_button
        font-size  12px
        border  1px solid darkred
        border-radius  15px
        transition  background-color .3s
        padding  0 6px
        width  65px
        height  30px
        line-height  16px
        position  absolute
        top  50%
        right  30px
        transform  translateY(-50%)
        background  #DCDCDC
        .switch_circle
          position  absolute
          top  -2px
          right  -2px
          width  35px
          height  35px
          background  darkred
          border-radius  50%
          transition  transform .5s
          &.right
            transform  translateX(-45px)
      .switch_text
        font-size  24px
        color  #fff
        float  left
        line-height  30px
    .hint
      margin-left 22px
      display block
      width 80%
      height 24px
      text-align left
      font-size 24px
      color red
    .logina
      text-align center
      width 580px
      height 90px
      background-color #b4282d
      margin-bottom 20px
      border-radius 6px
      a
        color #fff
        height 90px
        font-size 28px
        line-height 90px
    .loginb
      text-align center
      width 580px
      height 90px
      border 1px solid #b4282d
      border-radius 6px
      a
        font-size 28px
        line-height 90px
        color #b4282d
</style>
