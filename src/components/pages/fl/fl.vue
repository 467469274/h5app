<template>
  <div class="fl">
    <div class="nav">
      <searchInput @change="search" style="background: #fff"></searchInput>
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
              <div class="item" v-for="it in item.childrens">
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
    data() {
      return {
        nowClass:0,
        datas: [
          {
            "id": 1,
            "parentId": 0,
            "level": 1,
            "name": "推荐分类",
            "img": null,
            "orderNo": 1,
            "del": 0,
            "createTime": "2019-04-03T13:15:36.000+0000",
            "childrens": [{
              "id": 2,
              "parentId": 1,
              "level": 2,
              "name": "专场推荐",
              "img": null,
              "orderNo": 1,
              "del": 0,
              "createTime": "2019-04-03T13:15:52.000+0000",
              "childrens": [{
                "id": 3,
                "parentId": 2,
                "level": 3,
                "name": "服饰返场",
                "img": "https://img13.360buyimg.com/n8/jfs/t1/20802/10/2366/132100/5c1d9203E28721e87/8216393c2d2f4f07.jpg",
                "orderNo": 1,
                "del": 0,
                "createTime": "2019-04-03T13:17:06.000+0000",
                "childrens": null
              }, {
                "id": 4,
                "parentId": 2,
                "level": 3,
                "name": "手机",
                "img": "https://img11.360buyimg.com/n7/jfs/t19486/23/2438839474/239517/2fafbf44/5af52742Nfa205639.jpg",
                "orderNo": 2,
                "del": 0,
                "createTime": "2019-04-03T13:16:54.000+0000",
                "childrens": null
              }]
            }]
          },
          {
            "id": 7,
            "parentId": 0,
            "level": 1,
            "name": "潮流男装",
            "img": null,
            "orderNo": 1,
            "del": 0,
            "createTime": "2019-04-11T15:49:11.000+0000",
            "childrens": [{
              "id": 9,
              "parentId": 7,
              "level": 2,
              "name": "牛仔裤",
              "img": null,
              "orderNo": 1,
              "del": 0,
              "createTime": "2019-04-11T15:49:11.000+0000",
              "childrens": [{
                "id": 11,
                "parentId": 9,
                "level": 3,
                "name": "加绒牛仔",
                "img": "http://img12.360buyimg.com/n8/jfs/t24199/254/1917814860/335881/75f73f78/5b6d03e4N978a8dfa.jpg",
                "orderNo": 1,
                "del": 0,
                "createTime": "2019-04-11T15:49:11.000+0000",
                "childrens": null
              }, {
                "id": 12,
                "parentId": 9,
                "level": 3,
                "name": "直筒牛仔",
                "img": "https://img14.360buyimg.com/n8/jfs/t1/32501/8/3631/138289/5c772de8Ef9cc42b1/92b13389db9fd69a.jpg",
                "orderNo": 2,
                "del": 0,
                "createTime": "2019-04-11T15:49:11.000+0000",
                "childrens": null
              }]
            }, {
              "id": 8,
              "parentId": 7,
              "level": 2,
              "name": "羽绒服",
              "img": null,
              "orderNo": 2,
              "del": 0,
              "createTime": "2019-04-11T15:49:11.000+0000",
              "childrens": [{
                "id": 10,
                "parentId": 8,
                "level": 3,
                "name": "加厚羽绒",
                "img": "http://img14.360buyimg.com/n1/s350x449_jfs/t1/22273/29/2091/192435/5c18f425Ec037ad10/55ba64d8303182a5.jpg!cc_350x449.jpg",
                "orderNo": 1,
                "del": 0,
                "createTime": "2019-04-11T15:49:11.000+0000",
                "childrens": null
              }]
            }]
          }
        ],
      }
    },
    methods:{
      clickFirs(index,item){
        this.nowClass = index
        console.log(item)
      },
      search(v){
        console.log(v)
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
  .flWarp {
    position: fixed;
    left: 0;
    top: .92rem;
    width: 100%;
    height: 100%;
    display: flex;
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
</style>
