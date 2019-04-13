<template>
  <div class="sexWarp">
    <van-nav-bar
      title="我要开店"
      left-arrow
      @click-left="goSomePage('back')"
    />
    <p class="message">个人信息</p>
    <div class="warp">
      <van-cell>
        <div class="cell"><span>姓名:</span><input type="text" class="input" placeholder="输入姓名"/></div>
      </van-cell>
      <van-cell>
        <div class="cell"><span>手机号:</span><input type="text" class="input" placeholder="输入手机号"/></div>
      </van-cell>
      <van-cell>
        <div class="cell"><span>身份证号:</span><input type="text" class="input" placeholder="输入身份证号"/></div>
      </van-cell>
    </div>
    <p class="message">店铺信息</p>
    <div class="warp">
      <van-cell>
        <div class="cell"><span>店铺名称:</span><input type="text" class="input" placeholder="输入店铺名称"/></div>
      </van-cell>
      <van-cell>
        <div class="cell"><span>营业地址:</span><input type="text" class="input" placeholder="输入营业地址"/></div>
      </van-cell>
      <van-cell title="主营业务" is-link />
      <!--类型为选择-->
      <van-cell>
        <div class="cell"><span>店铺电话:</span><input type="text" class="input" placeholder="输入店铺电话"/>
        </div>
      </van-cell>
      <van-cell>
        <div class="cell" style="border-bottom: 0"><span>店铺介绍:</span><input style="text-align: left;" type="text" class="input" placeholder="输入店铺介绍"/>
        </div>
      </van-cell>
      <van-cell>
        <div class="cell">
          <van-uploader :after-read="onRead">
            <van-icon name="add-o" size=".6rem" color="rgba(0,0,0,0.4)" />
          </van-uploader>
        </div>
      </van-cell>
    </div>
    <div class="sure" style="background: #598ACF" @click="goSomePage('cartInfo')">提交审核</div>
  </div>
</template>

<script>
  export default {
    name: "sex",
    data(){
      return{
        radio:1
      }
    },
    methods:{
      goSomePage (type) {
        if(type == 'back'){
          this.$router.back(-1)

        }else{
          this.$router.push({name: type})
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  $colorG: rgba(0, 0, 0, 0.6);
  .message{
    line-height: 1rem;
    padding-left: .2rem;
    font-size: 15px;
    color:rgba(0,0,0,0.6);
  }
  .van-cell{
    line-height: 1rem;
  }
  .sure{
    background: #F1B23E;
    color: #fff;
    text-align: center;
    line-height: 1rem;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    font-size: 16px;
  }
  .warp{
    .hasImg .van-cell__value{
      flex: 1rem 0 0;
      .van-uploader{
        height: 1rem;
      }
    }
    .van-cell{
      border-bottom: 1px solid #ccc;
      line-height: 1rem;
      box-sizing: border-box;
      i{
        line-height: 1rem;
      }
      img{
        width:1rem;
        height:1rem;
        text-align:right;
      }
    }
  }

  .cell {
    display: flex;
    span {
      flex: 1.5rem 0 0;
      font-size: 15px;
      color: $colorG;
    }
    input {
      flex: 1;
      text-align: right;
    }
  }
</style>
