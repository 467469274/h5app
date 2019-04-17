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
      list: []
    }
  },
  created(){
    this.getLocations()
  },
  methods: {
    onAdd() {
      this.goSomePage('locations')
    },
    onEdit(item, index) {
      this.goSomePage('locations',{location: item.id})
    },
    goSomePage(type,index) {
      if (type == 'back') {
        this.$router.back(-1)
      } else {
        this.$router.push({name: type, query: index})
      }
    },
    getLocations(){
      this.$ajax('/api/product/address', {
        token:3
      }, (res) => {
        this.list = res.data.map((item)=>{
          item.tel = item.phone
          return item
        })
        this.chosenAddressId = res.data.find(item=>item.isDefault==1).id
      }, () => {
      }, 'get')

    }
  }
}
</script>
<style scoped lang="scss">
</style>
