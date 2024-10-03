<template>
  <router-view />
</template>

<script setup>
import { useAuthStore } from './stores/auth'
import { onMounted } from 'vue'

const authStore = useAuthStore()
onMounted(() => {
  console.log('log from App.vue')
})
</script>
