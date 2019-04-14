<template>
  <div class="sexWarp">
    <van-nav-bar
      title="签到"
      left-arrow
    />
    <div class="warp">
        <div class="warpInfo">
            <div class="warpTitle">每日签到 赢微信红包</div>
            <div class="warpSubTitle">签到时间：每日8:00至21:00</div>
            <div class="warpPrice">
                <img src>
                <div class="personInfo">
                    <p class="personName">小侄儿</p>
                    <div><p class="personNumber">已得红包：<span>4:00</span>元</p><p class="personCount">已得红包：<span>0</span>张</p></div>
                </div>
            </div>
        </div>
        <div class="packetList">
            <ul>
                <li class="RetroactiveLi">
                    <p class="Retroactive"></p>
                    <p class="dayNumber">第1天</p>
                </li>
                <li class="RetroactiveLi">
                    <p class="Retroactive"></p>
                    <p class="dayNumber">第2天</p>
                </li>
                <li class="RetroactiveLi">
                    <p class="Retroactive"></p>
                    <p class="dayNumber">第3天</p>
                </li>
                <li class="RetroactiveLi">
                    <p class="Retroactive"></p>
                    <p class="dayNumber">第4天</p>
                </li>
                
                <li class="RetroactiveLi">
                    <p class="Retroactive"></p>
                    <p class="dayNumber">第6天</p>
                </li>
                <li class="RetroactiveLi">
                    <p class="Retroactive"></p>
                    <p class="dayNumber">第7天</p>
                </li>
                <li class="RetroactiveLi">
                    <p class="Retroactive"></p>
                    <p class="dayNumber">第8天</p>
                </li>
                <li class="signLi">
                    <p class="Retroactive"></p>
                    <p class="dayNumber">第2天</p>
                </li>
               <li class="futureLi">
                    <p class="Retroactive"></p>
                    <p class="dayNumber">第9天</p>
                </li>
                <li class="futureLi">
                    <p class="Retroactive"></p>
                    <p class="dayNumber">第2天</p>
                </li>
                <li class="futureLi">
                    <p class="Retroactive"></p>
                    <p class="dayNumber">第10天</p>
                </li>
                <li class="futureLi">
                    <p class="Retroactive"></p>
                    <p class="dayNumber">第11天</p>
                </li>
                <li class="futureLi">
                    <p class="Retroactive"></p>
                    <p class="dayNumber">第12天</p>
                </li><li class="futureLi">
                    <p class="Retroactive"></p>
                    <p class="dayNumber">第13天</p>
                </li>
                <li class="futureLi">
                    <p class="Retroactive"></p>
                    <p class="dayNumber">第14天</p>
                </li>
            </ul>
            <p class="semicircle"></p>
            <div class="rule">
                <p class="ruleTitle">-- 签到红包规则 -- </p>
                <p class="ruleInfo">1.签到签到牵动啊和第三世界的十四行诗看见的</p>
                <p class="ruleInfo">2.签到世纪福克斯的粉红色的科菲迪斯咖啡机地方</p>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import gainCode from '../../common/gainCode.vue'
  export default {
    name: "sex",
    data(){
      return{
        radio:1,
        checked:true
      }
    },
    methods:{

    }
  }
</script>

<style scoped lang="scss">
.warp{
    // background:#fff;
}
.warpInfo{
    position:relative;
    margin:0 0 1rem 0;
    padding:0.1px;
  background: -webkit-linear-gradient(left, #FB6F00 , #FD3201); /* Safari 5.1 - 6.0 */
  background: -o-linear-gradient(right, #FB6F00, #FD3201); /* Opera 11.1 - 12.0 */
  background: -moz-linear-gradient(right, #FB6F00, #FD3201); /* Firefox 3.6 - 15 */
  background: linear-gradient(to right, #FB6F00 ,#FD3201); /* 标准的语法 */
}
.warpTitle{
    margin:1.4rem 0 0.2rem 0;
    font-size:25px;
    font-weight:600;
    color:#fff;
    text-align:center;
}
.warpSubTitle{
    margin: 0 0 1.1rem 0;
    font-size:18px;
    color:#fff;
    text-align:center;
}
.warpPrice{
    display:flex;
    position:absolute;
    bottom:-0.75rem;
    left:7.5%;
    margin:0 auto;
    width:85%;
    height:1.5rem;
  background:#fff;
  border-radius:1rem;
  img{
      flex:0.1;
      margin:0.25rem 0.2rem 0 0.3rem;
      width:1rem;
      height:1rem;
      border-radius:50%;
      background:red;
  }
  .personInfo{
      flex:1;
      .personName{
          margin:0.2rem 0 0.2rem 0;
          font-size:14px;
          font-weight:600;
      }
      div{

      }
      .personNumber,.personCount{
           float:left;
           font-size:10px;
           span{
               color:#FD360D;
               font-size:12px;
           }
      }
      .personCount{
          margin:0 0.4rem 0 0;
          float:right
      }
  }
}


.packetList{
    position:relative;
    padding:0.1px;
    clear:both;
    width:100%;
    background:#fff;
    border-radius:0.3rem;
    ul{
        margin:0.5rem auto 0.5rem auto;
        display:block;
        width:95%;
        height:5rem;
      
        li{
            float:left;
            width:16.66%;
            height:1.8rem;
            overflow:hidden;
        }
        .RetroactiveLi,.futureLi,.signLi{
            display:inline-block;
            .Retroactive{
                margin:0 auto 0.1rem auto;
                width:0.7rem;
                height:1.1rem;
                background:url('../../../assets/images/buqian.png') no-repeat center center;
                background-size:100% 100%;
            }
            .dayNumber{
                margin:0 0 0.3rem 0;
                text-align:center;
                font-size:12px;
                color:#999999;
            }
        }
        .futureLi{
            display:inline-block;
            .Retroactive{
                margin:0.43rem auto 0.1rem auto;
                width:0.5rem!important;
                height:0.65rem!important;
                    background:url('../../../assets/images/hongbao2x.png') no-repeat center center!important;
                        background-size:100% 100%!important;
            }      
        }
        .signLi{
             .Retroactive{
                margin:0 auto 0.1rem auto;
                width:0.7rem;
                height:1.1rem;
                background:url('../../../assets/images/singIng.png') no-repeat center center;
                background-size:100% 100%;
            }
        }

    }
}

.semicircle{
    height:1rem;
}
.rule{
    position:absolute;
    bottom:-20%;
    left:-30%;
   width: 160%;
    height: 30%;
    background: -webkit-linear-gradient(left, #FB6F00 , #FD3201); /* Safari 5.1 - 6.0 */
  background: -o-linear-gradient(right, #FB6F00, #FD3201); /* Opera 11.1 - 12.0 */
  background: -moz-linear-gradient(right, #FB6F00, #FD3201); /* Firefox 3.6 - 15 */
  background: linear-gradient(to right, #FB6F00 ,#FD3201); /* 标准的语法 */
      border-radius: 50% / 100% 100% 0 0;
    color:#fff;
   .ruleTitle{
       margin:0.5rem 0 0.2rem 0;
       font-size:14px;
       text-align:center;
   }
   .ruleInfo{
       margin:0 auto;
       width:5.5rem;
       font-size:12px;
       
   }
}
</style>
