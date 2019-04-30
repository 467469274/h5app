<template>
  <div class="sexWarp">
    <van-nav-bar
      title="到账"
      left-arrow
      @click-left="$router.back(-1)"
    />
    <div class="warp">
        <van-cell>
            <img src="../../../assets/images/1555163037966.jpg" />
            <div class="cell">提交申请已提交，明天到账</div>
        </van-cell>
        <p class="interval"></p>
        <van-cell>
           <p class="cellValue"><span>银行卡</span><span class="weixin">微信</span></p>
        </van-cell>
        <van-cell>
           <p class="cellValue"><span>金额（¥）</span><span class="price">1700</span></p>
        </van-cell>
    </div>
    <div class="sure">完成</div>
  </div>
</template>

<script>
  export default {
    name: "sex",
    data(){
      return{
        radio:1,
        checked:true
      }
    },
    methods:{

    }
  }
</script>

<style scoped lang="scss">
  $colorG: rgba(0, 0, 0, 0.6);
  .van-cell{
    line-height: 1rem;
    img{
        margin:0.3rem auto;
        width:0.5rem;
        height:0.5rem;

    }
  }
  .interval{
      height:0.15rem;
  }
  .sure{
    background: #E62D1A;
    color: #fff;
    text-align: center;
    line-height: 1rem;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    font-size: 16px;
  }
  .warp{
    .hasImg .van-cell__value{
      flex: 1rem 0 0;
      .van-uploader{
        height: 1rem;
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

    font-size: 15px;
    text-align:center;
  }
  .checkbox{
    .van-checkbox__icon{
      background: pink!important;
    }
  }
  .cellValue{
      font-size:14px;
      .weixin{
          float:right;
            font-size:14px;
           color:#325353;
      }
      .price{
          float:right;
            font-size:14px;
           color:#E52514;
      }
  }
</style>
