<template>
  <div class="sexWarp">
    <van-nav-bar
      title="充值"
      left-arrow
      @click-left="$router.back(-1)"
    />
    <div class="warp">
      <van-cell>
        <div class="cell" style="justify-content: space-between;"><span>金额（元）</span><input placeholder="请输入充值金额" type="number" disabled v-model="this.$route.params.money" class="input"/></div>
      </van-cell>
      <van-cell>
        <div class="cellPay" ><i>余额支付</i> <van-radio name="1" class="radio"checked-color="red" v-model="radio"/></div>
      </van-cell>
      <van-cell>
        <div class="cellPay">
          <div class="wechat">
            <p class="payTitle">微信支付</p>
            <p>推荐安装微信5.0及以上版本的用户使用</p>
          </div>
          <van-radio name="2" class="radio" checked-color="red" v-model="radio"/>
        </div>
      </van-cell>
      <van-cell>
        <div class="cellPay">
          <div class="zhifu">
            <p class="payTitle">支付宝支付</p>
            <p>推荐支付宝账号的用户使用</p>
          </div>
          <van-radio name="3"class="radio" checked-color="red" v-model="radio"/>
        </div>
      </van-cell>
      <p class="consent"><i @click="consent" :class="{'select':consentTrue}"></i>我同意<span>《家家商城永华服务协议》</span></p>
    </div>
    <colorBox :color="'#F5F6F7'"></colorBox>
    <div class="sure" @click="sub">下一步</div>
  </div>
</template>

<script>
  export default {
    name: "sex",
    data() {
      return {
        payNumber: true,
        radio:'1',
        consentTrue:true
      }
    },
    created(){
      if(!this.$route.params.money || !this.$route.params.ordernum){
        this.$toast('订单信息有误，请重新尝试')
//        this.$router.push({name:'buyOrder'})
      }
    },
    methods: {
      consent(){
        this.consentTrue = !this.consentTrue
      },
      sub(){
        if(this.$store.state.f.isWechat){
          this.$toast('请在外部浏览器打开')
          return
        }else if(this.radio == '1'){
          this.$ajax('/api/mine/walletgold', {
            money: this.$route.params.money,
            ordernum:this.$route.params.ordernum,
            backurl:window.location.origin+'/#/paySuccess?from=wallet'
          }, (res) => {
            this.$router.push({name:'paySuccess',query:{
              from:'wallet'
            }})
          }, (err) => {
            this.$toast(err)
            this.$router.push({name:'payFail',query:{
              from:'wallet'
            }})
          }, 'post')
        }
        else if(this.radio == '2'){
          this.$ajax('/api/mine/wxgold', {
            money: this.$route.params.money,
            ordernum:this.$route.params.ordernum,
            backurl:window.location.origin+'/#/paySuccess?from=wallet'
          }, (res) => {
            location.href = res.data.mweb_url
          }, (err) => {
            this.$toast(err)
          }, 'post')
        }
        else if(this.radio == '3'){
          this.$ajax('/api/mine/zfbgold', {
            money:this.$route.params.money,
            ordernum:this.$route.params.ordernum,
            backurl:window.location.origin+'/#/paySuccess?from=wallet'
          }, (res) => {
            if (document.forms[0]) {
              document.getElementsByTagName('body')[0].removeChild(document.getElementById('zfb'))
            }
            const div = document.createElement('div')
            div.innerHTML = res.data//此处form就是后台返回接收到的数据
            document.body.appendChild(div)
            document.forms[0].submit()
          }, (err) => {
            this.$toast(err)
          }, 'post')
        }
      }
    }
  }
</script><style scoped lang="scss">
  $colorG: rgba(0, 0, 0, 0.6);
  .input{
    text-align:right;
    float: right;
  }
  .sure {
    background: #25AE42;
    color: #fff;
    text-align: center;
    line-height: 1rem;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    font-size: 16px;
  }

  .warp {
    padding: 0.15rem 0 0 0;

    .van-cell {
      border-bottom: 1px solid #ccc;
      line-height: 1rem;
      box-sizing: border-box;
    }
  }

  .cell {
    display: flex;

    div {
      flex: 1.5rem 0 0;
      font-size: 15px;
      color: $colorG;
    }

    i {
      flex: 1;
      text-align: right;
      font-size: 16px;
      font-style: normal;
      color: #FB3D25;
    }
  }

  .cellPay {
    i {
      font-style: normal;
    }

    .zhifu,.wechat {
      float: left;
      font-size: 12px;
      line-height: 0.5rem;
      text-indent: 0.8rem;
      background: url('../../../assets/images/weixinzhifu2x.png') no-repeat left center;
      background-size: 0.45rem 0.4rem;
      color: $colorG;

      .payTitle {
        font-size: 15px;
      }
    }

    span, b {
      float: right;
      margin: 0.3rem 0 0 0;
      width: 0.4rem;
      height: 0.4rem;
      border-radius: 50%;
      background: url('../../../assets/images/circle.png') no-repeat left center;
      background-size: 100% 100%;
      box-sizing: border-box;
    }

    .zhifu {
      background: url('../../../assets/images/zhifubao2x.png') no-repeat left center !important;
      background-size: cover;
    }


  }


  .selectPay {
    background: url('../../../assets/images/duihao2x.png') no-repeat center center !important;
    background-size: 100% 100%;
  }

  .consent {
    padding-left: 0.3rem;
    font-size: 12px;
    margin: 0.15rem 0 0 0;
    color: #707070;

    i {
      margin: 0 0.1rem 0 0;
      float: left;
      display: block;
      width: 0.3rem;
      height: 0.3rem;
      border-radius: 50%;
      border: 1px solid #C4C4C4;
      box-sizing: border-box;
    }

    span {
      color: #FB502D;
    }
  }
  .radio{
    float: right;
  }
  .select {
    background: url('../../../assets/images/1555174796798.jpg') no-repeat center center;
    background-size: 100% 100%;
  }
</style>
