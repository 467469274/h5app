<template>
  <div class="myCart">
    <van-nav-bar
      title="购物车"
      :right-text="!isEdit?'编辑':'完成'"
      left-arrow
      @click-left="$router.back(-1)"
      @click-right="isEdit = !isEdit"
    />
    <div class="goodsList">
      <div class="goodsItem" v-for="item in 10">
        <p class="shopName"><van-checkbox class="check" v-model="checked"></van-checkbox>专卖店</p>
        <div class="goodsInfo">
          <van-checkbox class="check" v-model="checked"></van-checkbox>
          <div class="avatar"></div>
          <div class="goodsDetail">
            <p class="sl goodsName">商品面唱个歌商品面唱个歌商品面唱个歌商品面唱个歌商品面唱个歌商品面唱个歌</p>
            <p class="sku">
              规格 <span>浓香型</span>
            </p>
            <p class="other">
              <span class="redColor">￥250+300券</span>
              <van-stepper class="num" v-model="value" />
            </p>
          </div>
        </div>
      </div>
    </div>
    <van-submit-bar
      :button-text="!isEdit?'去结算':'删除'"
      @submit="onSubmit"
    >
      <div><van-checkbox class="check" v-model="checked"></van-checkbox> <span>全选</span></div>
      <div class="txt" v-show="!isEdit">
        <p>合计 <span>100万</span></p>
        <p>总价 <span>100万</span></p>
      </div>
    </van-submit-bar>
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
      padding: .2rem;
      margin-bottom: .2rem;
      .goodsItem {
        padding: .35rem;
        background: #fff;
        border-radius: .2rem;
        margin-bottom: .2rem;
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
    .van-submit-bar__bar{
      padding-left: .5rem;
      .check{
        margin-right: .2rem;
      }
      .txt{
        font-size: 12px;
        margin-left: .4rem;
        span{
          color: $red;

        }
      }
    }
  }
</style>
