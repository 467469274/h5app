<template>
  <div class="sexWarp">
    <van-nav-bar
      title="支付密码设置"
      left-arrow
      class="nav"
      @click-left="goSomePage('back')"
    />
    <van-password-input
      :value="value"
      class="changePassWord"
      :info="info"
      @focus="showKeyboard = true"
    />
    <van-number-keyboard
      :show="showKeyboard"
      @input="onInput"
      @delete="onDelete"
      @blur="showKeyboard = false"
    />
  </div>
</template>

<script>
  export default {
    name: "changePassWord",
    data() {
      return {
        value:'',
        showKeyboard:false,
        info:'请输入旧的支付密码以验证身份'
      }
    },
    methods: {
      goSomePage(type) {
        if (type == 'back') {
          this.$router.back(-1)
        } else {
          this.$router.push({name: type})
        }
      },
      onInput(key) {
        this.value = (this.value + key).slice(0, 6);
      },
      onDelete() {
        this.value = this.value.slice(0, this.value.length - 1);
      }
    }
  }
</script>

<style scoped lang="scss">
  .sexWarp{
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: #fff;
    .nav{
      margin-bottom: 1.3rem;
      border-bottom: .2rem solid rgb(231,233,234);
    }
    [class*=van-hairline]::after{
      border:1px solid #ccc;
    }
  }
</style>
