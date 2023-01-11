<template>
  <div class="w-11/12 md:w-8/12 mx-auto my-10">
    <div class="heading my-8">
      <h1 class="text-4xl font-bold">{{ detail.Title }}</h1>
    </div>
    <div class="flex my-4">
      <img src="../../assets/images/logo.png" class="w-12 mr-4 rounded-full" alt="">
      <div class="mt-1">
        <p class="text-sm font-semibold">{{ detail.PhysicianName ?? '-' }}</p>
        <p class="text-xs font-semibold text-gray-400">{{ $moment(detail.DatePublish).format('DD MMM YYYY') }}</p>
      </div>
    </div>
    <div class="my-2">
      <p class="text-sm font-semibold">{{ detail.CategoryName }}</p>
    </div>
    <div class="w-full">
      <img :src="`https://kitzdev.ottimo.one/appdata/blog/${detail.Slug}/${detail.MainPicture}`" class="w-full" alt="">
    </div>
    <span class="content my-4" v-html="detail.Content"></span>
    <div class="my-3">
      <p class="text-sm font-semibold">Tag</p>
      <div class="flex my-2">
        <span
          v-for="(item, i) in tags"
          :key="i"
          class="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">{{item}}</span>
      </div>
    </div>
    <div class="my-8">
      <h2 class="text-2xl font-semibold my-4">Related Article</h2>
      <div v-if="related.length > 0" class="grid grid-cols-3">
        <div
          v-for="(item, i) in related"
          :key="i"
          class="blog-items mx-2 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
          <img class="rounded-t-lg w-full" :src="`https://kitzdev.ottimo.one/appdata/blog/${item.Slug}/${item.MainPicture}`" alt="">
          <div class="blog-content p-5">
            <h5 class="mb-1 text-lg font-bold tracking-tight text-gray-900 dark:text-white">{{ item.Title }}</h5>
            <p class="text-gray-700 text-sm font-semibold mb-1">{{ item.CategoryName }}</p>
            <p class="text-sm h-24 overflow-hidden" v-html="item.Content"></p>
            <!-- <h4 class="hidden">{{ item.CategoryName }}</h4> -->
            <!-- <p class="text-content h-24 overflow-hidden mb-3 font-normal text-sm text-gray-700 dark:text-gray-400"
            v-html="item.Content"></p> -->
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
      <div v-else class="flex justify-center"><p>Data tidak ditemukan</p></div>
      <div v-if="related.length == 3 || index > 1" class="w-full h-fit flex justify-end py-4">
        <!-- <Pagination :blogs="blogs" :page="blog.page" /> -->
        <nav aria-label="Page navigation example">
          <ul class="inline-flex items-center -space-x-px">
            <li>
              <a href="javascript:void(0)" @click="showPage(index - 1)" class="block py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                <span class="sr-only">Previous</span>
                <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
              </a>
            </li>
            <!-- <li v-for="(item, i) in related" :key="i">
              <a href="javascript:void(0)" @click="showPage(item.page)" class="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">{{ item.page }}</a>
            </li> -->
            <li>
              <a href="javascript:void(0)" @click="showPage(index + 1)" class="block py-2 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                <span class="sr-only">Next</span>
                <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div v-else></div>
    </div>
    <div v-if="isLoggedIn" class="my-8">
      <h2 class="text-2xl font-semibold my-4">Add Comment</h2>
        <div class="mb-6">
          <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Comment</label>
          <textarea 
            id="message" 
            rows="4"
            class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter your comment...."
            v-model="Comment"
          >
          </textarea>
        </div>
        <button
          @click="sendComment"
          class="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
          Publish post
        </button>
    </div>
    <div v-else class="flex justify-center"><p>Login untuk mulai berkomentar</p></div>

    <div v-if="detail.LstCommentBlog != null">
      <h2 class="text-2xl font-semibold my-4">Comment</h2>
      <div class="grid grid-cols-1 gap-4">
        <div v-for="(item, i) in detail.LstCommentBlog" :key="i" class="bg-white rounded-lg border shadow-md px-3 py-1">
          <div class="my-4">
            <div class="mt-1">
              <p class="text-sm font-semibold">{{ item.Name }}</p>
              <p class="text-xs font-semibold text-gray-400">{{ $moment(item.DateComment).format("DD MMM YYYY") }}</p>
            </div>
            <div>
              <p>{{ item.Comment }}</p>
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
    <div v-else class="w-full h-fit flex justify-center">
      <p>Belum ada komentar</p>
    </div>
  </div>
</template>

<script>
// import 'infinite-scroll/dist/infinite-scroll.pkgd.js';
  export default {
    name: 'DetailPage',
    layout: 'Layout',
    computed: {
      detail() {
        return this.$store.state.blog.items
      },
      related() {
        return this.$store.state.blog.relatedBlog
      },
      isLoggedIn () {
        return this.$store.state.login.isLoggedIn
      }
    },
    data() {
      return {
        tags: [],
        Comment: '',
        relate: [],
        index: 1,
      }
    },
    async created() {
      const { ip } = await this.$axios.$get("http://api.ipify.org/?format=json")
      await this.$store.dispatch("blog/getBlogById", { slug: this.$route.params.detail })
      this.$store.dispatch("blog/getRelatedBlog", { id: this.detail.IDBlog, page: 1 })
      const val = { 
        IpUser: `${ip}`, 
        IDBlog: this.detail.IDBlog, 
        GCEventStatus: "KT11_001" 
      }
      this.$store.dispatch("blog/PostLog", val)
      this.tags = await this.detail.Tag.split(",") 
      this.showPage(1)
    },
    methods: {
      async sendComment() {
        const data = {
          IDBlog: this.$route.params.detail,
          Name: this.$store.state.login.userData.FullName,
          Comment: this.Comment
        }
        await this.$store.dispatch("blog/postComment", data)
      },
      showPage(i) {
        if (i > 0) {
          this.index = i
          this.$store.dispatch("blog/getBlogById", { slug: this.$route.params.detail, page: i })
        }
      },
    }
  }
</script>
<style scoped>
/* .content h2 { font-size: 1.5em !important; font-weight: bolder !important}
.content h3 { font-size: 1.17em !important; font-weight: bolder !important}
.content h4 { font-size: 1em !important; font-weight: bolder !important}
.content ul li { list-style-type: circle !important; margin-left: 1em !important;}
.content ol li { list-style-type: decimal !important; margin-left: 1em !important;}
.content p { font-size: 16px !important; margin-top: 1em !important; margin-bottom: 1em !important} */
</style>