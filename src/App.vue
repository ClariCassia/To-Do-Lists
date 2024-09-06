<template>
  <div id="app">
    <h1>Tarefas</h1>
    <NewTaskVue @taskAdded="addNewTask" :tasks="tasks"></NewTaskVue>
    <TaskGrid :tasks="tasks" @taskDeleted="deleteTask"></TaskGrid>
  </div>
</template>

<script>
import TaskGrid from './components/TaskGrid.vue'
import NewTaskVue from './components/NewTask.vue'
export default {
  components: {
    TaskGrid,
    NewTaskVue
  },
  data() {
    return {
      tasks: []
    }
  },
  methods: {
    addNewTask(newTask) {
      const { name, pending = true } = newTask;
      this.tasks.push({ name, pending });
    },
    deleteTask(id) {
      this.tasks.splice(id, 1);
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
