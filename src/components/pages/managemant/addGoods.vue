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
      <van-field class="hasborderb" label="名称" input-align="right" v-model="formData.name" placeholder="请输入商品名称" />
      <van-cell class="hasborderb" title="状态" @click="showSelect" is-link>
        {{isSelect.name}}
      </van-cell>
      <van-cell class="hasborderb" title="商品类目" @click="isShowFl= true" is-link >{{flName}}</van-cell>
      <van-cell class="hasborderb" title="商品详情" @click="showDetail= true" is-link />
      <van-cell class="hasborderb" title="商品规格" @click="showSku = true" is-link />
    </van-cell-group>
    <div class="sure" @click="save">确认增加</div>
    <van-actionsheet
      v-model="show"
      :actions="actions"
      @select="select"
    />
    <addSku v-show="showSku" :initD2ata="formData.skus" @back="hideSku"></addSku>
    <goodsDetail :detailInit="detailInit" @isOk="isOk" v-show="showDetail" @back="hideDetail"></goodsDetail>
    <fl @back="isShowFl=false" :type="'choseType'" @choseOk="choseOk" v-if="isShowFl"></fl>
  </div>
</template>

<script>
  import addSku from './addSku.vue'
  import goodsDetail from './goodsDetail.vue'
  import classList from '../class/classList'
  import fl from '../fl/fl.vue'
  export default {
    name: "sex",
    data(){
      return{
        showclassList:false,
        formData:{
          "categoryId": 0,
          "desc": "",
          "name": "",
          "skus": [],
          "status": 0
        },
        checked:true,
        isShowFl:false,
        showSku:false,
        showDetail:false,
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
            id:5
          }
        ],
        detailInit:{},
        skuDetail:[],
        flName:''
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
      save(){
        // this.formData.desc = this.detailInit.recommendTxt+`<img src="${this.detailInit.recommend}"/>`
        this.formData = {"categoryId":3,"desc":"大青蛙多群","name":"大青蛙多群无多","skus":[{"imgs":[],"recommend":"大青蛙多","name":"大青蛙多","price":"123123","freight":"123","stock":"12323","status":0,"statusChinese":"上架"}],"status":0}
        this.$ajax('/api/shop/product', this.formData, (res) => {
          console.log(res)
        }, () => {
        }, 'put')
      },
      showSelect(){
        this.show = true
      },
      select(v){
        this.isSelect = v
        this.show = false
      },
      hideSku(data){
        if(data){
          this.formData.skus = data
        }
        this.showSku = false
      },
      hideDetail(){
        this.showDetail = false
      },
      isOk(obj){
        if(obj){this.detailInit = obj}
        this.showDetail = false
      },
      choseOk(obj){
        this.formData.categoryId = obj.id
        this.flName = obj.name
        this.isShowFl = false
      }
    },
    components:{
      addSku,goodsDetail,classList,fl
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
