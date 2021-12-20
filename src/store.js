import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    appTitle: process.env.VUE_APP_TITLE,
    dialog: false,
    search: null,
    diarys:[
      {
        id:"2020/10/31",
        title:"テストタイトル",
        article:"記事",
        date:"2021/11/30",
        dateTime: "23:59"
      }
    ]
  },
  mutations: {
    toggleDialog(state){
      state.dialog = !state.dialog
    },
    addDiary(state, diary) {
      let newDiary = {
        id: Date.now(),
        title: diary.title,
        article: diary.article,
        date: diary.date,
        dateTime: diary.dateTime,
      }
      state.diarys.push(newDiary)
    },
  },
  actions: {
    addDiary({ commit }, newDiary) {
      commit('addDiary', newDiary)
    },
  },
  getters: {
    diarysFiltered(state) {
      if (!state.search) {
        return state.diarys
      }
      return state.diarys.filter(diary =>
        diary.title.toLowerCase().includes(state.search.toLowerCase())
      )
    }
  }
})
