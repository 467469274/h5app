<template>
  <div class="goodsList">
    <div class="listTop">
      <div class="nav" v-if="type!='search'">
        <van-nav-bar v-if="listType!='malls'" :title="searchInt">
          <van-icon @click="goSearch" name="search" color="rgba(0,0,0,0.4)" size=".4rem" slot="right"/>
          <van-icon @click="goBack" name="arrow-left" color="rgba(0,0,0,0.4)" size=".4rem" slot="left"/>
        </van-nav-bar>
        <div class="myNav" v-if="listType=='malls'">
          <van-icon @click="goSearch" name="search" color="rgba(0,0,0,0.4)" size=".4rem" slot="right"/>
          <van-tabs v-model="active2" @change="onchange" title-active-color="#f44" class="tab">
            <van-tab title="现金商城">
            </van-tab>
            <van-tab title="会员商城">
            </van-tab>
          </van-tabs>
          <van-icon @click="isShowFl = true" name="bars" color="rgba(0,0,0,0.4)" size=".4rem" slot="left"/>
        </div>
      </div>
      <searchInput @click="goSearch" v-if="type=='search'" :searchInt="searchInt"></searchInput>
      <div class="filters">
        <div class="item" @click="show = true"><span
          :class="{active:acitveClass ==1 || acitveClass ==2}">{{choseType}}<i class="jt"></i></span></div>
        <div class="item" @click="changeType(3)"><span :class="{active:acitveClass ==3}">新品</span></div>
        <div class="item" @click="changeType(4)"><span :class="{active:acitveClass ==4}">销量</span></div>
        <div class="item price" @click="changeType(5)"><span :class="{active:acitveClass ==5 || acitveClass ==6}">价格 <i
          :class="{'up':acitveClass==6,'down':acitveClass==5}"></i></span></div>
      </div>
    </div>
    <van-swipe :autoplay="3000" class="indexWarp" v-show="routeName =='malls'" style="margin-top: 2rem">
      <van-swipe-item v-for="item in banner" :style="{'backgroundImage':'url('+item.img+')'}" :key="item.goodsId">
      </van-swipe-item>
    </van-swipe>
    <p class="searchEnd" v-if="type=='search'">{{products.length}}个结果</p>
    <van-list
      :class="{marginTop19:type!='search'&&!listType,marginTop02:banner.length>0&&listType}"
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <goods :list="products"></goods>
    </van-list>
    <fl @back="isShowFl=false" v-if="isShowFl"></fl>
    <van-actionsheet
      v-model="show"
      :actions="actions"
      @select="select"
    />
    <colorBox :color="'#F5F6F7'"></colorBox>
  </div>
</template>

<script>
  import goods from '@/components/common/goods.vue'
  import searchInput from '@/components/pages/search/searchInput.vue'
  import fl from '@/components/pages/fl/fl.vue'

  export default {
    props: ['listType'],
    components: {
      goods,
      searchInput,
      fl
    },
    data() {
      return {
        choseType: "综合",
        show: false,
        actions: [
          {
            name: '综合',
            id: 1
          },
          {
            name: '评论从高到低',
            id: 2
          }
        ],
        isShowFl: false,
        list: [],
        loading: false,
        finished: false,
        type: this.$route.query.type,
        searchInt: this.$route.query.v,
        routeName: this.$route.name,
        active2: 0,
        acitveClass: 1,
        postP: {
          currPage: 1,
          pageSize: 20,
          order: 1
        },
        banners: [],
        banners2: [],
        products: []
      }
    },
    created() {
      this.getBanner()
    },
    activated() {
    },
    mounted() {
    },
    methods: {
      select(it) {
        this.changeType(it.id);
        this.choseType = it.name == '评论从高到低' ? '评论' : '综合'
        this.show = false
      },
      getBanner() {
        this.$ajax('/api/mall/banner', {l: 0}, (res) => {
          this.banners = res.data
        }, () => {
        }, 'get')
        this.$ajax('/api/mall/banner', {l: 1}, (res) => {
          this.banners2 = res.data
        }, () => {
        }, 'get')
      },
      // 数据初始化
      onLoad() {
        this.loading = true
        let url;
        if (this.type == 'search') {
          this.postP.k = this.$route.query.v
          this.postP.l = 20
          url = '/api/search'
        } else if (this.searchInt == '爆款专区') {
          url = '/api/product/bkzq'
        } else if (this.routeName == 'malls') {
          url = '/api/search'
          this.postP.k = ''
          if (this.active2 == 0) {
            this.postP.l = 0
          } else {
            this.postP.l = 5
          }
        } else if (this.type == 'fl') {
          url = '/api/search'
          this.postP.categoryId = this.$route.query.id
          this.postP.l = 25
        } else {
          url = '/api/product/xrth'
        }
        this.$ajax(url, this.postP, (res) => {
          let list;
          if (this.searchInt == '新人特惠' || this.searchInt == '爆款专区') {
            this.products = this.products.concat(res.data)
            list = res.data
          } else {
            this.products = this.products.concat(res.data.products)
            list = res.data.products
          }
          this.postP.currPage += 1
          this.loading = false
          if(list.length<this.postP.pageSize){
            this.finished = true
          }
        }, () => {
        }, 'get')
      },
      // 返回上一页
      goBack() {
        this.$router.back(-1)
      },
      onRefresh() {
      },
      goSearch() {
        this.$router.push({name: 'search'})
      },
      changeType(v) {
        if (v == 5 && this.acitveClass == 5) {
          v = 6
        }
        this.acitveClass = v
        this.postP.order = v
        this.postP.currPage = 1
        this.products = []
        this.onLoad()
      },
      onchange() {
        this.postP.currPage = 1
        this.onLoad()
      }
    },
    computed: {
      title() {
        return '商品列表'
      },
      banner() {
        return this.active2 == 0 ? this.banners : this.banners2
      }
    }
  }
