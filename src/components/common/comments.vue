<template>
  <div class="comments">
    <div class="item">
      <div class="avatar"></div>
      <div class="txt">
        <p class="name">张大龙</p>
        <van-rate class="start" :readonly="startDisabled" :size="28" v-model="value" />
        <p class="des">产品很好非常喜欢物超所值</p>
      </div>
      <div class="date">2019年04月10日</div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "comments",
      props:['startDisabled'],
      data(){
          return{
            value:5
          }
      }
    }
</script>

<style scoped lang="scss">
  $colorG:rgba(0,0,0,0.7);
  .comments{
    .item{
      display: flex;
      color: $colorG;
      font-size:13px;
      border-bottom:1px solid rgba(0,0,0,0.1);
      padding: .2rem;
      .avatar{
        flex:.9rem 0 0;
        height: .9rem;
        background: red;
        border-radius: 50%;
        margin-right: .25rem;
      }
      .txt{
        flex: 1;
        .start{
          margin:.1rem 0;
        }
      }
    }
  }
</style>
