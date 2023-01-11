export default {
    async login({ commit }, data) {
      // make request
      await this.$axios.$post("https://kitzdev.ottimo.one/api/Blog/insertlogin", data, { progress: true }).then(res => {
        const user = res.loginRes
        console.log(user)
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
  