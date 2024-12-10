<template>
  <div class="cabinet-page">
    <header>
      <span>{{ userStore.username }}</span>
      <!-- Показываем имя пользователя из store -->
      <button @click="logout">Выход</button>
    </header>
    <div class="content">
      <p>Добро пожаловать в личный кабинет!</p>
    </div>
  </div>
  <div class="slider">
    <swiper :slidesPerView="1" :spaceBetween="10" loop>
      <swiper-slide
        ><img src="https://via.placeholder.com/600x300" alt="Image 1"
      /></swiper-slide>
      <swiper-slide
        ><img src="https://via.placeholder.com/600x300" alt="Image 2"
      /></swiper-slide>
      <swiper-slide
        ><img src="https://via.placeholder.com/600x300" alt="Image 3"
      /></swiper-slide>
    </swiper>
  </div>
  <div class="city-select">
    <vue-select
      v-model="selectedCity"
      :options="cities"
      label="name"
      @input="updateCity"
    />
    <div v-if="selectedCity">
      <h2>{{ selectedCity.name }}</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
        odio. Praesent libero. Sed cursus ante dapibus diam.
      </p>
    </div>
  </div>
</template>

<script setup>
import { useUserStore } from "../stores/userStore";
import { useRouter } from "vue-router";
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper-bundle.min.css";

const selectedCity = ref(null);
const swiper = ref(null);

const cities = [
  { name: "Москва" },
  { name: "Санкт-Петербург" },
  { name: "Новосибирск" },
  { name: "Екатеринбург" },
  { name: "Нижний Новгород" },
  { name: "Казань" },
  { name: "Челябинск" },
  { name: "Омск" },
  { name: "Самара" },
  { name: "Ростов-на-Дону" },
];

const updateCity = () => {
  console.log("City selected:", selectedCity.value);
};

const userStore = useUserStore();
const router = useRouter();

const logout = () => {
  userStore.clearUser();
  router.push("/");
};
</script>

<style lang="scss">
.cabinetPage.vue {
  padding: 20px;
  header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    span {
      font-size: 18px;
      font-weight: bold;
    }
    button {
      background-color: #f44336;
      color: white;
      border: none;
      padding: 5px 10px;
      cursor: pointer;
    }
  }
  .slider {
    margin-bottom: 20px;
  }
  .city-select {
    .v-select {
      margin-bottom: 15px;
    }
    h2 {
      font-size: 24px;
      margin-top: 0;
    }
  }
}
</style>
