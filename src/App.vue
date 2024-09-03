<template>
  <div id="app">
    <h1>Tarefas</h1>
    <NewTaskVue @taskAdded="addNewTask"></NewTaskVue>
    <TaskGrid :tasks="tasks"></TaskGrid>
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
      const sameName = t => t.name.toLowerCase() === newTask.name.toLowerCase()
      const reallyNew = this.tasks.filter(sameName).length == 0
      if (reallyNew) { //
        this.tasks.push({
          name: newTask.name,
          pending: newTask.pending || true
        })
      } else {
        alert('Tarefa ja existe! Use outro nome para uma nova tarefa.')
      }
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
