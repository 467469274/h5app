<template>
  <div class="sexWarp">
    <van-nav-bar
      title="全部订单"
      left-arrow
    />

    <div class="warp">
        <div class="orderStatus" @click="StatusChange($event)"> 
            <span><i :class="{'selectStatus' : this.status == 1}" data-id="1" data-path="myAllOrder">全部订单</i></span>
            <span><i :class="{'selectStatus' : this.status == 2}" data-id="2" data-path="payment">待支付</i></span>
            <span><i :class="{'selectStatus' : this.status == 3}" data-id="3" data-path="shipments">待发货</i></span>
            <span><i :class="{'selectStatus' : this.status == 4}" data-id="4" data-path="harvest">待收货</i></span>
            <span><i :class="{'selectStatus' : this.status == 5}" data-id="5" data-path="evaluate">待评价</i></span>
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
</style>
