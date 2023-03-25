
import { reactive } from 'vue'

const store = reactive({
  foo: 'bar',
  version: '0.4.0'
})

export default function (app) {
  app.config.globalProperties.$store = store
}
