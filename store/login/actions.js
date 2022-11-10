export default {
    async login({ commit }, data) {
      // make request
      sessionStorage.setItem("isLoggedIn", true)
      await this.$axios.$post("Blog/insertlogin", data, { progress: true }).then(res => {
        const user = res.loginRes
        commit("setUser", user)
        this.$router.replace({ path: '/dashboard-admin' })
      })
    //   return res.data;
    },
    singOut({ commit }) {
      commit("singOut")
      this.$router.replace({ path: '/dashboard-admin/signin' })
    }
}
  