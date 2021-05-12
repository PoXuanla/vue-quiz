import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    question:[],
    userAnswer:[],
    isArrivedHome:false
  },
  mutations: {
    pushQuestion(state,data){
      state.question.push(data)
    },
    pushUserAnswer(state,data){
      state.userAnswer.push(data)
    },
    arrivedHome(state){
      state.isArrivedHome = true
      console.log("arrive")
    },
    initQA(state){
      state.question = []
      state.userAnswer = []
    }
  },
  actions: {
  },
  modules: {
  }
})
