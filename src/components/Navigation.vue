<template>
  <div>
    <nav class="navbar">
      <RouterLink to="/" class="nav-link">Home</RouterLink>
      <ul class="nav-list">
        <li v-if="!isLoggedIn">
          <router-link to="/login" class="nav-link">Login</router-link>
        </li>
        <li v-if="isLoggedIn">
          <button @click="logout" class="btn btn-logout">Logout</button>
        </li>
      </ul>
    </nav>
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

<style scoped>
.btn-logout {
  background: #dc3545;
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
}

.btn-logout:hover {
  background: #c82333;
}
</style>