<template>
  <div class="sexWarp">
    <van-nav-bar
      title="商品详情"
      left-arrow
      right-text="完成"
      @click-left="goSomePage('back')"
      @click-right="goSomePage()"
    />
    <van-cell-group>
      <van-cell title="商品介绍"/>
      <van-cell class="hasborderb">
        <vueUpload></vueUpload>
      </van-cell>
    </van-cell-group>
    <div class="strip"></div>
    <van-cell-group>
      <van-cell title="规格参考"/>
      <van-cell class="hasborderb">
        <vueUpload></vueUpload>
      </van-cell>
    </van-cell-group>
    <div class="strip"></div>
    <van-cell-group>
      <van-cell title="包装售后"/>
      <van-cell class="hasborderb">
        <vueUpload></vueUpload>
      </van-cell>
    </van-cell-group>
    <van-actionsheet
      v-model="show"
      :actions="actions"
      @select="select"
    />

  </div>
</template>

<script>
  export default {
    name: "sex",
    data(){
      return{
        value:'',
        checked:true,
        show:false,
        isSelect:{
          name:'请选择'
        },
        actions:[
          {
            name: '上架',
            id:0
          },
          {
            name: '下架',
            id:0
          }
        ]
      }
    },
    methods:{
      goSomePage (type) {
        if(type == 'back'){
          this.$emit('back')
        }else{
          this.$emit('back')
        }
      },
      showSelect(){
        this.show = true
      },
      select(v){
        this.isSelect = v
        this.show = false
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
  }
  .van-cell__value{
    display: inline-block;
  }
</style>
