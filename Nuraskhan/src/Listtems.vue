<script>
export default {
  data() {
    return{
      fruits: [
        { id: 1, name: 'Apple' },
        { id: 2, name: 'Banana' },
        { id: 3, name: 'Orange' },
      ],
      fruit: ""
    }
  },
  methods: {
    add() {
      if (this.fruit.trim() !== '') {
        const key = this.fruits.length + 1;
        this.fruits.push({ id: key, name: this.fruit });
        this.fruit = ''; // Clear the input field
      }
    },
    deletion(index) {
      this.fruits.splice(index, 1);
    }
  }
}
</script>

<template>
  <h1>My List of Fruits</h1>

  <ul>
    <li v-for="(fruit, index) in fruits" :key="index">
      {{ fruit.name }}
       <button @click="deletion(index)">Remove</button>
    </li>
  </ul>
  <div>
    <label for="fruit">Add a new fruit:</label>
    <input type="text" id="fruit" v-model="fruit">
    <button @click="add()">Add</button>
  </div>
</template>

<style scoped>
ul{
  list-style: none;
}
li{
  padding: 10px;
  border:1px solid;
}
</style>