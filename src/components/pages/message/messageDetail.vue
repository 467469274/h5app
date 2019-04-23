<template>
  <div class="messageWarp">
    <van-nav-bar
      :title="types[this.detail.type]"
      left-arrow
      @click-left="onClickRight"
    />
    <div class="detail">
      <div class="messageItem">
        <p class="title">{{detail.messageTitle}}</p>
        <p class="time">{{detail.createTime}}</p>
        <p class="des">{{detail.messageContent}}</p>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    data(){
      return{
        detail:{},
        types:{
          1:'系统消息', 2:'订单消息', 3:'到账消息', 4:'公告' ,
        }
      }
    },
    methods:{
      onClickRight(){
        this.$router.back(-1)
      }
    },
    created() {
      this.detail =  this.$route.params
      console.log(this.detail)
      if(!this.detail.messageId)this.$router.push({name:'message'})
      this.$ajax('/api/message/read',{
          messageId:this.$route.params.messageId
        },
        (res)=>{
//          console.log(res.data)
        },
        ()=>{},
        'post')
    }
  }
</script>
<style lang="scss" scoped>
  .messageItem{
    overflow: hidden;
    background: #fff;
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
</style>
