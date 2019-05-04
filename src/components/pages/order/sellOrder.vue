<template>
  <div class="sexWarp">
    <van-nav-bar
      title="卖出"
      right-text="订单"
      left-arrow
      @click-right="goSomepage('saleOrder')"
    />
    <div class="warp">
      <van-cell>
        <div class="cell"><span>挂卖数量</span><input v-model="phone" placeholder="请输入数量" type="number" class="input"/></div>
      </van-cell>
      <van-cell>
        <div class="cell"><span>卖出价格</span><input v-model="gold" placeholder="请输入价格" type="number" class="input"/></div>
      </van-cell>
      <van-cell>
        <div class="cell"><span>支付密码</span><input placeholder="请填写支付密码" v-model="password" type="password" class="input"/></div>
      </van-cell>
      <van-cell>
        <p class="codeText">转出需要短信确认，请验证手机号{{$route.query.mobile}},按提示操作</p>
        <div class="bottom">
          <input type="text" v-model="code" placeholder="请输入验证码" />
          <span class="btn" @click="getCode">{{getCodeWord}}</span>
        </div>
      </van-cell>
    </div>
    <div class="sureConatiner">
      <div class="sure" @click="save">创建订单</div>
    </div>
    <colorBox :color="'#F5F6F7'"></colorBox>
  </div>
</template>

<script>
  import gainCode from '../../common/gainCode.vue'
  export default {
    name: "sex",
    data(){
      return{
        phone:'',
        gold:'',
        remarks:'',
        canClick: true,
        getCodeWord: '获取验证码',
        code:'',
        serviceCode:'',
        password:''
      }
    },
    created(){
//      PUT

      /*  this.$ajax('/api/mine/withdrawCheck', {},
          (res) => {
          }, (err) => {
          console.log(err)
            this.$router.push('setPassword')
          }, 'PUT')*/

      if(!this.$route.query.mobile){
        this.$toast('用户信息有误，请重新尝试')
        this.$router.push({name:'wallet'})
      }
    },
    methods:{
      goSomepage (type,query) {
        this.$router.push({name: type,query:query})
      },
      getCode() {
        if (this.canClick) {
          this.canClick = false;
          this.$ajax('/api/getcode', {mobile: this.$route.query.mobile},
            (res) => {
              if (res.code == 0) {
                this.$toast('获取成功');
                let num = 60
                this.serviceCode = res.data.code
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
            }, 'post')
        }
      },
      save(){
        if(this.serviceCode == ''){
          this.$toast('请获取验证码')
        }else if(this.code == ''){
          this.$toast('请填写验证码')
        }else if((this.code == this.serviceCode && this.serviceCode!='')){
          this.$ajax('/api/mine/withdrawPassword',{
            password:this.password
          },(res)=>{
            if(this.phone== ''){
              this.$toast('请输入数量')
            }else if(this.gold == ''){
              this.$toast('请输入价格')
            }else{
              this.$ajax('/api/mine/goldsale',
                {
                  saleCount:this.phone,
                  unitMoney:this.gold,
                  totalMoney:this.phone*this.gold
                },
                (data)=>{
                  this.$toast('出售成功')
                  this.$router.push({name:'saleOrder'})
                },
                (e)=>{
                  this.$toast(e)
                },
                'post'
              )
            }
          },(err)=>{
            this.$toast(err)
          },'PUT')
        }else{
          this.$toast('请检查验证码')
        }
//        phone
//        gold
//        remarks
      }
    },
    components:{
      gainCode
    }
  }
</script>

<style scoped lang="scss">
  $colorG: rgba(0, 0, 0, 0.6);
  .codeText{
    font-size:10px;
    line-height:0.4rem!important;
    color:#AAA;
  }
  .van-cell{
    line-height: 1rem;
  }
  .sureConatiner{
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    p{
      padding-left:0.2rem;
      margin:0.2rem 0;
      font-size:12px;
      color:#F25C41;
    }
  }
  .sure{
    background: #F1B23E;
    color: #fff;
    text-align: center;
    line-height: 1rem;

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

  .bottom{
    margin:0.2rem 0;
    display: flex;
    input{
      flex:1.2rem;
      height: .88rem;
      border: 1px solid #ccc;
      margin-right: .3rem;
      border-radius: .1rem;
      padding: 0 .3rem;
    }
    .btn{
      flex:1;
      height: .88rem;
      line-height: .88rem;
      text-align: center;
      background: #F1B23E;
      color: #fff;
      border-radius: .1rem;
    }
  }
</style>
