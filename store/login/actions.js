export default {
    async login({ commit }, data) {
      // make request
      await this.$axios.$post("Blog/insertlogin", data, { progress: true }).then(res => {
        const user = res.loginRes
        commit("setUser", user)
        commit("setLogin", true)
        this.$router.go(-1)
      })
    //   return res.data;
    },
    signOut({ commit }) {
      commit("signOut")
      this.$router.replace({ path: "/" })
    }
}
  