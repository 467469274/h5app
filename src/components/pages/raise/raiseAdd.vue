<template>
  <div class="fire">
    <van-nav-bar title="加入众筹"
                 left-arrow
                 class="nav"
                 @click-left="goSomePage('back')"
    >
    </van-nav-bar>
    <div class="inputList">
      <div class="inputItem">姓名 <input type="text" v-model="name" placeholder="请输入姓名"></div>
    </div>
    <div class="inputList">
      <div class="inputItem">手机号 <input type="number" @keypress="keypress" v-model="phone" placeholder="请输入手机号"/></div>
    </div>
    <div class="inputList">
      <div class="inputItem">投入金券 <input v-model="gold" @keypress="keypress" type="number" placeholder="请输入数量"></div>
    </div>
    <div class="fireBtn" @click="save">加入</div>
  </div>
</template>

<script>
  export default {
    name: 'raiseFire',
    data() {
      return {
        gold: '',
        name: '',
        phone: ''
      }
    },
    methods: {
      goSomePage(type) {
        if (type == 'back') {
          this.$router.back(-1)
        } else if (type == 'my') {
          this.$router.push({name: 'myraise'})
        } else {
          this.$router.push({name: 'raiseFire'})
        }
      },
      save() {
        var myreg=/^[1][3,4,5,7,8][0-9]{9}$/;
        if (this.name == '') {
          this.$toast('请输入有效的姓名')
        } else if (this.phone == '') {
          this.$toast('请输入手机号')
        } else if (this.gold == '') {
          this.$toast('请输入数量')
        } else if (this.phone == '' || !myreg.test(this.phone)) {
          this.$toast('请填写正确的手机号')
        } else if (this.gold<3000) {
          this.$toast('最少投入3000')
        }else if (this.gold>=3000 && this.gold%100!=0) {
          this.$toast('投入金额必须为100的倍数')
        } else {
          this.$ajax('/api/tick/join', {
              tickId: this.$route.query.value,
              gold: this.gold,
              name: this.name,
              phone: this.phone
            },
            (res) => {
              console.log(res.data)
              this.$toast('加入成功')
              this.$router.push({name: 'myraise', query: {type: 1}})
            },
            (err) => {
              console.log(err)
              this.$toast(err)

            },
            'post')
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  .nav {
    box-shadow: 0.05rem 0.05rem 0.1rem rgba(0, 0, 0, 0.1);

  }

  .inputList {
    background: #fff;

    .inputItem {
      font-size: 17px;
      height: 1.2rem;
      color: rgba(0, 0, 0, .6);
      padding: 0 .2rem;
      border-bottom: rgba(0, 0, 0, .3) 1px solid;
      display: flex;
      align-items: center;

      input {
        outline: none;
        border: none;
        text-align: right;
        height: .8rem;
        flex: 1;
      }

      div {
        flex: 1;
        text-align: right;
        display: flex;
        align-items: center;

        input {
          width: .5rem;
          margin: 0 10px;
          text-align: center;
        }
      }
    }
  }

  .fireBtn {
    background: rgb(30, 153, 75);
    color: #fff;
    text-align: center;
    line-height: 1rem;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    font-size: 16px;
  }
</style>
