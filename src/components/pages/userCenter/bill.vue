<template>
  <div class="sexWarp">
    <van-nav-bar
      v-if="active==0"
      title="记录"
      left-arrow
      :right-text="mounth+'月'"
      @click-left="goSomePage('back')"
      @click-right="show = true"
    />
    <van-nav-bar
      v-if="active!=0"
      title="记录"
      left-arrow
      @click-left="goSomePage('back')"
    />
    <van-popup v-model="show" position="bottom">
      <van-datetime-picker
        v-model="currentDate"
        type="year-month"
        :item-height="80"
        :min-date="minDate"
        @confirm="confirm"
        :formatter="formatter"
        class="arealist"
      />
    </van-popup>
    <van-tabs v-model="active">
      <van-tab title="钱包明细">
        <van-list
          v-model="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad"
        >
          <van-cell
            v-for="item in list"
            class="cell"
          >
            <div class="cell">
              <div>
                <p class="descript">{{item.description}}</p>
                <p class="creat"> {{item.createTime}}</p>
              </div>
              <div class="right" :class="{'red':item.type == 1}">
                {{item.type==1?'+':'-'}}   {{item.money}}
              </div>
            </div>
          </van-cell>
        </van-list>
      </van-tab>
      <van-tab title="转入记录">
        <div class="inputList" style="margin-top: 20px">
          <div class="inputItem">
            <span class="hasBorder">转出方</span>
            <span class="hasBorder">金额</span>
            <span>日期</span>
          </div>
          <div class="scolle">
            <div class="inputItem list" v-for="item in list1">
              <span>{{item.toUser}}</span>
              <span class="redTxt">{{item.gold}}</span>
              <span class="sl">{{item.createTime}}</span>
            </div>
          </div>
        </div>
      </van-tab>
      <van-tab title="转出记录">
        <div class="inputList" style="margin-top: 20px">
          <div class="inputItem">
            <span class="hasBorder">转入方</span>
            <span class="hasBorder">金额</span>
            <span>日期</span>
          </div>
          <div class="scolle">
            <div class="inputItem list" v-for="item in list2">
              <span>{{item.phone}}</span>
              <span class="redTxt">{{item.gold}}</span>
              <span class="sl">{{item.createTime}}</span>
            </div>
          </div>
        </div>
      </van-tab>
    </van-tabs>
    <colorBox :color="'#F5F6F7'"></colorBox>
  </div>
</template>

<script>
  export default {
    name: "sex",
    data(){
      return{
        list1:[],
        list2:[],
        active:1,
        loading:false,
        finished:false,
        show:false,
        currentDate:new Date(),
        minDate: new Date(2018, 10, 1),
        maxDate: new Date(2023, 10, 1),
        pageInfo:{
          currPage:1,
          pageSize:10
        },
        list:[]
      }
    },
    created(){
      this.getlis2()
    },
    methods:{
      onLoad(){
        this.loading = true
        let date = new Date(this.currentDate)
        this.pageInfo.times = date.getFullYear()+'-'+(date.getMonth()+1)+'-01'
        this.$ajax('/api/mine/walletRecord',
          this.pageInfo,(res)=>{
          this.list = this.list.concat(res.data)
            this.pageInfo.currPage += 1
            if(res.data.length<this.pageInfo.pageSize){
              this.finished = true
            }
            this.loading = false
        },(err)=>{
            this.loading = false
          },'post')
      },
      confirm(date){
        this.pageInfo.currPage = 1;
        this.list = []
        this.show = false
        this.onLoad()
      },
      goSomePage (type) {
        if(type == 'back'){
          this.$router.back(-1)
        }else{
          this.$router.push({name: type})
        }
      },
      formatter(type, value) {
        if (type === 'year') {
          return `${value}年`;
        } else if (type === 'month') {
          return `${value}月`
        }
        return value;
      },
      getlis2(){
        this.$ajax('/api/mine/interRecords',
          {},(res)=>{
            this.list2 = res.data
          },(err)=>{
            this.$toast(err)
          },'post')
      },
      getlis(){
        this.$ajax('POST /api/mine/toRecords',
          {},(res)=>{
            this.list = res.data
          },(err)=>{
            this.$toast(err)
          },'post')
      }
    },
    computed:{
      mounth(){
        return new Date(this.currentDate).getMonth()+1
      }
    }
  }
</script>

<style scoped lang="scss">
 /* .arealist {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 4rem;
    background: #fff;
  }*/
 .cell{
   display: flex;
   align-items: center;
   border-bottom: 1px solid #ccc;
   &:last-child{
     border:none;
   }
   div{
     flex: 1;
     .right{
       text-align: right;
       font-size: 16px;
       font-weight: 600;
       color: #9e9e9e;
       &.red{
         color: red;
       }
     }
     .descript{
       font-size: 14px;
     }
     .creat{
       font-size: 12px;
       color: #ccc;
     }
   }
 }
  .list{
    .item{
      line-height:1rem;
      background: #fff;
      border-bottom:1px solid #ccc;
      padding-left: .2rem;
      font-size: 14px;
      color: rgba(0,0,0,0.5);
    }
  }
 .inputList{
   background: #fff;
   .inputItem{
     background: #fff;
     display: flex;
     font-size: 17px;
     padding:.4rem 0;
     color:rgba(0,0,0,.6);
     border-bottom:rgba(0,0,0,.3) 1px solid;
     text-align: center;
     span{
       flex: 1;
     }
     .hasBorder{
       border-right: 1px solid rgba(0,0,0,0.4);
     }
     &.list{
       font-size:13px;
       .redTxt{
         font-weight: 900;
         color: red;
       }
     }
   }
 }
</style>
<style>
  .van-nav-bar__text{
    color: #747576;
  }
</style>
