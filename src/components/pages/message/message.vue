<template>
  <div class="messageWarp">
    <van-nav-bar
      title="消息"
      right-text="忽略全部"
      @click-right="onClickRight"
    />
    <van-tabs v-model="active">
      <van-tab title="通知">
        <div class="warp">
          <div class="serviceMessage">
            <div class="avatar blue">
              <van-icon name="volume-o" color="#fff" size=".6rem" />
            </div>
            <div class="txt">
              <p class="title">系统消息</p>
              <p class="des sl">这是系统消息这是系统消息这是系统消息这是系统消息这是系统消息这是系统消息这是系统消息这是系统消息这是系统消息这是系统消息</p>
            </div>
          </div>
          <div class="serviceMessage">
            <div class="avatar green">
              <van-icon name="orders-o" color="#fff" size=".6rem" />
            </div>
            <div class="txt">
              <p class="title">订单消息</p>
              <p class="des sl">这是系统消息这是系统消息这是系统消息这是系统消息这是系统消息这是系统消息这是系统消息这是系统消息这是系统消息这是系统消息</p>
            </div>
          </div>
          <div class="serviceMessage">
            <div class="avatar red">
              <van-icon name="cash-back-record" color="#fff" size=".6rem" />
            </div>
            <div class="txt">
              <p class="title">到账消息</p>
              <p class="des sl">这是系统消息这是系统消息这是系统消息这是系统消息这是系统消息这是系统消息这是系统消息这是系统消息这是系统消息这是系统消息</p>
            </div>
          </div>
        </div>
      </van-tab>
      <van-tab title="公告">

        <div class="warp">
          <div class="serviceMessage">
            <div class="avatar blue">
              <van-icon name="shop-o" color="#fff" size=".6rem" />
            </div>
            <div class="txt">
              <p class="title">家家商城电商系统</p>
              <p class="des sl">2019年04月13日</p>
            </div>
          </div>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script type="text/ecmascript-6">
    export default {
      data(){
        return{
          active:0
        }
      },
      created(){
        this.getData()
      },
      methods:{
        onClickRight(){

        },
        getData(){
          this.$ajax('/api/message/list',{},(res)=>{

          },()=>{},'post')
        }
      }
    }
</script>
<style lang="scss" scoped>
  .warp{
    width: 90%;
    margin:0 auto;
  }
  .serviceMessage{
    background: #fff;
    display: flex;
    padding: .25rem;
    margin-top: .2rem;
    border-radius: .15rem;
    .avatar{
      flex:1rem 0 0;
      height: 1rem;
      text-align: center;
      background: red;
      margin-right: .2rem;
      border-radius: .1rem;
      i{
        line-height: 1rem;
      }
      &.blue{
        background: repeating-linear-gradient(180deg,rgb(84,85,233), rgb(20,44,127));
      }
      &.green{
        background: repeating-linear-gradient(470deg, #4febea -30%, #1faa29);

      }
      &.red{
        background: repeating-linear-gradient(180deg,rgb(247,126,34), rgb(248,47,6));
      }
    }
    .txt{
      flex: 1;    overflow: hidden;

      .title{
        font-size: 17px;
        line-height: .5rem;
        color: rgba(0,0,0,0.8);
      }
      .des{
        line-height: .44rem;
        font-size: 14px;
        color: rgba(0,0,0,0.6);
        margin-top: .05rem;
      }
    }
  }
</style>
