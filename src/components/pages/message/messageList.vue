<template>
  <div class="messageWarp">
    <van-nav-bar
      title="系统消息"
      left-arrow
      @click-left="onClickRight"
    />
    <div class="messageList">
      <van-swipe-cell :right-width="130">
        <div class="messageItem" @click="goDetail">
          <p class="title sl">系统消息</p>
          <p class="time">2019年04月13日09:09:10</p>
          <p class="des">吃地区教委的</p>
        </div>
        <span slot="right" class="del">删除</span>
      </van-swipe-cell>
      <van-swipe-cell :right-width="130">
        <div class="messageItem opacitymin2">
          <p class="title sl">系统消息</p>
          <p class="time">2019年04月13日09:09:10</p>
          <p class="des">吃地区教委的</p>
        </div>
        <span slot="right" class="del">删除</span>
      </van-swipe-cell>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
    export default {
      methods:{
        goDetail(){
          this.$router.push({name: 'messageDetail'})
        },
        onClickRight(){
          this.$router.back(-1)
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
  .messageList{
    padding: .2rem;
    .messageItem{
      overflow: hidden;
      background: #fff;
      border-radius: .2rem;
      margin-top:.2rem;
      padding: .2rem;
      &.opacitymin2{
        .title{
          color: rgba(0,0,0,0.3);
        }
        .time{
          color: rgba(0,0,0,0.1);
        }
        .des{
          color: rgba(0,0,0,0.2);
        }
      }
      .title{
        font-size:17px;
        color: rgba(0,0,0,0.8);
      }
      .time{
        font-size:13px;
        color: rgba(0,0,0,0.4);
        margin:.15rem 0 .2rem;
      }
      .des{
        font-size:15px;
        color: rgba(0,0,0,0.6);
      }
    }

    .del{
      color: red;
      font-size: 15px;
      text-align: center;
      display: block;
      width:1.3rem;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
    }
  }
</style>
