<template>
  <div class="sexWarp">
    <van-nav-bar
      title="添加银行卡"
      left-arrow
      @click-left="goSomePage('back')"
    />
    <p class="message">请绑定持卡本人的银行卡</p>
    <div class="warp">
      <van-cell :title="cartType" to="choseType" is-link></van-cell>
      <p class="message">请绑定持卡本人的银行卡</p>
      <van-cell>
        <div class="cell"><span>姓名</span><input v-model="username" placeholder="请输入真实姓名" type="text" class="input"/></div>
      </van-cell>
      <van-cell title="证件类型" to="choseType"><span style="color: #CD0000;float: right">身份证</span></van-cell>
      <van-cell>
        <div class="cell"><span>证件号</span><input v-model="idcard" placeholder="请输入身份证号" @keypress="keypress" type="number" class="input"/></div>
      </van-cell>
      <van-cell>
        <div class="cell"><span>手机号</span><input v-model="phone" placeholder="请输入预留手机号" @keypress="keypress" type="number" class="input"/></div>
      </van-cell>
      <p class="message" style="color: #CD0000">请绑定持卡本人的银行卡</p>
      <van-checkbox shape="0" class="checkbox" style="margin-left:.3rem" v-model="checked" checked-color="red">同意用户协议</van-checkbox>
    </div>
    <!--<div class="sure" @click="goSomePage('validationPhone')">下一步</div>-->
    <div class="sure" @click="submit">下一步</div>
  </div>
</template>

<script>
  export default {
    name: "sex",
    data(){
      return{
        radio:1,
        checked:true,
        username:'',
        idcard:'',
        phone:''
      }
    },
    methods:{
      goSomePage (type) {
        if(type == 'back'){
          this.$router.back(-1)
        }else{
          this.$router.push({name: type})
        }
      },
      submit(){
        if(this.username == ''){
          this.$toast('请填写真实姓名')
        }else if(this.idcard == ''){
          this.$toast('请输入身份证号')
        }else if(this.phone == ''){
          this.$toast('请输入预留手机号')
        }else if(!this.checked){
          this.$toast('请勾选用户协议')
        }else{
          this.$ajax('/api/mine/cardSave',{
            bankName:this.cartType,
            bankId:this.$route.query.cardType,
            cardno:this.$route.query.phone,
            username:this.username,
            idcard:this.idcard,
            phone:this.phone,
          },()=>{
            this.$toast('添加成功')
            this.$router.push({name:'backCard'})
          },(err)=>{
            this.$toast(err)
          },'PUT')
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
        }[this.$route.query.cardType]
      }
    }
  }
</script>

<style scoped lang="scss">
  $colorG: rgba(0, 0, 0, 0.6);
  .message{
    line-height: 1rem;
    padding-left: .2rem;
    font-size: 13px;
    color:rgba(0,0,0,0.4);
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
  .checkbox{
    .van-checkbox__icon{
      background: pink!important;
    }
  }
</style>
