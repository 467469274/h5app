<template>
  <div class="fire">
    <van-nav-bar title="发起众筹"
                 left-arrow
                 class="nav"
                 @click-left="goSomePage('back')"
    >
    </van-nav-bar>
    <div class="inputList">
      <div class="inputItem">众筹名称 <span><input type="text" v-model="tickName" placeholder="请填写"></span></div>
    </div>
    <div class="inputList">
      <div class="inputItem">众筹券种 <span>金券</span></div>
    </div>
    <div class="inputList">
      <div class="inputItem moreInput">券种价格 <span><input type="text" v-model="gold" placeholder="请填写">金    =<input v-model="silver" type="text" placeholder="请填写">银</span></div>
    </div>
    <div class="inputList">
      <div class="inputItem">众筹规模 <span><input v-model="dimensions" type="text" placeholder="请填写"></span></div>
    </div>
    <div class="inputList">
      <div class="inputItem">限量 <span><input v-model="quantity" type="text" placeholder="请填写"></span></div>
    </div>
    <div class="inputList">
      <div class="inputItem">众筹介绍 <span><input v-model="recommend" type="text" placeholder="请填写"></span></div>
    </div>
    <div class="fireBtn" @click="save">发布</div>
  </div>
</template>

<script>
export default {
  name: 'raiseFire',
  data () {
    return {
      tickName:'',
      gold:'',
      silver:'',
      dimensions:'',
      quantity:'',
      recommend:'',
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
    },
    save(){
//      POST
      this.$ajax('/api/tick/save',
        {
          coupon:1,
          tickName:this.tickName,
          gold:this.gold,
          silver:this.silver,
          dimensions:this.dimensions,
          quantity:this.quantity,
          recommend:this.recommend,
        },
        (res)=>{
          this.$toast('发布成功')
          this.$router.push({name:'allRaise'})
        },
        (err)=>{
          this.$toast(err)
        },
        'post'
      )
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
    background: rgb(247,24,9);
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
