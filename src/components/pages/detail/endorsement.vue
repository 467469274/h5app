<template>
  <div class="endorsementWarp">
    <van-nav-bar
      title="我要代言"
      left-arrow
      @click-left="goBack"
    />
    <div class="endorsementTop">
      <img src="../../../assets/images/endorsementBanner.png" alt="">
      <p class="title">1元升级家家商城普通代言人</p>
      <div class="txt">
        <div class="redTxt"><span class="s">￥</span><span class="b">1</span><span class="s">.00</span></div>
        <div class="grey"><span>￥</span><span>99.9</span></div>
        <div class="chinese">销量</div>
      </div>
      <p class="des">
        <span><i></i>24小时发货</span>
        <span><i></i>官方店认证</span>
      </p>
    </div>
    <div class="nav">
      <van-tabs v-model="active" class="navInner">
        <van-tab title="商品描述">
          <div class="detail">
            <div class="content">内容1</div>
          </div>
        </van-tab>
        <van-tab title="备注信息">
          <div class="detail">
            <div class="content">内容2</div>
          </div>

        </van-tab>
        <van-tab title="商品评论">
          <div class="detail">
            <div class="content nop">
              <comments :startDisabled="true"></comments>
            </div>
          </div>
        </van-tab>
      </van-tabs>
    </div>
    <van-goods-action>
      <van-goods-action-mini-btn
        class="greey"
        icon="chat-o"
        text="咨询"
        @click=""
      />
      <van-goods-action-mini-btn
        class="greey"
        icon="star-o"
        text="收藏"
        @click=""
      />
      <van-goods-action-big-btn
        text="加入购物车"
        class="yellow"
        @click=""
      />
      <van-goods-action-big-btn
        primary
        class="red"
        text="立即购买"
        @click=""
      />
    </van-goods-action>
  </div>
</template>

<script>
  import comments from '../../common/comments'
  export default {
    name: 'endorsement',
    data () {
      return {
        active: 2
      }
    },
    methods: {
      goBack () {
        this.$router.back(-1)
      }
    },
    components:{
      comments
    }
  }
</script>

<style scoped lang="scss">
  $red: rgb(247, 16, 15);
  .endorsementWarp {
    .endorsementTop {
      background: #fff;

      p {
        margin: 0;
      }

      .title {
        line-height: .75rem;
        padding-left: .2rem;
        font-size: 15px;
        color: rgba(0, 0, 0, 0.5);
      }

      img {
        width: 100%;
      }

      .txt {
        padding: 0 .2rem;
        padding-bottom: .3rem;

        div {
          display: inline-block;
        }

        .redTxt {
          color: $red;
          .s {
            font-size: 12px;
          }

          .b {
            font-size: 16px;
          }
        }

        .grey {
          margin-left: .3rem;
          text-decoration: line-through;
          color: rgba(0, 0, 0, 0.4);
        }

        .chinese {
          float: right;
          color: rgba(0, 0, 0, 0.6);
          font-size: 14px;
        }
      }

      .des {
        padding: 0 .2rem;
        line-height: .6rem;
        color: rgba(0, 0, 0, 0.4);

        span {
          margin-right: .4rem;

          i {
            display: inline-block;
            width: .25rem;
            height: .25rem;
            background: red;
            margin-right: .2rem;
            vertical-align: -4px;
          }
        }
      }
    }
    .nav {
      margin-top: .2rem;
      .detail {
        background: #fff;
        .content{
          padding: .3rem;
          border-top: 1px solid #ccc;
          &.nop{
            padding: 0!important;
          }
        }

      }
    }
    .greey{
      background:rgb(220,220,220);
      border:none;
      color:rgba(0,0,0,0.7);
    }
    .yellow{
      background: rgb(250,159,11);
    }
    .red{
      background: rgb(247,27,6);
    }
  }
</style>
