<template>
  <div class="myShopWarp">
    <van-nav-bar
      title="我的店铺"
      right-text="店铺信息"
      left-arrow
      @click-left="goSomePage('back')"
      @click-right="goSomePage('shopInfo')"
    />
    <div class="shopTop">
      <p class="count">共{{userDetail.orders.length}}单</p>
      <p class="num">{{userDetail.weekAllPrice}}</p>
      <p class="chinese">周总交易额</p>
      <p class="other">
        <span @click="goSomePage('allOrder')"><van-icon name="bill-o" size=".3rem"/>成功订单<van-icon style="display: none" name="gold-coin-o"
                                                                  size=".3rem"/></span>
        <span @click="goSomePage('earnings')"><van-icon name="gold-coin-o" size=".3rem"/>收益详情<van-icon style="display: none" name="gold-coin-o"
                                                                       size=".3rem"/></span>
      </p>
    </div>
    <div class="middle">
      <div class="btns">
        <div class="btn" @click="goSomePage('todayOrder')">
          <img src="/static/order@2x.png" alt="">
          <p>今日订单</p>
        </div>
        <div class="btn" @click="goSomePage('allOrder')">
          <img src="/static/quanbudingdan01@2x.png" alt="">

          <p>全部订单</p>
        </div>
        <div class="btn" @click="goSomePage('managemant')">
          <img src="/static/shangpinguanli@2x.png" alt="">
          <p>商品管理</p>
        </div>
        <!--<div class="btn" @click="goSomePage('shopevaluate')">
          <img src="/static/pinglun@2x.png" alt="">
          <p>用户评价</p>
        </div>-->
      </div>
    </div>
    <p class="title" v-if="userDetail.orders.length>0">待处理订单</p>
    <div class="orderList">
      <div class="order" v-for="(item,index) in userDetail.orders">
        <p class="text">
          <span class="name">订单编号</span>
          <span class="orderNum">{{item.orderNo}}</span>
          <span class="sj">{{item.createTime}}</span>
        </p>
        <p class="text" style="margin-bottom: .2rem">
          <span class="name">配送地址</span>
          <span class="orderNum">{{item.address}}</span>
        </p>
        <p class="text">
          <span class="name" style="visibility: hidden">配送地址</span>
          <span class="orderNum">{{item.name}}     {{item.phone}}</span>
        </p>
        <p class="info">
          <span class="name">共{{item.countNum}}件 ￥{{item.allPrice}}</span>
          <span class="type">{{status[item.status]}}</span>
        </p>
        <div class="imgs">
          <div class="commodityWarp">
            <div class="imgWarp"
                 :style="'background: url('+item.img+')'"></div>
            <!--<p class="sl">大青蛙调取殴打我</p>-->
          </div>
        </div>
        <div class="shopBtns">
          <span class="bgr" @click="send">立即发货</span>
          <!--<span class="bgy" @click="goSomePage('cencelOrder')">取消订单</span>-->
          <span class="bgy" @click="cancel(item.id,index)">取消订单</span>
        </div>
      </div>
    </div>
    <colorBox :color="'#F5F6F7'"></colorBox>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    data(){
      return{
        userDetail:{
          orders:[]
        },
        status:{
          0:'待支付', 10:'超时取消支付' ,20:'手动取消', 30:'待发货', 40:'待收货', 50:'待评价', 60:'已评价'
        }
      }
    },
    created(){
      this.getData()
    },
    methods: {
      goSomePage(type) {
        if (type == 'back') {
          this.$router.back(-1)
        } else {
          this.$router.push({name: type})
        }
      },
      getData(){
//        GET
        this.$ajax('/api/shop/userShop',
          {},
          (res)=>{
            this.userDetail = res.data
          },
          ()=>{},
          'get'
        )
      },
      cancel(id,index){
        console.log(id)
        this.$ajax('/api/shop/cancelOrder',{
            orderId:id
          },
          (res)=>{
            this.userDetail.orders.splice(index,1)
            this.$toast('取消成功')
          },(err)=>{
            this.$toast(err)
          },'PUT')
      }
    }
  }
</script>
<style lang="scss" scoped>
  .myShopWarp {
    .shopTop {
      width: 95%;
      margin: 0 auto;
      height: 3rem;
      background: url("../../../assets/images/myShopBanner.png");
      background-size: 100% 100%;
      margin-top: .2rem;
      color: #fff;
      text-align: center;
      .count {
        font-size: 12px;
        text-align: right;
        padding: .3rem .3rem 0 0;
        margin-bottom: .1rem;
      }
      .num {
        font-size: 22px;
        font-weight: 600;
        margin-bottom: .1rem;
      }
      .chinese {
        font-size: 16px;
      }
      .other {
        margin-top: .4rem;
        font-size: 12px;
        padding: 0 .5rem;
        span {
          i {
            vertical-align: middle;
            margin-top: .04rem;
            margin-right: .2rem;
          }
        }
        :first-child {
          float: left;
        }
        :last-child {
          float: right;
        }
      }
    }
    .btns {
      background: #fff;
      display: flex;
      padding: .2rem .3rem .3rem;
      justify-content: space-between;
      text-align: center;
      margin-top: .2rem;
      .btn {
        flex: 1.1rem 0 0;
        img {
          display: block;
          width: .9rem;
          height: .9rem;
          margin: .1rem auto;
        }
      }
    }
    .title {
      line-height: .85rem;
      padding: 0 .2rem;
      margin: .2rem 0;
      background: #fff;
      font-size: 14px;
    }
    .orderList {
      width: 90%;
      margin: 0 auto;
      .order {
        background: #fff;
        border-radius: .2rem;
        padding: .35rem;
        margin-bottom: .2rem;
        .text {
          font-size: 14px;
          margin-bottom: .3rem;
          .name {
            color: rgba(0, 0, 0, 0.5);
          }
          .sj {
            float: right;
          }
        }
        .info {
          font-size: 14px;
          .type {
            float: right;
            color: #DE4724;
          }
        }
        .imgs {
          overflow: hidden;
          margin-top: .35rem;
          .commodityWarp {
            .imgWarp {
              border: 1px solid #ccc;
              background-size: 100% 100% !important;
              &:before {
                padding-bottom: 100%;
                content: '';
                display: block;
              }
            }
            &:nth-child(4n) {
              margin-right: 0;
            }
            width: 22%;
            margin-right: 3.5%;
            float: left;
            margin-bottom: .2rem;
            line-height: .5rem;
          }
        }
        .shopBtns {
          overflow: hidden;
          margin-top: .2rem;
          span {
            width: 1.62rem;
            line-height: .62rem;
            border-radius: .05rem;
            float: right;
            color: #fff;
            text-align: center;
            margin-left: .25rem;
          }
        }
      }
    }
  }
</style>
