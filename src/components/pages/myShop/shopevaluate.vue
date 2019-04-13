<template>
  <div class="myCart">
    <van-nav-bar
      title="用户评价"
      left-arrow
      @click-left="$router.back(-1)"
    />
    <div class="typs">
      <div class="typeWarp">
        <span>全部</span>
        <span>个人清洁</span>
        <span>个人清洁</span>
        <span>个人清洁</span>
        <span>个人清洁</span>
        <span>全部</span>
        <span>个人清洁</span>
        <span>个人清洁</span>
        <span>个人清洁</span>
        <span>个人清洁</span>
        <span>全部</span>
        <span>个人清洁</span>
        <span>个人清洁</span>
        <span>个人清洁</span>
        <span>个人清洁</span>
        <span>全部</span>
        <span>个人清洁</span>
        <span>个人清洁</span>
        <span>个人清洁</span>
        <span>个人清洁</span>
      </div>
    </div>
    <div class="goodsList">
      <div class="goodsItem" v-for="item in 10">
        <div class="goodsInfo" @click="goSomePage">
          <van-checkbox v-show="isEdit" class="check" v-model="checked"></van-checkbox>
          <div class="avatar"></div>
          <div class="goodsDetail">
            <p class="sl goodsName">商品面唱个歌商品面唱个歌商品面唱个歌商品面唱个歌商品面唱个歌商品面唱个歌</p>
            <p class="sku">
              规格 <span>浓香型</span>
            </p>
            <p class="other">
              <span class="redColor">￥250+300券</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">

  export default {
    data(){
      return{
        isEdit:false,
        value:0,
        checked:false
      }
    },
    methods:{
      del(){},
      goSomePage(){
        this.$router.push({name: 'shopevaluateDetail'})
      }
    }
  }
</script>
<style lang="scss" scoped>

  $colorG: rgba(0, 0, 0, 0.6);
  $red: rgb(247, 16, 15);
  .myCart{      .check{
    margin-right: .2rem;
    display: inline-block;
    vertical-align: middle;
  }
    .goodsList {
      background: #fff;
      position: fixed;
      top: 2rem;
      bottom:0rem;
      width: 100%;
      left: 0;
      overflow-y: scroll;
      .goodsItem {
        padding: .35rem;
        background: #fff;
        border-bottom: 1px solid #ccc;
        .shopName {
          font-size: 15px;
          margin-bottom: .3rem;
          border-bottom: 1px solid #ccc;
          padding-bottom: .2rem;
        }
        .goodsInfo {
          display: flex;
          align-items: center;
          .goodsDetail {
            flex: 1;
            padding-left: .3rem;
            overflow: hidden;
            .goodsName {
              font-size: 14px;
              color: $colorG;
            }
            .sku {
              color: rgba(0, 0, 0, 0.5);
              margin-bottom: .05rem;
            }
            .other {
              font-size: 13px;
              .redColor {
                color: $red;
              }
              .num {
                float: right;
                font-size: 11px;
                border:1px solid #ccc;
                border-radius: 4px;
                button,input{
                  height: .4rem;
                  padding: 0;
                  margin: 0;
                  background: #fff;
                }
                input{
                  border-left:1px solid #ccc;
                  border-right:1px solid #ccc;
                }
              }
            }
          }
          .avatar {
            flex: 1rem 0 0;
            height: 1rem;
            border: #ccc solid .5px;
          }
        }
      }
    }
    .typs{
      line-height: .85rem;
      background: #fff;
      margin-top:.2rem;
      width: 100%;
      overflow-x: scroll;
      .typeWarp{
        white-space: nowrap;
        padding-right: .3rem;
      }
      span{
        font-size: 13px;
        margin-left: .35rem;
        &:last-child{
          margin-right:.5rem;
        }
      }
    }
  }
</style>