</script>

<style scoped lang="scss">
  $border-1px: 1PX solid #666;
  .goodsList {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    .listTop {
      .nav {
        color: #000;
      }
      background: #fff;
      position: fixed;
      left: 0;
      top: 0;
      width: 100%;
      z-index: 1;
      .filters {
        display: flex;
        text-align: center;
        font-size: 13px;
        height: .85rem;
        padding-top: .2rem;
        box-sizing: border-box;
        .item {
          flex: 1;
          position: relative;
          .jt {
            background: url("../../../assets/images/jt.png") no-repeat;
            background-size: 100% 100%;
            display: block;
            position: absolute;
            right: 0;
            width: .4rem;
            height: .4rem;
            top: 27%;
            transform: translate(-50%, -50%);
          }
          span {
            padding-bottom: .1rem;
            border-bottom: 2px solid transparent;
            &.active {
              border-color: rgb(246, 0, 0);
              color: rgb(246, 0, 0);
            }
          }
        }
      }
    }
    .searchEnd {
      padding: .3rem;
      font-size: 12px;
      margin-top: 1.8rem;
      color: rgb(158, 158, 158);
      margin-bottom: 0;
    }
    .marginTop19 {
      margin-top: 1.9rem;
    }
    .marginTop02 {
      margin-top: .2rem;
    }
    .list {
      flex: 1;
      // margin-top: 1rem;
      overflow: hidden;
      overflow-y: auto;
      .refresh {
        width: 100%;
        min-height: 100%;
        .list-main {
          width: 100%;
          height: auto;
          display: flex;
          flex-flow: wrap;
          .list-item {
            width: 50%;
            box-sizing: border-box;
            border-bottom: $border-1px;
            &:nth-child(odd) {
              border-right: $border-1px;
            }
          }
        }
      }
    }
  }

  .myNav {
    line-height: 1rem;
    background: #fff;
    padding: 0 .3rem;
    position: relative;
    .van-icon-search {
      float: right;
      line-height: 1rem;
    }
    .tab {
      position: absolute;
      left: 50%;
      top: 40%;
      width: 60%;
      transform: translate(-50%, -50%);
    }
  }

  .indexWarp {
    width: 100%;
    margin: 0 auto;
    .van-swipe-item {
      width: 100%;
      background-size: 100% 100%;
      background-position: center center;
      &:before {
        content: '';
        display: block;
        padding-bottom: 40%;
      }
    }
  }

  .price {
    position: relative;
    i {
      position: absolute;
      height: 50%;
      width: .2rem;
      right: 20%;
      background: url("/static/active.png") no-repeat;
      background-size: 100% 100%;
      top: 30%;
      transform: translateY(-50%);
      &.up {
        background-image: url("/static/up.png");
      }
      &.down {
        background-image: url("/static/down.png");
      }
    }
  }
</style>
