<template>
  <div class="shoppingMall">
    <div class="banner">
      <div class="seachWarp">
        <!--<span class="sweepCode icon"></span>-->
        <div class="searchWarp">
          <span class="searchInner" @click="goSearch">
            搜索你需要的......
          </span>
        </div>
        <van-icon class="bell" name="bell" color="#fff" size=".45rem" />
      </div>
      <van-swipe :autoplay="3000" class="indexWarp">
        <van-swipe-item v-for="item in banner" :key="item.goodsId">
          <img width="100%" @click="goGoodsDetail(item.goodsId)" v-lazy="item.image" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="mesg">
      <span class="first"><img src="static/bao.png" alt="">家家商城担保正品</span>
      <span><img src="static/you.png" alt="">包邮全场</span>
      <span><img src="static/qi.png" alt="">七天放心退</span>
      <span><img src="static/zheng.png" alt="">假一赔十</span>
    </div>
    <div class="category">
      <div class="category-item" @click="goSomePage('hot')">
        <img v-lazy="'static/baokuan-@2x.png'" alt="" width="100%">
        <span>爆款热卖</span>
      </div>
      <div class="category-item">
        <img v-lazy="'static/msg4@2x.png'" alt="" width="100%">
        <span>促销活动</span>
      </div>
      <div class="category-item" @click="goSomePage('allRaise')">
        <img v-lazy="'static/zhongchou@2x.png'" alt="" width="100%">
        <span>众筹联盟</span>
      </div>
      <div class="category-item">
        <img v-lazy="'static/zhongchou@2x.png'" alt="" width="100%">
        <span>游戏娱乐</span>
      </div>
    </div>
    <div class="category">
      <div class="category-item" @click="goSomePage('overseas')">
        <img v-lazy="'static/iconfontyouxihudong@2x.png'" alt="" width="100%">
        <span>海外专营</span>
      </div>
      <div class="category-item" @click="goSomePage('merchants')">
        <img v-lazy="'static/shangjia@2x.png'" alt="" width="100%">
        <span>商家联盟</span>
      </div>
      <div class="category-item">
        <img v-lazy="'static/xueyuan@2x.png'" alt="" width="100%">
        <span>家家商学院</span>
      </div>
      <div class="category-item">
        <img v-lazy="'static/jiankang@2x.png'" alt="" width="100%">
        <span>健康之家</span>
      </div>
    </div>
    <getout></getout>
    <div class="threeType">
      <div class="item" @click="goSomePage('endorsment')">
        <img v-lazy="'static/daiyanren@2x.png'" alt="" width="100%">
        <p>我要代言</p>
      </div>
      <div class="item"  @click="goSomePage('invitation')">
        <img v-lazy="'static/yaoqing@2x.png'" alt="" width="100%">
        <p>邀请好友</p>
      </div>
      <div class="item" @click="goSomePage('signIn')">
        <img v-lazy="'static/qiandao@2x.png'" alt="" width="100%">
        <p>签到</p>
      </div>
    </div>
    <div class="twoType">
      <div class="item" :style="{'background-image':'url(/static/bk.png)'}" @click="goSomePage('bkzq')"><div class="inner"></div></div>
      <div class="item" :style="{'background-image':'url('+newPreson+')'}" @click="goSomePage('newperson')"><div class="inner"></div></div>
    </div>
    <div class="title">新品推荐</div>
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <goods :list="hotGoods"></goods>
    </van-list>
  </div>
</template>

