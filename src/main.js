import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//引入mintui
import MintUi from 'mint-ui'
//引入样式文件
import 'mint-ui/lib/style.min.css'
import '../public/css/mint.css'
import '../public/css/reset.css'
import '../public/css/my-mint.scss' //默认颜色
//注册插件
Vue.use(MintUi)
//引入全局组件
import MyHeader from './components/MyHeader.vue'
//注册全局组件
Vue.component('my-header',MyHeader)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
