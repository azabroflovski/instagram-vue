import { createApp } from 'vue'
import { createPinia } from 'pinia'

import { OhVueIcon, addIcons } from 'oh-vue-icons'

import * as MdIcons from 'oh-vue-icons/icons/md'

import App from './App.vue'
import router from './router'

import './assets/main.css'

addIcons(...Object.values({ ...MdIcons }))

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component('VIcon', OhVueIcon)

app.mount('#app')
