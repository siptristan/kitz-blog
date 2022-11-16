export default {
    setLogin(state, data) {
      state.isLoggedIn = data
    },
    setUser(state, data) {
        state.userData = data
        if (data.ParamedicID != null || data.ParamedicID != 0) {
          state.isPhysician = true
        }
    },
    signOut(state) {
      state.isLoggedIn = false
      state.isPhysician = false
      state.userData = {}
    }
  }
  
  