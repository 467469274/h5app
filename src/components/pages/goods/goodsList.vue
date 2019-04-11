<template>
  <div class="goodsList">
    <div class="listTop">
      <div class="nav" v-if="type!='search'">
        <van-nav-bar  v-if="listType!='malls'" :title="searchInt">
          <van-icon @click="goSearch" name="search" color="rgba(0,0,0,0.4)" size=".4rem" slot="right" />
          <van-icon @click-left="goBack" name="arrow-left" color="rgba(0,0,0,0.4)" size=".4rem" slot="left"/>
        </van-nav-bar>
        <div class="myNav"  v-if="listType=='malls'">
          <van-icon @click="goSearch" name="search" color="rgba(0,0,0,0.4)" size=".4rem" slot="right" />
          <van-tabs v-model="active2" title-active-color="#f44" class="tab">
            <van-tab title="现金商城"></van-tab>
            <van-tab title="会员商城"></van-tab>
          </van-tabs>
          <van-icon @click-left="goBack" name="arrow-left" color="rgba(0,0,0,0.4)" size=".4rem" slot="left"/>
        </div>
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
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
       <goods></goods>
      </van-list>
  </div>
</template>

<script>
import goods from '@/components/common/goods.vue'
import searchInput from '@/components/pages/search/searchInput.vue'
export default {
  props:['listType'],
  components: {
    goods,
    searchInput
  },
  data () {
    return {
      list: [],
      loading: false,
      finished: false,
      type: this.$route.query.type,
      searchInt: this.$route.query.value,
      active2:0,
      acitveClass:1,
    }
  },
  created () {

  },
  activated () {
  },
  mounted () {
  },
  methods: {
    // 数据初始化
    innitData () {
    },
    // 返回上一页
    goBack () {
      this.$router.back(-1)
    },
    // 请求商品列表
    // 打开页面时自动加载

    onLoad() {
      // 异步更新数据
    },
    onRefresh () {

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
  .myNav{
    line-height: 1rem;
    background: #fff;
    padding:0 .3rem;
    position: relative;
    .van-icon-search{
      float: right;
      line-height: 1rem;
    }
    .tab{
      position: absolute;
      left: 50%;
      top: 40%;
      width: 60%;
      transform: translate(-50%,-50%);
    }
  }

</style>
