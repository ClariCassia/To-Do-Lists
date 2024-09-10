<template>
  <div class="tasks-grid">
    <template v-if="tasks.length">
      <Task v-for="task in tasks" :key="task.id" @taskDeleted="$emit('taskDeleted', task.id)"
        @taskChanged="$emit('taskChanged', task.id)" :task="task">
      </Task>
    </template>
    <p class="no-task" v-else>Suas tarefas estão em dia 😉</p>
  </div>
</template>

<script>
import Task from './Task.vue'
import '../assets/responsive.css'
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

<style>
.tasks-grid {
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
}

.tasks-grid .task {
  margin: 10px;
}

.no-task {
  color: #AAA;
  font-size: 1.3rem;
}
</style>