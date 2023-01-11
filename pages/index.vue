<template>
  <div>
    <div class="w-11/12 mx-auto mt-8">
      <div class="grid grid-cols-1 md:grid-cols-2  gap-4">
        <div v-if="blogs != null && blogs.NewBlog != undefined" class="">
          <img :src="`https://kitzdev.ottimo.one/appdata/blog/${blogs.NewBlog[0].Slug}/${blogs.NewBlog[0].MainPicture}`" class="h-52 md:h-full rounded-xl drop-shadow-xl" alt="">
        </div>
        <div v-else class="">
          <img src="../assets/images/search_bg.png" class="w-full h-52 md:h-full rounded-xl drop-shadow-xl" alt="">
        </div>
        <div v-if="blogs != null && blogs.NewBlog != undefined" class="my-2 md:my-12">
          <div class="title text-3xl font-semibold">
            <p>{{ blogs.NewBlog[0].Title }}</p>
          </div>
          <div class="flex my-4">
            <img src="../assets/images/logo.png" class="w-12 mr-4 rounded-full" alt="">
            <div class="mt-1">
              <p class="text-sm font-semibold">{{ blogs.NewBlog[0].PhysicianName }}</p>
              <p class="text-xs font-semibold text-gray-400">{{ $moment(blogs.NewBlog[0].DatePublish).format('DD MMM yyyy') }}</p>
            </div>
          </div>
          <div class="text-content h-24 overflow-hidden text-sm font-normal text-gray-500 text-justify mt-4" v-html="blogs.NewBlog[0].Content">
          </div>
          <div class="mt-4">
            <NuxtLink :to="`/blog/${blogs.NewBlog[0].Slug}`">
              <p
                class="inline-flex items-center py-2 text-md font-semibold text-center text-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Read more
                <svg aria-hidden="true" class="ml-2 -mr-1 mt-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"></path>
                </svg>
              </p></NuxtLink>
          </div>
        </div>
        <div v-else class="my-2 md:my-12">
          <div class="title text-3xl font-semibold">
            <p></p>
          </div>
          <div class="flex my-4">
            <img src="../assets/images/logo.png" class="w-12 mr-4 rounded-full" alt="">
          </div>
          <div class="text-content h-24 overflow-hidden text-sm font-normal text-gray-500 text-justify mt-4">
            <p>Data Belum ada</p>
          </div>
          <div class="mt-4">
            <NuxtLink to="/blog/detail">
              <p
                class="inline-flex items-center py-2 text-md font-semibold text-center text-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Read more
                <svg aria-hidden="true" class="ml-2 -mr-1 mt-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"></path>
                </svg>
              </p></NuxtLink>
          </div>
        </div>
      </div>

      <!-- Lastest News -->
      <div class="mt-8 mb-8">
        <div class="flex place-content-between text-2xl font-semibold ">
          <p>Lastest News</p>
          <nuxt-link to="/blog"
            class="inline-flex items-center py-2 text-lg font-semibold text-center text-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            See All
          </nuxt-link>
        </div>
        <div v-if="blogs != null && blogs.LstTopBlog != undefined" class="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4 mb-4">
          <div
            v-for="(item, i) in blogs.LstTopBlog"
            :key="i"
            class="max-w-sm bg-white rounded-xl border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <img class="w-full h-40 rounded-tr-xl rounded-tl-xl" :src="`https://kitzdev.ottimo.one/appdata/blog/${item.Slug}/${item.MainPicture}`" alt="">
            <div class="p-5">
              <h5 class="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">{{ item.Title }}</h5>
              <p class="text-content h-24 overflow-hidden mb-3 font-normal text-sm text-gray-700 dark:text-gray-400" v-html="item.Content"></p>
              <NuxtLink :to="`/blog/${item.Slug}`">
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
        <div v-else class="flex justify-center items-center w-full h-32">
          <p>Data belum ada</p>
        </div>
      </div>

      <!-- Physician -->
      <div class="mt-8 mb-8">
        <div class="flex place-content-between text-2xl font-semibold ">
          <p>Popular Physician</p>
          <nuxt-link to="/physician"
            class="inline-flex items-center py-2 text-lg font-semibold text-center text-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            See All
          </nuxt-link>
        </div>
        <div v-if="blogs != null && blogs.LstTopPhysician != undefined" class="grid grid-cols-1 md:grid-cols-5 gap-4 mt-4 mb-4">
          <div
            v-for="(item, i) in blogs.LstTopPhysician"
            :key="i"
            class="w-full max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <div class="flex flex-col items-center py-10">
              <img class="mb-3 w-24 h-24 rounded-full shadow-lg" :src="item.PhotoUrl" alt="Bonnie image">
              <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white text-center">{{ item.PhysicianName }}</h5>
              <span class="text-sm text-gray-500 dark:text-gray-400">{{ item.SpecialtyName }}</span>
              <div class="flex mt-4 space-x-3 md:mt-6">
                <nuxt-link :to="`/physician/${item.PhysicianID}`"
                  class="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Detail</nuxt-link>
              </div>
            </div>
          </div>
        </div>
        <div v-else class="flex justify-center items-center w-full h-32">
          <p>Data belum ada</p>
        </div>
      </div>
    </div>
    <div class="mt-10"></div>
  </div>
</template>

<script>
  // import * as fs from 'fs';
  export default {
    name: 'IndexPage',
    layout: 'Layout',
    computed: {
      blogs () {
        return this.$store.state.blog.allBlog
      }
    },
    data(){
      return {
        count: 0
      }
    },
    async created() {
      await this.$store.dispatch("blog/getHompage")
    },
    methods: {
      // userVisit() {
      //   var dict = {"one" : [15, 4.5],
      //   "two" : [34, 3.3],
      //   "three" : [67, 5.0],
      //   "four" : [32, 4.1]};

      //   var dictstring = JSON.stringify(dict);

      //   fs.writeFile("thing.json", dictstring, function(err, result) {
      //       if(err) console.log('error', err);
      //   });
      // }
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
