<template>
  <div class="myWallet">
    <van-nav-bar
      title="银行卡"
      left-arrow
      @click-left="goBack()"
    />
    <div class="cards">
      <div class="card" v-for="item in list">
        <img :src="item.bankId | backgrounds" alt="">
        <div class="textWarp">
          <div class="top">
            <div class="text">
              <p class="name">{{item.bankName}}</p>
              <!--<p class="type">信用卡</p>-->
            </div>
          </div>
          <p class="cardNum">
            <i>****</i><i>****</i><i>****</i><span>{{item.cardno.substring(-1,4)}}</span>
          </p>
        </div>
      </div>
    </div>
    <p class="addCard" @click="choseType" to="cartInfo">+ 添加银行卡</p>
    <p class="message" v-show="list.length==0">暂时还未绑定任何银行卡</p>
  </div>
</template>

<script>
  export default {
    filters:{
      backgrounds(type){
        return {
          1:'static/gs.png',
          2:'static/gs.png',
          3:'static/ny.png',
          4:'static/js.png',
        }[type]
      }
    },
    data () {
      return {
        list:[]
      }
    },
    created(){
      this.innitData()
    },
    methods: {
      // 数据初始化
      innitData () {
//        PUT
        this.$ajax('/api/mine/cardlist',{},
          (res)=>{
            this.list = res.data
        },()=>{

          },'PUT')
      },
      // 返回上一页
      goBack () {
        this.$router.back(-1)
      },
      // 去账单
      goBill () {
        this.$router.push({name: 'bill'})
      },
      // 去账单
      choseType () {
        this.$router.push({name: 'choseType'})
      }
    },
    computed: {
    }
  }
</script>

<style scoped lang="scss">
  .message{
    text-align: center;
    line-height:1.3rem;
    font-size: 16px;
    color: rgba(0,0,0,0.4);
  }
  .addCard{
    width: 95%;
    margin: 0 auto;
    text-align: center;
    line-height: 1rem;
    background: #fff;
    border-radius: .1rem;
    margin-top: .2rem;
    color: #D96A6D;
    font-size: 16px;
    vertical-align: middle;
  }
  .cards{
    width: 95%;
    margin: 0 auto;
    .card{
      height: 3rem;
      border-radius: .1rem;
      margin-top: .2rem;
      position: relative;
      .textWarp{
        position:absolute;
        z-index: 3;
      }
      img{
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        z-index:1;
        position: absolute;
      }
      .top{
        display: flex;
        padding: .45rem 0 0 1.6rem;
        z-index:2;
        img{
          flex: .8rem 0 0;
          height: .8rem 0 0;
          margin-right: .25rem;
        }
        .text{
          color: #fff;
          .name{
            font-size: 18px;
          }
          .type{
            font-size: 15px;
          }
        }
      }
      .cardNum{
        padding-left: 1.6rem;
        font-size:18px;
        color:rgba(255,255,255,0.6);
        line-height: .55rem;
        margin-top: .45rem;
        i{
          font-style: normal;
          margin-right: .6rem;
        }
        span{
          color:rgba(255,255,255,0.9);
          vertical-align:.06rem;
        }
      }
    }
  }
</style>
