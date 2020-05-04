import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pageHeadings: [{
        name: "home",
        ids: ["#top", "#experience", "#skills", "#projects"],
        titles: ["Top", "Work Experience", "skills", "Projects"],
        icons: ["fa fa-arrow-up", "fa fa-briefcase", "fa fa-cogs", "fa fa-code"],
      },
      {
        name: "about",
        ids: ["#top", "#fun-facts", "#education", "#whoIAm", "#gallery"],
        titles: ["Top", "Fun Facts", "Education", "Passion", "Gallery"],
        icons: ["fa fa-arrow-up", "insert_emoticon", "fa fa-graduation-cap", "fa fa-fire", "collections"],
      }
    ],
    isDark: true
  },
  getters: {
    getNavData: (state) => (name) => {
      return state.pageHeadings.find(item => item.name == name);
    }
  },
  mutations: {
    changeBg(state) {
      state.isDark = !state.isDark
    }

  }
})