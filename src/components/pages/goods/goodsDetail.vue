<template>
  <div class="endorsementWarp">
    <van-nav-bar
      title="商品详情"
      left-right="编辑"
      left-arrow
      @click-left="goSomePage('back')"
    />
    <div class="endorsementTop">
      <div class="swiperWarp">
        <van-swipe :autoplay="3000" class="swiper" indicator-color="white">
          <van-swipe-item><img src="https://ss3.baidu.com/-rVXeDTa2gU2pMbgoY3K/it/u=1488861817,1113726833&fm=202" alt=""></van-swipe-item>
          <van-swipe-item><img src="https://ss3.baidu.com/-rVXeDTa2gU2pMbgoY3K/it/u=1488861817,1113726833&fm=202" alt=""></van-swipe-item>
          <van-swipe-item><img src="https://ss3.baidu.com/-rVXeDTa2gU2pMbgoY3K/it/u=1488861817,1113726833&fm=202" alt=""></van-swipe-item>
          <van-swipe-item><img src="https://ss3.baidu.com/-rVXeDTa2gU2pMbgoY3K/it/u=1488861817,1113726833&fm=202" alt=""></van-swipe-item>
          <van-swipe-item><img src="https://ss3.baidu.com/-rVXeDTa2gU2pMbgoY3K/it/u=1488861817,1113726833&fm=202" alt=""></van-swipe-item>
        </van-swipe>
      </div>
      <p class="title">1元升级家家商城普通代言人</p>
      <div class="txt">
        <div class="redTxt"><span class="b">￥1.00</span></div>
        <div class="redTxt"><span>￥</span><span>99.9</span></div>
        <div class="redTxt chinese"><span class="grey">购买返现</span><span class="b">￥1.00</span></div>
      </div>
      <p class="isChose" @click="showBase = true"><span>已选</span>浓香型  <van-icon size=".4rem" color="rgba(0,0,0,.4)" name="arrow" class="icon" /></p>
      <van-sku
        v-model="showBase"
        :sku="sku"
        :goods="goods"
        :goods-id="goodsId"
        :hide-stock="false"
        @buy-clicked="onBuyClicked"
        @add-cart="onAddCartClicked"
      />
    </div>
    <div class="nav">
      <van-tabs v-model="active" class="navInner">
        <van-tab title="商品描述">
          <div class="detail">
            <div class="content">内容1</div>
          </div>
        </van-tab>
        <van-tab title="备注信息">
          <div class="detail">
            <div class="content">内容2</div>
          </div>

        </van-tab>
        <van-tab title="商品评论">
          <div class="detail">
            <div class="content nop">
              <comments :startDisabled="true"></comments>
            </div>
          </div>
        </van-tab>
      </van-tabs>
    </div>
    <van-goods-action>
      <van-goods-action-mini-btn
        class="greey"
        icon="chat-o"
        text="咨询"
        @click=""
      />
      <van-goods-action-mini-btn
        class="greey"
        icon="star-o"
        text="收藏"
        @click=""
      />
      <van-goods-action-big-btn
        text="加入购物车"
        class="yellow"
        @click="add"
      />
      <van-goods-action-big-btn
        primary
        class="red"
        text="立即购买"
        @click="goSomePage('confirm')"
      />
    </van-goods-action>
  </div>
</template>

