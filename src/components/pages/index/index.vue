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
        <van-tabbar v-model="active">
          <van-tabbar-item icon="wap-home" :to="{name:'shoppingMall'}">首页</van-tabbar-item>
          <van-tabbar-item icon="shop-o" :to="{name:'malls'}">商城</van-tabbar-item>
          <van-tabbar-item icon="envelop-o" :to="{name:'message'}">消息</van-tabbar-item>
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
      active: 0,
      icon: [{
        normal: require('@/assets/images/classify.png'),
        active: require('@/assets/images/classify-active.png')
      }],
      info: '',
      isShowTab: true
    }
  },
  watch: {
    // active: {
    //   handler (val, oldval) {
    //     console.log(val)
    //   },
    //   deep: true
    // }
  },
  created () {
    // this.changeTabbar()
  },
  mounted () {
    // console.log('mounted')
    // this.getInfo()
    this.changeInfo()
  },
  activated () {
    this.changeTabbar()
    // this.getInfo()
  },
  methods: {
    // 防止刷新显示错误
    changeTabbar () {
      /*
//      let arrRouter = ['shoppingMall', 'category', 'member']
      let nowRouteName = this.$route.name
      arrRouter.forEach((item, index) => {
        if (nowRouteName === item) {
          this.active = index
        }
      })*/
    },
    changeInfo () {/*
      bus.$on('info', (val) => {
        this.info = val
      })
      bus.$on('tab', (val) => {
        console.log(val)
        this.isShowTab = val
      })*/
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
