<template>
  <div class="sexWarp">
    <van-nav-bar
      title="我要开店"
      left-arrow
      @click-left="goSomePage('back')"
    />
    <p class="message">个人信息</p>
    <div class="warp">
      <van-cell>
        <div class="cell"><span>姓名:</span><input type="text" class="input" v-model="username" placeholder="输入姓名"/></div>
      </van-cell>
      <van-cell>
        <div class="cell"><span>手机号:</span><input v-model="phone" type="text" class="input" placeholder="输入手机号"/></div>
      </van-cell>
      <van-cell>
        <div class="cell"><span>身份证号:</span><input v-model="cardnum" type="text" class="input" placeholder="输入身份证号"/>
        </div>
      </van-cell>
    </div>
    <p class="message">店铺信息</p>
    <div class="warp">
      <van-cell>
        <div class="cell"><span>店铺名称:</span><input type="text" v-model="name" class="input" placeholder="输入店铺名称"/></div>
      </van-cell>
      <van-cell>
        <div class="cell"><span>营业地址:</span><input type="text" v-model="address" class="input" placeholder="输入营业地址"/>
        </div>
      </van-cell>
      <van-cell title="主营业务" is-link @click="isShowFl = true">{{showNames}}</van-cell>
      <!--类型为选择-->
      <van-cell>
        <div class="cell"><span>店铺电话:</span><input type="text" v-model="mobile" class="input" placeholder="输入店铺电话"/>
        </div>
      </van-cell>
      <van-cell>
        <div class="cell" style="border-bottom: 0"><span>店铺介绍:</span><input v-model="recommend"
                                                                            style="text-align: left;" type="text"
                                                                            class="input" placeholder="输入店铺介绍"/>
        </div>
      </van-cell>
      <van-cell>
        <div class="cell">
          <vueUpload @upOk="(url)=>{imgs = url}"></vueUpload>
          <img width="100" height="100" :src="imgs" alt="">
        </div>
      </van-cell>
    </div>
    <div class="sure" style="background: #598ACF" @click="save('cartInfo')" v-if="status==''">提交审核</div>
    <div class="sure" style="background: #598ACF"v-if="status=='0'">正在审核</div>
    <div class="sure" style="background: #598ACF"v-if="status=='5'"@click="save('cartInfo')">审核失败重新审核</div>
    <fl @choseOk="choseOk" @back="isShowFl=false" :type="'choseType'" v-if="isShowFl"></fl>
  </div>
</template>

<script>
  import fl from '../fl/fl'

  export default {
    name: "sex",
    data() {
      return {
        isShowFl: false,
        fls: [],
        username: '',
        phone: '',
        cardnum: '',
        name: '',
        mobile: '',
        address: '',
        recommend: '',
        imgs: '',
        categoryIds: '',
        status:''
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
      choseOk(it) {
        this.fls.push(it);
        this.isShowFl = false
      },
      save() {
        this.$ajax('/api/shop', {
          username: this.username,
          phone: this.phone,
          cardnum: this.cardnum,
          name: this.name,
          mobile: this.mobile,
          address: this.address,
          recommend: this.recommend,
          imgs: this.imgs,
          categoryIds: this.fls.map(item => item.id).join(',')
        }, (res) => {
          this.$toast('提交成功')
          this.$router.push({name: 'member'})
        }, (msg) => {
          this.$toast(msg)
        }, 'PUT')
      }
    },
    created() {
      this.$ajax('/api/shop', {}, (res) => {
        if(!res){

        }else{
          let data = res.data
          this.fls =  [],
          this.username =  data.username;
          this.phone =  data.phone;
          this.cardnum =  data.cardnum;
          this.name =  data.name;
          this.mobile =  data.mobile;
          this.address =  data.address;
          this.recommend =  data.recommend;
          this.imgs =  data.imgs;
          this.categoryIds =  data.categoryIds;
          this.status = res.data.status
        }
      }, (res) => {
      }, 'get')
    },
    components: {
      fl
    },
    computed: {
      showNames() {
        return this.fls.map(item => item.name).join(',')
      }
    }
  }
</script>

<style scoped lang="scss">
  $colorG: rgba(0, 0, 0, 0.6);
  .message {
    line-height: 1rem;
    padding-left: .2rem;
    font-size: 15px;
    color: rgba(0, 0, 0, 0.6);
  }

  .van-cell {
    line-height: 1rem;
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

  .warp {
    .hasImg .van-cell__value {
      flex: 1rem 0 0;
      .van-uploader {
        height: 1rem;
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
</style>
