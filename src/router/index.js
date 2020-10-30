import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Details from '../views/Details.vue'
import Car from '../views/Car.vue'
import Me from '../views/Me.vue'
import Register from '../views/Register.vue'
import Xieyi from '../views/Xieyi.vue'
import Tubiao from '../components/Tubiao.vue'
import Product from '../components/Product.vue'

import Fenlei from '../views/Fenlei.vue'




Vue.use(VueRouter)

const routes = [
{
  path: '/fenlei',
  component:Fenlei
 },{
  path: '/product',
  component:Product
 },{
  path: '/tubiao',
  component:Tubiao
 }, {
    path: '/xieyi',
    component:Xieyi
  },{
    path: '/register',
    component:Register
  },{
    path: '/details/:id',
    component:Details
  },{
    path: '/car',
    component:Car
  },{
    path: '/me',
    component:Me
  },{
    path: '/login',
    component:Login
  },{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
