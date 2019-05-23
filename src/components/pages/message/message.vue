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
          <div class="serviceMessage" @click="goList(1)">
            <div class="avatar blue">
              <van-icon v-if="service.count" :info="service&&service.count&&service.count!='0'" name="volume-o" color="#fff" size=".6rem" />
              <van-icon v-if="!service||service.count == '0'" name="volume-o" color="#fff" size=".6rem" />
            </div>
            <div class="txt">
              <p class="title">系统消息</p>
              <p class="des sl">{{service&&service.messageContent}}</p>
            </div>
          </div>
          <div class="serviceMessage" @click="goList(2)">
            <div class="avatar green">
              <van-icon :info="order&&order.count" v-if="order&&order.count" name="orders-o" color="#fff" size=".6rem" />
              <van-icon v-if="!order||order.count=='0'" name="orders-o" color="#fff" size=".6rem" />
            </div>
            <div class="txt">
              <p class="title">订单消息</p>
              <p class="des sl">{{order&&order.messageContent}}</p>

            </div>
          </div>
          <div class="serviceMessage" @click="goList(3)">
            <div class="avatar red">
              <van-icon :info="money&&money.count"  name="cash-back-record" color="#fff" size=".6rem" />
              <van-icon v-if="!money||money.count =='0'"name="cash-back-record" color="#fff" size=".6rem" />
            </div>
            <div class="txt">
              <p class="title">到账消息</p>
              <p class="des sl">{{money&&money.messageContent}}</p>
            </div>
          </div>
        </div>
      </van-tab>
      <van-tab title="公告">
        <div class="warp">
          <div class="serviceMessage" @click="goDetail(item)" v-if="gg.length>0" v-for="(item,index) in gg">
            <div class="avatar blue">
              <van-icon name="shop-o" color="#fff" size=".6rem" />
            </div>
            <div class="txt">
              <p class="title">{{item.title}}</p>
              <!--<p class="des sl">{{gg.messageContent}}</p>-->
            </div>
          </div>
          <div class="serviceMessage" v-if="gg&&gg.length == 0">
            <div class="avatar blue">
              <van-icon name="shop-o" color="#fff" size=".6rem" />
            </div>
            <div class="txt">
              <p class="title"></p>
              <p class="des sl">暂无公告</p>
            </div>
          </div>
        </div>
      </van-tab>
    </van-tabs>
    <colorBox :color="'#F5F6F7'"></colorBox>
  </div>
</template>
<script type="text/ecmascript-6">
    export default {
      data(){
        return{
          active:0,
          isIgnore:false,
          service:{},
          order:{},
          money:{},
          gg:[]
        }
      },
      activated(){
        this.getData()
        if(this.$route.query.type){
          this.active = this.$route.query.type
        }
      },
      created(){
      },
      methods:{
        onClickRight(){
          this.$ajax('/api/message/ignore',{},(res)=>{
            this.service.count = 0
            this.order.count = 0
            this.money.count = 0
          },()=>{},'post')
        },
        goDetail(item){
          this.$router.push({name: 'messageDetail',params:item})
        },
        getData(){
          this.$ajax('/api/message/message',{},(res)=>{
//             1系统消息 2订单消息 3到账消息 4公告 ,
            this.service = res.data.find((item)=>item.type ==1)
            this.order = res.data.find((item)=>item.type ==2)
            this.money = res.data.find((item)=>item.type ==3)
          },()=>{},'post')
          this.$ajax('/api/announcement/list',{
            currPage:1,
            pageSize:9999
          },(res)=>{
            this.gg = res.data
          },()=>{},'post')
        },
        goList(type){
          this.$router.push({name:'messageList',query:{
              type:type
            }})
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
