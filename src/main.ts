import { createApp } from 'vue'
import axios from 'axios'
import store from './store'
import App from './App.vue'
import router from './router'

axios.interceptors.request.use(config => {
  store.commit('setLoading', true)
  return config
})
axios.interceptors.response.use(config => {
  store.commit('setLoading', false)
  return config
})
const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')
