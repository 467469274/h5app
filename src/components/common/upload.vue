<template>
  <div class="upload">
    <van-uploader :after-read="onRead">
      <div class="iconWarp">
        <van-icon name="plus" size=".5rem" />
      </div>
    </van-uploader>
  </div>
</template>
<script type="text/ecmascript-6">
    export default {
      name:'vueUpload',
      methods:{
        onRead(file, detail) {
          console.log(detail)
          console.log(file)
        }
      }
    }
</script>
<style lang="scss" scoped>
  .iconWarp{
    width: 1rem;
    height: 1rem;
    border: 1px solid #ccc;
    text-align: center;
    line-height:1rem;
    vertical-align: middle;
    i{
      vertical-align: -.14rem;
    }
  }
</style>
