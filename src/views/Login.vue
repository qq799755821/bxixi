<template>
    <div>
        <!-- 标题栏 -->
        <mt-header title="并夕夕" fixed >
<router-link to="/" slot="left">
<mt-button icon="back"></mt-button>
</router-link>
<div slot="right"  class="shortcut">
 <router-link to="/register">注册</router-link>
</div>
</mt-header>
<div style="margin-top:64px">
<!-- 表单登录开始 -->
<mt-field label="帐号"
    placeholder="请输入帐号"
    type="text"
    :attr="{maxlength:10}"
    v-model="username"
    class="user"
    
>
<img id="shang" src="../assets/image/shang.png" alt="" @click="shang" v-if="key==true" >
<img id="xia" src="../assets/image/xia.png" alt="" @click="xia" v-else >


</mt-field>

<!-- 保存用户名容器 -->

 <div :class="{unameyin}">
     
<div :class="{yin:!key,zhi:key}"  >
    <div>
   <span class="turong" ><img class="userimg" src="../assets/userimg/touxiang.jpg" alt=""></span>
   <span class="uname" @click="shangunm">{{zhang[0]}}</span>
   <span class="delete"  @click='del'>×</span>
</div>
   <div :class="{yin:hao,wu:di}">暂无帐号</div>

 
</div>
</div>
<mt-field 
 label="密码"
 :type="leixing"
 placeholder="请输入密码"
  :attr="{maxlength:10,autocomplete:'off'}"
  v-model="password"
  :class="{yin:key}"
  disableClear
  class="user"
>
<img @click="bi" src="../assets/image/yanjing_bi.png" alt="" v-if="yan==false">
<img @click="kai" src="../assets/image/yanjing_kai.png" alt="" v-else >
</mt-field>
<!-- 表单登录结束 -->

<mt-button :disabled="jinyong" size="large" type="primary" @click="login"  :class="{yin:key,juli:!jinyong}">快速登录</mt-button>
        <!-- 忘记密码提示 -->
        <div
        :class="{yin:key}"
        class="zong"
        ><span style="margin-left:10px;color:#00BFFF;">忘记密码</span>
        <input type="checkbox" style="margin-left:30px" @click="check">
            <span style="color:#848484;margin-left:2px">已阅读并同意</span>
            <span style="color: #00BFFF;" @click="loa">软件许可协议</span>
            <span>与</span>
            <span style="color: #00BFFF;"  @click="loa">隐私政策</span>
         </div>
   </div>
    </div>
   
</template>
<script>

import { MessageBox } from 'mint-ui';
export default {
    data(){
        return{
            //保存用户名
         username:'',
         //保存密码
         password:'' ,
         //密码框按钮 xieyi是否隐藏开关
         key:false,
         //点击小X是否删除该用户框
         unameyin:false,
         //眼睛是否开启
         yan:false,
         //眼睛开启后密码框的类型
         leixing:'password',
         //控制按钮是否禁用
         jinyong:true,
         //保存用户名的容器
         zhang:[],
         hao:true,
         di:false
        }
    },
    methods:{
        login(){
                let obj={
                   username:this.username,
                   password:this.password 
                }
                console.log(obj)
                //未完成的登录验证   
        this.axios.post('/login',this.qs.stringify(obj)).then(res=>{
           // console.log(res.data)
                  if(res.data.code==1){
                 this.$toast(`登录成功`)
                 // 获取当前日期
                 let now=new Date()
                 now.setDate(now.getDate()+7);
                 let expires=now.toUTCString()
                 //设置COOKIE
                document.cookie=`username=${this.username};expires=${expires}` 
                     this.$router.push('/')
             }else{
                  this.$messagebox(`登录提示`,'用户名或密码错误')
             }
        })
                
        },
        xia(){
           this.key=true
           this.unameyin=false;

        },
        shang(){
        this.key=false
        this.unameyin=false
        },
        //删除确认框
        del(e){  
    MessageBox.confirm('', { 
     message: '您确定要删除该用户吗？',
     title:   '温馨提示',
     confirmButtonText: '确定',
     cancelButtonText: '取消'
})
.then(action => { 
     if (action == 'confirm') {     //确认的回调
      e.target.parentElement.remove();
     this.zhang.splice(0,1)
     console.log(this.zhang)
      if(this.zhang.length==0){
          this.hao=false;
          this.di=true
      }
      //web Storage 删除待写
    }
})
.catch(err => { 
     if (err == 'cancel') {     //取消的回调
         console.log(2);
     } 
});
        },
        shangunm(e){
          this.username= e.target.innerHTML
          this.unameyin=true
          this.key=false,
          this.password=''
        },
        bi(){
            this.yan=true
            this.leixing='password'
        },
        kai(){
        this.yan=false
        this.leixing='text'
        },
        check(e){
           if( e.target.checked){
               this.jinyong=false;
           }else{
              this.jinyong=true 
           }
        },
        //协议跳转
        loa(){
           this.$router.push('/xieyi')
        },
        //用户名密码图片
        unamepwd(){
  let  d1=document.querySelectorAll('.mint-cell-title')[0]
         //创建新元素
         var  imag=document.createElement('img')
         imag.src=require('../assets/image/uname.png')
         imag.style.marginLeft="40px"
         d1.appendChild(imag)

          let  d2=document.querySelectorAll('.mint-cell-title')[1]
         //创建新元素
         var  imag2=document.createElement('img')
         imag2.src=require('../assets/image/upwd.png')
         imag2.style.marginLeft="40px"
         d2.appendChild(imag2)
         //提取注册成功后的用户名
        let  variable = localStorage.getItem('user')
                //console.log(variable)         
                    this.username=variable
                     
        },
        //在cokie中获取用户名的函数
        getCookieItem(key){
      //获取当前的cookie字符串,形如 username=123; password=456; age=19
      let cookie = document.cookie;
      //第一次使用分号进行拆分，结果为数组，
      //形如 ['username=123',' password=456',' age=19']
      let array = cookie.split(/;/g);      
      for(let n = 0;n<array.length;n++){
        //依次拆分每一个数组字符串成员,其中下标为0的代表key,下标为1的代表value
        let temp = array[n].split(/=/g);
        //之所以要使用trim()方法是因为存在空格,注意第11行中的空格
        if(temp[0].trim() == key){
          //如果找到，则直接返回数组中下标为1的value,此时即可终止函数的执行
          return temp[1];
        }
      }
      //如果没有找到的话，则返回undefined，当然也可以返回其他的信息
      return undefined;
    }
       } ,
       mounted(){
          this.unamepwd() ;
           this.zhang.push(this.getCookieItem('username')  )
       } 
   
      
}

 
</script>
<style scoped>
  .yin,.unameyin{
      display: none;
  }
  .user{
      width: 100%;
border-bottom: 1px solid  #E6E6E6;
  }
  .zhi{
    padding:10px 0 10px 0;
      border-bottom: 1px solid #E6E6E6;
      color:#848484;
      font-size: 18px;
      position: relative;
  }
  .delete{
      position: absolute;
      left: 90%;
      display: block;
      margin-top: -30px;
  }
  .uname{
       position: absolute;
      left: 30%;
      display: block;
      margin-top: -30px;
  }
  .turong{
      margin-left: 1em;   
  }
  .userimg{
      width: 40px;
      height: 40px;
       border-radius: 50%;
  }
  .zong{
      font-size: 14px;
      margin-top: 30px;
  }
  .juli{
      margin-top: 30px;
  }
  .wu{
      padding: 1em;
      text-align: center;
      border-bottom: 1  px solid #E6E6E6;
  }

</style>