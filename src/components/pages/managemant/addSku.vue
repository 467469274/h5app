<template>
  <div class="sexWarp">
    <van-nav-bar
      title="商品规格"
      left-arrow
      right-text="完成"
      @click-left="goSomePage('back')"
      @click-right="goSomePage()"
    />
    <van-cell-group>
      <van-field label="商品图片" input-align="right" v-model="value" placeholder="请输入商品名称" />
      <van-cell class="hasborderb">
        <vueUpload></vueUpload>
      </van-cell>
      <van-field class="hasborderb" label="规格名称" input-align="right" v-model="value" placeholder="请输入规格名称" />
      <van-field class="hasborderb" label="价格" input-align="right" v-model="value" placeholder="请输入价格" />
      <van-field class="hasborderb" label="运费" input-align="right" v-model="value" placeholder="请输入运费" />
      <van-field class="hasborderb" label="库存" input-align="right" v-model="value" placeholder="请输入库存" />
      <van-cell class="hasborderb" title="状态" @click="showSelect" is-link>
        {{isSelect.name}}
      </van-cell>
      <van-switch-cell v-model="checked" size=".4rem" title="主规格" />
    </van-cell-group>
    <div class="sure" @click="goSomePage('addSon')">增加规格</div>
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
