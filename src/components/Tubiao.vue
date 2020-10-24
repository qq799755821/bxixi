<template>
<div>
<mt-swipe :auto="0"
 continuous
>
  <mt-swipe-item>
          <div class="content">
<div class="content_biao">
  <div class="content_he" v-for="(v,i) of  category" :key="i">
    <img :src="v.path"  alt="">
    <p class="content_z">{{v.ps}}</p>
  </div>
</div>  
</div>
  </mt-swipe-item>
  <mt-swipe-item>
     <div class="content">
<div class="content_biao">
  <div class="content_he" v-for="(v,i) of  category" :key="i">
    <img :src="v.path"  alt="">
    <p class="content_z">{{v.ps}}</p>
  </div>
</div>  
</div>

  </mt-swipe-item>
</mt-swipe>
</div>
</template>
<script>
export default {
    data(){
        return{
            //模拟后端数据
     list:[{path:'fuzhuang.png',ps:'服装'},
     {path:'dianqi.png',ps:'电器'},
     {path:'jiaju.png',ps:'家具'},
      {path:'fuwu.png',ps:'服务'},
       {path:'shenghuo.png',ps:'生活'} ,
        {path:'paimai.png',ps:'拍卖'} ,
          {path:'huiyuan.png',ps:'拍卖'} ,
       {path:'gengduo.png',ps:'更多'} 
     ],
   category:[]  
        }
    },
    mounted(){
   this.list.forEach(v=>{
     v.path=require(`../assets/image/${v.path}`)
     console.log(v)
     this.category.push(v)


      console.log(this.category)
     
   })
 }
}
</script>
<style>
.content_biao{
touch-action:none
}
</style>