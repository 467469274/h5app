<template>
  <div class="allraise">
    <van-nav-bar title="众筹联盟"
                 right-text="我的"
                 left-arrow
                 @click-left="goSomePage('back')"
                 @click-right="goSomePage('my')"
    >
    </van-nav-bar>
    <div class="raiseWarp">
      <van-list
        class="raiseList"
      >
        <van-list
          v-model="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="getData"
        >
          <div class="item" v-for="item in taskList">
            <div class="top">
              <div class="imgWarp">
                <img src="/static/2181555986749_.pic_hd.jpg" alt="">
              </div>
              <div class="txt">
                <p class="title">{{item.tickName}}</p>
                <p class="des">{{item.recommend}}</p>
              </div>
            </div>
            <div class="itemBottom">
              <div class="bottomItem first">
                <div class="title">众筹规模</div>
                <div class="des">{{item.dimensions}}</div>
              </div>
              <div class="bottomItem second">
                <div class="title">接收券种</div>
                <div class="des"><span>{{item.coupon==1?'金券':'银券'}}</span></div>
              </div>
              <div class="bottomItem">
                <div class="title">价格</div>
                <div class="des"><span>{{item.gold}}金券={{item.silver}}银券</span></div>
              </div>
              <div class="bottomItem joinBtn" @click="goSomePage('add',item.tickId)">
                加入
              </div>
            </div>
          </div>
        </van-list>
      </van-list>
    </div>
    <div class="fire" @click="goSomePage('fire')"></div>
  </div>
</template>

<script>
export default {
  name: 'allRaise',
  data(){
    return{
      formData:{
        currPage:0,
        pageSize:10
      },
      taskList:[],
      finished:false,
      loading:false
    }
  },
  methods: {
    goSomePage (type,id) {
      if (type == 'back') {
        this.$router.back(-1)
      } else if (type == 'my') {
        this.$router.push({name: 'myraise'})
      } else if (type == 'add') {
        this.$router.push({name: 'raiseAdd', query: {value: id}})
      } else {
        this.$router.push({name: 'raiseFire'})
      }
    },
    getData(){
      this.formData.currPage+=1
      this.loading = true
      this.$ajax('/api/tick/list',this.formData,
        (res)=>{
          this.taskList = this.taskList.concat(res.data)
          this.loading = false
          if(res.data.length<10){
            this.finished = true
          }
        },
        (err)=>{
          console.log(err)
        },'post')
    }
  }
}
</script>

<style scoped lang="scss">
  .allraise{
    .raiseWarp {
      padding: .25rem;
      .raiseList {
        position: fixed;
        left: 0;
        top:1rem;
        overflow-y: scroll;
        bottom: 0;
        width: 100%;
        padding:.2rem;
        box-sizing: border-box;
        .item {
          border-radius: .2rem;
          background: #fff;
          padding: .25rem;
          box-sizing: border-box;
          margin-bottom: .2rem;
          .top {
            display: flex;
            border-bottom: 1px dashed #ccc;
            padding-bottom: .2rem;

            .imgWarp {
              flex: .85rem 0 0;
              height: .85rem;
              background: rgb(232, 234, 235);
              border-radius: .1rem;
              img{
                width: 100%;
                height: 100%;
              }
            }

            .txt {
              flex: 1;
              padding-left: .2rem;
              overflow: hidden;

              p {
                margin: 0;
              }

              .title {
                font-size: 14px;
                line-height: 1.3;
                margin-top: .05rem;
                margin-bottom: .15rem;
              }

              .des {
                font-size: 11px;
                color: #ccc;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
              }
            }
          }
          .itemBottom {
            display: flex;
            justify-content:space-between;
            align-items: center;
            .bottomItem {
              flex: 1;
              text-align: center;
              &.first{
                flex: initial;
                .des {
                  font-weight: 600;
                  font-size: 18px;
                  color: rgb(248, 0, 0);
                  span {
                    font-size: 12px;
                  }
                }
              }
              &.second .des {
                color: rgb(248, 0, 0);
              }
              .title {
                font-size: 14px;
                color: rgba(0, 0, 0, 0.6);
                margin: .2rem 0 .2rem;
              }
              .des {
                height: .4rem;
                font-size: 14px;
                span{
                  display:inline-block;
                  vertical-align: middle;
                }
              }
              &.joinBtn {
                flex: .85rem 0 0;
                line-height: .5rem;
                height: .5rem;
                border-radius: 3px;
                background:linear-gradient(to right bottom,rgb(249,89,62),rgb(247,21,9));;
                text-align: center;
                margin-left: .4rem;
                color: #fff;
              }
            }
          }
        }
      }
    }
    .fire{
      position: fixed;
      width:2rem;
      height: 2rem;
      border-radius: 50%;
      right:1%;
      bottom: 5%;
      box-shadow: 0.05rem 0.05rem 0.1rem rgba(0,0,0,0.1);
      background: url("/static/2171555986748_.pic_hd.jpg");
      background-size: 100% 100%;
    }
  }
</style>
