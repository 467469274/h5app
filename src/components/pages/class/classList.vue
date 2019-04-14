<template>
  <div class="sexWarp">
    <van-nav-bar
      title="类目管理"
      left-arrow
      @click-left="goSomePage('back')"
    />
    <div class="classList list">
      <div class="classItem item">
        <div class="cell">
          <span class="f">一级</span>
          <div class="btns">
            <van-icon size=".4rem" name="edit" />
            <van-icon size=".4rem" name="delete" />
          </div>
        </div>
        <div class="cell">
          <span class="s">二级</span>
          <div class="btns">
            <van-icon size=".4rem" name="edit" />
            <van-icon size=".4rem" name="delete" />
          </div>
        </div>
      </div>
    </div>
    <div class="sure" @click="goSomePage('addClass')">新增项目类别</div>
  </div>
</template>

<script>
  export default {
    name: "sex",
    data(){
      return{
        radio:1
      }
    },
    methods:{
      goSomePage (type) {
        if(type == 'back'){
          this.$router.back(-1)

        }else{
          this.$router.push({name: type})
        }
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
      font-size: 14px;
      color: rgba(0,0,0,0.7);
      margin-bottom: .35rem;
      .cell{
        line-height:1rem;
        padding:0 .2rem;
        border-bottom:1px solid rgba(0,0,0,0.4);
        .btns{
          font-size: 0;
          float: right;
          height: 1rem;
          overflow: hidden;
          i{
            line-height:1rem;
            margin-left: .2rem;
          }
        }
        .f{
          font-size: 16px;
        }
        .s{
          font-size: 14px;
        }
      }
    }
  }
</style>
