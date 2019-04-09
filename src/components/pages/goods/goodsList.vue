<template>
  <div class="goodsList">
    <div class="listTop">
      <div class="nav" v-if="type!='search'">
        <van-nav-bar :title="searchInt" left-arrow @click-left="goBack">
          <van-icon @click="goSearch" name="search" slot="right" />
        </van-nav-bar>
      </div>
      <searchInput @click="goSearch" v-if="type=='search'" :searchInt="searchInt"></searchInput>
      <div class="filters">
        <div class="item" @click="changeType(1)"><span :class="{active:acitveClass ==1}">综合  <i class="jt"></i></span></div>
        <div class="item" @click="changeType(2)"><span :class="{active:acitveClass ==2}">新品</span></div>
        <div class="item" @click="changeType(3)"><span :class="{active:acitveClass ==3}">销量</span></div>
        <div class="item" @click="changeType(4)"><span :class="{active:acitveClass ==4}">价格</span></div>
      </div>
    </div>
    <p class="searchEnd">20个结果</p>
    <div class="list" ref="list">
      <van-pull-refresh class="refresh" v-model="isRefresh" @refresh="onRefresh" :head-height="92">
        <!-- immediate-check为true默认加载一次onLoad，实际加载了2次 -->
        <van-list
          ref="vanList"
          v-model="loading"
          :finished="finished"
          @load="onLoad"
          :offset="10"
          :immediate-check="false"
        >
          <div class="list-main">
            <goods></goods>
          </div>
        </van-list>
      </van-pull-refresh>
    </div>
  </div>
</template>

<script>
import goods from '@/components/common/goods.vue'
import searchInput from '@/components/pages/search/searchInput.vue'
export default {
  components: {
    goods,
    searchInput
  },
  data () {
    return {
      categorySubId: '', // 小类ID
      goodsList: [], // 商品列表
      loading: false, // 上拉加载
      finished: false, // 上拉加载完成
      isRefresh: false, // 下拉刷新,
      type: this.$route.query.type, // 下拉刷新,
      searchInt: this.$route.query.value, // 下拉刷新,
      page: 1,// 页面,
      acitveClass:1,
    }
  },
  created () {
  },
  activated () {
    // console.log('activated')
    // 商品详情页返回不刷新数据，从分类页面进入刷新数据
    if (!this.$route.meta.isGoodsDetail) {
      this.categorySubId = this.$route.query.categorySubId
      this.onLoad()
    } else {
      this.$route.meta.isGoodsDetail = false
    }
  },
  mounted () {
    // 最低高度为list高度，使得点击空白位置也可以下拉刷新
    let height = 0
    this.$nextTick(() => {
      height = this.$refs.list.offsetHeight / 100 + 'rem'
      this.$refs.vanList.$el.style.minHeight = height
    })
  },
  methods: {
    // 数据初始化
    innitData () {
      this.page = 1
      this.finished = false
      this.isRefresh = false
      this.goodsList = []
    },
    // 返回上一页
    goBack () {
      this.$router.back(-1)
    },
    // 请求商品列表
    getGoodsList () {
      let config = {
        url: url.getGoodsListByCategorySubId,
        method: 'post',
        data: {
          categorySubId: this.categorySubId,
          page: this.page
        }
      }
      this.axios(config).then((res) => {
        // 如果请求返回200且有数据
        if (res.data.code === 200 && res.data.message.length > 0) {
          // 页面+1
          this.page++
          // 商品数量叠加
          this.goodsList = this.goodsList.concat(res.data.message)
        } else if (res.data.code === 200 && this.page === 1) {
          this.$toast('暂无商品')
          this.finished = true
        } else {
          this.finished = true
        }
        this.loading = false
        this.isRefresh = false
      }).catch((error) => {
        console.log(error)
        this.loading = false
        this.isRefresh = false
      })
    },
    // 打开页面时自动加载
    onLoad () {
      console.log('加载')
      setTimeout(() => {
        this.getGoodsList()
      }, 1000)
    },
    onRefresh () {
      setTimeout(() => {
        this.innitData()
        this.onLoad()
      }, 1000)
    },
    goSearch () {
      this.$router.push({name: 'search'})
    },
    changeType (v) {
      this.acitveClass = v
    }
  },
  computed: {
    title () {
      return '商品列表'
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
  .listTop{
    .nav{
      color: #000;
    }
    background: #fff;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    touch-action: none;
    z-index: 1;
    .filters{
      display: flex;
      text-align: center;
      font-size:13px;
      height: .85rem;
      padding-top: .2rem;
      box-sizing: border-box;
      .item{
        flex: 1;
        position: relative;
        .jt{
          background: url("../../../assets/images/jt.png") no-repeat;
          background-size:100% 100%;
          display: block;
          position: absolute;
          right: 0;
          width: .4rem;
          height: .4rem;
          top: 27%;
          transform: translate(-50%,-50%);
        }
        span{
          padding-bottom:.1rem;
          border-bottom: 2px solid transparent;
          &.active{
            border-color: rgb(246,0,0);
            color: rgb(246,0,0);
          }
        }
      }
    }
  }
  .searchEnd{
    padding:.3rem;
    font-size: 12px;
    margin-top: 1.8rem;
    color: rgb(158,158,158);
    margin-bottom: 0;
  }
  .list {
    flex: 1;
    // margin-top: 1rem;
    overflow: hidden;
    overflow-y: auto;
    .refresh {
      width:100%;
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

</style>
