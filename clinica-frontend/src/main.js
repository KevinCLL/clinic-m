import { createApp } from 'vue'
import { createHead } from '@vueuse/head'
import App from './App.vue'

// Styles
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './assets/css/styles.css'

// Extras
import pinia from './stores'
import router from './router'

// Crear la app
const app = createApp(App)
const head = createHead()

app.use(ElementPlus)
app.use(pinia)
app.use(router)
app.use(head)

app.mount('#app')
