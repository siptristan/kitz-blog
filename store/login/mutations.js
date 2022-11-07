export default {
    setLogin(state, data) {
      state.isLoggedIn = data
    },
    setUser(state, data) {
        state.userData = data
    },
    singOut(state) {
      state.isLoggedIn = false
      state.userData = {}
    }
  }
  
  