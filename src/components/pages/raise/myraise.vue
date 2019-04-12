<template>
  <div class="allraise">
    <van-nav-bar title="我的众筹"
                 left-arrow
                 @click-left="goSomePage('back')"
    >
    </van-nav-bar>
    <van-tabs v-model="active">
      <van-tab title="发布的众筹">
        <div class="raiseWarp">
          <div
            class="raiseList"
          >
            <div class="item">
              <div class="top">
                <div class="imgWarp"></div>
                <div class="txt">
                  <p class="title">家家商城 <span>当前人数 <i @click="goSomePage('user')">25</i></span></p>
                  <p class="des">这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述</p>
                </div>
              </div>
              <div class="itemBottom">
                <div class="bottomItem first">
                  <div class="title">众筹规模</div>
                  <div class="des">300 <span>万</span></div>
                </div>
                <div class="bottomItem second">
                  <div class="title">接收券种</div>
                  <div class="des"><span>金券</span></div>
                </div>
                <div class="bottomItem">
                  <div class="title">价格</div>
                  <div class="des"><span>1金券=5银券</span></div>
                </div>
                <div class="bottomItem joinBtn jb">
                  结束
                </div>
              </div>
            </div>
          </div>
        </div>
      </van-tab>
      <van-tab title="加入的众筹">
        <div class="raiseWarp">
          <van-list
            class="raiseList"
          >
            <div class="item">
              <div class="top">
                <div class="imgWarp"></div>
                <div class="txt">
                  <p class="title">家家商城 <span>当前人数  <i @click="goSomePage('user')">25</i></span></p>
                  <p class="des">这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述</p>
                </div>
              </div>
              <div class="itemBottom">
                <div class="bottomItem first">
                  <div class="title">众筹规模</div>
                  <div class="des">300 <span>万</span></div>
                </div>
                <div class="bottomItem second">
                  <div class="title">接收券种</div>
                  <div class="des"><span>金券</span></div>
                </div>
                <div class="bottomItem">
                  <div class="title">价格</div>
                  <div class="des"><span>1金券=5银券</span></div>
                </div>
                <div class="bottomItem joinBtn" @click="goSomePage('detail')">
                  明细
                </div>
              </div>
            </div>
          </van-list>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  name: 'myraise',
  data () {
    return {
      active: 0
    }
  },
  methods: {
    goSomePage (type) {
      if (type == 'back') {
        this.$router.back(-1)
      } else if (type == 'my') {
        this.$router.push({name: 'myraise'})
      }else if (type == 'detail') {
        this.$router.push({name: 'raiseDetail'})
      } else if (type == 'user') {
        this.$router.push({name: 'raiseUser'})
      } else {
        this.$router.push({name: 'raiseFire'})
      }
    }
  }
}
</script>

<style scoped lang="scss">
  .allraise{
    .raiseWarp {
      padding: .25rem;
      .raiseList {
        position: fixed;
        left: 0;
        top:1.88rem;
        overflow-y: scroll;
        bottom: 0;
        width: 100%;
        padding:.2rem;
        box-sizing: border-box;
        .item {
          border-radius: .2rem;
          background: #fff;
          padding: .25rem;
          box-sizing: border-box;
          margin-bottom: .2rem;
          .top {
            display: flex;
            border-bottom: 1px dashed #ccc;
            padding-bottom: .2rem;

            .imgWarp {
              flex: .85rem 0 0;
              height: .85rem;
              background: rgb(232, 234, 235);
              border-radius: .1rem;
            }

            .txt {
              flex: 1;
              padding-left: .2rem;
              overflow: hidden;
              p {
                margin: 0;
              }

              .title {
                font-size: 16px;
                line-height: 1.3;
                margin-bottom: .15rem;
                span{
                  float: right;
                  i{
                    font-style: normal;
                    color: red;
                    font-weight: 600;
                    font-size: 18;
                  }
                }
              }

              .des {
                font-size: 11px;
                color: #ccc;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
              }
            }
          }
          .itemBottom {
            display: flex;
            justify-content:space-between;
            align-items: center;
            .bottomItem {
              flex: 1;
              text-align: center;
              &.first{
                flex: initial;
                .des {
                  font-weight: 600;
                  font-size: 18px;
                  color: rgb(248, 0, 0);
                  span {
                    font-size: 12px;
                  }
                }
              }
              &.second .des {
                color: rgb(248, 0, 0)!important;
              }
              .title {
                font-size: 14px;
                color: rgba(0, 0, 0, 0.6);
                margin: .2rem 0 .2rem;
              }
              .des {
                height: .4rem;
                font-size: 14px;
                span{
                  display:inline-block;
                  vertical-align: middle;
                }
              }
              &.joinBtn {
                flex: .85rem 0 0;
                line-height: .5rem;
                height: .5rem;
                border-radius: 3px;
                background:rgb(249,159,11);
                text-align: center;
                margin-left: .4rem;
                color: #fff;
                &.jb{
                  background:linear-gradient(to right bottom,rgb(249,89,62),rgb(247,21,9));;

                }
              }
            }
          }
        }
      }
    }
    .fire{
      position: fixed;
      width: 1.4rem;
      height: 1.4rem;
      background: #fff;
      border-radius: 50%;
      right:1%;
      bottom: 5%;
      box-shadow: 0.05rem 0.05rem 0.1rem rgba(0,0,0,0.1);

    }
  }
</style>
