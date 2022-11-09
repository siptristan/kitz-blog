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
            <th scope="col" class="py-3 px-6">
              #
            </th>
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
          <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700" v-for="(item, i) in blogs" :key="i">
            <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              {{ i + 1 }}
            </th>
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
              <a href="javascript:void(0)" @click="editBlog(item.IDBlog)" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="white" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit-3"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg></a> 
                <p class="mx-2">|</p>
              <a href="javascript:void(0)" @click="deleteBlog(item.IDBlog)" class="font-medium text-red-600 dark:text-blue-500 hover:underline">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash-2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
              </a>
            </td>
          </tr>

        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
  export default {
    name: "AdminBlogIndex",
    layout: "Admin",
    computed: {
      blogs () {
        return this.$store.state.blog.allBlog
      }
    },
    created() {
      this.$store.dispatch("blog/getBlog", this.$store.state.login.userData.ParamedicID)
    },
    methods: {
      editBlog(id) {
        this.$store.dispatch("blog/edit", id)
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
      }
    }
  }

</script>
