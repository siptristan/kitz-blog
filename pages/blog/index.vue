<template>
  <div class="w-11/12 mx-auto mt-8">
      <div class="my-10">
        <div class="heading">
          <h1 class="text-4xl text-center font-semibold">Blog and Article</h1>
          <p class="mt-4 font-normal text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>

      <form>
        <div class="flex gap-4 place-content-center w-10/12 mx-auto">
          <div class="w-full">
            <input 
              type="text" 
              id="simple-search"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter Title Blog / Article ..." required=""
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
        <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div
            v-for="(item, i) in blog.value"
            :key="i"
            class="blog-items max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <img class="rounded-t-lg w-full h-52" :src="`https://kitzdev.ottimo.one/appdata/blog/${item.Slug}/${item.MainPicture}`" alt="">
            <div class="blog-content p-5">
              <h5 class="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">{{ item.Title }}</h5>
              <h4 class="hidden">{{ item.CategoryName }}</h4>
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
        <div v-if="blogs.length > 0" class="w-full h-fit flex justify-end py-4">
          <!-- <Pagination :blogs="blogs" :page="blog.page" /> -->
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
        <div v-else></div>
      </div>
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
        blog: []
      }
    },
    async created() {
      await this.$store.dispatch("blog/getAllBlog")
      await this.$store.dispatch("blog/getCategory")
      this.showPage(1)
    },
    methods: {
      setItem() {
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
      showPage(i) {
        if(i > 0 && i <= this.blogs.length) {
          console.log(this.blogs)
          this.blogs.map(item => {
            if (item.page == i) {
              this.blog = item
            }
          })
        }
      },
      async reset() {
        await this.$store.dispatch("blog/getAllBlog")
        this.showPage(1)
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
