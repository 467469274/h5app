<template>
  <div class="fl">
    <div class="nav">
      <searchInput :clickRight="clickRight" @change="search" style="background: #fff"></searchInput>
    </div>
    <div class="flWarp">
      <div class="leftWarp">
        <div class="left">
          <div class="item" @click="clickFirs(index,item)" :class="{active:nowClass==index}" v-for="(item,index) in datas">{{item.name}}</div>
        </div>
      </div>
      <div class="rightWarp">
        <div  v-for="item in childrens.childrens">
          <div class="imgWarp" v-if="item.img">
            <img :src="item.img" alt="">
          </div>
          <div class="childrens">
            <div class="name">{{item.name}}</div>
            <div class="commoditys">
              <div class="item" @click="doSomeThing(it)" v-for="it in item.childrens">
                <div class="imgWarp" :style="{'background-image':'url('+it.img+')'}"></div>
                <p class="sl">{{it.name}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import searchInput from '@/components/pages/search/searchInput.vue'
  export default {
    props:['type'],
    data() {
      return {
        nowClass:0,
        datas: [],
      }
    },
    created(){

      this.$ajax('/api/mall/allCategory', {}, (res) => {
        this.datas = res.data
      }, () => {}, 'get')

    },
    methods:{
      clickFirs(index,item){
        this.nowClass = index
      },
      search(v){
      },
      clickRight(){
        this.$emit('back')
      },
      doSomeThing(err){
        if(this.type == 'choseType'){
          this.$emit('choseOk',err)
        }
      }
    },
    computed:{
      childrens(){
        return this.datas[this.nowClass]
      }
    },
    components:{
      searchInput
    }
  }
</script>
<style lang="scss" scoped>
  .fl{
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 12;
    .flWarp {
      position: absolute;
      left: 0;
      top: .92rem;
      width: 100%;
      height: 100%;
      display: flex;
      z-index: 11;
      .leftWarp {
        height: 100%;
        overflow-y: scroll;
        flex: 2rem 0 0;
        border-right: 1px solid #ccc;
        background: #fff;
        .left{
          text-align: center;
          .item{
            font-size: 14px;
            color: rgba(0,0,0,0.8);
            line-height: 1rem;
            border-bottom: 1px solid #ccc;
            &.active{
              background: #E74725;
              color: #fff;
            }
          }
        }
      }
      .rightWarp {
        height: 100%;
        overflow-y: scroll;
        flex:1;
        border-right: 1px solid #ccc;
        background: #EDEEEF;
        padding: .2rem;
        .imgWarp{
          padding:.1rem;
          background: #fff;
          margin: 0 auto;
          font-size: 0;
          img{
            width: 100%;
          }
        }
        .childrens{
          .name{
            line-height: .64rem;
            font-size: 16px;
            padding-left: .15rem;
          }
          .commoditys{
            background: #fff;
            .item{
              width:33%;
              display: inline-block;
              position: relative;
              padding: .15rem;
              box-sizing: border-box;
              .imgWarp{
                background-size: 100% 100%;
                &:before{
                  padding-bottom: 100%;
                  content: '';
                  height: 0;
                  display: block;
                }
              }
              p{
                line-height:.6rem;
                text-align: center;
                padding:0 .1rem;
              }
            }
          }
        }
      }
    }
  }
</style>
