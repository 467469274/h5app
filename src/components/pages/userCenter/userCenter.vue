<template>
  <div class="locations">
    <van-nav-bar
      title="个人信息"
      left-arrow
      @click-left="goSomePage('member')"
    />
    <!--      right-text="编辑"-->
    <div class="warp">
      <van-cell class="hasImg" title="头像" is-link>
        <van-uploader :after-read="onRead">
          <img :src="avatar">
        </van-uploader>
      </van-cell>
      <van-cell>
        <div class="cell"><span>昵称:</span><input type="text" v-model="userInfo.username" @blur="changeUserInfo({username:userInfo.username},()=>{$toast('设置成功')})" class="input"/></div>
      </van-cell>
      <van-cell>
        <div class="cell"><span>手机号:</span><input type="number" @keypress="keypress" v-model="userInfo.phone" @blur="changeUserInfo({phone:userInfo.phone},()=>{$toast('设置成功')})" class="input"/></div>
      </van-cell>
      <van-cell title="性别"  @click="goSomePage('sex')" is-link>{{userInfo.sex == 2?'女':'男'}}</van-cell>
      <van-cell title="收货地址" to="choseLocation" is-link />
      <van-cell title="吸粉二维码" is-link @click="goSomePage('qrcode')"/>
      <van-cell title="我的邀请码">{{userInfo.incode}}</van-cell>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    data(){
      return{
        checked:true,
        avatar:'/static/default-head.png',
        userInfo:{}
      }
    },
    created(){
      this.$ajax('/api/mine/info',{},(res)=>{
        let dat = res.data;
        if(dat.head){this.avatar = dat.head}
        this.userInfo = dat
      },()=>{},'get')
    },
    methods: {
      onRead(file){
        let formData = new FormData();
        formData.append('files', file.file)
        this.$ajax('/api/mine/upload',
          formData,
          (res)=>{
            this.avatar = res.url;
            this.changeUserInfo({head:res.url})
            this.$toast('设置成功')
          },
          (err)=>{
            this.$toast(err)
          },
          'upload')
      },
      goSomePage(type) {
        if (type == 'back') {
          this.$router.back(-1)
        }else if(type=='qrcode'){
          this.$router.push({name: 'qrcode',params:{url:this.userInfo.qrcode}})
        }else if(type=='sex'){
          console.log(this.userInfo.sex)
          this.$router.push({name: 'sex',query:{type:this.userInfo.sex}})
        } else {
          this.$router.push({name: type})
        }
      },
      changeUserInfo(data,success,err){
        this.$ajax('/api/mine/update',data,
          (res)=>{
            success(res)
          },
          (er)=>{
            err(er)
          },'post')
      }
    }
  }
</script>
<style scoped lang="scss">
  $colorG: rgba(0, 0, 0, 0.6);
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
        border-radius: 50%;
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
  .flexss{
    display: flex;
    align-items: center;
    .txt{
      flex: 1;
      p{
        font-size: 10px;
        color: rgba(0,0,0,0.4);
      }
    }
  }
  .saveBtn{
    background: rgb(259,159,10);
    text-align: center;
    position:fixed;
    left: 0;
    bottom: 0;
    color: #fff;
    line-height:1rem;
    width:100%;
    font-size: 15px;
  }
</style>
