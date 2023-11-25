<script>
export default {
  data(){
    return {
      name: ""
    }
  },
  computed:{
    getName(){
      return this.name;
    }
  }

}

</script>

<template>
  <h1>Hello, {{name === "" ? "World!": getName }}</h1>
  <input type="text" v-model="name" placeholder="Enter the name." >
</template>
<style scoped>

</style>