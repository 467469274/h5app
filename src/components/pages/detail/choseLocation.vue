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
      if (type == 'back' && !this.$route.params.from) {
        this.$router.back(-1)
      } else if(type == 'back' &&this.$route.params.from && this.list.length==1){
        this.select(this.list[0])
      }else if(type == 'back' &&this.$route.params.from){
        this.$router.push({name: 'confirm', query: index,params:this.$route.params})
      }else {
        this.$router.push({name: type, query: index,params:this.$route.params})
      }
    },
    clickkk(){
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

    },
    select(item){
      if(this.$route.params){
        this.$route.params.address = {}
        this.$route.params.address.id = item.id
        this.$route.params.address.name = item.name
        this.$route.params.address.address = item.address
        this.$route.params.address.phone = item.tel
        this.$route.params.address.isDefault = item.isDefault
        this.$route.params.from = 'location'
        this.$router.push({name:'confirm',params:{...this.$route.params}})
        console.log('this.$route.params.address.tel',this.$route.params.address.tel)
      }
    }
  }
}
</script>
<style scoped lang="scss">
</style>
