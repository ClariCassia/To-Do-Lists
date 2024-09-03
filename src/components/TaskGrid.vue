<template>
  <div class="tasks">
  
    <div v-for="task in tasks" :key="task.name">{{ task.name }}</div>
  
  </div>
</template>

<script>
export default {
  name: 'TaskGrid',
  props: {
    tasks: {
      type: Array,
      required: true
    }
  }
}
</script>

<style  scoped>

</style>