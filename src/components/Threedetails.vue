<template>
    <div>
        <van-cell is-link @click="showPopup"  >

            <div class="yixuan">
   <span>已选</span>
   <p>
   <span>华为p30</span>,
   <span>0.595kg</span>,
   <span>1件</span>,
   <span>可选服务</span>
   </p>
  
 </div>
        </van-cell>

       
<van-popup v-model="show"
 closeable position="bottom"
  :style="{ height: '90%' }"
>
<my-yixuan>

</my-yixuan>
</van-popup>

<div style="margin-top:10px">
<van-cell is-link @click="shang">
<!-- 送至地址 -->
<div class="songzhi" >
    <span>送至</span>
    <div class="songzhi_1">
     <span><img src="../assets/image/dizhi.png" alt=""><span>   
        </span> {{value}}</span>
    <p><span>现货</span><span>&emsp;今日23:59前下单,24H发货,{{date}}&emsp;24:00前送达</span> </p>
    </div>
</div>

</van-cell>
</div>

<!-- 送至展示层 -->
<van-popup v-model="showtwo"
 closeable
 position="bottom" :style="{ height: '90%' }" 
>
            <div class="zhanshiceng">
                <p>配送至</p>
                <div class="zhanshiceng_1">
                <p><img src="../assets/image/dui.png" alt=""></p>
                 <div class="zhanshiceng_2">
                     <p><span><img src="../assets/image/dibiao.png" alt=""></span>&emsp;<span>湖北省武汉市</span></p>
                     <p><span><img src="../assets/image/dibiao.png" alt=""></span>&emsp;<span>北京市丰台区</span></p>
                     </div> 
                     
        <div class="dizhibtn"> 
    <van-button type="primary" size="large" color="#FACC2E" @click="cityxz">选择新的配送地址</van-button>
    </div>

                </div>
            </div>
            <div class="peisong" :class="{shangxi:yangs}" >
                   <div class="tubiao">
           <span @click="guan"><img src="../assets/image/fanhui.png" alt=""></span> 
           <span @click="cha" class="chahao">×</span> 
           </div>
              <div class="peisong_1">
                <!-- 选择地址栏 -->
           

      <div class="dizhi">
  <van-area :area-list="areaList" :columns-num="3" ref="myArea"  @change="onChange" @confirm="onConfirm" @cancel="onCancel"/>

    </div>







              </div>
              </div>
</van-popup>






    </div>
</template>
<script>
import MyYixuan from '../components/Yixuan'
import areaList from '../../public/JS/area.js'
export default {
      components:{MyYixuan},
  data() {
    return {
      show: false,
      showtwo:false,
      //城市选择样式
      yangs:false,
     
     //选择地址栏
        areaList,
            show:false,
            carmodel:'',
            value:'',
            date:''

    };
  },

  methods: {
    showPopup() {
      this.show = true;
    },
    shang(){
        this.showtwo=true
    },
     cityxz(){
       this.yangs=true
       console.log(this.yangs)
     },
     guan(){
       this.yangs=false
     },
     cha(){
         window.location.reload()
     },
  
  //value=0改变省，1改变市，2改变区
        onChange(picker, index, value){
            let val = picker.getValues();
            console.log(val)//查看打印
            let areaName = ''
            for (var i = 0; i < val.length; i++) {
                areaName = areaName+(i==0?'':'/')+val[i].name
            }
            this.carmodel = areaName
        },
        //确定选择城市
        onConfirm(val){
            let v=val[0].name+","+val[1].name+','+val[2].name
          window.localStorage.setItem("a",v);
          //获取现在的时间
          let now = new Date();
          //设置月份为当前天数的三天后
          now.setDate(now.getDate()+3);
          let expiress=now.toLocaleDateString()
             window.localStorage.setItem("date",expiress)
             window.location.reload()
        },
        //取消选中城市
        onCancel(){
             this.show = false
             this.$refs.myArea.reset()// 重置城市列表
        }

  },
  mounted(){
    this.value= window.localStorage.getItem('a')
     this.date=window.localStorage.getItem('date')
    
  }
 

  
}
</script>

<style scoped>
.yixuan{

  background: #fff;
  position: relative;
}
.yixuan>span:first-child{
  font-weight:bolder;
  color: #000;
  font-size: 15px;
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
.songzhi{
    display: flex;
}
.songzhi>span:first-child{
    width: 60px;
    font-weight: bolder;
}
.songzhi_1 span{
     font-size: 13px;
}
.songzhi_1 p>span:first-child{
    color: red;
}
.zhanshiceng{
    margin: 1em;
    position: relative;
}
.zhanshiceng>p:first-child{
    font-weight: bolder;
    text-align: center;  
}
.zhanshiceng_1,.zhanshiceng_2{
    margin: 2em 0;
}
.zhanshiceng_2 p{
    margin: 1em 0;
    font-size: 13px;
    line-height: 20px;
}
.dizhibtn{
    position: fixed;
    bottom: 2em;
    left: 50%;
    width: 300px;
    margin-left: -150px;
    border-radius:10px; 
}
.peisong{
  width: 100%;
  height: 100%;
  background: #fff;
  position: absolute;
  z-index: 999;
  bottom: -100%;
 overflow-y: hidden;
}
/* 点击出现城市选择框 */
.shangxi{
  transform: translateY(-100%);
  transition:all 0s linear 0s;
}
.peisong_1{
  position: relative;
}

.tubiao{
  display: flex;
  justify-content: space-between;
}
.tubiao>span{
 display: inline-block;
 padding: 0.5em;
 font-size: 30px;
}
</style>