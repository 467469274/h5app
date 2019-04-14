<template>
  <div class="sexWarp">
    <van-nav-bar
      title="买入"
      left-arrow
    />
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
                       <button>点击购买</button>
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
        radio:1,
        checked:true
      }
    },
    methods:{

    }
  }
</script>

<style scoped lang="scss">
 @import '../../../assets/scss/saleOrder.scss';
 button{
         
          background:#1CA55D!important;
          color:#fff;
      }
</style>
