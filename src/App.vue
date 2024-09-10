<template>
  <div id="app">

    <div class="container">
      <h1>Minhas Tarefas</h1>
      <img :src="img" alt="Prancheta de tarefas" class="logo">
    </div>

    <NewTaskVue @taskAdded="addNewTask" :tasks="tasks"></NewTaskVue>

    <TasksProgress :progress="processed" :tasks="tasks">

    </TasksProgress>

    <TaskGrid @taskDeleted="deleteTask" @taskChanged="tooglePedding" :tasks="tasks"></TaskGrid>

  </div>
</template>

<script>

import TaskGrid from './components/TaskGrid.vue'
import NewTaskVue from './components/NewTask.vue'
import TasksProgress from './components/Tasks-Progress.vue';
import img from './images/IMG1.png';
import TrashButon from './components/TrashButon.vue';
import './assets/responsive.css';

export default {

  components: {
    TaskGrid,
    NewTaskVue,
    TasksProgress,
    TrashButon
  },

  data() {
    return {
      tasks: [],
      img
    }
  },

  computed: {
    processed() {
      const total = this.tasks.length
      const done = this.tasks.filter(t => !t.pending).length
      return Math.round((done / total) * 100) || 0
    }
  },

  watch: {
    tasks: {
      deep: true,
      handler() {
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
      },
    }
  },

  methods: {
    addNewTask(newTask) {
      const { name, pending = true } = newTask;
      const id = Date.now();
      this.tasks.push({ id, name, pending });
    },
    deleteTask(id) {
      this.tasks = this.tasks.filter(task => task.id !== id);
    },
    tooglePedding(id) {
      const task = this.tasks.find(t => t.id === id);
      if (task) {
        task.pending = !task.pending;
      }
    }
  },
  created() {
    const json = localStorage.getItem('tasks')
    const arrayLocal = JSON.parse(json)
    Array.isArray(arrayLocal) ? this.tasks = arrayLocal : this.tasks = []
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
  margin: 0 0 5px 0;
  font-weight: 300;
  font-size: 4rem;
  filter: drop-shadow(black 2px 2px 2px);
}

.container {
  display: flex;
  align-items: center;
  justify-content: center;
}

img {
  width: 120px;
  margin-bottom: 20px;
  height: auto;
  filter: drop-shadow(black 2px 2px 2px);
}
</style>
