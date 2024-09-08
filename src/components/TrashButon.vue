<template>
    <div>
        <button title="Deletar todas as Tarefas" @click="DeleteAllTasks">
            <font-awesome-icon icon="trash" />
        </button>    
    </div>
</template>

<script>
export default {
  props: {
    tasks: {
      type: Array,
      required: true
    }
  },

  methods: {
    DeleteAllTasks() {
      const confirm = window.confirm('Tem certeza que deseja deletar todas as tarefas?')
      confirm && this.tasks.splice(0, this.tasks.length)
    }
  }
}
</script>

<style scoped>
button {
    background: none;
    color: #263238;
    cursor: pointer;
    font-size: 1.3rem;
    border: none;
}

button:hover {
    color: #546E7A;
}
</style>