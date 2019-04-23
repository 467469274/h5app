<template>
  <div class="goodList">
    <div class="good" @click="goGoodsDetail(item.productId)" v-for="(item,index) in list " :key="index">
      <div class="imgWarp">
        <img v-lazy="item.img" width="100%">
      </div>
      <div class="goods-name">{{item.name}}</div>
      <div class="goods-price">
       ￥{{item.price}} +{{item.goldCouponNum}} <i>券</i> <van-icon size=".3rem" class="cart-icon" @click.stop="addCart(item)" name="shopping-cart-o" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['list'],
  data () {
    return {
    }
  },
  created(){
  },
  filters: {
  },
  methods: {
    goGoodsDetail (goodsId) {
      this.$router.push({name: 'goodsDetail', query: {goodsId: goodsId,type:this.$route.name}})
    },
    addCart(item){
      console.log(item)
      this.$ajax('/api/product/car', {
        skuId:item.skuId,
        num:1
      }, (res) => {
        this.$toast('加入购物车成功');
      }, (err) => {
        this.$toast(err);
      }, 'post')
    }
  }
}
</script>

<style scoped lang="scss">
  .goodList{
    overflow: hidden;
    margin:0 auto;
    width: 95%;
    box-sizing: border-box;
    .good{
      background: #fff;
      width: 48%;
      box-sizing: border-box;
      float: left;
      border: 1px solid rgb(214,215,217);
      padding: .2rem;
      margin-bottom: .3rem;
      &:nth-child(even){
        margin-left:2%;
      }
      &:nth-child(odd){
        margin-right:2%;
      }
      .imgWarp{
        height: 0;
        width: 100%;
        padding-bottom: 79%;
        position: relative;
        img{
          position: absolute;
          width: 100%;
          height: 100%;
        }
      }
      .goods-name{
        font-size:14px;
        line-height:.4rem;
        margin: .15rem 0;
        overflow:hidden;
        text-overflow:ellipsis;
        display:-webkit-box;
        -webkit-box-orient:vertical;
        -webkit-line-clamp:2;
        min-height: .8rem;
      }
      .goods-price{
        font-size:16px;
        color: rgb(221,0,0);
        vertical-align: middle;
        i{
          font-style: normal;
          font-size: 13px;
        }
        .cart-icon{
          width: .45rem;
          height: .45rem;
          line-height: .45rem;
          float: right;
          background: red;
          border-radius: 50%;
          color: #fff;
          vertical-align: -9px;
          text-align: center;
        }
      }
    }
  }
</style>
