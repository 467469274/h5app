<template>
  <div class="myCart">
    <div class="searchBox">
      <van-icon name="arrow-left" @click="goSomePage('myShop')" size=".3rem" style="margin-right: .2rem" />
      <input type="text" v-model="searchTxt" @keyup="change" placeholder="请输入搜索内容.....">
      <!--<span class="iconn" @click="goSomePage('classList')"></span>-->
      <span class="iconn add" @click="goSomePage('addGoods')"></span>
    </div>
    <van-tabs @change="onchange" v-model="active">
      <van-tab title="出售中">
      </van-tab>
      <van-tab title="仓库中">
      </van-tab>
    </van-tabs>

    <div class="typs">
      <div class="typeWarp">
        <span @click="filter('all')">全部</span>
        <span v-for="item in  categorys" @click="filter('')">{{item.categoryName}}</span>
      </div>
    </div>
    <div class="goodsList">
      <div class="goodsItem" v-for="item in products" @click="goDetail(item.productId)">
        <div class="goodsInfo">
          <van-checkbox v-show="isEdit" class="check" v-model="checked"></van-checkbox>
          <div class="avatar" :style="{'background-image':'url('+item.img+')'}"></div>
          <div class="goodsDetail">
            <p class="sl goodsName">{{item.name}}</p>
           <!-- <p class="sku">
              &lt;!&ndash;规格 <span>浓香型</span>&ndash;&gt;
            </p>-->
            <p class="other">
              <span class="redColor">￥{{item.price}}+{{item.goldCouponNum}}券</span>
            </p>
            <div class="operBtns">
              <!--<span class="red">设为打折</span>-->
              <span @click="xj(item.productId)" v-if="active==0">下架</span>
            </div>
          </div>
          <van-icon size=".4rem" name="arrow"/>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">

  export default {
    data() {
      return {
        isEdit: false,
        value: 0,
        checked: false,
        searchTxt: '',
        active: 0,
        categorys:[],
        products:[]
      }
    },
    created(){
      this.onchange()
    },
    methods: {
      del() {
      },
      goSomePage(type) {
        this.$router.push({name: type})
      },
      change() {
      },
      goDetail(id){
//        goodsId
      },
      xj(id){
        this.$ajax('/api/shop/lowerShelf', {productId:id},
          (res) => {
            this.$toast('下架成功')
            this.onchange()
          },
          (err)=>{
            this.$toast(err)
          },'PUT')
      },
      onchange() {
        this.$ajax('/api/shop/product', {status: this.active ==0?1:0},
          (res) => {
            this.categorys = res.data.categorys
            this.products = res.data.products
          },
          (err)=>{
            console.log(err)
          },'get')
      }
    }
  }
</script>
<style lang="scss" scoped>

  $colorG: rgba(0, 0, 0, 0.6);
  $red: rgb(247, 16, 15);
  .myCart {
    .check {
      margin-right: .2rem;
      display: inline-block;
      vertical-align: middle;
    }
    .goodsList {
      background: #fff;
      position: fixed;
      top: 2.9rem;
      bottom: 0rem;
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
                border: 1px solid #ccc;
                border-radius: 4px;
                button, input {
                  height: .4rem;
                  padding: 0;
                  margin: 0;
                  background: #fff;
                }
                input {
                  border-left: 1px solid #ccc;
                  border-right: 1px solid #ccc;
                }
              }
            }
            .operBtns {
              margin-top: .2rem;
              span {
                width: 1.55rem;
                line-height: .6rem;
                height: .6rem;
                margin-right: .3rem;
                font-size: 12px;
                text-align: center;
                display: inline-block;
                border: 1px solid $colorG;
                background: #fff;
                color: $colorG;
                &.red {
                  background: #D3412C;
                  color: #fff;
                  border-color: #D3412C;
                }
              }
            }
          }
          .avatar {
            flex: 1rem 0 0;
            height: 1rem;
            border: #ccc solid .5px;
            align-self: flex-start;
            background-size:100% 100%;
          }
        }
      }
    }
    .typs {
      line-height: .85rem;
      background: #fff;
      margin-top: .2rem;
      width: 100%;
      overflow-x: scroll;
      border-bottom: 1px solid #ccc;
      .typeWarp {
        white-space: nowrap;
        padding-right: .3rem;
      }
      span {
        font-size: 13px;
        margin-left: .35rem;
        &:last-child {
          margin-right: .5rem;
        }
      }
    }

    .searchBox {
      display: flex;
      align-items: center;
      padding: .2rem;
      background: #fff;
      .searchIcon {
        flex: .55rem 0 0;
        height: .55rem;
        background: red;
      }
      input {
        height: .55rem;
        flex: 1;
        border: none;
        outline: none;
        border-radius: .4rem;
        padding-left: .93rem;
        box-sizing: border-box;
        background: rgb(236, 237, 240);
      }
      .iconn {
        flex: .4rem 0 0;
        height: .4rem;
        background-image: url("../../../assets/images/guanli@2x.png");
        margin-left: .2rem;
        background-size: 100% 100%;
        &.add {
          background-image: url("../../../assets/images/plus@2x.png");
        }
      }
    }
  }
</style>
