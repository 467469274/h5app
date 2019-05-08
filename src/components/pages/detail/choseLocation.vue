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
        @select="select"
        @click="clickkk"
      />
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import {mapGetters} from 'vuex'

  export default {
    data() {
      return {
        chosenAddressId: '1',
        list: []
      }
    },
    created() {
      this.getLocations()
    },
    methods: {
      onAdd() {
        this.goSomePage('locations')
      },
      onEdit(item, index) {
        this.goSomePage('locations', {location: item.id})
      },
      goSomePage(type, index) {
        if (type == 'back') {
          this.$router.back(-1)
        } else if (type == 'back' && this.$route.query.from && this.list.length == 1) {
          this.select(this.list[0])  //在没有地址时 添加后返回带着id 回去
        } else if (type == 'back' && this.$route.params.from) {
          this.$router.push({name: 'confirm'})
        } else {
          this.$router.push({name: type, query: {...index,from:'confirm'}})
        }
      },
      clickkk() {
      },
      getLocations() {
        this.$ajax('/api/product/address', {
          token: 3
        }, (res) => {
          this.list = res.data.map((item) => {
            item.tel = item.phone
            return item
          })
          this.chosenAddressId = res.data.find(item => item.isDefault == 1).id
          if(this.confirmDetail)this.chosenAddressId = this.confirmDetail.address.id
        }, () => {
        }, 'get')

      },
      select(item) {
        if (this.confirmDetail) {
          let detail = JSON.parse(JSON.stringify(this.confirmDetail))
          detail.address = {}
          detail.address.id = item.id
          detail.address.name = item.name
          detail.address.address = item.address
          detail.address.phone = item.tel
          detail.address.isDefault = item.isDefault
          detail.from = 'location'
          this.$store.commit('setInfo', detail)
          this.$router.push({name: 'confirm'})
        }
      }
    },
    computed: {
      ...mapGetters(['confirmDetail'])
    }
  }
</script>
<style scoped lang="scss">
</style>
