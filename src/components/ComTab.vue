<template>
  <v-container class="d-flex justify-center flex-wrap my-5">
    <v-btn text to="/reviews/hokkaido" tag="router-link">北海道</v-btn>
    <v-btn text to="/reviews/tohoku" tag="router-link">東北</v-btn>
    <v-btn text to="/reviews/kanto" tag="router-link">関東</v-btn>
    <v-btn text to="/reviews/chubu" tag="router-link">中部</v-btn>
    <v-btn text to="/reviews/kinki" tag="router-link">近畿</v-btn>
    <v-btn text to="/reviews/chugoku-shikoku" tag="router-link">中国・四国</v-btn>
    <v-btn text to="/reviews/kyushu-okinawa" tag="router-link">九州・沖縄</v-btn>
    <v-btn text to="/reviews/overseas" tag="router-link">海外</v-btn>
    <v-btn text to="/comView" tag="router-link">書き込む</v-btn>
  </v-container>
</template>

<script>
export default {
  name: "ComTab",
};
</script>
