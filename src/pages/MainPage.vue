<template>
  <div>
    <h1>Welcome, {{ authStore.userProfile?.name }}</h1>
  </div>
</template>

<script setup>
import { useAuthStore } from '../stores/auth'

const authStore = useAuthStore()
</script>
