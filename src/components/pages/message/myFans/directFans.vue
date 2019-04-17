<template>
  <div class="sexWarp">
    <van-cell>
      <div class="cell" v-for="(item,index) in list">
        <img :src="item.head"/>
        <div class="imageinfo">
          <p class="imageTitle">{{item.username}}</p>
          <p class="imagePrcie">手机号：{{item.mobile}}</p>
        </div>
      </div>
    </van-cell>
  </div>
</template>

<script>
  export default {
    name: "fans",
    data() {
      return {
        list:[]
      }
    },
    created() {
      this.getData()
    },
    methods: {
      getData() {
        this.$ajax('/api/mine/straightFans', {}, (res) => {
          this.list = res.data
        }, () => {
        }, 'get')
      }
    }
  }
</script>

<style scoped lang="scss">
  $colorG: rgba(0, 0, 0, 0.6);

  .cell {
    display: flex;
    img {
      flex: 1.3rem 0 0;
      height: 1.3rem;
      border-radius: .2rem;
    }
    .imageinfo {
      flex: 1;
      text-indent: 0.2rem;
      p {
        display: block;
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .imageTitle {
        font-size: 15px;
      }
      .imagePrcie {
        margin: 0.3rem 0 0 0;
        font-size: 12px;
        color: #676767;
      }
    }
  }
</style>
