<template>
  <div class="fire">
    <van-nav-bar title="记录"
                 left-arrow
                 class="nav"
                 @click-left="goSomePage('back')"
    >
    </van-nav-bar>
    <van-tabs v-model="active">
      <van-tab title="钱包明细"></van-tab>
      <van-tab title="转入记录"></van-tab>
      <van-tab title="转出记录"></van-tab>
    </van-tabs>
    <div class="inputList">
      <div class="scolle">
        <div class="inputItem list" v-for="item in list">
          <div class="cell">
            <div>
              <p class="descript">{{item.description}}</p>
              <p class="creat">{{item.createTime}}</p>
            </div>
            <div class="right" :class="{'red':item.type == 1}">
              {{item.type==1?'+':'-'}}   {{item.money}}
            </div>
          </div>
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
  $colorG: rgba(0, 0, 0, 0.6);
  .nav{
    box-shadow: 0.05rem 0.05rem 0.1rem rgba(0,0,0,0.1);

  }
  .inputList{
    background: #fff;
    .cell {
      display: flex;
      span {
        flex: 1.5rem 0 0;
        font-size: 15px;
        color: $colorG;
      }
      input {
        flex: 1;
        text-align: right;
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
