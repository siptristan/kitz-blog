export default {
    async save({ commit }, data) {
      // make request
      const sendData = await this.$axios.$post("Blog/insertblog", data, { progress: true })
      commit("setItem", data)
    //   return res.data;
    }
}
  