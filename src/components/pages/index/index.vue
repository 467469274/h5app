<template>
  <div class="index">
    <div class="index-main">
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive" />
      </keep-alive>
      <router-view v-if="!$route.meta.keepAlive" />
      <!-- <router-view /> -->
    </div>
    <div class="tab" v-show="isShowTab">
        <van-tabbar
          v-model="active"
          active-color="red"
        >
          <van-tabbar-item icon="wap-home" :to="{name:'shoppingMall'}">首页</van-tabbar-item>
          <van-tabbar-item icon="shop-o" :to="{name:'malls'}">商城</van-tabbar-item>
          <van-tabbar-item icon="envelop-o" :to="{name:'message'}" :info="allnum">消息</van-tabbar-item>
          <van-tabbar-item icon="contact" :to="{name:'member'}">我的</van-tabbar-item>
        </van-tabbar>
      <!-- </keep-alive> -->
    </div>
  </div>
</template>

<script>
import bus from '@/common/bus.js'
import {getCookie} from '@/common/cookies'
export default {
  name: 'index',
  data () {
    return {
      info: '',
      isShowTab: true,
      active:0,
      allnum:0
    }
  },
  created(){/*
    this.$ajax('/api/mine/wxwallet', {
      money:1
    }, (res) => {
      console.log(res.data)
      this.onBridgeReady(res.data.jsParam)
    }, (err) => {
      this.$toast(err)
    }, 'post')*/
  },
  watch:{
    $route:{
      handler(to){
        let name = to.name
        if(name == 'shoppingMall'){
          this.active =  0
       /*  let t = getCookie('token')

          if(t){
            this.$ajax('/api/message/message',{},(res)=>{
              let num = 0
              res.data.forEach(item=>{
                num+=item.count
                console.log(item.count)
              })
              this.allnum = num
            },()=>{},'post')
          }*/
        }else if(name=='malls'){
          this.active =  1
        }else if(name=='message'){
          this.active =  2
        }else if(name=='member'){
          this.active =  3
        }
      },
      immediate:true
    }
  },
  mounted(){
//    alert(WeixinJSBridge)
  },
  methods:{
   /* wxpay() {
      axios.post(url,data)
        .then((res) => {
          if(res.code == 200) {
            const pay_params = res.data.jsApiParameters
            if (typeof WeixinJSBridge == "undefined"){
              if( document.addEventListener ){
                document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false);
              }else if (document.attachEvent){
                document.attachEvent('WeixinJSBridgeReady', onBridgeReady);
                document.attachEvent('onWeixinJSBridgeReady', onBridgeReady);
              }
            }else{
              this.onBridgeReady(pay_params);
            }
          }else{
            alert('微信支付调起失败！');
          }
        }).catch((err) => {
        console.log(err);
      })
    },*/
    onBridgeReady(params) {
      const pay_params = JSON.parse(params);
      console.log({
        "appId": pay_params.appid,  //公众号名称，由商户传入
        "timeStamp": pay_params.timestamp,  //时间戳，自1970年以来的秒数
        "nonceStr": pay_params.noncestr,  //随机串
        "package": 'prepay_id='+pay_params.prepayid,
        "signType": 'MD5',  //微信签名方式：
        "paySign": pay_params.paySign
      })
      WeixinJSBridge.invoke(
        'getBrandWCPayRequest', {
          "appId": pay_params.appid,  //公众号名称，由商户传入
          "timeStamp": pay_params.timestamp,  //时间戳，自1970年以来的秒数
          "nonceStr": pay_params.noncestr,  //随机串
          "package": 'prepay_id='+pay_params.prepayid,
          "signType": 'MD5',  //微信签名方式：
          "paySign": pay_params.paySign
        },
        function(res){
          if(res.err_msg == "get_brand_wcpay_request:ok" ){
            alert('支付成功！');
          }
        });
    },
  }
}
</script>

<style lang="scss" scoped>
  .tab{
    .van-hairline--top-bottom{
      border-top: 1px solid #ccc;
    }
  }
</style>
