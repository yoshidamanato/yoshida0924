<template>
  <v-container>
    <ProductList />
    <p>{{ time }}</p>
    <p>{{ weather }}</p>
    <p>{{ text }}</p>

  </v-container>
</template>

<script>
  import ProductList from '@/components/ProductList.vue' //ProductList.vueをインポート

  export default {
    name: 'HomeView',

    components: {
      ProductList,
    },
     computed:{
        weather(){

          return this.$store.getters['product/todayWeather'];


        },

        text(){

          return this.$store.getters['product/weatherText'];

        },
        time(){

          return this.$store.getters['product/todayTime'];

        }
      },
        mounted() {
          this.$store.dispatch('product/weatherGet');
          this.$store.dispatch('product/weatherGet');
        }

      }
      
  
</script>
