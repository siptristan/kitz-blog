export default {
    async login({ commit }, data) {
      // make request
      const sendData = await this.$axios.$post("Blog/insertlogin", data, { progress: true })
      console.log(sendData.loginRes)
      const user = sendData.loginRes
      commit("setLogin", data)
      commit("setUser", user)
      this.$router.replace({ path: '/dashboard-admin' })
    //   return res.data;
    }
}
  