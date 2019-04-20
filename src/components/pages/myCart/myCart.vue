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
      <div class="goodsItem" v-for="item in list">
        <p class="shopName"><van-checkbox class="check" v-model="item.checked"></van-checkbox>{{item.shopName}}</p>
        <div class="goodsInfo" v-for="(product,index) in item.products">
          <van-checkbox class="check" v-model="product.checked"></van-checkbox>
          <div class="avatar" :style="{backgroundImage:'url('+product.mainImg+')'}"></div>
          <div class="goodsDetail">
            <p class="sl goodsName">{{product.productName}}</p>
            <p class="sku">
              规格 <span>{{product.skuName}}</span>
            </p>
            <p class="other">
              <span class="redColor">￥{{product.price}}+{{product.goldCouponNum}}券</span>
              <van-stepper class="num" @plus="changeProductNum(product)" @minus="changeProductNum(product)" v-model="product.num" />
            </p>
          </div>
        </div>
      </div>
    </div>
    <van-submit-bar
      :button-text="!isEdit?'去结算':'删除'"
      @submit="onSubmit"
    >
      <div><van-checkbox class="check" v-model="allCheck"></van-checkbox> <span>全选</span></div>
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
          checked:false,
          list:[],
          allCheck:false
        }
      },
      created(){
        this.getData()
      },
      methods:{
        onSubmit(){
          if(this.isEdit){
            let delList = [];
            this.list.forEach((item)=>{
              item.products.forEach((pro)=>{
                if(pro.checked){
                  delList.push(pro.skuId)
                }
              })
            })
            delList = delList.join(',')
            this.$ajax('/api/product/car',{
              skuIds:delList
            },(res)=>{
              console.log(res)
              this.$toast('删除成功');
            },()=>{},'DELETE')
          }
        },
        getData(){

          this.$ajax('/api/product/car',{
          },(res)=>{
            this.list = res.data
            console.log(res.data)
          },()=>{

          },'get')
        },
        changeProductNum(item){
          if(this.changeTimeout)clearInterval(this.changeTimeout)
          this.changeTimeout = setTimeout(()=>{
            this.$ajax('/api/product/car',{
              skuId:item.skuId,
              num:item.num,
            },(res)=>{
              console.log(res)
            },()=>{},'PUT')
          },1000)
          this.$toast('更改成功');
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
            background-size: 100% 100%;
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
