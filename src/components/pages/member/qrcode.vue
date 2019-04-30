<template>
  <div class="locations">
    <van-nav-bar
      title="吸粉二维码"
      left-arrow
      @click-left="goSomePage('back')"
    />
    <img :src="qrcode">
    <!--<img src="/static/qrcode.jpeg">-->
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    data(){
      return{
        qrcode:this.$route.params.url
      }
    },
    created(){
      if(!this.$route.params.url){
        this.$toast('二维码有误')
        this.$router.back(-1)
      }
    }
  }
</script>
<style scoped lang="scss">
  $colorG: rgba(0, 0, 0, 0.6);
  .locations{
    background: #fff;
  }
  img{
    width: 70%;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
  }
</style>
