<template>
  <div class="messageWarp">
    <van-nav-bar
      title="评价"
      left-arrow
      @click-left="goSomePage('back')"
    />
    <div class="strip"></div>
    <div class=""></div>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {}
</script>
<style lang="scss" scoped>
  .warp{
    width: 90%;
    margin:0 auto;
  }
  .serviceMessage{
    background: #fff;
    display: flex;
    padding: .25rem;
    margin-top: .2rem;
    border-radius: .15rem;
    .avatar{
      flex:1rem 0 0;
      height: 1rem;
      text-align: center;
      background: red;
      margin-right: .2rem;
      border-radius: .1rem;
      i{
        line-height: 1rem;
      }
      &.blue{
        background: repeating-linear-gradient(180deg,rgb(84,85,233), rgb(20,44,127));
      }
      &.green{
        background: repeating-linear-gradient(470deg, #4febea -30%, #1faa29);

      }
      &.red{
        background: repeating-linear-gradient(180deg,rgb(247,126,34), rgb(248,47,6));
      }
    }
    .txt{
      flex: 1;    overflow: hidden;

      .title{
        font-size: 17px;
        line-height: .5rem;
        color: rgba(0,0,0,0.8);
      }
      .des{
        line-height: .44rem;
        font-size: 14px;
        color: rgba(0,0,0,0.6);
        margin-top: .05rem;
      }
    }
  }
</style>
