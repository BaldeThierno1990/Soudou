import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import router from './router'


//Bootstrap
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
//identification google



createApp(App).use(router).mount('#app')
