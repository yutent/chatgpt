import { reactive } from 'vue'

const store = reactive({
  API_KEY: localStorage.getItem('API_KEY'),
  BASE_URL: localStorage.getItem('BASE_URL'),

  conversations: [],
  conversation: {
    id: '',
    lastMessageId: ''
  },
  records: []
})

export default function (app) {
  app.config.globalProperties.$store = store
}
