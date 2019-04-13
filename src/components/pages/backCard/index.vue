<template>
  <div class="myWallet">
    <van-nav-bar
      title="银行卡"
      left-arrow
      @click-left="goBack()"
    />
    <div class="cards">
      <div class="card">
        <div class="top">
          <img src="" alt="">
          <div class="text">
            <p class="name">招商银行</p>
            <p class="type">信用卡</p>
          </div>
        </div>
        <p class="cardNum">
          <i>****</i><i>****</i><i>****</i><span>1111</span>
        </p>
      </div>
    </div>
    <p class="addCard" @click="choseType" to="cartInfo">+ 添加银行卡</p>
    <p class="message">暂时还未绑定任何银行卡</p>
  </div>
</template>

<script>
  export default {
    data () {
      return {
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
      },
      // 去账单
      choseType () {
        this.$router.push({name: 'choseType'})
      }
    },
    computed: {
    }
  }
</script>

<style scoped lang="scss">
  .message{
    text-align: center;
    line-height:1.3rem;
    font-size: 16px;
    color: rgba(0,0,0,0.4);
  }
  .addCard{
    width: 95%;
    margin: 0 auto;
    text-align: center;
    line-height: 1rem;
    background: #fff;
    border-radius: .1rem;
    margin-top: .2rem;
    color: #D96A6D;
    font-size: 16px;
    vertical-align: middle;
  }
  .cards{
    width: 95%;
    margin: 0 auto;
    .card{
      height: 3rem;
      border-radius: .1rem;
      margin-top: .2rem;
      .top{
        display: flex;
        padding: .45rem 0 0 .25rem;
        img{
          flex: .8rem 0 0;
          height: .8rem 0 0;
          margin-right: .25rem;
        }
        .text{
          color: #fff;
          .name{
            font-size: 18px;
          }
          .type{
            font-size: 15px;
          }
        }
      }
      .cardNum{
        padding-left: 1.25rem;
        font-size:18px;
        color:rgba(255,255,255,0.6);
        line-height: .55rem;
        margin-top: .45rem;
        i{
          font-style: normal;
          margin-right: .6rem;
        }
        span{
          color:rgba(255,255,255,0.9);
          vertical-align:.06rem;
        }
      }
    }
  }
</style>
