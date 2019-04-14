<template>
  <div>
    <div class="bottom" v-if="!needPhone">
      <input type="text" placeholder="请输入验证码" />
      <span class="btn">获取验证码</span>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
    export default {
      props:['needPhone']
    }
</script>
<style lang="scss" scoped>
  .bottom{
      margin:0.2rem 0;
    display: flex;
    input{
      flex:1.2rem;
      height: .88rem;
      border: 1px solid #ccc;
      margin-right: .3rem;
      border-radius: .1rem;
      padding: 0 .3rem;
    }
    .btn{
      flex:1;
      height: .88rem;
      line-height: .88rem;
      text-align: center;
      background: #F1B23E;
      color: #fff;
      border-radius: .1rem;
    }
  }
</style>
