<template>
  <div class="confirm">
    <van-nav-bar
      title="确认订单"
      left-arrow
      @click-left="goSomePage('myCart')"
    />
    <div class="confirmWarp">
      <div class="location" @click="goSomePage('choseLocation')" v-if="confirmDetail.address">
        <p class="title">
          <span class="name">{{confirmDetail.address.name}}</span>
          <span class="phone">{{confirmDetail.address.phone}}</span>
        </p>
        <div class="detailLocation">
          <span class="isDefaule"
                v-if="confirmDetail.from =='cart' || (confirmDetail.from=='location' && confirmDetail.address.isDefault == 1)">默认</span>
          <span class="local">{{confirmDetail.address.address}}</span>
          <van-icon name="arrow" class="arrow" size=".5rem" color="rgba(0,0,0,0.6)"/>
        </div>
      </div>
      <div v-else class="noLocation" @click="goSomePage('choseLocation')">暂无地址 点击添加地址添加地址
        <van-icon name="arrow" class="arrow" size=".5rem" color="rgba(0,0,0,0.6)"/>
      </div>
    </div>
    <div class="goodsList">
      <div class="goodsItem" v-for="item in confirmDetail.shopProducts">
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
              <span class="redColor">{{te.price?'￥'+te.price:''}}{{(te.price&&te.goldCouponNum)?'+':''}}{{te.goldCouponNum?`${te.goldCouponNum}券`:''}}</span>
              <span class="num">x{{te.num}}</span>
            </p>
          </div>
        </div>
      </div>
      <div class="goodsBottom">
        <div class="bottomTxt">
          <span>买家留言</span>
          <span class="right"><input type="text" v-model="confirmDetail.leavingMessage" style="text-align: right" placeholder="用户留言"></span>
        </div>
        <div class="bottomTxt">
          <span>运费</span>
          <span class="right red">￥{{confirmDetail.allFreight}}</span>
        </div><!--
        <div class="bottomTxt">
          <span>返现</span>
          <span class="right red">￥{{confirmDetail.goldCouponNum}}</span>
        </div>-->
        <div class="bottomTxt">
          <span>总金额</span>
          <span class="right red">{{confirmDetail.allPrice?'￥'+confirmDetail.allPrice:''}}{{(confirmDetail.allPrice && confirmDetail.goldCouponNum)?'+':''}}{{confirmDetail.goldCouponNum?confirmDetail.goldCouponNum+'券':''}}</span>
        </div>
      </div>
    </div>
    <van-submit-bar
      label="实付款"
      button-text="提交订单"
      @submit="submit"
    >
      <p class="payTxt">实付款 <span class="redTxt">{{confirmDetail.allPrice?'￥'+(confirmDetail.allPrice+confirmDetail.allFreight):''}} {{(confirmDetail.allPrice && confirmDetail.goldCouponNum)?'+':''}} {{confirmDetail.goldCouponNum?confirmDetail.goldCouponNum+'券':''}}</span>
      </p>
    </van-submit-bar>
    <colorBox :color="'#F5F6F7'"></colorBox>
  </div>
</template>
<script type="text/ecmascript-6">
  import {mapGetters} from 'vuex'

  export default {
    methods: {
      goSomePage(type) {
        if (type == 'back') {
          this.$router.back(-1)
        } else if (type == 'choseLocation') {
          this.$router.push({name: type,query:{form:'confirm'}})
        } else {
          this.$router.push({name: type})
        }
      },
      submit() {
        let skus = []
        let confirmDetail = JSON.parse(JSON.stringify(this.confirmDetail))
        confirmDetail.shopProducts.forEach((item) => {
          item.products.forEach((pro) => {
            skus.push({
              num: pro.num,
              skuId: pro.skuId
            })
          })
        })
        let obj = {
          "addressId": confirmDetail.address.id,
          "leavingMessage":confirmDetail.leavingMessage,
          "skus": skus
        }
        if(!confirmDetail.address){
          this.$toast('请选择收货地址')
          return
        }
        this.$ajax('/api/order/submitOrder', obj,
          (res) => {
            let data = res.data
            this.$store.commit('setInfo',null)
            this.$router.push({name: 'pay', query: {payPrice: data.payPrice,coupon:confirmDetail.goldCouponNum, payNo: data.payNo}})
          },
          (err) => {
            this.$toast(err)
          }, 'upOrder')
      },
    },
    computed: {
      ...mapGetters(['confirmDetail'])
    },
    activated() {
    },
    created() {
      if (!this.confirmDetail) {
        this.$toast('订单有误，请重新下单')
        this.$router.push({name:'payFail',query:{from:'myOrder'}})
      }
    },
    watch: {
      $route(to, from) {
        if (to.name == 'myCart') {
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

            img {
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

  .noLocation {
    line-height: 1rem;
    text-align: center;
    background: #fff;

    i {
      line-height: 1rem;
      vertical-align: middle;
      float: right;
    }
  }
</style>
