<template>
  <div class="myShopWarp">
    <van-nav-bar
      title="店铺信息"
      :right-text="isEdit?'取消':'编辑'"
      left-arrow
      @click-left="goSomePage('back')"
      @click-right="changeEdit"
    />
    <div class="shopTop">
      <div class="imgWarp">
        <img :src="userInfo.head" v-if="userInfo.head">
        <img src="/static/default-head.png" v-else>
      </div>
    </div>
    <div class="warp">
      <van-cell>
        <div class="cell"><span>名称</span><input type="text" :disabled="!isEdit" :placeholder="isEdit?'请填写':''" v-model="shopInfo.name" class="input"/></div>
      </van-cell>
      <van-cell  @click="showFl" >
        <div class="cell"><span>主营业务</span><input type="text" v-model="shopInfo.categoryNames" disabled class="input"/></div>
      </van-cell>
      <van-cell>
        <div class="cell"><span>营业地址</span><input type="text" :disabled="!isEdit"  v-model="shopInfo.address" :placeholder="isEdit?'请填写':''" class="input"/></div>
      </van-cell>
      <van-cell>
        <div class="cell"><span>联系电话</span><input v-model="shopInfo.phone" :disabled="!isEdit" type="text" :placeholder="isEdit?'请填写':''" class="input"/></div>
      </van-cell>
    </div>
    <div class="sure bgr" @click="save" v-if="isEdit">确认并提交材料</div>
    <fl @choseOk="choseOk" @back="isShowFl=false" :type="'choseType'" v-if="isShowFl"></fl>
    <colorBox :color="'#F5F6F7'"></colorBox>
  </div>
</template>
<script type="text/ecmascript-6">
  import fl from '../fl/fl'
  export default {
    components:{
      fl
    },
    data() {
      return {
        userInfo: {},
        shopInfo: {},
        isEdit:false,
        isShowFl:false,
      }
    },
    created() {
      this.getAvatar()
    },
    methods: {
      goSomePage(type) {
        if (type == 'back') {
          this.$router.back(-1)
        } else {
          this.$router.push({name: type})
        }
      },
      change(){
        this.$ajax('/api/shop',{id:2,username:'123123mmm'}, (res) => {
          this.isEdit = false;
          this.$toast('编辑成功')
        }, (err) => {
          this.$toast(err)
        },'PUT')
      },
      showFl(){
        if(this.isEdit){
          this.isShowFl = true
        }
      },
      changeEdit(){
        if(this.isEdit){
          this.isEdit = false
          this.shopInfo =JSON.parse(JSON.stringify(this.detailss))
        }else{
          this.detailss = JSON.parse(JSON.stringify(this.shopInfo))
          this.isEdit = true
        }
      },
      choseOk(item){
        this.isShowFl = false
        this.shopInfo.categoryNames = item.name
        this.shopInfo.categoryIds = item.id
      },
      save(){
        this.$ajax('/api/mine/info',this.shopInfo, (res) => {
          this.isEdit = false;
          this.$toast('编辑成功')
        }, (err) => {
          this.$toast(err)
          console.log(err)
        },'PUT')
      },
      getAvatar() {
        this.$ajax('/api/mine/info', {}, (res) => {
          this.userInfo = res.data
          if (res.data.shop == 'y') {
            this.$ajax('/api/shop', {},
              (data) => {
                this.shopInfo = data.data
              },
              () => {
              }
              , 'get')
          }
        }, () => {
        }, 'get')
      }
    }
  }
</script>
<style lang="scss" scoped>
  $colorG: rgba(0, 0, 0, 0.6);
  .myShopWarp {
    .shopTop {
      width: 100%;
      margin: 0 auto;
      height: 3.7rem;
      background: url("../../../assets/images/WX20190413-234859@2x.png");
      background-size: 100% 100%;
      position: relative;
      .imgWarp {
        padding: .1rem;
        width: 1.2rem;
        height: 1.2rem;
        position: absolute;
        left: 50%;
        top: 50%;
        background: #fff;
        border-radius: 50%;
        transform: translate(-50%, -50%);
        img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
        }
      }
    }

  }

  .warp {
    .hasImg .van-cell__value {
      flex: .9rem 0 0;
      .van-uploader {
        height: .9rem;
      }
    }
    .van-cell {
      border-bottom: 1px solid #ccc;
      line-height: 1rem;
      box-sizing: border-box;
      i {
        line-height: 1rem;
      }
      img {
        width: 1rem;
        height: 1rem;
        text-align: right;
      }
    }
  }

  .cell {
    display: flex;
    span {
      flex: 1.5rem 0 0;
      font-size: 15px;
      color: $colorG;
    }
    input {
      flex: 1;
      text-align: right;
    }
  }

  .sure {
    background: #F1B23E;
    color: #fff;
    text-align: center;
    line-height: 1rem;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    font-size: 16px;
  }
</style>
