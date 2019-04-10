<template>
  <div class="confirm">
    <van-nav-bar
      title="确认订单"
      left-arrow
      @click-left="goSomePage('back')"
    />
    <div class="confirmWarp">
      <div class="location" @click="goSomePage('choseLocation')">
        <p class="title">
          <span class="name">张大龙</span>
          <span class="phone">18610904457</span>
        </p>
        <div class="detailLocation">
          <span class="isDefaule">默认</span>
          <span class="local">山东市淄博市调往第九期我我哦掉全局</span>
          <van-icon name="arrow" class="arrow" size=".5rem" color="rgba(0,0,0,0.6)"/>
        </div>
      </div>
    </div>
    <div class="goodsList">
      <div class="goodsItem" v-for="item in 30">
        <p class="shopName">专卖店</p>
        <div class="goodsInfo">
          <div class="avatar"></div>
          <div class="goodsDetail">
            <p class="sl goodsName">商品面唱个歌商品面唱个歌商品面唱个歌商品面唱个歌商品面唱个歌商品面唱个歌</p>
            <p class="sku">
              规格 <span>浓香型</span>
            </p>
            <p class="other">
              <span class="redColor">￥250+300券</span>
              <span class="num">x1</span>
            </p>
          </div>
        </div>
        <div class="goodsBottom">
          <div class="bottomTxt">
            <span>买家留言</span>
            <span class="right">多块钱我ID强无敌获取文档</span>
          </div>
          <div class="bottomTxt">
            <span>运费</span>
            <span class="right red">￥20.0</span>
          </div>
          <div class="bottomTxt">
            <span>返现</span>
            <span class="right red">￥20.0</span>
          </div>
          <div class="bottomTxt">
            <span>总金额</span>
            <span class="right red">￥20.0</span>
          </div>
        </div>
      </div>
    </div>
    <van-submit-bar
      label="实付款"
      button-text="提交订单"
    >
      <p class="payTxt">实付款 <span class="redTxt">￥250 + 300券</span></p>
    </van-submit-bar>
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
</style>
