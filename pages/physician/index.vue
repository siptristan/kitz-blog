<template>
  <div class="w-11/12 mx-auto mt-8">
    <div class="my-10">
      <div class="heading">
        <h1 class="text-4xl text-center font-semibold">Physician</h1>
        <p class="mt-4 font-normal text-center">Daftar dokter yang terdaftar</p>
      </div>
    </div>

    <div class="grid grid-cols-5 gap-4">
      <div
        v-for="(item, $index) in list"
        :key="$index"
        class="w-full max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 transition ease-in-out delay-150 hover:drop-shadow-lg hover:-translate-y-2">
        <div class="flex flex-col items-center py-10 px-5">
          <img class="mb-3 w-24 h-24 rounded-full shadow-lg" :src="item.PhotoUrl ?? '../../assets/images/profile.jpg'" alt="Bonnie image">
          <h5 class="h-16 mb-1 text-xl font-medium text-gray-900 dark:text-white text-center">{{ item.PhysicianName }}</h5>
          <span class="h-10 text-sm text-gray-500 dark:text-gray-400">{{ item.SpecialtyName }}</span>
          <div class="flex mt-4 space-x-3 md:mt-6">
            <a href="javascript:void(0)" @click="detail(item.PhysicianID)"><p
                class="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Detail</p>
            </a>
          </div>
        </div>
      </div>
    </div>
    <!-- <div v-if="items.length == 8 || index > 1" class="w-full h-fit flex justify-end py-4">
      <nav aria-label="Page navigation example">
        <ul class="inline-flex items-center -space-x-px">
          <li>
            <a href="javascript:void(0)" @click="showPage(index - 1)" class="block py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
              <span class="sr-only">Previous</span>
              <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
            </a>
          </li>
          <li>
            <a href="javascript:void(0)" @click="showPage(index + 1)" class="block py-2 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
              <span class="sr-only">Next</span>
              <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
            </a>
          </li>
        </ul>
      </nav>
    </div>
    <div v-else></div> -->
    <infinite-loading @infinite="infiniteHandler"></infinite-loading>
  </div>
</template>

<script>
  export default {
    name: 'PhysicianPage',
    layout: 'Layout',
    computed: {
      items () {
        return this.$store.state.physician.items
      }
    },
    data(){
      return {
        index: 1,
        list: []
      }
    },
    async created() {
      // await this.$store.dispatch("physician/getPhysician", 1)
      // await this.showPage(1)
    },
    methods: {
      infiniteHandler($state) {
        this.$axios.$get(
          `https://kitzdev.ottimo.one/api/blog/getallphysician/page=${this.index}`
        ).then(res => {
          if (res.lstEntity.length) {
            this.index += 1;
            this.list.push(...res.lstEntity);
            $state.loaded();
          } else {
            $state.complete();
          }
        });
      },
      // showPage(i) {
      //   if (i > 0) {
      //     this.index = i
      //     this.$store.dispatch("physician/getPhysician", i)
      //   }
      // },
      detail(id) {
        this.items.map(item => {
          if (item.PhysicianID == id) {
            this.$store.dispatch("physician/getDetailPhysician", item)
          }
        })
      }
    }
  }

</script>
