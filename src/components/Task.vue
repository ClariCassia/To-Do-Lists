<template>
  <div @click="handleClick" class="task" :class="stateClass" :title="stateTitle">
    <span @click="$emit('taskDeleted', task)" class="close" title="Deletar tarefa">x</span>
    <p>{{ task.name }}</p>
    <div v-if="showNotification" class="notification">{{ notificationText }}</div>
  </div>
</template>

<script>
import '../assets/responsive.css';
export default {
  props: {
    task: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      title: '',
      showNotification: false,
      notificationText: ''
    }
  },
  computed: {
    stateClass() {
      return {
        pending: this.task.pending,
        done: !this.task.pending
      }
    },
    stateTitle() {
      return this.task.pending ? 'Marcar como concluído' : 'Marcar como pendente'
    }
  },
  methods: {
    handleClick() {
      this.$emit('taskChanged', this.task);
      this.toggleTask();
    },
    toggleTask() {
      this.showNotification = true;
      this.notificationText = this.task.pending ? 'Tarefa marcada como pendente!' : 'Tarefa marcada como concluída!';
      setTimeout(() => {
        this.showNotification = false;
      }, 2000);
    },
  }
}
</script>

<style>
.task {
  position: relative;
  box-sizing: border-box;
  width: 450px;
  height: 40px;
  padding: 12px;
  border-radius: 8px;
  font-size: 1.3rem;
  font-weight: 300;
  cursor: pointer;
  user-select: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  filter: drop-shadow(black 1px 1px 1px);

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

.notification {
  position: absolute;
  top: 30px;
  left: 0;
  background-color: #333;
  color: #fff;
  padding: 5px;
  border-radius: 3px;
  font-size: 12px;
  white-space: nowrap;
}
</style>