import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/homeView/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import store  from '../store/store.js'



const routes = [
  {
    path: '/login',
    name: 'Login',
    component: LoginView,
    meta: { requiresVisitor: true, title: 'DataApp Login' }
  },
  {
    path: '/',
    name: 'Home',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/homeView/HomeView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  if (to.path === '/' && !store.getters.getAuth) {
    next('/login')
  } else {
    next()
  }
})

export default router;
