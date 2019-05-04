<template>
  <div class="homeBox" :style="{'background': color}">
  </div>
</template>
<script type="text/ecmascript-6">
    export default {
      name:'vueUpload',
      props:['color']
    }
</script>
<style lang="scss" scoped>
  .homeBox {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0px;
    z-index: -1;
  }
</style>
