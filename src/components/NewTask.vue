<template>
  <div class="new-task">
    <input v-model="name" type="text" class="form-element"
      placeholder="Adicione uma nova tarefa" :class="{'input-error': nameError}"
      @keydown.enter="validateInput">
    <button @click="validateInput" class="form-element" title="Adicionar nova tarefa">+</button>
    <div><span v-if="nameError" class="error-message">{{ nameError }}</span></div>
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
  data() {
    return {
      name: '',
      nameError: "",
    }
  },
  emits: ['taskAdded'],
  methods: {
    validateInput() {
      this.nameError = "";
      if (!this.name.trim()) {
        this.nameError = 'Adicione um nome para uma nova tarefa';
        return
      }
      const taskExists = this.tasks.some(t => t.name.toLowerCase() === this.name.toLowerCase());
      if (taskExists) {
        this.nameError = 'Essa tarefa já existe! Use outro nome para uma nova tarefa.';
        return

      } else {
        this.addTask();
      }
    },
    addTask() {
      this.$emit('taskAdded', { name: this.name })
      this.name = ""
    }
  }
}
</script>

<style scoped>
.new-task {
  margin: 35px;
}

.form-element {
  outline: none;
  font-size: 2rem;
  border: 1px solid #FFF;
  padding: 5px 10px 8px;
  color: #FFF;
}

input.form-element {
  width: 500px;
  background: #FFF2;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;

}

button.form-element {
  border-left: none;
  background-color: #2196F3;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  cursor: pointer;
}

button:hover {
  background-color: #0c7cd5;
  transition: 0.3s ease, transform 0.2s ease;

}

.input-error {
  border: 1px solid #B73229;
}

.error-message {
  color: #B73229;
  font-size: 12px;
}
</style>