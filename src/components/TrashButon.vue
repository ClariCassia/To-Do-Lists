<template>
  <div>
    <button title="Deletar todas as Tarefas" @click="showModal = true">
      <font-awesome-icon icon="trash" />
    </button>

    <Modal
      v-if="showModal"
      :message="'Tem certeza que deseja deletar todas as tarefas?'"
      :isVisible="showModal"
      @confirm="deleteAllTasks"
      @cancel="showModal = false"
    />
  </div>
</template>

<script>
import Modal from './Modal.vue'

export default {
  components: {
    Modal
  },
  props: {
    tasks: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      showModal: false
    }
  },
  methods: {
    deleteAllTasks() {
      this.tasks.splice(0, this.tasks.length);
      this.showModal = false; 
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
  transition-duration: 9ms;
  transition: 0.3s ease;
}
</style>
