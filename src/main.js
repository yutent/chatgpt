/**
 * {}
 * @author yutent<yutent.io@gmail.com>
 * @date 2023/05/29 18:36:30
 */

import 'es.shim'

import '@bd/ui/space/index.js'
import '@bd/ui/layer/index.js'
import '@bd/ui/tabs/index.js'
import '@bd/ui/slider/index.js'

import { createApp } from 'vue'
import App from './app.vue'

import store from './store'

const app = createApp(App)

app.use(store).mount('#app')
