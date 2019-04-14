<template>
  <div class="sexWarp">
    <van-nav-bar
      title="添加类目"
      left-arrow
      right-text="完成"
      @click-left="goSomePage('back')"
      @click-right="goSomePage('back')"
    />
    <van-cell-group>
      <van-field class="hasborderb" label="类目名称" input-align="right" v-model="value" placeholder="请输入类目名称" />
      <van-field class="hasborderb"  label="序号" input-align="right" v-model="value" placeholder="请输入序号" />
    </van-cell-group>
    <div class="sure" @click="goSomePage('addSon')">新增子类别</div>
  </div>
</template>

<script>
  export default {
    name: "sex",
    data(){
      return{
        value:'',
        checked:true
      }
    },
    methods:{
      goSomePage (type) {
        if(type == 'back'){
          this.$router.back(-1)

        }else{
          this.$router.push({name: type})
        }
      }
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
