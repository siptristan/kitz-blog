<template>
  <div>
    <div class="w-11/12 mx-auto mt-8">
      <div class="grid grid-cols-1 md:grid-cols-2  gap-4">
        <div class="">
          <img src="../assets/images/search_bg.png" class="w-full h-52 md:h-full rounded" alt="">
        </div>
        <div class="my-2 md:my-12">
          <div class="title text-3xl font-semibold">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          </div>
          <div class="flex my-4">
            <img src="../assets/images/logo.png" class="w-12 mr-4 rounded-full" alt="">
            <div class="mt-1">
              <p class="text-sm font-semibold">Aldi Muhammad Rahim</p>
              <p class="text-xs font-semibold text-gray-400">19 Oktober 2022</p>
            </div>
          </div>
          <div class="view-content text-sm font-normal text-gray-500 text-justify mt-4">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, libero veniam quis non sunt voluptate,
              molestias, dolorum consequatur laborum commodi sapiente sed consequuntur optio ex eos quo. Blanditiis,
              vero nesciunt! Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum vel voluptatem tenetur
              nostrum, voluptates nulla quibusdam esse. Voluptates distinctio quis consequuntur accusantium a cumque
              repudiandae numquam velit consequatur corporis! Consectetur.</p>
          </div>
          <div class="mt-4">
            <NuxtLink to="/blog/detail">
              <a href="#"
                class="inline-flex items-center py-2 text-md font-semibold text-center text-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Read more
                <svg aria-hidden="true" class="ml-2 -mr-1 mt-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"></path>
                </svg>
              </a></NuxtLink>
          </div>
        </div>
      </div>

      <!-- Lastest News -->
      <div class="mt-8 mb-8">
        <div class="flex place-content-between text-2xl font-semibold ">
          <p>Lastest News</p>
          <a href="#"
            class="inline-flex items-center py-2 text-lg font-semibold text-center text-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            See All
          </a>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4 mb-4">
          <div
            v-for="(item, i) in blogs.LstTopBlog"
            :key="i"
            class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <img class="rounded-t-lg w-full" src="../assets/images/search_bg.png" alt="">
            <div class="p-5">
              <h5 class="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">{{ item.Title }}</h5>
              <p class="text-content h-24 overflow-hidden mb-3 font-normal text-sm text-gray-700 dark:text-gray-400" v-html="item.Content"></p>
              <NuxtLink :to="`/blog/${item.IDBlog}`">
                <p
                  class="inline-flex items-center py-2 text-sm font-semibold text-center text-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Read more
                  <svg aria-hidden="true" class="ml-2 -mr-1 mt-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"></path>
                  </svg>
                </p>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>

      <!-- Category -->
      <!-- <div class="mt-8 mb-8">
        <div class="text-2xl font-semibold text-center mb-8">
          <p>Categories</p>
          
        </div>
        <div class="grid grid-cols-2 gap-2 md:flex md:justify-center">
          <a href="#" class="mx-4 block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <img src="../assets/images/baby-boy.png" class="w-12 mx-auto" alt="">
            <h5 class="mb-2 text-center text-lg font-semibold tracking-tight text-gray-900 dark:text-white">Kesehatan Anak</h5>
          </a>
          <a href="#" class="mx-4 block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <img src="../assets/images/baby-boy.png" class="w-12 mx-auto" alt="">
            <h5 class="mb-2 text-center text-lg font-semibold tracking-tight text-gray-900 dark:text-white">Kesehatan Anak</h5>
          </a>
          <a href="#" class="mx-4 block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <img src="../assets/images/baby-boy.png" class="w-12 mx-auto" alt="">
            <h5 class="mb-2 text-center text-lg font-semibold tracking-tight text-gray-900 dark:text-white">Kesehatan Anak</h5>
          </a>
          <a href="#" class="mx-4 block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <img src="../assets/images/baby-boy.png" class="w-12 mx-auto" alt="">
            <h5 class="mb-2 text-center text-lg font-semibold tracking-tight text-gray-900 dark:text-white">Kesehatan Anak</h5>
          </a>
          <a href="#" class="mx-4 block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <img src="../assets/images/baby-boy.png" class="w-12 mx-auto" alt="">
            <h5 class="mb-2 text-center text-lg font-semibold tracking-tight text-gray-900 dark:text-white">Kesehatan Anak</h5>
          </a>
        </div>

      </div> -->

      <!-- Physician -->
      <div class="mt-8 mb-8">
        <div class="flex place-content-between text-2xl font-semibold ">
          <p>Popular Physician</p>
          <a href="#"
            class="inline-flex items-center py-2 text-lg font-semibold text-center text-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            See All
          </a>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-5 gap-4 mt-4 mb-4">
          <div
            class="w-full max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <div class="flex flex-col items-center py-10">
              <img class="mb-3 w-24 h-24 rounded-full shadow-lg" src="../assets/images/logo.png" alt="Bonnie image">
              <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">Bonnie Green</h5>
              <span class="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span>
              <div class="flex mt-4 space-x-3 md:mt-6">
                <a href="#"
                  class="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Detail</a>
              </div>
            </div>
          </div>
          <div
            class="w-full max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <div class="flex flex-col items-center py-10">
              <img class="mb-3 w-24 h-24 rounded-full shadow-lg" src="../assets/images/logo.png" alt="Bonnie image">
              <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">Bonnie Green</h5>
              <span class="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span>
              <div class="flex mt-4 space-x-3 md:mt-6">
                <a href="#"
                  class="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Detail</a>
              </div>
            </div>
          </div>
          <div
            class="w-full max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <div class="flex flex-col items-center py-10">
              <img class="mb-3 w-24 h-24 rounded-full shadow-lg" src="../assets/images/logo.png" alt="Bonnie image">
              <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">Bonnie Green</h5>
              <span class="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span>
              <div class="flex mt-4 space-x-3 md:mt-6">
                <a href="#"
                  class="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Detail</a>
              </div>
            </div>
          </div>
          <div
            class="w-full max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <div class="flex flex-col items-center py-10">
              <img class="mb-3 w-24 h-24 rounded-full shadow-lg" src="../assets/images/logo.png" alt="Bonnie image">
              <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">Bonnie Green</h5>
              <span class="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span>
              <div class="flex mt-4 space-x-3 md:mt-6">
                <a href="#"
                  class="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Detail</a>
              </div>
            </div>
          </div>
          <div
            class="w-full max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <div class="flex flex-col items-center py-10">
              <img class="mb-3 w-24 h-24 rounded-full shadow-lg" src="../assets/images/logo.png" alt="Bonnie image">
              <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">Bonnie Green</h5>
              <span class="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span>
              <div class="flex mt-4 space-x-3 md:mt-6">
                <a href="#"
                  class="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Detail</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-10"></div>
  </div>
</template>

<script>
  export default {
    name: 'IndexPage',
    layout: 'Layout',
    computed: {
      blogs () {
        return this.$store.state.blog.allBlog
      }
    },
    created() {
      this.$store.dispatch("blog/getHompage")
    }
  }

</script>
<style scoped>
.text-content > p {
  height: 8rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