<script>
  import comments from '../../common/comments'
  export default {
    name: 'endorsement',
    data () {
      return {
        active: 2,
        goodsId:2261,
        showBase:false,
        sku: {
          // 所有sku规格类目与其值的从属关系，比如商品有颜色和尺码两大类规格，颜色下面又有红色和蓝色两个规格值。
          // 可以理解为一个商品可以有多个规格类目，一个规格类目下可以有多个规格值。
          tree: [
            {
              k: '规格', // skuKeyName：规格类目名称
              v: [
                {
                  id: '30349', // skuValueId：规格值 id
                  name: '红色', // skuValueName：规格值名称
                  imgUrl: 'https://img.yzcdn.cn/1.jpg' // 规格类目图片，只有第一个规格类目可以定义图片
                },
                {
                  id: '1215',
                  name: '蓝色',
                  imgUrl: 'https://img.yzcdn.cn/2.jpg'
                }
              ],
              k_s: 's1' // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
            }
          ],
          // 所有 sku 的组合列表，比如红色、M 码为一个 sku 组合，红色、S 码为另一个组合
          list: [
            {
              id: 2259, // skuId，下单时后端需要
              price: 100, // 价格（单位分）
              s1: '1215', // 规格类目 k_s 为 s1 的对应规格值 id
              s2: '1193', // 规格类目 k_s 为 s2 的对应规格值 id
              s3: '0', // 最多包含3个规格值，为0表示不存在该规格
              stock_num: 110 // 当前 sku 组合对应的库存
            }
          ],
          price: '1.00', // 默认价格（单位元）
          stock_num: 227, // 商品总库存
          collection_id: 2261, // 无规格商品 skuId 取 collection_id，否则取所选 sku 组合对应的 id
          none_sku: false, // 是否无规格商品
        },
        goods: {
          // 商品标题
          title: '测试商品',
          // 默认商品 sku 缩略图
          picture: 'https://img.yzcdn.cn/1.jpg'
        }
      }
    },
    methods: {
      goSomePage (type) {
        if(type == 'back'){
          this.$router.back(-1)
        }else{
          this.$router.push({name: type})
        }
      },
      add(){
        this.$toast('加入购物车成功');
      },
      onAddCartClicked(){},
      onBuyClicked(){}
    },
    components:{
      comments
    }
  }
</script>

<style scoped lang="scss">
  $red: rgb(247, 16, 15);
  .endorsementWarp {
    .endorsementTop {
      background: #fff;
      .swiperWarp{
        position: relative;
        &:before{
          content: '';
          display: block;
          padding-bottom: 100%;
        }
        .swiper{
          position:absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          img{
            width: 100%;
            height: 100%;
          }
        }
      }
      p {
        margin: 0;
      }

      .title {
        line-height: .75rem;
        padding-left: .2rem;
        font-size: 15px;
        color: rgba(0, 0, 0, 0.5);
      }

      img {
        width: 100%;
      }

      .txt {
        padding: 0 .2rem;
        padding-bottom: .3rem;

        div {
          display: inline-block;
        }

        .redTxt {
          color: $red;
          .s {
            font-size: 12px;
          }

          .b {
            font-size: 16px;
          }
        }

        .grey {
          margin-left: .3rem;
          color: rgba(0, 0, 0, 0.4);
          font-size: 12px;
        }

        .chinese {
          float: right;
        }
      }

      .des {
        padding: 0 .2rem;
        line-height: .6rem;
        color: rgba(0, 0, 0, 0.4);

        span {
          margin-right: .4rem;

          i {
            display: inline-block;
            width: .25rem;
            height: .25rem;
            background: red;
            margin-right: .2rem;
            vertical-align: -4px;
          }
        }
      }
    }
    .nav {
      margin-top: .2rem;
      .detail {
        background: #fff;
        .content{
          padding: .3rem;
          border-top: 1px solid #ccc;
          &.nop{
            padding: 0!important;
          }
        }

      }
    }
    .greey{
      background:rgb(220,220,220);
      border:none;
      color:rgba(0,0,0,0.7);
    }
    .yellow{
      background: rgb(250,159,11);
    }
    .red{
      background: rgb(247,27,6);
    }
    .isChose{
      line-height: 1rem;
      padding-left: .3rem;
      font-size: 14px;
      border-top: 1px solid #ccc;
      span{
        margin-right: .45rem;
        color: rgba(0,0,0,0.3);
      }
      .icon{
        float:right;
        line-height: 1rem;
      }
    }
    .van-goods-action{
      z-index: 123;
    }
  }
</style>
