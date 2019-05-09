<template>
  <div class="sexWarp">
    <van-nav-bar
      title="安全设置"
      left-arrow
      @click-left="goSomePage('back')"
    />
    <van-radio-group v-model="radio">
      <van-cell-group>
        <van-cell title="修改密码" @click="goSomePage('forgetpassword',{type:1})">
          <van-icon color="rgba(0,0,0,0.5)" name="arrow"/>
        </van-cell>
      </van-cell-group>
    </van-radio-group>
    <colorBox :color="'#F5F6F7'"></colorBox>
  </div>
</template>

<script>
  export default {
    name: "sex",
    data() {
      return {
        radio: 1,type:'修改支付密码'
      }
    },
    methods: {
      goSomePage(type,query) {
        if (type == 'back') {
          this.$router.back(-1)
        } else {
          this.$router.push({name: type,query:query})
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
