<template>
  <div class="sexWarp">
    <van-nav-bar
      title="我的订单"
      left-arrow
      @click-left="onClickLeft"
    />

    <div class="warp">
      <div class="orderStatus">
        <span><i @click="StatusChange(-1)" :class="{'selectStatus' : this.status == -1}">全部订单</i></span>
        <span><i @click="StatusChange(0)" :class="{'selectStatus' : this.status == 0}">待支付</i></span>
        <span><i @click="StatusChange(30)" :class="{'selectStatus' : this.status == 30}">待发货</i></span>
        <span><i @click="StatusChange(40)" :class="{'selectStatus' : this.status == 40}">待收货</i></span>
        <span><i @click="StatusChange(50)" :class="{'selectStatus' : this.status == 50}">待评价</i></span>
      </div>
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <div class="myOrderCell" v-for="(item,index) in list" @click="goDetail(item.id)">
          <van-cell>
            <div class="cell" style="color:#666666;">
              <span v-if="status == -1 || status == 0 || status == 30">订单号:{{item.id}}</span>
              <span v-else>物流单号:{{item.expressNo}}</span>
            </div>
          </van-cell>
          <van-cell class="main">
            <div class="imageList" v-for="(sku,index) in item.skus">
              <img :src="sku.skuMainImg"/>
              <div class="imageinfo">
                <p class="imageTitle">{{sku.productName}}</p>
                <p class="imagePrcie">{{sku.skuPrice?'￥'+sku.skuPrice:''}} {{(sku.skuGoldCouponNum&&sku.skuPrice)?'+':''}}{{sku.skuGoldCouponNum?sku.skuGoldCouponNum+"券":''}}<span>x{{sku.skuNum}}</span></p>
              </div>
            </div>
          </van-cell>
          <div class="cellBtn">
            <button v-if="item.status == 0">去支付</button>
            <button v-if="item.status == 40">确认收货</button>
            <button v-if="item.status == 50">立即评价</button>
            <button v-if="item.status == 50" class="receipt">再次购买</button>
          </div>
        </div>
      </van-list>
    </div>
  </div>
</template>

<script>
  export default {
    name: "myOrder",
    data() {
      return {
        status: -1,
        list: [],
        loading: false,
        finished: false,
        formData: {
          currPage: 0,
          pageSize: 10
        }
      }
    },
    created() {
      if(this.$route.query.type){
        this.status = this.$route.query.type
      }
    },
    methods: {
      StatusChange(e) {
        this.status = e
        this.formData = {
          currPage: 0,
          pageSize: 10
        }
        this.onLoad()
      },
      onClickLeft() {
        this.$router.push({name: 'member'})
      },
      onLoad() {
        this.loading = true
        this.formData.currPage+=1
        this.$ajax('/api/order/userOrders', {...this.formData, status: this.status}, (res) => {
          this.list = res.data
          this.loading = false
          console.log(res.data)
          if (res.data.length < 10) {
            this.finished = true
          } else {
            this.finished = false
          }
        }, () => {
        }, 'get')
      },
      goDetail(id){
        this.$router.push({name: 'orderDetail',query:{id:id}})
      }
    }
  }
</script>

<style scoped lang="scss">
  @import '../../../assets/scss/commtTop.scss';
  @import '../../../assets/scss/myOrder.scss';

  .main {
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    padding: 0 5%;
    .imageList{
      border-bottom: 1px solid #ccc;
      padding-bottom: .2rem;
      &:last-child{
        border: none;
      }
    }
  }

  .myOrderCell {
    margin-bottom: .2rem;
  }
</style>
