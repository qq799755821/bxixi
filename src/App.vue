<template>
  <div>
  
    <router-view/>
    <my-base v-if="this.$route.path!='/login' && this.$route.path!='/register' && this.$route.path!='/xieyi'"  ></my-base>
  </div>
</template>
<script>
export default {
    
        
}
</script>
<style>

</style>
