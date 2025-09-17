<template>
  <v-app>
    <!-- ヘッダー -->
    <header class="header-wrapper">
      
      <!-- フェードスライダー（画像のみ） -->
      <div class="fade-slider">
        <img
          v-for="(image, index) in images"
          :key="index"
          :src="image"
          :class="{ active: index === currentIndex }"
          alt="header"
        />
      </div>

      <!-- ボタンとタイトル（画像の上に重ねる） -->
      <div class="overlay-content">
        <div class="bar-buttons">
          <v-btn text class="white-text" to="/" tag="router-link">HOME</v-btn>
          <v-btn text class="white-text" to="/tomorrowView" tag="router-link">Search</v-btn>
          <v-btn text class="white-text" to="/MapView" tag="router-link">Map</v-btn>
          <v-btn text class="white-text" to="/reviews/hokkaido" tag="router-link">REVIEW</v-btn>
        </div>

        <div class="title">
          <h1 class="title-P">TRAVEL<br>PLANNER✈</h1>
          <p class="title-t">
            "Plan your trips efficiently and let the adventure begin! Explore breathtaking landscapes, 
            savor local delicacies, and experience unique cultures—every moment creating memories that will last a lifetime."
          </p>
        </div>
      </div>

    </header>

    <v-main class="page-background">
      <v-container class="site-container" fluid>
        <div class="content-wrapper">
          <router-view />
        </div>
      </v-container>
    </v-main>

    <footer class="footer-wrapper">
      <v-container class="text-center py-4">
        <div>© 2025 Travel Planner</div>
        <div class="footer-links">
          <v-btn text class="white--text" to="/">HOME</v-btn>
          <v-btn text class="white--text" to="/tomorrowView">Search</v-btn>
          <v-btn text class="white--text" to="/MapView">Map</v-btn>
        </div>
      </v-container>
    </footer>
  </v-app>
</template>

<script>
import France from "@/assets/france.jpg";
import Yellow from "@/assets/yellow.jpg";
import Beach from "@/assets/beach.jpg";
import Poland from "@/assets/poland.jpg";

export default {
  data() {
    return {
      images: [France, Yellow, Beach, Poland],
      currentIndex: 0,
    };
  },
  mounted() {
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    }, 10000); 
  },
};
</script>

<style scoped>
.header-wrapper {
  width: 100%;
  height: 850px;
  position: relative;
  overflow: hidden;
}

.fade-slider {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}

.fade-slider img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0;
  transition: opacity 1s ease-in-out;
  filter: brightness(40%);
}

.fade-slider img.active {
  opacity: 1;
}


.overlay-content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  display: flex;
  flex-direction: column;
}

.bar-buttons {
  display: flex;
  gap: 16px;
  padding: 16px 32px;
  position: relative;
  z-index: 20;
}


.white-text {
  color: white !important;
  font-size: 15ox;
}

.title {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
  z-index: 20;
}

.title-P {
  font-size: 100px;
  font-weight: bold;
  line-height: 1.2;
}

.title-t {
  font-size: 15px;
}

.page-background {
  background-color: #2a4073;
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.site-container {
  max-width: 1800px;
  padding: 0;
}

.content-wrapper {
  width: 100%;
  background-color: white;
  padding: 24px;
}

.footer-wrapper {
  background-color: #cacaca;
  color: white;
  padding: 24px 0;
  text-align: center;
}

.footer-links {
  margin-top: 8px;
}
</style>
