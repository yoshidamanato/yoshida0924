<template>
  <div>
    <ComTab />

    <v-container>
      <v-card
        v-for="spot in filteredSpots"
        :key="spot.id"
        class="my-3"
      >
        <v-card-title>
        
          <img src="@/assets/hito.png" alt="アイコン" class="icon" />
          <span class="ml-2">✈{{ spot.spot }}</span>
        </v-card-title>

        <v-card-text>
          コメント: {{ spot.com }}<br>
          評価: {{ spot.review }}
        </v-card-text>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import ComTab from '@/components/ComTab.vue'

export default {
  name: 'HomeView',
  components: { ComTab },

  data() {
    return {
      selectedRegion: 1
    }
  },

  computed: {
    filteredSpots() {
      return this.$store.getters['product/getSpotList'].filter(
        spot => Number(spot.region) === this.selectedRegion
      )
    }
  },

  mounted() {
    this.$store.dispatch('product/selectSpots');
  }
}
</script>

<style>
.icon {
  width: 30px; 
  height: 30px;
  object-fit: contain;
}

</style>
