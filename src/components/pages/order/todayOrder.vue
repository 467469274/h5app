<template>
  <div class="sexWarp">
   <van-nav-bar
      title="今日订单"
      left-arrow
    />
    <div class="warp">
    <div class="warpDiv">
       <van-cell>
            <div class="cell" style="color:#666666;">
                <span class="orderNumber">订单编号:989554541223</span>
                <span>11月22日 13:56</span>
            </div>
       </van-cell>
       <van-cell>
            <div class="cell">
                <span class="orderNumber">配送地址：丰台区新家园301</span>
                <span>王路 13521779954</span>
            </div>
            <div class="imageList">
                <div class="imageinfo">
                    <img src=""/>
                    <p class="imageText">弄12就倾向</p>
                </div>
            </div>
            <p class="orderCount"><span>共4件 合计 ：¥79.00</span><span class="delivery">已支付</span></p>
       </van-cell>
        <div class="cellBtn">
            <button class="deliveryBtn">立即接单</button>
            <button>取消订单</button>
        </div>
    </div>
    </div>
   
  </div>
</template>

<script>
  export default {
    name: "sex",
    data(){
      return{
        status:1
      }
    },
    methods:{
       
    }
  }
</script>

<style scoped lang="scss">
@import '../../../assets/scss/allOrder.scss';
.warpDiv{
    margin:0.15rem 0  0 0;
}
 .orderCount{
     display:flex;
     font-size:12px;
      span{
        flex:1.5rem;
     }
      .delivery{
        flex:1;
        font-size:14px;
        text-align:right;
        color:#E63525;
    }
 }

 .cellBtn{
     padding:0.2rem 0;
     width:100%;
     display:inline-block;
     background:#fff;
    button{
        margin:0 0.3rem 0 0;
        float:right;
          width:1.6rem;
          height:0.7rem;
          background:#fff;
          border:1px solid #DFDFDF;
          font-size:13px;
          border-radius:3px;
           color:#666666;
      }
        .deliveryBtn{
            background:#E73927!important;
            color:#fff!important;
            border:none;
        }  
 }
</style>
