import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
import { createRouter, createWebHistory } from "vue-router";
import LoginPage from "./views/LoginPage.vue";
import CabinetPage from "./views/CabinetPage.vue";
// Создание маршрутов
const routes = [
  { path: "/", component: LoginPage },
  { path: "/cabinet", component: CabinetPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const pinia = createPinia();

// Создание приложения Vue
const app = createApp(App);

// Подключение Pinia и Vue Router
app.use(pinia);
app.use(router);

// Монтируем приложение в элемент с id="app"
app.mount("#app");
