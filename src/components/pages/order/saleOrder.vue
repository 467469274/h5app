<template>
  <div class="sexWarp">
    <van-nav-bar
      title="卖出订单"
      left-arrow
      @click-left="$router.back(-1)"
    />

    <div class="warp">
      <div class="orderStatus">
        <span><i @click="StatusChange(1)" :class="{'selectStatus' : status == 1}" data-id="1">待卖订单</i></span>
        <span><i @click="StatusChange(2)" :class="{'selectStatus' : status == 2}" data-id="2">进行中订单</i></span>
        <span><i @click="StatusChange(3)" :class="{'selectStatus' : status == 3}" data-id="3">结束订单</i></span>
      </div>
      <div>
        <div class="saleOrderCell" v-for="item in orderlist">
          <van-cell>
            <div class="cell">
              {{item.type == 1 ? '平台' : '个人'}}
            </div>
          </van-cell>
          <van-cell>
            <div class="cell">
              <p>
                <span class="priceNumber">{{item.totalMoney}}</span>
                <span class="priceText">总额/元</span>
              </p>
              <p>
                <span class="priceNumber">{{item.unitMoney}}</span>
                <span class="priceText">价格/元</span>
              </p>
              <p>
                <span class="priceNumber">{{item.saleCount}}</span>
                <span class="priceText">数量/份</span>
              </p>
              <p class="btnP">
                <button class="btn1" v-if="status == 1" @click="end(item.saleId,index)">结束挂卖</button>
                <button class="btn2" v-if="status == 2">进行中</button>
                <button class="btn1" v-if="status == 3">已结束</button>
              </p>
            </div>
          </van-cell>
        </div>
        <div v-if="orderlist.length==0" style="line-height: 2rem;text-align: center;color: rgba(0,0,0,.6);font-size:.4rem">暂无订单</div>
      </div>
    </div>
    <colorBox :color="'#F5F6F7'"></colorBox>
  </div>
</template>

<script>
  export default {
    name: "sex",
    data() {
      return {
        status: 1,
        orderlist: []
      }
    },
    created() {
      this.getData()
    },
    methods: {
      end(id,index) {
        this.$ajax('/api/mine/endSale', {
            saleId:id
          },
          (res) => {
            this.$toast('结束成功')
            this.orderlist.splice(index,1)
          }, (errr) => {
            this.$toast(errr)
          }, 'post')
      },
      StatusChange(e) {
        this.status = e
        this.getData()
      },
      getData() {
        console.log(this.status)
        this.$ajax('/api/mine/waitOrders', {
            status: this.status
          },
          (res) => {
            console.log(res.data)
            this.orderlist = res.data
          },
          (err) => {
            console.log(err)
          },
          'post')
      }
    }
  }
</script>

<style scoped lang="scss">
  @import '../../../assets/scss/commtTop.scss';
  @import '../../../assets/scss/saleOrder.scss';
</style>
