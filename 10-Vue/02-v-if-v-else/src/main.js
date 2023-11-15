import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons'
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons'

import './assets/tailwind.css'

/* add icons to the library */
library.add(faUserSecret, faPlus, faCircleCheck, faTrash)

app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router)
app.mount('#app')
