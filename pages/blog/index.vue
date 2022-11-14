<template>
  <div class="w-11/12 mx-auto mt-8">
      <div class="my-10">
        <div class="heading">
          <h1 class="text-4xl text-center font-semibold">Blog and Article</h1>
          <p class="mt-4 font-normal text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>

      <form>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 w-10/12 mx-auto">
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
            <option value="">Or choose by category</option>
            <option v-for="(item, i) in category" :key="i" :value="item.CategoryName">{{ item.CategoryName }}</option>
          </select>
        </div>
      </form>

      <div class="my-10">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div
            v-for="(item, i) in blogs"
            :key="i"
            class="blog-items max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <img class="rounded-t-lg w-full" src="../../assets/images/search_bg.png" alt="">
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
      </div>
    </div>
</template>

<script>
  export default {
    name: 'BlogPage',
    layout: 'Layout',
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
        itemSelect: ''
      }
    },
    created() {
      this.$store.dispatch("blog/getAllBlog")
      this.$store.dispatch("blog/getCategory")
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
