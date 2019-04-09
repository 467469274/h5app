<template>
  <div class="searchWarp">
    <searchInput @change="search" :searchInt="searchInt"></searchInput>
    <div class="historySearch">
      <p class="top">
        <span class="history">历史搜索</span>
        <span class="del"></span>
      </p>
      <div class="historys">
        <span @click="goDetail">白酒</span>
      </div>
    </div>
    <div class="historySearch">
      <p class="top">
        <span class="history">热搜</span>
      </p>
      <div class="historys hotSearch">
        <span @click="goDetail">白酒</span>
      </div>
    </div>
  </div>
</template>
<script>
import searchInput from './searchInput'
export default {
  name: 'search',
  data () {
    return {
      kk: 1,
      searchInt:''
    }
  },
  components: {
    searchInput
  },
  methods: {
    goDetail () {
      this.$router.push({name: 'goodsList', query: {type: 'search', value: '搜索内容'}})
    },
    search (v) {
      this.$ajax('/api/search', {k: v}, (res) => {
        console.log(res)
      }, () => {}, 'get')
    }
  }
}
</script>
<style scoped="scoped" lang="scss">
  $bgc:rgb(236,237,240);
  $colorc:rgb(117,118,119);
  $border1:.5px solid #ccc;
  .searchWarp{
    background: #fff;
    .historySearch{
      .top{
        padding: 0 .2rem;
        .history{
          font-size: .3rem;
        }
        .del{
          float: right;
          width: .4rem;
          height: .4rem;
          display: block;
          background: red;
        }
      }
      .historys{
        &.hotSearch{
          overflow: hidden;
          border-bottom: none;
          span{
            width: 50%;
            text-align: left;
            background: none;
            float: left;
            margin: 0;
            padding: 0;
          }
        }
        padding: 0 .2rem;
        margin-top: .5rem;
        font-size: 0;
        padding-bottom: 1rem;
        border-bottom: $border1;
        span{
          display: inline-block;
          padding: 0 .3rem;
          background: $bgc;
          color: $colorc;
          border-radius: .2rem;
          line-height: .5rem;
          font-size: .24rem;
          margin-right: .3rem;
          margin-bottom: .2rem;
        }
      }
    }
  }
</style>
