export default {
    async login({ commit }, data) {
      // make request
      await this.$axios.$post("Blog/insertlogin", data, { progress: true }).then(res => {
        const user = res.loginRes
        commit("setLogin", true)
        commit("setUser", user)
        this.$router.go(-1)
      })
    //   return res.data;
    },
    singOut({ commit }) {
      commit("singOut")
      this.$router.go(-1)
    }
}
  