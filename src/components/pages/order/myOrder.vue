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
        <span><i @click="StatusChange(50)" :class="{'selectStatus' : this.status == 50}">已完成</i></span>
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
              <span v-if="status == -1 || status == 0 || status == 30">订单号:{{item.orderNo}}</span>
              <span v-else>物流单号:{{item.expressNo}}</span>
            </div>
          </van-cell>
          <van-cell class="main">
            <div class="imageList" v-for="(sku,index) in item.skus">
              <img :src="sku.skuMainImg"/>
              <div class="imageinfo">
                <p class="imageTitle sl">{{sku.productName}}</p>
                <p class="imagePrcie">{{sku.skuPrice?'￥'+sku.skuPrice:''}}
                  {{(sku.skuGoldCouponNum&&sku.skuPrice)?'+':''}}{{sku.skuGoldCouponNum?sku.skuGoldCouponNum+"券":''}}<span>x{{sku.skuNum}}</span>
                </p>
                <div style="overflow: hidden">
                  <button v-if="item.status == 50" style="margin: 0;margin-top:.3rem" @click.stop="again(sku)" class="receipt">再次购买</button>
                </div>
              </div>
            </div>
          </van-cell>
          <div class="cellBtn">
            <button v-if="item.status == 0" @click.stop="pay(item)">去支付</button>
            <button v-if="item.status == 0" @click.stop="cancel(item.id,index)">取消订单</button>
            <button v-if="item.status == 40" @click.stop="sh(item.id)">确认收货</button>
            <!--<button v-if="item.status == 50">立即评价</button>-->
          </div>
        </div>
      </van-list>
    </div>
    <colorBox :color="'#F5F6F7'"></colorBox>
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
      console.log(this.$route.query.type)
      if (this.$route.query.type) {
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
        this.list = []
        this.onLoad()
      },
      onClickLeft() {
        this.$router.push({name: 'member'})
      },
      onLoad() {
        this.loading = true
        this.formData.currPage += 1
        this.$ajax('/api/order/userOrders', {...this.formData, status: this.status}, (res) => {
          this.list = this.list.concat(res.data)
          this.loading = false
          if (res.data.length < 10) {
            this.finished = true
          } else {
            this.finished = false
          }
        }, () => {
        }, 'get')
      },
      goDetail(id) {
        this.$router.push({name: 'orderDetail', query: {id: id}})
      },
      again(item){
        console.log(item)
        this.$router.push({name:'goodsDetail',query:{goodsId:item.productId}})
      },
      sh(id) {
        this.$ajax('/api/order/receivingGoods', {
          id: id
        }, (res) => {
          this.$toast('收货成功')
          this.$router.push({name: 'myOrder', query: {type: 50}})
        }, (err) => {
          this.$toast(err)
        }, 'PUT')
//        PUT
      },
      pay(item) {
        this.$router.push({name: 'pay', query: {payPrice: item.allPrice, payNo: item.payNo}})
        console.log(item)
        /*this.$ajax('/api/order/aliPay', {
          id:item,
          returnUrl:window.location.origin+'/#/paySuccess?from=myOrder'
        }, (res) => {
          const div = document.createElement('div')
          div.innerHTML = res.data//此处form就是后台返回接收到的数据
          document.body.appendChild(div)
          document.forms[0].submit()
        }, (err) => {
          this.$toast(err)
        }, 'PUT')*/
      },
      cancel(id, index) {
        this.$ajax('/api/shop/cancelOrder', {
            orderId: id
          },
          (res) => {
            this.formData.currPage = 0
            this.onLoad()
            this.$toast('取消成功')
          }, (err) => {
            this.$toast(err)
          }, 'PUT')
      }
    },
    watch: {
      status(n, o) {
        this.$router.replace({name: 'myOrder', query: {type: n}})
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
    .imageList {
      border-bottom: 1px solid #ccc;
      padding-bottom: .2rem;

      &:last-child {
        border: none;
      }
    }
  }

  .myOrderCell {
    margin-bottom: .2rem;
  }
</style>
