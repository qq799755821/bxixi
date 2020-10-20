<template>
  <div>
    <my-header></my-header>
<!-- 顶部选项卡开始 -->
<mt-navbar v-model="active" class="xuan">
  <mt-tab-item id="1">
    小米
  </mt-tab-item>
  <mt-tab-item id="2">
    华为
  </mt-tab-item>
  <mt-tab-item id="3">
    苹果
  </mt-tab-item>
</mt-navbar>
<!-- 顶部选项卡结束 -->

<!-- 面板区域开始 -->
<div class="mian">
<mt-tab-container  v-model="active">
<mt-tab-container-item id="1">
<!-- 首页轮播图 -->
 <div class="lunbo">
       <mt-swipe
        
       :auto="5000"
       :speed="1000"
    
       >                                                             
          <mt-swipe-item><img src="//imgcps.jd.com/ling4/70945177576/MTjlkajlubTlk4HniYzluoY/NOS7tjbmipjlj6AyMDDlhYPliLg/p-5bd81f3682acdd181dfeb407/b864af73/cr/s/q.jpg" alt=""></mt-swipe-item> 
          <mt-swipe-item><img src="
          //img30.360buyimg.com/babel/s590x470_jfs/t1/130415/31/12104/121508/5f83b211E3e1f0e8c/96a1366187ba3428.png.webp" alt=""></mt-swipe-item> 
          <mt-swipe-item><img src="
          //img11.360buyimg.com/pop/s590x470_jfs/t1/26587/26/9798/97535/5c7f6a96E2f5e5d07/464e6792954e8f88.jpg.webp" alt=""></mt-swipe-item> 
          <mt-swipe-item><img src="
          //img10.360buyimg.com/pop/s590x470_jfs/t1/139982/12/10398/66704/5f80193dE57b271a3/87461d06d50ea019.jpg.webp" alt=""></mt-swipe-item> 
          <mt-swipe-item><img src="
          //img30.360buyimg.com/pop/s590x470_jfs/t1/126451/15/12260/86499/5f59ffb7E1cad4379/c8b965c5cceff37f.jpg.webp" alt=""></mt-swipe-item> 


       </mt-swipe>
    </div>
     <!-- 图标 -->
     <div class="content">
<div class="content_biao">
  <div class="content_he" v-for="(v,i) of  category" :key="i">
    <img :src="v.path"  alt="">
    <p class="content_z">{{v.ps}}</p>
  </div>
</div>  
</div>
<!--广告栏 -->
<div class="ad">
<p>重逢专享礼</p>
<div class="ad_1">
  <!-- 图片 -->
  <div>
  <img src="//img30.360buyimg.com/mobilecms/s300x300_jfs/t1/66738/11/1136/286821/5cf61de5E12099fa1/6d4b0b55344770e4.jpg!q70.jpg.webp" alt="">
  <p>12121</p>


 <div>
  <img src="//img12.360buyimg.com/mobilecms/s300x300_jfs/t1/35725/14/1994/129682/5cb5bcb9E03a91d26/98a88c91bd9f9769.jpg!q70.jpg.webp" alt="">
  <p>12121</p>



 <div>
  <img src="//img30.360buyimg.com/mobilecms/s300x300_jfs/t1/66738/11/1136/286821/5cf61de5E12099fa1/6d4b0b55344770e4.jpg!q70.jpg.webp" alt="">
  <p>12121</p>


  </div>
</div>
</div>

    
</mt-tab-container-item>


<mt-tab-container-item id="2">
22222
</mt-tab-container-item>
<mt-tab-container-item id="3">
3333
</mt-tab-container-item>

</mt-tab-container>


</div>

<!-- 面板区域结束 -->













     







  </div>
</template>
<script>
import MyHeader from '../components/MyHeader'
export default {
  components:{MyHeader}
  ,
  data(){
    return{
     active:'1',
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
  }
 ,
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

</style>




<style score>
.shortcut a{ 
  display:inline-block;
  margin-left:10px;
  text-decoration: none;  
  color:#fff;
}
.xuan{
  margin-top:64px;
}
.lunbo{
  
  height: 200px;

}
.lunbo img{
  width: 100%;
  height: 100%;
}
.content_biao>div{
  float: left;
}
.content_z{
  font-size: 12px;
  text-align: center;
  color: #666;
}
.content_he{
  margin: 1em ;

}
.content{
    overflow-x: auto
}
.content_biao{

  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
/* 广告 */
.ad{
  height: 150px;
  background-color: #FA5858;
  border-radius: 10px;
  position: relative;
}
.ad>p{
  text-align: center;
  color: #fff;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-size: 22px;
  position: absolute;
  top: 10%;
  left: 50%;
  margin-left: -15%;
}
.ad_1{
  width: 90%;
  height: 100px;
  background-color: pink;
  position: absolute;
  top: 30%;
  border-radius: 20px;
  left: 50%;
  margin-left: -45%;
  display: flex;
   justify-content: space-between;
}
.ad_1>div{
 
}
</style>
