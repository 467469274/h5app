<template>
  <div class="fire">
    <van-nav-bar title="转账记录"
                 left-arrow
                 class="nav"
                 @click-left="goSomePage('back')"
    >
    </van-nav-bar>
    <div class="inputList">
      <div class="inputItem">
        <span class="hasBorder">转入方</span>
        <span class="hasBorder">金额</span>
        <span>日期</span>
      </div>
      <div class="scolle">
        <div class="inputItem list" v-for="item in list">
          <span>{{item.phone}}</span>
          <span class="redTxt">{{item.gold}}</span>
          <span class="sl">{{item.createTime}}</span>
        </div>
      </div>
    </div>
    <colorBox :color="'#F5F6F7'"></colorBox>
  </div>
</template>

<script>
  export default {
    name: 'zc',
    data () {
      return {
        list:[]
      }
    },
    created(){
      this.$ajax('/api/mine/interRecords',
        {
        },
        (res)=>{
        this.list = res.data
        },
        (err)=>{
          console.log(err)
        },
        'post')
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
