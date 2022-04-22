import { createStore } from 'vuex'
import sidebar from './modules/sidebar'
import getters from './getters'
import VuexPersistence from 'vuex-persist'

const vuexLocal = new VuexPersistence({
    storage: window.sessionStorage
})

const store = createStore({
  modules: {
    sidebar
  },
  getters,
  plugins: [vuexLocal.plugin]
})
export default store
