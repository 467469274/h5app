<template>
  <div class="sexWarp">
    <div class="warp">
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
            <p class="orderCount">共4件 合计 ：¥79.00</p>
       </van-cell>
        <div class="cellBtn">
           
            <button>取消订单</button>
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
@import '../../../../assets/scss/allOrder.scss';
 .orderCount{
     font-size:12px;
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
 }
</style>
