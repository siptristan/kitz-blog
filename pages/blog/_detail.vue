<template>
  <div class="w-11/12 md:w-8/12 mx-auto my-10">
    <div class="heading my-8">
      <h1 class="text-4xl font-bold">{{ detail.Title }}</h1>
    </div>
    <div class="flex my-4">
      <img src="../../assets/images/logo.png" class="w-12 mr-4 rounded-full" alt="">
      <div class="mt-1">
        <p class="text-sm font-semibold">{{ detail.PhysicianName ?? '-' }}</p>
        <p class="text-xs font-semibold text-gray-400">{{ $moment(detail.DatePublish).format('DD MM YYYY') }}</p>
      </div>
    </div>
    <div class="my-2">
      <p class="text-sm font-semibold">Kesehatan, COVID-19</p>
    </div>
    <div class="w-full">
      <img src="../../assets/images/search_bg.png" class="w-full" alt="">
    </div>
    <div class="content my-4" v-html="detail.Content"></div>
    <div class="my-3">
      <p class="text-sm font-semibold">Tag</p>
      <div class="flex my-2">
        <span
          class="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">Default</span>
        <span
          class="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">Default</span>
        <span
          class="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">Default</span>
        <span
          class="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">Default</span>
      </div>
    </div>
    <div class="my-8">
      <h2 class="text-2xl font-semibold my-4">Related Article</h2>
      <div class="grid grid-cols-3">
        <div
          class="blog-items mx-2 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
          <img class="rounded-t-lg w-full" src="../../assets/images/search_bg.png" alt="">
          <div class="blog-content p-5">
            <h5 class="mb-1 text-lg font-bold tracking-tight text-gray-900 dark:text-white">Judul</h5>
            <p class="text-gray-700 text-sm font-semibold mb-1">Category</p>
            <p class="text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit nesciunt quas iure, soluta ipsa,
              accusantium distinctio inventore error maxime beatae, consequuntur accusamus minima tempora delectus
              labore. Qui recusandae earum facere.</p>
            <!-- <h4 class="hidden">{{ item.CategoryName }}</h4> -->
            <!-- <p class="text-content h-24 overflow-hidden mb-3 font-normal text-sm text-gray-700 dark:text-gray-400"
            v-html="item.Content"></p> -->
            <NuxtLink to="#">
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
        <div
          class="blog-items mx-2 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
          <img class="rounded-t-lg w-full" src="../../assets/images/search_bg.png" alt="">
          <div class="blog-content p-5">
            <h5 class="mb-1 text-lg font-bold tracking-tight text-gray-900 dark:text-white">Judul</h5>
            <p class="text-gray-700 text-sm font-semibold mb-1">Category</p>
            <p class="text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit nesciunt quas iure, soluta ipsa,
              accusantium distinctio inventore error maxime beatae, consequuntur accusamus minima tempora delectus
              labore. Qui recusandae earum facere.</p>
            <!-- <h4 class="hidden">{{ item.CategoryName }}</h4> -->
            <!-- <p class="text-content h-24 overflow-hidden mb-3 font-normal text-sm text-gray-700 dark:text-gray-400"
            v-html="item.Content"></p> -->
            <NuxtLink to="#">
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
        <div
          class="blog-items mx-2 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
          <img class="rounded-t-lg w-full" src="../../assets/images/search_bg.png" alt="">
          <div class="blog-content p-5">
            <h5 class="mb-1 text-lg font-bold tracking-tight text-gray-900 dark:text-white">Judul</h5>
            <p class="text-gray-700 text-sm font-semibold mb-1">Category</p>
            <p class="text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit nesciunt quas iure, soluta ipsa,
              accusantium distinctio inventore error maxime beatae, consequuntur accusamus minima tempora delectus
              labore. Qui recusandae earum facere.</p>
            <!-- <h4 class="hidden">{{ item.CategoryName }}</h4> -->
            <!-- <p class="text-content h-24 overflow-hidden mb-3 font-normal text-sm text-gray-700 dark:text-gray-400"
            v-html="item.Content"></p> -->
            <NuxtLink to="#">
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
    <div class="my-8">
      <h2 class="text-2xl font-semibold my-4">Add Comment</h2>
      <form action="#">
        <div class="mb-6">
          <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Comment</label>
          <textarea id="message" rows="4"
            class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter your comment...."></textarea>
        </div>
        <button type="submit"
          class="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
          Publish post
        </button>
      </form>
    </div>

    <div>
      <h2 class="text-2xl font-semibold my-4">Comment</h2>
      <div class="grid grid-cols-1 gap-4">
        <div class="bg-white rounded-lg border shadow-md px-3 py-1">
          <div class="my-4">
            <div class="mt-1">
              <p class="text-sm font-semibold">Aldi Muhammad Rahim</p>
              <p class="text-xs font-semibold text-gray-400">19 Oktober 2022</p>
            </div>
            <div>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint necessitatibus esse quibusdam repellat
                deleniti tempore a eaque dolores impedit sit ullam nulla excepturi sunt incidunt quasi corporis,
                perferendis saepe iste.</p>
            </div>
          </div>
        </div>
        <div class="bg-white rounded-lg border shadow-md px-3 py-1">
          <div class="my-4">
            <div class="mt-1">
              <p class="text-sm font-semibold">Aldi Muhammad Rahim</p>
              <p class="text-xs font-semibold text-gray-400">19 Oktober 2022</p>
            </div>
            <div>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint necessitatibus esse quibusdam repellat
                deleniti tempore a eaque dolores impedit sit ullam nulla excepturi sunt incidunt quasi corporis,
                perferendis saepe iste.</p>
            </div>
          </div>
        </div>
        <div class="bg-white rounded-lg border shadow-md px-3 py-1">
          <div class="my-4">
            <div class="mt-1">
              <p class="text-sm font-semibold">Aldi Muhammad Rahim</p>
              <p class="text-xs font-semibold text-gray-400">19 Oktober 2022</p>
            </div>
            <div>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint necessitatibus esse quibusdam repellat
                deleniti tempore a eaque dolores impedit sit ullam nulla excepturi sunt incidunt quasi corporis,
                perferendis saepe iste.</p>
            </div>
          </div>
        </div>
      </div>
      <div class="my-8 text-center">
        <button type="submit"
          class="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
          Load More
        </button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'DetailPage',
    layout: 'Layout',
    computed: {
      detail() {
        return this.$store.state.blog.viewBlog
      }
    },
    created() {
      this.$store.dispatch("blog/viewBlog", this.$route.params.detail)
    }
  }

</script>
