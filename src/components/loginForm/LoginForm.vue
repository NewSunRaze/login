<template>
  <div>
    <input v-model="email" type="email" placeholder="Email" required />
  </div>
  <div>
    <input v-model="password" type="password" placeholder="Password" required />
  </div>
  <div>
    <button @click="onSubmit" type="submit">Login</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const emit = defineEmits(['submit'])
const email = ref('')
const password = ref('')

const onSubmit = () => {
  emit('submit', { email: email.value, password: password.value })
}
</script>
