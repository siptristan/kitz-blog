<template>
  <div class="w-11/12 md:w-9/12 mx-auto mt-6">
      <img src="../../assets/images/bg.jpg" class="w-full md:h-96" alt="">
      <div class="flex z-10 -mt-6 md:-mt-8 ml-4 md:ml-16">
        <img class="mb-3 w-24 h-24 md:w-32 md:h-32 rounded-full shadow-lg" src="../../assets/images/profile.jpg"
          alt="Bonnie image">
        <div class="mt-8 md:mt-10 ml-2 md:ml-8">
          <h2 class="text-lg md:text-3xl font-semibold">{{ items.PhysicianName }}</h2>
          <p class="text-sm md:text-base font-normal text-gray-500">SPESIALIS {{ items.SpecialtyName }}</p>
        </div>
      </div>

      <!-- Jadwal -->
      <div class="mt-8">
        <h2 class="text-2xl font-semibold">
          Healthcare
        </h2>
        <ul class="list-decimal mt-2 ml-4">
          <li v-for="(item, i) in items.LstSitePhysician" :key="i">
            <p>{{ item.SiteName }}</p>
            <div class="bg-white px-3 py-4 mt-4">
              <h2 class="text-lg font-semibold text-center mb-4">Jadwal Praktek</h2>
              <div class="grid grid-cols-2 md:grid-cols-3 gap-4 justify-center my-4">

                <a v-for="(list, i) in item.LstPhysicianSchedule" :key="i" href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md transition ease-in-out delay-150 hover:drop-shadow-lg hover:-translate-y-2 hover:bg-blue-400 group/cards dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white transition ease-in-out delay-150 group-hover/cards:text-white">{{ list.DayNumber }}</h5>
                    <p class="font-normal text-gray-700 dark:text-gray-400 transition ease-in-out delay-150 group-hover/cards:text-white">{{ list.ScheduleName }}</p>
                </a>
              </div>
            </div>
          </li>
        </ul>
      </div>

      <!-- Specialist
      <div class="mt-8">
        <h2 class="text-2xl font-semibold">
          Specialist
        </h2>
        <ul class="list-disc mt-2 ml-4">
          <li>General Physician</li>
          <li>Family Physician</li>
          <li>Cardiologist</li>
          <li>Consultant Physician</li>
          <li>Diabetologist</li>
        </ul>
      </div> -->

      <div class="mt-8">
        <h2 class="text-2xl font-semibold">
          Physician Article
        </h2>
        <div v-if="blogs.length > 0 || blogs.length != null" class="grid grid-cols-4 gap-4 my-4">
          <div
            v-for="(item, i) in blogs"
            :key="i"
            class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <img class="rounded-t-lg w-full" src="../../assets/images/search_bg.png" alt="">
            <div class="p-5">
              <h5 class="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology
                acquisitions 2021</h5>
              <div class="flex my-4">
                <img src="../../assets/images/logo.png" class="w-8 mr-4 rounded-full" alt="">
                <div class="mt-1">
                  <p class="text-sm font-semibold">Aldi Muhammad Rahim</p>
                </div>
              </div>
              <p class="mb-3 font-normal text-sm text-gray-700 dark:text-gray-400">Here are the biggest enterprise
                technology acquisitions of 2021 so far, in reverse chronological order.</p>
              <p class="text-xs font-semibold text-gray-400">19 Oktober 2022</p>
              <NuxtLink to="/blog/detail">
                <a href="#"
                  class="inline-flex items-center py-2 text-sm font-semibold text-center text-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Read more
                  <svg aria-hidden="true" class="ml-2 -mr-1 mt-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"></path>
                  </svg>
                </a>
              </NuxtLink>
            </div>
          </div>
        </div>
        <div class="flex justify-center items-center w-full h-96">
          <p>Dokter belum memiliki artikel/blog</p>
        </div>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'DetailPhysician',
    layout: 'Layout',
    computed: {
      items () {
        return this.$store.state.physician.detail
      },
      blogs () {
        return this.$store.state.physician.blogs
      },
    },
    async created() {
    }
  }

</script>
