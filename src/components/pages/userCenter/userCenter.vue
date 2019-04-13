<template>
  <div class="locations">
    <van-nav-bar
      title="个人信息"
      right-text="编辑"
      left-arrow
      @click-left="goSomePage('back')"
    />
    <div class="warp">
      <van-cell class="hasImg" title="头像" is-link>
        <van-uploader :after-read="onRead">
          <img src="../../../assets/images/default-head.png" alt="">
        </van-uploader>
      </van-cell>
      <van-cell>
        <div class="cell"><span>昵称:</span><input type="text" class="input"/></div>
      </van-cell>
      <van-cell>
        <div class="cell"><span>手机号:</span><input type="text" class="input"/></div>
      </van-cell>
      <van-cell title="性别"to="sex" is-link>女</van-cell>
      <van-cell title="收货地址" to="locations" is-link />
      <van-cell title="吸粉二维码" is-link />
      <van-cell title="我的邀请码">123123</van-cell>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    data(){
      return{
        checked:true
      }
    },
    methods: {
      onRead(){},
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
<style scoped lang="scss">
  $colorG: rgba(0, 0, 0, 0.6);
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
  .flexss{
    display: flex;
    align-items: center;
    .txt{
      flex: 1;
      p{
        font-size: 10px;
        color: rgba(0,0,0,0.4);
      }
    }
  }
  .saveBtn{
    background: rgb(259,159,10);
    text-align: center;
    position:fixed;
    left: 0;
    bottom: 0;
    color: #fff;
    line-height:1rem;
    width:100%;
    font-size: 15px;
  }
</style>
