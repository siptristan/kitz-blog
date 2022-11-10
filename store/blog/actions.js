export default {
    async publish({ commit }, data) {
      // make request
        const sendData = await this.$axios.$post("Blog/insertblog", data, { progress: true })
        commit("setItem", {})
        this.$router.replace({ path: "/dashboard-admin/article" })
    //   return res.data;
    },
    async saveDraft({ commit }, data) {
      // make request
      const sendData = await this.$axios.$post("Blog/insertblog", data, { progress: true })
      commit("setItem", {})
    //   return res.data;
    },
    async getBlog({ commit }, id) {
      await this.$axios.$get(`Blog/getdatablogphysician/${id}`, { progress: true })
      .then(res => {
        commit("setAllBlog", res.Retval)
      })
    },
    async getHompage({ commit }, id) {
      await this.$axios.$get(`Blog/gethomepagedata`, { progress: true })
      .then(res => {
        commit("setAllBlog", res)
      })
    },
    async edit({ commit }, id) {
      commit("editBlog", id)
      this.$router.replace({ path: "/dashboard-admin/article/create-blog" })
    },
    async viewBlog({ commit }, id) {
      commit("viewBlog", id)
    },
    async deleteBlog({ commit }, id) {
      let deleteData = await this.$axios.$post(`blog/deleteblog/`, {IDBlog: id})
      .then(() => {
        commit("deleteBlog", id)
      }) 
    },
}
  