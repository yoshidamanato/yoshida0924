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
  name: 'AtomorrowView',
  components: {
    ProductList
  },
   computed:{
        weather(){

          return this.$store.getters['product/AtomorrowWeather'];


        },
        time(){

          return this.$store.getters['product/AtomorrowTime'];


        },
      },
        mounted() {
          this.$store.dispatch('product/weatherGet');
        }

      
      
}
</script>
