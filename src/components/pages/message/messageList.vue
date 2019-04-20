<template>
  <div class="messageWarp">
    <van-nav-bar
      :title="types[formData.type]"
      left-arrow
      @click-left="onClickRight"
    />
    <div class="messageList">
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <van-swipe-cell :right-width="130" v-for="(item,index) in list">
          <div class="messageItem" :class="{opacitymin2:item.oread=='y'}" @click="goDetail(item)">
            <p class="title sl">{{types[item.type]}}</p>
            <p class="time">{{item.createTime}}</p>
            <p class="des">{{item.messageContent}}</p>
          </div>
          <span slot="right" class="del" @click="del(item.messageId,index)">删除</span>
        </van-swipe-cell>
      </van-list>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
    export default {
      data(){
        return{
          formData:{
            currPage:0,
            pageSize:10,
            type:this.$route.query.type
          },
          loading:false,
          finished:false,
          list:[],
          types:{
            1:'系统消息', 2:'订单消息', 3:'到账消息', 4:'公告' ,
          }
        }
      },
      created(){
      },
      methods:{
        goDetail(item){
          this.$router.push({name: 'messageDetail',params:item})
        },
        onClickRight(){
          this.$router.back(-1)
        },
        onLoad(){
          this.loading = true
          this.formData.currPage+=1
          this.$ajax('/api/message/list',this.formData,(res)=>{
            this.loading = false;
            this.list = this.list.concat(res.data)
            if(res.data.length<10){
              this.finished = true
            }
          },(err)=>{console.log(err)},'post')
        },
        del(id,index){
          this.$ajax('/api/message/delete',{
            message_id:id
          },(res)=>{
            this.list.splice(index,1)
            this.$toast('删除成功');
          },()=>{},'DELETE')
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
