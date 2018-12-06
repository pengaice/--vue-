<template>
  <div class="phoneContent">
    <div class="phoneNumber">
      <input class="number" type="tel" maxlength="11" placeholder="手机号" v-model="phone">
      <button class="yanzheng" @click="sendCode" :flag="isShow" >{{isShow ? `${onlyCount}秒后重试`:'获取验证码'}}</button>
    </div>
    <input class="pwd" type="text" placeholder="验证码" maxlength="6" v-model="number">
    <span class="hint" v-show="hint">{{hint}}</span>
    <div class="login_hint">
      温馨提示：未注册网易严选帐号的手机号，登录时将自动注册，且代表已同意
      <a href="javascript:;">《用户服务协议》</a>
    </div>
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
  import {reqSendCode} from '../../../api'
  import {MessageBox,Toast} from 'mint-ui'

   export default {
     data(){
       return {
         phone: '',
         number:'',
         hint:'',
         onlyCount: 60,
         isShow: false,  //默认显示黑色
       }
     },
     methods:{
       async myLogin(){
         const {phone,number} = this
         if(!phone){
           this.hint = '手机号不能为空'
           MessageBox('提示', '手机号不能为空')
         }else if(!(/^1[34578]\d{9}$/.test(phone))){
           this.hint = '手机号错了'
           MessageBox('提示', '手机号错了')
         }else if(!number){
           this.hint = '验证码不能为空'
           MessageBox('提示', '验证码不能为空')
         }else if(!(/^\d{6}$/).test(number)){
           this.hint = '验证码错了'
           MessageBox('提示', '验证码错了')
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
  .phoneContent
    width 100%
    height 600px
    display flex
    align-items center
    justify-content center
    flex-direction column
    .phoneNumber
      position relative
      .number
        width 600px
        height 90px
        border 1px solid gray
        border-radius 6px
        padding-left 30px
        box-sizing border-box
        font-size 28px
      button
        position absolute
        right 30px
        top 30px
        font-size: 24px
        border-radius: 8px
        color #333
        background none
        outline none
        border none
    .pwd
      width 600px
      height 90px
      margin 20px 0
      border 1px solid gray
      border-radius 6px
      padding-left 30px
      box-sizing border-box
      font-size 28px
    .login_hint
     margin-left 22px
     margin-bottom 20px
     margin-top 20px
     width 80%
     height 60px
     color #999
     font-size 24px
     a
       color:#b4282d
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
