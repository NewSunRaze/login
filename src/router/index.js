import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '../pages/MainPage.vue'
import LoginPage from '../pages/LoginPage.vue'
import { useAuthStore } from '../stores/auth'


const routes = [
  { path: '/', component: MainPage, meta: { requiresAuth: true } },
  { path: '/login', component: LoginPage }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// Перед каждым роутом
router.beforeEach(async (to, from, next) => {
  const authStore = useAuthStore()

  // Проверяем, требуется ли аутентификация для этой страницы
  if (to.meta.requiresAuth) {
    if (!authStore.token) {
      // Если токена нет, редиректим на страницу логина
      return next({ path: '/login' })
    }

    // Если токен есть, но профиль не загружен, запрашиваем данные пользователя
    if (!authStore.userProfile) {
      try {
        console.log('fetchUserProfile')
        await authStore.fetchUserProfile() // Загружаем информацию о пользователе
      } catch (error) {
        return next({ path: '/login' }) // В случае ошибки редиректим на логин
      }
    }
  }

  // Разрешаем переход на страницу
  next()
})

export default router
