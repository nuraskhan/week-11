<script>
export default {
  data() {
    return{
      tasks: [
        { title: 'Go to GYM', completed: false }
      ],
      task: ''
    }
  },
  methods: {
    change(index) {
      this.tasks[index].completed = !this.tasks[index].completed;
    },
    add() {
      if (this.task.trim() !== '') {
        this.tasks.push({ title: this.task, completed: false });
        this.task = '';
      }
    }
  }
}
</script>

<template>
  <h1>Task List</h1>
  <ul>
    <li v-for="(task, index) in tasks" :key="index">
      <span :class="{ 'completed': task.completed }">{{ task.title }}</span>
      <button @click="change(index)">
        {{ task.completed ? 'Doesn\' completed' : 'Completed' }}
      </button>
    </li>
  </ul>

  <div>
    <label for="task">Add a new task:</label>
    <input type="text" id="task" v-model="task">
    <button @click="add">Add Task</button>
  </div>
</template>

<style scoped>
.completed {
  text-decoration: line-through;
  color: #888;
}
</style>