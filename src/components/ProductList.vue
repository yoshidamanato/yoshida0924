<template>
  <v-container>
    <h1>ToDoリスト</h1>

    <v-card
      v-for="(task, index) in taskList"
      :key="index"
      class="pa-3 mb-3"
      outlined
    >
      <h2>タスク: {{ task.task }}</h2>
      <p>日付: {{ task.day }}</p>
      <p>締切: {{ task.deadline }}</p>
      <p>優先度: {{ task.priority }}</p>
      <p>ID: {{ task.ID }}</p>
    </v-card>
  </v-container>
</template>



<script>
export default {
  computed: {
    taskList() {
      return this.$store.getters['product/getTaskList'];
    }
  },
  mounted() {
    this.$store.dispatch('product/selectTask');
  }
};
</script>
