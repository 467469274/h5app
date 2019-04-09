<template>
  <div class="goodList">
    <van-list class="hotGoods-main">
      <div class="good" @click="goGoodsDetail(goodsId)" v-for="(item,index) in list " :key="index">
        <div class="imgWarp">
          <img v-lazy="item.images" width="100%">
        </div>
        <div class="goods-name">{{item.name}}</div>
        <div class="goods-price">
          {{item.money}} <i>券</i> <span class="cart-icon"></span>
        </div>
      </div>
    </van-list>
  </div>
</template>

<script>
export default {
  props: [],
  data () {
    return {
      // errImg: 'this.src="' + require('@/assets/images/error.png') + '"'
      list: [
        {name: '商品名称商品名称商品名称商品名称商品名称商品名称商品名称商品名称商品名称商品名称商品名称商品名称商品名称商品名称商品名称', money: 111, isHot: true, goodid: 1,images:'https://ss3.baidu.com/-rVXeDTa2gU2pMbgoY3K/it/u=1488861817,1113726833&fm=202'},
        {name: '商品名称商品名称商品名称商品名称', money: 111, isHot: true, goodid: 1,images:'https://ss3.baidu.com/-rVXeDTa2gU2pMbgoY3K/it/u=1488861817,1113726833&fm=202'},
        {name: '商品名称商品名称商品名称', money: 111, isHot: true, goodid: 1,images:'https://ss3.baidu.com/-rVXeDTa2gU2pMbgoY3K/it/u=1488861817,1113726833&fm=202'},
        {name: 'k商品名称商品名称商品名称kk', money: 111, isHot: true, goodid: 1,images:'https://ss3.baidu.com/-rVXeDTa2gU2pMbgoY3K/it/u=1488861817,1113726833&fm=202'},
        {name: '商品名称商品名称商品名称', money: 111, isHot: true, goodid: 1,images:'https://ss3.baidu.com/-rVXeDTa2gU2pMbgoY3K/it/u=1488861817,1113726833&fm=202'},
        {name: '商品名称商品名称商品名称', money: 111, isHot: true, goodid: 1,images:'https://ss3.baidu.com/-rVXeDTa2gU2pMbgoY3K/it/u=1488861817,1113726833&fm=202'}
      ]
    }
  },
  filters: {
  },
  methods: {
    goGoodsDetail (goodsId) {
      // query路径显示传递参数，params不显示
      // query：刷新数据仍在；params：刷新数据丢失，可以使用动态路由来保证刷新数据不丢失
      // this.$router.push({path: '/goodsDetail', query: {goodsId: goodsId}})
      this.$router.push({name: 'goodsDetail', params: {goodsId: goodsId}})
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
        background: red;
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
        max-height: .8rem;
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
          float: right;
          background: red;
          border-radius: 50%;
          vertical-align: -9px;
        }
      }
    }
  }
</style>
