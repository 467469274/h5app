<template>
  <div class="sexWarp">
    <van-nav-bar
      title="卖出订单"
      left-arrow
    />

    <div class="warp">
        <div class="orderStatus" @click="StatusChange($event)"> 
            <span><i :class="{'selectStatus' : this.status == 1}" data-id="1">待卖订单</i></span>
            <span><i :class="{'selectStatus' : this.status == 2}" data-id="2" >进行中订单</i></span>
            <span><i :class="{'selectStatus' : this.status == 3}" data-id="3">结束订单</i></span>
        </div>
        <div>
            <div class="saleOrderCell">
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
                            <button class="btn1" v-if="this.status == 1">结束挂卖</button>
                            <button class="btn2" v-if="this.status == 2">进行中</button>
                            <button class="btn1" v-if="this.status == 3">已结束</button>
                        </p>
                    </div>
                    </van-cell>
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
        StatusChange (e) {
            if(e.target.localName === 'i'){
                this.status =  e.target.dataset.id;
            }
        }
    }
  }
</script>

<style scoped lang="scss">
@import '../../../assets/scss/commtTop.scss';
@import '../../../assets/scss/saleOrder.scss';
</style>
