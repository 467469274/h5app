<template>
  <div class="myShopWarp">
    <van-nav-bar
      title="店铺信息"
      right-text="编辑"
      left-arrow
      @click-left="goSomePage('back')"
      @click-right="goSomePage('shopInfo')"
    />
    <div class="shopTop">
      <div class="imgWarp">
        <img src="../../../assets/images/default-head.png">
      </div>
    </div>
    <div class="warp">
      <van-cell>
        <div class="cell"><span>名称</span><input type="text" placeholder="请填写" class="input"/></div>
      </van-cell>
      <van-cell>
        <div class="cell"><span>主营业务</span><input type="text" placeholder="请填写" class="input"/></div>
      </van-cell>
      <van-cell>
        <div class="cell"><span>营业地址</span><input type="text" placeholder="请填写" class="input"/></div>
      </van-cell>
      <van-cell>
        <div class="cell"><span>联系电话</span><input type="text" placeholder="请填写" class="input"/></div>
      </van-cell>
    </div>
    <div class="sure bgr" @click="goSomePage('backCard')">确认并提交材料</div>
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
  .myShopWarp {
    .shopTop {
      width: 100%;
      margin: 0 auto;
      height: 3.7rem;
      background: url("../../../assets/images/WX20190413-234859@2x.png");
      background-size: 100% 100%;
      position: relative;
      .imgWarp{
        padding: .1rem;
        width: 1.2rem;
        height: 1.2rem;
        position: absolute;
        left: 50%;
        top:50%;
        background: #fff;
        border-radius: 50%;
        transform: translate(-50%,-50%);
        img{
          width: 100%;
          height: 100%;
        }
      }
    }

  }

  .warp{
    .hasImg .van-cell__value{
      flex: .9rem 0 0;
      .van-uploader{
        height: .9rem;
      }
    }
    .van-cell{
      border-bottom: 1px solid #ccc;
      line-height: 1rem;
      box-sizing: border-box;
      i{
        line-height: 1rem;
      }
      img{
        width:1rem;
        height:1rem;
        text-align:right;
      }
    }
  }
  .cell {
    display: flex;
    span {
      flex: 1.5rem 0 0;
      font-size: 15px;
      color: $colorG;
    }
    input {
      flex: 1;
      text-align: right;
    }
  }

  .sure{
    background: #F1B23E;
    color: #fff;
    text-align: center;
    line-height: 1rem;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    font-size: 16px;
  }
</style>
