<template>
  <div class="confirm">
    <van-nav-bar
      title="订单详情"
      left-arrow
      @click-left="goSomePage('back')"
    />
    <div class="status">{{status[detail.status]}}</div>

    <div class="confirmWarp">
      <div class="location" @click="goSomePage('choseLocation')">
        <p class="title">
          <span class="name">{{detail.name}}</span>
          <span class="phone">{{detail.phone}}</span>
        </p>
        <div class="detailLocation">
          <span class="local">{{detail.provinceName}}{{detail.cityName}}{{detail.countyName}}{{detail.address}}</span>
        </div>
      </div>
    </div>
    <div class="goodsList">
      <div class="goodsItem">
        <div class="goodsInfo" v-for="(item,index) in detail.prorducts">
          <div class="avatar">
            <img :src="item.skuMainImg" alt="">
          </div>
          <div class="goodsDetail">
            <p class="sl goodsName">{{item.productName}}</p>
            <p class="sku">
              规格 <span>{{item.skuName}}</span>
            </p>
            <p class="other">
              <span class="redColor">￥{{item.skuPrice}}+{{item.freight}}券</span>
              <span class="num">x{{item.skuNum}}</span>
            </p>
          </div>
        </div>
        <div class="goodsBottom">
          <div class="bottomTxt">
            <span>买家留言</span>
            <span class="right">{{detail.leavingMessage}}</span>
          </div>
          <div class="bottomTxt">
            <span>下单时间</span>
            <span class="right">{{detail.createTime}}</span>
          </div>
          <div class="bottomTxt">
            <span>订单编号</span>
            <span class="right red" style="margin-left: .3rem">复制</span>
            <span class="right">{{detail.orderNo}}</span>
          </div>
          <div class="bottomTxt">
            <span>物流编号</span>
            <span class="right red" style="margin-left: .3rem">复制</span>
            <span class="right">123123123123123</span>
          </div>
          <div class="bottomTxt">
            <span>运费</span>
            <span class="right red">￥{{detail.freightAllPrice}}</span>
          </div>
          <div class="bottomTxt">
            <span>总金额</span>
            <span class="right red">￥{{detail.allPrice}}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="sure" style="background-color:rgb(247, 16, 15);">去支付</div>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    data(){
      return{
        detail:{},
        status:{
          0:"待支付",
          10:"取消支付",
          20:'已取消',
          30:'待发货',
          40:'待收货',
          50:'已收货',
          60:'已评价',
        }
      }
    },
    methods: {
      goSomePage(type) {
        if (type == 'back') {
          this.$router.back(-1)
        } else {
          this.$router.push({name: type})
        }
      }
    },
    created(){
      this.$ajax('/api/order/userOrderDetail', {id: this.$route.query.id}, (res) => {
        this.detail = res.data
        console.log(res.data)
      }, () => {}, 'get')
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
            width: 80%;
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
            margin-bottom: .5rem;
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
            img{
              width: 100%;
              height: 100%;
            }
          }
        }
        .goodsBottom {
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
  .status{
    line-height: .6rem;
    color:#fff;
    background:rgba(248,23,3,.6);
    padding-left: .3rem;
  }
</style>
