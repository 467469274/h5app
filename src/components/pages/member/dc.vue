<template>
  <div class="sexWarp">
    <van-nav-bar
      title="兑换"
      left-arrow
      @click-left="goSomePage('wallet',{type:1})"
    />
    <van-field label="兑换数量" input-align="right" v-model="value" :placeholder="'请输入要兑换的'+(this.$route.query.type==1?'金券':'银券')" />
    <div class="sure" @click="dc">确认兑换</div>
  </div>
</template>

<script>
  export default {
    name: "sex",
    data(){
      return{
        value:''
      }
    },
    methods:{
      goSomePage (type,obj) {
        if(type == 'back'){
          this.$router.back(-1)

        }else{
          this.$router.push({name: type,query:obj})
        }
      },
      dc(){
        let obj,url;
        if(this.value == ''){
          this.$toast('请输入兑换数量')
          return;
        }
        if(this.$route.query.type == 1){
          obj = {
            gold : this.value,
            type:1
          }
          url = '/api/mine/goldcharge'
        }else {
          obj = {
            silver : this.value,
            type:2
          }
          url = '/api/mine/silvercharge'
        }
        this.$ajax(url,obj,
          (res)=>{
            this.$toast('兑换成功')
            this.goSomePage('wallet',{type:1})
          },
          (mes)=>{
            this.$toast(mes)
          },
          'post')
      }
    }
  }
</script>

<style scoped lang="scss">
  .list{
    .item{
      line-height:1rem;
      background: #fff;
      border-bottom:1px solid #ccc;
      padding-left: .2rem;
      font-size: 14px;
      color: rgba(0,0,0,0.5);
    }
  }
</style>
