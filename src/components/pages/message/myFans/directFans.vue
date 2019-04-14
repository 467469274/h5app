<template>
  <div class="sexWarp">
    <van-cell>
        <div class="cell">
             <img src=""/>
            <div class="imageinfo"> 
                <p class="imageTitle">张宇</p>
                <p class="imagePrcie">手机号：18201589326</p>
            </div>
        </div>
    </van-cell>
  </div>
</template>

<script>
  export default {
    name: "sex",
    data(){
      return{
       
      }
    },
    methods:{

    }
  }
</script>

<style scoped lang="scss">
  $colorG: rgba(0, 0, 0, 0.6);
  
  .cell{
      display:flex;
      img{
           flex:0.1;
        width:1.3rem;
         height:1.3rem;
      }
        .imageinfo{
         flex:1;
         text-indent:0.2rem;
         p{
             display:block;
             width:100%;
              overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
         }
         .imageTitle{
             font-size:15px;
         }
         .imagePrcie{
             margin:0.3rem 0 0 0;
            font-size:12px;
            color: #676767;
         }
     }
  }
</style>
