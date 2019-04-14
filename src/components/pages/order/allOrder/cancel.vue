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
  .van-cell{
   
    font-size:12px;
  }
    
  .cell{
      display:flex;
      font-size:15px;
      .orderNumber{
          flex:1.7rem;
           text-align:left;
           overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
           
      }
      span{
          flex:1;
          text-align:right;
          overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
      }
      
  }
 .imageList{
     margin:0.15rem 0 0.15rem 0;
     display:flex;
     .imageinfo{
        
         flex:1;
     }
     img{
         width:1.1rem;
         height:1.1rem;
         border:1px solid #DFDFDF;
     }
     .imageText{
         width:1.1rem;
         font-size:12px;
         overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
     }
 }
 .orderCount{
     display:flex;
     font-size:12px;
 }
</style>
