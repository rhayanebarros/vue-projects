import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: 'Rhayane Barros - Home'
  },
  {
    path: '/bank',
    name: 'Bank',
    component: () => import('../views/Bank.vue'),
    meta: 'Rhayane Barros - Bank'
  },
  {
    path: '/todo-list',
    name: 'Todo List',
    // route level code-splitting
    // this generates a separate chunk (todo-list.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/Todo.vue'),
    meta: 'Rhayane Barros - Todo list'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  document.title = to.meta
  next()
})

export default router
