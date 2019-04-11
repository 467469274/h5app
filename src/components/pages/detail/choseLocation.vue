<template>
  <div class="locations">
    <van-nav-bar
      title="收货地址"
      left-arrow
      @click-left="goSomePage('back')"
    />
    <div>
      <van-address-list
        v-model="chosenAddressId"
        :list="list"
        @add="onAdd"
        @edit="onEdit"
      />
    </div>
  </div>
</template>
<script type="text/ecmascript-6">export default {
  data() {
    return {
      chosenAddressId: '1',
      list: [
        {
          id: '1',
          name: '张三',
          tel: '13000000000',
          address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室'
        },
        {
          id: '2',
          name: '李四',
          tel: '1310000000',
          address: '浙江省杭州市拱墅区莫干山路 50 号'
        }
      ]
    }
  },

  methods: {
    onAdd() {
      this.goSomePage('locations')
    },
    onEdit(item, index) {
      this.goSomePage('locations')
    },
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
</style>
