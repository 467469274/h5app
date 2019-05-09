<template>
  <div class="sexWarp">
    <van-nav-bar
      title="系统设置"
      left-arrow
      @click-left="goSomePage('back')"
    />
    <div class="warp">
      <van-cell title="账号安全" to="security" is-link/>
      <van-cell title="消息提醒" to="remind" is-link/>
      <van-cell title="字体大小" to="setSize" is-link/>
      <div class="strip"></div>
      <van-cell title="关于我们" to="aboutUs" is-link/>
      <van-cell title="客服电话" is-link>
        123123123123
      </van-cell>
      <van-cell title="意见反馈" to="opinion" is-link/>
      <div class="strip"></div>
      <van-cell title="清除缓存" is-link>
        8.6M
      </van-cell>
      <van-cell title="版本信息" is-link>
        当前为最新信息
      </van-cell>
    </div>
    <div class="sure" style="background: #598ACF" @click="clear">注销登录</div>
    <colorBox :color="'#F5F6F7'"></colorBox>
  </div>
</template>

<script>
  import {setCookie,getCookie} from '@/common/cookies';
  export default {
    name: "sex",
    data() {
      return {
        radio: 1
      }
    },
    methods: {
      goSomePage(type) {
        if (type == 'back') {
          this.$router.back(-1)

        } else {
          this.$router.push({name: type})
        }
      },
      clear() {
        this.DelCookie('token')
        this.$toast('登出成功')
        this.$router.push({name:'shoppingMall'})
      },
      DelCookie(name) {
        let exp = new Date();
        exp.setTime(exp.getTime() - 1);
        let cval = getCookie(name);
        document.cookie = name + "=" + cval + "; expires=" + exp.toGMTString();
      }
    }
  }
</script>

<style scoped lang="scss">
  $colorG: rgba(0, 0, 0, 0.6);
  .van-cell {
    line-height: 1rem;
  }

  .sure {
    background: #F1B23E;
    color: #fff;
    text-align: center;
    line-height: 1rem;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    font-size: 16px;
  }

  .warp {
    .van-cell {
      border-bottom: 1px solid #ccc;
      line-height: 1rem;
      box-sizing: border-box;
      i {
        line-height: 1rem;
      }
      img {
        width: 1rem;
        height: 1rem;
        text-align: right;
      }
    }
  }

  .cell {
    display: flex;
    span {
      flex: 1.5rem 0 0;
      font-size: 15px;
      color: $colorG;
    }
    input {
      flex: 1;
      text-align: right;
    }
  }
</style>
