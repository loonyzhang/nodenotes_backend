import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import { create, NButton } from 'naive-ui'
import 'virtual:windi.css'

const naive = create({
  components: [
    NButton
  ]
})

createApp(App)
  .use(router)
  .use(naive)
  .mount('#app')
