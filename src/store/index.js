import Vue from 'vue'
import Vuex from 'vuex'
import axios  from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    a:1,
    //保存重逢商品
    vip:[],
    //保存秒杀商品
    seckill:[],
     //保存好货商品
    haohuo:[],
    //保存详情的商品
    commodity:[]
  },
  //搬运工
  mutations: {
    //搬vip的货
    addvip(state,obj){
     state.vip.push(obj)
    },
    //搬seckill的货
    addseckill(state,obj){
      state.seckill.push(obj)
    },
    //搬haohuo
    addhaohuo(state,obj){
      state.haohuo.push(obj)
    },
    //搬详情的货
    addcommodity(state,obj){
      state.commodity.push(obj)
    }
  },
  //拉货的汽车
  actions: {
    getvip(context){
      //获取首页重逢商品信息接口
      axios.get('http://127.0.0.1:3000/vip').then(res=>{
        let result=res.data
        for(let i=0;i<result.length;i++){
          context.commit(`addvip`,result[i])
        }
        })
    },
//获取首页秒杀商品的信息
  getseckill(context){
  //获取首页重逢商品信息接口
  axios.get('/seckill').then(res=>{
    let result=res.data
    for(let i=0;i<result.length;i++){
      context.commit(`addseckill`,result[i])
    }
    })
},
//获取首页发送好货商品的详情
gethaohuo(context){
  axios.get('/haohuo').then(res=>{
    let result=res.data
    for(let i=0;i<result.length;i++){
      context.commit(`addhaohuo`,result[i])
    }
    })
},
//获取首页详情商品的详情
getcommodity(context){
  axios.get('/commodity').then(res=>{
    let result=res.data
    for(let i=0;i<result.length;i++){
      context.commit(`addcommodity`,result[i])
    }
    })
},

  },
  modules: {
  }
})
