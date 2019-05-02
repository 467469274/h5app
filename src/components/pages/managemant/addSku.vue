<template>
  <div class="sexWarp">
    <van-nav-bar
      title="商品规格"
      left-arrow
      right-text="完成"
      @click-left="goSomePage('back')"
      @click-right="goSomePage"
    />
    <div class="main">
      <van-cell-group v-for="(item,index) in list">
        <van-field label="商品图片" input-align="right" v-model="item.remarks" placeholder="请输入规格描述" />
        <van-cell class="hasborderb">
          <img width="100" height="100" v-for="img in item.imgs" :src="img" />
          <vueUpload @upOk="(url)=>{item.imgs.push(url)}"></vueUpload>
        </van-cell>
        <van-field class="hasborderb" label="规格名称" input-align="right" v-model="item.name" placeholder="请输入规格名称" />
        <van-field class="hasborderb" label="价格" input-align="right" v-model="item.price" placeholder="请输入价格" />
        <van-field class="hasborderb" label="运费" input-align="right" v-model="item.freight" placeholder="请输入运费" />
        <van-field class="hasborderb" label="库存" input-align="right" v-model="item.stock" placeholder="请输入库存" />
        <van-field class="hasborderb" label="金券数量" input-align="right" v-model="item.goldCouponNum" placeholder="请输入金券数量" />
        <van-cell class="hasborderb" title="状态" @click="showSelect(index)" is-link>
          {{item.statusChinese}}
        </van-cell>
        <van-switch-cell @change="onchange(index)" v-model="item.mainSkuId" size=".4rem" title="主规格" />
          <div class="strip" style="background:#EDEEEF;"></div>
      </van-cell-group>
    </div>
    <div class="sure" @click="addSku">增加规格</div>
    <van-actionsheet
      v-model="show"
      :actions="actions"
      @select="select"
    />
  </div>
</template>

<script>
  export default {
    props:['initData'],
    name: "sex",
    data(){
      return{
        nowIndex:0,
        list:[],
        value:'',
        checked:true,
        show:false,
        isSelect:{
          name:'请选择'
        },
        actions:[
          {
            name: '上架',
            id:5
          },
          {
            name: '下架',
            id:0
          }
        ]
      }
    },
    created(){
      if(this.initData)this.list  = this.initData;
    },
    methods:{
      goSomePage (type) {
        if(type){
          let errorFlage;
          try{
            let flag;
            if(this.list.length == 0)throw new Error('请添加sku')
            this.list.forEach((item)=>{
              console.log(item)
              if(item.remarks == '' ||!item.remarks){
                throw new Error('请填写规格描述')
              }else if(item.name == ''||!item.name){
                throw new Error('请填写规格名称')
              }else if(item.imgs.length==0||!item.imgs){
                throw new Error('请填写规格图片')
              }else if(item.price == '' || !item.price){
                throw new Error('请填写价格')
              }else if(item.freight == '' || !item.freight){
                throw new Error('请填写运费')
              }else if(item.stock == '' || !item.stock){
                throw new Error('请填写库存')
              }else if(item.goldCouponNum == '' || !item.goldCouponNum){
                throw new Error('请填写金券数量')
              }else if(typeof item.status != 'number'){
                throw new Error('请选择状态')
              }
              if(item.mainSkuId && !flag){
                flag = true
              }
            })
            if(!flag)throw new Error('请选择主sku')
          }catch (err) {
            errorFlage = true
            errorFlage = err.message
          }
          if(!errorFlage){
            this.$emit('back',this.list)
          }else{
            this.$toast(errorFlage)
          }
        }else {
          this.$emit('back')
        }
      },
      showSelect(index){
        this.show = true
        this.nowIndex = index
      },
      select(v){
        this.list[this.nowIndex].status = v.id
        this.list[this.nowIndex].statusChinese = v.name
        this.isSelect = v
        this.show = false
      },
      addSku(){
        this.list.push({imgs:[]})
      },
      onchange(sindex){
        this.list.forEach((item,index)=>{
          if(sindex !=index){
            item.mainSkuId = false
          }
        })
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
    z-index:2;
    .item{
      line-height:1rem;
      background: #fff;
      border-bottom:1px solid #ccc;
      padding-left: .2rem;
      font-size: 14px;
      color: rgba(0,0,0,0.5);
    }
    .main{
      position:absolute;
      top: .88rem;
      bottom: .88rem;
      left: 0;
      width: 100%;
      overflow-y: scroll;
    }
  }
  .hasborderb{
    border-bottom: 1px solid rgba(0,0,0,0.2);
  }
  .van-cell__value{
    display: inline-block;
  }
</style>
