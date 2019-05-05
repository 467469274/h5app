<template>
  <div class="sexWarp">
    <van-nav-bar
      title="提现"
      left-arrow
      @click-left="$router.back(-1)"
    />
    <div class="warp">
       <van-cell>
         <div class="cell"><span>提现账户</span><input placeholder="请输入提现账户" v-model="user" type="text" class="input"/></div>
         <div class="cell"><span>金额（元）</span><input placeholder="请输入提现金额" v-model="price"  type="number" class="input"/></div>
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
                <span :class="{'selectPay':payNumber == 2}"  @click="payType(2)"></span>
            </div>
      </van-cell>

    </div>

    <div class="sure" @click="save">下一步</div>
    <colorBox :color="'#F5F6F7'"></colorBox>
  </div>
</template>

<script>
  export default {
    name: "sex",
    data(){
      return{
        price:'',
        user:'',
        payNumber:1
      }
    },
    methods:{
        payType (type) {
          this.payNumber = type
        },
      save(){
          if(this.user == ''){
            this.$toast('请填写提现账户')
          }else if(this.price == ''){
            this.$toast('请填写提现金额')
          }else if(this.price > this.$route.money){
            this.$toast('提现金额超出账户余额')
          }else{
            this.$ajax('/api/mine/withdraw',{
                numberno:this.user,
                money:this.price,
                type:this.payNumber
              },
              (res)=>{
                this.$toast('提交成功')
                this.$router.push({name:'wallet'})
            },(err)=>{
                this.$toast(err)
            },'PUT')
          }
      }
    }
  }
</script>

<style scoped lang="scss">
    $colorG: rgba(0, 0, 0, 0.6);

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
    border-bottom: 1px solid #ccc;
    &:last-child{
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
  .cellPay{

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
    span{
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
      background-size:0.45rem 0.4rem!important;
    }
    .selectPay{
        background:url('../../../assets/images/duihao2x.png') no-repeat center center!important;
        background-size:cover;
    }

  }
  .checkbox{
    .van-checkbox__icon{
      background: pink!important;
    }
  }
</style>
