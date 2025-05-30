import { createApp } from 'vue'
import { createHead } from '@vueuse/head'
import App from './App.vue'


import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './assets/css/styles.css'


import pinia from './stores'
import router from './router'


const app = createApp(App)
const head = createHead()

app.use(ElementPlus)
app.use(pinia)
app.use(router)
app.use(head)

app.mount('#app')
