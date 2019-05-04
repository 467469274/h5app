<template>
  <div class="messageWarp">
    <van-nav-bar
      title="字体大小设置"
      right-text="确定"
      left-arrow
      @click-left="onClickRight"
      @click-right="onClickRight"
    />

    <van-radio-group v-model="radio">
      <van-cell-group>
        <van-cell title="小" clickable @click="radio = '1'">
          <van-radio name="1" checked-color="red" />
        </van-cell>
        <van-cell title="标准" @click="radio = '2'">
          <van-radio name="2" checked-color="red" />
        </van-cell>
        <van-cell title="大" @click="radio = '3'">
          <van-radio name="3" checked-color="red" />
        </van-cell>
        <van-cell title="超大" @click="radio = '4'">
          <van-radio name="4" checked-color="red" />
        </van-cell>
        <van-cell title="特大" @click="radio = '5'">
          <van-radio name="5" checked-color="red" />
        </van-cell>
      </van-cell-group>
    </van-radio-group>
    <colorBox :color="'#F5F6F7'"></colorBox>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    data(){
      return{
        radio:1
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
  .input{
    border-radius: .2rem;
    width: 95%;
    margin: 0 auto;
    margin-top: .2rem;
  }
  .van-cell-group{
    background: none;
  }
</style>
