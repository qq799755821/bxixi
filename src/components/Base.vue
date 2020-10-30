<template>
    <div>
      
        <!-- 底部选项卡 -->
<div class="base">
<mt-tabbar v-model="tabbar" fixed >
<mt-tab-item id='index'>
  <span v-if="this.$route.path !='/'" style="color:#222222">首页</span>
  <span v-else>首页</span>
  <img src="../assets/image/home_enable.png" slot="icon" alt="" v-if="tabbar=='index'&&this.$route.path=='/'">
  <img src="../assets/image/home_disable.png"
  slot="icon" alt="" v-else>

</mt-tab-item>
<mt-tab-item id='fenlei'>
  分类
  <img src="../assets/image/ditails_enable.png" alt="" slot="icon" v-if="tabbar=='fenlei'" >
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
             tabbar:'index'
        }
    },
   watch:{
    tabbar(v){
        if(v=='index'){
              
          this.$router.push('/').catch(e=>{})
           this.tabbar='index'
        }
        if(v=='fenlei'){
          
          this.$router.push('/fenlei').catch(e=>{})
            this.tabbar='fenlei'
        }
         if(v=='car'){
           
           this.$router.push('/car').catch(e=>{})
             this.tabbar='car'
        }
        if(v=='me'){
           
          this.$router.push('/me').catch(e=>{})
           this.tabbar="me"
        }
    },
     mounted(){  

         
    }   
  }
}
</script>
<style >
 /* .base::before{
  content: '';
  display: block;
  height: 55px;
}  */
</style>