<template>
  <div class="confirm">
    <van-nav-bar
      title="确认订单"
      left-arrow
      @click-left="goSomePage('myCart')"
    />
    <div class="confirmWarp">
      <div class="location" @click="goSomePage('choseLocation')" v-if="orderDetail.address">
        <p class="title">
          <span class="name">{{orderDetail.address.name}}</span>
          <span class="phone">{{orderDetail.address.phone}}</span>
        </p>
        <div class="detailLocation">
          <span class="isDefaule" v-if="orderDetail.from =='cart' || (orderDetail.from=='location' && orderDetail.address.isDefault == 1)">默认</span>
          <span class="local">{{orderDetail.address.address}}</span>
          <van-icon name="arrow" class="arrow" size=".5rem" color="rgba(0,0,0,0.6)"/>
        </div>
      </div>
      <div v-else class="noLocation" @click="goSomePage('choseLocation')">暂无地址 点击添加地址添加地址          <van-icon name="arrow" class="arrow" size=".5rem" color="rgba(0,0,0,0.6)"/></div>
    </div>
    <div class="goodsList">
      <div class="goodsItem" v-for="item in orderDetail.shopProducts">
        <p class="shopName">{{item.shopName}}</p>
        <div class="goodsInfo" v-for="(te,index) in item.products">
          <div class="avatar">
            <img :src="te.mainImg" alt="">
          </div>
          <div class="goodsDetail">
            <p class="sl goodsName">{{te.productName}}</p>
            <p class="sku">
              规格 <span>{{te.skuName}}</span>
            </p>
            <p class="other">
              <span class="redColor">￥{{te.price}}{{te.goldCouponNum?`+${te.goldCouponNum}券`:''}}</span>
              <span class="num">x{{te.num}}</span>
            </p>
          </div>
        </div>
      </div>
      <div class="goodsBottom">
        <div class="bottomTxt">
          <span>买家留言</span>
          <span class="right">{{orderDetail.leavingMessage}}</span>
        </div>
        <div class="bottomTxt">
          <span>运费</span>
          <span class="right red">￥{{orderDetail.allFreight}}</span>
        </div><!--
        <div class="bottomTxt">
          <span>返现</span>
          <span class="right red">￥{{orderDetail.goldCouponNum}}</span>
        </div>-->
        <div class="bottomTxt">
          <span>总金额</span>
          <span class="right red">{{orderDetail.allPrice?'￥'+orderDetail.allPrice:''}}{{(orderDetail.allPrice && orderDetail.goldCouponNum)?'+':''}}{{orderDetail.goldCouponNum?orderDetail.goldCouponNum+'券':''}}</span>
        </div>
      </div>
    </div>
    <van-submit-bar
      label="实付款"
      button-text="提交订单"
      @submit="submit"
    >
      <p class="payTxt">实付款 <span class="redTxt">{{orderDetail.allPrice?'￥'+(orderDetail.allPrice+orderDetail.allFreight):''}} {{(orderDetail.allPrice && orderDetail.goldCouponNum)?'+':''}} {{orderDetail.goldCouponNum?orderDetail.goldCouponNum+'券':''}}</span></p>
    </van-submit-bar>
    <colorBox :color="'#F5F6F7'"></colorBox>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    data(){
      return{
        orderDetail:this.$route.params
      }
    },
    methods: {
      goSomePage(type) {
        if (type == 'back') {
          this.$router.back(-1)
        } else if(type == 'choseLocation'){
          this.$router.push({name: 'choseLocation',params:this.orderDetail})
        }else {
          this.$router.push({name: type})
        }
      },
      submit(){
//        POST
        let skus = []
        this.orderDetail.shopProducts.forEach((item)=>{
          item.products.forEach((pro)=>{
            skus.push({
              num:pro.num,
              skuId:pro.skuId
            })
          })
        })
        let obj = {
          "addressId": this.orderDetail.address.id,
          "leavingMessage": "string",
          "skus": skus
        }
        this.$ajax('/api/order/submitOrder',obj,
          (res)=>{
            let data = res.data
            this.$toast('下单成功')
            this.$router.push({name:'pay',query:{payPrice:data.payPrice,payNo:data.payNo}})
          },
          (err)=>{
            this.$toast(err)
          },'upOrder')
      }
    },
    activated(){
//      console.log(this.$route.params)
    },
    created(){
      if(!this.$route.params.shopProducts){
        this.$toast('订单有误，请重新下单')
      }
//      console.log(this.$route.params)
//    this.orderDetail = {"address":{"id":14,"name":"霍潇飞","phone":"17695929894","address":"   北京通州"},"shopProducts":[{"shopId":1,"shopName":"鑫鑫店铺","products":[{"productId":1,"skuId":1,"num":6,"productName":"小辣椒 红辣椒7X  学生智能手机 美颜双摄 微Q多开 人脸识别 移动联通电信4G全网通 黑色","mainImg":"https://img13.360buyimg.com/n1/s450x450_jfs/t1/9085/2/12381/146200/5c371c5bE08328383/4f4ba51aed682207.jpg","skuName":"梦幻蓝  3GB+32GB","price":1199,"goldCouponNum":0}]}],"allPrice":7194,"goldCouponNum":0,"allFreight":10}
//    console.log(this.orderDetail)
    },
    watch:{
      $route(to,from){
        if(to.name == 'myCart'){
          this.$destroy()
        }
      }
    }
  }
