<template>
  <div class="sexWarp">
    <van-nav-bar
      title="性别"
      left-arrow
      @click-left="goSomePage('back')"
    />
    <van-radio-group v-model="radio">
      <van-cell-group>
        <van-cell title="男" clickable @click="changeRadio(1)">
          <van-radio name="1" checked-color="red"/>
        </van-cell>
        <van-cell title="女" @click="changeRadio(2)">
          <van-radio name="2" checked-color="red"/>
        </van-cell>
      </van-cell-group>
    </van-radio-group>
  </div>
</template>

<script>
  export default {
    name: "sex",
    data() {
      return {
        radio:1
      }
    },
    created() {
      this.radio = this.$route.query.type?this.$route.query.type+'':'1'
    },
    methods: {
      goSomePage(type) {
        if (type == 'back') {
          this.$router.back(-1)

        } else {
          this.$router.push({name: type})
        }
      },
      changeRadio(type) {
        this.$ajax('/api/mine/update', {sex: type},
          (res) => {
          this.radio = type
            this.$toast('设置成功')
            this.$router.push({name:'userCenter'})
          },
          (er) => {
            this.$toast(er)

          }, 'post')
      }
    }
  }
</script>

<style scoped lang="scss">
  .list {
    .item {
      line-height: 1rem;
      background: #fff;
      border-bottom: 1px solid #ccc;
      padding-left: .2rem;
      font-size: 14px;
      color: rgba(0, 0, 0, 0.5);
    }
  }
</style>
