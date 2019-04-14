<template>
  <div class="sexWarp">
    <van-nav-bar
      title="我的粉丝"
      right-text="🔍"
      left-arrow
    />

    <div class="warp">
        <div class="orderStatus" @click="StatusChange($event)"> 
            <span><i :class="{'selectStatus' : this.status == 1}" data-id="1" data-path="directFans">直接粉丝</i></span>
            <span><i :class="{'selectStatus' : this.status == 2}" data-id="2" data-path="indirect">间接粉丝</i></span>
        </div>
        <router-view v-if="!$route.meta.keepAlive" />
    </div>
   
  </div>
</template>

<script>
  export default {
    name: "sex",
    data(){
      return{
        status:1
      }
    },
    methods:{
        StatusChange (e) {
            
            if(e.target.localName === 'i'){
                this.status =  e.target.dataset.id;
                let path = e.target.dataset.path;
                this.$router.push({path: path});
            }
        }
    }
  }
</script>

<style scoped lang="scss">
  $colorG: rgba(0, 0, 0, 0.6);
  .van-cell{
    line-height: 1rem;
  }
  
  .warp{
      .orderStatus{
          margin:0 0 0.2rem 0;
          padding:0.2rem 0;
          display:flex;
          background:#fff;
          font-size:14px;
          span{
              flex:1;
              text-align:center;
              box-sizing:border-box;
              i{
                  font-style:normal;
              }
          }
      }
  }
    .selectStatus{
        color:#E82E1A;
        border-bottom:1px solid #E82E1A;
    }
 
</style>
