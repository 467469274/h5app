<template>
  <div class="comments">
    <div class="item">
      <div class="avatar"></div>
      <div class="txt">
        <p class="name">张大龙</p>
        <p>
          <van-rate class="start" style="display: inline-block" :readonly="startDisabled" :size="size =='big'?50:28" v-model="value" />
          <span v-if="size =='big'" class="rank">5.0</span>
        </p>
        <p class="sku" v-if="size =='big'">规格:红色 XXL</p>
        <p class="des">产品很好非常喜欢物超所值</p>
      </div>
      <div class="date">2019年04月10日</div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "comments",
      props:['startDisabled','size'],
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
  .sku{
    font-size: 12px;
    color: #ccc;
    margin-bottom: .2rem;
  }
  .start{
  }
  .rank{
    font-size: 16px;
    vertical-align: text-bottom;
    margin-left: .2rem;
    font-weight: 600;
  }
</style>
