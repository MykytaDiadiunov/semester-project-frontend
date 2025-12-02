import { createApp } from 'vue'
import { createPinia } from 'pinia'

import './style.scss'
import 'vfonts/Lato.css'
import 'vfonts/FiraCode.css'

import App from './App.vue'

import router from '@/router'
import i18n from '@/i18n'
import { useBaseComponents } from '@/composables'

const pinia = createPinia()
const baseComponent = useBaseComponents()

const app = createApp(App)

app.use(router)
app.use(pinia)
app.use(i18n)

baseComponent.initialize(app)

router.isReady().then(() => {
  app.mount('#app');
});