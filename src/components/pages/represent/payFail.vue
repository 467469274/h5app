<template>
  <div class="sexWarp">
    <van-nav-bar
      title="支付结果"
      left-arrow
    />
    <div class="warp">
        <p class="paySuccessText">支付失败，重新支付吧！</p>
        <p class="payJump">
            <a href="">查看订单</a>
            <a href="" class="look">返回首页</a>
        </p>
    </div>
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
  
  .warp{
     position:absolute;
     top:1.1rem;
     left:0;
     right:0;
     bottom:0;
     background:url('../../../assets/images/gantanhao2x.png') no-repeat center 1.4rem, #fff;
    .paySuccessText{
        margin:3rem 0 1rem 0;
        font-size:15px;
        text-align:center;
    }
    .payJump{
       
        margin:0 auto;
        width:80%;
        background:red;
        a{
            float:left;
            display:block;
            width:1.8rem!important;
            height:0.7rem!important;
            background:#FC3100;
            border-radius:0.1rem;
            font-size:12px;
            line-height:0.7rem;
            text-align:center;
            color:#fff;
            box-sizing:border-box;
        }
        .look{
           float:right;
            color:#FE715B;
             border:1px solid #FE715B;
             background:#fff;

        }
    }
  }
  
  
</style>
