<template>
  <div class="myShopWarp">
    <van-nav-bar
      title="取消原因"
      left-arrow
      @click-left="goSomePage('back')"
    />
    <div class="strip"></div>
    <van-checkbox-group class="checkWarp" v-model="result">
      <van-checkbox
        v-for="(item, index) in list"
        :key="item"
        :name="item"
        checked-color="#4EA264"
        shape="square"
      >
        <span class="grey">复选框</span>
      </van-checkbox>
    </van-checkbox-group>
    <div class="otherReason">
      <p class="title">
        其他原因
      </p>
      <van-field
        class="textareas"
        v-model="message"
        type="textarea"
        placeholder="请输入"
        rows="4"
        autosize
      />
    </div>
    <div class="sure" style="background: #4EA264">提交</div>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        list: ['a', 'b', 'c'],
        result: ['a', 'b'],
        message:''
      };
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
<style lang="scss" scoped>
  .checkWarp{
    padding:.2rem .35rem;
    background: #fff;
    width: 95%;
    border-bottom: 1px solid #ccc;
    .van-checkbox{
      margin-bottom: .4rem;
      font-size: 14px;
      .grey{
        color:#666666;
      }
    }
  }
  .otherReason{
    background: #fff;
    padding-bottom: .4rem;
    .title{
      padding-left: .35rem;
      line-height: 1rem;
      font-size: 14px;
      color: rgba(0,0,0,0.7);
    }
    .textareas{
      border: 1px solid #ccc;
      width: 90%;
      margin: 0 auto;
    }
  }
</style>
