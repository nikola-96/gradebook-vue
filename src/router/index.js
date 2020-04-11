import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/auth/Login.vue'
import Register from '../views/auth/Register.vue'
import Gradebook from '../views/gradebooks/Gradebook.vue'
import Professors from '../views/professors/Professors.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/gradebooks'
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/gradebooks',
    name: 'Gradebooks',
    component: Gradebook
  },
  {
    path: '/professors',
    name: 'Professors',
    component: Professors
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('loginToken');
  if ((to.name !== 'Login' && to.name !== 'Register') && !isAuthenticated) {
    next({ name: 'Login' })

    return;
  } else if ((to.name === 'Login' || to.name === 'Register') && isAuthenticated) {
    return next({ name: 'Gradebooks' })
  }
  else next()
})

export default router
