<template>
  <div class="invitation">
    <van-nav-bar title="邀请好友"
                 right-text="规则"
                 left-arrow
                 @click-left="goSomePage('back')"
                 @click-right="goSomePage('rules')"
    >
    </van-nav-bar>
    <div class="main">
      <div class="codeImg">
        <img :src="userInfo.qrcode" alt="">
      </div>
      <div class="codeTxt">
        <span>邀请码</span>
        <span class="colorR">{{userInfo.incode}}</span>
      </div>
      <div class="friends">好友们扫描二维码接收邀请</div>
     <!-- <div class="shareBtn">分享给好友</div>
      <div class="invitationBtns">
        <div class="item">
          <img src="/static/weixin@2x.png" alt="">
          <p>邀请微信好友</p>
        </div>
        <div class="item">
          <img src="/static/qq@2x.png" alt="">
          <p>邀请QQ好友</p>
        </div>
        <div class="item">
          <img src="/static/weibo@2x.png" alt="">
          <p>邀请微博好友</p>
        </div>
      </div>-->
    </div>
    <colorBox :color="'#F5F6F7'"></colorBox>
  </div>
</template>

<script>
export default {
  name: 'invitation',
  data(){
    return{
      userInfo:{}
    }
  },
  created(){
    this.getUserInfo()
  },
  methods: {
    goSomePage (type) {
      if (type == 'back') {
        this.$router.back(-1)
      } else if (type == 'rules') {
        this.$router.push({name: 'rules'})
      }
    },
    getUserInfo(){
      this.$ajax('/api/mine/info', {}, (res) => {
        this.userInfo = res.data
      }, () => {}, 'get')
    }
  }
}
</script>

<style scoped lang="scss">
  .invitation{
    .main{
      padding:1px;
      box-shadow:.05rem .05rem .1rem rgba(0,0,0,0.1);
      background: #fff;
      width: 95%;
      margin:.2rem auto;
      border-radius: .1rem;
      .codeImg{
        width: 3rem;
        height: 3rem;
        margin: 0 auto;
        margin-top:1.1rem;
        margin-bottom: .6rem;
        img{
          width:100%;
          height: 100%;
        }
      }
      .codeTxt{
        text-align: center;
        font-size: 16px;
        font-weight: 900;
        .colorR{
          color: red;
        }
      }
      .friends{
        margin-top: .5rem;
        text-align: center;
        font-size: 15px;
        color: rgb(70,70,70);
      }
      .shareBtn{
        width: 1.75rem;
        height: .65rem;
        line-height:.65rem;
        background:rgb(247,24,6);
        color: #fff;
        margin:0 auto;
        text-align: center;
        margin-top: .65rem;
        margin-bottom: .9rem;
        border-radius: 5px;
      }
      .invitationBtns{
        display: flex;
        border-top: rgba(0,0,0,0.2) 1px solid;
        width: 85%;
        margin: 0 auto;
        padding-top: .8rem;
        padding-bottom: 1rem;
        .item{
          text-align: center;
          flex: 1;
          img{
            width: .7rem;
            border-radius: 50%;
            height: .7rem;
          }
          p{
            padding-top: .3rem;
            margin: 0;
          }
        }
      }
    }
  }
</style>
