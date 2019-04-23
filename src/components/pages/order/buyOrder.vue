<template>
  <div class="sexWarp">
    <van-nav-bar
      title="买入"
      left-arrow
      @click-left="goSomePage('back')"
    />
    <div class="warp">
        <div class="orderCell" v-for="item in list">
            <van-cell>
                <div class="cell">
                  {{item.type ==1?'平台':'个人'}}
                </div>
            </van-cell>
             <van-cell>
                <div class="cell">
                  <p>
                    <span class="priceNumber">{{item.totalMoney}}</span>
                    <span class="priceText">总额/元</span>
                  </p>
                  <p>
                    <span class="priceNumber">{{item.unitMoney}}</span>
                    <span class="priceText">价格/元</span>
                  </p>
                  <p>
                    <span class="priceNumber">{{item.saleCount}}</span>
                    <span class="priceText">数量/份</span>
                  </p>
                    <p class="btnP">
                       <button @click="$toast('敬请期待')">点击购买</button>
                   </p>
                </div>
            </van-cell>
        </div>
      <div v-if="list.length==0" style="line-height: 3rem;color:rgba(0,0,0,0.6);text-align: center;font-size:.4rem">暂无订单</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "sex",
    data(){
      return{
        radio:1,
        checked:true,
        list:[]
      }
    },
    created(){
      this.$ajax('/api/mine/paylist',{},(res)=>{
        this.list = res.data
      },(err)=>{
        this.$toast(err)
      },'post')
    },
    methods: {
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
 @import '../../../assets/scss/saleOrder.scss';
 button{

          background:#1CA55D!important;
          color:#fff;
      }
</style>
