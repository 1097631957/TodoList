import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    add: '输入',
    todo: []
  },
  mutations: {
    AddWaitList(state, payload) {
      state.todo.push(payload)
      console.log(state)
      console.log(payload)
    }
  },
  actions: {},
  modules: {}
})
