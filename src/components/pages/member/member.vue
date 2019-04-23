<template>
  <div class="member">
    <div class="member-user">
      <div class="topWarp" @click="goSomePage('userCenter')">
        <p class="userCenter">个人中心</p>
        <p class="name">Me</p>
      </div>
      <div class="meberBottom">
        <div class="imgWarp">
          <img src="../../../assets/images/default-head.png">
        </div>
        <p class="shopName" @click="goSomePage('userCenter')">{{userInfo.username}}</p>
        <p class="fid" @click="goSomePage('userCenter')">FID：{{userInfo.incode}}</p>
        <div class="btns">
          <div class="btn" @click="goSomePage('wallet')">
            <img src="/static/qianbao@2x.png" alt="">
            <p>我的钱包</p>
          </div>
          <div class="btn" @click="goSomePage('myCollect')">
            <img src="/static/shoucangjia@2x.png" alt="">
            <p>我的收藏</p>
          </div>
          <div class="btn" @click="goFans()">
            <img src="/static/fensi@2x.png" alt="">
            <p>我的粉丝</p>
          </div>
        </div>
      </div>
    </div>
    <div class="bottomBtns">
      <div class="shopInfo">
        <div class="myOrders">
          <van-cell title="我的订单" class="myShop" to="myOrder" is-link />
          <div class="iconBtn">
            <div class="btn" @click="goSomePage('myOrder',{type:0})">
              <van-icon name="idcard" :info="waitinfo.waitPay" size=".6rem" color="rgba(0,0,0,0.7)"/>
              <p>待付款</p>
            </div>
            <div class="btn" @click="goSomePage('myOrder',{type:30})">
              <van-icon name="logistics"  :info="waitinfo.waitDeliveGoods" size=".6rem" color="rgba(0,0,0,0.7)"/>
              <p>待发货</p>
            </div>
            <div class="btn" @click="goSomePage('myOrder',{type:40})">
              <van-icon name="todo-list-o"  :info="waitinfo.waitCollectGoods"size=".6rem" color="rgba(0,0,0,0.7)"/>
              <p>待收货</p>
            </div>
            <div class="btn" @click="goSomePage('myOrder',{type:50})">
              <van-icon name="comment-o" :info="waitinfo.waitComment" size=".6rem" color="rgba(0,0,0,0.7)"/>
              <p>待评价</p>
            </div>
           <!-- <div class="btn">
              <van-icon name="after-sale" size=".6rem" color="rgba(0,0,0,0.7)"/>
              <p>售后</p>
            </div>-->
          </div>
        </div>
        <van-cell-group>
          <van-cell title="我要开店" v-show="!isOpen" to="iwillOpen" is-link />
          <van-cell title="我的店铺" v-show="isOpen" to="myShop" is-link />
          <van-cell title="设置" to="serviceSet" is-link />
        </van-cell-group>
      </div>
    </div>
    <!-- <div class="sign-out"> -->
      <van-button size="large" @click="signOut" v-show="isLogin">退出登录</van-button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isLogin: false,
      show: false,
      userInfo:{},
      isOpen:false,
      waitinfo:{}
    }
  },
  created () {
    this.checkLogin()
    this.getUserInfo()
  },
  activated () {
    this.checkLogin()
  },
  methods: {
    goSomePage(type,data){
      if(data){
        this.$router.push({name:type,query:data})
      }else{
        this.$router.push('/'+type)
      }
    },
    checkLogin () {
      if (localStorage.userInfo) {
        this.isLogin = true
      } else {
        this.isLogin = false
      }
    },
    getUserInfo(){
      this.$ajax('/api/mine/info', {}, (res) => {
        this.userInfo = res.data
        if(res.data.shop == 'y'){
          this.$ajax('/api/shop',{},
            (data)=>{
              if(data.data.status == 10)this.isOpen = true
            },
            ()=>{}
            ,'get')
        }
      }, () => {}, 'get')
      this.$ajax('/api/mine/orderNum', {}, (res) => {
        this.waitinfo = res.data
      }, () => {}, 'get')
    },
    //跳转至我的粉丝
    goFans () {
      this.$router.push({path: 'directFans'});
    },
    //跳转至相应的页面
    goJump (type) {
       this.$router.push({path: type});
    },
    signOut () {
      // 退出登录清除localStorage保存的信息
      localStorage.removeItem('userInfo')
      this.isLogin = false
    }
  }
}
</script>

<style scoped lang="scss">
.member {
  .member-user {
    width: 100%;
    height:4.25rem;
    background-image: url("/static/mamber.png");
    background-size: 100% 100%;
    background-repeat: no-repeat;
    position: relative;
    .topWarp{
      text-align: center;
      padding: .3rem .7rem;
      color: #fff;
      font-weight: 600;
      .userCenter{
        font-size: 16px;
        margin-bottom: .3rem;
      }
      .name{
        font-size: 15px;
      }
    }
    .meberBottom{
      width: 95%;
      left:50%;
      top:2rem;
      position: absolute;
      background: #fff;
      transform: translateX(-50%);
      border-radius: .3rem;
      text-align: center;
      box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
      .imgWarp{
        padding: .15rem;
        width: 1.2rem;
        height: 1.2rem;
        position: absolute;
        left: 50%;
        top:.5rem;
        background: #fff;
        border-radius: 50%;
        transform: translate(-50%,-50%);
        img{
          width: 100%;
          height: 100%;
        }
      }
      .shopName{
        margin-top: 1.3rem;
        font-size: 15px;
        margin-bottom: .1rem;
      }
      .fid{
        font-size: 13px;
        color: rgba(0,0,0,0.6);
      }
      .btns{
        display: flex;
        padding:.2rem .85rem .3rem;
        justify-content:space-between;
        .btn{
          flex:1.1rem 0 0;
          height:1.1rem;
          img{
            display:block;
            width: .6rem;
            height: .6rem;
            margin: .1rem auto;
          }
        }
      }
    }
  }
  .bottomBtns{
    width: 95%;
    margin: 0 auto;
  }
  .shopInfo {
    margin-bottom: .2rem;
    margin-top:1.8rem;
    .van-cell-group{
      background: none!important;
      .van-icon{
        line-height: 1rem;
      }
    }
    .van-cell{
      padding: 0 .35rem;
      border-radius: .2rem;
      line-height: 1rem;
      margin-bottom:.2rem;
      box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
    }
    .myOrders{
      background: #fff;
      border-radius: .2rem;
      margin-bottom:.2rem;
      .van-cell{
        margin: 0;
        box-shadow:inherit;

      }
      .myShop{
        line-height:.9rem;
        i{
          line-height:.9rem;
        }
      }
      .iconBtn{
        display: flex;
        justify-content: space-between;
        padding: .35rem;
        padding-top: 0;
        .btn{
          text-align: center;
          flex: .8rem 0 0;
          color: rgba(0,0,0,0.6);
          p{
            margin-top: .2rem;
          }
        }
      }
    }
  }
  // .sign-out {
  //   display: flex;
  //   justify-content: center;
  //   button {
  //     width: 96%;
  //   }
  // }
}
</style>
