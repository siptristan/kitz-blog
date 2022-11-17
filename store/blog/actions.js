export default {
    async publish({ commit }, data) {
      // make request
        const sendData = await this.$axios.$post("Blog/insertblog", data, { progress: true })
        commit("setItem", {})
        this.$router.replace({ path: "/admin/article" })
    //   return res.data;
    },
    async saveDraft({ commit }, data) {
      // make request
      const sendData = await this.$axios.$post("Blog/insertblog", data, { progress: true })
      commit("setItem", {})
    //   return res.data;
    },
    async pagingData({ commit }, items) {
      let data = []
      let val = []
      for (let i = 0; i < items.response.Retval.length; i++) {
        val.push(items.response.Retval[i])
        let index = data.length
        if (index == 0) {
          index = 1
        }
        if( val.length == items.range ) {
          if (data.length > 0) {
            data.push({ page: data.length + 1, value: val })
          } else {
            data.push({ page: index, value: val })
          }
          val = []
        }
        if (i == items.response.Retval.length - 1 && i != 0 && val.length > 0) {
            data.push({ page: index + 1, value: val })
          val = []
        }
      }
      commit(items.mutate, data)
    },
    async getBlog({ dispatch }, id) {
      await this.$axios.$get(`Blog/getdatablogphysician/${id}`, { progitemss: true })
      .then(res => {
        dispatch("pagingData", {response: res, mutate: "setArticleData", range: 5})
      })
    },
    async getAllBlog({ dispatch }) {
      await this.$axios.$get("Blog/getallblog", { progress: true })
      .then(res => {
        dispatch("pagingData", {response: res, mutate: "setAllBlog", range: 8})
      })
    },
    async getHompage({ commit }) {
      await this.$axios.$get(`Blog/gethomepagedata`, { progress: true })
      .then(res => {
        commit("setAllBlog", res)
      })
    },
    async getBlogById({ commit }, id) {
      await this.$axios.$get(`Blog/getdatablogbyid/${id}`, { progress: true })
      .then(res => {
        commit("setItem", res.Retval)
      })
    },
    async getComment({ commit }, id) {
      await this.$axios.$get(`blog/getcommentblog/${id}`).then(res => {
        commit("setComment", res.Retval)
      })
    },
    async getCategory({ commit }) {
      await this.$axios.$get("blog/getblogcategory").then(res => {
        commit("setCategory", res.Retval)
      })
    },
    async edit({ commit }, data) {
      commit("editBlog", data)
      this.$router.replace({ path: "/admin/article/edit-blog" })
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
    async reply({ dispatch }, data) {
      await this.$axios.$post(`blog/insertreplycomment`, data).then(res => {
        // this.$router.replace({ path: `/admin/article/${data.IDBlog}` })
        if (res.result) {
          this.$swal({
            toast: true,
            icon: 'success',
            title: 'Reply Sent',
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', this.$swal.stopTimer)
              toast.addEventListener('mouseleave', this.$swal.resumeTimer)
            }
          })
          dispatch("getComment", data.IDBlog)
        } else {
          this.$swal({
            toast: true,
            icon: 'danger',
            title: 'Send reply failed',
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', this.$swal.stopTimer)
              toast.addEventListener('mouseleave', this.$swal.resumeTimer)
            }
          })
        }
      })
    }
}
  