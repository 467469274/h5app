<template>
  <div>
    <div class="bottom" v-if="!needPhone">
      <input type="text" placeholder="请输入验证码" />
      <span class="btn">获取验证码</span>
    </div>
    <!--<div class=""></div>-->
  </div>
</template>
<script type="text/ecmascript-6">
    export default {
      props:['needPhone']
    }
</script>
<style lang="scss" scoped>
  .bottom{
    display: flex;
    input{
      flex:1;
      height: .88rem;
      border: 1px solid #ccc;
      margin-right: .3rem;
      border-radius: .1rem;
      padding: 0 .3rem;
    }
    .btn{
      flex:2.6rem 0 0;
      height: .88rem;
      line-height: .88rem;
      text-align: center;
      background: rgb(216,218,219);
      color: #fff;
      border-radius: .1rem;
    }
  }
</style>
