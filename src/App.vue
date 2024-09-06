<template>
  <div id="app">
    <h1>Tarefas</h1>
    <TasksProgress :progress="processed" :tasks="tasks"></TasksProgress>
    <NewTaskVue @taskAdded="addNewTask" :tasks="tasks"></NewTaskVue>
    <TaskGrid @taskDeleted="deleteTask" @taskChanged="tooglePedding" :tasks="tasks"></TaskGrid>
  </div>
</template>

<script>
import TaskGrid from './components/TaskGrid.vue'
import NewTaskVue from './components/NewTask.vue'
import TasksProgress from './components/Tasks-Progress.vue';
export default {
  components: {
    TaskGrid,
    NewTaskVue,
    TasksProgress
  },
  data() {
    return {
      tasks: []
    }
  },
  computed: {
    processed() {
      const total = this.tasks.length
      const done = this.tasks.filter(t => !t.pending).length
      return Math.round((done / total) * 100) || 0
    }
  },
  methods: {
    addNewTask(newTask) {
      const { name, pending = true } = newTask;
      this.tasks.push({ name, pending });
    },
    deleteTask(id) {
      this.tasks.splice(id, 1);
    },
    tooglePedding(id) {
      this.tasks[id].pending = !this.tasks[id].pending
    }
  }
}
</script>

<style>
#app {
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

#app h1 {
  margin-bottom: 5px;
  font-weight: 300;
  font-size: 3rem;
}
</style>
