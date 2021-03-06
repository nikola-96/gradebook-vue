import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/auth/Login.vue'
import Register from '../views/auth/Register.vue'
import Gradebook from '../views/gradebooks/Gradebook.vue'
import Professors from '../views/professors/Professors.vue'
import SingleProfessor from '../views/professors/SingleProfessor.vue'
import GradebookCreate from '../views/gradebooks/GradebookCreate.vue'
import MyGradebook from '../views/gradebooks/MyGradebook.vue'
import ProfessorCreate from '../views/professors/ProfessorCreate.vue'
import StudentsCreate from '../views/students/StudentsCreate.vue'
import SingleGradebook from '../views/gradebooks/SingleGradebook.vue'
import GradebookEdit from '../views/gradebooks/GradebookEdit.vue'
import StudentEdit from '../views/students/StudentEdit.vue'

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
  },
  {
    path: '/professor/:id',
    name: 'SingleProfessor',
    component: SingleProfessor
  },
  {
    path: '/gradebook/create',
    name: 'GradebookCreate',
    component: GradebookCreate
  },
  {
    path: '/my-gradebook',
    name: 'MyGradebook',
    component: MyGradebook
  },
  {
    path: '/professors/create',
    name: 'ProfessorCreate',
    component: ProfessorCreate
  },
  {
    path: '/gradebooks/:id/students/create',
    name: 'StudentsCreate',
    component: StudentsCreate
  },
  {
    path: '/gradebook/:id',
    name: 'SingleGradebook',
    component: SingleGradebook
  },
  {
    path: '/gradebooks/edit',
    name: 'GradebookEdit',
    component: GradebookEdit

  },
  {
    path: "/gradebooks/student/edit/:id",
    name: "StudentEdit",
    component: StudentEdit
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
