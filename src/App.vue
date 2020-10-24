<template>
  <div>
  
    <router-view/>
    <my-base v-if="this.$route.path!='/login' && this.$route.path!='/register' && this.$route.path!='/xieyi' && this.$route.path!='/tubiao'&& this.$route.path!='/product' && this.$route.path!='/details' "></my-base>
  </div>
</template>
<script>
export default {
    
        
}
</script>
<style>

</style>