</script>
<style lang="scss" scoped>
  $colorG: rgba(0, 0, 0, 0.6);
  $red: rgb(247, 16, 15);
  .confirm {
    .confirmWarp {
      padding: .2rem;
      .location {
        border-radius: .2rem;
        background: #fff;
        padding: .35rem;
        .title {
          margin-bottom: .35rem;
          .name {
            font-size: 15px;
          }
          .phone {
            font-size: 12px;
            margin-left: .3rem;
            color: $colorG;
          }
        }
        .detailLocation {
          font-size: 14px;
          color: $colorG;
          span {
            display: inline-block;
            vertical-align: middle;
          }
          .isDefaule {
            margin-right: .3rem;
            width: 1rem;
            height: .4rem;
            line-height: .4rem;
            text-align: center;
            background: rgb(250, 130, 101);
            border-radius: 1rem;
            font-size: 12px;
            color: #fff;
          }
          .local {
            width: 60%;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
          }
          .arrow {
            float: right;
            margin-top: -4px;
          }
        }
      }
    }
    .goodsList {
      padding: .2rem;
      margin-bottom: .2rem;
      .goodsItem {
        padding: .35rem;
        background: #fff;
        border-radius: .2rem;
        margin-bottom: .2rem;
        .shopName {
          font-size: 15px;
          margin-bottom: .3rem;
        }
        .goodsInfo {
          display: flex;
          .goodsDetail {
            flex: 1;
            padding-left: .3rem;
            overflow: hidden;
            .goodsName {
              font-size: 14px;
              color: $colorG;
            }
            .sku {
              color: rgba(0, 0, 0, 0.5);
              margin-bottom: .05rem;
            }
            .other {
              font-size: 13px;
              .redColor {
                color: $red;
              }
              .num {
                float: right;
                font-size: 11px;
                color: $colorG;
              }
            }
          }
          .avatar {
            flex: 1rem 0 0;
            height: 1rem;
            border: #ccc solid .5px;
            overflow: hidden;
            img{
              width: 100%;
              height: 100%;
            }
          }
        }
      }
    }
    .goodsBottom {
      background: #fff;
      padding: .2rem;
      border-radius: .2rem;
      .bottomTxt {
        font-size: 14px;
        color: $colorG;
        margin-bottom: .35rem;
        .right {
          float: right;
          &.red {
            color: $red;
          }
        }
      }
    }
    .van-submit-bar {
      box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
      .payTxt {
        padding-left: .6rem;
        color: $colorG;
        .redTxt {
          color: $red;
          font-size: 17px;
        }
      }
    }
  }
  .noLocation{
    line-height:1rem;
    text-align: center;
    background: #fff;
    i{
      line-height: 1rem;
      vertical-align: middle;
      float: right;
    }
  }
</style>
