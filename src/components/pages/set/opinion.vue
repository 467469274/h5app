<template>
  <div class="messageWarp">
    <van-nav-bar
      title="意见反馈"
      left-arrow
      @click-left="onClickRight"
    />
    <van-cell-group>
      <van-field
         class="input"
        v-model="content"
        type="textarea"
        placeholder="请在这里写下您宝贵的意见,让我们不断进步,更好的为您服务!"
        rows="10"
        autosize
      />
      <van-field          class="input"
                          v-model="phone" placeholder="请输入手机号" />
    </van-cell-group>
    <div class="sure" style="background: #4EA264" @click="submit">提交</div>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    data(){
      return{
        content:'',
        phone:''
      }
    },
    methods:{
      onClickRight(){
        this.$router.back(-1)
      },
      submit(){
//        PUT
        if(this.content == ''){
          this.$toast('请填写内容');
        }else if(this.phone == ''){
          this.$toast('请填写手机号');
        }else if(this.phone.length<18){
          this.$toast('请填写正确的手机号');
        }else{
          this.$ajax('/api/system/feedBack',{
            content:this.content,
            phone:this.phone
          },()=>{
            this.$toast('反馈成功,感谢您的反馈');
            this.onClickRight()
          },()=>{},'PUT')
        }
      }
    }
  }
</script>
<style lang="scss" scoped>
  .input{
    border-radius: .2rem;
    width: 95%;
    margin: 0 auto;
    margin-top: .2rem;
  }
  .van-cell-group{
    background: none;
  }
</style>
