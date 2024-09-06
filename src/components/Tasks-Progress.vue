<template>
  <div v-if="tasks.length" class="tasks-progress">
    <span class="progress-value">{{ progress }}%</span>
    <div class="progress-bar" :style="{ width: progress + '%' }"></div>
  </div>
</template>

<script>
export default {
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
  
