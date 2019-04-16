<template>
  <div class="locations">
    <van-nav-bar
      title="编辑收货地址"
      left-arrow
      @click-left="goSomePage('back')"
    />
    <div>
      <van-cell>
        <div class="cell"><span>收货人:</span><input type="text" class="input"/></div>
      </van-cell>
      <van-cell>
        <div class="cell"><span>手机号码:</span><input type="text" class="input"/></div>
      </van-cell>
      <van-cell>
        <div class="cell"><span>所在地区:</span><input type="text" class="input"/></div>
      </van-cell>
      <van-cell>
        <div class="cell"><span>详细地址:</span><input type="text" class="input"/></div>
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
    <div class="saveBtn">保存并使用</div>
    <van-area class="arealist"item-height="80" :area-list="list"/>


  </div>
</template>
<script type="text/ecmascript-6">
  import list from './local'

  export default {
    data() {
      return {
        checked: true,
        list: list,
        show: true
      }
    },
    created() {
      console.log()
    },
    methods: {
      goSomePage(type) {
        if (type == 'back') {
          this.$router.back(-1)
        } else {
          this.$router.push({name: type})
        }
      },
      getData() {
        /*
      this.$ajax('/api/product/address', {
        name: '测试姓名',
        phone: '18610904457',
        provinceId: '10000',
        provinceName: '北京',
        cityId: '110000',
        cityName: '北京',
        countyId: '110101',
        countyName: '东城区',
        address: '第九期我对其五帝钱无多',
        isDefault: 1,
        token:3
      }, (res) => {
        console.log(res)
      }, () => {
      }, 'post')*/
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
   /* .van-picker__columns, .van-picker-column {
      height: 100%!important;
    }
    .van-picker-column ul,.van-picker-column li{
      line-height:.8rem!important;
    }
    .van-picker-column li{
      height: .8rem!important;
    }*/
  }
</style>
