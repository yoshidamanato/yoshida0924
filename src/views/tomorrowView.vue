<template>
  <v-container>
    <ProductList />
    <p>{{ time }}</p>
    <p>{{ weather }}</p>

    
  </v-container>
</template>

<script>
import ProductList from '@/components/ProductList.vue'


export default {
  name: 'tomorrowView',
  components: {
    ProductList
  },
  computed:{
        weather(){

          return this.$store.getters['product/tomorrowWeather'];
          


        },
        time(){
        return this.$store.getters['product/tomorrowTime'];
        },
      },
        mounted() {
         this.$store.dispatch('product/weatherGet');
        }

      
     

  
}
</script>
