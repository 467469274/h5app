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
            <p class="orderCount"><span>共4件 合计 ：¥79.00</span><span class="delivery">已送达</span></p>
       </van-cell>
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
 


</style>
