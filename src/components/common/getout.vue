<template>
  <div class="vueBox" >
    <div class="marquee">
      <div class="marquee_box">
        <ul class="marquee_list" :style="{ top: -num + 'rem'}" :class="{marquee_top:num}">
          <li v-for="(item,iindex) in marqueeList" :key="iindex">
            {{item.txt}}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'getout',
  data: function () {
    return {
      num: 0,
      marqueeList: [
        {
          txt: '这是文字1',
          id: 1
        },
        {
          txt: '这是文字1',
          id: 1
        },
        {
          txt: '这是文字1',
          id: 1
        },
        {
          txt: '这是文字1',
          id: 1
        }
      ]
    }
  },
  created: function () {
    this.showMarquee(this.num)
  },
  methods: {
    showMarquee: function (num) {
      this.marqueeList.push(this.marqueeList[0])
      let max = this.marqueeList.length
      let that = this
      this.marqueetimer = setInterval(function () {
        num++
        if (num >= max) {
          num = 0
        }
        that.num = (num * 50) / 100
      }, 2000)
    }
  }
}
</script>
<style scoped>
  .marquee{
    height: .5rem;
    color: #3A3A3A;
    background-color:rgb(249,250,251);
    border-radius: .2rem;
    width:95%;
    margin: 0 auto;
    padding-left: 80px;
    box-sizing: border-box;
    box-shadow:.05rem .05rem .1rem rgba(0,0,0,0.3);
    background-image: url("/static/icon-test@2x.png");
    background-size: .35rem .35rem;
    background-position:5% center;
    background-repeat: no-repeat;
  }
  .marquee_box{
    display: block;
    position: relative;
    height: .5rem;/*关键样式*/
    overflow: hidden;
  }
  .marquee_list{
    display: block;
    position: absolute;
    top:0;
    left: 0;
  }
  .marquee_top{transition: top 0.5s ;}/*关键样式*/
  .marquee_list li{
    height: .5rem;/*关键样式*/
    line-height: .5rem;/*关键样式*/
    font-size:.25rem;
  }
  .red{
    color: #FF0101;
  }
</style>
