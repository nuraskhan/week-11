import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import Greeting from "@/Greeting.vue";
import Login from "@/Login.vue";

// createApp(App).mount('#app')
const app = createApp(Login)
app.mount('#app')
