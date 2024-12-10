<template>
  <div class="login-page">
    <h1>Вход</h1>
    <form @submit.prevent="onSubmit">
      <div class="input-group">
        <label for="username">Логин</label>
        <input type="text" id="username" v-model="username" required />
      </div>
      <div class="input-group">
        <label for="password">Пароль</label>
        <input type="password" id="password" v-model="password" required />
      </div>
      <button type="submit">Войти</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useUserStore } from "../stores/userStore"; // Импортируем store
import { useRouter } from "vue-router";

const username = ref("");
const password = ref("");
const router = useRouter();
const userStore = useUserStore(); // Инициализируем store

const onSubmit = () => {
  if (username.value && password.value) {
    userStore.setUsername(username.value); // Устанавливаем имя пользователя в store
    router.push("/cabinet"); // Перенаправляем на страницу кабинета
  }
};
</script>

<style lang="scss">
/* Ваши стили для страницы входа */
</style>
