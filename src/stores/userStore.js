import { defineStore } from "pinia";
export const useUserStore = defineStore("user", {
  state: () => ({
    username: "User123", // начальное имя пользователя
  }),
  actions: {
    setUsername(newUsername) {
      this.username = newUsername; // обновляем имя пользователя
    },
    clearUser() {
      this.username = ""; // очищаем имя пользователя
    },
  },
});
