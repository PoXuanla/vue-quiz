import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    question:[],
    userAnswer:[],
  },
  mutations: {
    pushQuestion(state,data){
      state.question.push(data)
    },
    pushUserAnswer(state,data){
      state.userAnswer.push(data)
    },
    clearData(state){
      state.question = []
      state.userAnswer = []
    }
  },
  actions: {
  },
  modules: {
  }
})
