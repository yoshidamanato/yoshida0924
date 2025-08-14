<template>
  <div>
    <ProductList/>
   
    <v-text-field label="ID" v-model="idbox" type="number"  />
    <v-btn @click="deleteTask">削除</v-btn>
    
  </div>
  
</template>

<script>
import ProductList from '@/components/ProductList.vue'


export default {
  name: 'HomeView',
  components: { ProductList },
  data(){
    return{
      idbox:'',
    }

  },
  computed: {
    tasks() {
      return this.$store.getters['product/getTaskList'];
    },
  },
  mounted() {
    this.$store.dispatch('product/selectTask');
  },
  methods: {
  deleteTask() {
    this.$store.dispatch('product/deleteTask', this.idbox);
  }
}

  
};
</script>
