<template>
  <div class="sexWarp">
    <van-cell v-show="list.length>0">
      <div class="cell" v-for="(item,index) in list">
        <img :src="item.head"/>
        <div class="imageinfo">
          <p class="imageTitle">{{item.username}}</p>
          <p class="imageSubTitle">手机号：{{item.mobile}}</p>
          <p class="imagePhone">来源：章鱼</p>
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
        list: []
      }
    },
    created() {
      this.getData()
    },
    methods: {
      getData() {
        this.$ajax('/api/mine/indirectlyFans', {}, (res) => {
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
      flex: 0.1;
      width: 1.3rem;
      height: 1.3rem;
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
      .imageSubTitle {
        font-size: 12px;
        color: #676767;
      }
      .imagePhone {
        font-size: 12px;
        color: #676767;
      }
    }
  }
</style>
