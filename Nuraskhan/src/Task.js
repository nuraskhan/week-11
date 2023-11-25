import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import Greeting from "@/Greeting.vue";
import Task from "@/Task.vue";

// createApp(App).mount('#app')
const app = createApp(Task)
app.mount('#app')
