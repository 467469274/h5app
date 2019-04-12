<template>
  <div class="sexWarp">
    <van-nav-bar
      title="支付密码设置"
      left-arrow
      @click-left="goSomePage('back')"
    />
    <van-radio-group v-model="radio">
      <van-cell-group>
        <van-cell title="修改支付密码" @click="goSomePage('changePassword')">
          <van-icon color="rgba(0,0,0,0.5)" name="arrow"/>
        </van-cell>
        <van-cell title="忘记支付密码" @click="goSomePage('forget')">
          <van-icon color="rgba(0,0,0,0.5)" name="arrow"/>
        </van-cell>
      </van-cell-group>
    </van-radio-group>
  </div>
</template>

<script>
  export default {
    name: "sex",
    data() {
      return {
        radio: 1
      }
    },
    methods: {
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
  .sexWarp{
    color:rgba(0,0,0,0.5)
  }
  .list {
    .item {
      line-height: 1rem;
      background: #fff;
      border-bottom: 1px solid #ccc;
      padding-left: .2rem;
      font-size: 14px;
      color: rgba(0, 0, 0, 0.5);
    }
  }
</style>
