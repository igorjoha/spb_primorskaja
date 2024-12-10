<script setup>
import { useUserStore } from "../stores/userStore";
import { useRouter } from "vue-router";
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper-bundle.min.css";
import VSelect from "vue3-select";
import "vue3-select/dist/vue3-select.css"; // добавьте стили

const selectedCity = ref(null);
const currentImageIndex = ref(null);

const corsProxy = "https://thingproxy.freeboard.io/fetch/";

const cities = [
  {
    name: "Москва",
    images: [
      {
        src:
          corsProxy +
          encodeURIComponent(
            "https://media.istockphoto.com/id/2062648916/fi/valokuva/kaunis-punainen-tori-moskovassa-ven%C3%A4j%C3%A4ll%C3%A4-pyh%C3%A4n-vasilin-ortodoksinen-kirkko-ja-kreml.webp?s=1024x1024&w=is&k=20&c=Qq6mTgAOMCgNIVbP2s2wskK1GDsy5GUazGQgeVOVzUw=/600x300?text=Москва+1"
          ) +
          new Date().getTime(),
      },
      {
        src:
          corsProxy +
          "https://goguides.azureedge.net/media/3iofeh5m/3a2d1bd9-05c4-414e-af06-a444d81a105b.jpg?anchor=center&mode=crop&width=1600&height=1066&quality=50/600x300?text=Москва+2" +
          new Date().getTime(),
      },
      { src: "https://via.placeholder.com/600x300?text=Москва+3" },
    ],
  },
  {
    name: "Санкт-Петербург",
    images: [
      { src: "https://via.placeholder.com/600x300?text=Москва+1" },
      { src: "https://via.placeholder.com/600x300?text=Москва+2" },
      { src: "https://via.placeholder.com/600x300?text=Москва+3" },
    ],
  },
  {
    name: "Новосибирск",
    images: [
      { src: "https://via.placeholder.com/600x300?text=Москва+1" },
      { src: "https://via.placeholder.com/600x300?text=Москва+2" },
      { src: "https://via.placeholder.com/600x300?text=Москва+3" },
    ],
  },
  {
    name: "Екатеринбург",
    images: [
      { src: "https://via.placeholder.com/600x300?text=Москва+1" },
      { src: "https://via.placeholder.com/600x300?text=Москва+2" },
      { src: "https://via.placeholder.com/600x300?text=Москва+3" },
    ],
  },
  {
    name: "Нижний Новгород",
    images: [
      { src: "https://via.placeholder.com/600x300?text=Москва+1" },
      { src: "https://via.placeholder.com/600x300?text=Москва+2" },
      { src: "https://via.placeholder.com/600x300?text=Москва+3" },
    ],
  },
  {
    name: "Казань",
    images: [
      { src: "https://via.placeholder.com/600x300?text=Москва+1" },
      { src: "https://via.placeholder.com/600x300?text=Москва+2" },
      { src: "https://via.placeholder.com/600x300?text=Москва+3" },
    ],
  },
  {
    name: "Челябинск",
    images: [
      { src: "https://via.placeholder.com/600x300?text=Москва+1" },
      { src: "https://via.placeholder.com/600x300?text=Москва+2" },
      { src: "https://via.placeholder.com/600x300?text=Москва+3" },
    ],
  },
  {
    name: "Омск",
    images: [
      { src: "https://via.placeholder.com/600x300?text=Москва+1" },
      { src: "https://via.placeholder.com/600x300?text=Москва+2" },
      { src: "https://via.placeholder.com/600x300?text=Москва+3" },
    ],
  },
  {
    name: "Самара",
    images: [
      { src: "https://via.placeholder.com/600x300?text=Москва+1" },
      { src: "https://via.placeholder.com/600x300?text=Москва+2" },
      { src: "https://via.placeholder.com/600x300?text=Москва+3" },
    ],
  },
  {
    name: "Ростов-на-Дону",
    images: [
      { src: "https://via.placeholder.com/600x300?text=Москва+1" },
      { src: "https://via.placeholder.com/600x300?text=Москва+2" },
      { src: "https://via.placeholder.com/600x300?text=Москва+3" },
    ],
  },
];

const updateCity = () => {
  console.log("City selected:", selectedCity.value);
  console.log(
    "Images:",
    selectedCity.value ? selectedCity.value.images : "No images"
  );
  // Сброс индекса картинок при выборе города
  currentImageIndex.value = 0;
};

const userStore = useUserStore();
const router = useRouter();

const logout = () => {
  userStore.clearUser();
  router.push("/");
};

// навигация по картинкам
const nextImage = () => {
  if (selectedCity.value) {
    currentImageIndex.value =
      (currentImageIndex.value + 1) % selectedCity.value.images.length;
  }
};

const prevImage = () => {
  if (selectedCity.value) {
    currentImageIndex.value =
      (currentImageIndex.value - 1 + selectedCity.value.images.length) %
      selectedCity.value.images.length;
  }
};
</script>

<template>
  <div class="cabinet-page">
    <header>
      <span>{{ userStore.username }}</span>
      <!-- Показываем имя пользователя из store -->
      <button @click="logout">Выход</button>
    </header>
    <div class="content">
      <p>Добро пожаловать в личный кабинет!</p>

      <div
        class="slider"
        v-if="selectedCity && selectedCity.images && selectedCity.images.length"
      >
        <div class="image-navigation">
          <button @click="prevImage" :disabled="currentImageIndex === 0">
            Previous
          </button>
          <button
            @click="nextImage"
            :disabled="currentImageIndex === selectedCity.images.length - 1"
          >
            Next
          </button>
        </div>
        <swiper :slidesPerView="1" :spaceBetween="10" loop>
          <swiper-slide
            v-for="(image, index) in selectedCity.images"
            :key="index"
          >
            <img :src="image.src" :alt="'Image ' + (index + 1)" />
          </swiper-slide>
        </swiper>
        <div class="image-caption">
          <p>{{ selectedCity.images[currentImageIndex]?.src }}</p>
        </div>
      </div>

      <div class="city-select">
        <VSelect
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
    </div>
  </div>
</template>

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
