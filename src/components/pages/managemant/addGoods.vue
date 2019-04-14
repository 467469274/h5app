<template>
  <div class="sexWarp">
    <van-nav-bar
      title="添加商品"
      left-arrow
      right-text="完成"
      @click-left="goSomePage('back')"
      @click-right="goSomePage('back')"
    />
    <van-cell-group>
      <van-field class="hasborderb" label="名称" input-align="right" v-model="value" placeholder="请输入商品名称" />
      <van-cell class="hasborderb" title="状态" @click="showSelect" is-link>
        {{isSelect.name}}
      </van-cell>
      <van-cell class="hasborderb" title="类目" @click="showSelect" is-link />
      <van-cell class="hasborderb" title="商品详情" @click="showSelect" is-link />
      <van-cell class="hasborderb" title="商品规格" @click="showSku = true" is-link />
    </van-cell-group>
    <div class="sure" @click="goSomePage('addSon')">确认增加</div>
    <van-actionsheet
      v-model="show"
      :actions="actions"
      @select="select"
    />
    <addSku v-show="showSku" @back="hideSku"></addSku>
    <goodsDetail v-show="showDetail" @back="hideDetail"></goodsDetail>
  </div>
</template>

<script>
  import addSku from './addSku.vue'
  import goodsDetail from './goodsDetail.vue'
  export default {
    name: "sex",
    data(){
      return{
        value:'',
        checked:true,
        showSku:false,
        showDetail:true,
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
          this.$router.back(-1)

        }else{
          this.$router.push({name: type})
        }
      },
      showSelect(){
        this.show = true
      },
      select(v){
        this.isSelect = v
        this.show = false
      },
      hideSku(){
        this.showSku = false
      },
      hideDetail(){
        this.showDetail = false
      }
    },
    components:{
      addSku,goodsDetail
    }
  }
</script>

<style scoped lang="scss">
  .list{
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
</style>
