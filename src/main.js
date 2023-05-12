import { createApp } from 'vue'
import store from './stores/index.js'
import App from './App.vue'
import router from './router'

import VCalendar from 'v-calendar'
import VueGoodTablePlugin from 'vue-good-table-next'

import 'vue-good-table-next/dist/vue-good-table-next.css'
import 'v-calendar/style.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import './assets/main.css'
import {DB} from './services/firebase'

const app = createApp(App)
app.use(store);
app.use(router).use(VCalendar).use(VueGoodTablePlugin)

app.mount('#app')
