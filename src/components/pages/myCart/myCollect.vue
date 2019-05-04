<template>
  <div class="myCart">
    <van-nav-bar
      title="我的收藏"
      :right-text="!isEdit?'编辑':'完成'"
      left-arrow
      @click-left="$router.back(-1)"
      @click-right="isEdit = !isEdit"
    />
    <div class="goodsList">
      <div class="goodsItem" v-for="item in list">
        <div class="goodsInfo">
          <van-checkbox v-show="isEdit" class="check" v-model="item.checked"></van-checkbox>
          <div class="avatar"><img :src="item.img" alt=""></div>
          <div class="goodsDetail">
            <p class="sl goodsName">{{item.productName}}</p>
            <p class="sku">
              规格 <span>{{item.skuName}}</span>
            </p>
            <p class="other">
              <span class="redColor">￥{{item.price}}+{{item.goldCouponNum}}券</span>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div v-show="isEdit" class="sure" @click="del">删除</div>
    <colorBox :color="'#F5F6F7'"></colorBox>
  </div>
</template>
<script type="text/ecmascript-6">

    export default {
      data(){
        return{
          isEdit:false,
          value:0,
          checked:false,
          list:[]
        }
      },
      created(){
        this.getData()
        },
      methods:{
        del(){
         let list = this.list.map((item)=>item.checked&&item.skuId)
          console.log(list)
          this.$ajax('/api/mine/collection',{
            ids:list
          },(res)=>{
            this.$toast('删除成功')
            this.getData()
            this.isEdit = false
          },(err)=>{
            this.$toast(err)
          },"DELETE")
        },
        getData(){
          this.$ajax('/api/mine/collection',{},(res)=>{
            this.list = res.data
          },()=>{},'get')
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
      top: 1.2rem;
      bottom:0;
      padding-bottom: 1rem;
      width: 100%;
      left: 0;
      overflow-y: scroll;
      .goodsItem {
        padding: .35rem;
        background: #fff;
        margin-bottom: .2rem;
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
            img{
              width: 100%;
              height: 100%;
            }
          }
        }
      }
    }
  }
  .sure{
    background:red;
    color: #fff;
    text-align: center;
    line-height: 1rem;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    font-size: 16px;
  }
</style>
