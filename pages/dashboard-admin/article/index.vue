<template>
  <div class="mr-4 w-full shadow-md my-8 px-5 py-5 relative bg-white rounded-xl">
    <h1 class="text-md font-semibold">
      Article & Blog
    </h1>
    <p class="text-sm font-normal text-gray-400">
      Daftar Artikel & blog
    </p>

    <div>
      <div class="my-4">
        <nuxt-link class="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800" to="/dashboard-admin/article/create-blog">
          Add Article
        </nuxt-link>
      </div>
    </div>

    <div class="overflow-x-auto relative my-8">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <!-- <th scope="col" class="py-3 px-6">
              #
            </th> -->
            <th scope="col" class="py-3 px-6">
              Title
            </th>
            <th scope="col" class="py-3 px-6">
              Category
            </th>
            <th scope="col" class="py-3 px-6">
              Author
            </th>
            <th scope="col" class="py-3 px-6">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          <tr 
            class="bg-white border-b dark:bg-gray-900 dark:border-gray-700" 
            v-for="(item, i) in blog.value" 
            :key="i"
          >
            <!-- <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              {{ i + 1 }}
            </th> -->
            <td class="py-4 px-6">
              {{ item.Title }}
            </td>
            <td class="py-4 px-6">
              {{ item.Category ?? '-' }}
            </td>
            <td class="py-4 px-6">
              {{ item.PhysicianName ?? '-' }}
            </td>
            <td class="py-4 px-6 flex">
              <nuxt-link :to="`/dashboard-admin/article/${item.IDBlog}`">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="blue" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-message-circle"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
              </nuxt-link>
              <p class="mx-2">|</p>
              <a href="javascript:void(0)" @click="editBlog(blog.page, item.IDBlog)" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="white" stroke="green" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit-3"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg></a> 
                <p class="mx-2">|</p>
              <a href="javascript:void(0)" @click="deleteBlog(item.IDBlog)" class="font-medium text-red-600 dark:text-blue-500 hover:underline">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white" stroke="red" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash-2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
              </a>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="w-full h-fit flex justify-end py-4">
        <nav aria-label="Page navigation example">
          <ul class="inline-flex items-center -space-x-px">
            <li>
              <a href="javascript:void(0)" @click="showPage(blog.page - 1)" class="block py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                <span class="sr-only">Previous</span>
                <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
              </a>
            </li>
            <li v-for="(item, i) in blogs" :key="i">
              <a href="javascript:void(0)" @click="showPage(item.page)" class="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">{{ item.page }}</a>
            </li>
            <li>
              <a href="javascript:void(0)" @click="showPage(blog.page + 1)" class="block py-2 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                <span class="sr-only">Next</span>
                <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "AdminBlogIndex",
    layout: "Admin",
    computed: {
      blogs () {
        return this.$store.state.blog.articleList
      }
    },
    data() {
      return {
        blog: []
      }
    },
    created() {
      this.$store.dispatch("blog/getBlog", this.$store.state.login.userData.ParamedicID)
      this.showPage(1)
    },
    methods: {
      editBlog(page, id) {
        this.$store.dispatch("blog/edit", {page: page, id: id})
      },
      deleteBlog(id) {
        this.$swal({
            title: 'are you sure ?',
            text: 'Data will be deleted',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'okay',
            cancelButtonText: 'cancel'
        }).then(res => {
          if (res.isConfirmed) {
            this.$store.dispatch("blog/deleteBlog", id)
          }
        })
      },
      showPage(i) {
        if(i > 0 && i <= this.blogs.length) {
          this.blogs.map(item => {
            if (item.page == i) {
              this.blog = item
              console.log(item.page)
            }
          })
        }
      }
    }
  }

</script>
