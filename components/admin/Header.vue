<template>

  <div>
    <div class="card w-full h-fit rounded bg-white px-4 py-2.5 flex justify-between lg:justify-end">
      <div class="lg:hidden" v-on:click="toggleNavbar()">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
          class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </div>

      <div class="flex">
        <div class="rounded-full w-6 h-6 p-1 mt-1 mr-2 border-2 border-green-400">
          <img src="../../assets/images/user-head.svg" class="w-fit h-fit mr-2" alt="">
        </div>
        <p class="mt-1">Admin</p>
      </div>
    </div>

    <!-- Sidebar Mobile -->
    <div v-bind:class="{ hidden: !showMenu, block: showMenu }" class="sidebar w-9/12 lg:hidden z-10 -mt-12 absolute">
      <div class="w-11/12 mx-auto">
        <div class="flex place-content-between">
          <img src="../../assets/images/logo2.png" class="w-2/4 h-fit my-4" alt="">
          <button class="" type="button">
            <img src="../../assets/icons/close-button.svg" v-on:click="toggleNavbar()" alt="" />
          </button>
        </div>
        <p class="font-semibold text-white">Dashboard</p>
        <div class="flex mt-4">
          <img src="../../assets/images/user.svg" class="mr-2" alt="">
          <h3 class="text-white text-sm">Profile</h3>
        </div>
        <div class="flex mt-4">
          <img src="../../assets/images/home.svg" class="mr-2" alt="">
          <h3 class="text-white text-sm">Create Blog</h3>
        </div>
        <div class="flex mt-4">
          <img src="../../assets/images/edit.svg" class="mr-2" alt="">
          <h3 class="text-white text-sm">Manage Existing Blog</h3>
        </div>
      </div>
    </div>
  </div>

</template>
<script>
  export default {
    name: 'Header',
    data() {
      return {
        showMenu: false,
      }
    },
    methods: {
      toggleNavbar: function () {
        this.showMenu = !this.showMenu;
      },
    }
  }

</script>
<style scoped>
  .sidebar {
    height: 100vh;
    overflow: hidden;
    background: #041721;
  }

</style>

