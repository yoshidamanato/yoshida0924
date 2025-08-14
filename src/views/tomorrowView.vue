<template>
  <v-container>
    <v-card>
      <v-card-title>タスク登録</v-card-title>
      <v-card-text>
        <v-text-field label="ID" v-model="id" type="number" dense outlined />
        <v-text-field label="タスク" v-model="task" dense outlined />
        <v-text-field label="日付" v-model="day" type="date" dense outlined />
        <v-text-field label="締切" v-model="deadline" type="date" dense outlined />
        <v-select
          label="優先度"
          v-model="priority"
          :items="['低🔵', '中🟢', '高🟡','重要🟠','緊急🔴']"
          dense outlined
        />
      </v-card-text>
      <v-card-actions>
        <v-btn color="primary" block @click="insert">登録</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>


<script>
export default {
  data() {
    return {
      id: '',
      task: '',
      day: '',
      deadline: '',
      priority: ''
    }
  },
  methods: {
    insert() {
      this.$store.dispatch('product/insertTask', {
        id: this.id,
        task: this.task,
        day: this.day,
        deadline: this.deadline,
        priority: this.priority
      })
    }
  }
}
</script>
