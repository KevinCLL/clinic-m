import { createApp } from 'vue'
import { createHead } from '@vueuse/head'
import App from './App.vue'


import './assets/css/styles.css'
import './styles/theme.css'


import pinia from './stores'
import router from './router'


const app = createApp(App)
const head = createHead()

app.use(pinia)
app.use(router)
app.use(head)

app.mount('#app')
