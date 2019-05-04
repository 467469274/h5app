<template>
  <div class="sexWarp">
    <van-nav-bar
      title="支付密码设置"
      left-arrow
      class="nav"
      @click-left="goSomePage('back')"
    />
    <van-password-input
      :value="value"
      class="changePassWord"
      :info="info"
      v-if="isShowset == false"
      @focus="showKeyboard = true"
    />
    <van-password-input
      :value="password"
      class="changePassWord"
      :info="info"
      v-if="isShowset == true"
      @focus="showKeyboard = true"
    />
    <van-password-input
      :value="againpassword"
      class="changePassWord"
      :info="info"
      v-if="showAgain"
      @focus="showKeyboard = true"
    />
    <van-number-keyboard
      :show="showKeyboard"
      @input="onInput"
      @delete="onDelete"
      @blur="showKeyboard = false"
    />
    <colorBox :color="'#fff'"></colorBox>
  </div>
</template>

<script>
  export default {
    name: "changePassWord",
    data() {
      return {
        value:'',
        showKeyboard:false,
        info:'请输入旧的支付密码以验证身份',
        userInfo:{},
        isShowset:false,
        showAgain:false,
        password:'',
        againpassword:''
      }
    },
    methods: {
      goSomePage(type) {
        if (type == 'back') {
          this.$router.back(-1)
        } else {
          this.$router.push({name: type})
        }
      },
      onInput(key) {
        let obj;
        if(this.isShowset == false){
          obj = 'value'
        }else if(this.isShowset == true){
          obj = 'password'
        }else if(this.showAgain  && this.isShowset =='dd'){
          obj = 'againpassword'
        }
        this[obj] = (this[obj] + key).slice(0, 6);
      },
      onDelete() {
        let obj;
        if(this.isShowset == false){
          obj = 'value'
        }else if(this.isShowset == true){
          obj = 'password'
        }else if(this.showAgain && this.isShowset =='dd'){
          obj = 'againpassword'
        }
        this[obj] = this[obj].slice(0, this[obj].length - 1);
      }
    },
    created(){
    },
    watch:{
      value(){
        if(this.value.length==6){
          this.$ajax('/api/mine/withdrawPassword',{password:this.value},(res)=>{
            this.info = '请输入6位支付密码'
            this.isShowset = true
          },(err)=>{
            this.$toast(err)
          },'PUT')
        }
      },
      password(n){
        if(n.length==6){
          this.info = '请再次输入'
          this.isShowset = 'dd'
          this.showAgain = true
        }
      },
      againpassword(n){
        if(n.length==6){
          if(n != this.password){
            this.$toast('重复密码不正确,请重新输入')
            this.againpassword = ''
          }else{
            this.$ajax('/api/mine/withdrawUpdate', {
                password:n
              },
              (res) => {
                this.$toast('支付密码修改成功')
                this.$router.push({name:'member'})
              }, (err) => {
                this.$toast(err)
              }, 'PUT')
          }
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  .sexWarp{
    .nav{
      margin-bottom: 1.3rem;
      border-bottom: .2rem solid rgb(231,233,234);
    }
    [class*=van-hairline]::after{
      border:1px solid #ccc;
    }
  }
</style>
