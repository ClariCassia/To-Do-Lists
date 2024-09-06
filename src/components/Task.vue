<template>
  <div @click="$emit('taskChanged', task)" class="task" :class="stateClass" title="Clique para marcar como concluída">
    <span @click="$emit('taskDeleted', task)" class="close" title="Deletar tarefa">x</span>
    <p>{{ task.name }}</p>
  </div>
</template>
  
  <script>
export default {
  props: {
    task: {
      type: Object,
      required: true
    }
  },
  computed: {
    stateClass() {
      return {
        pending: this.task.pending,
        done: !this.task.pending
      }
    }
  }
}
  </script>
  
  <style scoped>
.task {
    position: relative;
    box-sizing: border-box;
    width: 350px;
    height: 150px;
    padding: 10px;
    border-radius: 8px;
    font-size: 2rem;
    font-weight: 300;
    cursor: pointer;
    user-select: none;
    display: flex;
    justify-content: center;
    align-items: center
  }
  
  .pending {
    border-left: 12px solid #B73229;
    background-color: #F44336;
  }
  
  .pending .close {
    background-color: #B73229;
  }
  
  .done {
    color: #DDD;
    border-left: 12px solid #0a8f08;
    background-color: #4CAF50;
    text-decoration: line-through;
  }
  
  .done .close {
    background-color: #0a8f08;
  }
  
  .close {
    position: absolute;
    right: 10px;
    top: 10px;
    font-size: 0.9rem;
    font-weight: 600;
    height: 20px;
    width: 20px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
  }
  
  .close:hover {
    background-color: #42545eb7;
    transition: 0.3s ease, transform 0.2s ease;
  }
</style>
  