<script>
import floor from '@/components/common/floor.vue'
import goods from '@/components/common/goods.vue'
import getout from '@/components/common/getout.vue'
let _this = null
export default {
  components: {
    floor,
    getout,
    goods
  },
  data () {
    return {
      banner: [], // banner
      hotGoods: [], // 热门
      swiperOption: { // swiper配置
        loop: true, // 开启循环播放
        slidesPerView: 3, // 页面出现3个slide
        loopedSlides: 3, // 开启循环时要复制的slide个数
        // 使用loop会导致复制的slide点击事件失效
        // 解决方法，使用swiper的api方法里的事件
        // 注意点 this指向的是swiper，在created设置_this = this来指向vue
        on: {
          click: function () {
            // clickIndex计算了复制的slide数量，所以真实index需要减去复制的slide个数
            let index = this.clickedIndex - 3
            let len = _this.recommend.length
            // 当点击的是复制的slide时，根据情况计算出真实index
            if (index > len - 1) {
              index -= len
            } else if (index < 0) {
              index += len
            }
            let id = _this.recommend[index].goodsId
            _this.goGoodsDetail(id)
          }
        }
      },
      newGoods:{
        currPage:1,
        pageSize:10
      },
      loading: false,
      finished: false,
      newPreson:''
    }
  },
  created () {
    this.getImg()
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.swiper
    }
  },
  filters: {
    moneyFilter (money) {
      return toMoney(money)
    }
  },
  methods: {
    goSomePage (type) {
      let loca = {}
      if (type == 'hot') {
        loca = {name: 'goodsList', query: {type: 'hot', v: '爆款专区'}}
      }else if (type == 'newperson') {
        loca = {name: 'goodsList', query: {type: 'hot',v : '新人特惠'}}
      }else if (type == 'bkzq') {
        loca = {name: 'goodsList', query: {type: 'hot',v : '爆款专区'}}
      } else if (type == 'overseas') {
        loca = {name: 'goodsList', query: {type: 'hot', v: '海外专营'}}
      } else {
        loca = {name: type}
      }
      this.$router.push(loca)
    },
    goGoodsDetail (id) {
      this.$router.push({name: 'goodsDetail', params: {goodsId: id}})
    },
    goSearch () {
      this.$router.push({name: 'search'})
    },
    onLoad(){
      this.$ajax('/api/product/getHomeRecommend', this.newGoods, (res) => {
        this.hotGoods = res.data
        this.finished = true
        this.loading = false
      }, () => {
      }, 'get')
    },
    getImg(){
      this.$ajax('/api/product/xrthImg',{}, (res) => {
        this.newPreson = res.data
      }, () => {
      }, 'get')
      this.$ajax('/api/product/banners',{
        placed:1
      }, (res) => {
        this.banner =res.data
      }, (err) => {
        console.log(err)
      }, 'get')
    }
  }
}
</script>

<style scoped lang="scss">
$border-1px: 1PX solid #666;
.shoppingMall {
  width: 100%;
  height: 100%;
  overflow: hidden;
  overflow-y: auto;
  background: #fff;
  .banner {
    width: 100%;
    height: 3.4rem;
    padding: .05rem;
    background: -webkit-gradient(linear, left top, right bottom, from(#eb792f), to(#dd4323));
    background: linear-gradient(to bottom right, #eb792f, #dd4323);
    margin-bottom:.9rem;
    .seachWarp{
      width: 95%;
      margin: 0 auto;
      display: flex;
      padding:.2rem 0;
      .icon{
        flex:.55rem 0 0;
        height: .55rem;
        background:blue;
      }
      .searchWarp{
        flex: 1;
        padding: 0 .4rem;
        .searchInner{

          display:block;
          background: #fff;
          height:.55rem;
          line-height: .55rem;
          border-radius: .4rem;
          padding-left:1rem;
          color:rgba(0,0,0,0.3);
        }
      }
    }
    .indexWarp{
      width:95%;
      margin: 0 auto;
      border-radius:.3rem;
      overflow: hidden;
      height:3rem;
      img{
        width: 100%;
        height: 100%;
      }
    }
  }
  .mesg{
    width: 95%;
    display: flex;
    margin: 0 auto;
    span{
      font-size: .2rem;
      flex: 1;
      color: rgb(236,98,76);
      img{
        width: 15px;
        height: 15px;
        margin-right:10px;
        vertical-align: -.1rem;
      }
      &.first{
        flex:1.5;
      }
    }
  }
  .category {
    display: flex;
    background-color: #fff;
    margin: .1rem;
    border-radius: .15rem;
    .category-item {
      text-align: center;
      touch-action: none;
      flex: 1;
      padding: .2rem;
      color: rgb(130,130,130);
      img {
        margin-bottom: .1rem;
        border-radius: 50%;
      }
    }
  }
  .threeType{
    display: flex;
    color: #3A3A3A;
    background-color: rgb(249,250,251);
    border-radius:.1rem;
    width: 95%;
    margin: 0 auto;
    margin-top: .4rem;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-box-shadow: 0.05rem 0.05rem 0.1rem rgba(0,0,0,0.3);
    box-shadow: 0.05rem 0.05rem 0.1rem rgba(0,0,0,0.3);
    justify-content: space-between;
    .item{
      text-align: center;
      flex: 1;
      padding: .2rem 0;
      img{
        width:.6rem;
        height:.6rem;
        border-radius: 50%;
      }
      p{
        margin: 0;
        margin-top: .2rem;
      }
    }
  }
  .twoType{
    display: flex;
    width: 95%;
    margin:0 auto;
    margin-top:.2rem;
    :first-child{
      margin-right:2%;
    }
    :last-child{
      margin-left:2%;
    }
    .item{
      flex: 1;
      border-radius: .2rem;
      background-size:cover;
      background-position: center center;
      .inner{
        height: 0;
        padding-bottom:100%;
      }
    }
  }
  .title{
    line-height: 60px;
    font-size: .4rem;
    padding-left: 20px;
  }
}
.clearfix:after {
  content: '';
  height: 0;
  font-size: 0;
  display: block;
  visibility: hidden;
  clear: both;
}
  .bell{
    line-height: .55rem;

  }
</style>
