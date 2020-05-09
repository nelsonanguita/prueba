import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
  },
  {
    path: '/Comuna',
    name: 'Comuna',
    component: () => import(/* webpackChunkName: "about" */ '../views/Comuna.vue')
  },
  {
    path: '/Nacional',
    name: 'Nacional',
    component: () => import(/* webpackChunkName: "about" */ '../views/Nacional.vue')
  },
  {
    path: '/CuarentenasActivas',
    name: 'CuarentenasActivas',
    component: () => import(/* webpackChunkName: "about" */ '../views/CuarentenasActivas.vue')
  },
  {
    path: '/Ventiladores',
    name: 'Ventiladores',
    component: () => import(/* webpackChunkName: "about" */ '../views/Ventiladores.vue')
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
