import { createApp } from 'vue'
import "./style.css"
import App from './App.vue'
import 'uno.css'
import './samples/node-api'

createApp(App)
  .mount('#app')
  .$nextTick(() => {
    postMessage({ payload: 'removeLoading' }, '*')
  })
