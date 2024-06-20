import { createApp } from 'vue'
import router from './router';
import App from './App.vue'
import './index.css';


import '@headlessui/vue'; 
import './assets/main.css'
import '@heroicons/vue';


const app = createApp(App);




app.use(router)

app.mount('#app')
