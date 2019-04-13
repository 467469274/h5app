<template>
  <div class="sexWarp">
    <van-nav-bar
      title="验证手机号"
      left-arrow
      @click-left="goSomePage('back')"
    />
    <div class="validationWarp">
      <p class="title">绑定银行卡需要短信验证，验证码已发送至130****1231231,请按提示操作</p>
      <getCode></getCode>
    </div>
    <div class="sure" @click="goSomePage('validationPhone')">下一步</div>
  </div>
</template>

<script>
  import getCode from '../../common/getCode.vue'
  export default {
    name: "sex",
    data(){
      return{
        radio:1,
        checked:true
      }
    },
    methods:{
      goSomePage (type) {
        if(type == 'back'){
          this.$router.back(-1)

        }else{
          this.$router.push({name: type})
        }
      }
    },
    components:{
      getCode
    }
  }
</script>

<style scoped lang="scss">
  $colorG: rgba(0, 0, 0, 0.6);
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
  .validationWarp{
    background: #fff;
    margin-top: .2rem;
    padding: .35rem;
    font-size: 14px;
    line-height: 1.4;
    color:  rgba(0, 0, 0, 0.4);
    .title{
      margin-bottom: .5rem;
    }
  }
</style>
