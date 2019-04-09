<template>
  <div id="app">
    <div class="main">
      <keep-alive>
        <router-view v-if="$route.meta.keepAliveApp" />
      </keep-alive>
      <router-view v-if="!$route.meta.keepAliveApp" />
    </div>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data () {
      return {
      }
    }
  }
</script>

<style lang="scss">
  html,body {
    font-size: .24rem;
  }
  body{
    padding-bottom: 1rem;
  }
  .van-search {
    padding-left: 0;
  }
  .van-cell {
    .van-cell__value {
      display: flex;
      // align-items: center;
      flex-direction: column;
      justify-content: center;
      .van-field__body {
        width: 100%;
      }
    }
  }
  .van-nav-bar__text:active{
    background:none;
  }
  .van-tabbar-item--active,.van-nav-bar .van-icon,.van-nav-bar__text{
    color:rgb(116,117,118)!important;
  }
  .van-nav-bar__left {
    .van-icon, span {
      color:rgb(116,117,118);
    }
  }
  .van-submit-bar {
    position: absolute;
  }
  .van-stepper__minus, .van-stepper__plus {
    width: .6rem;
    height: .4rem;
  }
  .van-stepper__input {
    height:.32rem;
    width: .46rem;
  }
  .van-checkbox__icon--checked .van-icon {
    border-color: orangered;
    background-color: orangered;
  }
  .van-nav-bar__text {
    color:#ff4500;
  }
  .van-card {
    background-color: #fff;
  }
  p{
    margin: 0;
    padding: 0;
  }
</style>
