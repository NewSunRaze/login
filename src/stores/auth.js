import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    userProfile: null,
    token: null
  }),
  actions: {
    async login(credentials) {
      try {
        await new Promise((resolve) => setTimeout(resolve, 2000)) // Фейковая задержка 2 секунды
        this.token = 'fake-token-12345' // Фейковый токен
        await this.fetchUserProfile() // Запрашиваем профиль пользователя
      } catch (error) {
        throw new Error('Login failed')
      }
    },
    async fetchUserProfile() {
      if (!this.token) return
      try {
        // Фейковые данные профиля пользователя
        this.userProfile = {
          name: 'John Doe',
          email: 'john.doe@example.com'
        }
      } catch (error) {
        throw new Error('Failed to fetch user profile')
      }
    },
    logout() {
      this.token = null
      this.userProfile = null
    }
  }
})
