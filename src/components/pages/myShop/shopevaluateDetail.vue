<template>
  <div class="myCart">
    <van-nav-bar
      title="用户评价"
      left-arrow
      @click-left="$router.back(-1)"
    />
    <comments size="big" class="comments" style="margin-top: .2rem" :startDisabled="true"></comments>
  </div>
</template>
<script type="text/ecmascript-6">
  import comments from '../../common/comments'
  export default {
    data(){
      return{
        isEdit:false,
        value:0,
        checked:false
      }
    },
    methods:{
      del(){}
    },
    components:{
      comments
    }
  }
</script>
<style lang="scss" scoped>
  .comments{
    background: #fff;
  }
</style>
