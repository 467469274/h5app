<template>
  <div class="sexWarp">
    <van-nav-bar
      title="购买金券"
      left-arrow
      @click-left="$router.back(-1)"
    />
    <div class="warp">
      <van-cell>
        <div class="cell"><span>金额（元）</span><input placeholder="请输入购买金额" @keypress="keypress" type="number"
                                                   v-model="number" class="input"/></div>
      </van-cell>
      <van-cell>
        <div class="cellPay">
          <div>
            <p class="payTitle">微信支付</p>
            <p>推荐安装微信5.0及以上版本的用户使用</p>
          </div>
          <span :class="{'selectPay':payNumber == 1}" @click="payType(1)"></span>
        </div>
      </van-cell>
      <van-cell>
        <div class="cellPay">
          <div class="zhifu">
            <p class="payTitle">支付宝支付</p>
            <p>推荐支付宝账号的用户使用</p>
          </div>
          <span :class="{'selectPay':payNumber == 2}" @click="payType(2)"></span>
        </div>
      </van-cell>
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
        number: '',
        payNumber: true
      }
    },
    created() {
    },
    methods: {
      payType(type) {
        this.payNumber = type
      },
      sub() {
        if (this.number == '' || this.number <= 0) {
          this.$toast('请填写有效金额')
        } else if(this.$store.state.f.isWechat){
          this.$toast('请使用外部浏览器打开')
        }else if (this.payNumber == 2) {
          this.$ajax('/api/mine/zfbwallet', {
            money: this.number,
            backurl: window.location.origin + '/#/paySuccess?from=wallet'
          }, (res) => {
            if (document.forms[0]) {
              document.getElementsByTagName('body')[0].removeChild(document.getElementById('zfb'))
            }
            const div = document.createElement('div')
            div.innerHTML = res.data//此处form就是后台返回接收到的数据
            div.id = 'zfb'//此处form就是后台返回接收到的数据
            document.body.appendChild(div)
            document.forms[0].submit();
          }, (err) => {
            this.$toast(err)
          }, 'post')
        } else if (this.payNumber == 1) {
          this.$ajax('/api/mine/wxwallet', {
            money: this.number
          }, (res) => {
            location.href = res.data.mweb_url
          }, (err) => {
            this.$toast(err)
          }, 'post')
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  $colorG: rgba(0, 0, 0, 0.6);

  .van-cell {
    line-height: 1rem;
  }

  .sure {
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

  .warp {
    padding: 0.15rem 0 0 0;
    .hasImg .van-cell__value {
      flex: 1rem 0 0;
      .van-uploader {
        height: 1rem;
      }
    }
    .van-cell {
      border-bottom: 1px solid #ccc;
      line-height: 1rem;
      box-sizing: border-box;
      i {
        line-height: 1rem;
      }
      img {
        width: 1rem;
        height: 1rem;
        text-align: right;
      }
    }
  }

  .cell {
    display: flex;
    border-bottom: 1px solid #ccc;
    &:last-child {
      border-bottom: none;
    }
    div {
      flex: 1.5rem 0 0;
      font-size: 15px;
      color: $colorG;
    }
    input {
      flex: 1;
      text-align: right;
    }
  }

  .cellPay {

    div {
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
    span {
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
      background-size: 0.45rem 0.4rem !important;
    }
    .selectPay {
      background: url('../../../assets/images/duihao2x.png') no-repeat center center !important;
      background-size: cover;
    }

  }

  .checkbox {
    .van-checkbox__icon {
      background: pink !important;
    }
  }
</style>
