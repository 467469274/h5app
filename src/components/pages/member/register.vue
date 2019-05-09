<template>
  <div class="register">
    <div class="nav">
      <van-nav-bar
        title="注册"
        left-arrow
        @click-left="goBack"
      />
    </div>
    <p class="strip" style="background: #EAEBEC"></p>
    <div class="inputWarp">
      <div class="loginInput">
        <img src="/static/loginsj.png">
        <input type="number" maxlength="11" oninput="if(value.length>11)value=value.slice(0,11)" placeholder="请输入手机号" v-model="userName">
        <span class="clear"></span>
      </div>
      <div class="codeWarp">
        <div class="loginInput">
          <img src="/static/yanzhengma@2x.png">
          <input type="text" placeholder="请输入验证码" v-model="code">
        </div>
        <div class="getCodeBtn" @click="getCode">
          {{getCodeWord}}
        </div>
      </div>
      <div class="loginInput">
        <img src="/static/loginlock.png">
        <input type="text" placeholder="邀请码(可不填写)" v-model="vicode">
      </div>
    </div>
    <p class="message">如不填写验证码,视为平台大众用户</p>
    <div class="loginBtn" @click="next">下一步</div>
    <p class="otherTxt">
      <van-checkbox v-model="checked"></van-checkbox>
      我同意<span>《家家商城永华服务协议》</span></p>
    <colorBox color="#fff"></colorBox>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        checked: true,
        userName: '', // 手机号码
        code: "",
        vicode: '',
        canClick: true,
        getCodeWord: '获取验证码'
      }
    },
    methods: {
      // 返回上一页
      goBack() {
        this.$router.back(-1)
      },
      getCode() {
        if (this.canClick) {
          this.canClick = false;
          if(this.userName == ''){
            this.$toast('请输入手机号')
            return
          }
          this.$ajax('/api/getcode', {mobile: this.userName},
            (res) => {
              if (res.code == 0) {
                this.$toast('获取成功');
                let num = 60
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
      next() {
        if(this.userName == ''){
          this.$toast('请输入手机号')
        }else if(this.code == ''){
          this.$toast('请输入验证码')
        }else{
          this.$ajax('/api/register',
            {
              mobile: this.userName,
              code: this.code,
              vicode: this.vicode,
            },
            (res) => {
              this.$toast('注册成功')
              this.$router.push(
                {
                  name: 'setPassword',
                  params: {
                    userId: res.data.userId
                  }
                }
              )
            }, (msg) => {
              this.$toast.fail(msg);
            }, 'post')
        }
      },
      // 验证手机号吗和密码
      /*checkForm () {
        let username = this.userName
        let password = this.passWord
        let isOk = true // 判断格式是否正确，有一个错误就返回false
        if (!(/^1[34578]\d{9}$/.test(username))) {
          this.userNameErrorMessage = '手机号码格式错误！'
          isOk = false
        } else {
          this.userNameErrorMessage = ''
        }
        if (password.length < 6) {
          this.passWordErrorMessage = '密码不能小于6位！'
          isOk = false
        } else {
          this.passWordErrorMessage = ''
        }
        return isOk
      },*/
    }
  }
</script>

<style scoped lang="scss">
  .loginInput {
    width: 90%;
    margin: 0 auto;
    border: 1px solid #ccc;
    display: flex;
    align-items: center;
    margin-bottom: .4rem;
    margin-top: .38rem;
    padding: .15rem;
    border-radius: .1rem;
    .clear {
      width: .4rem;
      height: .4rem;
      border-radius: 50%;
      background: url("/static/cuowu@2x.png");
      background-size: 100% 100%;
    }
    input {
      flex: 1;
      height: .66rem;
      font-size: 16px;
    }
    img {
      flex: .35rem 0 0;
      height: .5rem;
      margin: 0 .2rem;
      vertical-align: middle;
    }
  }

  .codeWarp {
    display: flex;
    width: 94%;
    margin: 0 auto;
    align-items: center;
    border: 1px solid transparent;
    padding: 0;
    img {
      flex: .46rem 0 0;
      height: .35rem;
      margin: 0 .17rem;
    }
    .loginInput {
      flex: 1;
      margin: 0;
    }
    .getCodeBtn {
      flex: .7 0 0;
      background: #F1B23E;
      color: #fff;
      line-height: .96rem;
      text-align: center;
      margin-left: .35rem;
      border-radius: .1rem;
    }
  }

  .message {
    width: 90%;
    margin: 0 auto;
    margin-top: -.15rem;
    color: #ccc;
  }

  .loginBtn {
    line-height: .85rem;
    text-align: center;
    color: #fff;
    background: #E7B455;
    border-radius: .1rem;
    font-size: 16px;
    width: 90%;
    margin: 0 auto;
    margin-top: 1.6rem;
  }

  .otherTxt {
    width: 90%;
    margin: 0 auto;
    margin-top: .3rem;
    line-height: 2;
    .van-checkbox {
      display: inline-block;
      margin-right: .3rem;
      vertical-align: top;
    }
    span {
      color: red;
    }
  }
</style>
