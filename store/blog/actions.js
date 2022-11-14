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
        let data = []
        let val = []
        for (let i = 0; i < res.Retval.length; i++) {
          val.push(res.Retval[i])
          let index = data.length
          if (index == 0) {
            index = 1
          }
          if( val.length == 5 ) {
            data.push({ page: index, value: val })
            val = []
          }
          if (i == res.Retval.length - 1) {
            data.push({ page: index + 1, value: val })
            val = []
          }
        }
        commit("setArticleData", data)
      })
    },
    async getAllBlog({ commit }, id) {
      await this.$axios.$get("Blog/getallblog", { progress: true })
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
      this.$router.replace({ path: "/dashboard-admin/article/edit-blog" })
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
        // this.$router.replace({ path: `/dashboard-admin/article/${data.IDBlog}` })
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
  