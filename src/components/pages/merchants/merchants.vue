<template>
  <div class="merchants">
    <van-nav-bar title="商家联盟"
                 left-arrow
                 @click-left="goSomePage('back')"
    >
    </van-nav-bar>
    <div class="main">
      <img src="../../../assets/images/merchants.png">
      <div class="commercialLocation">
        <div class="inner">
          <div class="location">
            <div class="locationInner">
              <div class="imgWarp">
                <!--<img src="../../../assets/images/locationImg.png" alt="">-->
              </div>
              <p class="title">广告位招商</p>
              <p class="price">100金券/周</p>
            </div>
          </div>
          <div class="location">
            <div class="locationInner">
              <div class="imgWarp">
                <!--<img src="../../../assets/images/locationImg.png" alt="">-->
              </div>
              <p class="title">广告位招商</p>
              <p class="price">100金券/周</p>
            </div>
          </div>
          <div class="location">
            <div class="locationInner">
              <div class="imgWarp">
                <!--<img src="../../../assets/images/locationImg.png" alt="">-->
              </div>
              <p class="title">广告位招商</p>
              <p class="price">100金券/周</p>
            </div>
          </div>
        </div>
        <div class="inner">
          <div class="location">
            <div class="locationInner">
              <div class="imgWarp">
                <!--<img src="../../../assets/images/locationImg.png" alt="">-->
              </div>
              <p class="title">广告位招商</p>
              <p class="price">100金券/周</p>
            </div>
          </div>
          <div class="location">
            <div class="locationInner">
              <div class="imgWarp">
                <!--<img src="../../../assets/images/locationImg.png" alt="">-->
              </div>
              <p class="title">广告位招商</p>
              <p class="price">100金券/周</p>
            </div>
          </div>
          <div class="location">
            <div class="locationInner">
              <div class="imgWarp">
                <!--<img src="../../../assets/images/locationImg.png" alt="">-->
              </div>
              <p class="title">广告位招商</p>
              <p class="price">100金券/周</p>
            </div>
          </div>
        </div>
        <div class="inner">
          <div class="location">
            <div class="locationInner">
              <div class="imgWarp">
                <!--<img src="../../../assets/images/locationImg.png" alt="">-->
              </div>
              <p class="title">广告位招商</p>
              <p class="price">100金券/周</p>
            </div>
          </div>
          <div class="location">
            <div class="locationInner">
              <div class="imgWarp">
                <!--<img src="../../../assets/images/locationImg.png" alt="">-->
              </div>
              <p class="title">广告位招商</p>
              <p class="price">100金券/周</p>
            </div>
          </div>
          <div class="location">
            <div class="locationInner">
              <div class="imgWarp">
                <!--<img src="../../../assets/images/locationImg.png" alt="">-->
              </div>
              <p class="title">广告位招商</p>
              <p class="price">100金券/周</p>
            </div>
          </div>
        </div>
      </div>
      <img src="../../../assets/images/merchants2.png">
    </div>
    <colorBox :color="'#F5F6F7'"></colorBox>
  </div>
</template>

<script>
  export default {
    name: 'invitation',
    methods: {
      goSomePage (type) {
        if (type == 'back') {
          this.$router.back(-1)
        } else if (type == 'rules') {
          this.$router.push({name: 'rules'})
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  .merchants{
    .main{
      img{
        width: 100%;
      }
      .commercialLocation{
        width: 95%;
        margin:.2rem auto;
        .inner{
          display: flex;
          margin-bottom: .2rem;
          .location{
            flex: 1;
            background: #fff;
            position: relative;
            .locationInner{
              position: absolute;
              left:0;
              top: 0;
              width: 100%;
              height: 100%;
              .imgWarp{
                width: .8rem;
                height: .8rem;
                background: #ccc;
                border-radius: 50%;
                margin: .3rem auto;
              }
              .title{
                font-size: 13px;
                color: rgba(0,0,0,0.5);
                margin-bottom:.15rem;
              }
              .price{
                color: rgba(0,0,0,0.3);
              }
              p{
                margin: 0;
                text-align: center;
              }
            }
            &:nth-child(2){
              margin: 0 .2rem;
            }
            &:before{
              content: '';
              width: 100%;
              height: 100%;
              display: block;
              padding-bottom: 100%;
            }
          }
        }
      }
    }
  }
</style>
