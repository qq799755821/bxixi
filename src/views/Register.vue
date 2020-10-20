<template>
  <div>
        <!-- 标题栏 -->
        <mt-header title="并夕夕" fixed>
<router-link to="/" slot="left">
<mt-button icon="back"></mt-button>
</router-link>
<div slot="right"  class="shortcut">
 <router-link to="/login">登录</router-link>
</div>
</mt-header>

<div style="margin-top:64px">
      <mt-field
      label="帐号"
      placeholder="请输入帐号"
      type="text"
      :affr="{maxlength:12}"
      v-model="username"
      :state="namestate"
      disableClear
      class="user"
      >
      </mt-field>

<mt-field label="密码"
  placeholder='请输入密码'
  type="password"
  v-model="password"
  :attr="{maxlength:10,autocomplete:'off'}"
  :state="passwordstate"
  disableClear
  class="user"
>
</mt-field>

<mt-field
    label="确认密码"
     placeholder="请再次输入密码"
    type="password"
    v-model="conpassword"
    :attr="{maxlength:10,autocomplete:'off'}"
    :state="constate"
     disableClear 
     class="user"
    >
    </mt-field>

    <mt-field
 label="邮箱" 
 placeholder="请输入邮箱" 
 type="email"
v-model="email"
:state="emailstate"
 disableClear 
 class="user"
></mt-field>
</div>

<mt-button type="primary" size="large" @click="show">注册</mt-button>



  </div>
</template>

<script>
export default {
data(){
  return{
   username:'',
password:'',
conpassword:'',
email:'',
//保存用户名状态
namestate:'',
//保存密码状态
passwordstate:'',
//保存确认密码状态
constate:'',
emailstate:'',

  }
},
methods:{
  show(){
     
  if(this.namestate=="success"&&this.passwordstate=="success"&&this.constate=="success"&&this.emailstate=="success"){
    //发送AJAX请求
   this.axios.post('/register',`username=${this.username}&password=${this.password}&email=${this.email}`).then(res=>{
     
       
    //  服务器接口
      if(res.data.code==1){
        this.$toast(`注册成功`)
        localStorage.setItem(`user`,this.username)
        this.$router.push('/login')
      }else{
         this.$messagebox(`注册提示`,'用户名已被占用')
      }
   })
  }
  }
},
mounted(){

   
},
  watch:{
 username(){
      //校检用户名
      let usernameRegExp=/^[0-9A-Za-z_]{6,12}$/;  
      let result=usernameRegExp.test(this.username);
      if(result){
        this.namestate='success'
      }else{
        this.namestate='error'
      }
 },
password(){
  //校检密码
  let passwordRegExp=/^[0-9A-Za-z_]{6,12}$/;
  let result=passwordRegExp.test(this.password)
  if(result){
    this.passwordstate="success"
  }else{
    this.passwordstate="error"
  }
}
 ,
 conpassword(){
   if(this.conpassword==this.password){
       this.constate="success"
   }else{
       this.constate="error"
   }
 },
email(){
    let emailRegExp=/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
    let ress=emailRegExp.test(this.email)
    
    if(ress){
        console.log(1)
        this.emailstate='success'
    }else{
        this.emailstate='error'
    }
}
  }
}
</script>

<style scoped>
.user{
      width: 100%;
border-bottom: 1px solid  #E6E6E6;
  }
</style>