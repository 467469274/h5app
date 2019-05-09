<template>
  <div class="sexWarp">
    <van-nav-bar
      title="全部订单"
      left-arrow
      @click-left="$router.back(-1)"
    />

    <div class="warp">
      <div class="orderStatus">
        <span><i @click="StatusChange(0)" :class="{'selectStatus' : form.status == 0}" data-id="0">待付款</i></span>
        <span><i @click="StatusChange(30)" :class="{'selectStatus' : form.status == 30}" data-id="30"
                 data-path="shipped">已付款</i></span>
        <span><i @click="StatusChange(40)" :class="{'selectStatus' : form.status == 40}" data-id="40">配送中</i></span>
        <span><i @click="StatusChange('50,60')" :class="{'selectStatus' : form.status == 60}" data-id="60">已完成</i></span>
        <span><i @click="StatusChange('10,20')" :class="{'selectStatus' : form.status == 10 || form.status ==20}" data-id="10">已取消</i></span>
      </div>
      <div>
        <van-list
          v-model="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="getData"
        >
          <div class="allOrderCell" v-for="item in list">
            <van-cell>
              <div class="cell" style="color:#666666;">
                <span class="orderNumber">配送地址：{{item.address}}</span>
                <span>{{item.name}}         {{item.phone}}</span>
              </div>
            </van-cell>
            <van-cell>
              <div class="cell">
                <span class="orderNumber">配送地址：丰台区新家园301</span>
                <span>王路 13521779954</span>
              </div>
              <div class="imageList">
                <div class="imageinfo">
                  <img :src="item.img"/>
                  <!--<p class="imageText">弄12就倾向</p>-->
                </div>
              </div>
              <p class="orderCount"><span>共{{item.countNum}}件 合计 ：¥{{item.allPrice}}</span><span class="delivery">{{status[item.status]}}</span></p>
            </van-cell>

            <div class="cellBtn">
              <button class="deliveryBtn" v-if="form.status == 30"  @click="nowId = item.id,show = true">立即发货</button>
              <button v-if="form.status != 10 || form.status != 20"@click="cancel(item.id,index)">取消订单</button>
            </div>
          </div>
        </van-list>
      </div>
    </div>
    <van-popup v-model="show">
      <div class="sendWarp">
        <van-field v-model="value" type="number" @keypress="keypress" placeholder="请输入物流编号"/>
        <div class="btnWarp">
          <van-button plain type="danger" @click="show=false,nowId='',value=''">取消</van-button>
          <van-button plain type="primary" @click="send">确定</van-button>
        </div>
      </div>
    </van-popup>
    <colorBox :color="'#F5F6F7'"></colorBox>
  </div>
</template>

<script>
  export default {
    name: "sex",
    data() {
      return {
        nowId:'',
        value:'',
        show:false,
        status:{
          0:"待支付",
          10:"取消支付",
          20:'已取消',
          30:'待发货',
          40:'待收货',
          50:'已收货',
          60:'已评价',
        },
        loading: false,
        finished: false,
        list: [],
        form: {
          currPage: 0,
          pageSize: 10,
          status: 0
        }
      }
    },
    methods: {
      send() {
        if (this.value == '') {
          this.$toast('请输入物流编号')
        } else {
          this.$ajax('/api/shop/fahuo',
            {
              id: this.nowId,
              expressNo: this.value
            }, (res) => {
              this.$toast('发货成功')
              this.form.currPage = 1
              this.list = []
              this.getData()
              this.nowId=''
              this.value=''
              this.show = false
            }, (err) => {
              this.$toast(err)
              this.nowId=''
              this.value=''
            }, 'PUT')
        }
      },
      StatusChange(id) {
        this.form.status = id
        this.form.currPage = 0
        this.list = []
        this.getData()
      },

      getData() {
        this.form.currPage += 1
        this.loading = true;
        this.$ajax('/api/shop/orders', this.form, (res) => {
          this.list = this.list.concat(res.data)
          this.loading = false;
          if (res.data.length < this.form.pageSize) {
            this.finished = true
          }
          console.log(res)
        }, () => {
          this.loading = false;
        }, 'get')
      },
      cancel(id,index){
        this.$ajax('/api/shop/cancelOrder',{
            orderId:id
          },
          (res)=>{
            this.list.splice(index,1)
            this.$toast('取消成功')
          },(err)=>{
            this.$toast(err)
          },'PUT')
      }
    }
  }
</script>

<style scoped lang="scss">
  @import '../../../assets/scss/commtTop.scss';
  @import '../../../assets/scss/allOrder.scss';

  .orderCount {
    display: flex;
    font-size: 12px;
    span {
      flex: 1.5rem;
    }
    .delivery {
      flex: 1;
      font-size: 14px;
      text-align: right;
      color: #E63525;
    }
  }

  .cellBtn {
    padding: 0.2rem 0;
    width: 100%;
    display: inline-block;
    background: #fff;
    button {
      margin: 0 0.3rem 0 0;
      float: right;
      width: 1.6rem;
      height: 0.7rem;
      background: #fff;
      border: 1px solid #DFDFDF;
      font-size: 13px;
      border-radius: 3px;
      color: #666666;
    }

    .deliveryBtn {
      background: #E73927 !important;
      color: #fff !important;
      border: none;
    }
  }

  .sendWarp {
    width: 6rem;
    .btnWarp {
      display: flex;
      margin: .2rem 0;
      justify-content: space-evenly;
      .van-button {
        width: 1.2rem;
        line-height: .45rem;
        height: .6rem;
        text-align: center;
        font-size: 12px;
        padding: 0;
        display: block;
      }
    }
  }
</style>
