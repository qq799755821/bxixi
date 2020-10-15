<template>
  <div>
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
       :showIndicators="false" 
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


  <!-- 面板区域开始 -->



  <!-- 面板区域结束 -->
     



<!-- 底部选项卡 -->
<div>
<mt-tabbar v-model="tabbar" fixed>
<mt-tab-item id='index'>
  首页
  <img src="../assets/image/home_enable.png" slot="icon" alt="" v-if="tabbar=='index'">
  <img src="../assets/image/home_disable.png"
  slot="icon" alt="" v-else>

</mt-tab-item>
<mt-tab-item id='ditails'>
  详情
  <img src="../assets/image/ditails_enable.png" alt="" slot="icon" v-if="tabbar=='ditails'" >
  <img src="../assets/image/ditails_disable.png" alt=""
  slot="icon"  v-else >

</mt-tab-item>
<mt-tab-item id="car">
  购物车
   <img src="../assets/image/car_enable.png" alt="" slot="icon" v-if="tabbar=='car'">
  <img src="../assets/image/car_disable.png" alt="" slot="icon" v-else>
</mt-tab-item>
<mt-tab-item id="me">
  我的
  <img src="../assets/image/my_enable.png" alt="" slot="icon" v-if="tabbar=='me'">
  <img src="../assets/image/my_disable.png" alt="" slot="icon" v-else>
</mt-tab-item>

</mt-tabbar>

</div>

<!-- 底部选项卡结束 -->



  </div>
</template>
<script>
export default {
  data(){
    return{
     active:'1',
     tabbar:'index'
    }
  },
  watch:{
    tabbar(){

    }
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

.lunbo{
  
  height: 200px;

}
.lunbo img{
  width: 100%;
  height: 100%;
}
</style>
