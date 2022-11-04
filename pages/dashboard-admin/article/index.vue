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
          <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
            <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              1
            </th>
            <td class="py-4 px-6">
              Title Article/Blog
            </td>
            <td class="py-4 px-6">
              Category
            </td>
            <td class="py-4 px-6">
              Physician
            </td>
            <td class="py-4 px-6">
              <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a> |
              <a href="#" class="font-medium text-red-600 dark:text-blue-500 hover:underline">Delete</a>
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
    layout: "admin",
  }

</script>
