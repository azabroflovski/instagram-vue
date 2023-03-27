import { createApp } from 'vue'
import { createPinia } from 'pinia'

import { OhVueIcon, addIcons } from 'oh-vue-icons'

import * as MdIcons from 'oh-vue-icons/icons/md'

addIcons(...Object.values({ ...MdIcons }))

import App from './App.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component('v-icon', OhVueIcon)

app.mount('#app')
