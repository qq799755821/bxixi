<template>
  <div>
  
    <router-view/>
    <my-base v-if="this.$route.path!='/login' && this.$route.path!='/register' && this.$route.path!='/xieyi' && this.$route.path!='/tubiao'&& this.$route.path!='/product' "></my-base>
  </div>
</template>
<script>
import './main'
export default {
  data(){
return{
  kai:true
}
  },
  mounted(){        
  //  //通过on监听事件，回调方法获取数据      
  //    this.$bus.on("bload",value=>{
  //   this.value=value;
  //     });
  

   } ,
}
</script>
<style>

</style>
