import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import Greeting from "@/Greeting.vue";

// createApp(App).mount('#app')
const app = createApp(Greeting)
app.mount('#app')
