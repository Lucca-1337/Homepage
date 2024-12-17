import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '../node_modules/bootstrap/scss/bootstrap.scss'
import * as bootstrap from 'bootstrap'
import VueTyped from 'vue3-typed-js'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'


/* add icons to the library */
library.add(fas, fab, far)

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)

app.use(VueTyped)
app.use(router)

app.mount('#app')
