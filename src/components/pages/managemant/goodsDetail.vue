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
      <input type="text" v-model="recommendTxt" placeholder="商品介绍" />
      <van-cell class="hasborderb">
        <img :src="item" v-for="(item,index) in recommend" style="margin-left: 10px;">
        <vueUpload @upOk="upOk1"></vueUpload>
      </van-cell>
    </van-cell-group>
    <div class="strip"></div>
 <!--   <van-cell-group>
      <input type="text" v-model="skuTxt" placeholder="规格参考" />
      <van-cell class="hasborderb">
        <img :src="sku || detailInit.sku" v-if="sku">
        <vueUpload @upOk="upOk2"></vueUpload>
      </van-cell>
    </van-cell-group>
    <div class="strip"></div>
    <van-cell-group>
      <input type="text" v-model="shTxt" placeholder="包装售后" />
      <van-cell class="hasborderb">
        <img :src="sh || detailInit.sh" v-if="sh">
        <vueUpload @upOk="upOk3"></vueUpload>
      </van-cell>
    </van-cell-group>-->

  </div>
</template>

<script>
  export default {
    props:['detailInit'],
    name: "sex",
    data(){
      return{
        recommend:[],
        sku:'',
        sh:'',
        recommendTxt:'',
        skuTxt:'',
        shTxt:''
      }
    },
    created(){
      if(this.detailInit){
        this.recommendTxt = this.detailInit.recommendTxt
        // this.skuTxt = this.detailInit.skuTxt
        // this.shTxt = this.detailInit.shTxt
      }
    },
    methods:{
      upOk1(url){
        this.recommend.push(url)
      },
      upOk2(url){
        this.sku = url
      },
      upOk3(url){
        this.sh = url
      },
      setDat(data){
        this.recommendTxt = data.replace(/<.*?>/g, "")
        this.recommend = this.getSrc(data)
      },
      getSrc(str){
        let imgReg = /<img.*?(?:>|\/>)/gi //匹配图片中的img标签
        let srcReg = /src=[\'\"]?([^\'\"]*)[\'\"]?/i // 匹配图片中的src
        let arr = str.match(imgReg)  //筛选出所有的img
        console.log(arr)
        let srcArr = []
        for (let i = 0; i < arr.length; i++) {
          let src = arr[i].match(srcReg)
          // 获取图片地址
          srcArr.push(src[1])
        }
        return srcArr
      },
      goSomePage(over){
        if(over){
          let recommend = this.recommend
          let recommendTxt = this.recommendTxt
          // let skuTxt = this.skuTxt
          // let shTxt = this.shTxt
          // let sku = this.sku
          // let sh = this.sh
          // this.$emit('isOk',{recommend,recommendTxt,skuTxt,shTxt,sku,sh})
          this.$emit('isOk',{recommend,recommendTxt})
        }else {
          this.$emit('isOk')
        }
      }
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
    input{
      height: .88rem;
      padding-left: .3rem;
      width: 100%;
    }
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
