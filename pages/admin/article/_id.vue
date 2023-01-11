<template>
  <div class="mr-4 w-full shadow-md my-8 px-5 py-5 relative bg-white rounded-xl">
    <h1 class="text-md font-semibold">
      Article Comment
    </h1>
    <p class="text-sm font-normal text-gray-400">
      Daftar Komentar Pada Artikel & Blog
    </p>
    <div class="overflow-x-auto relative my-8">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="py-3 px-6">
              #
            </th>
            <th scope="col" class="py-3 px-6">
              Name
            </th>
            <th scope="col" class="py-3 px-6">
              Comment
            </th>
            <th scope="col" class="py-3 px-6">
              Date
            </th>
            <th scope="col" class="py-3 px-6 text-center">
              Action
            </th>
          </tr>
        </thead>
        <tbody v-if="comment.length > 0">
          <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700" v-for="(item, i) in comment" :key="i">
            <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              {{ i + 1 }}
            </th>
            <td class="py-4 px-6">
              {{ item.Name }}
            </td>
            <td class="py-4 px-6">
              {{ item.Comment }}
            </td>
            <td class="py-4 px-6">
              {{ $moment(item.DateComment).format("DD MMM YYYY") }}
            </td>
            <td class="py-4 px-6 flex justify-center">
              <a href="javascript:void(0)" @click="reply({BlogID: item.BlogID, ParentID: item.CommentID})" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="white" stroke="green" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit-3"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg></a> 
            </td>
          </tr>
        </tbody>
        <tbody v-else>
          <tr>
            <td colspan="5" class="text-center py-3">Data Belum Ada</td>
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
      comment () {
        return this.$store.state.blog.comment
      },
      name () {
        return this.$store.state.login.userData.ParamedicName
      }
    },
    // data() {
    //     return {
    //         CommentID: 0,
    //         BlogID: 0,
    //         name: '',
    //         parentid: 0
    //     }
    // },
    created() {
      this.$store.dispatch("blog/getComment", this.$route.params.id)
    },
    methods: {
      reply(val) {
          this.$swal({
            title: 'Reply Comment',
            input: 'textarea',
            inputLabel: 'Your Comment',
            inputValue: '',
            showCancelButton: true,
            inputValidator: (value) => {
                if (!value) {
                    return 'You need to write something!'
                }
            }
        }).then(res => {
            const data = {
                Comment: res.value,
                BlogID: val.BlogID,
                Name: this.name,
                ParentID: val.ParentID
            }
            this.$store.dispatch("blog/reply", data)
        })
      },
    //   deleteBlog(id) {
    //     this.$swal({
    //         title: 'are you sure ?',
    //         text: 'Data will be deleted',
    //         icon: 'warning',
    //         showCancelButton: true,
    //         confirmButtonText: 'okay',
    //         cancelButtonText: 'cancel'
    //     }).then(res => {
    //       if (res.isConfirmed) {
    //         this.$store.dispatch("blog/deleteBlog", id)
    //       }
    //     })
    //   }
    }
  }

</script>
