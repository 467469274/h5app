<template>
  <div class="locations">
    <van-nav-bar
      title="编辑收货地址"
      left-arrow
      @click-left="goSomePage('back')"
    />
    <div>
      <van-cell>
        <div class="cell"><span>收货人:</span><input type="text" v-model="name" class="input"/></div>
      </van-cell>
      <van-cell>
        <div class="cell"><span>手机号码:</span><input type="text" v-model="phone" class="input"/></div>
      </van-cell>
      <van-cell>
        <div class="cell" @click="show = true"><span>所在地区:</span><input type="text" v-model="ssq" disabled
                                                                        class="input"/></div>
      </van-cell>
      <van-cell>
        <div class="cell"><span>详细地址:</span><input type="text" v-model="address" class="input"/></div>
      </van-cell>
      <van-cell>
        <div class="cell flexss">
          <div class="txt">
            <span>默认地址:</span>
            <p>注:每次下单会使用该地址 (轻松购除外)</p>
          </div>
          <van-switch size=".4rem" v-model="checked"/>
        </div>
      </van-cell>
    </div>
    <div class="saveBtn" @click="save">保存并使用</div>
    <van-area class="arealist" @confirm="sure" @cancel="cancel" v-show="show" :item-height="80" :area-list="list"/>
  </div>
</template>
<script type="text/ecmascript-6">
  import list from './local'

  export default {
    data() {
      return {
        checked: false,
        list: list,
        show: false,
        ssq:[],
        name: '',
        phone: '',
        provinceId: '',
        provinceName: '',
        cityId: '',
        cityName: '',
        countyId: '',
        countyName: '',
        address: '',
      }
    },
    created() {
      this.getData()
    },
    methods: {
      goSomePage(type) {
        if (type == 'back') {
          this.$router.back(-1)
        } else {
          this.$router.push({name: type})
        }
      },
      sure(a) {
        this.ssq = a.map(item => item.name);
        this.provinceId = a[0].code;
        this.provinceName = a[0].name;
        this.cityId = a[1].code;
        this.cityName = a[1].name;
        this.countyId = a[2].code;
        this.countyName = a[2].name;
        this.show = false
      },
      cancel() {
        this.show = false
      },
      getData() {
        if(!this.$route.query.location)return
        this.$ajax('/api/product/addressById', {
          id: this.$route.query.location,
          token: 3
        }, (res) => {
          let detail = res.data
          this.address = detail.address
          this.cityId = detail.cityId
          this.cityName = detail.cityName
          this.countyId = detail.countyId
          this.countyName = detail.countyName
          this.checked = detail.isDefault == 1 ? true : false
          this.name = detail.name
          this.phone = detail.phone
          this.provinceId = detail.provinceId
          this.provinceName = detail.provinceName
          this.ssq = [detail.provinceName,detail.cityName,detail.countyName]
        }, () => {
        }, 'get')
      },
      save() {
        let data = {
          name: this.name,
          phone: this.phone,
          provinceId: this.provinceId,
          provinceName: this.provinceName,
          cityId: this.cityId,
          cityName: this.cityName,
          countyId: this.countyId,
          countyName: this.countyName,
          address: this.address,
          isDefault: this.checked ? 1 : 0,
          token: 3
        },
          type = 'post',message='保存成功'
        if(this.$route.query.location){
          data.id = this.$route.query.location
          type = 'PUT'
          message='修改成功'
        }
        this.$ajax('/api/product/address', data, (res) => {
          this.$toast(message);
          this.goSomePage('back')

        }, () => {
        }, type)
      }
    }
  }
</script>
<style scoped lang="scss">
  $colorG: rgba(0, 0, 0, 0.6);
  .cell {
    display: flex;
    span {
      flex: 1.5rem 0 0;
      font-size: 15px;
      color: $colorG;
    }
    input {
      border: none;
      outline: none;
      flex: 1;
    }
  }

  .flexss {
    display: flex;
    align-items: center;
    .txt {
      flex: 1;
      p {
        font-size: 10px;
        color: rgba(0, 0, 0, 0.4);
      }
    }
  }

  .saveBtn {
    background: rgb(259, 159, 10);
    text-align: center;
    position: fixed;
    left: 0;
    bottom: 0;
    color: #fff;
    line-height: 1rem;
    width: 100%;
    font-size: 15px;
  }
</style>
<style lang="scss">

  .arealist {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 4rem;
    background: #fff;
  }
</style>
