<template>
<div>
  <div class="zhong">
<!-- 中间广告层 -->
<div class="guanggao">
  <img class="yingxiao" src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=261004008,4078356530&fm=26&gp=0.jpg" alt="">
</div>
<!-- 价格层 -->
<div class="jiage">
<span class="money">￥<span>2199</span> .00</span>
<div>
<div class="inform">

<span>
  <p><img src="../assets/image/qian.png" alt=""></p>
    <p>降价通知 </p> 
</span>

<span>
<p> <img src="../assets/image/shouchang.png" alt=""></p>
  <p>0.1万 </p>

</span>





</div>
</div>
</div>
<!-- 夕夕超市 -->
<div class="jieshi">
<span class="biaofu">夕夕超市</span>
<span>一站式屯生活好物</span>
</div>

<div class="zhiying_one">
  <span class="biaofu">自营</span>
<span>

  泰光银楼 银杯子S999足银壶百福茶具银泡茶壶隔热银盖杯防烫公道杯实用银烧水壶 百福茶杯55毫升 银重约46克</span>
</div>
<!-- 介绍 -->
<div class="jieshao"
>·可爱造型&nbsp;·精品打造&nbsp;·用心选料</div>
<!-- 广告 -->
<div class="miaosa">
[夕夕秒杀]大牌玩具游乐多功能卡牌,11.08日16点-11.10日16点
准时开抢
秒杀价仅3元,更多秒杀查看店铺,速抢猛戳!
<span>查看></span>
</div>

</div>
<!-- 优惠弹窗 -->
<van-cell is-link @click="showPopup">
<div class="youhui">
<div>优惠</div>
<div>
  <p><span class="biaofu_1">夕夕新人</span> <span class="youhui_one">领立减70元优惠券</span> </p>
  <p class="yichu"><span class="biaofu_1">满额返券</span><span class="youhui_one">&nbsp;换母婴、玩具、生鲜、清洁、个护、食品、自媒体、数码、电视、手机、等自营商品满1元返券包的</span><span class="sandian">...</span> </p>
  <p class="xiahuax"><span class="biaofu_1 ">换购</span><span class="youhui_one">&nbsp;购买一件可优惠换购热销商品</span></p>
</div>
</div>


</van-cell>

<van-popup v-model="show"
 position="bottom" 
 :style="{ height: '60%' }"
 round 
 closeable
 >
 <div class="tanchuang">
    <p>优惠</p>
<div>
  <p class="zhuanxiang">夕夕新人专享</p>
  <p class="juan"><span>领立减70元优惠券</span><span>立即开通</span> </p>
  
</div>
<div style="margin:1em">
<p class="zhuanxiang">促销</p>

<div class="aluxi">
  <p><span  class="biaofu_1" >满额返券</span><span class="youhui_one">&nbsp;换母婴、玩具、生鲜、清洁、个护、食品、自媒体、数码、电视、手机、等自营商品满1元返券包的</span> </p>
  <p><span class="biaofu_1">换购</span> <span class="youhui_one">&nbsp;购买一件可优惠换购热销商品</span> </p>
</div>

</div>
 </div>
 </van-popup>

      <div class="huodong">
      <span>活动</span> 
      <span><img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1603537766061&di=840903174b2c63076d485471082fc2e6&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F50316141e199984fd58f00f3f27412eb1158fdd8221c-nTWpgF_fw658" alt="">全球好物热爱季 爆品低至五折</span>
      <span><img src="../assets/image/qianjin.png" alt=""></span>
      </div>
 <!-- 已选 -->
 <div class="yixuan">
   <span>已选</span>
   <p>
   <span>华为p30</span>,
   <span>0.595kg</span>,
   <span>1件</span>,
   <span>可选服务</span>
    <span><img src="../assets/image/slh.png" alt=""></span>
   </p>
  
 </div>

</div>
</template>
<script>
export default {
   data() {
    return {
      show: false,
    }
    },
    methods: {
    showPopup() {
      this.show = true;
    },
  }

}
</script>
<style  scoped>
.zhong{
  background: #fff;
    border-radius: 10px;
}
.guanggao{
  margin: 10px 10px;
}

