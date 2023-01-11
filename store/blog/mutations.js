export default {
    setItem(state, data) {
      state.items = data
    },
    setAllBlog(state, data) {
      state.allBlog = data
    },
    setArticleData(state, data) {
      state.articleList = data
    },
    setComment(state, data) {
      state.comment = data
    },
    setCategory(state, data){
      state.category = data
    },
    setRelatedBlog(state, data){
      state.relatedBlog = data
    },
    setDashboard(state, data) {
      state.dashboard = data
    },
    editBlog(state, data) {
      state.articleList?.map( item => {
        if(item.page == data.page) {
          item.value.map(val => {
            if(val.BlogID == data.id) {
              state.items = val
            }
          })
        }
      })
    },
    viewBlog(state, id) {
      state.allBlog?.LstTopBlog?.map( item => {
        if(item.BlogID == id) {
          state.viewBlog = item
        }
      })
    },
    deleteBlog(state, id) {
      let index = state.allBlog?.findIndex((item) => item.BlogID == id)
      state.allBlog?.splice(index, 1)
    }
  }
  
  