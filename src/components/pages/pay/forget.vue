<template>
  <div class="sexWarp">
    <van-nav-bar
      title="支付密码设置"
      left-arrow
      @click-left="goSomePage('back')"
    />
    <div class="warp">
      <div class="bottom">
        <input type="text" placeholder="请输入手机号" />
        <span class="btn">获取验证码</span>
      </div>
      <div class="bottom">
        <input type="text" style="margin:.2rem 0 0 0" placeholder="请输入手机号" />
      </div>
    </div>
    <div class="sure" @click="goSomePage()">下一步</div>
  </div>
</template>

<script>
  export default {
    name: "forget",
    data() {
      return {
        radio: 1
      }
    },
    methods: {
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
      background: rgb(216,218,219);
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

</style>