.yingxiao{
  width:100%;height: 50px;
  border-radius: 10px;
}
.money{
    display: inline-block;
 margin:10px 0 0 10px;
    color:#FF0000 ;
    
}
.money>span{
    font-size: 24px;
    font-family:Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif
}
.jiage{
    display: flex;
    justify-content: space-between;
}
.inform{
  display: flex;
}
.inform>span{
  display: inline-block;
  margin-right: 1em;
}
.inform>span>p{
  font-size: 12px;
   text-align: center;
   font-family:Verdana, Geneva, Tahoma, sans-serif;
   color: #6E6E6E;  
}
.inform>span>p:nth-child(2){
  margin-top: 5px;
  display: inline-block;
}
.jieshi,.zhiying_one{
  margin:15px;
}
.zhiying_one{
  height: 50px;
  line-height: 20px;
}
.jieshi>span:nth-child(2){
  display: inline-block;
  font-size: 14px;
  color: #6E6E6E;
margin-left: 10px;
line-height: 10px;
}
.jieshi>p{
  float: right;
}
.zhiying_one>span:nth-child(2){
   font-size: 15px;
  font-family:inherit;
  font-weight: bolder;
}
.jieshao{
  font-size: 12px;
  margin-left: 15px;
  color:#6E6E6E ;
}
.miaosa{
  margin: 15px;
  font-size: 12px;
  height: 30px;
  line-height: 15px;
  color: #6E6E6E;
  padding-bottom: 20px;

}
.miaosa>span{
  color:#DF3A01
}
.youhui{
  display: flex;
}
.youhui_one{
  font-size: 12px;
}
.youhui>div:first-child{
  font-size: 15px;
  font-weight: bolder;
  width: 5em;
}
.youhui>div:nth-child(2){
  margin-left: 2em;
}
.youhui>div:nth-child(2)>p{
  height: 30px;
}
.biaofu_1{
   padding: 2px;
    font-size: 8px;
    color: #DF3A01;
    background:#F5A9A9 ;
    border-radius: 5px;  
  
}
.yichu{
 position: relative;
  overflow: hidden;
height: 20px;
padding-right: 4px;
	text-overflow:ellipsis;
}
.sandian{
  position: absolute;
  bottom: 0;
  right: 3px;
  margin-left: 0px;
  display: inline-block;
}
.tanchuang{
  margin-top: 10px;
}
.tanchuang>p:first-child{
  text-align: center;
  font-weight: bolder;
}
.tanchuang>div:first-child {
  margin:3em 1em 2em 1em;
}
.tanchuang>div:nth-child(2){
  margin:1em ;
}
.zhuanxiang{
  font-size: 15px;
  color: #6E6E6E;
  display: inline-block;
  margin-bottom: 1em;
}
.juan>span:first-child{
  font-size: 15px;
}
.juan{
  position: relative;
}
.juan>span:nth-child(2){
  display: inline-block;
 position: absolute;
 right: 5%;
   font-size: 12px;
   padding: 5px;
   border: 1px solid #DF3A01;
   border-radius: 20px;
   color: #DF3A01;
}
.aluxi>p{
margin-top: 1em;
}
.xiahuax{
  padding-bottom: 1em;
  border-bottom: 1px solid#BDBDBD;
}
.huodong{
padding: 1em;
background: #fff;
position: relative;
}
.huodong>span:first-child{
  font-weight: bolder;
  font-size: 15px;
}
.huodong>span:nth-child(2){
  display: inline-block;
  margin-left: 2em;
  font-size: 15px;
  color: #6E6E6E;
}
.huodong>span:nth-child(2)>img{
  width: 20px;
}
.huodong>span:last-child{
  position: absolute;
  right: 10px;
}
.yixuan{
  margin-top: 1em;
  padding: 1.5em 1em 1em 1em;
  background: #fff;
  position: relative;
}
.yixuan>span:first-child{
  font-weight: bolder;
}
.yixuan>p>span:last-child{
  position: absolute;
  right: 1em;
}
.yixuan>p{
   display: inline-block;
   margin-left: 2em;
   font-size: 15px;
   color: #1C1C1C;
}
</style>