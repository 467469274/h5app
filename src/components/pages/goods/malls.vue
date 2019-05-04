<template>
  <div>
    <goodList listType="malls"></goodList>
    <div class="cart" @click="$router.push({name:'myCart'})"></div>
    <colorBox :color="'#F5F6F7'"></colorBox>
  </div>
</template>
<script type="text/ecmascript-6">
  import goodList from './goodsList.vue'

  export default {
    components: {
      goodList
    }
  }
</script>
<style scoped lang="scss">
  .cart{
    width:1rem;
    height: 1rem;
    position: fixed;
    right: 10%;
    bottom: 10%;
    background: url("/static/carticon.png") no-repeat;
    background-size: 100% 100%;
    z-index: 11;
  }
</style>
