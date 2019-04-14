<template>
  <div class="sexWarp">
    <van-nav-bar
      title="卖出订单"
      left-arrow
    />

    <div class="warp">
        <div class="orderStatus" @click="StatusChange($event)"> 
            <span><i :class="{'selectStatus' : this.status == 1}" data-id="1" data-path="averageOrder">待卖订单</i></span>
            <span><i :class="{'selectStatus' : this.status == 2}" data-id="2" data-path="proceedOrder">进行中订单</i></span>
            <span><i :class="{'selectStatus' : this.status == 3}" data-id="3" data-path="finishOrder">结束订单</i></span>
        </div>
        <router-view v-if="!$route.meta.keepAlive" />
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
                let path = e.target.dataset.path;
                this.$router.push({path: path});
            }
        }
    }
  }
</script>

<style scoped lang="scss">
@import '../../../../assets/scss/commtTop.scss';
    .cell{
      display:flex;
      p{
          flex:1;
      }
      .priceNumber,.priceText{
          display:block;
          width:100%;
          font-size:16px;
          font-weight:600;
          text-align:center;
      
      }
      .priceText{
          font-size:12px;
          color:#666666;
          font-weight:normal;
      }
      .btnP{
          border-left:1px solid #DFDFDF;
      }
      button{
          display:block;
          margin:0.2rem auto 0 auto;
          width:1.4rem;
          height:0.6rem;
          background:#E62E1A;
          color:#fff;
          border:none;
          font-size:12px;
            border-radius:5px;
      }
  }
 
</style>
