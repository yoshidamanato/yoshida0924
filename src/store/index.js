import Vue from 'vue'
import Vuex from 'vuex'

import product from './modules/product'
import chat from './modules/chat'
 
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    product,
    chat,
   
  }
})
