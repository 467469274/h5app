<template>
  <div class="sexWarp">
    <van-nav-bar
      title="全部订单"
      left-arrow
    />

    <div class="warp">
        <div class="orderStatus" @click="StatusChange($event)"> 
            <span><i :class="{'selectStatus' : this.status == 1}" data-id="1">待付款</i></span>
            <span><i :class="{'selectStatus' : this.status == 2}" data-id="2" data-path="shipped">已发货</i></span>
            <span><i :class="{'selectStatus' : this.status == 3}" data-id="3">配送中</i></span>
            <span><i :class="{'selectStatus' : this.status == 4}" data-id="4">已完成</i></span>
            <span><i :class="{'selectStatus' : this.status == 5}" data-id="5">已取消</i></span>
        </div>
        <div>
        
          <div class="allOrderCell">
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
                <p class="orderCount" v-if="this.status == 1 || this.status == 2 || this.status == 4  || this.status == 5">共4件 合计 ：¥79.00</p>
                 <p class="orderCount" v-if="this.status == 3"><span>共4件 合计 ：¥79.00</span><span class="delivery">已送达</span></p>
            </van-cell>
            
            <div class="cellBtn" v-if="this.status == 1 || this.status == 2">
              <button class="deliveryBtn" v-if="this.status == 2">立即发货</button>
                <button>取消订单</button>
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
        status:1,
        
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
@import '../../../assets/scss/allOrder.scss';

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
