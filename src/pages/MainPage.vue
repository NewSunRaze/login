<template>
  <div>
    <h1>Welcome, {{ authStore.userProfile?.name }}</h1>
  </div>
</template>

<script setup>
import { useAuthStore } from '../stores/auth'
import { onMounted } from 'vue'

const authStore = useAuthStore()
onMounted(() => {
  console.log(33)
})
</script>
