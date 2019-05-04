<template>
  <div class="login">
    <div class="top">
      <img src="/static/loginlogo.png">
    </div>
    <div class="loginMain">
      <div class="loginInput">
        <img src="/static/loginsj.png">
        <input type="text" placeholder="请输入手机号" v-model="phone">
      </div>
      <div class="loginInput">
        <img src="/static/loginlock.png">
        <input type="password" placeholder="请输入密码" v-model="password">
      </div>
      <p class="otherBtn"><span class="forgetPassword" @click="forget">忘记密码</span> <span class="remenberPassword" @click="changeRemenber(isRemeber==1?'no':1)"><i :class="{'org':isRemeber==1}"></i>记住密码</span></p>
      <div class="loginBtn" @click="gologin">登录</div>
      <p class="register">如果您还没有账号，请 <span @click="goRegister">注册</span></p>
    </div>
    <colorBox color="#fff"></colorBox>
  </div>
</template>

<script>
export default {
  data () {
    return {
      phone:window.localStorage.phone|| '',
      password:window.localStorage.pas|| '',
      isRemeber:window.localStorage.isRemeber||'0'
    }
  },
  created () {
  },
  methods: {
    forget(){

    },
    goRegister(){
      this.$router.push({name:'register'})
    },
    changeRemenber(type){
      this.isRemeber = type
      window.localStorage.isRemeber = type
    },
    gologin(){
      if(this.phone == '' || this.password == ''){
        this.$toast('请填写好用户信息')
        return
      }
      this.$ajax('/api/login',
          {
            mobile:this.phone,
            password:this.password
          },
          (res)=>{
        if(this.isRemeber == 1){
          window.localStorage.pas = this.password
          window.localStorage.phone = this.phone
        }
            this.$toast('登录成功')
            this.$router.push({name:'shoppingMall'})
            this.setCookie('token',res.token)
          },
          (err)=>{
            this.$toast(err)
          },
        'post'
        )
    }
  }
}
</script>

<style scoped lang="scss">
  .login{
 /*   position:fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 1;*/
    background: #fff;
    .top{
      height:4rem;
      background:url("/static/loginTop.png") no-repeat;
      background-size: 100% 100%;
      position: relative;
      img{
        width:2.2rem;
        position:absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
      }
    }
    .loginMain{
      width: 80%;
      margin: 0 auto;
      padding-top: .9rem;
      .loginInput{
        border-bottom: 1px solid rgb(224,225,226);
        display: flex;
        width: 100%;
        align-items: center;
        margin-bottom: .4rem;
        padding-bottom: .1rem;
        input{
          flex: 1;
          height: .66rem;
          font-size: 16px;
        }
        img{
          flex: .35rem 0 0;
          height: .5rem;
          margin: 0 .2rem;
          vertical-align: middle;
        }
      }
      .otherBtn{
        line-height: 2.5;
        margin-top: -.1rem;
        .forgetPassword{
          color: rgb(248,73,33);
        }
      }
      .remenberPassword{
        float: right;
        color:#9e9e9e;
        i{
          width: .2rem;
          height: .2rem;
          border: 1px solid #ccc;
          display: inline-block;
          vertical-align: middle;
          margin-right: .2rem;
        }
      }
      .loginBtn{
        line-height: .85rem;
        text-align: center;
        color: #fff;
        background: rgb(248,73,33);
        border-radius: .1rem;
        margin-top: .8rem;
        font-size: 16px;
      }
      .register{
        line-height: 2;
        margin-top:.4rem;
        text-align: center;
        span{
          color: rgb(248,73,33);
        }
      }
    }
  }
  .org{
    background: rgb(248,73,33);
  }
</style>
