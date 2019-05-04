<template>
  <div class="messageWarp">
    <van-nav-bar
      title="消息提醒"
      left-arrow
      @click-left="onClickRight"
    />
    <div class="strip"></div>
    <van-cell-group>
      <van-switch-cell v-model="checked" size=".4rem" title="接收新消息通知" />
    </van-cell-group>
    <div class="strip"></div>
    <van-cell-group>
      <van-switch-cell v-model="checkeda" size=".4rem" title="声音" />
    </van-cell-group>
    <van-cell-group>
      <van-switch-cell v-model="checkedb" size=".4rem" title="震动" />
    </van-cell-group>
    <colorBox :color="'#F5F6F7'"></colorBox>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    data(){
      return{
        checked:false,
        checkeda:false,
        checkedb:false,
      }
    },
    methods:{
      onClickRight(){
        this.$router.back(-1)

      }
    }
  }
</script>
<style lang="scss" scoped>
  .van-cell__value{
    display: inline-block;
  }
</style>
