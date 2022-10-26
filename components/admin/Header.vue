<template>
  <div class="card w-full h-fit rounded bg-white px-4 py-2.5 flex justify-between">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
      class="w-6 h-6">
      <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    </svg>
    
    <div class="flex">
      <div class="rounded-full w-6 h-6 p-1 mt-1 mr-2 border-2 border-green-400">
        <img src="../../assets/images/user-head.svg" class="w-fit h-fit mr-2" alt="">
      </div>
      <p class="mt-1">Admin</p>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'Header',
    data() {
      return {}
    },
    methods: {}
  }

</script>
<style scoped>
</style>
