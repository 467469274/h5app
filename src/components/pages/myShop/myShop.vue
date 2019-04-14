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
      <p class="count">共0单</p>
      <p class="num">0</p>
      <p class="chinese">周总交易额</p>
      <p class="other">
        <span><van-icon name="bill-o" size=".3rem"/>成功订单<van-icon style="display: none" name="gold-coin-o"
                                                                  size=".3rem"/></span>
        <span @click="goSomePage('earnings')"><van-icon name="gold-coin-o" size=".3rem"/>收益详情<van-icon style="display: none" name="gold-coin-o"
                                                                       size=".3rem"/></span>
      </p>
    </div>
    <div class="middle">
      <div class="btns">
        <div class="btn" @click="goSomePage('todayOrder')">
          <van-icon name="https://b.yzcdn.cn/vant/icon-demo-1126.png"/>
          <p>今日订单</p>
        </div>
        <div class="btn">
          <van-icon name="https://b.yzcdn.cn/vant/icon-demo-1126.png"/>
          <p>全部订单</p>
        </div>
        <div class="btn" @click="goSomePage('managemant')">
          <van-icon name="https://b.yzcdn.cn/vant/icon-demo-1126.png"/>
          <p>商品管理</p>
        </div>
        <div class="btn" @click="goSomePage('shopevaluate')">
          <van-icon name="https://b.yzcdn.cn/vant/icon-demo-1126.png"/>
          <p>用户评价</p>
        </div>
      </div>
    </div>
    <p class="title">待处理订单</p>
    <div class="orderList">
      <div class="order">
        <p class="text">
          <span class="name">订单编号</span>
          <span class="orderNum">123123123123123</span>
          <span class="sj">2019年04月13日</span>
        </p>
        <p class="text" style="margin-bottom: .2rem">
          <span class="name">配送地址</span>
          <span class="orderNum">soID噢IQ见我都</span>
        </p>
        <p class="text">
          <span class="name" style="visibility: hidden">配送地址</span>
          <span class="orderNum">soID噢IQ见我都</span>
        </p>
        <p class="info">
          <span class="name">共4件 ￥90</span>
          <span class="type">已支付</span>
        </p>
        <div class="imgs">
          <div class="commodityWarp">
            <div class="imgWarp"
                 style="background: url('https://ss3.baidu.com/-rVXeDTa2gU2pMbgoY3K/it/u=1488861817,1113726833&fm=202')"></div>
            <p class="sl">大青蛙调取殴打我</p>
          </div>
          <div class="commodityWarp">
            <div class="imgWarp"
                 style="background: url('https://ss3.baidu.com/-rVXeDTa2gU2pMbgoY3K/it/u=1488861817,1113726833&fm=202')"></div>
            <p class="sl">大青蛙调取殴打我</p>
          </div>
          <div class="commodityWarp">
            <div class="imgWarp"
                 style="background: url('https://ss3.baidu.com/-rVXeDTa2gU2pMbgoY3K/it/u=1488861817,1113726833&fm=202')"></div>
            <p class="sl">大青蛙调取殴打我</p>
          </div>
          <div class="commodityWarp">
            <div class="imgWarp"
                 style="background: url('https://ss3.baidu.com/-rVXeDTa2gU2pMbgoY3K/it/u=1488861817,1113726833&fm=202')"></div>
            <p class="sl">大青蛙调取殴打我</p>
          </div>
          <div class="commodityWarp">
            <div class="imgWarp"
                 style="background: url('https://ss3.baidu.com/-rVXeDTa2gU2pMbgoY3K/it/u=1488861817,1113726833&fm=202')"></div>
            <p class="sl">大青蛙调取殴打我</p>
          </div>
          <div class="commodityWarp">
            <div class="imgWarp"
                 style="background: url('https://ss3.baidu.com/-rVXeDTa2gU2pMbgoY3K/it/u=1488861817,1113726833&fm=202')"></div>
            <p class="sl">大青蛙调取殴打我</p>
          </div>
        </div>
        <div class="shopBtns">
          <span class="bgr">立即接单</span>
          <span class="bgy" @click="goSomePage('cencelOrder')">取消订单</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    methods: {
      goSomePage(type) {
        if (type == 'back') {
          this.$router.back(-1)
        } else {
          this.$router.push({name: type})
        }
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
        i {
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
