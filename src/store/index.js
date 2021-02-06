import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    add: '输入',
    todo: [],
    suc: [],
    del: []
  },
  mutations: {
    AddWaitList(state, payload) {
      state.todo.push(payload)
    },
    AddSucList(state, payload) {
      state.suc.push(payload)
    },
    AddDelList(state, payload) {
      state.del.push(payload)
    }
  },
  actions: {},
  modules: {}
})
