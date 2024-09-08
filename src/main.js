import './assets/base.css'

import { createApp } from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fas);

// Criando a aplicação Vue
const app = createApp(App)

// Registrando o componente do Font Awesome
app.component('font-awesome-icon', FontAwesomeIcon)

// Montando a aplicação
app.mount('#app')
