import { createStore } from 'vuex'

const store = createStore({
  state: {
    profile:null,
    isAuthenticated: false
  },

  getters: {
    loggedIn(state) {
      return state.profile !== null
    },

    getProfile(state) {
      return state.profile
    },
    getAuth(state){
      return state.isAuthenticated
    }

  },
  mutations: {

    setProfile(state, profile) {
      state.profile = profile
      localStorage.setItem('profile', JSON.stringify(profile))
    },

    setAuth(state, data){
      console.log(data)
        state.isAuthenticated = data;
      
    }

    
  },
  actions: {
    destroyProfile({ commit }) {
      commit('setProfile', null)
      localStorage.removeItem('profile')
      // remove cookie from axios
      delete axios.defaults.headers.common['Authorization']
    }
  }
})

export default store;