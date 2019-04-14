<template>
  <div class="fire">
    <van-nav-bar :title="title"
                 left-arrow
                 class="nav"
                 @click-left="goSomePage('back')"
    >
    </van-nav-bar>
    <div class="inputList">
      <div class="inputItem" style="border: none;">
        <span class="hasBorder">转入方</span>
        <span class="hasBorder">金额</span>
        <span class="hasBorder">日期</span>
      </div>
      <div class="scolle">
        <div class="inputItem list">
          <span>20000</span>
          <span class="redTxt">555</span>
          <span>2019-04-08</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'raiseFire',
    data () {
      return {
      }
    },
    methods: {
      goSomePage (type) {
        if (type == 'back') {
          this.$router.back(-1)
        } else if (type == 'my') {
          this.$router.push({name: 'myraise'})
        } else {
          this.$router.push({name: 'raiseFire'})
        }
      }
    },
    computed:{
      title(){
        return '转入日期'
      }
    }
  }
</script>

<style scoped lang="scss">
  .fire{
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: #fff;
  }
  .nav{
    box-shadow: 0.05rem 0.05rem 0.1rem rgba(0,0,0,0.1);

  }
  .inputList{
    background: #fff;
    .inputItem{
      background: #fff;
      display: flex;
      font-size: 17px;
      padding:.4rem 0;
      color:rgba(0,0,0,.6);
      border-bottom:rgba(0,0,0,.3) 1px solid;
      text-align: center;
      span{
        flex: 1;
      }
      .hasBorder{
        border-right: 1px solid rgba(0,0,0,0.4);
      }
      &.list{
        font-size:13px;
        .redTxt{
          font-weight: 900;
          color: red;
        }
      }
    }
  }
  .scolle{
    position: fixed;
    left: 0;
    top:2rem;
    width: 100%;
    bottom: 0;
    overflow-y: scroll;
  }
</style>
