<template>
  <div class="sexWarp">
    <van-nav-bar
      :title="type?'设置支付密码':'找回密码'"
      left-arrow
      @click-left="goSomePage('back')"
    />
    <div class="warp">
      <div class="bottom">
        <input type="text" v-model="phone" placeholder="请输入手机号" />
      </div>
      <div class="bottom" style="margin:.2rem 0 0 0">
        <input type="text" v-model="code" placeholder="请输入验证码" />
        <span class="btn" @click="getCode">{{getCodeWord}}</span>
      </div>
    </div>
    <div class="sure" @click="next">下一步</div>
    <div v-if="showSet" class="register">
      <div class="nav">
        <van-nav-bar
          :title="type?'设置支付密码':'找回密码'"
          left-arrow
          @click-left="goBack"
        />
      </div>
      <p class="strip" style="background: #EAEBEC"></p>
      <div class="inputWarp">
        <div class="loginInput">
          <img src="/static/loginlock.png" alt="">
          <input type="password" placeholder="密码" v-model="password">
        </div>
      </div>
      <div class="inputWarp">
        <div class="loginInput">
          <img src="/static/loginlock.png" alt="">
          <input type="password" placeholder="确认密码"v-model="agpassword">
        </div>
      </div>
      <div class="loginBtn" @click="over">确定</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "forget",
    data() {
      return {
        phone:'',
        canClick: true,
        getCodeWord: '获取验证码',
        code:'',
        serviceCode:'',
        showSet:false,
        password:'',
        agpassword:'',
        userId:'',
        type:this.$route.query.type
      }
    },
    created(){
    },
    methods: {
      goBack(){
        this.$router.push({name:'payType'})
      },
      over(){
        if(this.password!=this.agpassword){
          this.$toast('重复密码错误，请重新输入')
          return
        }
        this.$ajax('/api/setPassword', {
            password:this.password,
            userId:this.userId
          },
          (res)=>{
            if(res.code == 0){
              this.$toast('设置成功')
              this.$router.push({name:'member'})
            }else{
              this.$toast(res.msg)
            }
          },
          (err)=>{
            this.$toast(err)
          },
          'post')
      },
      next(){
        if(this.phone == ''){
          this.$toast('请填写手机号')
        }else if(this.code == ''){
          this.$toast('验证码不能为空')
        }else if(this.serviceCode != this.code){
          this.$toast('请检查验证码')
        }else if(this.serviceCode == this.code){
          this.showSet = true
         /* this.$router.push(
            {
              name: 'setPassword',
              params: {
                userId: this.userId
              }
            }
          )*/
        }
      },
      getCode() {
        if (this.canClick) {
          this.canClick = false;
          this.$ajax('/api/forgetcode', {mobile:this.phone},
            (res) => {
              if (res.code == 0) {
                this.$toast('获取成功');
                console.log(res.data.code.code)
                let num = 60
                this.serviceCode = res.data.code.code
                this.userId = res.data.userId
                this.intervals = setInterval(() => {
                  if (num == -1) {
                    clearInterval(this.intervals)
                    this.canClick = true;
                    this.getCodeWord = '获取验证码'
                  } else {
                    this.getCodeWord = num
                    num--
                  }
                }, 1000)
              }
            }, (err) => {
              this.$toast(err)
              this.canClick = true;
            }, 'post')
        }
      },
      goSomePage(type) {
        if (type == 'back') {
          this.$router.back(-1)
        } else {
          this.$router.push({name: type})
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  .warp{
    padding:.3rem;
    background: #fff;
    margin-top: .2rem;
  }
  .bottom{
    display: flex;
    input{
      flex:1;
      height: .88rem;
      border: 1px solid #ccc;
      margin-right: .3rem;
      border-radius: .1rem;
      padding: 0 .3rem;
    }
    .btn{
      flex:2.6rem 0 0;
      height: .88rem;
      line-height: .88rem;
      text-align: center;
      background: #F1B23E;
      color: #fff;
      border-radius: .1rem;
    }
  }
  .sure{
    background: #F1B23E;
    color: #fff;
    text-align: center;
    line-height: 1rem;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    font-size: 16px;
  }
  .register {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: #fff;
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
  }
</style>
