<template>
  <div class="sexWarp">
    <van-nav-bar
      title="商品详情"
      left-arrow
      right-text="完成"
      @click-left="goSomePage"
      @click-right="goSomePage('over')"
    />
    <van-cell-group>
      <van-cell title="商品介绍"/>
      <van-cell class="hasborderb">
        <img :src="recommend" v-if="recommend">
        <vueUpload @upOk="upOk1"></vueUpload>
      </van-cell>
    </van-cell-group>
    <div class="strip"></div>
    <van-cell-group>
      <van-cell title="规格参考"/>
      <van-cell class="hasborderb">
        <img :src="sku" v-if="sku">
        <vueUpload @upOk="upOk2"></vueUpload>
      </van-cell>
    </van-cell-group>
    <div class="strip"></div>
    <van-cell-group>
      <van-cell title="包装售后"/>
      <van-cell class="hasborderb">
        <img :src="sh" v-if="sh">
        <vueUpload @upOk="upOk3"></vueUpload>
      </van-cell>
    </van-cell-group>

  </div>
</template>

<script>
  export default {
    name: "sex",
    data(){
      return{
        recommend:'',
        sku:'',
        sh:'',
      }
    },
    methods:{
      upOk1(url){
        this.recommend = url
      },
      upOk2(url){
        this.sku = url
      },
      upOk3(url){
        this.sh = url
      },
      goSomePage()
    }
  }
</script>

<style scoped lang="scss">
  .sexWarp{
    position:fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: #EDEEEF;
    z-index:1;
    .item{
      line-height:1rem;
      background: #fff;
      border-bottom:1px solid #ccc;
      padding-left: .2rem;
      font-size: 14px;
      color: rgba(0,0,0,0.5);
    }
  }
  .hasborderb{
    border-bottom: 1px solid rgba(0,0,0,0.2);
    img{
      width:1rem;
      height:1rem;
      display:inline-block;
    }
  }
  .van-cell__value{
    display: inline-block;
  }
</style>
