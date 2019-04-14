<template>
  <div class="sexWarp">
    <van-nav-bar
      title="转出"
       right-text="转出记录"
      left-arrow
    />
    <div class="warp">
       <van-cell>
        <div class="cell"><span>对方账户</span><input placeholder="请输入手机号" type="text" class="input"/></div>
      </van-cell>
       <van-cell>
        <div class="cell"><span>转出金额</span><input placeholder="请输入转出金额" type="text" class="input"/></div>
      </van-cell>
       <van-cell>
        <div class="cell"><span>备注说明</span><input placeholder="请填写" type="text" class="input"/></div>
      </van-cell>
       <van-cell>
        <div class="cell"><span>支付密码</span><input placeholder="" type="password" class="input"/></div>
      </van-cell> 
      <van-cell>
        <p class="codeText">转出需要短信确认，请验证手机号135****2321,按提示操作</p>
        <gain-code></gain-code>
      </van-cell> 
    </div>
    <div class="sureConatiner">
        <div class="sure">保存</div>
        <p>提示：转出后无法收回，请确认转账信息</p>
    </div>
  </div>
</template>

<script>

import gainCode from '../../common/gainCode.vue'

  export default {
    name: "sex",
    data(){
      return{
        radio:1,
        checked:true
      }
    },
    methods:{

    },
    components:{
      gainCode
    }
  }
</script>

<style scoped lang="scss">
    $colorG: rgba(0, 0, 0, 0.6);
 .codeText{
    font-size:10px;
    line-height:0.4rem!important;
    color:#AAA;
  }
  .van-cell{
    line-height: 1rem;
  }
  .sureConatiner{
    position: fixed;
    left: 0;
    bottom: 0;
     width: 100%;
     p{
         padding-left:0.2rem;
         margin:0.2rem 0;
         font-size:12px;
         color:#F25C41;
     }
  }
  .sure{
    background: #F1B23E;
    color: #fff;
    text-align: center;
    line-height: 1rem;
   
    width: 100%;
    font-size: 16px;
  }
  .warp{
      padding:0.15rem 0 0 0;
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
  .checkbox{
    .van-checkbox__icon{
      background: pink!important;
    }
  }
</style>
