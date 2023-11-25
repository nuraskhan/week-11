import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import Greeting from "@/Greeting.vue";
import Listtems from "@/Listtems.vue";

// createApp(App).mount('#app')
const app = createApp(Listtems)
app.mount('#app')
