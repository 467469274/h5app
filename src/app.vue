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
  .sl{text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;}
  $red: rgb(247, 16, 15);

  html,body {
    font-size: .24rem;
    background-color:rgb(232,234,235);
    overflow-x:hidden;
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
    color:rgb(116,117,118);
  }
  .van-nav-bar__left {
    .van-icon, span {
      color:rgb(116,117,118);
    }
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

  .van-nav-bar{
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
  }
  .bgy{
    background: #F1B23E;
  }
  .bgr{
    background: #DE4724!important;
  }
  .sure{
    background: #F1B23E;
    color: #fff;
    text-align: center;
    line-height: 1rem;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    font-size: 16px;
  }
  .strip{
    height: .2rem;
  }
  input{
    border: none;
    outline:0;
    background-color: #fff;
  }
</style>
