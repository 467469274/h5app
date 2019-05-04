<template>
  <div class="fire">
    <van-nav-bar title="入账明细"
                 left-arrow
                 class="nav"
                 @click-left="goSomePage('back')"
    >
    </van-nav-bar>
    <div class="inputList">
      <div class="inputItem" style="border: none;">
        <span class="hasBorder">众筹数量</span>
        <span class="hasBorder">收入</span>
        <span class="hasBorder">备注</span>
        <span class="hasBorder">所占比例</span>
        <span>加入日期</span>
      </div>
      <div class="scolle">
        <div class="inputItem list" v-for="item in list">
          <span>{{item.gold}}</span>
          <span class="redTxt">{{item.money}}</span>
          <span>{{item.remarks}}</span>
          <span>{{item.recordId}}%</span>
          <span>{{item.createTime}}</span>
        </div>
      </div>
    </div>
    <colorBox :color="'#F5F6F7'"></colorBox>
  </div>
</template>

<script>
  export default {
    name: 'raiseFire',
    data () {
      return {
        list:[]
      }
    },
    created(){
      this.$ajax('/api/tick/enterRecords',
        {
          tickId:this.$route.query.id
        },
        (res)=>{
        this.list = res.data;
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
