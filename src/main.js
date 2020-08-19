import '@/assets/css/base.css'
import '@/assets/css/reset.css'
import 'core-js/stable'
import 'regenerator-runtime/runtime'
import { router } from '@/router'
import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)
app.use(router)

app.mount('#app')
