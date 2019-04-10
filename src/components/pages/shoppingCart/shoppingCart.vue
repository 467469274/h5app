<template>
  <div class="shoppingCart">
    <div class="nav">
      <van-nav-bar
        title="购物车"
        left-arrow
        :right-text="rightText?'编辑':'完成'"
        @click-right='navRight'
        @click-left="goBack"
      />
    </div>
  </div>
</template>

<script>
export default {
  components: {
  },
  data () {
    return {
      rightText:true
    }
  },
  computed: {
  },
  watch: {
  },
  created () {
  },
  mounted () {
  },
  activated () {
  },
  filters: {
  },
  methods: {
    goBack () {
      this.$router.back(-1)
    },
    navRight(){

    }
  }
}
</script>

<style scoped lang="scss">
.shoppingCart {
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  .list {
    flex: 1;
    overflow: hidden;
    overflow-y: auto;
    margin-bottom: 1rem;
    .isEmpty {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: .1rem 0;
      background-color: #fff;
      span {
        font-size: .32rem;
        padding: 0 .2rem;
        color: #666;
      }
    }
    .recommend {
      width: 100%;
      height: auto;
      .recommend-title {
        text-align: center;
        font-size: .32rem;
        color: #ff4500;
        margin: .2rem 0;
      }
      .recommend-list {
        display: flex;
        flex-flow: wrap;
        box-sizing: border-box;
        background-color: #fff;
        .recommend-list-item {
          flex: 0 0 50%;
          box-sizing: border-box;
          border-bottom: 1PX solid #666;
          &:nth-child(odd) {
            border-right: 1PX solid #666;
          }
        }
      }
    }
  }
  .cart-list {
    width: 100%;
    height: auto;
    overflow: hidden;
    overflow-y: auto;
  }
  .cart-item {
    display: flex;
    align-items: center;
    box-sizing: border-box;
    padding: 0 .1rem;
    background-color: #fff;
    // height: auto;
    &:not(:last-child) {
      border-bottom: 1PX solid #666;
    }
    .goods-item {
      flex: 1;
      margin-left: .1rem;
      .goods-name {
        padding: .2rem .1rem;
        line-height: .32rem;
      }
      .goods-price {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        justify-content: space-around;
        span {
          &:first-child {
            color: #ff4500;
            font-size: .32rem;
          }
          &:nth-child(2) {
            color: #999;
          }
        }
      }
    }
  }
  .submitCheck {
    padding-left: .1rem;
  }
}
</style>
