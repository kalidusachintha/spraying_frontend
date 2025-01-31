import { createRouter, createWebHistory } from "vue-router";
import { useAuthStore } from "../stores/auth.js";
import Login from "../components/Login.vue";
import SparyingItems from "../components/SparyingItems.vue";


const routes = [
    { path: "/", component: SparyingItems, meta: { requiresAuth: true } },
    { path: "/login", component: Login },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach(async (to, from, next) => {
    const authStore = useAuthStore();
    if (to.meta.requiresAuth && !authStore.isLoggedIn) next("/login");
    else next();
});

export default router;
