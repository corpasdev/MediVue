import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/Login',
      name: 'login',
      component: Login
    },
    {
      path: '/medicamentos',
      name: 'medicines',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Medicines.vue')
    },
    {
      path: '/SignUp',
      name: 'signUp',
      component: () => import('../views/SignUp.vue')
    },
    {
      path: '/Paciente',
      name: 'paciente',
      component: () => import('../views/Paciente.vue')
    },
  ]
})

export default router
