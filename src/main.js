import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import qs from 'qs'
//引入mintui
import MintUi from 'mint-ui'
import VantUi from 'vant'
//引入样式文件
import 'mint-ui/lib/style.min.css'
import 'vant/lib/index.css'
import '../public/css/mint.css'
import '../public/css/vant.css'
import '../public/css/reset.css'
import '../public/css/quanju.css'
 import '../public/css/my-mint.scss' //默认颜色

 import axios from 'axios'
//引入bus
  import VueBus from 'vue-bus'
  Vue.use(VueBus)

//注册插件
Vue.use(MintUi)
Vue.use(VantUi)
//引入全局组件
// import MyHeader from './components/MyHeader.vue'
//引入全局组件
import Base from './components/Base.vue'


//注册全局组件
// Vue.component('my-header',MyHeader)
//注册全局组件
Vue.component('my-base',Base)

axios.defaults.baseURL="/api"
Vue.prototype.axios=axios
Vue.prototype.qs=qs

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
