<template>
  <div>

    <ComTab />

    
    <v-container>
      <v-card>
        <v-card-title>おすすめスポット登録</v-card-title>
        <v-card-text>
          <v-text-field label="name" v-model="id" dense outlined />
          <v-text-field label="スポット名" v-model="spot" dense outlined />

          <v-select
            label="地域"
            v-model="region"
            :items="regions"
            item-text="name"
            item-value="id"
            dense
            outlined
          />

          <v-textarea label="コメント" v-model="com" dense outlined />

          <v-select
            label="⭐"
            v-model="review"
            :items="['⭐', '⭐⭐', '⭐⭐⭐', '⭐⭐⭐⭐', '⭐⭐⭐⭐⭐']"
            dense
            outlined
          />
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" block @click="insert">登録</v-btn>
        </v-card-actions>
      </v-card>

      <v-snackbar v-model="snackbar" timeout="2000" color="success">
        登録完了！
      </v-snackbar>
    </v-container>
  </div>
</template>

<script>
import ComTab from '@/components/ComTab.vue'

export default {
  components: { ComTab },
  data() {
    return {
      id: '',
      spot: '',
      region: '',
      com: '',
      review: '',
      snackbar: false,

      regions: [
        { id: 1, name: '北海道' },
        { id: 2, name: '東北' },
        { id: 3, name: '関東' },
        { id: 4, name: '中部' },
        { id: 5, name: '近畿' },
        { id: 6, name: '中国・四国' },
        { id: 7, name: '九州・沖縄' },
        { id: 8, name: '海外' }
      ]
    }
  },
  methods: {
    insert() {
      this.$store.dispatch('product/insertSpot', {
        id: this.id,
        spot: this.spot,
        region: this.region,
        com: this.com,
        review: this.review
      })

      this.snackbar = true

   
      this.id = ''
      this.spot = ''
      this.region = ''
      this.com = ''
      this.review = ''
    }
  }
}
</script>
