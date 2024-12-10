import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '../node_modules/bootstrap/scss/bootstrap.scss'
import * as bootstrap from 'bootstrap'
import VueTyped from 'vue3-typed-js'

const app = createApp(App)

app.use(VueTyped)
app.use(router)

app.mount('#app')
