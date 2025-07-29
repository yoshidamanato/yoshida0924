<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      

      <v-spacer></v-spacer>
      <v-btn text to="/" tag="router-link" @click="day = 0">今日の天気</v-btn>
      <v-btn text to="/tomorrowView" tag="router-link" @click="day = 1">明日の天気</v-btn>
      <v-btn text to="/AtomorrowView" tag="router-link" @click="day = 2">明後日の天気</v-btn>

      
       
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
