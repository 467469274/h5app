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
          <van-swipe-item v-for="(item,index) in nowSku.imgs" v-if="nowSku.imgs.length>0">
            <img :src="item" alt="">
          </van-swipe-item>
          <van-swipe-item v-if="nowSku.imgs.length==0">
            <img :src="nowSku.mainImg" alt="">
          </van-swipe-item>
        </van-swipe>
      </div>
      <p class="title">{{detail.name}}</p>
      <div class="txt">
        <div class="redTxt"><span class="b">￥{{nowSku.price}}</span></div>
        <div class="redTxt" v-if="type!='goodsList'"><!--<span>￥</span><span>99.9</span>--></div>
        <div class="redTxt chinese" v-if="type!='goodsList'"><!--<span class="grey">购买返现</span><span class="b">￥1.00</span>-->
        </div>
      </div>
      <p class="isChose" @click="showBase = true"><span>已选</span>{{nowSku.name}}
        <van-icon size=".4rem" color="rgba(0,0,0,.4)" name="arrow" class="icon"/>
      </p>
      <van-sku
        v-model="showBase"
        :sku="sku"
        :goods="goods"
        :goods-id="goodsId"
        :hide-stock="false"
        @sku-selected="checkSku"
        stepper-title=""
        :close-on-click-overlay="true"
        @buy-clicked="onBuyClicked"
        @add-cart="onAddCartClicked"
      />
    </div>
    <div class="nav">
      <van-tabs v-model="active" class="navInner">
        <van-tab title="商品描述">
          <div class="detail">
            <div class="content" v-html="detail.desc">
            </div>
          </div>
        </van-tab>
        <van-tab title="备注信息">
          <div class="detail">
            <div class="content" v-html="nowSku.remarks"></div>
          </div>

        </van-tab>
        <!-- <van-tab title="商品评论">
           <div class="detail">
             <div class="content nop">
               <comments :startDisabled="true"></comments>
             </div>
           </div>
         </van-tab>-->
      </van-tabs>
    </div>
    <van-goods-action>
   <!--   <van-goods-action-mini-btn
        class="greey"
        icon="chat-o"
        text="咨询"
        @click=""
      />-->
      <van-goods-action-mini-btn
        class="greey"
        :icon="nowSku.collection==0?'star-o':'star'"
        text="收藏"
        @click="changeCollect"
      />
      <van-goods-action-big-btn
        text="加入购物车"
        class="yellow"
        @click="showBase = true"
      />
      <van-goods-action-big-btn
        primary
        class="red"
        text="立即购买"
        @click="showBase = true"
      />
    </van-goods-action>
  </div>
</template>
<!--@click="goSomePage('confirm')"-->
<script>
  import comments from '../../common/comments'
  export default {
    name: 'endorsement',
    data() {
      return {
        active: 0,
        v: [],
        goodsId: this.$route.query.goodsId,
        type: this.$route.query.type,
        showBase: false,
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
        },
        detail: {},
        goods: {}
      }
    },
    methods: {
      checkSku(a) {
        this.detail.mainSkuId = a.skuValue.id
      },
      goSomePage(type) {
        if (type == 'back') {
          this.$router.back(-1)
        } else {
          this.$router.push({name: type})
        }
      },
      add() {
      },
      onAddCartClicked(data) {
        this.$ajax('/api/product/car', {
          skuId:data.selectedSkuComb.id,
          num:data.selectedNum
        }, (res) => {
          this.$toast('加入购物车成功');
          this.showBase = false
        }, (err) => {
          this.$toast.fail(err)
        }, 'post')
      },
      onBuyClicked(data) {
        this.$ajax('/api/order/confirmOrder', [ {
          skuId:data.selectedSkuComb.id,
          num:data.selectedNum
        }], (res) => {
          this.$store.commit('setInfo',{...res.data,from:'cart'})
          this.$router.push({name:'confirm'})
        }, (err) => {
          this.$toast.fail(err)
        }, 'upOrder')
      },
      changeCollect() {
        let type = this.nowSku.collection == 0?1:0
        this.$ajax('/api/product/collection', {
          token:1,
          skuId:this.nowSku.skuId
        }, (res) => {
          let nowCollection = this.detail.skus.find(item=>item.skuId == this.detail.mainSkuId).collection;
          (nowCollection == 0)?this.$toast('收藏成功'):this.$toast('取消收藏成功')
          this.nowSku.collection = (nowCollection==0)?1:0
        }, () => {
        }, 'PUT')
      },
      getData() {
        this.$ajax('/api/product/detail', {
          productId: this.goodsId
        }, (res) => {
          console.log(res.data)
          this.detail = res.data
          let v = res.data.skus.map((item) => {
            return {
              id: item.skuId,
              name: item.name,
              imgUrl: item.mainImg
            }
          })
          /*price: '1.00', // 默认价格（单位元）
            stock_num: 227, // 商品总库存*/
          this.sku.tree[0].v = v
          //
          let stock_num = 0;
          this.sku.list = res.data.skus.map((itm) => {
            stock_num += itm.stock
            if(itm.skuId == res.data.mainSkuId)this.sku.price = itm.price
            return {
              id: itm.skuId, // skuId，下单时后端需要
              price: itm.price * 100, // 价格（单位分）
              s1: itm.skuId, // 规格类目 k_s 为 s1 的对应规格值 id
              stock_num: itm.stock // 当前 sku 组合对应的库存
            }
          })
          this.sku.stock_num = stock_num
        }, () => {
        }, 'get')
      }
    },
    created() {
      this.getData()
    },
    components: {
      comments
    },
    computed: {
      nowSku() {
        if (!this.detail.mainSkuId) return {
          imgs: []
        }
        let nowSku = this.detail.skus.find(item => item.skuId === this.detail.mainSkuId)
        this.goods = {
          // 商品标题
          title: nowSku.name,
          // 默认商品 sku 缩略图
          picture: nowSku.mainImg
        }
        return nowSku
      }
    }
  }
</script>

<style scoped lang="scss">
  $red: rgb(247, 16, 15);
  .endorsementWarp {
    .endorsementTop {
      background: #fff;
      .swiperWarp {
        position: relative;
        &:before {
          content: '';
          display: block;
          padding-bottom: 100%;
        }
        .swiper {
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
      p {
        margin: 0;
      }

      .title {
        line-height: .4rem;
        padding: .3rem 0;
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
        .content {
          padding: .3rem;
          border-top: 1px solid #ccc;
          &.nop {
            padding: 0 !important;
          }
        }

      }
    }
    .greey {
      background: rgb(220, 220, 220);
      border: none;
      color: rgba(0, 0, 0, 0.7);
    }
    .yellow {
      background: rgb(250, 159, 11);
    }
    .red {
      background: rgb(247, 27, 6);
    }
    .isChose {
      line-height: 1rem;
      padding-left: .3rem;
      font-size: 14px;
      border-top: 1px solid #ccc;
      span {
        margin-right: .45rem;
        color: rgba(0, 0, 0, 0.3);
      }
      .icon {
        float: right;
        line-height: 1rem;
      }
    }
    .van-goods-action {
      z-index: 123;
    }
  }
</style>
<style>

</style>
