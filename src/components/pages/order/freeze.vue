<template>
  <div class="sexWarp">
    <van-nav-bar
      title="冻结"
      left-arrow
      @click-left="$router.back(-1)"
    />
    <div class="warp">

       <van-cell>
        <div class="cell"><span>冻结金额</span><input placeholder="请输入冻结金额" type="number" class="input"/></div>
      </van-cell>
      <p class="message firstMargin">冻结金额：</p>
      <p class="message">遇到以下情形，您可以申请<span>冻结账户金额</span>冻结后吗您的金额不能进行任何交易。</p>
      <p class="message">1.别人登录你的账号使用金额</p>
      <p class="message">2.你的金额出现异常变化</p>
    </div>
    <div class="sure">冻结</div>
  </div>
</template>

<script>
  export default {
    name: "sex",
    data(){
      return{
        radio:1,
        checked:true
      }
    },
    methods:{

    }
  }
</script>

<style scoped lang="scss">
    $colorG: rgba(0, 0, 0, 0.6);
  .message{
    line-height: 0.5rem;
    padding-left: .2rem;
    font-size: 13px;
    color:rgba(0,0,0,0.4);
  }
  .firstMargin{
    margin:0.15rem 0 0 0;
  }
  .van-cell{
    line-height: 1rem;
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
  .warp{
      padding:0.15rem 0 0 0;
    .hasImg .van-cell__value{
      flex: 1rem 0 0;
      .van-uploader{
        height: 1rem;
      }
    }
    .van-cell{
      border-bottom: 1px solid #ccc;
      line-height: 1rem;
      box-sizing: border-box;
      i{
        line-height: 1rem;
      }
      img{
        width:1rem;
        height:1rem;
        text-align:right;
      }
    }
  }
  .cell {
    display: flex;
    span {
      flex: 1.5rem 0 0;
      font-size: 15px;
      color: $colorG;
    }
    input {
      flex: 1;
      text-align: right;
    }
  }
  .checkbox{
    .van-checkbox__icon{
      background: pink!important;
    }
  }
</style>
