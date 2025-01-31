<template>
  <div>
    <nav>
      <RouterLink to="/">Home</RouterLink> |
      <ul>
        <li v-if="!isLoggedIn">
          <router-link to="/login">Login</router-link>
        </li>
        <li v-if="isLoggedIn">
          <button @click="logout">Logout</button>
        </li>
      </ul>
    </nav>
    <router-view />
  </div>
</template>

<script setup>
import { useAuthStore } from "../stores/auth";
import { computed} from "vue";
import {useRouter} from "vue-router";

const router = useRouter();
const authStore = useAuthStore();

const logout = async () => {
  await authStore.logout();
  await router.push("/login");
};

const isLoggedIn = computed(() => authStore.isLoggedIn);

</script>
