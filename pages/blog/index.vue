<template>
  <div class="w-11/12 mx-auto mt-8">
      <div class="my-10">
        <div class="heading">
          <h1 class="text-4xl text-center font-semibold">Blog and Article</h1>
          <p class="mt-4 font-normal text-center">Daftar blog/artikel yang dapat dibaca</p>
        </div>
      </div>

      <form>
        <div class="flex gap-4 place-content-center w-10/12 mx-auto">
          <div class="w-full">
            <input 
              type="text" 
              id="simple-search"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter Title Blog / Article ..."
              v-model="itemInput"
              @keyup="setItem()"
              >
          </div>
          <select id="countries"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            v-model="itemSelect"
            @change="onSelect"
            >
            <option value="">Choose by category</option>
            <option v-for="(item, i) in category" :key="i" :value="item.CategoryName">{{ item.CategoryName }}</option>
          </select>
          <div>
            <button @click="reset" class="inline-flex w-fit items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">Reset</button>
          </div>
          </div>
      </form>

      <div class="my-10">
        <div v-if="list.length > 0" class="container grid grid-cols-1 md:grid-cols-4 justify-center gap-6">
          <div
            v-for="(item, $index) in list"
            :key="$index"
            class="mx-auto md:mx-0 md:col-span-2 lg:col-span-1 blog-items max-w-sm bg-white rounded-2xl border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 transition ease-in-out delay-150 hover:drop-shadow-lg hover:-translate-y-2">
            <NuxtLink :to="`/blog/${item.Slug}`">
            <img class="rounded-t-lg w-full h-52" :src="`https://kitzdev.ottimo.one/appdata/blog/${item.Slug}/${item.MainPicture}`" alt="">
            <div class="blog-content p-5">
              <h5 class="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">{{ item.Title }}</h5>
              <h4 class="hidden">{{ item.CategoryName }}</h4>
              <p class="text-content h-24 overflow-hidden mb-3 font-normal text-sm text-gray-700 dark:text-gray-400" v-html="item.Content"></p>
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
            </div>
            </NuxtLink>
          </div>
        </div>
        <div v-else class="flex justify-center"><p>Data tidak ditemukan</p></div>
      </div>
      <infinite-loading id="infinite-elm" @infinite="infiniteHandler"></infinite-loading>
    </div>
</template>

<script>
  import { Pagination } from '../index.js'
  export default {
    name: 'BlogPage',
    layout: 'Layout',
    components: {
      Pagination
    },
    computed: {
      blogs () {
        return this.$store.state.blog.allBlog
      },
      category () {
        return this.$store.state.blog.category
      }
    },
    data(){
      return {
        itemInput: '',
        itemSelect: '',
        index: 1,
        list: [],
        infiniteId: +new Date(),
      }
    },
    async created() {
    },
    async mounted() {
      await this.$store.dispatch("blog/getCategory")
    },
    methods: {
      infiniteHandler($state) {
        this.$axios.$get(
          `https://kitzdev.ottimo.one/api/Blog/getallblog/page=${this.index}`
        ).then(res => {
          if (res.Retval.length) {
            this.index += 1;
            this.list.push(...res.Retval);
            $state.loaded();
          } else {
            $state.complete();
          }
        });
      },
      setItem() {
        document.querySelector("#infinite-elm").classList.add("hidden")
        let filter = this.itemInput.toUpperCase()
        let items = document.getElementsByClassName("blog-items")
        
        for (let i = 0; i < items.length; i++) {
          let content = items[i].getElementsByClassName("blog-content")
          let val = content[0].getElementsByTagName("h5")[0]
          let txtValue = val.textContent || val.innerText;
          console.log(txtValue)
          if (txtValue.toUpperCase().indexOf(filter) > -1) {
            items[i].classList.remove("hidden");
          } else {
            items[i].classList.add("hidden");
          }
        }
      },
      onSelect() {
        let filter = this.itemSelect.toUpperCase()
        let items = document.getElementsByClassName("blog-items")
        
        for (let i = 0; i < items.length; i++) {
          let content = items[i].getElementsByClassName("blog-content")
          let val = content[0].getElementsByTagName("h4")[0]
          let txtValue = val.textContent || val.innerText;
          if (txtValue.toUpperCase().indexOf(filter) > -1) {
            items[i].classList.remove("hidden");
          } else {
            items[i].classList.add("hidden");
          }
        }
      },
      // async showPage(i) {
      //   if (i > 0) {
      //     this.index = i
      //     await this.$store.dispatch("blog/getAllBlog", this.index)
      //     this.list = this.blogs
      //   }
      // },
      async reset() {
        await this.infiniteHandler()
      }
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
