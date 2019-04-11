<template>
  <div class="messageWarp">
    <van-nav-bar
      title="消息"
      right-text="忽略全部"
      @click-right="onClickRight"
    />
    <van-tabs v-model="active">
      <van-tab title="通知">
        <div class="serviceMessage"></div>
      </van-tab>
      <van-tab title="公告">内容 2</van-tab>
    </van-tabs>
  </div>
</template>
<script type="text/ecmascript-6">
    export default {}
</script>
<style lang="scss" scoped>
  .filters{
    display: flex;
    text-align: center;
    font-size:13px;
    height: .85rem;
    padding-top: .2rem;
    box-sizing: border-box;
    .item{
      flex: 1;
      position: relative;
      .jt{
        background: url("../../../assets/images/jt.png") no-repeat;
        background-size:100% 100%;
        display: block;
        position: absolute;
        right: 0;
        width: .4rem;
        height: .4rem;
        top: 27%;
        transform: translate(-50%,-50%);
      }
      span{
        padding-bottom:.1rem;
        border-bottom: 2px solid transparent;
        &.active{
          border-color: rgb(246,0,0);
          color: rgb(246,0,0);
        }
      }
    }
  }
</style>
