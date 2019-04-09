<template>
  <div class="fire">
    <van-nav-bar title="加入众筹"
                 left-arrow
                 class="nav"
                 @click-left="goSomePage('back')"
    >
    </van-nav-bar>
    <div class="inputList">
      <div class="inputItem">姓名 <span><input type="text" placeholder="请输入姓名"></span></div>
    </div>
    <div class="inputList">
      <div class="inputItem">手机号 <span><input type="text" placeholder="请输入手机号"></span></div>
    </div>
    <div class="inputList">
      <div class="inputItem">投入金券 <span><input type="number" placeholder="请输入数量"></span></div>
    </div>
    <div class="fireBtn" @click="goSomePage('add')">加入</div>
  </div>
</template>

<script>
  export default {
    name: 'raiseFire',
    data () {
      return {
        value: ''
      }
    },
    methods: {
      goSomePage (type) {
        if (type == 'back') {
          window.history.go(-1)
        } else if (type == 'my') {
          this.$router.push({name: 'myraise'})
        } else {
          this.$router.push({name: 'raiseFire'})
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  .nav{
    box-shadow: 0.05rem 0.05rem 0.1rem rgba(0,0,0,0.1);

  }
  .inputList{
    background: #fff;
    .inputItem{
      font-size: 17px;
      line-height:1.2rem;
      color:rgba(0,0,0,.6);
      padding: 0 .2rem;
      border-bottom:rgba(0,0,0,.3) 1px solid;
      &.moreInput{
        input{
          width:1rem;
          margin: 0 10px;
        }
      }
      span{
        float: right;
        text-align: right;
        input{
          outline: none;
          border: none;
          text-align: right;
          height:.9rem;
        }
      }
    }
  }

  .fireBtn{
    background: rgb(30,153,75);
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
