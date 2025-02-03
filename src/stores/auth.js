import { defineStore } from "pinia";
import axios from "../plugins/axios.js";

export const useAuthStore = defineStore("auth", {
    state: () => ({
        isLoggedIn: JSON.parse(localStorage.getItem('isLoggedIn')) || false,
    }),
    actions: {
        async login(email, password) {
            await axios.get("/sanctum/csrf-cookie");
            const response = await axios.post("/api/login", { email, password });
            this.isLoggedIn = true;
            localStorage.setItem('isLoggedIn', JSON.stringify(true));
        },
        async logout() {
            await axios.post("/api/logout");
            this.isLoggedIn = false;
            localStorage.removeItem('isLoggedIn');
        },
    },
    persist: true,
});
