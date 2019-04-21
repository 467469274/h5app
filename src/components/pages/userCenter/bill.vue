<template>
  <div class="sexWarp">
    <van-nav-bar
      title="账单"
      left-arrow
      :right-text="mounth+'月'"
      @click-left="goSomePage('back')"
      @click-right="clickRight"
    />
    <van-datetime-picker
      v-model="currentDate"
      type="year-month"
      :min-date="minDate"
      :formatter="formatter"
    />
  </div>
</template>

<script>
  export default {
    name: "sex",
    data(){
      return{
        mounth:8,
        minDate: new Date(2018, 10, 1),
        maxDate: new Date(2023, 10, 1),
      }
    },
    methods:{
      goSomePage (type) {
        if(type == 'back'){
          this.$router.back(-1)

        }else{
          this.$router.push({name: type})
        }
      },
      clickRight(){

      },
      formatter(type, value) {
        if (type === 'year') {
          return `${value}年`;
        } else if (type === 'month') {
          return `${value}月`
        }
        return value;
      }
    }
  }
</script>

<style scoped lang="scss">
  .list{
    .item{
      line-height:1rem;
      background: #fff;
      border-bottom:1px solid #ccc;
      padding-left: .2rem;
      font-size: 14px;
      color: rgba(0,0,0,0.5);
    }
  }
</style>
<style>
  .van-nav-bar__text{
    color: #747576;
  }
</style>
