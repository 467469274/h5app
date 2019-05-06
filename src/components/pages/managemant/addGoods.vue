<template>
  <div class="sexWarp">
    <van-nav-bar
      title="添加商品"
      left-arrow
      @click-left="goSomePage('back')"
    />
    <van-cell-group>
      <van-field class="hasborderb" label="名称" input-align="right" v-model="formData.name" placeholder="请输入商品名称"/>
      <van-cell class="hasborderb" title="状态" @click="showSelect" is-link>
        {{isSelect.name}}
      </van-cell>
      <van-cell class="hasborderb" title="商品类目" @click="isShowFl= true" is-link>{{flName}}</van-cell>
      <van-cell class="hasborderb" title="商品详情" @click="showDetail= true" is-link/>
      <van-cell class="hasborderb" title="商品规格" @click="showSku = true" is-link/>
    </van-cell-group>
    <div class="sure" @click="save">确认增加</div>
    <van-actionsheet
      v-model="show"
      :actions="actions"
      @select="select"
    />
    <addSku ref="$addsku" v-show="showSku" :initD2ata="formData.skus" @back="hideSku"></addSku>
    <goodsDetail ref="goodsDetail" :detailInit="detailInit" @isOk="isOk" v-show="showDetail" @back="hideDetail"></goodsDetail>
    <fl @back="isShowFl=false" :type="'choseType'" @choseOk="choseOk" v-if="isShowFl"></fl>
    <colorBox :color="'#F5F6F7'"></colorBox>
  </div>
</template>

<script>
  import addSku from './addSku.vue'
  import goodsDetail from './goodsDetail.vue'
  import classList from '../class/classList'
  import fl from '../fl/fl.vue'

  export default {
    name: "sex",
    data() {
      return {
        showclassList: false,
        formData: {
          "categoryId": 0,
          "desc": "",
          "name": "",
          "skus": [],
          "status": 0
        },
        checked: true,
        isShowFl: false,
        showSku: false,
        showDetail: false,
        show: false,
        isSelect: {
          name: '请选择'
        },
        actions: [
          {
            name: '上架',
            id: 5
          },
          {
            name: '下架',
            id: 0
          }
        ],
        detailInit: {},
        skuDetail: [],
        flName: ''
      }
    },
    methods: {
      goSomePage(type) {
        if (type == 'back') {
          this.$router.back(-1)
        } else {
          this.$router.push({name: type})
        }
      },
      GetRequest(url) {
        var result = [];
        var query = url.split("?")[1];
        var queryArr = query.split("&");
        queryArr.forEach(function (item) {
          var obj = {};
          var value = item.split("=")[0];
          var key = item.split("=")[1];
          obj[key] = value;
          result.push(obj);
        });
        return result;
      },
      save() {
        if (this.detailInit.recommendTxt == '') {
          this.$toast('请填写商品介绍')
        } else if (this.formData.skus.length == 0) {
          this.$toast('请填写sku信息')
        } else if(this.isSelect.name == '请选择'){
          this.$toast('请选择状态')
        }else if(this.formData.categoryId == 0){
          this.$toast('请选择类目')
        }else{
          this.formData.status = this.isSelect.id
          this.formData.desc = this.detailInit.recommendTxt + `<img src='${this.detailInit.recommend}'/>`
          this.formData.skus.forEach((item) => {
            item.imgs = item.imgs.join(',')
            item.mainSkuId = item.mainSkuId ? 1 : 0
          })
          this.$ajax('/api/shop/product', this.formData, (res) => {
            this.$toast('添加成功')
            this.$router.push('managemant')
          }, (msg) => {
            this.$toast(msg)
          }, 'setProduct')
        }
      },
      showSelect() {
        this.show = true
      },
      select(v) {
        this.isSelect = v
        this.show = false
      },
      hideSku(data) {
        if (data) {
          this.formData.skus = data
        }
        this.showSku = false
      },
      hideDetail() {
        this.showDetail = false
      },
      isOk(obj) {
        if (obj) {
          this.detailInit = obj
        }
        this.showDetail = false
      },
      choseOk(obj) {
        this.formData.categoryId = obj.id
        this.flName = obj.name
        this.isShowFl = false
      }
    },
    created(){
      if(this.$route.query.goodsid){
        this.$ajax('/api/shop/productDetail',{
          id:this.$route.query.goodsid
        },(res)=>{
          let data = res.data
          data.skus = data.skus.map((item)=>{
            item.imgs = item.imgs.split(',')
            item.statusChinese = item.status==5?'上架':'下架'
            item.mainSkuId = item.mainSkuId?true:false
            return item
          })
          this.isSelect = this.actions[data.status==5?0:1]
          this.formData = data
          this.$refs.$addsku.setDat(data.skus)
          this.$refs.goodsDetail.setDat(data.desc)
          /*{
            "categoryId": 0,
              "desc": "",
              "name": "",
              "skus": [],
              "status": 0
          }*/
          console.log(this.formData)
        },(err)=>{
          this.$toast('商品有误，请联系管理员')
        },'get')
      }
    },
    components: {
      addSku, goodsDetail, classList, fl
    }
  }
</script>

<style scoped lang="scss">
  .list {
    .item {
      line-height: 1rem;
      background: #fff;
      border-bottom: 1px solid #ccc;
      padding-left: .2rem;
      font-size: 14px;
      color: rgba(0, 0, 0, 0.5);
    }
  }

  .hasborderb {
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  }
</style>
