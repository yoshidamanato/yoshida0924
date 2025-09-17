<template>
  <v-app>
    <ComTab />  
    <router-view />
  </v-app>
</template>

<script>
import ComTab from "@/components/ComTab.vue"; 

export default {
  name: "CommentView",
  components: {
    ComTab, 
    
  },
};
</script>
