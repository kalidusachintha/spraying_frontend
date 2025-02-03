import './assets/main.css'
import './assets/styles/global.css'

import { createApp } from "vue";
import { createPinia } from "pinia";
import router from "./router";
import App from "./components/App.vue";
import axios from "./plugins/axios.js";

const app = createApp(App);
app.use(createPinia());
app.use(router);
app.mount("#app");

