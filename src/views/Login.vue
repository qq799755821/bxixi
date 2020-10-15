<template>
    <div>
        <!-- 标题栏 -->
        <mt-header title="并夕夕" fixed>
<router-link to="/" slot="left">
<mt-button icon="back"></mt-button>
</router-link>
<div slot="right"  class="shortcut">
 <router-link to="/register">注册</router-link>
</div>
</mt-header>
<!-- 表单登录开始 -->
<mt-field label="用户名"
    placeholder="请输入用户名"
    type="text"
    :attr="{maxlength:10}"
    v-model="username"
></mt-field>

<mt-field 
 label="密码"
 placeholder="请输入密码"
  :attr="{maxlength:10,autocomplete:'off'}"
  v-model="password"
></mt-field>
<!-- 表单登录结束 -->

<mt-button size="large" type="primary" @click="login">快速登录</mt-button>
    </div>
   
</template>
<script>
export default {
    data(){
        return{
         username:'',
         password:''   
        }
    },
    methods:{
        login(){

        }
    }
}
</script>
<style scoped>

</style>