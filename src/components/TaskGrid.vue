<template>
  <div class="tasks-grid">
    <template v-if="tasks.length">
      <Task v-for="(task, id) in tasks" :key="id" @taskDeleted="$emit('taskDeleted', id)"
        @taskChanged="$emit('taskChanged', id )" :task="task">
      </Task>
    </template>
    <p class="no-task" v-else>Suas tarefas estão em dia 😉</p>
  </div>
</template>

<script>
import Task from './Task.vue'
export default {
  components: {
    Task
  },
  props: {
    tasks: {
      type: Array,
      required: true
    }
  }
}
</script>

<style  scoped>
.tasks-grid {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.tasks-grid .task {
  margin: 10px;
}

.no-task {
  color: #AAA;
  font-size: 1.7rem;
}
</style>