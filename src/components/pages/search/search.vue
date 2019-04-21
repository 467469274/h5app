<template>
  <div class="searchWarp">
    <searchInput @change="search"  :searchInt="searchInt"></searchInput>
    <div class="historySearch" v-if="searchKey==''">
      <p class="top">
        <span class="history">历史搜索</span>
        <van-icon class="del" size=".4rem" name="delete" />
      </p>
      <div class="historys">
        <span @click="goDetail(item)" v-for="(item,index) in historyKey">{{item}}</span>
      </div>
    </div>
    <div class="historySearch"  v-if="searchKey==''">
      <p class="top">
        <span class="history">热搜</span>
      </p>
      <div class="historys hotSearch">
        <span @click="goDetail(item)" v-for="item in hotKey">{{item}}</span>
      </div>
    </div>
    <div class="searchList">
      <div class="searchItem" v-for="item in searchEnd"@click="goDetail(item)" >
        <van-icon size=".4rem" name="search" />{{item}}
      </div>
    </div>
    <div class="searchEmpty" v-if="searchKey !='' && searchEnd.length == 0">
      没有搜索到内容哦
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
      searchInt:'',
      searchEnd:[],
      searchKey:'',
      hotKey:[],
      historyKey:[]
    }
  },
  components: {
    searchInput
  },
  created(){
    this.getHotSearch()
    this.getHistory()
  },
  methods: {
    goDetail (int) {
      this.$router.push({name: 'goodsList', query: {type: 'search', v: int}})
    },
    getHotSearch(){
      this.$ajax('/api/search/getHotSearch', {}, (res) => {
        this.hotKey = res.data
      }, () => {}, 'get')
    },
    getHistory(){
      this.$ajax('/api/search/getHistory', {}, (res) => {
        this.historyKey = res.data
      }, () => {}, 'get')
    },
    search (v) {
      this.searchKey = v
      if(this.setIn)clearTimeout(this.setIn);
      this.setIn = setTimeout(()=>{
        this.$ajax('/api/search/getSearchTips', {k: v}, (res) => {
          this.searchEnd = res.data
        }, () => {}, 'get')
      },150)
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
        padding:.2rem;
        .history{
          font-size: .3rem;
        }
        .del{
          float: right;
          width: .4rem;
          height: .4rem;
          display: block;vertical-align: middle;
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
        font-size: 0;
        padding-bottom: .5rem;
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
    .searchList{
      .searchItem{
        line-height:.7rem;
        padding: .2rem;
        border-bottom: 1px solid #ccc;
        i{
          vertical-align: middle;
          margin-right: .3rem;
        }
      }
    }
    .searchEmpty{
      line-height: 1rem;
      text-align: center;
    }
  }
</style>
