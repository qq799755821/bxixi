<template>
  <div>
    <my-header></my-header>
<!-- 顶部选项卡开始 -->
<mt-navbar v-model="active" class="xuan">
  <mt-tab-item id="1">
   推荐
  </mt-tab-item>
  <mt-tab-item id="2">
    品牌
  </mt-tab-item>
  <mt-tab-item id="3">
    精品
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
:show-indicators="false"
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


      <!-- 图标   -->
<div class="daohangbiao">
<mt-swipe :auto="0"
 continuous
>
  <mt-swipe-item>
          <div class="content">
<div class="content_biao">
  <div class="content_he" v-for="(v,i) of  list_1" :key="i">
    <img :src="v.path"  alt="">
    <p class="content_z">{{v.ps}}</p>
  </div>
</div>  
</div>


 <div class="content">
<div class="content_biao">
  <div class="content_he" v-for="(v,i) of list_2" :key="i">
    <img :src="v.path"  alt="">
    <p class="content_z">{{v.ps}}</p>
  </div>
</div>  
</div>


  </mt-swipe-item>
  <mt-swipe-item>
     <div class="content">
<div class="content_biao">
  <div class="content_he" v-for="(v,i) of  list_3" :key="i">
    <img :src="v.path"  alt="">
    <p class="content_z">{{v.ps}}</p>
  </div>
</div>  
</div>

 <div class="content">
<div class="content_biao">
  <div class="content_he" v-for="(v,i) of  list_4" :key="i">
    <img :src="v.path"  alt="">
    <p class="content_z">{{v.ps}}</p>
  </div>
</div>  
</div>


  </mt-swipe-item>
</mt-swipe>
</div>



   <!--广告栏 -->
<div class="ad">
<p>重逢专享礼</p>
<div class="ad_1">
  <!-- 图片 -->
  <div class="ad_2" v-for="(v,i) of this.$store.state.vip" :key="i">
  <img :src="v.image">
  <p>{{v.jianjie}}</p>
  <p>{{v.ticket}}元优惠券</p>
  </div>


</div>
</div>
<!-- 秒杀 -->
    <div class="seckill">

<div class="big_seck" >
   <div class="seckill_a" v-if="kai==false">
<span class="myp">夕夕秒杀</span>
<span>{{hours}}点场</span>
<span>{{Hourleft}}</span>:
<span>{{Minuteleft}}</span>:
<span>{{Secondleft}}</span>
  </div>  


   <div class="seckill_a" :class="{donghua:kai}" v-else>
<span class="myp">夕夕秒杀</span>
<span>{{hours}}点场</span>
<span style="background:#FA5858;color:#FFFFFF">开始抢啦!!</span> 


  </div>


  <div class="miaoshatu">

    <div class="miaoshatu_1" v-for="(v,i) of  this.$store.state.seckill" :key="i">
    <img style="width:100%" :src="v.image" alt="">
             
          <p>￥{{v.current}}</p>
           <p>  <del>￥{{v.original}}</del> </p>
          </div>


  </div>
</div>
    </div>
<!-- 发现好货 -->
<div class="haohuo">

 <div class="vgshop" v-for="(v,i) of this.$store.state.haohuo" :key="i">
   <p class="myp">{{v.title}}</p>
   <p>{{v.introduce}}</p>
   <div class="goodshop">
     <div class="goodshoptu" >
       <img :src="v.imagpathOne" alt="">
     </div>
     <div class="goodshoptu">
       <img :src="v.imagpathTwo" alt="">
     </div>
   </div>
 </div>






</div>
<div class="myp store">
<span >夕夕商城</span>
<span>快來选购你喜欢的商品吧~</span>
</div>
<my-product></my-product>

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













     





  <my-base></my-base> 
  </div>
