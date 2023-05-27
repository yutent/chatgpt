import { createApp } from 'vue'
import App from './app.vue'

import store from './store'

const app = createApp(App)

app.use(store).mount('#app')
