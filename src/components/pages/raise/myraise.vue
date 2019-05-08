<template>
  <div class="allraise">
    <van-nav-bar title="我的众筹"
                 left-arrow
                 @click-left="goSomePage('back')"
    >
    </van-nav-bar>
    <van-tabs v-model="active">
      <van-tab title="发布的众筹">
        <van-list
          style="padding: .2rem"
          v-model="fireloading"
          :finished="firefinished"
          v-show="active == 0"
          finished-text="没有更多了"
          @load="getMyFire"
        >
          <div class="item" v-for="item in firemyJoin">
            <div class="top">
              <div class="imgWarp">
                <img src="/static/2181555986749_.pic_hd.jpg" alt="">
              </div>
              <div class="txt">
                <p class="title">{{item.tickName}} <span>当前人数  <i
                  @click="goSomePage('user',{id:item.tickId})">{{item.present}}</i></span></p>
                <p class="des">{{item.recommend}}</p>
              </div>
            </div>
            <div class="itemBottom">
              <div class="bottomItem first">
                <div class="title">众筹规模</div>
                <div class="des">{{item.dimensions}}</div>
              </div>
              <div class="bottomItem second">
                <div class="title">接收券种</div>
                <div class="des"><span>{{item.coupon == 1 ? '金券' : '银券'}}</span></div>
              </div>
              <div class="bottomItem">
                <div class="title">价格</div>
                <div class="des"><span>{{item.gold}}金券={{item.silver}}银券</span></div>
              </div>
              <div class="bottomItem joinBtn jb" v-if="item.status==2" @click.stop="stop(item.tickId)">
                结束
              </div>
              <div class="bottomItem joinBtn grey" v-if="item.status==4">
                已结束
              </div>
            </div>
          </div>
        </van-list>
      </van-tab>
      <van-tab title="加入的众筹">
        <van-list
          style="padding: .2rem"
          v-model="loading"
          :finished="finished"
          v-show="active == 1"
          finished-text="没有更多了"
          @load="getMyData"
        >
          <div class="item" v-for="item in myJoin">
            <div class="top">
              <div class="imgWarp">
                <img src="/static/2181555986749_.pic_hd.jpg" alt="">
              </div>
              <div class="txt">
                <p class="title">{{item.tickName}} <span>当前人数  <i
                  @click="goSomePage('user',{id:item.tickId})">{{item.present}}</i></span></p>
                <p class="des">{{item.recommend}}</p>
              </div>
            </div>
            <div class="itemBottom">
              <div class="bottomItem first">
                <div class="title">众筹规模</div>
                <div class="des">{{item.dimensions}}</div>
              </div>
              <div class="bottomItem second">
                <div class="title">接收券种</div>
                <div class="des"><span>{{item.coupon == 1 ? '金券' : '银券'}}</span></div>
              </div>
              <div class="bottomItem">
                <div class="title">价格</div>
                <div class="des"><span>{{item.gold}}金券={{item.silver}}银券</span></div>
              </div>
              <div class="bottomItem joinBtn js" @click="goSomePage('detail',{id:item.tickId})">
                明细
              </div>
            </div>
          </div>
        </van-list>
      </van-tab>
    </van-tabs>
    <colorBox :color="'#F5F6F7'"></colorBox>
  </div>
</template>

<script>
  export default {
    name: 'myraise',
    data() {
      return {
        active: 0,
        myformData: {
          currPage: 0,
          pageSize: 10
        },
        firemyformData: {
          currPage: 0,
          pageSize: 10
        },
        loading: false,
        finished: false,
        myJoin: [],
        fireloading: false,
        firefinished: false,
        firemyJoin: []
      }
    },
    created() {
      if (this.$route.query.type) {
        this.active = this.$route.query.type
        this.firemyJoin = []
        this.myJoin = []
        this.myformData = {
          currPage: 0,
          pageSize: 10
        }
        this.firemyformData = {
          currPage: 0,
          pageSize: 10
        }
        this.getMyData()
        this.getMyFire()
      }
    },
    methods: {
      stop(id) {
        this.$ajax('/api/tick/finish', {tickId: id},
          (res) => {
            this.$toast('结束成功')
            this.firemyJoin = []
            this.firemyformData.currPage = 0
            this.getMyFire()
          },
          (err) => {
            this.$toast(err)
          },
          'post')
      },
      goSomePage(type, query) {
        if (type == 'back') {
          this.$router.back(-1)
        } else if (type == 'my') {
          this.$router.push({name: 'myraise'})
        } else if (type == 'detail') {
          this.$router.push({name: 'raiseDetail', query: query})
        } else if (type == 'user') {
          this.$router.push({name: 'raiseUser', query: query})
        } else {
          this.$router.push({name: 'raiseFire'})
        }
      },
      getMyData() {
        this.loading = true
        this.myformData.currPage += 1
        this.$ajax('/api/tick/joinlist', this.myformData,
          (res) => {
            this.loading = false
            this.myJoin = this.myJoin.concat(res.data)
            if (res.data.length < this.myformData.pageSize) {
              this.finished = true
            }
          },
          () => {
          },
          'post')
      },
      getMyFire() {
        this.fireloading = true
        this.firemyformData.currPage += 1
        this.$ajax('/api/tick/mylist', this.firemyformData,
          (res) => {
            this.fireloading = false
            this.firemyJoin = this.firemyJoin.concat(res.data)
            if (res.data.length < this.firemyformData.pageSize) {
              this.firefinished = true
            }
          },
          () => {
          },
          'post')
      }
    },
      watch: {
        active(n, o) {
          this.$router.replace({name: 'myraise', query: {type: n}})
        }
    }
  }
</script>

<style scoped lang="scss">
  .allraise {
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
          img {
            width: 100%;
            height: 100%;
          }
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
            span {
              float: right;
              i {
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
        justify-content: space-between;
        align-items: center;
        .bottomItem {
          flex: 1;
          text-align: center;
          &.first {
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
            color: rgb(248, 0, 0) !important;
          }
          .title {
            font-size: 14px;
            color: rgba(0, 0, 0, 0.6);
            margin: .2rem 0 .2rem;
          }
          .des {
            height: .4rem;
            font-size: 14px;
            span {
              display: inline-block;
              vertical-align: middle;
            }
          }
          &.joinBtn {
            flex: .85rem 0 0;
            line-height: .5rem;
            height: .5rem;
            border-radius: 3px;
            background: rgb(249, 159, 11);
            text-align: center;
            margin-left: .4rem;
            color: #fff;
            &.jb {
              background: linear-gradient(to right bottom, rgb(249, 89, 62), rgb(247, 21, 9));;
            }
            &.grey {
              background: gray;
              color: #fff;
            }
          }
        }
      }
    }
    .fire {
      position: fixed;
      width: 1.4rem;
      height: 1.4rem;
      background: #fff;
      border-radius: 50%;
      right: 1%;
      bottom: 5%;
      box-shadow: 0.05rem 0.05rem 0.1rem rgba(0, 0, 0, 0.1);

    }
  }
</style>