</template>
<script>
import MyHeader from '../components/MyHeader'
import MyProduct from '../components/Product'
export default {
  components:{MyHeader,MyProduct}
  ,
  data(){
    return{
      tabbar:'index',
     active:'1',
    onelist:[{path:'fuzhuang.png',ps:'服装'},
     {path:'dianqi.png',ps:'电器'},
     {path:'jiaju.png',ps:'家具'},
      {path:'fuwu.png',ps:'服务'}
     ],
     twolist:[{path:'shenghuo.png',ps:'生活'},
     {path:'huiyuan.png',ps:'会员'},
     {path:'paimai.png',ps:'拍卖'},
      {path:'yiyao.png',ps:'医药'}
     ],
     threelist:[{path:'shouji.png',ps:'手机'},
     {path:'daishou.png',ps:'代收'},
     {path:'xidou.png',ps:'夕豆'},
      {path:'oem.png',ps:'超市'}
     ],
     fourlist:[{path:'jieqian.png',ps:'借钱'},
     {path:'fuli.png',ps:'福利'},
     {path:'shuiguo.png',ps:'水果'},
      {path:'gengduo.png',ps:'更多'}
     ],
      list_1:[] ,
      list_2:[] ,
       list_3:[] ,
      list_4:[] ,
   //保存当前时间前2小时
   hours:0 ,
   //定时器
   timerID:null,
    //显示的时分秒
    Hourleft:0,
    Minuteleft:0,
    Secondleft:0,
    kai:false,
  
}
  }
  ,
  methods:{
      


    getTime(){
      this.timerID= setInterval(()=>{
 //获取当前时间
  let NowTime=new Date()
  // console.log(NowTime)
  //获取当前小时
  let Myhours= NowTime.getHours(); //获取当前小时数(0-23)
   if(Myhours%2==0){
     this.hours=Myhours+2
   }else{
     this.hours=Myhours+1
   }
   //获取当前年月日
   let nowYear= NowTime.getFullYear()
   let nowMon=NowTime.getMonth()+1
   let  nowDay=NowTime.getDate()
   //未来日期
   let wei=new Date(`${ nowYear}-${nowMon}-${nowDay} ${this.hours}:00:00`)
   let  chuo=wei.getTime()
   //获取相差时间戳
 let  cha=chuo-NowTime
  // console.log(cha)
   if (cha > 0) {   
     let time = cha / 1000;
     // 获取时、分、秒,毫秒
     this.Hourleft = parseInt((time % (60 * 60 * 24)) / 3600)<10?('0'+parseInt((time % (60 * 60 * 24)) / 3600)):parseInt((time % (60 * 60 * 24)) / 3600)
     this.Minuteleft = parseInt(((time % (60 * 60 * 24)) % 3600) / 60)<10?('0'+parseInt(((time % (60 * 60 * 24)) % 3600) / 60)):parseInt(((time % (60 * 60 * 24)) % 3600) / 60);
     this.Secondleft = parseInt(((time % (60 * 60 * 24)) % 3600) % 60)<10?('0'+parseInt(((time % (60 * 60 * 24)) % 3600) % 60)):parseInt(((time % (60 * 60 * 24)) % 3600) % 60);
   
    } else {
     //活动已结束，全部设置为'00'
     // console.log("aaa")
      this.Hourleft="00",
      this.Minuteleft="00",
      this.Secondleft="00"
       this.kai=true
     setTimeout(()=>{
      this.kai=false
     },5000) 
    }
   },1000) 
    }
  
  },
    mounted(){
      this.$store.state.vip=[]
      this.$store.state.seckill=[]
      this.$store.state.haohuo=[]
     this.$store.dispatch('getvip')
  this.$store.dispatch('getseckill')
    this.$store.dispatch('gethaohuo')
 
   

   this.onelist.forEach(v=>{
     v.path=require(`../assets/image/${v.path}`)
     this.list_1.push(v)
     })
     this.twolist.forEach(v=>{
     v.path=require(`../assets/image/${v.path}`)
     this.list_2.push(v)
     })
     this.threelist.forEach(v=>{
     v.path=require(`../assets/image/${v.path}`)
     this.list_3.push(v)
     })
     this.fourlist.forEach(v=>{
     v.path=require(`../assets/image/${v.path}`)
     this.list_4.push(v)
     })

  this.getTime()
  
 
 },
 watch:{
 
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
  justify-content: space-around;
  flex-wrap: wrap;
 
}
/* 广告 */
.ad{
  height: 190px;
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
.ad_2{
  width: 30%;

}
.ad_2>img{
  width: 100%;
  height: 100%;
}
.ad_2>p{
    text-align: center;
  color: #fff;
  font-size: 10px;
  display: block;
  margin-top:2px ;
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
/* 秒杀牌 */
.seckill{
  margin-top: 1em;
  position: relative;
}
.seckill_a{
  position:absolute; 
   top:0;
  margin-left: 5px;
}
.seckill_a::before{
  content: '';
  display: block;
  height: 10px;
}
.myp{
  font-size: 18px;
  font-family:monospace;
  font-weight:bolder;
   margin-left: 5px;
}
.seckill_a>span:nth-child(2){
  color: #FA5858;
  font-size: 10px;
   margin-left: 5px;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
}
.seckill_a>span:nth-child(3),.seckill_a>span:nth-child(4),.seckill_a>span:nth-child(5){
  display: inline-block;
  margin-left: 5px;
 padding: 3px;
 background-color: #fff;
}
.big_seck{
  padding-top: 20px;
  background: #F6CECE;
  border-radius: 10px;
}
.miaoshatu{
  display: flex;

  height: 150px;
  justify-content: space-around;

  border-radius: 10px;
}
.miaoshatu_1::before{
  content: '';
  display: block;
  height: 10px;
}
.miaoshatu_1{
  margin:10px 0 0 10px;
  width: 80px;
  height: 100px;
}
.miaoshatu_1 p{
  text-align: center;
  color: #FE2E2E;
  display: block;
  margin-top: 5px;
  font-size: 15px;
  font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
.miaoshatu_1>p:nth-child(3){
  color: #A4A4A4;
}
.miaoshatu>img{
 width: 100%;

}
.daohangbiao{
  height: 12rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
@keyframes shake{
   0%, 100% {
      transform: translateY(0);
    }
    10%,
    30%,
    50%,
    70%,
    90% {
       transform: translateY(-5px);
    }
    20%,
    40%,
    60%,
    80% {
        -webkit-transform: translateY(5px);
    }
}
.donghua{
  animation: shake 5s linear;
}
.goodshop{
  display: flex;
  
}
.goodshoptu{
  margin-top: 10px;
  width: 80px;
  margin-left:5px
}

.goodshoptu>img{
  width: 100%;
}
.haohuo{
  display: flex;
  justify-content: space-around;
}
.vgshop{
  margin-top: 10px;
}
.vgshop>p:nth-child(2){
  font-size: 8px;
  color: #01DFD7;
  display: inline-block;
  margin-top: 5px;
}
.store{
  display: inline-block;
  padding: 1em;
}
.store>span:nth-child(2){
  font-size: 5px;
  display: inline-block;
  margin-left: 3em;
  font-weight: normal;
  font-family: unset;
}
</style>
