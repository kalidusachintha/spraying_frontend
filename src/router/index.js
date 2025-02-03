import { createRouter, createWebHistory } from "vue-router";
import { useAuthStore } from "../stores/auth.js";
import Login from "../components/Login.vue";
import SprayingItems from "@/components/SprayingItems.vue";
import SprayingForm from "@/components/SprayingForm.vue";


const routes = [
    { path: "/", component: SprayingItems, meta: { requiresAuth: true } },
    { path: "/create", component: SprayingForm, meta: { requiresAuth: true } },
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
