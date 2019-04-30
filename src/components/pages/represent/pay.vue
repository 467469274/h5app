<template>
  <div class="sexWarp">
    <van-nav-bar
      title="支付"
      left-arrow
      @click-left="$router.back(-1)"
    />
    <div class="warp">
       <van-cell>
        <div class="cell"><span>支付金额</span><i>¥1.00</i></div>
      </van-cell>
       <van-cell>
        <div class="cellPay"><i>余额支付</i><b :class="{'selectPay':this.balanceTrue}" @click="balance"></b></div>
      </van-cell>
       <van-cell>
            <div class="cellPay">
                <div>
                    <p class="payTitle">微信支付</p>
                    <p>推荐安装微信5.0及以上版本的用户使用</p>
                </div>
                <span :class="{'selectPay':payNumber == 1}"  @click="payType(1)"></span>
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
      <p class="consent"><i @click="consent" :class="{'select':consentTrue}"></i>我同意<span>《家家商城永华服务协议》</span></p>
    </div>

    <div class="sure">立即支付</div>

  </div>
</template>

<script>
  export default {
    name: "sex",
    data(){
      return{
        balanceTrue:false,
       consentTrue:false
       ,payNumber:3
      }
    },
    methods:{
        //余额支付
        balance () {
            this.balanceTrue = !this.balanceTrue;
        },
        //是否同意
        consent () {
            this.consentTrue = !this.consentTrue;
        },
        //选择支付方式
        payType (type) {
            this.payNumber = type
        }
    }
  }
</script>

<style scoped lang="scss">
    $colorG: rgba(0, 0, 0, 0.6);

  .sure{
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
  .warp{
      padding:0.15rem 0 0 0;
    .van-cell{
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
      font-size:16px;
      font-style:normal;
      color:#FB3D25;
    }
  }
  .cellPay{
      i{
          font-style:normal;
      }
    div {
    float:left;
      font-size: 12px;
      line-height:0.5rem;
      text-indent:0.8rem;
      background:url('../../../assets/images/weixinzhifu2x.png') no-repeat left center;
      background-size:0.45rem 0.4rem;
      color: $colorG;
      .payTitle{
          font-size:15px;
      }
    }
    span,b{
         float:right;
         margin:0.3rem 0 0 0;
        width:0.4rem;
        height:0.4rem;
         border-radius:50%;
          background:url('../../../assets/images/circle.png') no-repeat left center;
          background-size:100% 100%;
         box-sizing:border-box;
    }
    .zhifu{
         background:url('../../../assets/images/zhifubao2x.png') no-repeat left center!important;
      background-size:cover;
    }


  }


   .selectPay{
        background:url('../../../assets/images/duihao2x.png') no-repeat center center!important;
        background-size:100% 100%;
    }
    .consent{
        padding-left:0.3rem;
        font-size:12px;
        margin:0.15rem 0 0 0;
        color:#707070;
        i{
            margin:0 0.1rem 0 0;
            float:left;
            display:block;
             width:0.3rem;
        height:0.3rem;
         border-radius:50%;
         border:1px solid #C4C4C4;
         box-sizing:border-box;
        }
        span{
            color:#FB502D;
        }
    }
    .select{
        background:url('../../../assets/images/1555174796798.jpg') no-repeat center center;
        background-size:100% 100%;
    }
</style>
