import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Details from '../views/Details.vue'
import Car from '../views/Car.vue'
import Me from '../views/Me.vue'
import Register from '../views/Register.vue'
import Xieyi from '../views/Xieyi.vue'




Vue.use(VueRouter)

const routes = [
  {
    path: '/xieyi',
    component:Xieyi
  },{
    path: '/register',
    component:Register
  },{
    path: '/details',
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
