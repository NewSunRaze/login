import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '../pages/MainPage.vue'
import LoginPage from '../pages/LoginPage.vue'
import { useAuthStore } from '../stores/auth'

const routes = [
  { path: '/login', component: LoginPage },
  { path: '/', component: MainPage }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach(async (to, from, next) => {
  const authStore = useAuthStore()
  if (to.path !== '/login') {
    if (!authStore.token) {
      return next('/login')
    }
    if (!authStore.userProfile) {
      try {
        await authStore.fetchUserProfile()
      } catch (error) {
        return next('/login')
      }
    }
  }
  next()
})

export default router
