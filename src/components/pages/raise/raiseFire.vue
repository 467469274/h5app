<template>
  <div class="fire">
    <van-nav-bar title="发起众筹"
                 left-arrow
                 class="nav"
                 @click-left="goSomePage('back')"
    >
    </van-nav-bar>
    <div class="inputList">
      <div class="inputItem">众筹名称 <input type="text" v-model="tickName" placeholder="请填写"/></div>
    </div>
    <div class="inputList">
      <div class="inputItem" style="display:block;line-height: 1.2rem">众筹券种 <span style="float: right">金券</span></div>
    </div>
    <div class="inputList">
      <div class="inputItem moreInput">券种价格
        <div>
          <input type="number"  oninput="value=value.replace(/[^\d]/g,'')" v-model="gold" placeholder="请填写">金=<input v-model="silver" oninput="value=value.replace(/[^\d]/g,'')" type="number" placeholder="请填写">银
        </div>
      </div>
    </div>
    <div class="inputList">
      <div class="inputItem">众筹规模 <input v-model="dimensions" oninput="value=value.replace(/[^\d]/g,'')" type="number" placeholder="请填写"></div>
    </div>
    <div class="inputList">
      <div class="inputItem">限量 <input v-model="quantity" oninput="value=value.replace(/[^\d]/g,'')" type="number" placeholder="请填写"></div>
    </div>
    <div class="inputList">
      <div class="inputItem">众筹介绍 <input v-model="recommend" type="text" placeholder="请填写"></div>
    </div>
    <div class="fireBtn" @click="save">发布</div>
    <colorBox :color="'#F5F6F7'"></colorBox>
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
      if(this.tickName==''){
        this.$toast('请填写众筹名称')
      }else if(this.gold == ''){
        this.$toast('请填写金券比例')
      }else if(this.silver == ''){
        this.$toast('请填写银券比例')
      }else if(this.dimensions == ''){
        this.$toast('请填写众筹规模')
      }else if(this.quantity == ''){
        this.$toast('请填写限购数量')
      }else if(this.recommend == ''){
        this.$toast('请填写众筹介绍')
      }else {
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
            this.$toast('提交成功，请等候审核')
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
      height: 1.2rem;
      color:rgba(0,0,0,.6);
      padding: 0 .2rem;
      border-bottom:rgba(0,0,0,.3) 1px solid;
      display: flex;
      align-items: center;
      input{
        outline: none;
        border: none;
        text-align: right;
        height:.8rem;
        flex: 1;
      }
      div{
        flex: 1;
        text-align: right;
        display: flex;
        align-items: center;
        input{
          width:.5rem;
          margin: 0 10px;
          text-align: center;
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
