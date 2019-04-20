<template>
  <div class="myWallet">
    <van-nav-bar
      title="我的钱包"
      right-text="账单"
      left-arrow
      @click-left="goBack()"
      @click-right="goBill()"
    />
    <van-tabs v-model="active">
      <van-tab title="普通账户">
        <div class="strip"></div>
        <div class="member-user">
          <div class="topWarp" @click="goSomePage('userCenter')">
            <p class="userCenter">9999元</p>
            <p class="name">当前收益</p>
          </div>
          <div class="meberBottom">
            <div class="btns">
              <div class="btn" @click="goSomePage('wallet')">
                <van-icon name="https://b.yzcdn.cn/vant/icon-demo-1126.png" />
                <p>充值</p>
              </div>
              <div class="btn">
                <van-icon name="https://b.yzcdn.cn/vant/icon-demo-1126.png" />
                <p>提现</p>
              </div>
              <div class="btn">
                <van-icon name="https://b.yzcdn.cn/vant/icon-demo-1126.png" />
                <p>冻结</p>
              </div>
            </div>
          </div>
        </div>
        <van-cell-group class="warp">
          <van-cell title="银行卡" to="backCard" is-link/>
          <van-cell title="支付密码" is-link to="payType"/>
        </van-cell-group>
      </van-tab>
      <van-tab title="金/银券账户">
        <div class="strip"></div>
        <div class="section">
          <div class="topWarp">
            <div class="top gold">
              <p class="title">金券数量</p>
              <p class="number">1800000</p>
            </div>
          </div>
          <div class="bottomWarp">
            <span style="background:rgb(213,91,54)">转账</span>
            <span style="background:rgb(213,91,54)">买入</span>
            <span style="background: rgb(195,156,77)">卖出</span>
            <span style="background: rgb(83,199,87)">兑冲</span>
          </div>
        </div>
        <div class="section yin">
          <div class="topWarp">
            <div class="top grey">
              <p class="title">银券数量</p>
              <p class="number">1800000</p>
            </div>
            <div class="top grey">
              <p class="title">可用银券数量</p>
              <p class="number">1800000</p>
            </div>
          </div>
          <div class="bottomWarp" style=" justify-content:center;">
            <span style="background:rgb(213,91,54);margin-right: .4rem">释放</span>
            <span style="background: rgb(83,199,87)">兑冲</span>
          </div>
        </div>

        <van-cell-group class="warp" style="margin-top: .2rem">
          <van-cell title="通证交易">
            <div class="bottomWarp noH" style=" justify-content:center;">
              <span style="background:rgb(213,91,54);margin-right: .4rem">释放</span>
              <span style="background: rgb(83,199,87)">兑冲</span>
            </div>
          </van-cell>
          <van-cell title="自由买卖">
            <div class="bottomWarp noH" style=" justify-content:center;">
              <span style="background:rgb(213,91,54);margin-right: .4rem">释放</span>
              <span style="background: rgb(83,199,87)">兑冲</span>
            </div>
          </van-cell>
        </van-cell-group>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        active:0
      }
    },
    methods: {
      // 数据初始化
      innitData () {
      },
      // 返回上一页
      goBack () {
        this.$router.back(-1)
      },
      // 去账单
      goBill () {
        this.$router.push({name: 'bill'})
      }
    },
    computed: {
    }
  }
</script>

<style scoped lang="scss">
  .member-user {
    width: 100%;
    height:3rem;
    background: repeating-linear-gradient(180deg,rgb(247,126,34), rgb(248,47,6));
    position: relative;
    border-radius: 0 0 .2rem .2rem;
    .topWarp{
      text-align: center;
      padding: .3rem .7rem;
      color: #fff;
      font-weight: 600;
      .userCenter{
        font-size: 16px;
        margin-bottom: .3rem;
      }
      .name{
        font-size: 15px;
      }
    }
    .meberBottom{
      width: 95%;
      left:50%;
      top:2rem;
      position: absolute;
      background: #fff;
      transform: translateX(-50%);
      border-radius: .1rem;
      text-align: center;
      box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
      .imgWarp{
        padding: .15rem;
        width: 1.2rem;
        height: 1.2rem;
        position: absolute;
        left: 50%;
        top:.5rem;
        background: #fff;
        border-radius: 50%;
        transform: translate(-50%,-50%);
        img{
          width: 100%;
          height: 100%;
        }
      }
      .shopName{
        margin-top: 1.3rem;
        font-size: 15px;
        margin-bottom: .1rem;
      }
      .fid{
        font-size: 13px;
        color: rgba(0,0,0,0.6);
      }
      .btns{
        display: flex;
        padding:.2rem .85rem .3rem;
        justify-content:space-between;
        .btn{
          flex:1.1rem 0 0;
          height:1.1rem;
          i{
            display:block;
            width: .6rem;
            height: .6rem;
            margin: .1rem auto;
          }
        }
      }
    }
  }
  .warp{
    width: 95%;
    background: none;
    margin: 0 auto;
    margin-top: 1rem;
    .van-cell{
      border-radius: .2rem;
      background: #fff;
      margin-bottom: .2rem;
      line-height:.7rem;

      box-sizing: border-box;
      i{
        line-height:.7rem;
      }
    }

  }
  .strip{
    height:.2rem;
    background: #fff;
  }
  .section{
    width: 95%;
    margin: 0 auto;
    border-radius: .2rem;
    margin-top: .2rem;
    overflow: hidden;
    background:url("/static/gold.png")no-repeat;
    background-position:center center;
    background-size: 100% 100%;
    &.yin{
      background-image: url("/static/yin.png")!important;
    }
    .topWarp{
      display: flex;
      text-align: center;
      .top{
        flex: 1;
        line-height: 1;
        .title{
          padding: .45rem 0 .25rem;
          font-size: 15px;
          font-weight: 600;
        }
        .number{
          font-size: 22px;
          font-weight: 600;
          padding-bottom: .45rem;
        }
      }
    }
  }
  .bottomWarp{
    background: rgba(255,255,255,0.4);
    height:1rem;
    /*padding: 0 .3rem;*/
    display: flex;
    padding: 0 .6rem;
    justify-content: space-between;
    align-items: center;
    span{
      flex: 1.2rem 0 0;
      line-height: .55rem;
      height: .55rem;
      text-align: center;
      border-radius: .2rem;
      color: #fff;
    }
  }
  .noH{
    height: auto;
  }
  .gold{
    color:rgb(180,134,46);
  }
  .grey{
    color:rgb(80,80,80);
  }
</style>
