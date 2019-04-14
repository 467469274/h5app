<template>
  <div class="sexWarp">
    <van-nav-bar
      title="我的订单"
      left-arrow
    />

    <div class="warp">
        <div class="orderStatus" @click="StatusChange($event)"> 
            <span><i :class="{'selectStatus' : this.status == 1}" data-id="1">全部订单</i></span>
            <span><i :class="{'selectStatus' : this.status == 2}" data-id="2">待支付</i></span>
            <span><i :class="{'selectStatus' : this.status == 3}" data-id="3">待发货</i></span>
            <span><i :class="{'selectStatus' : this.status == 4}" data-id="4">待收货</i></span>
            <span><i :class="{'selectStatus' : this.status == 5}" data-id="5">待评价</i></span>
        </div>
        <div>
          <div class="myOrderCell">
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
                <button  v-if="this.status == 2">去支付</button>
                <button  v-if="this.status == 4">确认收货</button>
                <button  v-if="this.status == 5">立即评价</button>
                <button  v-if="this.status == 5" class="receipt">确认收货</button>
            </div>
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
@import '../../../assets/scss/myOrder.scss';
</style>
