<template>
    <div>
       <div class="yixuan">
<!-- 第一层开始 -->
<div class="yixuan_one">
<div>
    <img src="https://img.alicdn.com/imgextra/i1/751075004/O1CN01JBLlXi1mpsVFh6aYb_!!751075004.jpg_430x430q90.jpg" alt="">
</div>

<div>
<div><span class="money">￥<span class="font-25">{{sum}}</span>.00</span></div>
<div class="jianju"><p class="xiao">重量:0.69kg </p> <p class="xiao">编号:00000000002</p></div>

</div>


</div>
<!-- 第一层结束 -->

<!-- 第二层开始 -->
<div class="yixuan_two">
    <div><p>类型</p></div>
<div>
    <span>9枚奶香味礼盒装</span>
    <span>18枚奶香味礼盒装</span>
    <span>18枚黑巧味礼盒装</span>
    <span>24枚草莓味礼盒装</span>
    <span>26枚奶香味礼盒装</span>
    <span>28枚奶香味礼盒装</span>
    <span>30枚奶香味礼盒装</span>
</div>

<div>
    <span>数量</span>
    <span>
        <button class="btnn" @click="jian">-</button>
         <span class="number">{{number}}</span>
        <button class="btnn" @click="add">+</button>
    </span>
</div>
</div>

<!-- 第二层结束 -->

<!-- 第三层开始 -->
<div class="xitiao">
    <p>夕条</p>
       <div class="fenqi_1">
    <div class="fenqi">

  <div>
    <p>不分期</p>
    <p>0服务费</p>
  </div> 

   <div>
    <p>￥48.01×3期</p>
    <p>服务费￥1.61/期</p>
  </div>
   
<div>
    <p>￥48.01×6期</p>
    <p>服务费￥1.61/期</p>
  </div>

<div>
    <p>￥48.01×9期</p>
    <p>服务费￥1.61/期</p>
  </div>

<div>
    <p>￥48.01×12期</p>
    <p>服务费￥1.61/期</p>
  </div>

  <div>
    <p>￥48.01×24期</p>
    <p>服务费￥1.61/期</p>
  </div>
</div>


</div>
</div>
<!-- 第三层结束 -->

<van-goods-action>
      <van-goods-action-button 
      class="anniu"
      type="warning" text="加入购物车" color="#000" />
  <van-goods-action-button 
   class="anniu"
   type="danger"    text="立即购买" color="warning" />
   
 
</van-goods-action>

</div>

    </div>
</template>
<script>
import { Toast } from 'vant'

export default {
    data(){
       return{
         number:1,
         price:289,
         
       } 
    },
    methods:{
       jian(){
          if(this.number>1){
              this.number--
          }else{
             Toast('最少购买1件哦!');
          } 
       } ,
       add(){
         this.number++
       }
    },
    computed:{
        sum(){
            let total=0
            total+=this.number*this.price
             return      total    
        }
    }
}
</script>

<style  scoped>
.yixuan_one {
position: relative;
}
.yixuan_one img{
    width: 100px;
    height: 100px;
}
.yixuan_one>div:first-child{
    margin: 2em;
}
.yixuan_one>div:nth-child(2){
    position: absolute;
    top:3em;left: 50%;
}
.xiao{
    
    font-size: 12px;
    color:#BDBDBD;
}
.jianju{
    line-height: 1em;
}
.yixuan_two>div:first-child,.yixuan_two>div:nth-child(3){
margin: 1em;
font-weight: bolder;
position: relative;
}
.yixuan_two>div:nth-child(3)>span:nth-child(2){
    position: absolute;
    right: 0em;
    top:-7px
    
}
.yixuan_two>div:nth-child(2){
    margin-left: 1em;
}
.yixuan_two>div:nth-child(2)>span{
    display: inline-block;
    padding: 0.5em;
    background: #E6E6E6;
    border:1px solid #E6E6E6;
    margin: 0.5em;
    border-radius: 10px;
    font-size: 14px;
    color: #000;
   
}
.yixuan_two>div:nth-child(2)>span:hover{
    color:#FF0000;
    border:1px solid #FF0000;
    background: #F78181;
}
.number{
    display: inline-block;
    padding: 0.5em 1.5em;
    background: #F2F2F2;
}
.btnn{
   
    border: 0;
    background: #fff;
    font-size: 20px;
}
.xitiao{
    margin: 3em 0 0 1em;
}
.xitiao>p{
    font-weight:bolder
}
.fenqi_1{
overflow-x: auto;
}
.fenqi{
    width: 1000px;
     margin: 1em 0 0 0.5em;
  height: 60px;
 justify-content: flex-start;
overflow-y:auto;
display: flex;
}
.fenqi>div{
     margin: 0.5em;
     background: #BDBDBD;
     padding:1em .5em;
     width: 140px;
     text-align: center;
     border-radius:15px ;
     font-size: 12px;
}
   ::-webkit-scrollbar {
        width: 0px;
    }
</style>