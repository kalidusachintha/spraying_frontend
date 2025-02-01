<template>
  <div>
    <form @submit.prevent="login">
      <input v-model="email" placeholder="Email" required/>
      <input v-model="password" type="password" placeholder="Password" required/>
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useAuthStore } from "../stores/auth";
import { useRouter } from "vue-router";

const email = ref("");
const password = ref("");
const authStore = useAuthStore();
const router = useRouter();

const login = async () => {
  await authStore.login(email.value, password.value);
  await router.push("/");
};
</script>
