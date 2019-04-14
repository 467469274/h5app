<template>
  <div class="sexWarp">
    <div class="warp">
        <van-cell>
            <div class="cell" style="color:#666666;">
                <span>物流单号:989554541223</span>
            </div>
        </van-cell>
        <van-cell>
            <div class="imageList">
                <img src=""/>
                <div class="imageinfo"> 
                    <p class="imageTitle">1元升级家家商城普通代言人</p>
                    <p class="imageType">规格：普通代言人</p>
                    <p class="imagePrcie">¥1.00 <span>x1</span></p>
                </div>
            </div>
       </van-cell>
        <div class="cellBtn">
            <button>确认收货</button>
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
@import '../../../../assets/scss/myOrder.scss';
 .cellBtn{
     padding:0.2rem 0;
     width:100%;
     display:inline-block;
     background:#fff;
button{
    margin:0 0.3rem 0 0;
    float:right;
          width:1.6rem;
          height:0.6rem;
          background:#fff;
          border:1px solid #ED594D;
          font-size:13px;
          border-radius:3px;
           color:#ED594D;
      }
 }
</style>
