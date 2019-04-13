<template>
  <div class="sexWarp">
    <van-nav-bar
      title="添加银行卡"
      left-arrow
      @click-left="goSomePage('back')"
    />
    <van-radio-group v-model="radio">
      <van-cell-group>
        <van-cell title="招商银行" clickable @click="radio = '1'">
          <van-radio name="1" checked-color="red" />
        </van-cell>
        <van-cell title="工业银行" @click="radio = '2'">
          <van-radio name="2" checked-color="red" />
        </van-cell>
        <van-cell title="农业银行" @click="radio = '2'">
          <van-radio name="2" checked-color="red" />
        </van-cell>
        <van-cell title="建设银行" @click="radio = '2'">
          <van-radio name="2" checked-color="red" />
        </van-cell>
      </van-cell-group>
    </van-radio-group>
    <div class="sure" @click="goSomePage('addCart')">确定</div>
  </div>
</template>

<script>
  export default {
    name: "sex",
    data(){
      return{
        radio:1
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
    }
  }
</script>

<style scoped lang="scss">
  .van-cell{
    line-height: 1rem;
  }
  .sure{
    background: #D3412C;
    color: #fff;
    text-align: center;
    line-height: 1rem;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    font-size: 16px;
  }
</style>
