<template>
  <div class="index">
    <div class="index-main">
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive" />
      </keep-alive>
      <router-view v-if="!$route.meta.keepAlive" />
      <!-- <router-view /> -->
    </div>
    <div class="tab" v-show="isShowTab">
        <van-tabbar
          v-model="active"
          active-color="red"
        >
          <van-tabbar-item icon="wap-home" :to="{name:'shoppingMall'}">首页</van-tabbar-item>
          <van-tabbar-item icon="shop-o" :to="{name:'malls'}">商城</van-tabbar-item>
          <van-tabbar-item icon="envelop-o" :to="{name:'message'}" :info="allnum">消息</van-tabbar-item>
          <van-tabbar-item icon="contact" :to="{name:'member'}">我的</van-tabbar-item>
        </van-tabbar>
      <!-- </keep-alive> -->
    </div>
  </div>
</template>

<script>
import bus from '@/common/bus.js'
export default {
  name: 'index',
  data () {
    return {
      info: '',
      isShowTab: true,
      active:0,
      allnum:0
    }
  },
  created(){
    this.$ajax('/api/message/message',{},(res)=>{
      let num = 0
      res.data.forEach(item=>{
        num+=item.count
        console.log(item.count)
      })
      this.allnum = num
      console.log(num)
    },()=>{},'post')
  },
  watch:{
    $route:{
      handler(to){
        let name = to.name
        if(name == 'shoppingMall'){
          this.active =  0
        }else if(name=='malls'){
          this.active =  1
        }else if(name=='message'){
          this.active =  2
        }else if(name=='member'){
          this.active =  3
        }
      },
      immediate:true
    }
  }
}
</script>

<style lang="scss" scoped>
  .tab{
    .van-hairline--top-bottom{
      border-top: 1px solid #ccc;
    }
  }
</style>
