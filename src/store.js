import { reactive } from 'vue'

const store = reactive({
  conversations: [],
  conversation: {
    id: '',
    tokens: 0,
    records: []
  },
  records: [],

  gpt: {
    apiKey: localStorage.getItem('API_KEY') || '',
    baseUrl: localStorage.getItem('BASE_URL') || '//api.openai.com',
    model: 'gpt-3.5-turbo',
    temperature: 0.8,
    top_p: 1,
    presence_penalty: 1,
    frequency_penalty: 0
  }
})

export default function (app) {
  app.config.globalProperties.$store = store
}
