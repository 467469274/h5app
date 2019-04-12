<template>
  <div class="sexWarp">
    <van-nav-bar
      title="支付密码设置"
      left-arrow
      @click-left="goSomePage('back')"
    />
  </div>
</template>

<script>
  export default {
    name: "forget",
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
