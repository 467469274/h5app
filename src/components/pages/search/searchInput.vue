<template>
  <div class="searchBox" style="touch-action: none" @click="click">
    <span class="searchIcon" @click="goSomePage"></span>
    <input type="text" v-model="searchTxt" @keyup="change" placeholder="请输入搜索内容.....">
  </div>
</template>

<script>
export default {
  props: ['searchInt'],
  name: 'searchInput',
  created () {
    if (this.searchInt) {
      this.searchTxt = this.searchInt
    }
  },
  data () {
    return {
      searchTxt: ''
    }
  },
  methods: {
    change () {
      this.$emit('change', this.searchTxt)
    },
    click () {
      this.$emit('click')
    },
    goSomePage () {
      window.history.go(-1)
    }
  }
}
</script>

<style scoped lang="scss">
  .searchBox{
    display: flex;
    justify-items: center;
    border-bottom: 1px solid #ccc;
    padding: .2rem;
  .searchIcon{
    flex:.55rem 0 0;
    height:.55rem;
    background: red;
  }
  input{
    height: .55rem;
    flex: 1;
    border: none;
    outline: none;
    border-radius: .4rem;
    margin-left: .4rem;
    padding-left: .93rem;
    box-sizing:border-box;
    background: rgb(236,237,240);
  }
  }
</style>
