export default {
    setItem(state, data) {
      state.items = data
    },
    setAllBlog(state, data) {
      state.allBlog = data
    },
    editBlog(state, id) {
      state.allBlog.map( item => {
        if(item.IDBlog == id) {
          state.items = item
        }
      })
    },
    viewBlog(state, id) {
      state.allBlog.map( item => {
        if(item.IDBlog == id) {
          state.items = item
        }
      })
    },
    deleteBlog(state, id) {
      let index = state.allBlog.findIndex((item) => item.IDBlog == id)
      state.allBlog.splice(index, 1)
    }
  }
  
  