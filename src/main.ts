import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/mock/index'
import '@/style/index.scss'

import '@/assets/icon'



import SvgIcon from '@/components/SVGIcon/index.vue'



createApp(App).use(store).use(router).component('svg-icon', SvgIcon).mount('#app')
