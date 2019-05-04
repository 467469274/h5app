<template>
  <div class="myShopWarp">
    <van-nav-bar
      title="收益"
      left-arrow
      @click-left="goSomePage('back')"
    />
    <div class="section">
      <p class="title">本周收益 (券)  <span>共17单</span></p>
      <p class="price">9999</p>
      <div class="flexs">
        <div class="item">
          <p class="itemTitle">交易额</p>
          <p class="number">9999</p>
        </div>
        <div class="item">
          <p class="itemTitle">在线支付</p>
          <p class="number">9999</p>
        </div>
        <div class="item">
          <p class="itemTitle">货到付款</p>
          <p class="number">9999</p>
        </div>
        <div class="item">
          <p class="itemTitle">平台费用</p>
          <p class="number">9999</p>
        </div>
      </div>
    </div>
    <div class="section">
      <p class="title">本月收益 (券)  <span>共17单</span></p>
      <p class="price">9999</p>
      <div class="flexs">
        <div class="item">
          <p class="itemTitle">交易额</p>
          <p class="number">9999</p>
        </div>
        <div class="item">
          <p class="itemTitle">在线支付</p>
          <p class="number">9999</p>
        </div>
        <div class="item">
          <p class="itemTitle">货到付款</p>
          <p class="number">9999</p>
        </div>
        <div class="item">
          <p class="itemTitle">平台费用</p>
          <p class="number">9999</p>
        </div>
      </div>
    </div>
    <div class="section ff">
      <div class="sectionInner">
        <p class="ttle">可用金券</p>
        <p class="num">99999</p>
      </div>
      <div class="sectionInner">
        <div class="sectionInner">
          <p class="ttle">总收入</p>
          <p class="num">99999</p>
        </div>
      </div>
    </div>
    <colorBox :color="'#F5F6F7'"></colorBox>
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
  .section{
    width: 95%;
    margin: 0 auto;
    border-radius: .2rem;
    background: #fff;
    margin-bottom: .2rem;
    padding: .4rem;
    box-sizing: border-box;
    margin-top: .2rem;
    .title{
      font-size: 16px;
      line-height: .3rem;
      margin-bottom: .4rem;
      span{
        font-size: 14px;
        color:rgba(0,0,0,0.5);
        float: right;
      }
    }
    .price{
      font-size: 22px;
      font-weight: 600;
      color:#D5412C;
      margin-bottom: .5rem;
    }
    .flexs{
      display: flex;
      justify-content: space-between;
      .item{
        text-align: center;
        .itemTitle{
          font-size: 14px;
          margin-bottom: .2rem;
          color:rgba(0,0,0,0.7);
        }
        .number{
          font-size: 17px;
          font-weight: 800;
        }
      }
    }
  }
  .ff{
    display:flex;
    .sectionInner{
      text-align: center;
      flex: 1;
      .ttle{
        font-size: 18px;
      }
      .num{
        font-size: 25px;
        font-weight: 600;
        margin-top: .2rem;
      }
      &:last-child{
        border-left: 1px solid #ccc;
      }
    }
  }
</style>
