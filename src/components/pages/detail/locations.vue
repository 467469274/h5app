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
          <van-switch  size=".4rem" v-model="checked"/>
        </div>
      </van-cell>
    </div>
    <div class="saveBtn">保存并使用</div>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    data(){
      return{
        checked:true
      }
    },
    methods: {
      goSomePage(type) {
        if (type == 'back') {
          this.$router.back(-1)
        } else {
          this.$router.push({name: type})
        }
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
      flex: 1;
    }
  }
  .flexss{
    display: flex;
    align-items: center;
    .txt{
      flex: 1;
      p{
        font-size: 10px;
        color: rgba(0,0,0,0.4);
      }
    }
  }
  .saveBtn{
    background: rgb(259,159,10);
    text-align: center;
    position:fixed;
    left: 0;
    bottom: 0;
    color: #fff;
    line-height:1rem;
    width:100%;
    font-size: 15px;
  }
</style>
