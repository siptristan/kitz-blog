export default {
    async publish({ commit }, data) {
      // make request
        const sendData = await this.$axios.$post("https://kitzdev.ottimo.one/api/Blog/insertblog", data, { progress: true })
        commit("setItem", {})
        this.$router.replace({ path: "/admin/article" })
    //   return res.data;
    },
    async saveDraft({ commit }, data) {
      // make request
      const sendData = await this.$axios.$post("https://kitzdev.ottimo.one/api/Blog/insertblog", data, { progress: true })
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
      await this.$axios.$get(`https://kitzdev.ottimo.one/api/Blog/getdatablogphysician/${id}`, { progitemss: true })
      .then(res => {
        dispatch("pagingData", {response: res, mutate: "setArticleData", range: 5})
      })
    },
    // async getAllBlog({ commit }, i) {
    //   await this.$axios.$get(`https://localhost:5002/api/Blog/getallblog/page=${i}`, { progress: true })
    //   .then(res => {
    //     // console.log(res.Retval)
    //     // dispatch("pagingData", {response: res, mutate: "setAllBlog", range: 5})
    //     commit("setAllBlog", res.Retval)
    //   })
    // },
    async getHompage({ commit }) {
      await this.$axios.$get(`https://kitzdev.ottimo.one/api/Blog/gethomepagedata`, { progress: true })
      .then(res => {
        commit("setAllBlog", res)
      })
    },
    async getBlogById({ commit }, data) {
      await this.$axios.$get(`https://kitzdev.ottimo.one/api/Blog/getdatablogbyid/${data.slug}`, { progress: true })
      .then(async (res) => {
        commit("setItem", res.Retval)
      })
    },
    async getRelatedBlog({ commit }, data) {
      await this.$axios.$get(`https://kitzdev.ottimo.one/api/Blog/getrelatedblog/${data.id}/page=${data.page}`)
        .then(resData => {
          // dispatch("pagingData", {response: resData, mutate: "setRelatedBlog", range: 3})
          commit("setRelatedBlog", resData.Retval)
        })
    },
    async getComment({ commit }, id) {
      await this.$axios.$get(`https://kitzdev.ottimo.one/api/blog/getcommentblog/${id}`).then(res => {
        commit("setComment", res.Retval)
      })
    },
    async getCategory({ commit }) {
      await this.$axios.$get("https://kitzdev.ottimo.one/api/blog/getblogcategory").then(res => {
        commit("setCategory", res.Retval)
      })
    },
    async getDashboard({ commit }, id) {
      await this.$axios.$get(`https://kitzdev.ottimo.one/api/Blog/getdashboarddata/${id}`).then(res => {
        commit("setDashboard", res)
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
      let deleteData = await this.$axios.$post(`https://kitzdev.ottimo.one/api/blog/deleteblog/`, {BlogID: id})
      .then(() => {
        commit("deleteBlog", id)
      }) 
    },
    async reply({ dispatch }, data) {
      await this.$axios.$post(`https://kitzdev.ottimo.one/api/blog/insertreplycomment`, data).then(res => {
        // this.$router.replace({ path: `/admin/article/${data.BlogID}` })
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
          dispatch("getComment", data.BlogID)
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
    },
    async postComment({ dispatch }, data) {
      await this.$axios.$post('https://kitzdev.ottimo.one/api/Blog/insertcomment', data).then( res => {
        if (res.result = true) {
          this.$swal({
            toast: true,
            icon: 'success',
            title: 'Comment Sent',
            position: 'top-end',
            showConfirmButton: false,
            timer: 1000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', this.$swal.stopTimer)
              toast.addEventListener('mouseleave', this.$swal.resumeTimer)
            }
          }).then(() => {
            dispatch("getBlogById", data.BlogID)
          })
        }
      })
    },
    async postCategory({ dispatch }, data) {
      await this.$axios.$post("https://kitzdev.ottimo.one/api/Blog/insertcategory", data).then(res => {
        if(res.result == true) {
          this.$swal({
            toast: true,
            icon: 'success',
            title: 'Comment Sent',
            position: 'top-end',
            showConfirmButton: false,
            timer: 1000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', this.$swal.stopTimer)
              toast.addEventListener('mouseleave', this.$swal.resumeTimer)
            }
          }).then(() => {
            dispatch("getCategory")
          })
        }
      })
    },
    async PostLog({commit}, data) {
      await this.$axios.$post(`https://kitzdev.ottimo.one/api/Blog/insertlog`, data).then(res => {
        console.log(data, res);
      })
    },
}
  