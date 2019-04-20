<template>
  <div class="sexWarp">
    <van-nav-bar
      title="添加银行卡"
      left-arrow
      @click-left="goSomePage('back')"
    />
    <p class="message">请绑定持卡本人的银行卡</p>
    <div class="warp">
      <van-cell title="选择卡片类型" to="choseType" is-link>{{cartType}}</van-cell>
      <van-cell>
        <div class="cell"><span>卡号:</span><input type="number" v-model="phone" class="input"/></div>
      </van-cell>
    </div>
    <div class="sure" @click="goSomePage('cartInfo')">下一步</div>
  </div>
</template>

<script>
  export default {
    name: "sex",
    data(){
      return{
        radio:1,
        phone:'',
        types:{
          1:'招商银行',
          2:'工商银行',
          3:'农业银行',
          4:'建设银行'
        }
      }
    },
    methods:{
      goSomePage (type) {
        if(type == 'back'){
          this.$router.back(-1)
        }else{
          this.$router.push({name: type,query:{phone:this.phone,cardType:this.$route.query.type}})
        }
      }
    },
    computed:{
      cartType(){
        return {
          1:'招商银行',
          2:'工商银行',
          3:'农业银行',
          4:'建设银行'
        }[this.$route.query.type]
      }
    }
  }
</script>

<style scoped lang="scss">
  $colorG: rgba(0, 0, 0, 0.6);
  .message{
    line-height: 1rem;
    padding-left: .2rem;
    font-size: 15px;
    color:rgba(0,0,0,0.6);
  }
  .van-cell{
    line-height: 1rem;
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
  .warp{
    .hasImg .van-cell__value{
      flex: 1rem 0 0;
      .van-uploader{
        height: 1rem;
      }
    }
    .van-cell{
      border-bottom: 1px solid #ccc;
      line-height: 1rem;
      box-sizing: border-box;
      i{
        line-height: 1rem;
      }
      img{
        width:1rem;
        height:1rem;
        text-align:right;
      }
    }
  }

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
</style>
