<template>
  <div v-if="tasks.length" class="container">
    <p class="info-paragraph">Concluido</p>
    <div class="tasks-progress">
      <span class="progress-value"> {{ progress }}%</span>
      <div class="progress-bar" :style="{ width: progress + '%' }"></div>
    </div>
    <TrashButon></TrashButon>
  
  </div>
</template>

<script>
import TrashButon from './TrashButon.vue';

export default {
  components: {
    TrashButon
  },
  props: {
    progress: {
      type: Number,
      default: 0
    },
    tasks: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  width: 100%;
  margin-bottom: 20px;
}

.tasks-progress {
  position: relative;
  width: 50%;
  height: 15px;
  border: 1px solid #FFF;
  color: #FFF;
  border-radius: 8px;  
  display: flex;
  flex-direction: column;
  align-items: center;

}

.progress-bar {
  position: absolute;
  border-radius: 8px;
  height: 100%;
  background-color: #1565C0;
  width: 0;
  transition: 1s ease-in-out;
  align-self: start;
}

.progress-value {
  font-size: 0.7rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
}

.info-paragraph {
  font-size: 1rem;
  color: #FFF;
  margin: 0;
}

.displayprogress {
  width: 100%;
  display: flex;
  align-items: center;
  background-color: #1565C0;

}
</style>
