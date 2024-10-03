<template>
  <div>
    <LoginForm @submit="login" />
  </div>
</template>

<script setup>
import { useAuthStore } from '../stores/auth'
import { useRouter } from 'vue-router'
import LoginForm from '../components/loginForm/LoginForm.vue'

const authStore = useAuthStore()
const router = useRouter()

const login = async (credentials) => {
  try {
    await authStore.login(credentials)
    console.log(5)
    router.push('/')
  } catch (error) {
    console.error('Login error:', error.message)
  }
}
</script>
