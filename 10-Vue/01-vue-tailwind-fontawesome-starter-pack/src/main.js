import { createApp } from "vue"
import App from "./App.vue";
import router from "./router";
import "./assets/tailwind.css"

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret, faThumbsUp } from '@fortawesome/free-solid-svg-icons'
// import { faCircleCheck } from '@fortawesome/free-regular-svg-icons'

import './assets/tailwind.css'

/* add icons to the library */
library.add(faUserSecret, faThumbsUp)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(router).mount("#app");
