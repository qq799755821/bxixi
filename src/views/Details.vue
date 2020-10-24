<template>
    <div @click="kai=false" >

    

      <div class="one_cen">
        <div class="tiele">
          <div class="nav">
            <div class="biaoqian">
              <span class="index">商品</span>
              <span>评价</span>
              <span>详情</span>
               </div>
          </div>
      <div class="btn_left">
        <router-link to="/">
 <span><img src="../assets/image/hui.png" alt=""></span>
</router-link>
</div>
     
 <div class="btn_right" @click.stop="kaiguan">
 <span><img src="../assets/image/shenglue.png" alt=""></span>
</div>

</div>










      <div >
<van-swipe @change="onChange" class="detail">
  <van-swipe-item >
        <img  src="https://img.alicdn.com/imgextra/i1/751075004/O1CN01JBLlXi1mpsVFh6aYb_!!751075004.jpg_430x430q90.jpg" alt="">
  </van-swipe-item>
  <van-swipe-item>
<img src="https://img.alicdn.com/imgextra/i3/751075004/O1CN01B7t5Ms1mpsWJOckE5_!!751075004.jpg_430x430q90.jpg" alt="">
  </van-swipe-item>
  <van-swipe-item>
      <img src="https://img.alicdn.com/imgextra/i3/751075004/O1CN01ugo7Wm1mpsSY6ncab_!!751075004.png_430x430q90.jpg" alt="">
  </van-swipe-item>
  <van-swipe-item>
      <img src="https://img.alicdn.com/imgextra/i3/751075004/O1CN01B7t5Ms1mpsWJOckE5_!!751075004.jpg_430x430q90.jpg" alt="">
  </van-swipe-item>
  <template #indicator>
    <div class="custom-indicator">
      {{ current + 1 }}/4
    </div>
  </template>
</van-swipe>

      </div>
        </div>
        <div class="meskuang_one" v-show="kai">
  <div class="xuanzekuang">  
         <div class="tooltip-triangle"></div>
<!-- 点三点的消息框 -->
    <div class="meskuang">
  
  <ul>
     <router-link to="/">
    <li><img src="../assets/image/xiaoxi.png" alt="">
    <span>消息</span></li>
</router-link>
<router-link to="/">
      <li><img src="../assets/image/shouye.png" alt=""> <span>首页</span></li> 
      </router-link>
      <router-link to="/">
       <li><img src="../assets/image/sousuo.png" alt=""> <span>搜索</span></li> 
       </router-link>
        <router-link to="/">
        <li><img src="../assets/image/guanzhu.png" alt=""> <span>我的关注</span></li>
       </router-link>
         <router-link to="/">
        <li><img src="../assets/image/liulan.png" alt=""> <span>浏览记录</span></li>
        </router-link>
         <router-link to="/">
          <li><img src="../assets/image/fankui.png" alt=""> <span>功能反馈</span></li>
               </router-link>
  </ul>

</div>
</div>  
</div>



<my-detail></my-detail>


    </div>

</template>
<script>
import MyDetail from '../components/Towdetails'
export default {
  components:{MyDetail},
    data() {
    return {
      current: 0,
      kai:false
    };
  },
  methods: {
    onChange(index) {
      this.current = index;
    },
    kaiguan(){
      this.kai==false ? this.kai=true :this.kai=false
    }
  
  }

}
</script>
<style scoped>
 .custom-indicator {
    position: absolute;
    right: 5px;
    bottom: 5px;
    padding: 2px 5px;
    font-size: 12px;
    background: rgba(0, 0, 0, 0.1);
  }
  .detail img{
      width: 100%;
      margin-top: 60px;
  }
  .btn_left,.btn_right{
    margin: 5px;
    padding: 5px;
    width: 32px;
    position:fixed;
    top:11px;
    z-index: 999;
    background:rgba(19,19,19,0) ;
    border-radius: 50%
  }
  .btn_left{
    left: 0;
  }
  .btn_right{
    right: 2%;
  }
  .one_cen{
    position: relative;
  }
  /* 消息框 */
  .meskuang{
   width: 130px;
    background: floralwhite;
    position: absolute;
    top: 15%;
    right: 5%;
  }
 
 
   
  .meskuang li{
    color: #000;
   height: 35px;
   line-height: 35px;
  padding-left:15px ;
  border-bottom: 1px solid #E6E6E6;
  background-color: #FAFAFA;
  }
.meskuang li:hover{
  background-color: #D8D8D8;
}
.tooltip-triangle{ width: 0; height: 0; border-style:solid; border-width:10px; border-color:#E6E6E6 transparent transparent transparent; margin:0  auto 14px auto;position: absolute;right: 6%;top:-10px;z-index: 999;} 

.xuanzekuang{
  position: relative;

}
.meskuang_one{
  position: fixed;
  width: 100%;
  top: 59px;
  
}

.nav{
  position: fixed;
  width: 100%;
  height: 64px;
  z-index: 999;
  background: rgba(250, 0, 0, 1);
}
.biaoqian{
  position: absolute;
  left: 50%;
  margin-left: -4em;
  top: 40%;
}
.biaoqian>span{
  color:#fff;
  display:inline-block;
  margin-left:10px;
  font-family:Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
}
.index{
  padding-bottom: 5px;
  border-bottom: 3px solid #fff;
   font-size:20px;
}
</style>
