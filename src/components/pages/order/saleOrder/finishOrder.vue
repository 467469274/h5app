<template>
  <div class="sexWarp">
    <div class="warp">
        <div class="orderCell">
            <van-cell>
                <div class="cell">
                    平台名称
                </div>
            </van-cell>
             <van-cell>
                <div class="cell">
                   <p>
                        <span class="priceNumber">5000.00</span>
                        <span class="priceText">总额/元</span>
                   </p>
                    <p>
                        <span class="priceNumber">10.00</span>
                        <span class="priceText">价格/元</span>
                   </p>
                    <p>
                        <span class="priceNumber">500.00</span>
                        <span class="priceText">数量/份</span>
                   </p>
                    <p class="btnP">
                       <button>已结束</button>
                   </p>
                </div>
            </van-cell>
        </div>
    </div>
   
  </div>
</template>

<script>
  export default {
    name: "sex",
    data(){
      return{
      
      }
    },
    methods:{
       
    }
  }
</script>

<style scoped lang="scss">
   @import '../../../../assets/scss/saleOrder.scss';
</style>
