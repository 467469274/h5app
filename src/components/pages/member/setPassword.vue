<template>
  <div class="register">
    <div class="nav">
      <van-nav-bar
        title="设置密码"
        left-arrow
        @click-left="goBack"
      />
    </div>
    <p class="strip" style="background: #EAEBEC"></p>
    <div class="inputWarp">
      <div class="loginInput">
        <img src="/static/loginlock.png" alt="">
        <input type="text" placeholder="密码" v-model="password">
      </div>
    </div>
    <div class="inputWarp">
      <div class="loginInput">
        <img src="/static/loginlock.png" alt="">
        <input type="text" placeholder="确认密码"v-model="agpassword">
      </div>
    </div>
    <div class="loginBtn" @click="over">完成</div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        password:'',
        agpassword:''
      }
    },
    created(){
      if(!this.$route.params.userId){
        this.$toast('用户信息异常')
        this.$router.push({name:'login'})
      }
    },
    methods: {
      goBack(){
        this.$router.back(-1)
      },
      over(){
        if(this.password!=this.agpassword){
          this.$toast('重复密码错误，请重新输入')
          return
        }
        this.$ajax('/api/setPassword',
          {
            password:this.password,
            userId:this.$route.params.userId
          },
          (res)=>{
            if(res.code == 0){
              this.$toast('设置成功,请登录')
              this.$router.push({name:'login'})
            }else{
              this.$toast(res.msg)
            }
          },
          ()=>{},
          'post')
      }
    }
  }
</script>

<style scoped lang="scss">
  .register {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: #fff;
  }
  .loginInput{
    width: 90%;
    margin: 0 auto;
    border: 1px solid #ccc;
    display: flex;
    align-items: center;
    margin-bottom: .4rem;
    margin-top: .38rem;
    padding: .15rem;
    border-radius: .1rem;
    .clear{
      width: .4rem;
      height: .4rem;
      border-radius: 50%;
      background: url("/static/cuowu@2x.png");
      background-size: 100% 100%;
    }
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
  .codeWarp{
    display:flex;
    width: 94%;
    margin: 0 auto;
    align-items: center;
    border: 1px solid transparent;
    padding: 0;
    img{
      flex:.46rem 0 0;
      height: .35rem;
      margin: 0 .17rem;
    }
    .loginInput{
      flex: 1;
      margin: 0;
    }
    .getCodeBtn{
      flex:.7 0 0;
      background: #F1B23E;
      color: #fff;
      line-height: .96rem;
      text-align: center;
      margin-left: .35rem;
      border-radius: .1rem;
    }
  }
  .message{
    width: 90%;
    margin:0 auto;
    margin-top: -.15rem;
    color: #ccc;
  }

  .loginBtn{
    line-height: .85rem;
    text-align: center;
    color: #fff;
    background:#D3412C;
    border-radius: .1rem;
    font-size: 16px;
    width: 90%;
    margin: 0 auto;
    margin-top: 1.6rem;
  }
  .otherTxt{
    width: 90%;
    margin: 0 auto;
    margin-top:.3rem;
    .van-checkbox{
      display: inline-block;
      margin-right: .3rem;
      vertical-align: -0.08rem
    }
    span{
      color:red;
    }
  }
</style>
