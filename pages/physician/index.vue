<template>
  <div class="w-11/12 mx-auto mt-8">
    <div class="my-10">
      <div class="heading">
        <h1 class="text-4xl text-center font-semibold">Physician</h1>
        <p class="mt-4 font-normal text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
    </div>

    <div class="grid grid-cols-5 gap-4">
      <div
        v-for="(item, i) in items"
        :key="i"
        class="w-full max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <div class="flex flex-col items-center py-10 px-5">
          <img class="mb-3 w-24 h-24 rounded-full shadow-lg" :src="item.PhotoUrl ?? `../../assets/images/logo.png`" alt="Bonnie image">
          <h5 class="h-16 mb-1 text-xl font-medium text-gray-900 dark:text-white text-center">{{ item.PhysicianName }}</h5>
          <span class="h-10 text-sm text-gray-500 dark:text-gray-400">{{ item.SpecialtyName }}</span>
          <div class="flex mt-4 space-x-3 md:mt-6">
            <NuxtLink :to="`/physician/${item.PhysicianID}`"><p
                class="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Detail</p>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
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
    created() {
      this.$store.dispatch("physician/getPhysician")
    }
  }

</script>
